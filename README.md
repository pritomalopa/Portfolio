# Pritoma Paul Lopa — Developer Portfolio

A React + TypeScript + Tailwind CSS portfolio (Vite-powered), built around a clean
engineering-drafting visual language — corner registration marks, dimension-line
dividers, and a blueprint/paper color palette.

## Structure

```
src/
  components/   Navbar, Hero, About, Skills, Education, Experience,
                Projects, ProjectCard, ProjectThumb, Contact, Footer, SectionFrame
  data/         config.ts   → name, designation, contact, socials, education, skills
                projects.ts → one entry per project (stack, links, challenges, improvements)
  pages/        Home.tsx, ProjectDetail.tsx
public/
  assets/       profile photo, institute logos, project screenshots
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Everything else — content edits, adding images, and deployment — is covered in chat.
