import { useEffect, useState } from "react";
import getDataWorkshop from "../data/getDataWorkshop";
import type { SectionResponse } from "../types/common";


function  Workshop() {
  const [workshopData, setWorkshopData] = useState<SectionResponse>();
  useEffect(() => {
    getDataWorkshop()
      .then((data) => { 
        setWorkshopData(data); 
      })
  }, []);

  if(workshopData === undefined) return <p>Cargando...</p>
  return (
    <>
      {/* <Workshop workshopData={workshopData}  /> */}
    </>
  );
}

export default Workshop;