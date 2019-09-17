import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap"
                        rel="stylesheet"
                    ></link> */}
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,900|Open+Sans:400,700,800&display=swap"
            rel="stylesheet"
          />
          {/* <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          ></link> */}

          {/* Import CSS for nprogress */}
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/nprogress.css"
          />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"
          />

          {/* Button ripple effect */}
          {/* <script src="https://cdn.jsdelivr.net/npm/ripplet.js@0.1.14"></script> */}
          <script src="/static/js/ripplet.js"></script>

          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenLite.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineLite.min.js"></script> */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/easing/EasePack.min.js"></script> */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/plugins/CSSPlugin.min.js"></script>{' '} */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script> */}
          {/* <script src="/static/js/aos.js"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src="/static/js/waves.min.js"></script> */}
          <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          <script src="/static/js/main.js"></script>
          <script>AOS.init();</script>
        </body>
      </html>
    );
  }
}
