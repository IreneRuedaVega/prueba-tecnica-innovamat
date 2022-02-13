//dependencies
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//data
import getDataResources from "../data/getDataResources";
//types
import type { ResourceResponseType } from "../types/common";
//components
import Video from "./Video";
import IconButton from "./IconButton";
//style
import "../stylesheets/page/detailResource.scss";
import { backButton } from "../svg/backButton";


function DetailResource(): JSX.Element{
  const { id } = useParams(); 
  const [resourceData, setResourceData] = useState<ResourceResponseType>();
  useEffect(() => {
    getDataResources(`${id}`)
      .then((data) => { 
        setResourceData(data); 
      })
  }, [id]);

  if(resourceData === undefined) return <p>Cargando...</p>
 
  const { title, type, videoId, description} = resourceData;

  return (
    <div className="resourceContainer">
      <div className="resourceContainer__resourceTitle">
        <Link to={"/"}>
          <IconButton className="resourceContainer__resourceTitle--button" icon={backButton} />
        </Link>
        <div className="resourceContainer__resourceTitle--title">{title}</div>
      </div>
      <div className="resourceContainer__resourceVideoText">
        <Video type={type} videoId={videoId} title={title} className="resourceContainer__resourceVideoText--video" />
        <p className="resourceContainer__resourceVideoText--description">{description}</p>
      </div>
    </div>
  );

}
  

export default DetailResource;