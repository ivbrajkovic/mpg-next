import { useEffect, useState } from 'react';
import fetchDataAsync from '../lib/fetchDataAsync';

import Section6 from '../components/Odjeli/Section6';
import Section7 from '../components/Odjeli/Section7';
// import Footer from '../components/Footer';

const Odjel = props => {
    const [odjel, setOdjel] = useState(props.odjel);
    let submenuItems = null;

    useEffect(() => {
        submenuItems = document.querySelectorAll('#navbar .submenu--2-list .nav_submenu-items');
        submenuItems &&
            submenuItems.forEach((item, index) => {
                item.keyIndex = index;
                item.addEventListener('click', onSubmenuItemClick);
            });

        return () => {
            submenuItems &&
                submenuItems.forEach((item, index) => {
                    item.removeEventListener('click', onSubmenuItemClick);
                });
        };
    }, []);

    const onSubmenuItemClick = e => {
        changeOdjel(e.srcElement.keyIndex);
    };

    const changeOdjel = value => {
        if (props.data['odjeli'].section7[value]) setOdjel(value);
        else alert('Odjel nije u zapisima.');
    };

    let i = 0;
    console.log('TCL: Odjeli -> render: ', ++i);

    const lang = props.lang;
    const data = (props.success && props.data && props.data['odjeli']) || [];
    const section6 = data.section6 || {};
    // const section7 = data.section7 && data.section7[odjel] ? data.section7[odjel] : [];
    const section7 = data.section7 || [];

    return (
        <div style={{ minHeight: 800 }}>
            <Section6 lang={lang} odjel={odjel} data={section6} onChangeOdjel={changeOdjel} />
            <Section7 lang={lang} odjel={odjel} data={section7} />
            {/* <Footer /> */}
        </div>
    );
};

Odjel.getInitialProps = async function(context) {
    const data = await fetchDataAsync(context, 'odjeli');
    data.page = 'odjeli';
    return data;
};

export default Odjel;
