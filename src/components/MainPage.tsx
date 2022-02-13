import "../stylesheets/layout/index.scss";
import { Route, Routes } from "react-router-dom";

//components
import DetailResource from "./DetailResource";
import Corners from "./Corners";
import Workshops from "./Workshops";


function MainPage() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Workshops />} />
        <Route path='/rincones' element={<Corners />} />
        <Route path='/recursos/:id' element={<DetailResource />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default MainPage;
