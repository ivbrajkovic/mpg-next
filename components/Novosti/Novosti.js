// News section

import { useState, useEffect, useRef } from 'react';

import Detalji from './Detalji';
import showSpinner from '../../lib/showSpinner';
import useFetchNews from '../../hooks/useFetchNews';

const Novosti = ({ url, folder, section }) => {
  const [detalji, setDetalji] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const itemRef = useRef();

  useFetchNews(url, folder, {
    setData,
    setError,
    setLoading
  });

  const showDetalji = item => {
    itemRef.current = item;
    setDetalji(true);
  };

  const closeDetalji = () => {
    setDetalji(false);
  };

  useEffect(() => {
    AOS.refreshHard();
  }, [data, detalji]);

  const buildElement = () => {
    if (error)
      return (
        <div className='m-t-xs-20-xl-40 d-flex justify-center'>{error}</div>
      );
    else if (loading)
      return showSpinner('m-t-xs-20-xl-40 d-flex justify-center');
    else if (detalji)
      return (
        <Detalji data={itemRef.current} onCloseDetalji={() => closeDetalji()} />
      );
    else
      return (
        <section
          className={`container m-t-xs-20-xl-40 ${section ? section : ''}`}
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

        // <div data-aos='fade' data-aos-duration='1000'>
        //   <section className={`container m-t-xs-20-xl-40 section-1`}>
        //     <div
        //       style={{ cursor: 'pointer' }}
        //       className='w3-card-4 d-grid'
        //       onClick={() => showDetalji()}
        //     >
        //       <div className='item-1'>
        //         <img src={slika} />
        //       </div>
        //       <article className='item-2'>
        //         <p className='p-0-20 post-title'>{title}</p>
        //         <section className='p-xs-20-xl-40'>
        //           <h1>{header}</h1>
        //           <p
        //             dangerouslySetInnerHTML={{
        //               __html: content
        //             }}
        //           ></p>
        //         </section>
        //       </article>
        //     </div>
        //   </section>
        // </div>
      );
  };

  return <>{buildElement()}</>;
};

export default Novosti;
