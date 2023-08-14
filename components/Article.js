import { useUnit } from "effector-react";
import { useState } from "react";
import { addComment } from "@/utils/state";
import { $articles } from "@/utils/state";

export default function Article({ articleTitle, setArticleTitle }) {
  const [comment, setComment] = useState("");

  const { articles } = useUnit({ articles: $articles });
  const article = articles.find((a) => a.title === articleTitle);

  const _addComment = useUnit(addComment);

  const updateComment = ({ target: { value } }) => setComment(value);

  function handleAddComment() {
    _addComment({ title: articleTitle, newComment: comment });
  }

  return (
    <div>
      <div className="absolute left-1/2 -translate-x-1/2 mt-4 space-x-4">
        <button
          onClick={() => setArticleTitle(-1)}
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
        <div className="text-xl py-4">{article.content}</div>
        <div>
          Комментарии{" "}
          <span className="text-gray-500">{article.comments.length}</span>
        </div>
        <input
          value={comment}
          onChange={updateComment}
          className="w-full rounded-lg px-3 py-1"
          placeholder="Очень крутая статья..."
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 px-3 py-1 rounded-full font-bold !mt-4"
        >
          + добавить
        </button>
        {article.comments.length > 0 && (
          <div className="space-y-2">
            {article.comments.map((c, i) => (
              <div key={i}>// {c}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
