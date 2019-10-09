// Layout

import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Language from '../../context';

const Layout = ({ children }) => {
  console.log('TCL: Layout -> render()');

  return (
    <>
      <Head>
        <title>Muzej Grada Pazina</title>
      </Head>

      <Language>
        <Navbar />

        {children}

        <Footer />
      </Language>
    </>
  );
};

export default Layout;
