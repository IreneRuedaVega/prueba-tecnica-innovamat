import { useEffect, useState } from "react";
import type { WorkshopType } from "../types/common";
import getDataWorkshop from "../data/getDataWorkshop";
import "../stylesheets/layout/index.scss";

function MainPage() {
  const [workshopData, setWorkshopData] = useState<WorkshopType>()
  useEffect(() => {
    getDataWorkshop()
      .then((data) => {        
        setWorkshopData(data);
      })
  }, []);

  return (
    <h1 className="hola">Hola mundo</h1>
  );
}

export default MainPage;
