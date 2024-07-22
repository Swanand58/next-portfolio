import { Article } from "../../../data/article";
import Link from "next/link";
import React from "react";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div
      className="bg-[rgb(51,67,101)] dark:bg-slate-500 text-white p-4 rounded-lg shadow-md m-2 transition duration-300 ease-in-out hover:shadow-xl hover:bg-[rgb(41,55,91)] dark:hover:bg-slate-800 flex flex-col justify-between"
      style={{ minHeight: "350px" }}
    >
      <div>
        <p className="text-sm">{article.date}</p>
        <h3 className="font-bold text-lg mt-4">{article.title}</h3>
        <p className="overflow-auto my-2 mt-4" style={{ flex: "1" }}>
          {article.summary}
        </p>
      </div>
      {article.isExternal ? (
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 hover:text-[rgb(71,87,121)] p-2 rounded font-semibold transition-colors"
        >
          Read article &gt;
        </a>
      ) : (
        <Link
          className="mt-2 hover:text-[rgb(71,87,121)] p-2 rounded font-semibold transition-colors"
          href={article.link}
        >
          Read article &gt;
        </Link>
      )}
    </div>
  );
};

export default ArticleCard;
