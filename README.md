# G P G Plumbing Service Company

Marketing website for G P G Plumbing Service Company in Miami, Florida. The site is a static React application and does not require a server, API key, or platform-specific runtime.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local address after startup. To make the development server reachable from other devices on your network, it is already configured to listen on all interfaces.

## Build

```sh
npm run build
```

The production site is written to `dist/`. To check the production build locally, run:

```sh
npm run preview
```

## Deploy

Deploy the contents of `dist/` to any static web host. No environment variables or server process are required. If your host requires an output directory or build settings, use:

- Build command: `npm run build`
- Output directory: `dist`

For hosts that serve the site from a subdirectory, the build uses relative asset URLs. Configure the host to serve `index.html` for any application routes if you add client-side routes in the future.

`netlify.toml` and `public/_redirects` provide optional Netlify configuration; other hosts can use the same static build output.

## Project checks

```sh
npm run lint
npm run build
```
