import App from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

// import isofetch from 'isomorphic-unfetch';
// import { LanguageContext } from '../contexts';
// import fetchDataAsync from '../lib/fetchDataAsync';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../scss/style.scss';
// import { log } from 'util';

Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`);
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            // loading: true,
            lang: 'hr',
            // success: false,
            // data: null,
            // lastError: null,
            odjel: 0
        };
    }

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    // componentDidMount() {
    //     // if (!this.data) {
    //     //     this.setData(Router.pathname, this.state.lang);
    //     // }
    //     // Router.events.on('routeChangeStart', this.setRoute);
    // }

    // componentWillUnmount() {
    //     Router.events.off('routeChangeStart', this.setRoute);
    // }

    // fetchData = async (route, lang) => {
    //     try {
    //         // const url = `/api${route}/${lang}`;
    //         const url = `/api${route}`;
    //         console.log('TCL: fetchDataAsync -> url', url);

    //         const res = await fetch(url);
    //         if (!res.ok) return { success: false, lastError: `${res.status}` };

    //         const data = await res.json();
    //         return data;
    //     } catch (err) {
    //         return { success: false, lastError: err };
    //     }
    // };

    // getData = async (route, lang) => {
    //     // console.log('TCL: getData -> (route, lang):', route, lang);
    //     if (!route || !lang) return false;

    //     let { success, data, lastError } = this.state;
    //     if (route === '/') route = '/index';

    //     // const page = route.substr(1); // Remove leading '/'
    //     const page = route.match(/[^\/]+?((?=\?)|$)/)[0];

    //     // console.log('TCL: MyApp -> getData -> route', route);
    //     // const matches = route.match(/id=(.+?)((?=&)|$)/);
    //     // if (matches && matches.length > 0)
    //     //     console.log(`Test route and qurry: ${route.match(/id=(.+?)((?=&)|$)/)[0]}`);
    //     // else console.log('NO PARAMS FOUND');

    //     // if (!(page && (!data || !data[page] || !data[page][lang]))) return false;
    //     // if (!(!data || !data[page] || !data[page][lang])) return false;
    //     if (!(!data || !data[page])) return false;

    //     const nextData = await this.fetchData(route, lang);

    //     if (nextData.success) {
    //         if (!data) {
    //             data = nextData.data;
    //         } else if (!data[page]) {
    //             data[page] = nextData.data[page];
    //         }
    //         // } else if (!data[page][lang]) {
    //         //     data[page][lang] = nextData.data[page][lang];
    //         // }
    //     }

    //     success = nextData.success;
    //     lastError = nextData.lastError;
    //     console.log('TCL: MyApp -> getData -> data: NEW');

    //     return { success, data, lastError };
    // };

    // setData = async (route, lang) => {
    //     const fetchedData = await this.getData(route, lang);
    //     console.log('TCL: MyApp -> setData -> getData:', !!fetchedData);

    //     if (!fetchedData) return false;

    //     const { success, data, lastError } = fetchedData;
    //     // console.log('TCL: setData -> success, data, lastError', success, data, lastError);

    //     // this.setState({
    //     //     render: false
    //     // });

    //     this.setState(state => {
    //         return {
    //             // render: true,
    //             loading: false,
    //             lang: success ? lang : state.lang,
    //             success: success,
    //             // page: success ? route : state.page,
    //             data: data,
    //             lastError: lastError
    //         };
    //     });

    //     return true;
    // };

    // setRoute = async route => {
    //     // route = route === '/' ? '/index' : route;
    //     // Router.push(route);
    //     //
    //     await this.setData(route, this.state.lang);
    // };

    setLanguage = async lang => {
        // if (this.state.lang === lang || !this.state.page) {
        // if (this.state.lang === lang) {
        //     console.log('TCL: MyApp -> changeLanguage -> changed: FALSE');
        //     return;
        // }

        // const { page } = this.state;
        // const isAdded = await this.setData(Router.pathname, lang);

        // if (!isAdded) {
        // console.log('TCL: MyApp -> changeLanguage -> changed: TRUE');
        this.setState({
            lang: lang
        });
        // }
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

    i = 0;
    render() {
        console.log('TCL: MyApp -> render: ', ++this.i);
        // console.log('TCL: MyApp -> render -> this.state', this.state);
        console.log('TCL: MyApp -> render -> process.browser', process.browser);

        // return (
        //     <Navbar
        //         language={this.state.lang}
        //         onChangeLanguage={this.setLanguage}
        //         onChangeRoute={this.setRoute}
        //         onTest={this.onTest}
        //     />
        // );

        const { loading, success, lang, data } = this.state;

        // let page = process.browser
        //     ? Router.pathname === '/'
        //         ? '/index'
        //         : Router.pathname
        //     : '/index';
        // page = page.substr(1);
        // const sendData = data && data[page] && data[page][lang] ? data[page][lang] : {};
        // const sendData = data && data[page] ? data[page] : {};

        // console.log('TCL: render -> page', page);
        // console.log('TCL: render -> data', data);
        // console.log('TCL: render -> data[page]', data[page]);
        // console.log('TCL: render -> lang', lang);
        // console.log('TCL: render -> data[page][lang]', data[page][lang]);
        // console.log('TCL: render -> sendData', sendData);

        const { Component, pageProps } = this.props;

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
                <Component {...pageProps} odjel={this.state.odjel} lang={this.state.lang} />
                <Footer />
            </>
        );
    }
}
