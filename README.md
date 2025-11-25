# fe-prd

A **frontend-only** Next.js product detail page with review functionality, built with TypeScript and Tailwind CSS.

**Ini Font-end** - Frontend only, no backend required.

## Features

- Product detail page with photo and information
- Review section with "Read More" functionality
- Reviews longer than 200 characters are truncated with a "Read more" button
- Expandable/collapsible review text
- Rating system (numeric ratings)
- Fully responsive design (mobile-friendly)
- All data stored in React state (frontend only)

## Important Notes

⚠️ **This is a frontend-only application:**

- No backend server required
- No API endpoints
- All data (reviews, product info) is stored in React state
- Data is not persisted (resets on page refresh)
- Perfect for static hosting (Vercel, Netlify, GitHub Pages, etc.)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build a static export (frontend-only):

```bash
npm run build
```

The static files will be in the `out` directory, ready to be deployed to any static hosting service.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18
- Client-side state management (React Hooks)
