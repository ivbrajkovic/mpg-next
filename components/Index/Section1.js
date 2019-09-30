// Section1.js

import { useState, useEffect } from 'react';
import Detalji from '../Novosti/Detalji';

// import isLocalImage from '../../lib/isLocalImage';
// import Spinner from '../Spinner/Spinner';

const Section1 = ({ data, onShowDetalji }) => {
  const title = data && data.Naslov2;
  const header = data && data.Naslov;
  const content = data && data.KratkiTekst;
  const slika = data && data.SlikaPath;

  const [detalji, setDetalji] = useState(false);
  const showDetalji = () => {
    setDetalji(true);
  };
  const closeDetalji = () => {
    setDetalji(false);
  };

  useEffect(() => {
    AOS.refreshHard();
  }, [detalji]);

  return (
    <>
      {(detalji && (
        <Detalji data={data} onCloseDetalji={() => closeDetalji()} />
      )) || (
        <div data-aos='fade' data-aos-duration='1000'>
          <section
            className={`container m-t-xs-20-xl-40 text-center section-1`}
          >
            <div
              style={{ cursor: 'pointer' }}
              className='w3-card-4 d-grid'
              onClick={() => showDetalji()}
            >
              <div className='item-1'>
                <img
                  // className='img-cover'
                  src={slika}
                  // src={
                  //   isLocalImage(data.src) ? `${folder}${data.src}` : data.src
                  // }
                />
              </div>
              <article className='item-2'>
                <h2 className='p-0-20 post-title content-1-light'>{title}</h2>
                <section className='p-xs-20-l-40'>
                  <h1 className='header-1'>{header}</h1>
                  <p
                    className='content-1'
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></p>
                </section>
              </article>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Section1;
