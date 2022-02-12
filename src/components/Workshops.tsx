//dependencies
import { useEffect, useState } from "react";
//data
import getDataWorkshop from "../data/getDataWorkshop";
//types
import type { ResourcesType, SectionResponse, SectionType } from "../types/common";
//components
import Container from "./Container";
import ContentItem from "./ContentItem";
//styles
import "../stylesheets/page/workshops.scss";
//svg
import { eyeFavourite } from "../svg/eyeFavourite";

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
        <div className="workshopsHead__showFavourites">
          <span className="workshopsHead__showFavourites--eyeSymbol">{eyeFavourite}</span>
          <span>Ver favoritos</span>
        </div>
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