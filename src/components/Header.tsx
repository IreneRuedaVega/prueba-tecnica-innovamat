//dependencies
import { NavLink as NavLinkRouter } from "react-router-dom";
//style
import "../stylesheets/layout/header.scss";

type NavLinkProps= {
  to: string,
  children: string,
  className: string | ((props: {
    isActive: boolean;
}) => string) | undefined
}


const NavLink = ({ to, children, ...props }: NavLinkProps) =>{
  return (
    <NavLinkRouter
      {...props} 
      to={to}
      className={({ isActive }) =>{
      return isActive ? "menuDesktop__item--activeLink" : "menuDesktop__item--noActiveLink"
    }}>
      {children}
    </NavLinkRouter>
  )
}

function Header(): JSX.Element{
  return (
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
            <NavLink to="/rincones" className="menuDesktop__item--link">Rincones</NavLink>
          </li>
        </ul>
      </nav>
      </header>
  );

}
  

export default Header;