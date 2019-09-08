// Zbirke dinamic page
import { useRef } from 'react';
import fetchDataAsync from '../../lib/fetchDataAsync';
import Opcenita from '../../components/Zbirke/Opcenita';

const Zbirke = props => {
    const lang = props.lang;
    const data = (props.success && props.data) || {};

    let i = 0;
    console.log('TCL: Zbirke -> i', ++i);
    return (
        <div className="zbirke">
            {/* <Hero title={hero[lang]} banner={banner} /> */}
            {/* <Section1 data={data.section1} /> */}
            {/* <Zvona data={data} /> */}
            <Opcenita lang={lang} data={data} />
        </div>
    );
};

// Zbirke.getInitialProps = async ({ query: { id } }) => {
Zbirke.getInitialProps = async context => {
    const data = await fetchDataAsync(context, 'zbirke');
    data.page = data.data.name;
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
