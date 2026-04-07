import Button from '../components/Button';
import articles from '../assets/article-content.js';

const ArticleListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Articles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Article card grid
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600">
            A collection of articles on web development, design, tools, and career growth. Written to share what I've learned and help others on their journey.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.name} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
                <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {article.content[0].substring(0, 150)}...
              </p>
              <Button className="mt-4" to={`/articles/${article.name}`} variant="primary">Read More</Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticleListPage;
