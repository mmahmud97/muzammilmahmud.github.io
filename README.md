# muzammilmahmud.github.io

Personal portfolio site built with [Astro](https://astro.build), deployed on GitHub Pages.

## Features

- **Resume** — Professional experience, skills, education
- **Blog** — Content-driven posts with RSS feed
- **Publications** — Papers and talks
- **Projects** — Portfolio with live demo links (Hugging Face Spaces, Vercel, etc.)
- **Contact** — Form (Formspree) + email subscription (Buttondown)

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`

## Build

```bash
npm run build
```

Output in `dist/`

## Deployment (GitHub Pages)

1. Push to the `main` branch.
2. In the repo: **Settings** → **Pages** → **Build and deployment** → **Source**: select **GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` builds and deploys the site automatically.

## Configuration

- **Buttondown**: Replace `your-username` in the subscribe form (contact page) with your [Buttondown](https://buttondown.com) username.
- **Formspree**: Replace `YOUR_FORM_ID` in the contact form with your [Formspree](https://formspree.io) form ID.
- **Email / social links**: Update the contact page with your details.

## Content

- **Blog**: Add `.md` or `.mdx` files to `src/content/blog/`
- **Publications**: Add `.md` files to `src/content/publications/`
- **Projects**: Add `.md` files to `src/content/projects/` with `demoUrl` for live demos
