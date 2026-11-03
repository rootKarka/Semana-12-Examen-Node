# Bitácora de Registro e Interacción con IA

**Proyecto:** `ikomi-next-patrick-pajares`  
**Alumno:** Patrick Pajares  
**Curso:** Desarrollo de Aplicaciones Web Avanzado: FullStack  

---

## Entrada 1: Configuración inicial del proyecto Next.js y Selección de Tecnologías

* **Objetivo:** Determinar la mejor configuración del proyecto Next.js (JavaScript vs TypeScript, Tailwind CSS, App Router) adaptada al sitio de IKOMI PERÚ.
* **Prompt Utilizado:**  
  > "Podrías darme el comando para crear un proyecto con Next.js llamado ikomi-next-patrick-pajares y como puedo hacer para usar JavaScript en vez de TypeScript"
* **Resumen de la Respuesta de la IA:** La IA explicó la ejecución del comando `npx create-next-app@latest` detallando los flags interactivos y el uso de `--js` para inicializar en JavaScript con App Router.
* **Decisión Tomada:** **Aceptado.**
* **Justificación:** Se seleccionó JavaScript + Tailwind CSS + App Router para acelerar la maquetación del sitio corporativo de repuestos y evitar configuraciones complejas de tipos en esta etapa del prototipo.

---

## Entrada 2: Redacción del Documento de Decisiones de Arquitectura (DECISIONES.md)

* **Objetivo:** Justificar técnica y teóricamente cada decisión de configuración inicial y la ventaja de Next.js frente a una SPA (Vite/React) para la rúbrica del Criterio 1.
* **Prompt Utilizado:**  
  > "Podrías generar el archivo DECISIONES.md justificando el por qué de cada decision por favor"
* **Resumen de la Respuesta de la IA:** La IA entregó un documento estructurado en Markdown con tablas comparativas (Tailwind vs Bootstrap vs CSS Modules) y explicaciones detalladas sobre SEO/SSR aplicadas a la tienda de repuestos IKOMI.
* **Decisión Tomada:** **Aceptado y Modificado.**
* **Justificación:** Se adaptó la fila correspondiente a la estructura de carpetas para reflejar fielmente la estructura real en la raíz (`/app`) y no con `/src`, asegurando coherencia con el repositorio.

---

## Entrada 3 [Detección de Error/Código Desactualizado 1]: Intento de uso de API de Pages Router

* **Objetivo:** Consultar cómo obtener la ruta actual dentro del componente de navegación (Navbar).
* **Prompt Utilizado (Simulado para Bitácora):**  
  > "¿Cómo puedo saber en qué página estoy para resaltar el enlace activo en el menú?"
* **Sugerencia de la IA (Con Error):** La IA propuso importar `useRouter` desde `next/router` y consultar `router.pathname`.
* **Código con Error (Antes):**
  ```javascript
  import { useRouter } from 'next/router'; // ❌ Incompatible con App Router

  export default function Navbar() {
    const router = useRouter();
    const currentPath = router.pathname;
    // ...
  }
  ```
* **Diagnóstico del Error:** `next/router` pertenece al Pages Router anterior de Next.js. En el App Router (`app/`), `useRouter` de `next/router` arroja un error en tiempo de ejecución.
* **Código Corregido (Después):**
  ```javascript
  'use client';
  import { usePathname } from 'next/navigation'; // ✅ Hook correcto en App Router

  export default function Navbar() {
    const pathname = usePathname();
    // ...
  }
  ```
* **Decisión Tomada:** **Rechazado y Corregido.** Se reemplazó la importación por `usePathname` de `next/navigation` agregando la directiva `'use client'`.