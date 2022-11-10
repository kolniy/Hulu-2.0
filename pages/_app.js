import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/Brad.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
