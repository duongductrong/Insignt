import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Duong Duc Trong - Portfolio Frontend Developer</title>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                </Head>

                <body>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        );
    }
}