//dependencies
import { useState } from "react";
//types
import type { ResourcesType, SectionResponse, SectionType } from "../types/common";
//components
import ContentItem from "./ContentItem";
import IconButton from "./IconButton";
//styles
import "../stylesheets/page/contentSection.scss";
import { eyeFavourite } from "../svg/eyeFavourite";

type Props={
  dataContent: SectionResponse,
  tag: string,
}

const ContentSection: React.FC<Props> = ({
  dataContent,
  tag,
}:Props):React.ReactElement =>{
  //literals
  const titleWorkshops = "Talleres";
  const titleCorners = "Rincones";
  const howFavouritesLabel = "Ver favoritos";
  const sortLabel = "Orden A-Z"

  const [favourites, setFavourites] = useState<(ResourcesType)[]>([]);
  // const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const addFavourite = (item: ResourcesType) =>{
    const newFavouriteList = [...favourites, item];
		setFavourites(newFavouriteList);
    // setIsFavourite(true);
  }


  // const removeFavourite = (item: ResourcesType) => {
	// 	const newFavouriteList = favourites.filter(
	// 		(favourite) => {
  //       return favourite.id !== item.id
  //     }
	// 	);
	// 	setFavourites(newFavouriteList);
  //   setIsFavourite(false);
	// };

  console.log(favourites);

  return(
    <div>
      <div className="contentSectionHead">
        <h1 className="contentSectionHead__title">{tag === "workshops" ? titleWorkshops : titleCorners}</h1>
        <IconButton 
          icon={eyeFavourite} 
          label={howFavouritesLabel} 
          className="contentSectionHead__showFavourites" 
          classNameLabel="contentSectionHead__showFavourites--eyeSymbol"
          // onClick={() => showFavourites()}
        />
      </div>
      {dataContent.map((workshop: SectionType, index )=>{
        return (
          <div key={index} className="contentSectionContainer">
            <div className="contentSectionContainer__header">
              <h3 className="contentSectionContainer__header--sectionName">
                {workshop.sectionName}
              </h3>
              <button type="button" onClick={() => console.log("irene")} className="contentSectionContainer__header--sortLabel">
                {sortLabel}
              </button>
            </div>
            <div className="contentSectionContainer__resources">
              {workshop.resources.map((item: ResourcesType, index) =>{                            
                return (
                  <div key={index} className="contentSectionContainer__resources--list">
                    <ContentItem 
                      {...item}
                      handleAddFavourite={() => addFavourite(item)}
                      // handleRemoveFavourite={() => removeFavourite(item)}
                      // isFavourite={isFavourite}
                    />
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