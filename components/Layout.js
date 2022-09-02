import A from "./A";
import Head from "next/head";

const Layout = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={'app' + keywords}></meta>
        <title>App</title>
      </Head>
      <div className="navbar">
        <A title="home" href="/"/>
        <A title="users" href="/users"/>
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
            .navbar {
              background: coral;
              padding: 15px;
            }
          `}
      </style>
    </>
  );
};

export default Layout;