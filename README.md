# IKOMI PERÚ S.R.L. - Sitio Web Corporativo

Este proyecto es una réplica moderna y responsiva del sitio web corporativo de **IKOMI PERÚ S.R.L.** (empresa importadora y comercializadora de repuestos para vehículos de Korea y Japón), desarrollada utilizando **Next.js (App Router)**, **JavaScript** y **Tailwind CSS**.

---

## 👨‍💻 Información de la Evaluación

* **Institución:** Tecsup
* **Curso:** Desarrollo de Aplicaciones Web Avanzado: FullStack
* **Evaluación:** Evaluación Continua 03 (EC03)
* **Alumno:** Patrick Pajares
* **Proyecto:** `ikomi-next-patrick-pajares`

---

## 🚀 Tecnologías Utilizadas

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
* **Lenguaje:** JavaScript (JSX)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS
* **Optimización de Imágenes:** `next/image` con dominios remotos configurados
* **Navegación & SEO:** `next/link`, `usePathname`, Metadata dinámico y estático

---

## 🛠️ Requisitos Previos

Asegúrate de tener instalado en tu sistema:

* [Node.js](https://nodejs.org/) v18.0.0 o superior
* [npm](https://www.npmjs.com/) v9.0.0 o superior
* [Git](https://git-scm.com/)

---

## ⚙️ Pasos para Clonar y Ejecutar el Proyecto

### 1. Clonar el Repositorio
Abre tu terminal y ejecuta:

```bash
git clone https://github.com/TU-USUARIO/ikomi-next-patrick-pajares.git
cd ikomi-next-patrick-pajares
```

### 2. Instalar Dependencias
Instala los paquetes necesarios definidos en el `package.json`:

```bash
npm install
```

### 3. Iniciar el Servidor de Desarrollo
Para arrancar el proyecto localmente:

```bash
npm run dev
```

Abre tu navegador e ingresa a `http://localhost:3000` para explorar la aplicación.

### 4. Compilar para Producción (Build Test)
Para verificar que el proyecto compila perfectamente sin errores sintácticos o de renderizado:

```bash
npm run build
```

Posteriormente, puedes probar la versión optimizada de producción corriendo:

```bash
npm run start
```

---

## 🌳 Árbol de Componentes (Server vs Client Components)

A continuación se detalla la arquitectura de componentes de la aplicación y su clasificación técnica según el App Router de Next.js:

```text
RootLayout (app/layout.js) [Server Component]
│
├── Navbar (components/Navbar.js) ⚡ [Client Component - usePathname, useState]
│
├── Vistas principales (app/*):
│   ├── HomePage (app/page.js) [Server Component]
│   │   ├── Hero (components/Hero.js) [Server Component]
│   │   ├── SectionTitle (components/SectionTitle.js) [Server Component]
│   │   └── ProductCard (components/ProductCard.js) [Server Component]
│   │
│   ├── NosotrosPage (app/nosotros/page.js) [Server Component]
│   │   └── SectionTitle (components/SectionTitle.js) [Server Component]
│   │
│   ├── ServiciosPage (app/servicios/page.js) [Server Component]
│   │
│   ├── ProductosPage (app/productos/page.js) [Server Component]
│   │   ├── SectionTitle (components/SectionTitle.js) [Server Component]
│   │   └── ProductCard (components/ProductCard.js) [Server Component]
│   │
│   ├── ProductoDetallePage (app/productos/[slug]/page.js) [Server Component - Dynamic Route]
│   │
│   ├── MarcasPage (app/marcas/page.js) [Server Component]
│   │
│   ├── ContactoPage (app/contacto/page.js) [Server Component]
│   │   ├── SectionTitle (components/SectionTitle.js) [Server Component]
│   │   └── ContactForm (components/ContactForm.js) ⚡ [Client Component - Form State]
│   │
│   └── NotFound (app/not-found.js) [Server Component - Custom 404 Page]
│
└── Footer (components/Footer.js) ⚡ [Client Component - Scroll To Top, External Links]
```

---

## 📂 Estructura del Proyecto

```text
ikomi-next-patrick-pajares/
├── app/                  # Rutas y paginado (App Router)
│   ├── contacto/         # Ruta /contacto
│   ├── marcas/           # Ruta /marcas
│   ├── nosotros/         # Ruta /nosotros
│   ├── productos/        # Ruta /productos y /productos/[slug]
│   ├── servicios/        # Ruta /servicios
│   ├── globals.css       # Estilos globales y configuración Tailwind v4
│   ├── layout.js         # Layout raíz contenedor con Navbar y Footer
│   ├── not-found.js      # Página de error 404 personalizada
│   └── page.js           # Ruta principal /
├── components/           # Componentes reutilizables de UI
├── data/                 # Base de datos local simulada de productos
├── evidencias/           # Capturas de pantalla requeridas para evaluación
├── BITACORA_IA.md        # Registro de interacción y correcciones con IA
├── DECISIONES.md         # Sustentación técnica de decisiones de arquitectura
└── README.md             # Documentación del proyecto
```