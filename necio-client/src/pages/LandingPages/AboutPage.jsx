import Button from '../../components/Button';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex h-72 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img
                src="/Rain 2.jpg"
                alt="Rainiel Necio"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Section
            </p>
            <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Passionate developer and creative thinker focused on building meaningful digital experiences.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
              I'm Rainiel Necio — a web developer and student who is deeply passionate about building meaningful digital experiences. I believe great design and clean code go hand in hand. When I'm not coding, I'm exploring new technologies, sketching UI ideas, or reading about the latest trends in software development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/articles" variant="secondary">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Profile Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick Summary blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">3+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years Learning
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">12+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Projects
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">8</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Technologies
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Focus Areas
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Section Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              My Journey
            </h2>
            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">2022 — Started Web Development</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Began learning HTML, CSS, and JavaScript — building small projects and falling in love with the craft of creating for the web.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">2023 — Dived into React &amp; Frameworks</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Expanded into React, component-based architecture, and modern tooling like Vite and Tailwind CSS to build scalable UIs.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">2024 — Built Real-World Projects</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  Delivered multiple projects including portfolio sites, dashboards, and interactive web apps for personal and academic use.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Visual Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
                <img src="/Image (1).jpg" alt="Finisher run with friends" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
                <img src="/Image (2).jpg" alt="Coding setup" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
                <img src="/Image (8).jpg" alt="Android Studio" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
                <img src="/Image (5).jpg" alt="SQL Server development" className="h-full w-full object-cover" />
              </div>
            </div>
            <Button className="mt-5">View Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
