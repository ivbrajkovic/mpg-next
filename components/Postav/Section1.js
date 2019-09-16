import React from "react";

const index = ({ data }) => {
  const title = (data && data.title) || "";
  const paras = (data && data.content && data.content.split("\\n")) || [];
  return (
    <div className="m-t-xs-20-xl-40" data-aos="fade" data-aos-duration="1000">
      <h1 className="header-2">{title}</h1>
      {paras.map((item, index) => (
        <p className="content-1" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default index;
