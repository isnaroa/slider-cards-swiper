# 🛒 Cards Slider con SwiperJS, Astro & Tailwind

Proyecto moderno creado con **Astro** que muestra un slider responsivo de tarjetas de productos de moda, utilizando **SwiperJS**, **Tailwind CSS** y un diseño enfocado en e-commerce de ropa urbana.

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![SwiperJS](https://img.shields.io/badge/SwiperJS-6332F6?style=for-the-badge&logo=swiper&logoColor=white)

---

## ✨ Características

- **Slider Responsivo:** Adaptación automática mediante _breakpoints_ de Tailwind (1, 2 o 3 tarjetas).
- **Navegación y Paginación:** Flechas personalizadas y bullets con estilos propios.
- **Tarjetas de Producto:** Imagen, título, descripción corta, precio, tallas y botón "Añadir al carrito".
- **Animaciones & Hover:** Efectos de escala, sombras dinámicas y transiciones suaves usando clases utilitarias.
- **Diseño Dark Mode:** Estética moderna con degradados y UI enfocada en productos de alta gama.

## 🛠️ Stack Tecnológico

- **[Astro](https://astro.build/):** Framework principal para la estructura y optimización.
- **[React](https://react.dev/):** Implementación del componente Slider interactivo.
- **[SwiperJS](https://swiperjs.com/):** Motor del carrusel con módulos de Navigation y Pagination.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de estilado para un diseño rápido y consistente.

## 📂 Estructura del Proyecto

- `src/pages/index.astro`: Página principal que monta el layout y el slider.
- `src/layouts/Layout.astro`: layout base y estilos de fondo gradiente.
- `src/components/Slider.jsx`: Componente React que configura y renderiza el slider con clases de Tailwind.
- `src/lib/data.ts`: Listado tipado de productos (`Producto`) que alimenta el slider.

---

## 🚀 Scripts Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto usando **pnpm**:

| Comando        | Acción                                                |
| :------------- | :---------------------------------------------------- |
| `pnpm install` | Instala todas las dependencias.                       |
| `pnpm dev`     | Levanta el servidor local en `http://localhost:4321`. |
| `pnpm build`   | Genera la versión optimizada en la carpeta `dist/`.   |

---

## ⚙️ Cómo Personalizar

1.  **Editar Productos:** Modifica el array en `src/lib/data.ts` para cambiar nombres, precios o imágenes.
2.  **Cambiar Diseño:** Ajusta el JSX y las clases en `src/components/Slider.jsx` para las tarjetas.
3.  **Layout General:** Edita `src/layouts/Layout.astro` para cambiar el fondo.

## 📋 Requisitos

- **Node.js** (Versión 18.x o superior).
- **pnpm** como gestor de paquetes.

---

Desarrollado con ❤️ por [isnaroa](https://github.com/isnaroa)
