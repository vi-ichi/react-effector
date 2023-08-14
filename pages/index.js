import ArticleList from "@/components/ArticleList";
import Link from "next/link";

export default function Home({ articles }) {
  return (
    <div>
      <Link href="/new">
        <button className="bg-blue-500 px-3 py-1 rounded-full font-bold absolute left-1/2 -translate-x-1/2 mt-4">
          + новая статья
        </button>
      </Link>
      <ArticleList articles={articles} />
    </div>
  );
}
