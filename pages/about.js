import React from "react";
import Head from "next/head";
import { server } from "../config/index";

import ArticleItem from "../components/ArticleItem";

const about = ({ articles }) => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>about</title>
      </Head>
      <div className="mx-auto w-4/5">
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

export default about;
