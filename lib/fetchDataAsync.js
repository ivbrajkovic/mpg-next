import fetch from 'isomorphic-unfetch';

export default async function fetchDataAsync(context, page, params) {
    console.log('TCL: fetchDataAsync -> process.browser:', process.browser);

    const retData = {
        success: false,
        lastError: null,
        data: null
    };

    const first = params && params[0] ? `/${params[0]}` : '';
    const second = params && params[1] ? `/${params[1]}` : '';

    // let [first, second] = params || ['', ''];

    try {
        let baseUrl = '';

        if (typeof window === 'undefined') {
            baseUrl = `${context.req.protocol}://${context.req.get('host')}`;
        } // else console.log('TCL: window.location.href', window.location.href);

        // const first = context.query.id || '';
        // const second = context.query.name ? `\\${context.query.name}` : '';
        const url = `${baseUrl}/api/${page}${first}${second}`;

        console.log('TCL: fetchDataAsync -> url', url);

        const res = await fetch(url);
        const data = await res.json();

        return data;
    } catch (err) {
        console.log('TCL: fetchDataAsync -> ERROR', err);
        return { success: false, lastError: err };
    }
}

//const baseUrl = href ? href : req ? `${req.protocol}://${req.get('host')}` : '';
// const baseUrl = window ? window.location.origin : '';
//const url = `${baseUrl}/api${page}/${lang}`;
