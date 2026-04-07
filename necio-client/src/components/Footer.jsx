import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <img src="/necio-logo.png" alt="Necio Logo" className="h-10 w-auto" />
        </div>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              'text-[11px] font-semibold uppercase tracking-[0.24em] transition ' +
              (isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              'text-[11px] font-semibold uppercase tracking-[0.24em] transition ' +
              (isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900')
            }
          >
            About
          </NavLink>
          <NavLink
            to="/articles"
            className={({ isActive }) =>
              'text-[11px] font-semibold uppercase tracking-[0.24em] transition ' +
              (isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900')
            }
          >
            Articles
          </NavLink>
        </nav>

        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
          &copy; {new Date().getFullYear()} Rainiel Necio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
