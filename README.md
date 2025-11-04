[![Website Preview](/public/img/page-preview.JPG)](https://aliarghyani.vercel.app)

# Nuxt UI Portfolio · Ali Arghyani

A bilingual portfolio powered by Nuxt 4, Nuxt UI, Tailwind4, and TypeScript. The site highlights projects, experience, and recommendations with a focus on performance, accessibility, and developer experience. Dark mode is the default theme, with automatic RTL support for Persian content.

## Features
- Nuxt 4 application using the `app/` source directory structure
- Nuxt UI component library with custom theme tokens and chip variants
- Tailwind CSS 4 utility pipeline with custom variants and shared utilities
- Nuxt Image integration for hero and project thumbnails with responsive formats
- `@nuxtjs/i18n` for English (`en`) and Persian (`fa`) locales, including RTL switching
- `@nuxtjs/color-mode` for light/dark themes (dark is the default)
- VueUse utilities for scroll observation, reduced motion checks, and lazy mounting
- Local Roobert font preloads delivered from `public/fonts`
- Ready for deployment to Vercel (Nitro preset) or any static/edge host

## Tech Stack
- **Framework**: Nuxt 4 (Vue 3 + Vite)
- **UI Library**: Nuxt UI 4
- **Styling**: Tailwind CSS 4, custom CSS utilities
- **Language**: TypeScript
- **Internationalization**: `@nuxtjs/i18n`
- **Theme & Color Mode**: `@nuxtjs/color-mode`
- **Images**: `@nuxt/image`
- **Composables**: VueUse

## Quick Start
```bash
pnpm install
pnpm dev
```
- Node.js 18.20.0 or newer (up to 22.x) is required.
- Nuxt dev server runs on http://localhost:3000 by default.

### Project Scripts
- `pnpm dev` – Start the Nuxt development server with HMR.
- `pnpm build` – Create a production build.
- `pnpm preview` – Preview the production build locally.
- `pnpm generate` – Generate a fully static build (optional).
- `pnpm typecheck` – Run Vue TSC for type analysis.
- `pnpm format` – Check formatting with Prettier.
- `pnpm format:write` – Apply Prettier formatting fixes.

## Project Structure (excerpt)
```
app/
  app.vue                # Root shell, head configuration, font preloads
  app.config.ts          # Nuxt UI tokens, component defaults
  assets/css/main.css    # Tailwind entrypoint, base styles, chip utilities
  components/            # UI components (TopNav, Hero, Projects, etc.)
  composables/           # Reusable logic (useSectionObserver, useSocialText)
  data/                  # Portfolio data (localized TypeScript modules)
  pages/                 # Route components (index, blog placeholder)
  utils/                 # chipTones and other helpers

public/
  fonts/                 # Roobert font files served directly
  img/                   # Static imagery consumed by Nuxt Image

i18n/
  locales/               # en.json and fa.json dictionaries
```

## Internationalization
- `@nuxtjs/i18n` is configured with `strategy: 'prefix_except_default'`.
- Locale metadata (language, dir, name) is defined in `nuxt.config.ts`.
- Dynamic `lang` and `dir` attributes are applied in `app/app.vue`, so toggling locales updates both SSR and client output.
- Portfolio content lives in typed modules (`app/data/portfolio.ts` for EN, `app/data/portfolio.fa.ts` for FA).

## Styling & Theming
- Tailwind CSS is initialized through `app/assets/css/main.css` with a reusable chip utility, hover states, and dark mode variant.
- Nuxt UI theme tokens (`app/app.config.ts`) unify colors, typography, chip variants, and button defaults.
- Local Roobert fonts are preloaded and combined with Fraunces, Inter, and Outfit using `@nuxt/fonts`.
- Dark mode is the default preference; color mode state is stored under `nuxt-color-mode`.

## Performance Notes
- Hero and project images use `<NuxtImg>` with responsive sizes and modern formats.
- Recommendations carousel mounts lazily once visible and respects `prefers-reduced-motion`.
- Fonts are preloaded in `app/app.vue` to stabilize LCP, and assets are served from `public/fonts`.
- Additional caching, route rules, or SWR headers can be added via `nuxt.config.ts` when deploying.

## Deployment
### Vercel
- Set the build command to `pnpm build`.
- Output directory remains Nuxt's default (`.output`).
- Optional Plausible analytics is controlled by `runtimeConfig.public.loadPlausible`.

### Static Hosting
- Run `pnpm generate`.
- Serve the contents of `.output/public`.

## Contributing
Issues and pull requests are welcome. Please run `pnpm typecheck` and `pnpm format` before submitting changes to keep the project consistent.

## License
This project is open source under the MIT License. See [`LICENSE`](./LICENSE) for details.
