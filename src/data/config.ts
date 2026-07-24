// ─────────────────────────────────────────────────────────────
// SITE CONFIG — edit the values below to personalize the site.
// Every field marked TODO is a placeholder you should replace.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'Pritoma Paul Lopa',
  designation: 'Full-Stack (MERN) Developer',
  location: 'Dhaka, Bangladesh',
  tagline:
    'Engineering student building reliable, full-stack web applications with the MERN stack — from schema to deployment.',

  // Resume: not ready yet. Upload your resume PDF to Google Drive, set sharing
  // to "Anyone with the link", copy the shareable link, and paste it below.
  // Nothing else in the code needs to change — this single line controls the
  // "Resume" button across the whole site.
  resumeLink: 'https://drive.google.com/file/d/1NXE19mWxGTPZ5mhzGbpg1QcJvAtZbJ9x/view?usp=sharing', // TODO

  // Contact
  email: 'pritomalopa100@gmail.com',
  phone: '+8801710899840', // TODO
  whatsapp: '+8801710899840', // TODO (optional) — full number with country code, e.g. '+8801XXXXXXXXX'

  // Profile photo — path under /public/assets. Add the file there and this
  // updates automatically; no other code needs to change.
  profilePhoto: '/assets/professional-photo.png',

  socials: {
    github: 'https://github.com/pritomalopa',
    linkedin: 'https://www.linkedin.com/in/pritoma-lopa',
    twitter: '', // TODO (optional) — leave blank to hide the icon
    facebook: 'https://www.facebook.com/share/1C5eSCFHUB/', // TODO (optional) — leave blank to hide the icon
  },
}

// Education — each entry renders as: level / institute / year, with `status`
// (grade, or current progress) shown to the side. `logo` is optional — point
// it at a file under /public/assets/ once you add one; it falls back to a
// generic icon automatically if the file isn't there yet.
export const education = [
  {
    id: 'bup',
    level: 'B.Sc. in Computer Science & Engineering',
    institute: 'Bangladesh University of Professionals (BUP)',
    year: 'Present',
    status: 'Currently Pursuing',
    logo: '/assets/university-logo.png',
  },
  {
    id: 'hsc',
    level: 'Higher Secondary Certificate',
    institute: 'Holy Cross College',
    year: '2023',
    status: 'GPA 5.00',
    logo: '/assets/college-logo.svg',
  },
  {
    id: 'ssc',
    level: 'Secondary School Certificate',
    institute: 'Holy Cross Girls\u2019 High School',
    year: '2021',
    status: 'GPA 5.00',
    logo: '/assets/school-logo.png',
  },
]

// Skills — `icon` is a simple-icons slug (https://simpleicons.org), loaded from
// a public CDN at runtime. `color` is the brand hex (no #) used to tint it.
// Leave `icon` out for anything without a real logo (e.g. soft-skill entries)
// — it will render as a clean text-only chip instead.
export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'html5', color: 'E34F26' },
      { name: 'CSS', icon: 'css3', color: '1572B6' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4' },
      { name: 'React', icon: 'react', color: '61DAFB' },
      { name: 'Next.js', icon: 'nextdotjs', color: 'FFFFFF' },
      { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodedotjs', color: '339933' },
      { name: 'Express.js', icon: 'express', color: 'FFFFFF' },
      { name: 'MongoDB', icon: 'mongodb', color: '47A248' },
      { name: 'Mongoose', icon: 'mongoose', color: 'F04D35' },
      { name: 'BetterAuth', icon: '', color: '' },
    ],
  },
  {
    id: 'languages',
    label: 'Programming Languages',
    skills: [
      { name: 'C', icon: 'c', color: 'A8B9CC' },
      { name: 'C++', icon: 'cplusplus', color: '00599C' },
      { name: 'Java', icon: 'openjdk', color: 'FFFFFF' },
      { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
      { name: 'MySQL', icon: 'mysql', color: '4479A1' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Practice',
    skills: [
      { name: 'Git', icon: 'git', color: 'F05032' },
      { name: 'GitHub', icon: 'github', color: 'FFFFFF' },
      { name: 'Vercel', icon: 'vercel', color: 'FFFFFF' },
      { name: 'Netlify', icon: 'netlify', color: '00C7B7' },
      { name: 'Stripe', icon: 'stripe', color: '635BFF' },
      { name: 'AI-Assisted Coding', icon: '', color: '' },
      { name: 'AI Mindset & Engineering', icon: '', color: '' },
    ],
  },
]

export const hobbies = ['Reading books', 'Dance']
