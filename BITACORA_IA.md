# Bitácora de Registro e Interacción con Inteligencia Artificial

**Proyecto:** `ikomi-next-patrick-pajares`  
**Alumno:** Patrick Pajares  
**Curso:** Desarrollo de Aplicaciones Web Avanzado: FullStack  
**Institución:** Tecsup  

---

## Entrada 1: Inicialización del Proyecto Next.js con JavaScript

* **Objetivo:** Determinar la forma correcta de inicializar el proyecto Next.js utilizando JavaScript puro en lugar de TypeScript, manteniendo App Router y Tailwind CSS.
* **Prompt Utilizado:**  
  > *"Podrías darme el comando para crear un proyecto con Next.js llamado ikomi-next-patrick-pajares y como puedo hacer para en vez de usar TypeScript usar JavaScript"*
* **Resumen de la Respuesta de la IA:** Explicación del comando `npx create-next-app@latest` junto con el flag `--js` para forzar la configuración en JavaScript sin prompts interactivos de TypeScript.
* **Decisión Tomada:** **Aceptado.**
* **Justificación:** Permitió crear la estructura inicial limpia con `.jsx` / `.js` acelerando el flujo de trabajo del prototipo corporativo.

---

## Entrada 2: Elaboración del Documento de Decisiones de Arquitectura (`DECISIONES.md`)

* **Objetivo:** Redactar la justificación técnica de las tecnologías elegidas (JS vs TS, Tailwind vs Bootstrap, App Router) y responder las ventajas de SSR frente a una SPA de React.
* **Prompt Utilizado:**  
  > *"Popdrías generar la estructura de DECISIONES.md por favor"*
* **Resumen de la Respuesta de la IA:** Generación de un archivo Markdown con tablas comparativas de herramientas CSS y argumentación sobre SEO, First Contentful Paint y Server Components.
* **Decisión Tomada:** **Aceptado y Modificado.**
* **Justificación:** Se ajustó la tabla para reflejar la estructura con la carpeta `app/` en la raíz del proyecto (sin la carpeta intermedia `src/`).

---

## Entrada 3 [Detección de Error / Caso 1]: Error de Importación de Módulo (`Export default`)

* **Objetivo:** Resolver el error de compilación `Export default doesn't exist in target module` al importar la data de productos en `app/page.js`.
* **Prompt Utilizado:**  
  > *"## Error Type: Build Error. ## Error Message: Export default doesn't exist in target module ./app/page.js:4:1 ... Did you mean to import productos?"*
* **Sugerencia / Diagnóstico de la IA:** La IA identificó que `data/productos.js` solo exportaba una constante nombrada (`export const productos = [...]`), mientras que la página intentaba consumirla como `import productosData from '@/data/productos'`.
* **Código con Error (Antes):**
  ```javascript
  // data/productos.js
  export const productos = [ ... ];
  // ❌ Falta la exportación por defecto
  ```
* **Código Corregido (Después):**
  ```javascript
  // data/productos.js
  export const productos = [ ... ];
  export default productos; // ✅ Exportación por defecto agregada
  ```
* **Decisión Tomada:** **Modificado y Aplicado.**
* **Justificación:** Se agregó `export default productos;` en la base de datos simulada para evitar modificar todas las importaciones ya maquetadas en las distintas páginas.

---

## Entrada 4 [Detección de Error / Caso 2]: Hostname de Imagen Externa No Configurado en `next/image`

* **Objetivo:** Solucionar el Runtime Error `Invalid src prop ... hostname "images.unsplash.com" is not configured under images in your next.config.js`.
* **Prompt Utilizado:**  
  > *"## Error Type: Runtime Error. ## Error Message: Invalid src prop (https://images.unsplash.com/photo-1486006920555-c77dce18193b...) on `next/image`, hostname 'images.unsplash.com' is not configured under images in your next.config.js"*
* **Sugerencia de la IA:** Explicó que Next.js restringe por seguridad la carga de imágenes remotas a menos que se declaren explícitamente en el objeto `images.remotePatterns` dentro de `next.config.mjs`.
* **Código Corregido:**
  ```javascript
  // next.config.mjs
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
  };

  export default nextConfig;
  ```
* **Decisión Tomada:** **Aceptado.**
* **Justificación:** Se añadió la configuración remota y se reinició el servidor de desarrollo, permitiendo optimizar automáticamente las imágenes de catálogo de Unsplash.

---

## Entrada 5 [Detección de Error / Caso 3]: Fallo de Compilación CSS y Estilos Gigantes (Tailwind CSS v4)

* **Objetivo:** Corregir el desbordamiento visual de elementos y la advertencia `Unknown at rule: @tailwind / @theme` en PostCSS.
* **Prompt Utilizado:**  
  > *"esuchca, todo se ve mal. Las imagenes salen gidantes, los íconos tambien, todo se ve mal."*
* **Sugerencia / Diagnóstico de la IA:** La IA detectó que Next.js 16 utiliza Tailwind v4 por defecto, la cual no reconoce directivas v3 como `@tailwind base;` y requiere `@import "tailwindcss";` junto con el paquete `@tailwindcss/postcss`.
* **Pasos de Solución Aplicados:**
  1. Instalación de `@tailwindcss/postcss`.
  2. Configuración de `postcss.config.mjs` con el plugin de Tailwind v4.
  3. Reemplazo de `app/globals.css` a `@import "tailwindcss";`.
  4. Limpieza de caché con `rm -rf .next` y reinicio de servidor.
* **Decisión Tomada:** **Aceptado.**
* **Justificación:** La reconfiguración del motor de PostCSS permitió restablecer los estilos atómicos en todo el sitio web.

---

## Entrada 6: Maquetado de Componentes Reutilizables y Rutas Principales

* **Objetivo:** Construir la interfaz de usuario replicando la referencia visual de IKOMI PERÚ para las páginas `/`, `/nosotros`, `/servicios`, `/productos`, `/productos/[slug]`, `/marcas`, `/contacto` y `not-found`.
* **Prompt Utilizado:**  
  > *"Genera el código para Navbar.js y Footer.js por favor, basado en la página de https://ikomiperu.com/ y las imágenes de ejemplo que te mostré en el word"*
* **Resumen de la Respuesta de la IA:** Generación de componentes estructurados (`Navbar`, `Footer`, `Hero`, `ProductCard`, `ContactForm`, `SectionTitle`) integrados con Tailwind CSS y navegación mediante Next.js `Link` y `usePathname`.
* **Decisión Tomada:** **Aceptado.**
* **Justificación:** Se logró la equivalencia estética corporativa requerida por la guía del laboratorio manteniendo código limpio y componentes reutilizables.