//components
import SimpleImage from "./SimpleImage";
//styles
import "../stylesheets/components/contentItem.scss";
//svg
import { heartLike } from "../svg/heartLike";
import { heart } from "../svg/heart";

type Props={
  id?: string;
  title: string;
  tag?: string;
  description: string;
  image: string;
}

const ContentItem: React.FC<Props> = ({
  id,
  title,
  tag,
  description,
  image,
}:Props):React.ReactElement =>{
  return(
    <div className="contentContainer">
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
      <div className="contentContainer__favourite">
        <span className="heartLike">{heartLike}</span>
        <span>Favorito</span>
      </div>
    </div>
  )
} 

export default ContentItem;