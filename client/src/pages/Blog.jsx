/* File: client/src/pages/Blog.jsx - Blog index listing all articles */
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles.js';

const Blog = () => (
  <div className="flex flex-col gap-12">
    <section className="flex flex-col gap-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-emerald-400">Blog</p>
        <h1 className="mt-2 text-3xl font-semibold text-emerald-300">
          Guides and insights for healthier websites
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          Practical articles about broken links, SEO best practices, web accessibility, and site
          maintenance written by the BrokenLink AI team.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {blogArticles.map(({ slug, title, excerpt, date, readTime }) => (
          <article
            key={slug}
            className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-emerald-500/30"
          >
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span aria-hidden>&middot;</span>
              <span>{readTime}</span>
            </div>
            <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
            <p className="text-sm leading-relaxed text-slate-300">{excerpt}</p>
            <Link
              to={`/blog/${slug}`}
              className="mt-auto inline-flex items-center gap-2 text-sm text-emerald-300 underline decoration-dotted underline-offset-4"
            >
              Read article <span aria-hidden>-&gt;</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default Blog;
