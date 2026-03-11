/* File: client/src/pages/Features.jsx - Feature, workflow, and testimonial content */
import AdSlot from '../components/AdSlot.jsx';
import { featureHighlights, workflowSteps, testimonials } from '../data/siteContent.js';

const Features = () => (
  <div className="flex flex-col gap-12">
    <section className="flex flex-col gap-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-emerald-400">Product capabilities</p>
        <h1 className="mt-2 text-3xl font-semibold text-emerald-300">Features that deliver measurable impact</h1>
        <p className="mt-2 text-sm text-slate-300">
          BrokenLink AI combines reliable crawling with marketing-friendly insights so your team can release fast and stay compliant
          with search engine publisher policies.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {featureHighlights.map(({ title, description }) => (
          <article key={title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-200">{title}</h2>
            <p className="mt-2 text-sm text-slate-300">{description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
      <h2 className="text-2xl font-semibold text-slate-200">How BrokenLink AI slots into your workflow</h2>
      <ol className="mt-6 space-y-6">
        {workflowSteps.map(({ title, copy }, index) => (
          <li key={title} className="flex gap-4">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-lg font-semibold text-emerald-300">
              {index + 1}
            </span>
            <div className="space-y-2 text-sm text-slate-300">
              <h3 className="text-base font-semibold text-slate-100">{title}</h3>
              <p>{copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>

    <div className="mx-auto w-full max-w-2xl py-4">
      <AdSlot slot="2321671921" />
    </div>

    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-semibold text-slate-200">Trusted by marketing, product, and agency teams</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map(({ quote, author }) => (
          <blockquote
            key={author}
            className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-sm text-slate-200"
          >
            <p className="italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
            <cite className="mt-4 block text-xs uppercase tracking-widest text-emerald-200">{author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  </div>
);

export default Features;
