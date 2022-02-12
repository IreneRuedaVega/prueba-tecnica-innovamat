import "../stylesheets/components/contentItem.scss";
//types
import type { ImageType } from "../types/common";

type Props= ImageType & {
  className?: string,
}

const SimpleImage: React.FC<Props> = ({
  src,
  alt,
  className,
}:Props):React.ReactElement =>{
  return(
   <img src={src} alt={alt}  className={className} />
  )
} 

export default SimpleImage;