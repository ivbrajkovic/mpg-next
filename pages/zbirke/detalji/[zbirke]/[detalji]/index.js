// Zbirke - detalji

import { useEffect } from "react";
// import Fade from "react-reveal/Fade";

import fetchDataAsync from "../../../../../lib/fetchDataAsync";
import Section1 from "../../../../../components/Zbirke/Detaljna/Section1";
import Section2 from "../../../../../components/Zbirke/Detaljna/Section2";
import Section3 from "../../../../../components/Zbirke/Detaljna/Section3";

const Detalji = ({ lang, data }) => {
  const FOLDER = (data && data.folder) || "";

  const text = (data && data[lang]) || {};
  const title = (text && text.title) || "";
  const content = (text && text.content) || "";

  const image = (data && data.image) || "";
  const audio = (data && data.audio) || "";
  const video = (data && data.video) || "";
  const gallery = (data && data.gallery) || [];

  useEffect(() => {
    lightbox.reload();
    AOS.refreshHard();
  }, []);

  return (
    <div className="container zbirke-detalji">
      {/* <Fade delay={250} cascsade ssrReveal> */}
      <Section1
        folder={FOLDER}
        title={title}
        image={image}
        audio={audio}
        video={video}
        data-aos="fade"
        data-aos-duration="1000"
      />
      <Section2 content={content} />
      <Section3 folder={FOLDER} data={gallery} />
      {/* </Fade> */}
    </div>
  );
};

Detalji.getInitialProps = async context => {
  const zbirke = context.query.zbirke;
  const detalji = context.query.detalji;
  const params = [zbirke, detalji];
  const data = await fetchDataAsync(context, "zbirke/detalji/", params);
  return data;

  // Zbirke.getInitialProps = async context => {
  //     const data = await fetchDataAsync(context, 'zbirke');
  //     return data;

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

export default Detalji;
