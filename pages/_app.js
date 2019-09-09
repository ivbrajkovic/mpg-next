// _app

import App from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../scss/style.scss';

Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`);
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

import config from 'react-reveal/globals';
config({ ssrReveal: true });

export default class MyApp extends App {
    state = {
        lang: 'hr',
        odjel: 0,
        hero: 'pocetna'
    };

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
            // console.log('TCL: MyApp -> getInitialProps -> pageProps', pageProps);
        }
        return { pageProps };
    }
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
        console.log('TCL: MyApp -> onTest: REFRESH');
        this.setState({
            lang: this.state.lang
        });
    };

    setOdjel = (odjel, index) => {
        if (Router.pathname === odjel) Router.push(odjel);
        this.setState({
            odjel: index
        });
    };

    setHero = hero => {
        this.setState({ hero: hero });
    };

    i = 0;
    render() {
        console.log('TCL: MyApp -> render: ', ++this.i);
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

        // const { loading, success, lang, data } = this.state;

        const { Component, pageProps } = this.props;
        const { hero } = pageProps;
        const heroTitle = (hero && hero.title) || '';
        const heroPage = (hero && hero.page) || 'index';

        return (
            <>
                <Head>
                    <title>Muzej Grada Pazina</title>
                </Head>
                <Navbar
                    language={this.state.lang}
                    onChangeLanguage={this.setLanguage}
                    onTest={this.onTest}
                    onSetOdjel={this.setOdjel}
                />
                <Hero lang={this.state.lang} title={heroTitle} page={heroPage} />
                <Component
                    {...pageProps}
                    odjel={this.state.odjel}
                    lang={this.state.lang}
                    // onSetHero={this.setHero}
                />
                <Footer />
            </>
        );
    }
}
