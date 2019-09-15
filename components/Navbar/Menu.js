// import { withRouter } from 'next/router';
import Language from "./Language";
import ActiveLink from "./Link";

// const Menu = ({ router, ...props }) => {
const Menu = props => {
  const { shrink, content: menu, onChangeLanguage, onTest, onSetOdjel } = props;

  const setLanguage = value => onChangeLanguage(value);
  const setOdjel = (path, index) => onSetOdjel(path, index);

  let i = 1;
  return (
    <nav className="w3-card-4">
      <div
        id="navbar"
        className={`container navbar f-xl-18 ${shrink ? `navbar-shrink` : ``}`}
      >
        <Language
          language={props.language}
          onChangeLanguage={setLanguage}
          onTest={onTest}
        />

        <div className="logo">
          <img src="/static/img/logo.png" alt="MGP logo" />
        </div>

        <div className="hamburger hamburger--collapse">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>

        <div className="menu-lists">
          {menu.map((menuItem, i) => {
            return (
              <div className="menu-items" key={i}>
                <ActiveLink activeClassName="active" href={menuItem.href}>
                  <a>{menuItem.title}</a>
                </ActiveLink>
                {menuItem.hasSubmenu && (
                  <>
                    <div className="dropdown"></div>
                    {/* <div className="submenu-lists submenu--1-list"> */}
                    <div className={`submenu-lists submenu--${i++}-list`}>
                      {menuItem.submenu.map((submenuItem, j) => {
                        return (
                          <div
                            className="nav_submenu-items"
                            key={j}
                            onClick={() => setOdjel(menuItem.href, j)}
                          >
                            {submenuItem.title}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
