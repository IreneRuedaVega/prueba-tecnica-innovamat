//dependencies
import { Link } from "react-router-dom";
//style
import "../stylesheets/layout/header.scss";


function Header(){
  // if(resourceData === undefined) return <p>Cargando...</p>
  return (
    <header>
        <nav>
          <ul>
            <li><Link to="/">Talleres</Link></li>
            <li><Link to="/rincones">Rincones</Link></li>
          </ul>
        </nav>
      </header>
  );

}
  

export default Header;