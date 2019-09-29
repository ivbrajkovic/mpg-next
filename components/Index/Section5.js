// section5.js

// import Fade from "react-reveal/Fade"; // Importing Fade effect
import Link from 'next/link';

const banner =
  // 'static/img/pocetna/baner-pocetna-okastelu.jpg',
  'static/img/pocetna/pocetna-okastelu.jpg';

const Section5 = ({ lang, data }) => {
  const header = data[lang] && data[lang].header;
  const content = data[lang] && data[lang].content;
  return (
    // <Fade fraction={0.3} ssrReveal>
    <div data-aos='fade' data-aos-duration='1000'>
      <section className='m-t-xs-20-xl-40 pos-relative text-center section-5'>
        <div className='container p-0 banner w3-card-4 item-1'>
          <img className='img-cover' src={banner} />
        </div>

        <div className='container p-0 item-2'>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-delay='500'
            className='p-20 w3-card-4 float-right'
          >
            {/* <Fade right delay={800} ssrReveal> */}
            {/* <div className="p-20 w3-card-4 float-right hide"> */}
            <h1 className='m-b-10 header-2-light'>{header}</h1>
            <p
              className='m-b-20 content-1-light'
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
            <div className='btn-container'>
              <Link href='/kastel'>
                <button className='btn btn-light f-m-18'>VIŠE</button>
              </Link>
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </section>
    </div>
    // </Fade>
  );
};

export default Section5;
