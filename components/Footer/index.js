import React from 'react';

const Footer = () => {
  return (
    <footer className='m-t-xs-20-xl-40'>
      <div className='container'>
        <div className='item-1'>
          <div>
            <p className='m-0 content-footer'>
              Muzej Grada Pazina <br />
              Trg Istarskog razvoda 2 <br />
              52000 Pazin <br />
            </p>
          </div>
          <div>
            <p className='m-0 content-footer'>
              t: 052 / 623-054 (recepcija) <br />
              t: 052 / 625-040, 616-866 <br />
              e: info@muzej-pazin.hr <br />
            </p>
          </div>
          <div>
            <a href='https://www.facebook.com/MuzejgradaPazina/'>
              <img src='/static/img/social-1.png' />
            </a>
          </div>
        </div>
        <div className='item-2'>
          <a href='https://www.pazin.hr/'>
            <img src='/static/img/logofooter-gradpazin.png' />
          </a>
          <a href='http://www.central-istria.com/'>
            <img src='/static/img/logofooter-istarskazup.png' />
          </a>
          <a href='https://www.min-kulture.hr/'>
            <img src='/static/img/logofooter-minkulture.png' />
          </a>
          <a href='http://www.central-istria.com/'>
            <img src='/static/img/footer-2.png' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
