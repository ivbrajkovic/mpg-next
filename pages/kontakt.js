import { useEffect, useRef } from "react";
import fetchDataAsync from "../lib/fetchDataAsync";

const srcset = [
  "/static/img/kontakt/baner-kontakt-768px.jpg",
  "/static/img/kontakt/baner-kontakt-1200px.jpg",
  "/static/img/kontakt/baner-kontakt.jpg"
];

import Hero from "../components/Hero";

const text = {
  hr: {
    hero: "kontakt",
    info: {
      reception: "recepcija"
    },
    form: {
      name: "ime",
      email: "email",
      telephone: "telefon",
      message: "poruka",
      btn: "pošalji"
    }
  },
  en: {
    hero: "contact",
    info: {
      reception: "reception"
    },
    form: {
      name: "name",
      email: "email",
      telephone: "telephone",
      message: "message",
      btn: "send"
    }
  }
};

const kontakt = ({ lang }) => {
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current = document.querySelectorAll(".btn");
    btnRef.current.forEach(btn => btn.addEventListener("mousedown", ripplet));
    AOS.refreshHard();

    return () =>
      btnRef.current.forEach(btn =>
        btn.removeEventListener("mousedown", ripplet)
      );
  }, []);

  return (
    <div className="contact-page">
      <Hero title={text[lang].hero} srcset={srcset} />

      <div className="container contact-page__section1">
        <h1
          className="header-3"
          data-aos="fade"
          data-aos-duration="1000"
        >
          Muzej Grada Pazina
        </h1>
        <div className="d-grid">
          <div
            className="contact__info"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="content-2 info__item">
              <img src="/static/img/kontakt/kontakt-adresa.png" alt="adresa" />
              <p>
                Trg Istarskog razvoda 2 <br />
                52000 Pazin <br />
              </p>
            </div>
            <div className="content-2 info__item">
              <img
                src="/static/img/kontakt/kontakt-telefon.png"
                alt="telefon"
              />
              <p>
                052 / 623-054 ({text[lang].info.reception}) <br />
                052 / 625-040, 616-866 <br />
              </p>
            </div>
            <div className="content-2 info__item">
              <img src="/static/img/kontakt/kontakt-email.png" alt="email" />
              <p>
                info@muzej-pazin.hr <br />
              </p>
            </div>
          </div>

          <div
            className="contact__form"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="form__item">
              <input
                type="text"
                name=""
                id=""
                placeholder={text[lang].form.name}
              />
            </div>
            <div className="form__item">
              <input
                type="text"
                name=""
                id=""
                placeholder={text[lang].form.email}
              />
            </div>
            <div className="form__item">
              <input
                type="text"
                name=""
                id=""
                placeholder={text[lang].form.telephone}
              />
            </div>
            <div className="form__item">
              <textarea
                name=""
                id=""
                placeholder={text[lang].form.message}
              ></textarea>
            </div>
            <div className="form__item">
              <button className="btn btn-dark">{text[lang].form.btn}</button>
            </div>
          </div>
        </div>
      </div>

      <div className="m-t-xs-20-xl-40 contact-page__section2">
        <div className="container">
          <div className="dummy"></div>
        </div>
      </div>
    </div>
  );
};

// kontakt.getInitialProps = async function(context) {
//   const data = await fetchDataAsync(context, "kontakt");
//   return data;
// };

export default kontakt;
