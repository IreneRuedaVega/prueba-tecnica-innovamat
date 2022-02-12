//dependencies
import { useEffect, useState } from "react";
//data
import getDataWorkshop from "../data/getDataWorkshop";
//types
import type { SectionResponse } from "../types/common";
//components
import Container from "./Container";
import ContentSection from "./ContentSection";


function  Workshops() {
  const [workshopData, setWorkshopData] = useState<SectionResponse>();
  useEffect(() => {
    getDataWorkshop()
      .then((data) => { 
        setWorkshopData(data); 
      })
  }, []);

  if(workshopData === undefined) return <p>Cargando...</p>


  return (
    <Container>
      <ContentSection dataContent={workshopData} />
    </Container>
  );
}

export default Workshops;