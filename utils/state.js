import { createEvent } from "effector";
import { createStore } from "effector";

export const addNewArticle = createEvent();
export const deleteArticle = createEvent();
export const addComment = createEvent();
export const editArticle = createEvent();
 
export const $articles = createStore([
  {
    title: "Война и мир",
    content: "Очень много воды",
    theme: "Лонгрид",
    author: "Лев Толстой",
    date: "01.09.1990",
    comments: [],
  },
  {
    title: "Сто лет одиночества",
    content: "Очень много смысла",
    theme: "Пустота",
    author: "Габриэль Гарсиа Маркес",
    date: "02.09.1990",
    comments: [],
  },
  {
    title: "Над пропастью во ржи",
    content: "Очень много грусти",
    theme: "Сказка",
    author: "Джером Сэлинджер",
    date: "03.09.1990",
    comments: [],
  },
]);
