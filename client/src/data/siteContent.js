/* File: client/src/data/siteContent.js - Centralized marketing content for BrokenLink AI */
export const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Resources', path: '/resources' },
  { label: 'About', path: '/about' },
  { label: 'Support', path: '/support' },
  { label: 'Policies', path: '/policies' },
];

export const featureHighlights = [
  {
    title: 'Deep link coverage',
    description:
      'Crawl up to one hundred internal pages per scan, with smart throttling that respects robots.txt and keeps your SEO footprint clean.',
  },
  {
    title: 'Rich media validation',
    description:
      'Monitor images, video streams, favicons, and downloadable assets. BrokenLink AI flags missing files and content-type mismatches in real time.',
  },
  {
    title: 'Accessibility friendly',
    description:
      'Surface missing alt text, empty anchor tags, and ARIA role gaps so you can uplift accessibility scores while fixing dead links.',
  },
  {
    title: 'Shareable intelligence',
    description:
      'Export branded PDF or CSV reports for clients, including prioritized fixes, supporting evidence, and change history.',
  },
];

export const workflowSteps = [
  {
    title: 'Enter a URL',
    copy:
      'Provide the page where your audit should begin. We automatically scope the crawl to the same domain unless you enable external exploration.',
  },
  {
    title: 'Let the crawler work',
    copy:
      'BrokenLink AI fans out requests and follows internal links while respecting timeouts and retry rules, mirroring how real users experience the site.',
  },
  {
    title: 'Review prioritized fixes',
    copy:
      'Failed requests, redirect loops, and content-type mismatches are grouped by severity so you can resolve the riskiest issues first.',
  },
];

export const testimonials = [
  {
    quote:
      'We embedded BrokenLink AI into our client onboarding checklist and reclaimed hours that used to disappear into manual QA.',
    author: 'Sanjana Patel, Founder at Northbridge Studio',
  },
  {
    quote:
      'The accessibility insights are a bonus. We caught mislabeled CTAs that were holding back our Lighthouse score before shipping a redesign.',
    author: 'Devon Miller, Growth Engineer at Switchboard',
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'per month',
    cta: 'Launch for free',
    perks: ['1,000 crawled pages', 'Email notifications', 'Manual CSV export', 'Community support'],
  },
  {
    name: 'Growth',
    price: '$79',
    cadence: 'per month',
    cta: 'Start a trial',
    perks: ['10,000 crawled pages', 'Weekly scheduling', 'White-label PDF reports', 'Priority chat support'],
  },
  {
    name: 'Enterprise',
    price: "Let's chat",
    cadence: '',
    cta: 'Book a demo',
    perks: ['Unlimited domains', 'Dedicated success manager', 'Custom export integrations', 'SLA + security review'],
  },
];

export const faqItems = [
  {
    question: 'How many pages can I scan per month?',
    answer:
      'The free plan includes 1,000 crawled pages every 30 days. Growth and Enterprise tiers expand that quota and unlock historical reporting.',
  },
  {
    question: 'Does BrokenLink AI impact my SEO?',
    answer:
      'No. We respect robots directives, throttle requests, cache results, and identify ourselves with a friendly user agent so your analytics remain trustworthy.',
  },
  {
    question: 'Can I schedule recurring scans?',
    answer:
      'Yes. Growth plans support weekly scheduling and Enterprise customers can configure custom cadences via the API or our Zapier integration.',
  },
  {
    question: 'Is my scan data private?',
    answer:
      'Absolutely. We store scan results in an encrypted database, purge raw payloads after 30 days, and never share your data with advertisers.',
  },
];

export const resourceGuides = [
  {
    title: 'Technical SEO checklist for scale-ups',
    description: 'A 12-point audit to keep search crawlers happy while you iterate on product pages.',
    href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
  },
  {
    title: 'Designing accessible navigation that converts',
    description: 'Practical tips to combine WCAG guidelines with high-performing marketing layouts.',
    href: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
  },
  {
    title: 'How dead links impact paid media performance',
    description: 'See why QA matters before you invest in campaigns and how broken link monitoring fits the workflow.',
    href: 'https://support.google.com/google-ads/answer/2404197',
  },
  {
    title: 'Google Search Essentials: site quality guidelines',
    description: 'The official documentation on what Google considers high-quality content and trustworthy site behavior.',
    href: 'https://developers.google.com/search/docs/essentials',
  },
  {
    title: 'HTTP status codes explained for web developers',
    description: 'A complete reference for every HTTP response code, from 200 OK to 503 Service Unavailable, on the MDN Web Docs.',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status',
  },
  {
    title: 'WCAG 2.2 quick reference guide',
    description: 'The W3C quick reference for Web Content Accessibility Guidelines with filterable success criteria and techniques.',
    href: 'https://www.w3.org/WAI/WCAG22/quickref/',
  },
  {
    title: 'Understanding URL structure for SEO',
    description: 'Google Search Central guide on building URL structures that are crawlable, readable, and durable over time.',
    href: 'https://developers.google.com/search/docs/crawling-indexing/url-structure',
  },
];

export const privacyPolicySections = [
  {
    heading: 'Information We Collect',
    paragraphs: [
      'When you create an account, we collect your name, email address, and a securely hashed password. We do not store passwords in plain text. If you subscribe to a paid plan, payment processing is handled entirely by our third-party payment processor; we never receive or store your credit card number, bank account details, or other payment credentials.',
      'When you run a scan, we collect the URLs you submit, the HTTP response metadata returned by those URLs, and diagnostic details such as response times and content-type headers. We also collect standard web server logs including your IP address, browser type, referring page, and the pages you visit on our site.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    paragraphs: [
      'We use your account information to authenticate you, deliver scan results, send transactional emails such as scan completion notifications, and provide customer support. We use scan data to generate reports, identify broken links and accessibility issues, and improve our crawling algorithms.',
      'We may use aggregated, anonymized data to analyze usage trends, improve our service, and publish industry benchmarks. Aggregated data cannot be used to identify any individual user or website.',
    ],
  },
  {
    heading: 'Data Storage and Security',
    paragraphs: [
      'All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.2 or higher. Scan results are accessible only to the account that initiated the scan. Raw scan payloads are automatically purged after thirty days unless you opt into historical archiving on a paid plan.',
      'We host our infrastructure with reputable cloud providers that maintain SOC 2, ISO 27001, and other industry-standard certifications. We conduct regular security reviews and vulnerability assessments.',
    ],
  },
  {
    heading: 'Third-Party Services',
    paragraphs: [
      'We rely on a limited set of sub-processors including cloud hosting providers, analytics platforms, and payment processors. Each partner is reviewed for GDPR and CCPA alignment, and we execute data-protection agreements with every sub-processor to ensure your information remains safe.',
      'We use privacy-respecting analytics to understand how visitors use our site. We do not sell your personal information to any third party.',
    ],
  },
  {
    heading: 'Your Rights',
    paragraphs: [
      'You retain full control of your data. You can export or delete your account at any time from the dashboard. You also have the right to request access to, rectification of, or erasure of your personal data by emailing privacy@brokenlink.ai. We respond to all requests within thirty days.',
      'If you are located in the European Economic Area, you have additional rights under GDPR including the right to data portability and the right to lodge a complaint with your local supervisory authority. California residents have rights under the CCPA including the right to know what personal information is collected and the right to opt out of the sale of personal information.',
    ],
  },
  {
    heading: 'Cookies and Tracking',
    paragraphs: [
      'We use essential cookies to maintain your login session and remember your preferences. We use optional analytics cookies to understand how visitors interact with our site. We display a consent banner for visitors from regions that require it, and no non-essential cookies are set until you provide consent.',
      'You can manage cookie preferences through your browser settings or through the consent banner displayed on your first visit.',
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      'BrokenLink AI is not directed at children under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 16, we will take steps to delete that information promptly.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    paragraphs: [
      'If we make material updates to this privacy policy, we will notify you by email and post the revision date prominently on this page. Continued use of BrokenLink AI after changes take effect constitutes acceptance of the updated policy.',
    ],
  },
  {
    heading: 'Contact Us',
    paragraphs: [
      'If you have questions about this privacy policy or our data practices, contact us at privacy@brokenlink.ai or write to us at 60 East 42nd Street, Suite 1201, New York, NY 10165.',
    ],
  },
];

export const termsOfServiceSections = [
  {
    heading: 'Acceptance of Terms',
    paragraphs: [
      'By accessing or using BrokenLink AI, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you disagree with any part of these terms, you must discontinue use of the platform immediately.',
    ],
  },
  {
    heading: 'Permitted Use',
    paragraphs: [
      'You may only use BrokenLink AI to scan websites you own or have explicit written permission to audit. Automated scraping of unrelated third-party properties violates these terms and will lead to immediate suspension of your account.',
      'You agree not to use the service to conduct denial-of-service attacks, overwhelm target servers, or engage in any activity that could harm third parties or the integrity of the BrokenLink AI platform.',
    ],
  },
  {
    heading: 'Account Responsibilities',
    paragraphs: [
      'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account.',
    ],
  },
  {
    heading: 'Billing and Cancellation',
    paragraphs: [
      'Plans that include paid features renew automatically each billing cycle until cancelled. You can downgrade or cancel at any time through the billing portal. Fees are non-refundable once the billing period has begun, except where required by applicable law.',
      'We reserve the right to change pricing with thirty days advance notice. Price changes will take effect at the start of your next billing cycle after the notice period.',
    ],
  },
  {
    heading: 'Service Availability',
    paragraphs: [
      'BrokenLink AI is provided on an "as is" basis. We strive for high availability but do not guarantee uninterrupted access. Scheduled maintenance windows and urgent patches will be announced in advance whenever possible.',
    ],
  },
  {
    heading: 'Intellectual Property',
    paragraphs: [
      'All content, features, and functionality of BrokenLink AI, including but not limited to text, graphics, logos, and software, are owned by BrokenLink AI and protected by intellectual property laws. Your scan data and reports remain your property.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by law, BrokenLink AI and its affiliates are not liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our aggregate liability is limited to the fees you paid in the twelve months preceding the claim.',
    ],
  },
  {
    heading: 'Changes to Terms',
    paragraphs: [
      'These terms may be updated periodically to reflect product changes or legal requirements. We will announce updates on the dashboard and via email. Your continued use of the service following updates signifies acceptance of the revised terms.',
    ],
  },
  {
    heading: 'Governing Law',
    paragraphs: [
      'These terms are governed by the laws of the State of New York, without regard to conflict of law principles. Any disputes arising under these terms shall be resolved in the courts located in New York County, New York.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      'If you have questions about these terms, contact us at hello@brokenlink.ai or write to us at 60 East 42nd Street, Suite 1201, New York, NY 10165.',
    ],
  },
];

export const officeDetails = {
  email: 'hello@brokenlink.ai',
  hours: 'Monday to Sunday - 12:00 AM-12:00 AM EST',
  address: '60 East 42nd Street, Suite 1201, New York, NY 10165',
};
