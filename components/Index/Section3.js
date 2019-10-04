// Section3

// import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import Link from 'next/link';

const srcs = [
  'static/img/info-lokacija.png',
  'static/img/info-rvrijeme.png',
  'static/img/info-ulaznice.png'
];

const Section3 = ({ lang, data }) => (
  <section className='m-t-xs-20-xl-40 panel-xs-20-l-40 w3-card-4 text-center section-3'>
    {/* <Zoom fraction={0.3} cascade ssrReveal> */}
    <div className='container d-grid'>
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              data-aos='zoom-in'
              data-aos-duration='1000'
              data-aos-delay={300 / (index + 1)}
            >
              <article className='post-info'>
                <header className='m-b-5'>
                  {/* <img src={item.src} /> */}
                  <img src={srcs[index]} />
                  <h1 className='d-inl-blok header-4-light'>
                    {item[lang] && item[lang].header}
                  </h1>
                </header>

                <p
                  className='m-b-5 content-3 f-xl-22'
                  dangerouslySetInnerHTML={{
                    __html: (item[lang] && item[lang].content1) || ''
                  }}
                >
                  {/* {item[lang] && item[lang].content1} */}
                </p>

                {(item[lang] && item[lang].href && (
                  <Link href={item[lang].href}>
                    <p
                      style={{ cursor: 'pointer', textDecoration: 'underline' }}
                      className='m-b-5 content-4 f-xl-22'
                      dangerouslySetInnerHTML={{
                        __html: (item[lang] && item[lang].content2) || ''
                      }}
                    ></p>
                  </Link>
                )) || (
                  <p
                    className='m-b-0 content-4'
                    dangerouslySetInnerHTML={{
                      __html: (item[lang] && item[lang].content2) || ''
                    }}
                  ></p>
                )}
              </article>
            </div>
          );
        })}
    </div>
    {/* </Zoom> */}
  </section>
);

export default Section3;
