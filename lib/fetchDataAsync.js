export default async function fetchDataAsync(req, lang) {
    try {
        const baseUrl = req ? `${req.protocol}://${req.get('host')}` : '';
        console.log('TCL: fetchDataAsync -> baseUrl', baseUrl);
        //const res = await fetch(`http://127.0.0.1:3000/api/index/${lang}`);
        const res = await fetch(`${baseUrl}/api/index/${lang}`);
        const data = await res.json();
        return { data: data };
        // this.setState({ data: data });
    } catch (err) {
        return { err };
        // this.setState({ data: { error: `rror in fetching data ${err}` } });
    }
}
