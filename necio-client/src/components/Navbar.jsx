import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-[#00B4D8] bg-[#00B4D8] text-[#001E4B]'
      : 'border-transparent text-sky-200 hover:border-[#00B4D8] hover:bg-[#00B4D8]/10 hover:text-white',
  ].join(' ');

const mobileLinkClassName = ({ isActive }) =>
  [
    'block rounded-xl px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'bg-[#00B4D8] text-[#001E4B]'
      : 'text-sky-200 hover:bg-[#00B4D8]/10 hover:text-white',
  ].join(' ');

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#00B4D8] bg-[#001E4B]/95 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/necio-logo.png" alt="Necio Logo" className="h-12 w-auto" />
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          <nav className="flex items-center gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/auth/signin"
            className="ml-2 rounded-full border-2 border-[#00B4D8] bg-[#00B4D8] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#001E4B] transition hover:bg-[#00B4D8]/80"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex items-center justify-center rounded-lg p-2 text-sky-200 transition hover:bg-[#00B4D8]/10 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-[#00B4D8]/30 bg-[#001E4B]/98 px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={mobileLinkClassName}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/auth/signin"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-xl bg-[#00B4D8] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#001E4B] transition hover:bg-[#00B4D8]/80"
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
