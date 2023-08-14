export default function AddArticleForm() {
  return (
    <div>
      <div className="absolute left-1/2 -translate-x-1/2 mt-4 space-x-4">
        <button className="bg-blue-500 px-3 py-1 rounded-full font-bold">
          + опубликовать
        </button>
        <button className="bg-red-500 px-3 py-1 rounded-full font-bold">
          - удалить
        </button>
      </div>
      <div className="pt-16 mx-auto">
        <div>Название</div>
        <input />
        <div>Тема</div>
        <input />
        <div>Автор</div>
        <input />
        <div>Дата</div>
        <input />
        <div>Контент</div>
        <textarea></textarea>
      </div>
    </div>
  );
}
