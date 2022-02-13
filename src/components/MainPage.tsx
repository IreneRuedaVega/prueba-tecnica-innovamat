import "../stylesheets/layout/index.scss";
import { Route, Routes } from "react-router-dom";

//components
import DetailResource from "./DetailResource";
import Corners from "./Corners";
import Workshops from "./Workshops";
import Header from "./Header";


function MainPage() {
  return (
    <div>
      {/* <header>
        <nav>
          <ul>
            <li><Link to="/">Talleres</Link></li>
            <li><Link to="/rincones">Rincones</Link></li>
          </ul>
        </nav>
      </header> */}
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Workshops />} />
          <Route path='/rincones' element={<Corners />} />
          <Route path='/recursos/:id' element={<DetailResource />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default MainPage;
