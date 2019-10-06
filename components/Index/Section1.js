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
            // className={`container m-t-xs-20-xl-40 text-center section-1`}
            className={`container m-t-xs-20-xl-40 section-1`}
          >
            <div
              style={{ cursor: 'pointer' }}
              className='w3-card-4 d-grid'
              onClick={() => showDetalji()}
            >
              <div className='item-1'>
                <img src={slika} />
              </div>
              <article className='item-2'>
                <p className='p-0-20 post-title'>{title}</p>
                <section className='p-xs-20-xl-40'>
                  <h1>{header}</h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content.substring(0, 590)
                    }}
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
