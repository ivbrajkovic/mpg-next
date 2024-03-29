import React from "react";

const index = ({ lang, data }) => {
  const section1 = (data && data[lang] && data[lang].section1) || {};
  const paras = (section1.content && section1.content.split("\\n")) || [];

  return (
    <div className="m-t-xs-20-xl-40" data-aos="fade" data-aos-duration="1000">
      {/* <h1 className="header-2">{section1.title}</h1> */}
      {paras.map((item, index) => (
        <p className="m-t-xs-20-xl-40 content-1" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default index;
