// Zbirke - Opcenita - Section 2

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import preloadImages from "../../../lib/preloadImages";
import GalleryItem from "./GalleryItem";
import MeniItem from "./MeniItem";
// import Fade from 'react-reveal/Fade';

const DELAY = 50;

const Section2 = ({ page, meni, base, data }) => {
  const [grid, setGrid] = useState([]);
  const firstRef = useRef(true);
  const gridRef = useRef();

  const images =
    data.src &&
    data.src.map &&
    data.src.map(item => {
      return `${base}mini/${item}`;
    });
  console.log("TCL: image", images);

  // Wait for preload images
  useLayoutEffect(() => {
    // let imgs = [];
    // for (let i = 0; i < src.length; i++) {
    //   imgs.push(src[i]);
    // }

    preloadImages(images)
      .then(() => setGrid(images))
      .catch(err => console.log("TCL: Section7 -> loadImages -> err():", err));
  }, []);

  // When grid change add transition in effect
  useEffect(() => {
    if (!firstRef.current) gridRef.current.classList.add("fade-bottom-active");
    else firstRef.current = false;
  }, [grid]);

  return (
    <div className="zbirke__section-3">
      <div
        ref={gridRef}
        className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30 fade-bottom"
      >
        {/* <Fade delay={250} mountOnEnter={true} appear={true} cascsade ssrReveal> */}
        {grid.map((item, index) => {
          if (!meni) {
            return (
              <GalleryItem
                key={index}
                item={item}
                style={{ transitionDelay: `${index * DELAY}ms` }}
              />
            );
          } else {
            return (
              <MeniItem
                key={index}
                index={index}
                item={item}
                page={page}
                style={{ transitionDelay: `${index * DELAY}ms` }}
              />
            );
          }
        })}
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default Section2;

{
  /* <Link
                key={index}
                href="/zbirke/detalji/[zbirke]/[detalji]"
                as={`/zbirke/detalji/${page}/${item.id}`}
              >
                )
                <div
                  style={{
                    transitionDelay: `${index * DELAY}ms`
                    //   gridRow: `span ${item.vSpan ? "2" : "1"}`
                  }}
                >
                  <div className="w3-card-4 expand-on-hover">
                    <img className="img-cover" src={item} />
                  </div>
                </div>
              </Link> */
}
