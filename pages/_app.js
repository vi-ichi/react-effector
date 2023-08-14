import "@/styles/globals.css";
import { $articles } from "@/utils/state";
import {
  addNewArticle,
  addComment,
  deleteArticle,
  editArticle,
} from "@/utils/state";

$articles
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
  return <Component {...pageProps} />;
}
