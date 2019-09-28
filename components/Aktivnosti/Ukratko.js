// Aktivnosti - ukratko

import isLocalImage from '../../lib/isLocalImage';

const Ukratko = ({ folder, data }) => {
  return (
    <div data-aos='fade' data-aos-duration='1000'>
      <section className={`container m-t-xs-20-xl-40 text-center section-1`}>
        <div className='w3-card-4 d-grid'>
          <div className='item-1'>
            <img
              className='img-flex'
              // src={isLocalImage(data.src) ? `${folder}${data.src}` : data.src}
              src='https://via.placeholder.com/400'
            />
          </div>
          <article className='item-2'>
            <h2 className='p-0-20 post-title content-1-light1'>
              {data.Naslov}
            </h2>
            <section className='p-xs-20-l-40'>
              <h1 className='header-1'>{data.Naslov1}</h1>
              <p
                className='content-1'
                dangerouslySetInnerHTML={{ __html: data.KratkiTekst1 }}
              ></p>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Ukratko;
