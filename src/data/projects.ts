export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  stack: string[]
  liveLink: string
  githubLink: string // TODO: replace with your client-repo GitHub link for each project
  image?: string // path under /public/assets, e.g. '/assets/nestify.jpg'
  challenges: string[]
  improvements: string[]
}

export const projects: Project[] = [
  {
    slug: 'nestify',
    name: 'Nestify',
    tagline: 'Role-based MERN property rental & booking platform',
    description:
      'Nestify is a full-stack property rental and booking platform with three access levels — Tenant, Owner, and Admin. Owners can list properties and view booking analytics, tenants can browse and book, and admins oversee the platform. Authentication is handled with Firebase and JWT, payments run through Stripe, and owners get visual analytics through Recharts along with PDF exports of their reports.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'JWT', 'Stripe', 'Recharts', 'Tailwind CSS'],
    liveLink: 'https://nestify-client-hazel.vercel.app/',
    githubLink: 'https://github.com/pritomalopa/Nestify_Client.git', // TODO
    image: '/assets/nestify.png', // will show automatically once you add this file to public/assets
    challenges: [
      'A circular Tailwind @apply reference caused a build-breaking CSS loop that took careful isolation to trace.',
      'Hardcoded MongoDB URI placeholders and a missing DB_NAME environment variable caused seeded data to silently disappear in production.',
      'Unsplash image URLs were blocked from loading in Bangladesh, requiring a switch to Pexels for all property images.',
      'A gap in the registerUser flow could leave a Firebase account created without a matching MongoDB record if the backend call failed — fixed by making the two steps properly transactional.',
      'A Stripe secret key was accidentally committed to Git history, which meant rewriting the Git history and rotating the key.',
    ],
    improvements: [
      'Add real-time chat between tenants and property owners.',
      'Add automated tests around the booking and payment flow.',
      'Expand admin-side analytics across the whole platform, not just per-owner.',
    ],
  },
  {
    slug: 'studynest',
    name: 'StudyNest',
    tagline: 'Student resource & community platform for university students',
    description:
      'StudyNest is a resource-sharing and community platform built for Bangladeshi university students, with a separate Express/MongoDB backend and a React/Vite frontend written entirely in TypeScript. Students can sign in with Google via Firebase, and an admin dashboard built with Recharts gives visibility into platform activity.',
    stack: ['React', 'Vite', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Recharts'],
    liveLink: 'https://studynest-client-nine.vercel.app/',
    githubLink: 'https://github.com/pritomalopa/studynest-client.git', // TODO
    image: '/assets/studynest.png', // will show automatically once you add this file to public/assets
    challenges: [
      'The frontend API URL (VITE_API_URL) was baked into the build at compile time, so switching environments without a full rebuild caused requests to silently hit the wrong backend.',
      'A DB_NAME mismatch between environments caused MongoDB to connect to the wrong database, making data look "missing" when it was actually just in a different database.',
    ],
    improvements: [
      'Add a notifications system for new resources in a student’s subjects of interest.',
      'Introduce a search and tagging system across shared resources.',
    ],
  },
  {
    slug: 'docappoint',
    name: 'DocAppoint',
    tagline: 'Doctor appointment booking application',
    description:
      'DocAppoint lets patients find doctors and book appointments online. It supports both email/password and Google sign-in through Firebase on the client, with a Node.js/Express and MongoDB Atlas backend issuing JWTs to protect authenticated routes. The patterns established here — separate client/server repositories, Firebase authentication kept on the client only, and a consistent Vercel deployment sequence — were carried forward into every project built afterward.',
    stack: ['React', 'Firebase Auth', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT'],
    liveLink: 'https://doc-appoint-client-c5yf.vercel.app/',
    githubLink: 'https://github.com/pritomalopa/DocAppointClient.git', // TODO
    image: '/assets/docappoint.png', // will show automatically once you add this file to public/assets
    challenges: [
      // TODO: add the specific challenges you faced building this project
      `One of the main challenges was building a dual authentication flow — syncing Firebase Auth (email/password + Google OAuth) with a custom Express backend, so the app first upserts the user in MongoDB, then issues a signed JWT that gets attached to every protected API call. Deploying the client and server as separate Vercel serverless functions also meant carefully configuring CORS with credentialed origins and maintaining a cached MongoDB connection to avoid repeated cold-start connections. On top of that, building flexible doctor search, specialty filtering, and multi-field sorting (fee, rating, experience) while keeping route ordering conflict-free (like /top-rated needing to be registered before /:id) took a few rounds of debugging.`,
    ],
    improvements: [
      `Move the JWT from localStorage to an httpOnly cookie, and add ownership checks on the appointment update/delete routes so one user can't modify another user's booking.`,
      `Add proper server-side validation (Zod/Joi) with sanitized error responses, instead of returning raw err.message directly to the client.`,
      `Add pagination for the doctors/appointments lists and basic rate-limiting, to make the API more scalable for production traffic.`,
    ],
  },
  {
    slug: 'budgetsense-ai',
    name: 'BudgetSense AI',
    tagline: 'Agentic AI personal finance & expense tracker',
    description:
      'BudgetSense AI is a personal finance and expense-tracking application built around an AI agent, using the Gemini API to power its AI features on top of a React/Vite/TypeScript frontend and a Node/Express/TypeScript backend with MongoDB. It was deliberately chosen as a project in a different domain from earlier rental and community platforms, to demonstrate range beyond a single type of application.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'JWT', 'Gemini API'],
    liveLink: 'https://budget-sense-client.vercel.app/',
    githubLink: 'https://github.com/pritomalopa/BudgetSense-client.git', // TODO
    image: '/assets/budgetsense-ai.png', // will show automatically once you add this file to public/assets
    challenges: [
      // TODO: add the specific challenges you faced building this project
      'Getting the Gemini API to consistently return clean, structured data instead of free-form text required careful prompt design and response validation.',
      `Keeping the AI agent's suggestions grounded in the user's actual transaction data — rather than generic advice — meant passing well-structured context with each request.`,
    ],
    improvements: [
      'Add recurring-expense detection and monthly budget forecasts.',
      'Let the AI agent proactively flag unusual spending.',
    ],
  },
  {
    slug: 'crowdspark',
    name: 'CrowdSpark',
    tagline: 'TODO: add a one-line tagline for this project',
    description:
      // TODO: replace with a real description of what CrowdSpark does and how it's built
      'CrowdSpark is a full-stack web application. Replace this paragraph with a description of the problem it solves, who it is for, and how the frontend and backend are structured.',
    stack: ['TODO', 'Add', 'Your', 'Tech', 'Stack'],
    liveLink: 'https://crowdspark-client.vercel.app/',
    githubLink: 'https://github.com/pritomalopa/crowdspark-client.git', // TODO
    image: '/assets/crowdspark.png', // will show automatically once you add this file to public/assets
    challenges: [
      // TODO
      `The toughest part was designing the credit escrow logic — a supporter's credits get deducted the instant they contribute, then either get added to the campaign's raised total (on approval) or refunded back (on rejection), and deleting a campaign has to auto-refund every already-approved supporter, all without letting any credits get created or lost in the process. Building the withdrawal system was equally tricky, since approving a withdrawal has to proportionally deduct the requested amount across a creator's multiple campaigns (oldest-first) while keeping each campaign's amount_raised accurate. On top of that, coordinating Firebase auth with role-based route protection (Supporter/Creator/Admin checked via a DB lookup on every request) and getting the Vite/Vercel deployment right — where a stale VITE_API_URL gets baked into the build, or a missing DB_NAME env var silently connects to the wrong database — caused real production issues that took careful debugging to trace.`,
    ],
    improvements: [
      // TODO
      `Wrap the multi-step credit operations (contribute -> approve/reject, campaign delete -> refund, withdrawal -> deduct) in MongoDB transactions, so a mid-operation crash can't leave credits duplicated or lost.`,
      `Verify Stripe payments through a signed webhook instead of trusting the client's POST /payments call directly — right now, since the server just trusts the request body, someone could call that endpoint with a fake credit amount without actually paying.`,
      `Centralize the repeated email !== req.decoded.email ownership checks into a small reusable middleware, and extend pagination (already used on "My Contributions") to the other large list endpoints like /campaigns/all and /users.`,
    ],
  },
]
