// import { PureComponent, useRouter } from 'react';
import { useRouter } from 'next/router';

import Hero from '../components/Hero';
import Section1 from '../components/Zbirke/Section1';

const Zbirke = ({ lang, data }) => {
    console.log('TCL: Zbirke -> data', data);
    const router = useRouter();

    let i = 0;
    // render() {
    console.log('TCL: Zbirke -> i', ++i);

    const id = router.query.id;
    console.log('TCL: Zbirke -> render -> id', id);
    // const data = this.props.data ? this.props.data : {};
    console.log('TCL: Zbirke -> render -> data', data);
    const hero = data[id] && data[id].hero ? data[id].hero : [];
    console.log('TCL: Zbirke -> render -> hero', hero);
    console.log('TCL: //render -> hero.src', hero.src);

    return (
        // <h1>test</h1>
        <div className="zbirke">
            <Hero title={hero[lang]} banner={hero.src} />
            <Section1 data={data} />
        </div>
    );
    // }
};

// Zbirke.getInitialProps = async function() {
//     // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     // const data = await res.json();

//     console.log(`TEEEEEEEEESSSSTTTT`);

//     return {
//         //
//         test: null
//     };
// };

export default Zbirke;
