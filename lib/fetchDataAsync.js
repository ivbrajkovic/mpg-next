import fetch from 'isomorphic-unfetch';

export default async function fetchDataAsync(req, origin, page, lang) {
    try {
        //if (!page) return { success: false, data: 'Invalid page.' };

        let baseUrl = '';
        if (req) baseUrl = `${req.protocol}://${req.get('host')}`;
        else if (origin) baseUrl = origin;
        //else return { success: false, data: 'Invalid page. 2' };

        const url = `${baseUrl}/api/${page}/${lang}`;
        console.log('TCL: fetchDataAsync -> url', url);

        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('TCL: fetchDataAsync -> err', err);
        return { success: false, lastError: err };
    }
}

//const baseUrl = href ? href : req ? `${req.protocol}://${req.get('host')}` : '';
// const baseUrl = window ? window.location.origin : '';
//const url = `${baseUrl}/api${page}/${lang}`;
