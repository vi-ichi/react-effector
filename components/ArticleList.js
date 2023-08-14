import { useUnit } from "effector-react";

export default function ArticleList({ articles }) {
  const { _articles } = useUnit({
    _articles: articles,
  });

  return (
    <div className="p-8 pt-16">
      {_articles.map((a, i) => (
        <div key={i}>
          <div className="text-xl font-bold">{a.title}</div>
          <div>{a.theme}</div>
          <div>{a.author}</div>
          <div>{a.date}</div>
        </div>
      ))}
    </div>
  );
}
