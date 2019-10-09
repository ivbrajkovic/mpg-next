// _app

import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';

import Layout from '../components/Layout';

import '../scss/style.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const style = {
  marginTop: 100,
  display: 'grid',
  gridTemplateRows: '1fr auto',
  minHeight: 'calc(101vh - 100px)'
};

export default class MyApp extends App {
  // state = {
  //   lang: 'hr'
  // };

  componentDidMount = () =>
    (ripplet.defaultOptions.color = 'rgba(255, 255, 255, .2)');

  // setLanguage = lang => {
  //   this.setState({
  //     lang: lang
  //   });
  // };

  i = 0;
  render() {
    console.log('TCL: MyApp -> render: ', ++this.i);

    const { Component, pageProps } = this.props;

    return (
      <>
        <Layout>
          <div style={style}>
            <Component {...pageProps} />
          </div>
        </Layout>
      </>
    );
  }
}
