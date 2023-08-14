import "@/styles/globals.css";
import { createStore, combine, createEvent } from "effector";

const addNewArticle = createEvent();

const $articles = createStore([
  {
    title: "Война и мир",
    content: "Очень много воды",
    theme: "Лонгрид",
    author: "Лев Толстой",
    date: "01.09.1990",
  },
]).on(addNewArticle, (all, newArticle) => [...all, newArticle]);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} articles={$articles} />;
}
