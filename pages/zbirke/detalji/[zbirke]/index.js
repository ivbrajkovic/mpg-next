// Zbirke - Opcenita

import Fade from "react-reveal/Fade";

import fetchDataAsync from "../../../../lib/fetchDataAsync";
import Section1 from "../../../../components/Zbirke/Opcenita/Section1";
// import Section1 from "components/zbirke/Opcenita/Section1";
// import Section2 from "../../../../components/Zbirke/Opcenita/Section2";
import Section2 from "../../../../components/Zbirke/Opcenita/Section2";
// import Section4 from "../../../../components/Zbirke/Opcenita/Section4";

// const FOLDER = '/static/img/odjeli/zbirke/mini/';

const Zbirke = ({ lang, data }) => {
  const meni = (data && data.meni) || false;
  const page = (data && data.page) || "";
  const folder = (data && data.folder) || "";
  const text = (data && data[lang]) || {};
  const gallery = (data && data.gallery) || {};

  let i = 0;
  console.log("TCL: Zbirke -> i", ++i);
  return (
    // <div className="zbirke">
    //     <Opcenita lang={lang} data={data} />
    // </div>

    <div className="container">
      <Fade cascsade ssrReveal>
        <Section1 data={text} />
      </Fade>
      <Section2 page={page} meni={meni} folder={folder} gallery={gallery} />
    </div>
  );
};

// Zbirke.getInitialProps = async ({ query: { id } }) => {
Zbirke.getInitialProps = async context => {
  const zbirke = context.query.zbirke;
  const params = [zbirke];
  const data = await fetchDataAsync(context, "zbirke", params);
  // console.log('TCL: data', data);
  // const page = (data && data.data && data.data.name) || '';
  // console.log('TCL: page', page);
  // const hero = (data && data.data && data.data.hero) || '';
  // data.hero = { page: page, title: hero };

  // if (data && data.data && data.data.section3)
  //     data.data.section3.forEach(item => {
  //         const img = new Image();
  //         img.src = FOLDER + item.src;
  //     });
  return data;

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

export default Zbirke;
