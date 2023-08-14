import { useUnit } from "effector-react";
import { useState } from "react";

export default function ArticleList({ articles, openArticleWithTitle }) {
  const [query, setQuery] = useState("");

  const { _articles } = useUnit({
    _articles: articles,
  });

  const updateQuery = ({ target: { value } }) => setQuery(value);

  function openArticle(title) {
    openArticleWithTitle(title);
  }

  return (
    <div className="p-8 pt-16 space-y-8 mx-auto max-w-xl">
      <input
        value={query}
        onChange={updateQuery}
        placeholder="Поиск..."
        className="w-full rounded-lg px-3 py-1"
      />
      {_articles
        .filter((a) => (query !== "" ? a.title.toLowerCase().startsWith(query.trim()) : true))
        .map((a, i) => (
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
