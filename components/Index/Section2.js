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
          className='container m-t-xs-20-xl-40 gap-xs-20-xl-40 d-grid section-2'
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
                  <div
                    className='w3-card-4 post'
                    style={{ cursor: 'pointer' }}
                    onClick={() => showDetalji(item)}
                  >
                    <div className='item-1'>
                      <img src={item.SlikaPath} />
                    </div>
                    <div className='item-2'>
                      <p className='p-0-20 content-2 post-title'>
                        {item.Naslov2}
                      </p>
                      <div className='p-20'>
                        <h1>{item.Naslov}</h1>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.KratkiTekst1
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
      )}
    </>
  );
};

export default Section2;
