//components
import NavLink from "./NavLink";
import MenuMobile from "./MenuMobile";
//style
import "../stylesheets/layout/header.scss";


function Header(): JSX.Element{

  const titleMenuWorkshops = "Talleres";
  const titleMenuCorners = "Rincones";
  return (
    <>
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--menu menuDesktop">
          <li className="menuDesktop__item">
            <NavLink 
              to="/" 
              className={({ isActive }) =>{
              return isActive ? "menuDesktop__item--activeLink" : "menuDesktop__item--noActiveLink"
            }}>
              Talleres
            </NavLink> 
          </li>
          <li className="menuDesktop__item">
            <NavLink to="/rincones" className="menuDesktop__item--link">
              Rincones    
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <MenuMobile 
      titleMenuWorkshops={titleMenuWorkshops} 
      titleMenuCorners={titleMenuCorners}
    />
    </>
  );
}
  

export default Header;