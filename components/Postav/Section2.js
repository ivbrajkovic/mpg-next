import React from "react";

const Section2 = ({ data }) => {
  return (
    <>
      {data &&
        data.map &&
        data.map((item, index) => {
          return (
            <div
              className="m-t-xs-20-xl-40"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="header-2">{item.title}</h1>
              <p className="content-1">{item.content}</p>
              <img
                src={item.src || "https://via.placeholder.com/350"}
                alt="lorem pics"
              />
            </div>
          );
        })}
    </>
  );
};

export default Section2;
