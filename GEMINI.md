# GEMINI.md - Project Context: Marchy's Custom Decks Inc.

## Project Overview
This is a modern, responsive website for **Marchy's Custom Decks Inc.**, a family-owned and operated construction business based in Halifax, Nova Scotia. The project is built using **Next.js 16** and **React 19**, focusing on showcasing high-quality craftsmanship in outdoor spaces, renovations, and new construction.

### Core Technologies
- **Framework:** [Next.js 16.2.1](https://nextjs.org/) (App Router)
- **Library:** [React 19.2.4](https://react.dev/)
- **Styling:** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Fonts:** [Geist](https://vercel.com/font) (Sans and Mono)
- **Icons/Media:** Next.js `Image` component and HTML5 `video` for the hero background.

## Architecture & Structure
The project follows the standard Next.js App Router structure:

- `app/`: Contains the application routes and core layout.
  - `components/`: Reusable UI components like `Navbar.tsx` and `Footer.tsx`.
  - `contact/`: Route for the contact page.
  - `projects/`: Route for showcasing completed work.
  - `layout.tsx`: Root layout defining the base HTML structure and global fonts.
  - `page.tsx`: The main landing page featuring services, projects, and about sections.
  - `globals.css`: Global styles including Tailwind CSS directives.
- `public/`: Static assets such as images (`project1.jpg`, etc.), the company logo (`logo.png`), and the hero background video (`background.mp4`).

## Development Guide

### Building and Running
- **Development:** `npm run dev` (Runs on [http://localhost:3000](http://localhost:3000))
- **Production Build:** `npm run build`
- **Production Start:** `npm run start`
- **Linting:** `npm run lint`

### Development Conventions
- **Component-Driven:** Keep reusable UI elements in `app/components/`.
- **Responsive Design:** Use Tailwind's utility classes for mobile-first responsiveness.
- **Type Safety:** Ensure all new components and functions are properly typed using TypeScript.
- **Performance:** Utilize `next/image` for automatic image optimization and `next/link` for client-side navigation.
- **Visual Style:** Maintain the professional aesthetic using the defined color palette:
  - **Primary Red:** `#d10f1a` (Company branding/highlights)
  - **Deep Navy:** `#041033` (Headings/text)
  - **Slate/Gray:** For secondary text and borders.

## Key Files
- `app/page.tsx`: The primary entry point and landing page content.
- `app/components/Navbar.tsx`: Responsive navigation with mobile menu logic.
- `app/components/Footer.tsx`: Site-wide footer with contact info and quick links.
- `package.json`: Dependency management and project scripts.
- `tailwind.config.mjs`: (Inferred) Tailwind configuration for version 4.
