// section4.js

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import makeCarousel from "react-reveal/makeCarousel";

const Section4 = ({ lang, folder, data, slides }) => {
  const header = data[lang] && data[lang].header;
  const content = data[lang] && data[lang].content;

  // const slides = [
  //     'static/img/pocetna/slides/slider-pocetna-zbirke-1.jpg',
  //     'static/img/pocetna/slides/slider-pocetna-zbirke-2.jpg',
  //     'static/img/pocetna/slides/slider-pocetna-zbirke-3.jpg',
  //     'static/img/pocetna/slides/slider-pocetna-zbirke-4.jpg'
  // ];

  const sliderContainer = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%"
  };
  const CarouselUI = ({ children }) => (
    <div style={sliderContainer}>{children}</div>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <Fade fraction={0.8} ssrReveal>
      <section className="container m-t-xs-20-xl-40 p-0 text-center section-4">
        <div className="w3-card-4 d-grid">
          <div className="item-1">
            <Carousel defaultWait={4000} /*wait for 1000 milliseconds*/>
              {slides.map((item, index) => {
                return (
                  <Slide right key={index}>
                    <img className="img-cover" src={`${folder}${item}`} />
                  </Slide>
                );
              })}
            </Carousel>
          </div>
          <div className="p-xs-20-l-30 p-relative d-flex d-column justify-center item-2">
            <h1 className="header-2 m-b-10">{header}</h1>
            <p className="content-1 m-b-20">{content}</p>
            <div className="btn-container">
              <button className="btn btn-dark f-m-18">VIŠE</button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Section4;

// {/* <Carousel defaultWait={4000} /*wait for 1000 milliseconds*/>
//     <Slide right>
//         <div>
//             <img className="img-flex" src={slides[0]} />
//         </div>
//     </Slide>
//     <Slide right>
//         <div>
//             <img className="img-flex" src={slides[1]} />
//         </div>
//     </Slide>
//     <Slide right>
//         <div>
//             <img className="img-flex" src={slides[2]} />
//         </div>
//     </Slide>
//     <Slide right>
//         <div>
//             <img className="img-flex" src={slides[3]} />
//         </div>
//     </Slide>
// </Carousel> */}
