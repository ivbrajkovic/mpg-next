// Zbirke dinamic page

import fetchDataAsync from '../../lib/fetchDataAsync';

import Hero from '../../components/Hero';
import Naslovna from '../../components/Zbirke/Naslovna';
// import Zvona from '../../components/Zbirke/Zvona';

const Zbirke = props => {
    console.log('TCL: Zbirke -> props', props);

    const FOLDER = '/static/img/odjeli/zbirke/';

    const lang = props.lang;
    const data = (props.data && props.data.data) || {};
    const hero = data.hero ? data.hero : [];

    const banner = hero.src && hero.src.map(item => FOLDER + item);

    return (
        <div className="zbirke">
            <Hero title={hero[lang]} banner={banner} />
            {/* <Section1 data={data.section1} /> */}
            {/* <Zvona data={data} /> */}
            <Naslovna lang={lang} data={data} />
        </div>
    );
};

// Zbirke.getInitialProps = async ({ query: { id } }) => {
Zbirke.getInitialProps = async context => {
    const data = await fetchDataAsync(context, 'zbirke');
    return data;

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

export default Zbirke;
