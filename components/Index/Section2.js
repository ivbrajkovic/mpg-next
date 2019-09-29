// Section2

// import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import isLocalImage from '../../lib/isLocalImage';

const Section2 = ({ data }) => (
  // <Zoom ssrReveal cascade>
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
            <article className='w3-card-4 post'>
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
  // {/* </Zoom> */}
);

export default Section2;
