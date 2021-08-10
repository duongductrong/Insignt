import Document, { Head, Html, Main, NextScript } from "next/document";

interface State {
  darking: boolean;
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          {/* Inter */}

          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* "Cormorant Upright" */}
        </Head>

        <body className="dark">
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}
