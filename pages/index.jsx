import Main from "../components/Main";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marketplace</title>
        <meta
          name="description"
          content="Your friendly neighborhoud marketplace"
        />
        <link rel="icon" href="/shopping-cart.jpg" />
      </Head>
      <Layout>
        <Main />
      </Layout>
    </>
  );
}
