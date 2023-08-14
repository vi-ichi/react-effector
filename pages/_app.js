import "@/styles/globals.css";
import { createStore, createEvent } from "effector";

const addNewArticle = createEvent();
const deleteArticle = createEvent();
const addComment = createEvent();
const editArticle = createEvent();

const $articles = createStore([
  {
    title: "Война и мир",
    content: "Очень много воды",
    theme: "Лонгрид",
    author: "Лев Толстой",
    date: "01.09.1990",
    comments: [],
  },
])
  .on(addNewArticle, (all, newArticle) => [...all, newArticle])
  .on(addComment, (all, data) =>
    all.map((a) =>
      a.title === data.title
        ? {
            title: a.title,
            content: a.content,
            theme: a.theme,
            author: a.author,
            date: a.date,
            comments: [...a.comments, data.newComment],
          }
        : a
    )
  )
  .on(deleteArticle, (all, title) => all.filter((a) => a.title !== title))
  .on(editArticle, (all, data) =>
    all.map((a) => (a.title === data.title ? data.editedArticle : a))
  );

export default function App({ Component, pageProps }) {
  return (
    <Component
      {...pageProps}
      articles={$articles}
      addNewArticle={addNewArticle}
      editArticle={editArticle}
      deleteArticle={deleteArticle}
      addComment={addComment}
    />
  );
}
