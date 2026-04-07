import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Hero Section
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Hi, I'm Rainiel Necio
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              A passionate web developer and designer who loves turning ideas into elegant, functional digital experiences. Welcome to my portfolio.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-65 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img
                src="/Rain Picture.jpg"
                alt="Rainiel Necio"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            KPI Section
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick overview blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">12+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Projects
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">3+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years Coding
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">8</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Technologies
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">100%</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Passion
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Feature Cards
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Core skills &amp; focus areas</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img src="/Image (2).jpg" alt="Web development coding setup" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Web Development</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Building responsive, fast, and accessible web applications using modern frameworks like React and tools like Vite and Tailwind CSS.
            </p>
            <Button className="mt-4" to="/about" variant="primary">Learn More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img src="/Image (6).jpg" alt="Mobile app UI development" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">UI/UX Design</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Crafting clean, intuitive interfaces that prioritize user experience — from wireframes to polished, pixel-perfect designs.
            </p>
            <Button className="mt-4" to="/about" variant="primary">Learn More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img src="/Image (3).jpg" alt="Android app development" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Problem Solving</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Tackling complex challenges with logical thinking, clean code architecture, and a drive to continuously learn and improve.
            </p>
            <Button className="mt-4" to="/about" variant="primary">Learn More</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
