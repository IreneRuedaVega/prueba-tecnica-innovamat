//dependencies
import { useEffect, useState } from "react";
//data
import getDataFromApiCorners from "../data/getDataFromApiCorners";
//types
import type { SectionResponse } from "../types/common";
//components
import Container from "./Container";
import ContentSection from "./ContentSection";



function  Workshops() {
  const [cornersData, setCornersData] = useState<SectionResponse>();
  useEffect(() => {
    getDataFromApiCorners()
      .then((data) => { 
        setCornersData(data); 
      })
  }, []);

  if(cornersData === undefined) return <p>Cargando...</p>


  return (
    <Container>
      <ContentSection dataContent={cornersData} tag="corners" />
    </Container>
  );
}

export default Workshops;