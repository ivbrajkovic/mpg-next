import App from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import isofetch from 'isomorphic-unfetch';

// import { LanguageContext } from '../contexts';
// import fetchDataAsync from '../lib/fetchDataAsync';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../scss/style.scss';

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
            // isServer: false,
            loading: true,
            lang: 'hr',
            success: false,
            data: null,
            lastError: null
        };
        // const { loading, success, data, lastError } = props.data;
        // this.state = {
        //     isServer: false,
        //     loading: loading,
        //     lang: 'hr',
        //     success: success,
        //     data: data,
        //     lastError: lastError
        // };
    }

    // static async getInitialProps({ Component, router, ctx }) {
    //     let pageProps = {};
    //     if (Component.getInitialProps) {
    //         pageProps = await Component.getInitialProps(ctx);
    //     }

    //     let data = { isServer: false, loading: true };

    //     if (ctx.req) {
    //         try {
    //             const url = `${ctx.req.protocol}://${ctx.req.get('host')}/api/index/hr`;
    //             console.log('TCL: MyApp -> getInitialProps -> url', url);
    //             const res = await isofetch(url);
    //             data = await res.json();
    //             data.isServer = true;
    //             data.loading = false;
    //         } catch (err) {
    //             data = { success: false, lastError: err };
    //         }
    //     }

    //     return { pageProps, data };
    // }

    componentDidMount() {
        if (!this.data) {
            this.setData(Router.pathname, this.state.lang);
        }
        Router.events.on('routeChangeStart', this.setRoute);
    }

    componentWillUnmount() {
        Router.events.off('routeChangeStart', this.setRoute);
    }

    fetchData = async (route, lang) => {
        try {
            const url = `/api${route}/${lang}`;
            console.log('TCL: fetchDataAsync -> url', url);

            const res = await fetch(url);
            if (!res.ok) return { success: false, lastError: `${res.status}` };

            const data = await res.json();
            return data;
        } catch (err) {
            return { success: false, lastError: err };
        }
    };

    getData = async (route, lang) => {
        // console.log('TCL: getData -> (route, lang):', route, lang);
        if (!route || !lang) return false;

        let { success, data, lastError } = this.state;
        if (route === '/') route = '/index';

        const page = route.substr(1); // Remove leading '/'
        // if (!(page && (!data || !data[page] || !data[page][lang]))) return false;
        if (!(!data || !data[page] || !data[page][lang])) return false;

        const nextData = await this.fetchData(route, lang);

        if (nextData.success) {
            if (!data) {
                data = nextData.data;
            } else if (!data[page]) {
                data[page] = nextData.data[page];
            } else if (!data[page][lang]) {
                data[page][lang] = nextData.data[page][lang];
            }
        }

        success = nextData.success;
        lastError = nextData.lastError;
        console.log('TCL: MyApp -> getData -> data: NEW');

        return { success, data, lastError };
    };

    setData = async (route, lang) => {
        const fetchedData = await this.getData(route, lang);
        console.log('TCL: setData -> getData:', !!fetchedData);

        if (!fetchedData) return false;

        const { success, data, lastError } = fetchedData;
        // console.log('TCL: setData -> success, data, lastError', success, data, lastError);

        // this.setState({
        //     render: false
        // });

        this.setState(state => {
            return {
                // render: true,
                loading: false,
                lang: success ? lang : state.lang,
                success: success,
                // page: success ? route : state.page,
                data: data,
                lastError: lastError
            };
        });

        return true;
    };

    setRoute = async route => {
        // route = route === '/' ? '/index' : route;
        // Router.push(route);
        await this.setData(route, this.state.lang);
    };

    setLanguage = async lang => {
        // if (this.state.lang === lang || !this.state.page) {
        if (this.state.lang === lang) {
            console.log('TCL: MyApp -> changeLanguage -> changed: FALSE');
            return;
        }

        // const { page } = this.state;
        const isAdded = await this.setData(Router.pathname, lang);

        if (!isAdded) {
            console.log('TCL: MyApp -> changeLanguage -> changed: TRUE');
            this.setState({
                lang: lang
            });
        }
    };

    onTest = () => {
        console.log('TCL: MyApp -> onTest: REFRESH');
        this.setState({
            lang: this.state.lang
        });
    };

    i = 0;
    render() {
        console.log('TCL: MyApp -> render: ', ++this.i);
        console.log('TCL: MyApp -> render -> this.state', this.state);

        // return (
        //     <Navbar
        //         language={this.state.lang}
        //         onChangeLanguage={this.setLanguage}
        //         onChangeRoute={this.setRoute}
        //         onTest={this.onTest}
        //     />
        // );

        // const page = pageProps.page && pageProps.page.substr(1);
        const { loading, success, lang, data } = this.state;

        if (loading)
            return (
                <>
                    <Navbar
                        language={this.state.lang}
                        onChangeLanguage={this.setLanguage}
                        onChangeRoute={this.setRoute}
                        onTest={this.onTest}
                    />
                    <h1>Loading...</h1>
                </>
            );

        console.log('TCL: MyApp -> render -> process.browser', process.browser);

        const { Component, pageProps } = this.props;
        let page = process.browser
            ? Router.pathname === '/'
                ? '/index'
                : Router.pathname
            : '/index';
        page = page.substr(1);
        const sendData = data && data[page] && data[page][lang] ? data[page][lang] : null;

        // console.log('TCL: render -> page', page);
        // console.log('TCL: render -> data', data);
        // console.log('TCL: render -> data[page]', data[page]);
        // console.log('TCL: render -> lang', lang);
        // console.log('TCL: render -> data[page][lang]', data[page][lang]);
        // console.log('TCL: render -> sendData', sendData);

        return (
            <>
                <Head>
                    <title>Muzej Grada Pazina</title>
                </Head>
                {/* <Layout contentData={this.props.router.query.data}> */}
                {/* <LanguageContext.Provider value={this.state}> */}
                {/* <LanguageContext.Provider value={this.state}> */}
                {/* <Layout></Layout> */}
                {/* <Navbar language={this.state.language} onChangeLanguage={this.setLanguage} /> */}
                {/* <Navbar /> */}
                <Navbar
                    language={this.state.lang}
                    onChangeLanguage={this.setLanguage}
                    onTest={this.onTest}
                />
                <Component
                    {...pageProps}
                    // data={data[pageProps.page.substr(1)]}
                    // data={data[pageProps.page.substr(1)][language]}
                    data={sendData}
                    // data={MyApp.myData}
                    // language={language}
                    // data={localeData}
                    // onAddLanguage={this.addLanguage}
                />
                <Footer />
                {/* </LanguageContext.Provider> */}
            </>
        );
    }
}
