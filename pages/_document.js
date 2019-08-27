import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    {/* Import CSS for nprogress */}
                    <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://cdn.jsdelivr.net/npm/ripplet.js@0.1.14"></script>
                    {/* <script src="/static/js/waves.min.js"></script> */}
                    <script src="/static/js/main.js"></script>
                </body>
            </html>
        );
    }
}
