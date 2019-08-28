import React, { Component } from 'react';
// import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
// import Hero from './Hero';

export default class Layout extends Component {
    // state = { heroTitle: '' };

    // onClick = title => {
    //     // console.log('TCL: Layout -> setHeroTitle -> title', title);
    //     // let newTitle = this.setState({ heroTitle: title });
    //     // this.props.bannerTitle = title;
    // };

    render() {
        // console.log('TCL: Layout -> render -> this.props.content', this.props.content);
        return (
            <div>
                {/* <Navbar OnClickedHandler={this.onClick} /> */}
                {/* <Navbar contentData={this.props.contentData}/> */}

                <Navbar />

                {/* <Hero title={this.state.heroTitle}></Hero> */}

                {this.props.children}

                <Footer />
            </div>
        );
    }
}
