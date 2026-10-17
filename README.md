# atulsinghbankoti.me

Personal profile built with React and Vite as a static site.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs static files to dist/
npm run preview   # preview the production build locally
```

## Editing content

All personal content lives in `src/data/profile.js`. Components read from it, so you rarely need to touch the JSX.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repo settings, set **Pages > Source** to **GitHub Actions**. The custom domain is set by `public/CNAME`.
