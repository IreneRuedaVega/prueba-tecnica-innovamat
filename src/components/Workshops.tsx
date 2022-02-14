//dependencies
import { useEffect, useState } from "react";
//data
import getDataFromApiWorkshops from "../data/getDataFromApiWorkshops";
//types
import type { SectionResponse } from "../types/common";
//components
import Container from "./Container";
import ContentSection from "./ContentSection";
import Header from "./Header";
import Loading from "./Loading";


function  Workshops(): JSX.Element {
  const [workshopData, setWorkshopData] = useState<SectionResponse>([]);
  useEffect(() => {
    getDataFromApiWorkshops()
      .then((data: SectionResponse) => {
        setWorkshopData(data); 
      })
  }, []);

  if(workshopData === undefined) return <Loading />

  return (
    <div>
      <Header />
      <Container>
        <ContentSection dataContent={workshopData} tag="workshops" />
      </Container>
    </div>
  );
}

export default Workshops;