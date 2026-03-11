/* File: client/src/pages/Resources.jsx - Resource guides and ads */
import AdSlot from '../components/AdSlot.jsx';
import { resourceGuides } from '../data/siteContent.js';

const Resources = () => (
  <div className="flex flex-col gap-12">
    <section className="flex flex-col gap-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-emerald-400">Education</p>
        <h1 className="mt-2 text-3xl font-semibold text-emerald-300">Resources to improve site quality</h1>
        <p className="mt-2 text-sm text-slate-300">
          Keep learning with guides curated by the BrokenLink AI team. Each article supports search engine best practices and site quality
          standards.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {resourceGuides.map(({ title, description, href }) => (
          <article key={title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-sm text-slate-300">
            <h2 className="text-base font-semibold text-slate-100">{title}</h2>
            <p className="mt-2">{description}</p>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-emerald-300 underline decoration-dotted underline-offset-4"
            >
              Read the guide
              <span aria-hidden>-&gt;</span>
            </a>
          </article>
        ))}
      </div>
    </section>

    <AdSlot slot="7770381678" className="max-w-xl" />
  </div>
);

export default Resources;
