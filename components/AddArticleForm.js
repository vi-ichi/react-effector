import { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { addNewArticle } from "@/utils/state";

export default function AddArticleForm({ setPage }) {
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(title && theme && author && date && content);
  }, [title, theme, author, date, content]);

  const updateTitle = ({ target: { value } }) => setTitle(value);
  const updateTheme = ({ target: { value } }) => setTheme(value);
  const updateAuthor = ({ target: { value } }) => setAuthor(value);
  const updateDate = ({ target: { value } }) => setDate(value);
  const updateContent = ({ target: { value } }) => setContent(value);

  const _addNewArticle = useUnit(addNewArticle);

  function createNewArticle() {
    if (!valid) {
      return;
    }

    _addNewArticle({
      title: title.trim(),
      content: content.trim(),
      date: date.trim(),
      author: author.trim(),
      theme: theme.trim(),
      comments: [],
    });
    setPage("/");
  }

  return (
    <div className="px-4">
      <div className="absolute flex left-1/2 -translate-x-1/2 mt-4 space-x-4">
        <button
          onClick={createNewArticle}
          className={`whitespace-nowrap ${
            !valid ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500"
          } px-3 py-1 rounded-full font-bold`}
        >
          + опубликовать
        </button>
        <button
          onClick={() => setPage("/")}
          className="whitespace-nowrap bg-red-500 px-3 py-1 rounded-full font-bold"
        >
          - удалить
        </button>
      </div>
      <div className="pt-16 mx-auto max-w-sm space-y-2">
        <div>
          <div className="pb-1">Название</div>
          <input
            value={title}
            onChange={updateTitle}
            className="w-full rounded-lg px-3 py-1"
          />
        </div>
        <div>
          <div className="pb-1">Тема</div>
          <input
            value={theme}
            onChange={updateTheme}
            className="w-full rounded-lg px-3 py-1"
          />
        </div>
        <div>
          <div className="pb-1">Автор</div>
          <input
            value={author}
            onChange={updateAuthor}
            className="w-full rounded-lg px-3 py-1"
          />
        </div>
        <div>
          <div className="pb-1">Дата</div>
          <input
            value={date}
            onChange={updateDate}
            className="w-full rounded-lg px-3 py-1"
          />
        </div>
        <div>
          <div className="pb-1">Контент</div>
          <textarea
            rows={10}
            value={content}
            onChange={updateContent}
            className="w-full rounded-lg px-3 py-1"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
