// Odjeli - section 2

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import preloadImages from '../../lib/preloadImages.js';
import Link from 'next/link';

import Spinner from '../Spinner/Spinner';

const DELAY = 50;
// const IDLE = 250;
const OUT = 350;
// const DURATION = 450;
const FOLDER = '/static/img/odjeli/';

const Section2 = ({ lang, odjel, data }) => {
  const [grid, setGrid] = useState([]);
  const firstRef = useRef(true);
  const gridRef = useRef();

  // Wait for preload images
  useLayoutEffect(() => {
    let imgs = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        imgs.push(`${FOLDER}${data[i][j].src}`);
      }
    }

    preloadImages(imgs)
      .then(() => setGrid(data[odjel]))
      .catch(err => console.log('TCL: Section7 -> loadImages -> err():', err));
  }, [data]);

  // When grid change add transition in effect
  useEffect(() => {
    if (!firstRef.current) {
      gridRef.current.classList.add('fade-bottom-cascade-active');
    }
  }, [grid]);

  // When odjel change add transition in effect
  useEffect(() => {
    if (!firstRef.current) {
      gridRef.current.classList.remove('fade-bottom-cascade-active');
      setTimeout(() => {
        setGrid(data[odjel]);
      }, OUT);
    } else firstRef.current = false;
  }, [odjel]);

  return (
    <>
      {(grid.length > 0 && (
        <div
          ref={gridRef}
          className={`container m-t-xs-20-xl-40 gap-xs-20-xl-30 section-2 fade-bottom-cascade`}
        >
          {grid.map((item, index) => {
            return (
              <div
                key={item.src}
                style={{ transitionDelay: `${index * DELAY}ms` }}
                className={`w3-card-4`}
              >
                <Link
                  href='/zbirke/detalji/[zbirke]'
                  as={`/zbirke/detalji/${item.name}`}
                >
                  <div className='expand-on-hover'>
                    <img className='img-cover' src={FOLDER + item.src} />
                    <div className='header-3 m-0'>{item[lang]}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )) || (
        <div className='m-t-xs-20-xl-40 d-flex justify-center'>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Section2;
