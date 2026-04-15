# Great Lucky Portfolio

A modern personal portfolio template built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **motion/react**. This project showcases a responsive landing page for a frontend engineer, including animated sections, dark mode support, and a contact form integration.

## Why this project is useful

- **Modern portfolio layout** with sections for Home, About, Services, Work, and Contact
- **Responsive UI** designed for desktop and mobile devices
- **Dark mode support** using `next-themes`
- **Smooth animations** powered by `motion/react`
- **Contact form integration** with Web3Forms support
- **Easy customization** thanks to modular React components and reusable data-driven sections

## Features

- Animated header and section transitions
- Sticky responsive navbar with mobile menu
- Image optimization with Next.js `Image`
- Dark/light theme switcher
- Portfolio work cards and service cards
- Contact form powered by `react-toastify` notifications

## Getting started

### Prerequisites

- Node.js 18+

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```bash
npm run build
npm start
```

## Project structure

- `app/` — Next.js App Router pages and layout
- `app/components/` — reusable UI sections: `Navbar`, `Header`, `About`, `Services`, `Work`, `Contact`, `Footer`
- `app/constants/` — navigation, services, work, and profile data used across the site
- `public/` — static images and icon assets
- `globals.css` — Tailwind and global styling

## Configuration

The contact form uses Web3Forms via an environment variable.

Create a `.env.local` file at the repository root with:

```env
NEXT_PUBLIC_FORM_ACCESS_KEY=your_web3forms_access_key
```

> If the environment key is missing, the contact form submission will fail.

## Customization notes

- Replace placeholder content in `app/components/Header.tsx`, `app/components/About.tsx`, and other sections with your personal copy
- Update portfolio entries in `app/constants/index.ts`
- Swap images in `public/images/` with your own branding

## Dependencies

Key libraries in this project:

- `next` — App Router and server-rendered React
- `react` / `react-dom` — UI rendering
- `typescript` — typed JavaScript
- `tailwindcss` — utility-first styling
- `next-themes` — theme switching
- `motion` — animation engine
- `react-toastify` — toast notifications

## Where to get help

- File an issue on the repository
- Reach out to the maintainer through the contact form after deployment
- Consult official docs for framework-specific questions:
  - `next` docs
  - `tailwindcss` docs
  - `react-toastify` docs

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

If you want to add documentation or improve the layout, please open an issue first so we can coordinate.

## Maintainer

- Maintained by **Great Lucky**

---

> This repository is a personal portfolio starter built for frontend developers and designers who want a clean, animated landing page with dark mode and contact form support.
