//dependencies
import { useState, useEffect } from "react";
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
  const seeAll = "Ver todos"

  const [favourites, setFavourites] = useState<(ResourcesType)[]>([]);
  const [showFavouritesResources, setShowFavouritesResources] = useState<boolean>(false);

  const saveToLocalStorage = (item:ResourcesType[]) => {
		localStorage.setItem("favourites-resources", JSON.stringify(item));
	};

  useEffect(() => {
    const storeFavourites = localStorage.getItem("favourites-resources");
    if (storeFavourites){
      const resourcesFavourites = JSON.parse(storeFavourites);
    	setFavourites(resourcesFavourites);
    }
	}, []);


  const addFavourite = (item: ResourcesType) =>{
    const newFavouriteList = [...favourites, item];
    newFavouriteList.find(favouriteItem =>{
      return favouriteItem.description === item.description && favouriteItem.id === item.id && favouriteItem.tag === item.tag && favouriteItem.image === item.image && favouriteItem.title === item.title;
    })
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFavourite = (item: ResourcesType) => {    
		const newFavouriteList = favourites.filter(
			(favourite) => {
        return favourite.description !== item.description && favourite.id !== item.id && favourite.tag !== item.tag && favourite.image !== item.image && favourite.title !== item.title;
      }
		);
		setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
	};
  
  console.log(favourites);

  const showFavourites = ():void =>{
    setShowFavouritesResources(true);
  }

  const showAll = ():void =>{
    setShowFavouritesResources(false);
  }

  return(
    <div>
      <div className="contentSectionHead">
        <h1 className="contentSectionHead__title">{tag === "workshops" ? titleWorkshops : titleCorners}</h1>
        {!showFavouritesResources ? <IconButton 
          icon={eyeFavourite} 
          label={howFavouritesLabel} 
          className="contentSectionHead__showFavourites" 
          classNameLabel="contentSectionHead__showFavourites--eyeSymbol"
          onClick={() => showFavourites()}
        /> : (
          <button type="button" className="contentSectionHead__showAll" onClick={() => showAll()}>{seeAll}</button>
        )}
      </div>
      {!showFavouritesResources ? (
        <div>
          {dataContent.map((workshop: SectionType, index )=>{
            return (
              <div key={index} className="contentSectionContainer">
                <div className="contentSectionContainer__header">
                  <h3 className="contentSectionContainer__header--sectionName">
                    {workshop.sectionName}
                  </h3>
                  <button type="button" onClick={() => console.log("sort")} className="contentSectionContainer__header--sortLabel">
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
                          handleRemoveFavourite={() => removeFavourite(item)}
                          isFavourite={favourites.some(fav => fav.id === item.id && fav.title === item.title && fav.image === item.image && fav.description === item.description && item.tag === fav.tag)}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
          )})}
        </div>
      ) : (
        <div className="favouritesResources">
          {favourites.map((item: ResourcesType, index) =>{                            
            return (
              <div key={index}>
                <ContentItem 
                  {...item}
                  isFavourite={favourites.some(fav => fav.id === item.id && fav.title === item.title && fav.image === item.image && fav.description === item.description && item.tag === fav.tag)}
                />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
} 

export default ContentSection;