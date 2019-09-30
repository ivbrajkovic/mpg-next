// Section2

import { useState, useEffect, useRef } from 'react';
import Detalji from '../Novosti/Detalji';

const Section2 = ({ data }) => {
  const [detalji, setDetalji] = useState(false);
  const itemRef = useRef();

  const showDetalji = item => {
    itemRef.current = item;
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
        <Detalji data={itemRef.current} onCloseDetalji={() => closeDetalji()} />
      )) || (
        <section
          // ref={elementRef}
          className='container m-t-xs-20-xl-40 gap-xs-20-xl-40 d-grid text-center section-2'
        >
          {data &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  data-aos='zoom-in-up'
                  data-aos-duration='1000'
                  data-aos-delay={100 * index}
                >
                  <article
                    style={{ cursor: 'pointer' }}
                    className='w3-card-4 post'
                    onClick={() => showDetalji(item)}
                  >
                    {/* <img className="img-flex" src={item.src} /> */}
                    <img
                      // className='img-flex'
                      src={item.SlikaPath}
                      // src={isLocalImage(item.src) ? `${folder}${item.src}` : item.src}
                    />
                    <h2 className='p-0-20 content-2 post-title content-1-light'>
                      {item.Naslov2}
                    </h2>
                    <section className='p-20'>
                      <h1 className='header-3'>{item.Naslov}</h1>
                      <p
                        className='content-2'
                        dangerouslySetInnerHTML={{ __html: item.KratkiTekst1 }}
                      ></p>
                    </section>
                  </article>
                </div>
              );
            })}
        </section>
      )}
    </>
  );
};

export default Section2;
