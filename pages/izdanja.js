import { useEffect } from "react";
import fetchDataAsync from "../lib/fetchDataAsync";

const srcset = [
  "/static/img/aktivnosti/baner-aktivnosti-768px.jpg",
  "/static/img/aktivnosti/baner-aktivnosti-1200px.jpg",
  "/static/img/aktivnosti/baner-aktivnosti.jpg"
];

import Hero from "../components/Hero";
import Section1 from "../components/Index/Section1";

const izdanja = ({ lang, data }) => {
  const title = (data && data.hero && data.hero[lang]) || "";
  const folder = (data && data.folder) || "";
  const section1 = (data && data.section1) || [];

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <>
      <Hero title={title} srcset={srcset} />
      {section1.map((item, index) => {
        return (
          <div className="container">
            <Section1
              key={index}
              lang={lang}
              folder={folder}
              data={item}
              animation="fade-up"
              duration="1000"
            />
          </div>
        );
      })}
    </>
  );
};

izdanja.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, "izdanja");
  return data;
};

export default izdanja;
