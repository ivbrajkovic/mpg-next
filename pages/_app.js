import App from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

// import { LanguageContext } from '../contexts';
import fetchDataAsync from '../lib/fetchDataAsync';

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
        // console.log('TCL: MyApp -> constructor -> props', props);
        this.state = {
            // language: 'hr',
            language: MyApp.lang
            // language: this.props.language,
            // updateLanguage: value => {
            //     this.setState({ language: value });
            //     MyApp.myLang = value;
            // }
            // data: this.props.data.data,
            // page: this.props.data.page,
            // success: this.props.data.success,
            // lastError: this.props.data.lastError
        };
    }

    static success = true;
    static lang = 'hr';
    static page = 'index';
    static data = null;
    static lastError = null;

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         language: 'hr'
    //         // updateLanguage: value => this.setState({ language: value }),
    //         // data: this.props.data
    //     };
    // }

    // updateData: (language, data) =>
    //     this.setState(state => {
    //         let stateData = state.data;
    //         stateData[language] = data.data[language];
    //         return {
    //             // language: language,
    //             data: stateData
    //         };
    //     })

    static async getInitialProps1({ Component, router, ctx }) {
        let pageProps = {};
        // let data = { success: false, page: null, data: null, lastError: 'Invalid page.' };

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        if (pageProps && pageProps.page) {
            console.log('TCL: MyApp -> getInitialProps -> MyApp.staticLang', MyApp.staticLang);

            data = await fetchDataAsync(ctx.req, null, pageProps.page, MyApp.staticLang);
            data.page = pageProps.page;
        }

        return { pageProps, data };
    }

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        if (pageProps && pageProps.page) {
            console.log('TCL: getInitialProps -> pageProps.page', pageProps.page);
            console.log('TCL: getInitialProps -> MyApp (data, page, lang):', data, page, lang);

            const { data, lang } = MyApp;
            const page = pageProps.page;

            console.log(
                'TCL: getInitialProps -> (!data || !data[page] || !data[page][lang])',
                !data || !data[page] || !data[page][lang]
            );

            if (!data || !data[page] || !data[page][lang]) {
                const nextData = await fetchDataAsync(ctx.req, null, pageProps.page, lang);

                if (!nextData.success) {
                    MyApp.lastError = nextData.lastError;
                    console.log('TCL: getInitialProps -> MyApp.lastError', MyApp.lastError);
                } else {
                    if (!data) {
                        console.log('TCL: getInitialProps -> data');
                        MyApp.data = nextData.data;
                    } else if (!data[page]) {
                        console.log('TCL: getInitialProps -> page');
                        MyApp.data[page] = nextData.data[page];
                    } else if (!data[page]) {
                        console.log('TCL: getInitialProps -> lang');
                        MyApp.data[page][lang] = nextData.data[page][lang];
                    }
                }
                MyApp.success = nextData.success;
            }
            // data.page = pageProps.page;
        }

        return { pageProps };
    }

    static getDerivedStateFromProps1(props, state) {
        console.log('TCL: MyApp -> getDerivedStateFromProps -> state', state);
        console.log('TCL: MyApp -> getDerivedStateFromProps -> props', props);

        const {
            success: propsSuccess,
            page: propsPage,
            data: propsData,
            lastError: propsLastError
        } = props.data;

        if (!propsSuccess) {
            console.log('TCL: MyApp -> getDerivedStateFromProps -> set state: LAST ERROR');
            return {
                success: propsSuccess,
                lastError: propsLastError
            };
        }

        let {
            language: stateLanguage,
            success: stateSuccess,
            // page: statePage,
            data: stateData
            // lastError: stateLastError
        } = state;

        if (propsData && propsPage && propsData[propsPage] && propsData[propsPage][stateLanguage]) {
            let isChanged = false;
            if (!stateData) {
                stateData = propsData;
                isChanged = true;
            } else if (!stateData[propsPage]) {
                stateData[propsPage] = propsData[propsPage];
                isChanged = true;
            } else if (!stateData[propsPage][stateLanguage]) {
                stateData[propsPage][stateLanguage] = propsData[propsPage][stateLanguage];
                isChanged = true;
            }
            if (isChanged) {
                console.log('TCL: MyApp -> getDerivedStateFromProps -> set state: TRUE');
                return {
                    success: propsSuccess,
                    data: stateData,
                    page: propsPage
                };
            } else if (stateSuccess != propsSuccess) {
                console.log('TCL: MyApp -> getDerivedStateFromProps -> set state: SUCCESS');
                return {
                    success: propsSuccess
                };
            }
        }
        //         console.log('TCL: MyApp -> getDerivedStateFromProps -> set state: TRUE 1');
        //         return {
        //             text: props.data
        //         };
        //     } else if (state.page && state.text && state.text.data) {
        //         let newState = state;
        //         let language = state.language;
        //         let page = props.page;
        //         page = page.substr(1);

        //         if (!state.text.data[page]) {
        //             console.log('TCL: MyApp -> getDerivedStateFromProps -> set state: TRUE 2');
        //             newState.text.data[page] = props.data.data[page];
        //             return newState;
        //         } else if (!state.text.data[page][language]) {
        //             console.log('TCL: MyApp -> getDerivedStateFromProps -> set state: TRUE 3');
        //             newState.text.data[page][language] = props.data.data[page][language];
        //             return newState;
        //         }
        console.log('TCL: MyApp -> getDerivedStateFromProps -> set state: FALSE');
        return null;
    }

    changeLanguage = async lang => {
        this.setState({
            language: lang
        });
        MyApp.staticLang = lang;
    };

    changeLanguage1 = async lang => {
        // try {
        // let page = window.location.pathname.substr(1);

        if (this.state.language === lang) {
            console.log('TCL: MyApp -> changeLanguage -> changed: FALSE');
            return;
        }

        let { lastError: prevLastError, success: prevSuccess, data: prevData, page } = this.state;

        if (!prevData) {
            const {
                success: nextSuccess,
                data: nextData,
                lastError: nextLastError
            } = await fetchDataAsync(null, null, page, lang);
            this.setState({
                language: lang,
                data: nextData,
                success: nextSuccess,
                lastError: nextLastError
            });
            console.log('TCL: MyApp -> changeLanguage -> added: TRUE');
            return;
        }

        if (/*prevData && (*/ !prevData[page] || !prevData[page][lang] /*)*/) {
            const {
                success: nextSuccess,
                data: nextData,
                lastError: nextLastError
            } = await fetchDataAsync(null, null, page, lang);

            if (!nextSuccess) {
                prevLastError = nextLastError;
            } else {
                if (!prevData[page]) {
                    prevData[page] = nextData[page];
                } else {
                    prevData[page][lang] = nextData[page][lang];
                }
            }
            prevSuccess = nextSuccess;

            this.setState({
                language: lang,
                data: prevData,
                success: prevSuccess,
                lastError: prevLastError
            });
            console.log('TCL: MyApp -> changeLanguage -> added: TRUE');
            return;
        }
        // console.log('TCL: MyApp -> changeLanguage -> added: FALSE');

        this.setState({
            language: lang
        });
        MyApp.staticLang = lang;
        console.log('TCL: MyApp -> changeLanguage -> changed: TRUE');
        // } catch (err) {
        //     console.log('TCL: TCL: MyApp -> changeLanguage -> ERROR:', err);
        // }
    };

    // componentDidMount() {
    //     const test = 'test';
    //     console.log('TCL: componentDidMount -> test', test);
    // }

    i = 0;
    render() {
        console.log('TCL: MyApp -> render: ', ++this.i);
        console.log('TCL: MyApp -> render -> this.state', this.state);

        return <Navbar language={this.state.language} onChangeLanguage={this.changeLanguage} />;

        const { Component, pageProps } = this.props;
        const page = pageProps.page && pageProps.page.substr(1);
        const { language, text } = this.state;

        const sendData =
            page && text && text.success && text.data[page] && text.data[page][language]
                ? text.data[page][language]
                : { success: false, data: 'Wrong page props.' };

        // let sendData = { success: false, data: 'Wrong page props.' };
        // if (page) {
        //     if (text) {
        //         if (text.success) {
        //             if (text.data[page]) {
        //                 sendData = text.data[page][language];
        //             }
        //         }
        //     }
        // }

        console.log('TCL: render -> sendData', sendData);
        return (
            <>
                <Head>
                    <title>Muzej Grada Pazina</title>
                </Head>
                {/* <Layout contentData={this.props.router.query.data}> */}
                {/* <LanguageContext.Provider value={this.state}> */}
                {/* <LanguageContext.Provider value={this.state}> */}
                {/* <Layout></Layout> */}
                <Navbar language={this.state.language} onChangeLanguage={this.changeLanguage} />
                {/* <Navbar /> */}
                <Component
                    {...pageProps}
                    // data={data[pageProps.page.substr(1)]}
                    // data={data[pageProps.page.substr(1)][language]}
                    text={sendData}
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
