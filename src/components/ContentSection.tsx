//types
import type { ResourcesType, SectionResponse, SectionType } from "../types/common";
//components
import ContentItem from "./ContentItem";
//styles
import "../stylesheets/page/contentSection.scss";
//svg
import { eyeFavourite } from "../svg/eyeFavourite";

type Props={
  dataContent: SectionResponse
  tag: string,
}

const ContentSection: React.FC<Props> = ({
  dataContent,
  tag,
}:Props):React.ReactElement =>{

  const titleWorkshops = "Talleres";
  const titleCorners = "Rincones";

  return(
    <div>
      <div className="contentSectionHead">
        <h1 className="contentSectionHead__title">{tag === "workshops" ? titleWorkshops : titleCorners}</h1>
        <div className="contentSectionHead__showFavourites">
          <span className="contentSectionHead__showFavourites--eyeSymbol">{eyeFavourite}</span>
          <span>Ver favoritos</span>
        </div>
      </div>
      {dataContent.map((workshop: SectionType, index )=>{
        return (
          <div key={index} className="contentSectionContainer">
            <h3 className="contentSectionContainer__sectionName">
              {workshop.sectionName}
            </h3>
            <div className="contentSectionContainer__resources">
              {workshop.resources.map((item: ResourcesType, index) =>{
                return (
                  <div key={index} className="contentSectionContainer__resources--list">
                    <ContentItem {...item}/>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
} 

export default ContentSection;