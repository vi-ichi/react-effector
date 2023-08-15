import ArticleList from "@/components/ArticleList";
import AddArticleForm from "@/components/AddArticleForm";
import Article from "@/components/Article";
import { useState } from "react";
import { useUnit } from "effector-react";
import { $articles } from "@/utils/state";

export default function Home() {
  const [page, setPage] = useState("/");
  const [articleTitle, setArticleTitle] = useState(-1);

  const newPage = () => setPage("/new");

  const { articles } = useUnit({ articles: $articles });

  function openArticleWithTitle(title) {
    setArticleTitle(articles.find((a) => a.title === title).title);
  }

  return articleTitle !== -1 ? (
    <Article articleTitle={articleTitle} setArticleTitle={setArticleTitle} />
  ) : page === "/" ? (
    <>
      <button
        onClick={newPage}
        className="bg-blue-500 px-3 py-1 rounded-full font-bold absolute left-1/2 -translate-x-1/2 mt-4"
      >
        + новая статья
      </button>
      <ArticleList
        articles={articles}
        openArticleWithTitle={openArticleWithTitle}
      />
    </>
  ) : page === "/new" ? (
    <AddArticleForm setPage={setPage} />
  ) : (
    "nothing"
  );
}
