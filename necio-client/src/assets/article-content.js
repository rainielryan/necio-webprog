const articles = [
  {
    name: "getting-started-with-react",
    title: "Getting Started with React in 2025",
    image: "/Image (7).jpg",
    content: [
      "React remains one of the most popular JavaScript libraries for building user interfaces. In this article, we explore the fundamentals of React, including components, props, state, and hooks, with practical examples to get you up and running fast.",
      "A React component is a reusable piece of UI. Functional components are simple JavaScript functions that return JSX.",
      "Props allow you to pass data between components. They are read-only and essential for component reusability.",
      "The useState hook lets you manage state inside functional components. Calling the state setter triggers a re-render with the updated value."
    ]
  },
  {
    name: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    image: "/Image (2).jpg",
    content: [
      "Tailwind CSS has changed how developers approach styling. Learn how to use utility classes effectively, build responsive layouts, and keep your codebase clean and maintainable without writing a single line of custom CSS.",
      "Tailwind uses a utility-first approach. Instead of writing CSS classes, you apply small, single-purpose classes directly in your HTML or JSX.",
      "Responsive design in Tailwind is handled with breakpoint prefixes: sm, md, lg, and xl.",
      "You can customize your design system in tailwind.config.js, adding custom colors, fonts, spacing, and more to match your brand."
    ]
  },
  {
    name: "why-vite-is-the-future",
    title: "Why Vite is the Future of Frontend Tooling",
    image: "/Image (5).jpg",
    content: [
      "Vite offers blazing-fast development server startup and hot module replacement. Discover why developers are switching from Webpack to Vite and how it can dramatically improve your development workflow.",
      "Vite leverages native ES modules in the browser during development, meaning it does not need to bundle your entire app before serving it. This results in near-instant server startup regardless of app size.",
      "Hot Module Replacement in Vite is extremely fast. Only the changed module is replaced, not the entire page, preserving application state while you code.",
      "For production builds, Vite uses Rollup under the hood, producing highly optimized and tree-shaken bundles. Setup is minimal: npm create vite@latest gets you started in seconds."
    ]
  },
  {
    name: "building-a-developer-portfolio",
    title: "Building a Developer Portfolio That Stands Out",
    image: "/Image (4).jpg",
    content: [
      "Your portfolio is your first impression. Learn what hiring managers look for, how to structure your projects, what to write in your bio, and how to make your personal site reflect your skills and personality.",
      "A strong portfolio includes a clear hero section with your name and role, a brief bio that shows personality, a curated list of projects with descriptions and links, and contact information.",
      "Quality over quantity. Showcase 3 to 5 of your best projects rather than everything you have built. Each project should explain the problem it solves, the tech stack used, and your role in building it.",
      "Keep your portfolio updated and make sure it is mobile-responsive, fast-loading, and accessible. Use your own domain if possible as it shows professionalism and attention to detail."
    ]
  },
  {
    name: "understanding-async-await",
    title: "Understanding Async/Await in JavaScript",
    image: "/Image (6).jpg",
    content: [
      "Asynchronous programming is a core part of modern JavaScript. This article breaks down promises, async/await syntax, error handling, and real-world patterns to help you write cleaner, more readable async code.",
      "A Promise represents a value that may be available now, in the future, or never. You can chain .then() and .catch() to handle resolved and rejected states.",
      "The async/await syntax makes asynchronous code look and behave like synchronous code, making it easier to read and maintain.",
      "Always wrap async/await calls in try/catch blocks to handle errors gracefully and prevent unhandled promise rejections."
    ]
  },
  {
    name: "design-principles-for-developers",
    title: "Design Principles Every Developer Should Know",
    image: "/Image (3).jpg",
    content: [
      "Good design is not just for designers. Understanding spacing, typography, color theory, and visual hierarchy will make you a better developer and help you collaborate more effectively with design teams.",
      "Visual hierarchy guides the user's eye through a page. Use font size, weight, and color to distinguish between headings, subheadings, and body text.",
      "Spacing is one of the most underrated design tools. Consistent padding and margins using a spacing scale make layouts feel clean and intentional rather than crowded.",
      "Color theory basics: use a primary color for key actions such as buttons and links, a neutral palette for backgrounds and text, and accent colors sparingly."
    ]
  },
  {
    name: "modern-web-development-workflow",
    title: "Modern Web Development Workflow in 2026",
    image: "/image (9).jpg",
    content: [
      "The web development landscape has evolved significantly. Today's developers need to master version control, CI/CD pipelines, testing frameworks, and deployment strategies to build production-ready applications efficiently.",
      "Git is the foundation of modern development workflows. Learn branching strategies like Git Flow or trunk-based development to collaborate effectively with your team.",
      "Continuous Integration and Continuous Deployment automate testing and deployment. Tools like GitHub Actions, GitLab CI, and Jenkins help catch bugs early and ship faster.",
      "Testing is not optional. Unit tests, integration tests, and end-to-end tests ensure your code works as expected and prevent regressions as your codebase grows."
    ]
  },
  {
    name: "collaborative-coding-practices",
    title: "Collaborative Coding: Best Practices for Teams",
    image: "/image (10).jpg",
    content: [
      "Working in a team requires more than just coding skills. Learn how to write clear commit messages, conduct effective code reviews, communicate technical decisions, and maintain a healthy codebase that everyone can contribute to.",
      "Write meaningful commit messages that explain why a change was made, not just what changed. Follow a consistent format like Conventional Commits to make your history readable.",
      "Code reviews are opportunities to learn and improve code quality. Be constructive, ask questions, and focus on the code rather than the person. Both reviewers and authors benefit from this process.",
      "Documentation is communication. Keep your README updated, document complex logic with comments, and maintain a changelog so team members understand the evolution of the project."
    ]
  },
  {
    name: "full-stack-javascript-ecosystem",
    title: "Navigating the Full-Stack JavaScript Ecosystem",
    image: "/image (11).jpg",
    content: [
      "JavaScript has become a full-stack language. From React and Vue on the frontend to Node.js and Express on the backend, learn how to navigate the ecosystem and build complete applications with a unified language.",
      "Node.js enables JavaScript on the server. With npm's vast package ecosystem, you can build RESTful APIs, handle authentication, connect to databases, and more using JavaScript.",
      "Modern full-stack frameworks like Next.js and Remix blur the lines between frontend and backend, offering server-side rendering, API routes, and optimized data fetching out of the box.",
      "Understanding both sides of the stack makes you more versatile. You can debug issues end-to-end, make better architectural decisions, and communicate more effectively across teams."
    ]
  },
  {
    name: "optimizing-web-performance",
    title: "Web Performance Optimization: A Practical Guide",
    image: "/image (12).jpg",
    content: [
      "Performance directly impacts user experience and SEO rankings. Learn practical techniques to optimize loading times, reduce bundle sizes, implement lazy loading, and measure performance metrics that matter.",
      "Start by measuring. Use Lighthouse, WebPageTest, and browser DevTools to identify bottlenecks. Core Web Vitals like LCP, FID, and CLS are key metrics that Google uses for ranking.",
      "Optimize images by using modern formats like WebP or AVIF, implementing responsive images with srcset, and lazy loading images below the fold. Images often account for the majority of page weight.",
      "Code splitting and tree shaking reduce JavaScript bundle sizes. Only ship the code users need for the current page, and dynamically import components that are not immediately visible."
    ]
  }
];

export default articles;
