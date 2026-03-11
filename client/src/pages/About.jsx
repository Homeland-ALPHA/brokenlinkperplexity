/* File: client/src/pages/About.jsx - About page for E-E-A-T signals */
import { Link } from 'react-router-dom';
import { officeDetails } from '../data/siteContent.js';

const About = () => (
  <div className="flex flex-col gap-12">
    <section className="flex flex-col gap-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-emerald-400">About us</p>
        <h1 className="mt-2 text-3xl font-semibold text-emerald-300">
          Building better websites, one link at a time
        </h1>
      </header>

      <div className="space-y-4 text-sm leading-relaxed text-slate-300">
        <p>
          BrokenLink AI was founded with a clear mission: help website owners maintain the quality and
          reliability of their online presence without the tedium of manual checking. We believe that
          every broken link is a missed connection between a business and its audience, and that fixing
          those connections should be fast, automated, and accessible to teams of every size.
        </p>
        <p>
          Our platform combines intelligent crawling with actionable reporting to surface the issues
          that matter most. Whether you manage a five-page brochure site or a ten-thousand-page
          e-commerce catalog, BrokenLink AI adapts to your scale and delivers prioritized insights
          so you can focus your energy where it counts.
        </p>
        <p>
          We started this project after years of experience in digital marketing, technical SEO, and
          web development. We saw teams wasting hours every month manually clicking through pages,
          copying broken URLs into spreadsheets, and losing track of fixes across redesigns and CMS
          migrations. There had to be a better way, so we built one.
        </p>
      </div>
    </section>

    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
      <h2 className="text-2xl font-semibold text-slate-200">Our values</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-emerald-300">Privacy first</h3>
          <p className="text-sm text-slate-300">
            Scan data belongs to you. We encrypt everything at rest, never share data with
            advertisers, and purge raw payloads after thirty days unless you opt into archiving.
            Our crawlers identify themselves transparently and respect robots.txt directives.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-emerald-300">Quality over quantity</h3>
          <p className="text-sm text-slate-300">
            We would rather deliver ten actionable insights than a thousand noisy warnings.
            Every finding in a BrokenLink AI report is prioritized by severity and accompanied
            by clear guidance on how to fix it.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-emerald-300">Reliability</h3>
          <p className="text-sm text-slate-300">
            Link monitoring only works if it runs consistently. Our infrastructure is designed
            for uptime, with redundant crawling nodes and automatic retries that ensure your
            scheduled scans complete even if a single server hiccups.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-emerald-300">Accessibility</h3>
          <p className="text-sm text-slate-300">
            We build our own product with accessibility in mind and help you do the same.
            BrokenLink AI surfaces missing alt text, empty anchor tags, and ARIA role gaps
            alongside traditional broken link reports.
          </p>
        </div>
      </div>
    </section>

    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-slate-200">Our expertise</h2>
      <div className="space-y-4 text-sm leading-relaxed text-slate-300">
        <p>
          The team behind BrokenLink AI brings together experience in technical SEO, full-stack
          web development, cloud infrastructure, and accessibility consulting. We have collectively
          audited thousands of websites across industries including e-commerce, SaaS, publishing,
          education, and government. That breadth of experience informs every feature we build and
          every heuristic our crawler uses to prioritize findings.
        </p>
        <p>
          We stay current with search engine guidelines, web standards, and accessibility
          regulations so that our tool reflects the latest best practices. When Google updates its
          Search Essentials documentation or the W3C publishes new WCAG criteria, we evaluate the
          implications and update our scanning logic accordingly.
        </p>
      </div>
    </section>

    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
      <h2 className="text-2xl font-semibold text-slate-200">Get in touch</h2>
      <div className="mt-4 space-y-3 text-sm text-slate-300">
        <p>
          We love hearing from our users. Whether you have a feature request, a question about
          your scan results, or just want to say hello, reach out anytime.
        </p>
        <ul className="space-y-2">
          <li>
            <strong className="text-slate-200">Email:</strong>{' '}
            <a href={`mailto:${officeDetails.email}`} className="text-emerald-300 underline decoration-dotted underline-offset-4">
              {officeDetails.email}
            </a>
          </li>
          <li>
            <strong className="text-slate-200">Hours:</strong> {officeDetails.hours}
          </li>
          <li>
            <strong className="text-slate-200">Address:</strong> {officeDetails.address}
          </li>
        </ul>
        <p className="pt-2">
          For technical support or billing questions, visit our{' '}
          <Link to="/support" className="text-emerald-300 underline decoration-dotted underline-offset-4">
            Support page
          </Link>.
        </p>
      </div>
    </section>
  </div>
);

export default About;
