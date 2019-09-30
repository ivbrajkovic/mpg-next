// Novosti - Detalji

import './style.scss';

const Detalji = ({ data, onCloseDetalji }) => {
  console.log('TCL: Detalji -> data', data);
  const title = (data && data.Naslov2) || '- Datum izložbe -';
  const header = (data && data.Naslov) || '- Naslov izložbe -';
  const content = (data && data.KratkiTekst) || '- Kratki tekst -';
  const content2 = (data && data.Tekst) || '- Dugi tekst -';
  const slika = (data && data.SlikaPath) || '- Slika -';

  return (
    <div
      className='container m-t-xs-20-xl-40'
      data-aos='fade'
      data-aos-duration='1000'
    >
      <div className='w3-card-4 detaljan-prikaz'>
        <h2 className='p-0-20 post-title content-1-light'>
          <div className='btnClose' onClick={() => onCloseDetalji()}>
            X
          </div>
          {title}
        </h2>
        <div className='p-xs-20-l-40'>
          <h1 className='header-1'>{header}</h1>
          <div className='text-center'>
            <img style={{ maxWidth: '100%' }} src={slika} />
          </div>
          <div
            className='m-t-xs-20-xl-40 content-1'
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div
            className='content-1'
            dangerouslySetInnerHTML={{ __html: content2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Detalji;
