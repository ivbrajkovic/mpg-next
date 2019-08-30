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
            language: MyApp.staticLang,
            // language: this.props.language,
            // updateLanguage: value => {
            //     this.setState({ language: value });
            //     MyApp.myLang = value;
            // }
            data: this.props.data.data,
            page: this.props.data.page,
            success: this.props.data.success
        };
    }

    static staticLang = 'hr';

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

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        let data = { success: false, page: null, data: 'Invalid page.' };

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        if (pageProps && pageProps.page) {
            // data.data = await fetchDataAsync(ctx.req, null, pageProps.page, 'hr');
            data = await fetchDataAsync(ctx.req, null, pageProps.page, MyApp.staticLang);
            data.page = pageProps.page;
        }

        return { pageProps, data };
    }

    // static getDerivedStateFromProps(props, state) {
    //     // console.log('TCL: MyApp -> getDerivedStateFromProps -> state', state);
    //     // console.log('TCL: MyApp -> getDerivedStateFromProps -> props', props);

    //     if (props.data.success !== state.text.success) {
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
    //     }
    //     console.log('TCL: MyApp -> getDerivedStateFromProps -> set state: FALSE');
    //     return null;
    // }

    changeLanguage = async lang => {
        // try {
        // let page = window.location.pathname.substr(1);
        let { success: prevSuccess, data: prevData, page } = this.state;

        if (prevData && (!prevData[page] || !prevData[page][lang])) {
            const { success: nextSuccess, data: nextData } = await fetchDataAsync(
                null,
                null,
                page,
                lang
            );

            if (!prevSuccess || !nextSuccess) {
                prevData = nextData;
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
                success: prevSuccess
            });
            console.log('TCL: MyApp -> changeLanguage -> added: TRUE');
        } else {
            this.setState({
                language: lang
            });
            console.log('TCL: MyApp -> changeLanguage -> added: FALSE');
        }
        MyApp.staticLang = lang;
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
