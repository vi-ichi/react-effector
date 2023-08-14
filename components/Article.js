export default function Article({ article, setArticle }) {
  return (
    <div>
      <div className="absolute left-1/2 -translate-x-1/2 mt-4 space-x-4">
        <button
          onClick={() => setArticle(-1)}
          className="bg-red-500 px-3 py-1 rounded-full font-bold"
        >
          - назад
        </button>
      </div>
      <div className="pt-16 mx-auto max-w-xl space-y-2">
        <div className="text-2xl font-bold">{article.title}</div>
        <div>
          <div>{article.author}</div>
          <div>{article.theme}</div>
          <div>{article.date}</div>
        </div>
        <div className="text-xl">{article.content}</div>
        <div>Комментарии</div>
        <input
          className="w-full rounded-lg px-3 py-1"
          placeholder="Очень крутая статья..."
        />
      </div>
    </div>
  );
}
