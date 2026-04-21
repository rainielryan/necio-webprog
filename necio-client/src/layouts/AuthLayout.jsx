import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">

        {/* Branding panel */}
        <div className="relative hidden flex-col justify-between overflow-hidden border-r-2 border-zinc-300 bg-[#001E4B] p-12 lg:flex">
          <div className="absolute inset-0 bg-linear-to-br from-[#001E4B] via-[#002966] to-[#003580] opacity-90" />

          {/* Decorative circles */}
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-2 border-[#00B4D8]/20" />
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full border-2 border-[#00B4D8]/10" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full border-2 border-[#00B4D8]/20" />

          <div className="relative z-10">
            <Link to="/">
              <img src="/necio-logo.png" alt="Necio Logo" className="h-14 w-auto" />
            </Link>
          </div>

          <div className="relative z-10">
            <blockquote className="space-y-4">
              <p className="text-xl font-semibold leading-relaxed text-white">
                "Websites promote you 24/7: No employee will do that."
              </p>
              <footer className="text-sm text-sky-300">
                — Paul Cookson
              </footer>
            </blockquote>
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#00B4D8]/30" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-400">
              Necio Portfolio
            </p>
            <div className="h-px flex-1 bg-[#00B4D8]/30" />
          </div>
        </div>

        {/* Form panel */}
        <main className="flex min-h-screen items-center bg-zinc-50 px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            {/* Mobile logo */}
            <div className="mb-8 lg:hidden">
              <Link to="/">
                <img src="/necio-logo.png" alt="Necio Logo" className="h-12 w-auto" />
              </Link>
            </div>
            <Outlet />
          </div>
        </main>

      </div>
    </section>
  );
};

export default AuthLayout;
