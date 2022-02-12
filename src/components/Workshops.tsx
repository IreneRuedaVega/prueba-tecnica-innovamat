//dependencies
import { useEffect, useState } from "react";
//data
import getDataFromApiWorkshop from "../data/getDataFromApiWorkshop";
//types
import type { SectionResponse } from "../types/common";
//components
import Container from "./Container";
import ContentSection from "./ContentSection";

function  Workshops() {
  const [workshopData, setWorkshopData] = useState<SectionResponse>();
  useEffect(() => {
    getDataFromApiWorkshop()
      .then((data) => { 
        setWorkshopData(data); 
      })
  }, []);

  if(workshopData === undefined) return <p>Cargando...</p>


  return (
    <Container>
      <ContentSection dataContent={workshopData} tag="workshops" />
    </Container>
  );
}

export default Workshops;