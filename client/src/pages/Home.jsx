/* File: client/src/pages/Home.jsx - Landing + live scan experience */
import { useMemo, useState } from 'react';
import axios from 'axios';
import AdSlot from '../components/AdSlot.jsx';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const statusTone = (broken) => (broken ? 'text-rose-400 bg-rose-950/50' : 'text-emerald-400 bg-emerald-950/30');
const brokenLabel = (broken) => (broken ? 'Broken' : 'OK');
const formatStatus = (statusCode) => (statusCode ? `${statusCode}` : 'N/A');

const Home = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);

  const scanSummary = useMemo(() => {
    if (!results.length) {
      return null;
    }
    const broken = results.filter((item) => item.broken);
    return {
      total: results.length,
      broken: broken.length,
      healthy: results.length - broken.length,
    };
  }, [results]);

  const handleScan = async (event) => {
    event.preventDefault();
    const targetUrl = url.trim();
    if (!targetUrl) {
      setError('Please enter a valid URL before scanning.');
      return;
    }

    setIsLoading(true);
    setError('');
    setResults([]);

    const requestHeaders = { 'Content-Type': 'application/json' };
    const payloadBase = { url: targetUrl };

    try {
      let response;
      try {
        response = await axios.post(
          `${API_BASE_URL}/scan`,
          { ...payloadBase, allowBrowserFallback: false },
          { headers: requestHeaders },
        );
      } catch (initialError) {
        const apiReason = initialError.response?.data?.reason;
        if (apiReason !== 'browser-required') {
          throw initialError;
        }
        response = await axios.post(
          `${API_BASE_URL}/scan`,
          { ...payloadBase, allowBrowserFallback: true },
          { headers: requestHeaders, timeout: 60000 },
        );
      }

      setResults(Array.isArray(response.data) ? response.data : []);
    } catch (requestError) {
      setError(requestError.response?.data?.error ?? 'Scan failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          Ship polished websites with confidence, even on fast release cycles.
        </h1>
        <p className="text-base text-slate-300 md:text-lg">
          BrokenLink AI audits your marketing site, documentation, and product surfaces for dead ends, redirect loops,
          and missing media. Delight visitors and search engines without babysitting spreadsheets.
        </p>
        <ul className="grid gap-3 text-sm text-slate-300 md:grid-cols-2">
          <li className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
            <strong className="block text-emerald-300">Instant diagnostics</strong>
            Highlights broken assets as soon as the crawl completes.
          </li>
          <li className="rounded-lg border border-sky-500/30 bg-sky-500/10 px-4 py-3">
            <strong className="block text-sky-300">Marketing-safe</strong>
            Respects crawl budgets, referrers, and cookie consent preferences.
          </li>
        </ul>
      </section>

      <section>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 shadow-lg shadow-slate-950/20">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-emerald-300">Run a live scan</h2>
            <p className="text-sm text-slate-300">
              Paste a public URL and BrokenLink AI will crawl internal pages. We respect robots.txt and pause politely
              between requests to mimic human browsing velocity.
            </p>
          </div>

          <form className="mt-6 flex flex-col gap-4 md:flex-row" onSubmit={handleScan}>
            <label className="w-full md:flex-1" htmlFor="targetUrl">
              <span className="sr-only">Website URL</span>
              <input
                id="targetUrl"
                name="targetUrl"
                type="url"
                placeholder="https://your-site.com"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-3 text-base text-slate-100 shadow-inner placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                disabled={isLoading}
                required
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-500/60"
              disabled={isLoading}
            >
              {isLoading ? 'Scanning.' : 'Scan Site'}
            </button>
          </form>

          {error && (
            <p className="mt-4 rounded-md border border-rose-500/30 bg-rose-950/40 px-4 py-3 text-sm text-rose-300">
              {error}
            </p>
          )}

          {scanSummary && (
            <div className="mt-6 grid gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Total Links</p>
                <p className="text-xl font-semibold text-slate-200">{scanSummary.total}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Healthy</p>
                <p className="text-xl font-semibold text-emerald-300">{scanSummary.healthy}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Requires Fix</p>
                <p className="text-xl font-semibold text-rose-300">{scanSummary.broken}</p>
              </div>
            </div>
          )}

          <div className="mt-8 overflow-hidden rounded-xl border border-slate-800">
            <div className="border-b border-slate-800 bg-slate-900/70 px-6 py-4">
              <h3 className="text-lg font-semibold text-slate-200">Latest scan output</h3>
              <p className="text-xs text-slate-400">Links and assets collected from the crawl. Broken items glow red for easy triage.</p>
            </div>
            <div className="max-h-[420px] overflow-y-auto">
              <table className="min-w-full divide-y divide-slate-800 text-left text-sm">
                <thead className="sticky top-0 z-10 bg-slate-900/60 text-slate-300">
                  <tr>
                    <th className="px-6 py-3 font-medium">Link</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {results.length === 0 && !isLoading && (
                    <tr>
                      <td className="px-6 py-6 text-slate-500" colSpan={3}>
                        Run a scan to see the latest results.
                      </td>
                    </tr>
                  )}
                  {results.map(({ link, statusCode, broken }) => (
                    <tr key={`${link}-${statusCode ?? 'unknown'}`} className={statusTone(broken)}>
                      <td className="max-w-2xl truncate px-6 py-4">
                        <a href={link} target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-2">
                          {link}
                        </a>
                      </td>
                      <td className="px-6 py-4">{formatStatus(statusCode)}</td>
                      <td className="px-6 py-4 font-semibold">{brokenLabel(broken)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <h3 className="text-lg font-semibold text-slate-200">Why teams switch to BrokenLink AI</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          <li>
            <strong className="text-emerald-300">Frictionless onboarding:</strong> start scanning in minutes with zero setup scripts.
          </li>
          <li>
            <strong className="text-emerald-300">Actionable alerts:</strong> receive concise summaries, not raw server logs.
          </li>
          <li>
            <strong className="text-emerald-300">Compliance ready:</strong> privacy-first architecture and consent flows built for modern ad networks.
          </li>
        </ul>
      </section>

      <div className="mx-auto w-full max-w-2xl py-4">
        <AdSlot slot="7770381678" />
      </div>
    </div>
  );
};

export default Home;
