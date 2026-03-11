/* File: client/src/pages/Policies.jsx - Privacy and terms content with structured sections */
import { privacyPolicySections, termsOfServiceSections } from '../data/siteContent.js';

const Policies = () => (
  <div className="flex flex-col gap-12">
    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-emerald-400">Compliance</p>
        <h1 className="mt-2 text-3xl font-semibold text-emerald-300">Privacy policy</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: March 2026</p>
      </header>
      <div className="mt-8 space-y-8">
        {privacyPolicySections.map(({ heading, paragraphs }) => (
          <div key={heading}>
            <h2 className="text-lg font-semibold text-slate-200">{heading}</h2>
            <div className="mt-3 space-y-3 text-sm text-slate-300">
              {paragraphs.map((paragraph, index) => (
                <p key={`${heading}-p-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
      <header>
        <h2 className="text-3xl font-semibold text-emerald-300">Terms of service</h2>
        <p className="mt-2 text-sm text-slate-400">Last updated: March 2026</p>
      </header>
      <div className="mt-8 space-y-8">
        {termsOfServiceSections.map(({ heading, paragraphs }) => (
          <div key={heading}>
            <h3 className="text-lg font-semibold text-slate-200">{heading}</h3>
            <div className="mt-3 space-y-3 text-sm text-slate-300">
              {paragraphs.map((paragraph, index) => (
                <p key={`${heading}-p-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Policies;
