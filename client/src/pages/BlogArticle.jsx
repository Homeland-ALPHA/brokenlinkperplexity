/* File: client/src/pages/BlogArticle.jsx - Individual blog article view */
import { Link, useParams, Navigate } from 'react-router-dom';
import AdSlot from '../components/AdSlot.jsx';
import { blogArticles } from '../data/blogArticles.js';

const BlogArticle = () => {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const otherArticles = blogArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col gap-12">
      <article className="mx-auto w-full max-w-3xl">
        <header className="flex flex-col gap-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-emerald-300 underline decoration-dotted underline-offset-4"
          >
            <span aria-hidden>&lt;-</span> Back to blog
          </Link>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span aria-hidden>&middot;</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-emerald-300 md:text-4xl">
            {article.title}
          </h1>
        </header>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-300">
          {article.content.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={`block-${index}`}
                  className="pt-4 text-xl font-semibold text-slate-100"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'paragraph') {
              return <p key={`block-${index}`}>{block.text}</p>;
            }
            if (block.type === 'list') {
              return (
                <ul key={`block-${index}`} className="ml-4 space-y-2">
                  {block.items.map((item, i) => (
                    <li key={`item-${i}`} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      </article>

      <div className="mx-auto w-full max-w-2xl py-4">
        <AdSlot slot="7312599567" />
      </div>

      {otherArticles.length > 0 && (
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-slate-200">Continue reading</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {otherArticles.map(({ slug: otherSlug, title, excerpt }) => (
              <Link
                key={otherSlug}
                to={`/blog/${otherSlug}`}
                className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-emerald-500/30"
              >
                <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
                <p className="text-xs text-slate-400 line-clamp-3">{excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogArticle;
