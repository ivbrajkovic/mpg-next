import fetch from 'isomorphic-unfetch';

export default async function fetchDataAsync(context, page) {
    const retData = {
        success: false,
        lastError: null,
        data: null
    };

    try {
        console.log('TCL: fetchDataAsync -> process.browser:', process.browser);

        let baseUrl = '';

        if (typeof window === 'undefined') {
            baseUrl = `${context.req.protocol}://${context.req.get('host')}`;
        } // else console.log('TCL: window.location.href', window.location.href);

        const first = context.query.id || '';
        const second = context.query.name ? `\\${context.query.name}` : '';
        const url = `${baseUrl}/api/${page}${second}/${first}`;

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
