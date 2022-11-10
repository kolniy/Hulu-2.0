import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Hulu 2.0",
  keywords: "Watch movies at Hulu",
  description: "All the latest movies at your finger tips.",
};

export default Meta;
