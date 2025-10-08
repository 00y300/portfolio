# React + TypeScript + Vite Portfolio Website

## Features
- Responsive design
- Modern UI components
- Email sending capability using Resend: [Resend documentation](https://resend.com/docs/introduction) ✉️
- Deployment via [Cloudflare Wrangler](https://developers.cloudflare.com/workers/wrangler/) and [Cloudflare Workers](https://workers.cloudflare.com/). 🌥️🔥

### Project Structure and Tools

**React 19 Setup**
- React 19.1.1 with React DOM 19.1.1
- Vite for fast development server
- TypeScript support via `@types/react` and `@types/react-dom`

**Tailwind CSS Integration**
- Tailwind CSS v4.1.1 with `@tailwindcss/vite` plugin
- Prettier integration using `prettier-plugin-tailwindcss`

**Email Templates**
- Built with `react-email` and `@react-email/components`
- Scripts: `email:dev` and `email:build` for React Email CLI
- Rendering with `@react-email/render`

### Cloudflare Workers Setup

Wrangler scripts included:
```json
"dev:wrangler": "wrangler dev --env dev",
"dev:all:wrangler": "concurrently \"npm run dev:wrangler\" \"npm run dev\"",
"deploy:wrangler": "wrangler deploy --env production"
```

> **Note:** API keys must be defined in environment variables.

Indicates plans to deploy serverless functions on Cloudflare Workers, for API endpoints or SSR.

### Concurrent Development

```json
"dev:all": "concurrently \"npm run dev\" \"npm run email:dev\""
```
