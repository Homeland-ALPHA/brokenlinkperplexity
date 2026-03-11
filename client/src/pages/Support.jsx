/* File: client/src/pages/Support.jsx - Contact information and form */
import { useState } from 'react';
import { officeDetails } from '../data/siteContent.js';

const Support = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('');

  const handleContactInput = (field) => (event) => {
    setContactForm((previous) => ({ ...previous, [field]: event.target.value }));
    setContactStatus('');
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactStatus('Please complete all fields before submitting.');
      return;
    }

    const subject = `BrokenLink AI support request from ${contactForm.name}`;
    const body = `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\n${contactForm.message}`;
    const mailtoUrl = `mailto:hello@brokenlink.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }

    setContactStatus('We opened your email client with a pre-filled message. Send it to reach our team.');
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr,3fr]">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <p className="text-xs uppercase tracking-widest text-emerald-400">Support</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-200">Need a hand?</h1>
        <p className="mt-2 text-sm text-slate-300">
          Our support team responds to most inquiries within one business day. Tell us about your site, share any platform requirements,
          and we will point you toward the right setup.
        </p>
        <dl className="mt-6 space-y-3 text-sm text-slate-300">
          <div>
            <dt className="text-xs uppercase tracking-widest text-slate-500">Email</dt>
            <dd>
              <a className="text-emerald-300 underline" href={`mailto:${officeDetails.email}`}>
                {officeDetails.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-slate-500">Business hours</dt>
            <dd>{officeDetails.hours}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-slate-500">Office</dt>
            <dd>{officeDetails.address}</dd>
          </div>
        </dl>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="text-lg font-semibold text-slate-200">Contact form</h2>
        <p className="mt-2 text-sm text-slate-300">
          Send us a quick note and we will route it to the right teammate. We only use this information to follow up on your request.
        </p>
        <form className="mt-6 grid gap-4" onSubmit={handleContactSubmit}>
          <label className="text-sm text-slate-200" htmlFor="contact-name">
            Name
            <input
              id="contact-name"
              name="contact-name"
              type="text"
              className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              placeholder="Your name"
              value={contactForm.name}
              onChange={handleContactInput('name')}
              required
            />
          </label>
          <label className="text-sm text-slate-200" htmlFor="contact-email">
            Email
            <input
              id="contact-email"
              name="contact-email"
              type="email"
              className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              placeholder="name@company.com"
              value={contactForm.email}
              onChange={handleContactInput('email')}
              required
            />
          </label>
          <label className="text-sm text-slate-200" htmlFor="contact-message">
            How can we help?
            <textarea
              id="contact-message"
              name="contact-message"
              rows={4}
              className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              placeholder="Share details about your project, launch timing, or site quality goals."
              value={contactForm.message}
              onChange={handleContactInput('message')}
              required
            />
          </label>
          <button
            type="submit"
            className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            Draft email to support
          </button>
          {contactStatus && (
            <p className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-200">
              {contactStatus}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Support;
