# BlackLightGrp, LLC — Website

React + TypeScript + Vite website for **BlackLightGrp, LLC**.

## Deploying as a Webpage (GitHub Pages)

This repository is configured to automatically deploy to GitHub Pages whenever code is pushed to the `main` branch.

### One-time setup

1. Go to **Settings → Pages** in this GitHub repository.
2. Under **Source**, select **GitHub Actions**.
3. If you want to use the custom domain `blacklightgrp.com`:
   - Enter `blacklightgrp.com` in the **Custom domain** field and save.
   - Point your domain's DNS to GitHub Pages:
     - Add four `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
     - Add a `CNAME` record for `www` pointing to `chchchadzilla.github.io`.
   - Wait for DNS propagation (up to 24 hours), then check **Enforce HTTPS**.

### Deploying

Push to `main` — the workflow in `.github/workflows/deploy.yml` will automatically build and publish the site. You can also trigger it manually from the **Actions** tab using **Run workflow**.

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server at http://localhost:5173
pnpm run dev

# Build for production
pnpm run build:prod

# Preview production build locally
pnpm run preview
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
