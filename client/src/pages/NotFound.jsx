/* File: client/src/pages/NotFound.jsx - Fallback route */
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-start gap-6">
    <div className="rounded-xl border border-rose-500/40 bg-rose-950/30 p-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-rose-300">404</p>
      <h1 className="mt-2 text-3xl font-semibold text-slate-100">Page not found</h1>
      <p className="mt-2 text-sm text-slate-300">The page you were looking for does not exist. Choose another section to keep exploring.</p>
      <Link
        to="/"
        className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow shadow-emerald-500/20 transition hover:bg-emerald-400"
      >
        Return home
      </Link>
    </div>
  </div>
);

export default NotFound;
