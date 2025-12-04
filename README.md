# Feel Colombia - Sitio Web Oficial

Sitio web oficial de la Fundación Feel Colombia, una organización dedicada a promover el bienestar emocional y la prevención en salud mental a través de programas educativos, corporativos e innovación.

## 🚀 Tecnologías y Versiones

### Requisitos Previos

- **Node.js**: v22.x o superior (Actualmente probado con v23.9.0)
- **npm**: v10.x o superior
- **Git**: Para clonar el repositorio

### Stack Tecnológico

- **Framework**: [Next.js](https://nextjs.org) v16.0.1 (App Router)
- **React**: v19.2.0
- **TypeScript**: v5.x
- **Estilos**:
  - [Tailwind CSS](https://tailwindcss.com) v4
  - [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) v0.5.19
  - [@tailwindcss/postcss](https://tailwindcss.com/docs/using-with-preprocessors) v4
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com) (Avatar, Dialog, Label, Slot)
  - [Lucide React](https://lucide.dev) v0.553.0 (Iconos)
- **Utilidades**:
  - `class-variance-authority` v0.7.1
  - `clsx` v2.1.1
  - `tailwind-merge` v3.4.0
  - `qs` v6.14.0
- **Tipografía**: [@fontsource/poppins](https://fontsource.org) v5.2.7

## 📦 Instalación

### 1. Clonar el repositorio

```bash
# Clonar desde GitHub (Repositorio asociado a la cuenta de Fundación Feel Colombia)
git clone https://github.com/fundacionfeelcolombia-dotcom/feel-colombia-web.git

# Entrar al directorio del proyecto
cd feel-colombia-web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno (si es necesario)

Crea un archivo `.env.local` en la raíz del proyecto si necesitas configurar variables de entorno:

```env
# Ejemplo de configuración para Strapi u otros servicios
NEXT_PUBLIC_API_URL=https://tu-api.com
```

## 🛠️ Desarrollo

### Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio.

La página se actualiza automáticamente mientras editas los archivos en `app/`.

### Otros comandos disponibles

```bash
# Compilar para producción
npm run build

# Iniciar servidor de producción (después de build)
npm start

# Ejecutar linter
npm run lint
```

## 📁 Estructura del Proyecto

```
feel-colombia-frontend/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout principal + SEO metadata
│   ├── page.tsx                 # Página de inicio
│   ├── globals.css              # Estilos globales
│   ├── como-ayudar/             # Página de donaciones
│   ├── contacto/                # Página de contacto
│   ├── nuestro-equipo/          # Página del equipo
│   ├── programas/               # Páginas de programas
│   │   ├── page.tsx            # Lista de programas
│   │   ├── [slug]/             # Páginas dinámicas de programas
│   │   └── components/         # Componentes específicos
│   ├── quienes-somos/          # Página Quiénes Somos
│   └── sitemap.ts              # Generador de sitemap
├── components/                  # Componentes reutilizables
│   ├── ui/                     # Componentes de UI (shadcn/ui)
│   ├── HomePage/               # Componentes de la home
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── Testimonials.tsx
├── lib/                        # Utilidades y configuraciones
│   ├── strapi.ts              # Integración con Strapi CMS
│   ├── schema.ts              # Datos estructurados (Schema.org)
│   └── utils.ts               # Funciones auxiliares
├── public/                     # Archivos estáticos
│   ├── icons/
│   ├── images/
│   ├── programs/
│   ├── team-images/
│   └── robots.txt             # SEO: Instrucciones para crawlers
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.ts
└── components.json            # Configuración de shadcn/ui
```

## 🌐 Despliegue y CI/CD

### Integración Continua con Vercel

Este proyecto está configurado con **CI/CD automático** usando Vercel:

- **Repositorio GitHub**: Asociado a la cuenta de Fundación Feel Colombia
- **Rama principal**: `main`
- **Despliegue automático**: Cada push a la rama `main` dispara automáticamente:
  1. Build de la aplicación
  2. Ejecución de tests y validaciones
  3. Despliegue a producción en Vercel

### Preview Deployments

- Cada Pull Request genera automáticamente un preview deployment
- Útil para revisar cambios antes de mergear a `main`

### Variables de entorno en Vercel

Las variables de entorno se configuran en el dashboard de Vercel para mantener la seguridad de credenciales y API keys.

## 🔍 SEO y Optimizaciones

El sitio cuenta con optimizaciones completas de SEO:

- ✅ Metadata dinámica en todas las páginas
- ✅ Open Graph y Twitter Cards
- ✅ Sitemap.xml generado automáticamente
- ✅ robots.txt configurado
- ✅ Datos estructurados (Schema.org/JSON-LD)
- ✅ Alt texts optimizados en imágenes
- ✅ Idioma configurado en español (es)

Ver [SEO-IMPROVEMENTS.md](./SEO-IMPROVEMENTS.md) para más detalles.

## 🧪 Testing y Validación

### Probar localmente

1. **Desarrollo**: `npm run dev` → [http://localhost:3000](http://localhost:3000)
2. **Producción local**:
   ```bash
   npm run build
   npm start
   ```
3. **Verificar SEO**:
   - Sitemap: [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)
   - Robots: [http://localhost:3000/robots.txt](http://localhost:3000/robots.txt)

### Validaciones recomendadas

- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) para performance
- [Google Search Console](https://search.google.com/search-console) para SEO
- [Open Graph Debugger](https://www.opengraph.xyz/) para metadatos sociales

## 🤝 Contribuciones

Este proyecto es mantenido por el equipo de Fundación Feel Colombia.

### Flujo de trabajo

1. Crear una rama desde `main`
2. Hacer cambios y commits
3. Crear Pull Request
4. Revisar preview deployment automático
5. Mergear a `main` → Despliegue automático a producción

## 📞 Contacto

- **Email**: proyectos@fundacionfeelcolombia.org
- **Sitio web**: [https://www.fundacionfeelcolombia.org](https://www.fundacionfeelcolombia.com)
- **GitHub**: [fundacionfeelcolombia-dotcom](https://github.com/fundacionfeelcolombia-dotcom/feel-colombia-web)

## 📄 Licencia

© 2025 Fundación Feel Colombia. Todos los derechos reservados.
