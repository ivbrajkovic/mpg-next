// Zbirke - Opcenita - Section 2

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import preloadImages from '../../../lib/preloadImages';
import GalleryItem from '../../Gallery/GalleryItem';
import MeniItem from './MeniItem';
// import Fade from 'react-reveal/Fade';

// import "./style.scss";

const DELAY = 50;
// let lightbox = null;

// console.log("TCL: lightbox", lightbox);
// let images = [];

const Section2 = ({ page, meni, folder, gallery }) => {
  // console.log('TCL: gallery', gallery);
  const [grid, setGrid] = useState([]);
  // const firstRef = useRef(true);
  const gridRef = useRef();
  // const lightboxRef = useRef();

  // Wait for preload images
  useLayoutEffect(() => {
    const images =
      gallery.map &&
      gallery.map(item => {
        // console.log("TCL: item", item);
        return `${folder}${item}`.replace(/(.*)(\.jpg|\.png)/gim, '$1-tmb$2');
      });

    preloadImages(images || [])
      .then(() => setGrid(images || []))
      .catch(err =>
        console.log('TCL: Opcenita - Section2 -> loadImages -> err():', err)
      );
  }, []);

  // // When grid change add transition in effect
  // useEffect(() => {
  //   if (!firstRef.current)
  //     gridRef.current.classList.add("fade-bottom-cascade-active");
  //   else firstRef.current = false;
  // }, [grid]);

  // useEffect(() => {
  //   const lightbox = GLightbox({
  //     selector: "glightbox"
  //   });
  //   lightboxRef.current = lightbox;

  //   return () => lightboxRef.current.destroy();
  // }, []);

  useEffect(() => {
    lightbox.reload();
  }, [grid]);

  return (
    <div className='zbirke__section-3' data-aos=''>
      <div
        ref={gridRef}
        className={`m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30 gallery-fade-bottom${
          page === 'zvona' ? ' zvona' : ''
        }`}
      >
        {/* <Fade delay={250} mountOnEnter={true} appear={true} cascsade ssrReveal> */}
        {grid.map((item, index) => {
          if (!meni) {
            return (
              <GalleryItem
                key={index}
                thumb={item}
                large={folder + gallery[index]}
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
