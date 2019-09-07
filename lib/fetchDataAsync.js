import fetch from 'isomorphic-unfetch';

export default async function fetchDataAsync(context, page) {
    try {
        let baseUrl = '';
        // let origin = "";
        let search = '';
        const req = context.req;
        // console.log('TCL: fetchDataAsync -> context.req', req);
        if (req) {
            baseUrl = `${req.protocol}://${req.get('host')}`;
            search = context.query.id || '';
            console.log('TCL: fetchDataAsync -> context.query.id ', context.query.id);
        } else {
            baseUrl = window.location.origin;
            search = window.location.search;
            console.log('TCL: fetchDataAsync -> window.location.search', window.location.search);
        }

        const url = `${baseUrl}/api/${page}/${search}`;
        console.log('TCL: fetchDataAsync -> url', url);

        const res = await fetch(url);
        const data = await res.json();
        console.log('TCL: fetchDataAsync -> data', data);
        return { success: true, data: data };
    } catch (err) {
        console.log('TCL: fetchDataAsync -> ERROR', err);
        return { success: false, lastError: err };
    }
}

//const baseUrl = href ? href : req ? `${req.protocol}://${req.get('host')}` : '';
// const baseUrl = window ? window.location.origin : '';
//const url = `${baseUrl}/api${page}/${lang}`;
