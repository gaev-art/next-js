import A from "./A";
import Head from "next/head";

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>App</title>
      </Head>
      <div className="navbar">
        <A title="home" href="/"/>
        <A title="users" href="/users"/>
      </div>
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout;