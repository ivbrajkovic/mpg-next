// Opcenita - section2 - meni item

import Link from 'next/link';

const MeniItem = ({ index, page, item, style }) => (
  <Link
    key={index}
    href='/zbirke/detalji/[zbirke]/[detalji]'
    as={`/zbirke/detalji/${page}/${index + 1}`}
  >
    <div style={style}>
      <div className='w3-card-4 expand-on-hover'>
        <img className='img-cover' src={item} />
      </div>
    </div>
  </Link>
);

export default MeniItem;
