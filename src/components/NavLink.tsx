//dependencies
import { NavLink as NavLinkRouter } from "react-router-dom";

type Props = {
  to: string,
  children: string,
  className: string | ((props: {
    isActive: boolean;
}) => string) | undefined
}

const NavLink = ({ to, children, ...props }: Props) =>{
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

export default NavLink;