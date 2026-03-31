import Button from '../components/Button';

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Articles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Article card grid
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600">
            A collection of articles on web development, design, tools, and career growth. Written to share what I've learned and help others on their journey.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img src="/Image (7).jpg" alt="React code on screen" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Getting Started with React in 2025</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              React remains one of the most popular JavaScript libraries for building user interfaces. Explore the fundamentals of React — components, props, state, and hooks — with practical examples.
            </p>
            <Button className="mt-4" variant="primary">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img src="/Image (2).jpg" alt="Coding setup" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Mastering Tailwind CSS: Tips &amp; Tricks</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Tailwind CSS has changed how developers approach styling. Learn how to use utility classes effectively, build responsive layouts, and keep your codebase clean and maintainable.
            </p>
            <Button className="mt-4" variant="primary">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img src="/Image (5).jpg" alt="SQL Server development" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Why Vite is the Future of Frontend Tooling</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Vite offers blazing-fast development server startup and hot module replacement. Discover why developers are switching from Webpack to Vite and how it improves your workflow.
            </p>
            <Button className="mt-4" variant="primary">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img src="/Image (4).jpg" alt="University building" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Building a Developer Portfolio That Stands Out</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Your portfolio is your first impression. Learn what hiring managers look for, how to structure your projects, and how to make your personal site reflect your skills and personality.
            </p>
            <Button className="mt-4" variant="primary">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img src="/Image (6).jpg" alt="Pose detection app" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Understanding Async/Await in JavaScript</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Asynchronous programming is a core part of modern JavaScript. This article breaks down promises, async/await syntax, error handling, and real-world patterns for cleaner code.
            </p>
            <Button className="mt-4" variant="primary">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img src="/Image (3).jpg" alt="Android Studio development" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Design Principles Every Developer Should Know</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Good design is not just for designers. Understanding spacing, typography, color theory, and visual hierarchy will make you a better developer and improve team collaboration.
            </p>
            <Button className="mt-4" variant="primary">Read More</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
