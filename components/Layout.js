import React, { Component } from 'react';
// import Head from 'next/head';
import Navbar from './Navbar';
import Footer from '../components/Footer';
// import Hero from './Hero';

export default class Layout extends Component {
    // state = { heroTitle: '' };

    // onClick = title => {
    //     // console.log('TCL: Layout -> setHeroTitle -> title', title);
    //     // let newTitle = this.setState({ heroTitle: title });
    //     // this.props.bannerTitle = title;
    // };

    render() {
        return (
            <div>
                {/* <Head>
                    <title>Muzej Grada Pazina</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                        key="viewport"
                    />
                </Head> */}

                {/* <Navbar OnClickedHandler={this.onClick} /> */}
                <Navbar />

                {/* <Hero title={this.state.heroTitle}></Hero> */}

                {this.props.children}

                <Footer />
            </div>
        );
    }
}
