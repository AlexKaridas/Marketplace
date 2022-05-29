import Head from "next/head";
import styles from "./Layout.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Marketplace</title>
        <meta
          name="description"
          content="Your friendly neighborhoud marketplace"
        />
        <link rel="icon" href="/shopping-cart.jpg" />
      </Head>

      <div className={styles.app}>
        <Header />

        <div className={styles.main}>
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
