// Zbirke - detalji

import fetchDataAsync from '../../../../lib/fetchDataAsync';

// import Hero from '../../components/Hero';
// import Section1 from '../../components/Zbirke/Section1';
// import Zvona from '../../components/Zbirke/Zvona';

const Detalji = props => {
    // console.log('TCL: Detalji -> props', props);

    const FOLDER = '/static/img/odjeli/zbirke/';
    const lang = props.lang;
    const data = (props.data && props.data.success && props.data.data) || {};
    const title = (data.title && data.title[lang]) || [];
    const section1 = (data.section1 && data.section1) || {};
    const section2 = (data.section2 && data.section2[lang]) || [];
    const section3 = data.section3 || [];

    return (
        <div className="container">
            <div className="header">{title}</div>
            <div className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30 justify-xs-center-l-left zbirke-zvona__section-1">
                <div className="item-1">
                    <img className="img-cover" src={FOLDER + section1.pic} />
                </div>
                <div className="item-2">
                    <img className="img-cover" src="https://via.placeholder.com/800x600" />
                </div>
            </div>
            <div className="m-t-xs-20-xl-40 zbirke-zvona__section-2">
                {section2.map && section2.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30 justify-xs-center-l-left grid-xs-1fr-l-3fr zbirke-zvona__section-3">
                {section3.map &&
                    section3.map((item, index) => (
                        <div key={index}>
                            <img src={item} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

Detalji.getInitialProps = async context => {
    // return { id: id, name: name };

    const data = await fetchDataAsync(context, 'detalji');
    return data;

    // Zbirke.getInitialProps = async context => {
    //     const data = await fetchDataAsync(context, 'zbirke');
    //     return data;

    // console.log('TCL: Zbirke -> getInitialProps -> process.browser:', process.browser);
    // const id = (context && context.query && context.query.id) || false;
    // console.log('TCL: Zbirke -> getInitialProps -> id', id);
    // console.log('TCL: Zbirke -> getInitialProps -> context.query', context.query);
    // const url = `http://127.0.0.1:3000/api/zbirke/${id}`;
    // console.log('TCL: Zbirke -> getInitialProps -> url', url);
    // const res = await fetch(url);
    // const data = await res.json();
    // console.log('TCL: Zbirke -> getInitialProps -> data', data);
    // return true;
};

export default Detalji;
