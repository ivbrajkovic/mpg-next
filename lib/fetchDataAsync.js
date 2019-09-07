import fetch from 'isomorphic-unfetch';

export default async function fetchDataAsync(req, page) {
    console.log('TCL: fetchDataAsync -> (req, page)', (req, page));
    try {
        let baseUrl = '';
        // let origin = "";
        let search = '';

        if (req) baseUrl = `${req.protocol}://${req.get('host')}`;
        else {
            baseUrl = window.location.origin;
            search = window.location.search;
        }

        const url = `${baseUrl}/api/${page}${search}`;
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
