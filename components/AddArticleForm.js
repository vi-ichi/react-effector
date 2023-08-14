import { useState } from "react";
import { useUnit } from "effector-react";

export default function AddArticleForm({ addNewArticle, setPage }) {
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const updateTitle = ({ target: { value } }) => setTitle(value);
  const updateTheme = ({ target: { value } }) => setTheme(value);
  const updateAuthor = ({ target: { value } }) => setAuthor(value);
  const updateDate = ({ target: { value } }) => setDate(value);
  const updateContent = ({ target: { value } }) => setContent(value);

  const _addNewArticle = useUnit(addNewArticle);

  function createNewArticle() {
    _addNewArticle({
      title,
      content,
      date,
      author,
      theme,
    });
    setPage("/");
  }

  return (
    <div>
      <div className="absolute left-1/2 -translate-x-1/2 mt-4 space-x-4">
        <button
          onClick={createNewArticle}
          className="bg-blue-500 px-3 py-1 rounded-full font-bold"
        >
          + опубликовать
        </button>
        <button
          onClick={() => setPage("/")}
          className="bg-red-500 px-3 py-1 rounded-full font-bold"
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
