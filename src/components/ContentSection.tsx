//types
import type { ResourcesType, SectionResponse, SectionType } from "../types/common";
//components
import ContentItem from "./ContentItem";
//svg
import { eyeFavourite } from "../svg/eyeFavourite";
//styles
import "../stylesheets/page/contentSection.scss";

type Props={
  dataContent: SectionResponse
}

const ContentSection: React.FC<Props> = ({
  dataContent,
}:Props):React.ReactElement =>{
  return(
    <>
      <div className="contentSectionHead">
          <h1 className="contentSection__title">Talleres</h1>
          <div className="contentSection__showFavourites">
            <span className="contentSection__showFavourites--eyeSymbol">{eyeFavourite}</span>
            <span>Ver favoritos</span>
          </div>
        </div>
        <div>
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
    </>
  )
} 

export default ContentSection;