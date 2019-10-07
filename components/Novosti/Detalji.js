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
        <div className='p-0-20 post-title'>
          <div className='btnClose' onClick={() => onCloseDetalji()}>
            <p>X</p>
          </div>
          <p>{title}</p>
        </div>
        <div className='p-xs-20-xl-40'>
          <h1 className='header-1'>{header}</h1>
          <div className='text-center'>
            <img style={{ maxWidth: '100%' }} src={slika} />
          </div>
          <p
            className='m-t-xs-20-xl-40'
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <p dangerouslySetInnerHTML={{ __html: content2 }} />
        </div>
      </div>
    </div>
  );
};

export default Detalji;
