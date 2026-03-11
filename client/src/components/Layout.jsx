/* File: client/src/components/Layout.jsx - Site chrome + routing outlet */
import { Link, NavLink, Outlet } from 'react-router-dom';
import { navigationLinks } from '../data/siteContent.js';

const Layout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">
      <a
        href="#mainContent"
        className="sr-only inline-flex h-10 items-center justify-center bg-emerald-500 px-4 text-sm font-semibold text-slate-950 focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:rounded-md"
      >
        Skip to content
      </a>

      <header className="border-b border-slate-800 bg-slate-900/60 shadow-lg shadow-slate-950/30 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <Link to="/" className="flex items-center gap-3 text-xl font-semibold text-emerald-400">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-base">
              BL
            </span>
            <span>BrokenLink AI</span>
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm text-slate-300">
            {navigationLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition hover:bg-slate-800 hover:text-emerald-300 ${
                    isActive ? 'bg-slate-800 text-emerald-300' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="mainContent" className="mx-auto w-full max-w-6xl px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-400">&copy; {currentYear} BrokenLink AI. Crafted for quality-first marketing teams.</div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            {navigationLinks.map(({ label, path }) => (
              <NavLink key={`footer-${path}`} to={path} className="hover:text-emerald-300">
                {label}
              </NavLink>
            ))}
            <a className="hover:text-emerald-300" href="mailto:privacy@brokenlink.ai">
              Privacy inquiries
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
