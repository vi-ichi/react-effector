import ArticleList from "@/components/ArticleList";
import AddArticleForm from "@/components/AddArticleForm";
import { useState } from "react";

export default function Home({ articles, addNewArticle }) {
  const [page, setPage] = useState("/");

  const newPage = () => setPage("/new");
  const homePage = () => setPage("/");

  return page === "/" ? (
    <>
      <button
        onClick={newPage}
        className="bg-blue-500 px-3 py-1 rounded-full font-bold absolute left-1/2 -translate-x-1/2 mt-4"
      >
        + новая статья
      </button>
      <ArticleList articles={articles} />
    </>
  ) : page === "/new" ? (
    <AddArticleForm addNewArticle={addNewArticle} setPage={setPage} />
  ) : (
    "nothing"
  );
}
