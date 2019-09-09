// Zbirke - Opcenita

import Fade from 'react-reveal/Fade';

import fetchDataAsync from '../../../lib/fetchDataAsync';
import Section1 from '../../../components/Zbirke/Opcenita/Section1';
import Section2 from '../../../components/Zbirke/Opcenita/Section2';
import Section3 from '../../../components/Zbirke/Opcenita/Section3';

const FOLDER = '/static/img/odjeli/zbirke/mini/';

const Zbirke = ({ lang, data }) => {
    const name = (data && data.name) || '';
    const section1 = (data && data.section1 && data.section1[lang]) || [];
    const section2 = (data && data.section2 && data.section2[lang]) || [];
    const section3 = (data && data.section3) || [];

    let i = 0;
    console.log('TCL: Zbirke -> i', ++i);
    return (
        // <div className="zbirke">
        //     <Opcenita lang={lang} data={data} />
        // </div>

        <div className="container">
            <Fade cascsade ssrReveal>
                <Section1 data={section1} />
                <Section2 data={section2} />
            </Fade>
            <Section3 name={name} folder={FOLDER} data={section3} />
        </div>
    );
};

// Zbirke.getInitialProps = async ({ query: { id } }) => {
Zbirke.getInitialProps = async context => {
    const zbirke = context.query.zbirke;
    const params = [zbirke];
    console.log('TCL: Zbirke -> getInitialProps -> params', params);

    const data = await fetchDataAsync(context, 'zbirke', params);
    const page = (data && data.data && data.data.name) || '';
    const hero = (data && data.data && data.data.hero) || '';
    data.hero = { page: page, title: hero };
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