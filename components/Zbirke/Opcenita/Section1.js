// Zbirke - Opcenita - Section 1

import getContentFromJson from '../../../lib/getContentFromJson';

const Section1 = ({ data }) => {
  // const header = (data.header && data.header.split("\\n")) || [];
  // const text = (data.content && data.content.split("\\n")) || [];

  return (
    <div
      className='m-t-xs-20-xl-40 zbirke__section-1'
      data-aos='fade'
      data-aos-duration='1000'
      data-aos-delay='1000'
    >
      <div className='float-right'>
        <div className='header'>
          {getContentFromJson(data.header)}

          {/* {header.map((item, index) => (
            <p key={index}>{item}</p>
          ))} */}
        </div>
      </div>
      <div className='content-1'>
        {getContentFromJson(data.content)}
        {/* {text.map((item, index) => {
          return (
            <>
              {((item.startsWith("-") ||
                item.startsWith("−") ||
                item.startsWith("–")) && (
                // <div className="list-item" key={index}>
                <li style={{ marginLeft: 40 }} key={index}>
                  {item.substring(1)}
                </li>
              )) || <p key={index}>{item}</p>}
            </>
          );
        })} */}
      </div>
    </div>
  );
};

export default Section1;
