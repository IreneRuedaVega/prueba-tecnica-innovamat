import { useEffect, useState } from "react";
import getDataWorkshop from "../data/getDataWorkshop";
//types
import type { ResourcesType, SectionResponse, SectionType } from "../types/common";
//components
import Container from "./Container";
import ContentItem from "./ContentItem";

import "../stylesheets/page/workshops.scss";



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
      <div className="workshopsHead">
        <h1 className="workshopsHead__title">Talleres</h1>
        <div className="workshopsHead__showFavourites">Ver favoritos</div>
      </div>
      <div>
       {workshopData.map((workshop: SectionType, index )=>{
         return (
          <div key={index} className="workshopsContainer">
            <h3 className="workshopsContainer__sectionName">
              {workshop.sectionName}
            </h3>
            <div className="workshopsContainer__resources">
              {workshop.resources.map((item: ResourcesType, index) =>{
                return (
                  <div key={index} className="workshopsContainer__resources--list">
                    <ContentItem {...item}/>
                  </div>
                )
              })}
            </div>
          </div>
         )
       })}
      </div>
    </Container>
  );
}

export default Workshops;