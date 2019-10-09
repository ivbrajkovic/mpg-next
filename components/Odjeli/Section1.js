// Odjeli - section 1

import useRipplet from '../../hooks/useRipplet';

const Section1 = ({ lang, data, odjel, onChangeOdjel }) => {
  console.log('TCL: data', data);
  useRipplet('.menu-item');
  const changeOdjel = value => onChangeOdjel(value);

  return (
    <section
      style={{ minHeight: 100 }}
      className='container m-t-xs-20-xl-40 gap-xs-20-xl-30 section-1'
      data-aos='fade'
      data-aos-duration='1000'
    >
      {data[lang].map((title, index) => {
        return (
          <div key={index} className='dummy-needed-for-fade'>
            <div
              className={`m-0 header-4 w3-card-4 expand-on-hover menu-item${
                odjel == index ? ' active' : ''
              }`}
              onClick={() => changeOdjel(index)}
            >
              {title}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Section1;
