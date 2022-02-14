//dependencies
import { useEffect, useState } from "react";
//data
import getDataFromApiCorners from "../data/getDataFromApiCorners";
//types
import type { SectionResponse } from "../types/common";
//components
import Container from "./Container";
import ContentSection from "./ContentSection";
import Header from "./Header";


function  Corners(): JSX.Element {
  const [cornersData, setCornersData] = useState<SectionResponse>();
  useEffect(() => {
    getDataFromApiCorners()
      .then((data:SectionResponse) => { 
        setCornersData(data); 
      })
  }, []);

  if(cornersData === undefined) return <p>Cargando...</p>

  return (
    <div>
      <Header />
      <Container>
        <ContentSection dataContent={cornersData} tag="corners" />
      </Container>
    </div>
  );
}

export default Corners;