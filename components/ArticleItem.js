import React from "react";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <div className="mt-5 mb-5 px-3 py-4 rounded-sm hover:border-2 border-white">
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <h3 className="text-sm text-white-900 font-bold uppercase">
          {article.title}
        </h3>
        <p>{article.body}</p>
      </Link>
    </div>
  );
};

export default ArticleItem;
