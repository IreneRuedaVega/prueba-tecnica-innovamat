//dependencies
import { useState } from "react";
import { Link } from "react-router-dom";
//components
import SimpleImage from "./SimpleImage";
import IconButton from "./IconButton";
//styles
import "../stylesheets/components/contentItem.scss";
//svg
import { heartLike } from "../svg/heartLike";
import { heart } from "../svg/heart";

type Props={
  id?: string,
  title: string,
  tag?: string,
  description: string,
  image: string,
  handleAddFavourite: () => void,
  // handleRemoveFavourite: () => void,
  // isFavourite: boolean,
}

const ContentItem: React.FC<Props> = ({
  id,
  title,
  tag,
  description,
  image,
  handleAddFavourite,
  // handleRemoveFavourite,
  // isFavourite
}:Props):React.ReactElement =>{
  const ctaLabel = "Favorito";
  const [showFavBtn, setShowFavBtn] = useState<boolean>(false);
 

  return(
    <div 
      onMouseEnter={() => setShowFavBtn(true)}
      onMouseLeave={() => setShowFavBtn(false)}
      className={`${showFavBtn ? "contentContainerHover" : "contentContainer"}`}
    >
      <Link to={`/recursos/${id}`} className="link">
        <div className="contentContainer__content"> 
          <div className="contentContainer__content--imageContainer imageWrapper">
            <SimpleImage src={image} alt={title} className="imageWrapper__img"/>
          </div>
          <div className="contentContainer____content--textContainer textContainer">
            <h4 className="textContainer__title">
              {title}
            </h4>
            <p className="textContainer__description">
              {description}
            </p>
          </div>
        </div>
      </Link>
      {showFavBtn &&
        <IconButton 
          icon={heart} 
          label={ctaLabel} 
          className="contentContainer__favourite" 
          classNameLabel="contentContainer__favourite--ctaLabel"
          onClick={handleAddFavourite}    
        />
      } 
     
      {/* {isFavourite ? ( */}
        {/* <IconButton 
          icon={heartLike} 
          label={ctaLabel} 
          className="contentContainer__favourite" 
          classNameLabel="contentContainer__favourite--ctaLabel" 
          onClick={handleRemoveFavourite}  
         />  */}
      {/* ) : ( */}
   
      {/* )} */}
    </div>
  )
} 

export default ContentItem;