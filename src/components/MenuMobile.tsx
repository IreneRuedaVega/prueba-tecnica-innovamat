//components
import { NavLink } from "react-router-dom";
//style
import "../stylesheets/layout/menuMobile.scss";
//svg
import { workshopsMenuMobile } from "../svg/workshopsMenuMobile";
import { cornersMenuMobile } from "../svg/cornersMenuMobile";


type Props ={
  titleMenuWorkshops: string,
  titleMenuCorners: string,
}

const MenuMobile: React.FC<Props> = ({
  titleMenuWorkshops,
  titleMenuCorners,
}:Props):React.ReactElement =>{
  return (
    <header className="headerMobile">
      <nav className="headerMobile__nav">
        <ul className="headerMobile__nav--menu menuMobile">
          <li className="menuMobile__item">
            <NavLink 
              to="/" 
              className={({ isActive }) =>{
              return isActive ? "menuMobile__item--activeLink" : "menuMobile__item--noActiveLink"
              }}
            >
              <span>{workshopsMenuMobile}</span>
              <span>{titleMenuWorkshops}</span>
            </NavLink> 
          </li>
          <li className="menuMobile__item">
            <NavLink 
              to="/rincones" 
              className={({ isActive }) =>{
                return isActive ? "menuMobile__item--activeLink" : "menuMobile__item--noActiveLink"
              }}
            >
              <span>{cornersMenuMobile}</span>
              <span>{titleMenuCorners} </span>  
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
  

export default MenuMobile;