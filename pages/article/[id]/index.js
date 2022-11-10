import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../../config";
import Meta from "../../../components/Meta";

const article = ({ article }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <>
      <Meta title={article.title} />
      <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <Link href="/about">Go Back</Link>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
