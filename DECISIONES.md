# Documento de Decisiones de Arquitectura y Configuración
**Proyecto:** `ikomi-next-patrick-pajares`  
**Curso:** Desarrollo de Aplicaciones Web Avanzado: FullStack  
**Institución:** Tecsup  

---

## Parte 1: Decisiones de Configuración Inicial (Criterio 1)

### 1.1 y 1.2 Tabla de Decisiones

| Opción Elegida | Alternativa Descartada | Justificación Orientada al Proyecto IKOMI PERÚ |
| :--- | :--- | :--- |
| **JavaScript (.jsx)** | TypeScript (.tsx) | Se priorizó agilidad en el desarrollo de la interfaz estática e interactiva de IKOMI PERÚ, JS es mejor cuando el prpoyecto será pequeño, además es menos configuración y conceptos adicionales. |
| **Tailwind CSS** | CSS Modules / Bootstrap | Tailwind CSS ofrece clases de utilidad atómicas que permiten replicar con precisión el diseño corporativo de IKOMI (colores primarios azul/rojo, espaciados y tipografía) sin generar código CSS redundante ni lidiar con la sobreescritura de estilos rígidos propios de Bootstrap. |
| **Carpeta `src/`** | Raíz limpia (sin `src/`) | Aísla completamente el código fuente de la aplicación (`src/app`, `src/components`, `src/data`) de los archivos de configuración en la raíz (`package.json`, `tailwind.config.js`, `next.config.js`), manteniendo la estructura del proyecto ordenada y escalable. |
| **App Router (`app/`)** | Pages Router (`pages/`) | Es la arquitectura estándar de Next.js moderna basada en Server Components por defecto. Facilita la creación de layouts persistentes para la marca IKOMI, enrutamiento intuitivo por carpetas y la carga diferida con `loading.js`. |
| **ESLint** | Sin Linter | Garantiza la calidad del código, detecta errores sintácticos comunes y asegura el cumplimiento de buenas prácticas en componentes de React antes de enviar el código a producción o realizar el `npm run build`. |

---

### 1.4 Ventajas de Next.js frente a una SPA de React (ej. Vite) para IKOMI PERÚ

Una Single Page Application (SPA) tradicional creada con Vite o Create React App renderiza el HTML vacío en el cliente (`<div id="root"></div>`) y utiliza JavaScript para construir el DOM en el navegador. Para un sitio corporativo de repuestos como **IKOMI PERÚ**, esto presenta limitaciones graves que Next.js resuelve mediante **Server-Side Rendering (SSR)** y **Static Site Generation (SSG)**:

1. **SEO e Indexación en Motores de Búsqueda:**
   * **SPA (Vite):** Los rastreadores de motores de búsqueda (Googlebot) reciben un archivo HTML casi vacío. Si no ejecutan el JavaScript adecuadamente, no podrán indexar el contenido de los repuestos ni los servicios de IKOMI.
   * **Next.js:** El servidor entrega un archivo HTML con todo el contenido ya renderizado. Google indexa inmediatamente los títulos, descripciones y productos de la empresa.
   * *Ejemplo aplicado:* En la ruta `/productos/disco-de-embrague`, Next.js genera un HTML que contiene el título del repuesto, su ficha técnica y metaetiquetas OpenGraph en el servidor. Al buscar en Google *"disco de embrague repuestos Corea Perú"*, la página de IKOMI aparecerá con su vista previa completa.

2. **Rendimiento y Tiempo hasta la Interacción (FCP / LCP):**
   * En una SPA, el usuario ve una pantalla blanca mientras el navegador descarga el bundle completo de JavaScript, lo ejecuta y hace las peticiones a la API.
   * En Next.js, el usuario recibe el HTML estructurado y los estilos CSS de inmediato, logrando un **First Contentful Paint (FCP)** prácticamente instantáneo, ideal para usuarios móviles con conexiones lentas.

---

## Parte 2: Decisión sobre Enrutamiento y Layouts Anidados (Criterio 2)

### 2.4 Análisis de Layouts Anidados y Grupos de Rutas (Route Groups)

* **Layout Anidado en `/productos`:**
  * **Decisión:** **NO** se utiliza un layout anidado exclusivo en la carpeta `app/productos/`.
  * **Justificación:** Las páginas `/productos` y `/productos/[slug]` comparten únicamente la estructura general corporativa (Navbar y Footer globales definidos en `app/layout.js`). Usar un layout anidado adicional dentro de `/productos` agregaría capas innecesarias de contenedores visuales sin aportar beneficios de UI persistente (como paneles laterales o dashboards que requieran estado interno persistente).

* **Uso de Route Groups `(marketing)`:**
  * **Decisión:** **NO** se emplean grupos de rutas con paréntesis.
  * **Justificación:** Al tratarse de un sitio corporativo de escala mediana con una arquitectura plana (`/nosotros`, `/servicios`, `/productos`, `/marcas`, `/contacto`), la carpeta `app/` directa mantiene una lectura clara e intuitiva sin necesidad de agrupar rutas para aislar layouts.

---

## Parte 3: Navegación y Client Components (Criterio 3)

### 3.2 Justificación de `"use client"` en la Navegación frente a Server Components

* **¿Por qué `Navbar` debe ser un Client Component (`"use client"`)?**
  * El componente `Navbar` requiere interactividad en el cliente por dos razones clave:
    1. **Uso de Hooks del Navegador:** Utiliza el hook `usePathname()` proveniente de `next/navigation` para obtener la ruta actual dinámicamente y aplicar clases CSS activas al enlace correspondiente (resaltado amarillo/azul de la pestaña actual).
    2. **Estado de la Interfaz:** Controla el estado del menú desplegable (*hamburguesa*) en dispositivos móviles a través de un `useState(false)`.

* **¿Por qué el resto del sitio debe permanecer como Server Components?**
  * Por defecto, en el App Router todos los componentes son **Server Components**.
  * Mantener páginas como `/nosotros`, `/servicios` y `/marcas` en el servidor reduce drásticamente el tamaño del bundle de JavaScript enviado al cliente, mejora la velocidad de carga, protege la lógica de negocio y permite enviar solo el HTML y CSS necesario al navegador.

---

## Parte 4: Estrategia de Estilización (Criterio 4)

### 4.2 Comparativa y Selección de Tailwind CSS

| Criterio | Tailwind CSS (Elegido) | CSS Modules | Bootstrap |
| :--- | :--- | :--- | :--- |
| **Velocidad de Desarrollo** | **Alta:** Clases de utilidad directo en el JSX. | **Media:** Requiere crear y cambiar entre archivos `.module.css`. | **Alta:** Componentes pre-diseñados. |
| **Personalización de Marca** | **Total:** Configuración exacta de colores institucional (`ikomi-blue`, `ikomi-red`) en un solo lugar. | **Total:** Libre escritura CSS, pero propenso a duplicación. | **Baja/Compleja:** Sobreescribir variables SASS o clases precargadas es tedioso. |
| **Peso del Bundle final** | **Mínimo:** Purga automática del CSS no utilizado durante el `build`. | **Medio:** Creación de CSS por cada componente. | **Alto:** Incluye librerías y estilos no utilizados. |

**Justificación Final:** Tailwind CSS permite construir interfaces idénticas a los diseños de IKOMI PERÚ con una consistencia total de colores, espaciados responsivos nativos (breakpoints `sm:`, `md:`, `lg:`) y un rendimiento superior al generar un archivo CSS compilado ultra ligero.