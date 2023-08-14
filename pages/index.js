import ArticleList from "@/components/ArticleList";
import AddArticleForm from "@/components/AddArticleForm";
import Article from "@/components/Article";
import { useState } from "react";
import { useUnit } from "effector-react";

export default function Home({ articles, addNewArticle, addComment }) {
  const [page, setPage] = useState("/");
  const [article, setArticle] = useState(-1);

  const newPage = () => setPage("/new");
  const homePage = () => setPage("/");

  const { _articles } = useUnit({ _articles: articles });

  function openArticleWithTitle(title) {
    setArticle(_articles.find((a) => a.title === title));
  }

  return article !== -1 ? (
    <Article
      article={article}
      setArticle={setArticle}
      addComment={addComment}
    />
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
    <AddArticleForm addNewArticle={addNewArticle} setPage={setPage} />
  ) : (
    "nothing"
  );
}
