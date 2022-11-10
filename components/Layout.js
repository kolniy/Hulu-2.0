import Meta from "./Meta";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

// MOCK API for the next course
// https://github.com/tumetus/json-api
