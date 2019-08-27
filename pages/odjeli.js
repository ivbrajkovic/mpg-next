// import fetch from 'isomorphic-unfetch';
// import Layout from '../components/Layout.js';
import Hero from '../components/Hero';

// import '../scss/style.scss';

const banner = {
    small: 'https://via.placeholder.com/575x500',
    medium: 'https://via.placeholder.com/991x500',
    large: 'https://via.placeholder.com/1199x500',
    xlarge: 'https://via.placeholder.com/1600x500'
};

const Index = props => {
    // console.log('TCL: props', props);
    console.log('odjeli.html');

    return (
        <div>
            <Hero title={''} banner={banner}></Hero>
            'This is odjeli.html';
        </div>
    );
};

// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();

//     console.log(`Show data fetched. Count: ${data.length}`);

//     return {
//         shows: data.map(entry => entry.show)
//     };
// };

export default Index;
