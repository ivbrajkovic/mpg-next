// _app

import App from "next/app";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";

import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
import Footer from "../components/Footer";

import "../scss/style.scss";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// import config from "react-reveal/globals";
// config({ ssrReveal: true });

export default class MyApp extends App {
  state = {
    lang: "hr",
    odjel: 0
  };

  // static async getInitialProps({ Component, router, ctx }) {
  //   let pageProps = {};
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //     // console.log('TCL: MyApp -> getInitialProps -> pageProps', pageProps);
  //   }
  //   return { pageProps };
  // }
  // setRoute = async route => {
  //     // route = route === '/' ? '/index' : route;
  //     // Router.push(route);
  //     //
  //     await this.setData(route, this.state.lang);
  // };

  setLanguage = lang => {
    this.setState({
      lang: lang
    });
  };

  onTest = () => {
    console.log("TCL: MyApp -> onTest: REFRESH");
    this.setState({
      lang: this.state.lang
    });
  };

  setOdjel = (path, index) => {
    if (Router.pathname !== path) Router.push(path);
    this.setState({
      odjel: index
    });
    console.log("TCL: setOdjel -> this.state.odjel", this.state.odjel);
  };

  i = 0;
  render() {
    console.log("TCL: MyApp -> render: ", ++this.i);
    // console.log('TCL: MyApp -> render -> this.state', this.state);
    // console.log('TCL: MyApp -> render -> process.browser', process.browser);

    // return (
    //     <Navbar
    //         language={this.state.lang}
    //         onChangeLanguage={this.setLanguage}
    //         onChangeRoute={this.setRoute}
    //         onTest={this.onTest}
    //     />
    // );

    // const { Component } = this.props;

    const { Component, pageProps } = this.props;

    // const { data } = pageProps;
    // console.log("TCL: render -> pageProps", pageProps);

    // const folder = (data && data.folder) || "";
    // const title = (data && data.hero && data.hero[this.state.lang]) || '';
    // const srcset = (data && data.hero && data.hero.srcset) || [];

    // const heroTitle =
    //   (data && data[this.state.lang] && data[this.state.lang].hero) || "";
    // const heroSrcset = (data && data.banners) || [];
    // console.log("TCL: render -> heroSrcset", heroSrcset);

    return (
      <div>
        <Head>
          <title>Muzej Grada Pazina</title>
        </Head>

        {/* <Hero title={heroTitle} folder={folder} srcset={heroSrcset} /> */}

        <Navbar
          language={this.state.lang}
          onChangeLanguage={this.setLanguage}
          onTest={this.onTest}
          onSetOdjel={this.setOdjel}
        />

        <div
          style={{
            marginTop: 100,
            display: "grid",
            // gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr auto",
            minHeight: "calc(101vh - 100px)"
          }}
        >
          <Component
            {...pageProps}
            odjel={this.state.odjel}
            lang={this.state.lang}
            onSetOdjel={this.setOdjel}
          />

          <Footer />
        </div>
      </div>
    );
  }
}
