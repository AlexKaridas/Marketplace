import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="fa-solid fa-basket-shopping" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
