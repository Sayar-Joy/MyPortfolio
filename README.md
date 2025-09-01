## Deployment (GitHub Pages + Custom Domain)

This project is set up to deploy to GitHub Pages and use your custom domain `hlyanpaingaung.me`.

Steps:

1. Ensure you have a repo named `Sayar-Joy.github.io` (user/organization pages) or any repo if using a custom domain.
2. The file `public/CNAME` contains `hlyanpaingaung.me`. GitHub Pages will use this as your domain.
3. Push the code to GitHub.
4. From your local machine run:

   npm run deploy

   This builds the site and publishes the `dist/` folder to the `gh-pages` branch.

Notes:

- In the repository settings → Pages, set the source to the `gh-pages` branch (if not automatically picked up).
- Point your DNS A/ALIAS to GitHub Pages and add a `CNAME` record for `hlyanpaingaung.me` → `Sayar-Joy.github.io` if your DNS requires it. Many providers only need the CNAME pointing to the apex via ALIAS/ANAME.
- Vite base is left as default (`/`) which works with a custom domain.

# Vite + React + TypeScript App

This project is a Vite + React + TypeScript app styled with Tailwind CSS and shadcn/ui. It includes a lightweight 3D logo background using three.js via @react-three/fiber and @react-three/drei.

## Requirements

- Node.js 18+ (recommend using nvm)
- npm 9+ (or pnpm/yarn if you prefer)

## Install

1. Clone the repo
2. Install dependencies
3. Start the dev server

## Scripts

- dev: Start Vite dev server
- build: Production build
- build:dev: Development-mode build
- preview: Preview the production build locally

## Tech Stack

- Vite, React 18, TypeScript
- Tailwind CSS, shadcn/ui
- three, @react-three/fiber, @react-three/drei
- framer-motion, react-router-dom

## Notes

- The animated background is non-interactive and won’t block UI input.
- You can safely remove unused 3D demo files if you don’t need them.

## License

MIT
