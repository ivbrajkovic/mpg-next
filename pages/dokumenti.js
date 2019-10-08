// Dokumenti - page

import { useEffect, useState } from 'react';
import showSpinner from '../lib/showSpinner';
import Hero from '../components/Hero';

const srcset = [
  '/static/img/dokumenti/baner-dokumenti-768px.jpg',
  '/static/img/dokumenti/baner-dokumenti-1200px.jpg',
  '/static/img/dokumenti/baner-dokumenti.jpg'
];

const navbar = [
  {
    text: 'Opći dokumenti',
    urls: {
      hr:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=24&JezikID=1',
      en:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=24&JezikID=2'
    }
  },
  {
    text: 'Planovi',
    urls: {
      hr:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=25&JezikID=1',
      en:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=25&JezikID=2'
    }
  },
  {
    text: 'Izvještaj',
    urls: {
      hr:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=26&JezikID=1',
      en:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=26&JezikID=2'
    }
  },
  {
    text: 'Pravo na pristup informacijama',
    urls: {
      hr:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=28&JezikID=1',
      en:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=28&JezikID=2'
    }
  },
  {
    text: 'Javna nabava',
    urls: {
      hr:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=29&JezikID=1',
      en:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=29&JezikID=2'
    }
  },
  {
    text: 'Ostali dokumenti',
    urls: {
      hr:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=30&JezikID=1',
      en:
        'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=30&JezikID=2'
    }
  }
];

const dokumenti = ({ lang }) => {
  const [data, setData] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const buttons = document.querySelectorAll('.dokumenti-page .nav-item');
    buttons &&
      buttons.forEach(btn => {
        btn.addEventListener('mousedown', ripplet);
      });

    AOS.refreshHard();

    return () => {
      buttons &&
        buttons.forEach(btn => {
          btn.removeEventListener('mousedown', ripplet);
        });
    };
  }, []);

  useEffect(() => {
    async function getData() {
      const res = await fetch(navbar[active].urls[lang]);
      const data = await res.json();
      setData(data);
    }
    getData();
  }, [lang, active]);

  const changeDocument = index => {
    setActive(index);
  };

  return (
    <div className='dokumenti-page'>
      {(data && (
        <>
          {/* // Hero */}
          <Hero title='dokumenti' srcset={srcset} />

          {/* // Grid container */}
          <div className='container m-t-xs-20-xl-40 content-1'>
            <div className='d-grid gap-xs-20-xl-40'>
              {/* // Navigation */}
              <div className='item-1'>
                {navbar.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`w3-card-4 nav-item${
                        index === active ? ' active' : ''
                      }`}
                      onClick={() => changeDocument(index)}
                    >
                      {item.text}
                    </div>
                  );
                })}
              </div>

              {/* // Content from CMS */}
              <div
                className='item-2'
                dangerouslySetInnerHTML={{ __html: data.Tekst }}
              ></div>
            </div>
          </div>
        </>
      )) ||
        showSpinner('m-t-xs-20-xl-40 d-flex justify-center')}
    </div>
  );
};

export default dokumenti;
