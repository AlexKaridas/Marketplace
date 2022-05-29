import Head from "next/head";
import styles from "./Layout.module.scss";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Marketplace</title>
        <meta
          name="Marketplace"
          content="Your friendly neighborhoud marketplace"
        />
        <link rel="icon" href="/shopping-cart.jpg" />
      </Head>

      <div className={styles.app}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
