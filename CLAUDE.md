@AGENTS.md

# Portafolio Personal — Fabián Rivera

Repo: https://github.com/frivera-dev/portafolio  
Deploy: https://frivera-dev.github.io/portafolio

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS + Three.js

## Estructura clave
- `lib/data.ts` — toda la data personal (editar aquí para actualizar contenido)
- `components/sections/` — secciones de la página (Hero, About, Experience, Stack, Contact, Navbar)
- `components/ui/` — componentes visuales reutilizables
- `components/three/` — HeroSphere animada con Three.js
- `app/api/contact/route.ts` — endpoint del formulario de contacto

## Flujo de trabajo
- `npm run dev` para desarrollo local
- Los cambios se despliegan automáticamente al hacer push a `main`
