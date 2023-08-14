import { useUnit } from "effector-react";

export default function ArticleList({ articles, openArticleWithTitle }) {
  const { _articles } = useUnit({
    _articles: articles,
  });

  function openArticle(title) {
    openArticleWithTitle(title);
  }

  return (
    <div className="p-8 pt-16 space-y-8">
      {_articles.map((a, i) => (
        <div key={i}>
          <button
            onClick={() => openArticle(a.title)}
            className="text-xl font-bold text-blue-500"
          >
            {a.title}
          </button>
          <div>{a.theme}</div>
          <div>{a.author}</div>
          <div>{a.date}</div>
        </div>
      ))}
    </div>
  );
}
