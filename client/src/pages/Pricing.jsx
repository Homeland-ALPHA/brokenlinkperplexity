/* File: client/src/pages/Pricing.jsx - Pricing tiers and FAQ content */
import { faqItems, pricingPlans } from '../data/siteContent.js';

const Pricing = () => (
  <div className="flex flex-col gap-12">
    <section className="flex flex-col gap-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-emerald-400">Plans</p>
        <h1 className="mt-2 text-3xl font-semibold text-emerald-300">Pricing that scales with your ambition</h1>
        <p className="mt-2 text-sm text-slate-300">
          Start free, upgrade when you are ready to automate reporting, and keep stakeholders in the loop with predictable monthly
          billing.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {pricingPlans.map(({ name, price, cadence, cta, perks }) => (
          <article key={name} className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 shadow">
            <div>
              <h2 className="text-lg font-semibold text-slate-200">{name}</h2>
              <p className="mt-2 text-3xl font-bold text-emerald-300">
                {price}
                <span className="ml-1 text-sm font-normal text-slate-400">{cadence}</span>
              </p>
            </div>
            <button
              type="button"
              className="rounded-md border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              {cta}
            </button>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>

    <section className="flex flex-col gap-6">
      <header>
        <h2 className="text-2xl font-semibold text-slate-200">Frequently asked questions</h2>
        <p className="mt-2 text-sm text-slate-300">Common questions about using BrokenLink AI to keep your site healthy and search-friendly.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {faqItems.map(({ question, answer }) => (
          <article key={question} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-sm font-semibold text-slate-100">{question}</h3>
            <p className="mt-2 text-sm text-slate-300">{answer}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default Pricing;
