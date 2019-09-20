// import { withRouter } from 'next/router';
import Language from "./Language";
import ActiveLink from "./Link";
import Link from "next/link";

// const isOdjel = (lang, path, subitem, index, setOdjel) => {
//   let node = null;
//   if (path === "/odjeli") {
//     node = (
//       <li
//         key={index}
//         className="nav_submenu-items"
//         onClick={() => setOdjel("/odjeli", index)}
//       >
//         {subitem[lang]}
//       </li>
//     );
//   } else {
//     node = (
//       <Link href={subitem.href} key={index}>
//         <li className="nav_submenu-items">{subitem[lang]}</li>
//       </Link>
//     );
//   }
//   return node;
// };

const Menu = ({ lang, shrink, menu, onChangeLanguage, onTest, onSetOdjel }) => {
  const setLanguage = value => onChangeLanguage(value);
  const setOdjel = (path, index) => onSetOdjel(path, index);

  return (
    <nav className="w3-card-4">
      <div
        id="navbar"
        className={`container navbar f-xl-18 ${shrink ? `navbar-shrink` : ``}`}
      >
        <Language
          language={lang}
          onChangeLanguage={setLanguage}
          onTest={onTest}
        />

        <div className="logo">
          <Link href="/">
            <img src="/static/img/logo.png" alt="MGP logo" />
          </Link>
        </div>

        <div className="hamburger hamburger--collapse">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>

        <ul className="menu">
          {menu.map((menuItem, i) => {
            return (
              <li key={i}>
                <ActiveLink activeClassName="active" href={menuItem.href}>
                  <a>{menuItem[lang]}</a>
                </ActiveLink>

                {menuItem.hasSubmenu && (
                  <>
                    <div className="dropdown"></div>
                    {/* <div>&#9662;</div> */}
                    {/* <div>&#8964;</div> */}
                    <ul className={`submenu`}>
                      {menuItem.submenu.map((submenuItem, j) => {
                        const node =
                          menuItem.href === "/odjeli" ? (
                            <li
                              key={j}
                              // className="submenu-items"
                              onClick={() => setOdjel("/odjeli", j)}
                            >
                              <a>{submenuItem[lang]}</a>
                            </li>
                          ) : (
                            <Link href={submenuItem.href} key={j}>
                              <li>
                                <a>{submenuItem[lang]}</a>
                              </li>
                            </Link>
                          );
                        return node;

                        // return isOdjel(
                        //   lang,
                        //   menuItem.href,
                        //   submenuItem,
                        //   j,
                        //   setOdjel
                        // );
                      })}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
