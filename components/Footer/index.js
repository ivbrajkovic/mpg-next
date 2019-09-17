import React from "react";

const Footer = () => {
  return (
    <footer className="m-t-xs-20-xl-40">
      <div className="container text-center d-grid">
        <div className="item-1">
          <p className="m-0 content-footer">
            Muzej Grada Pazina <br />
            Trg Istarskog razvoda 2 <br />
            52000 Pazin <br />
          </p>
        </div>
        <div className="item-2">
          <p className="m-0 content-footer">
            t: 052 / 623-054 (recepcija) <br />
            t: 052 / 625-040, 616-866 <br />
            e: info@muzej-pazin.hr <br />
          </p>
        </div>
        <div className="item-3">
          <img src="/static/img/social-1.png" />
          <img src="/static/img/social-2.png" />
        </div>
        <div className="item-4">
          <img src="/static/img/footer-1.png" />
          <img src="/static/img/footer-2.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
