import "../stylesheets/components/contentItem.scss";
//components
import SimpleImage from "./SimpleImage";

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
      <div className="contentContainer__imageContainer">
        <SimpleImage src={image} alt={title} className="contentContainer__imageContainer--img"/>
      </div>
      <h4 className="contentContainer__title">
        {title}
      </h4>
      <p className="contentContainer__description">
        {description}
      </p>
    </div>
  )
} 

export default ContentItem;