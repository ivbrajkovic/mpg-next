// Zbirke - detalji
import Fade from 'react-reveal/Fade';

import fetchDataAsync from '../../../../lib/fetchDataAsync';
import Section1 from '../../../../components/Zbirke/Detaljna/Section1';
import Section2 from '../../../../components/Zbirke/Detaljna/Section2';
import Section3 from '../../../../components/Zbirke/Detaljna/Section3';

const Detalji = ({ lang, data }) => {
    const FOLDER = '/static/img/odjeli/zbirke/';

    const title = (data && data.section1 && data.section1.title && data.section1.title[lang]) || '';
    const section1 = (data && data.section1 && data.section1) || {};
    const section2 = (data && data.section2 && data.section2[lang]) || [];
    const section3 = (data && data.section3) || [];

    return (
        <div className="container">
            <Fade delay={250} cascsade ssrReveal>
                <Section1 title={title} folder={FOLDER} data={section1} />
                <Section2 data={section2} />
                <Section3 data={section3} />
            </Fade>
        </div>
    );
};

Detalji.getInitialProps = async context => {
    const zbirke = context.query.zbirke;
    const detalji = context.query.detalji;
    const params = [zbirke, detalji];
    const data = await fetchDataAsync(context, 'zbirke', params);
    console.log('TCL: data', data);
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
