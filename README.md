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
- Fetch and display customer reviews from an API

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
npm start
```
## API Integration

The application uses a custom API service utility (`utils/apiService.ts`) to fetch reviews from an external API hosted on Railway. The base API URL is `https://be-prd-production.up.railway.app` and the default endpoint is `/products/1`.

**Important**: The application now fetches data directly from the API. If the API is unavailable or returns an error, the review section will display an error message. Make sure your Railway API is running and accessible at the specified endpoint.

You can customize the endpoint path by passing a different path to the `fetchReviews` function.

### API Service Utility Functions

- `fetchReviews(endpoint?: string)`: Fetches reviews from the specified endpoint
- `apiFetch<T>(endpoint: string, options?: RequestInit)`: Generic API fetch function for custom requests

### API Response Format

```typescript
interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

interface Review {
  id: number
  name: string
  review: string
  rating: number
}
```

## Image Configuration

The Next.js configuration includes optimized image settings for better performance:

- **Remote Patterns**: Configured for Unsplash, localhost (development), example.com, and cdn.example.com
- **Image Optimization**: Automatic image optimization and lazy loading

The static files will be in the `out` directory, ready to be deployed to any static hosting service.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18
- Client-side state management (React Hooks)
- Custom API service utility (`utils/apiService.ts`)
- PostCSS (postcss.config.js)
- Git (.gitignore)

## Project Structure

```
├── .gitignore             # Git ignore file
├── HOW_TO_ADD_IMAGE.md    # Guide for adding images
├── HOW_TO_RUN.md          # Guide for running the project
├── index.html             # HTML entry point
├── next.config.js         # Next.js configuration
├── package-lock.json      # NPM lock file
├── package.json           # NPM package file
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── app/                   # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navbar.tsx         # Navigation component
│   ├── ProductDetail.tsx  # Product detail component
│   ├── ReviewItem.tsx     # Individual review component
│   └── ReviewSection.tsx  # Reviews section component
├── public/                # Static assets
│   └── images/           # Product images
└── utils/                 # Utility functions
    ├── apiService.ts     # API service utility
    └── textTruncate.ts   # Text truncation utility
```
