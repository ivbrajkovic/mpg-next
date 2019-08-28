import App from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import { LanguageContext } from '../contexts';

import Layout from '../components/Layout.js';
import '../scss/style.scss';

Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`);
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
    state = {
        language: 'hr',
        updateLanguage: value => this.setState({ language: value })
    };

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Muzej Grada Pazina</title>
                </Head>

                {/* <Layout contentData={this.props.router.query.data}> */}

                <LanguageContext.Provider value={this.state}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </LanguageContext.Provider>
            </>
        );
    }
}
