import React, { Component } from 'react';

const data = ['/static/img/slider/slider-pocetna-zbirke-1.jpg'];

export default class index extends Component {
    componentDidMount = () => {
        // const button = document.querySelector('.btn');
        // console.log('TCL: index -> componentDidMount -> btn', button);
        // console.log('TCL: index -> componentDidMount -> ripplet', ripplet);
        // ripplet.defaultOptions.color = 'rgba(255, 255, 255, .2)';
        // button.addEventListener('mousedown', ripplet);
        // Waves.attach('button', ['waves-button', 'waves-light']);
        // Waves.init();
    };
    render() {
        return (
            <section className="container m-t-xs-20-xl-40 p-0 text-center section-4">
                <div className="w3-card-4 d-grid">
                    <div className="item-1">
                        <img className="img-flex" src={data[0]} />
                    </div>

                    <div className="p-20 p-relative d-flex d-column justify-center item-2">
                        <h1 className="header-2">Lorem, ipsum dolor.</h1>
                        <p className="content-1">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore culpa,
                            laboriosam fugit accusamus et non.
                        </p>
                        <div className="btn-container">
                            <button className="btn btn-dark f-m-18">VIŠE</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
