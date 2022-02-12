//dependencies
import React, { useEffect, useState } from "react";
//data
import getDataResources from "../data/getDataResources";
//types
import type { ResourceResponseType } from "../types/common";
//components
import Video from "./Video";
//style
import "../stylesheets/page/detailResources.scss";
import { backButton } from "../svg/backButton";

type Props = {
  id: string,
}

const DetailResource: React.FC<Props> =({
  id,
}): React.ReactElement =>{
  const [resourceData, setResourceData] = useState<ResourceResponseType>();
  useEffect(() => {
    getDataResources(id)
      .then((data) => { 
        setResourceData(data); 
      })
  }, [id]);

  if(resourceData === undefined) return <p>Cargando...</p>
  
  const { title, type, videoId, description} = resourceData;
  return (
    <div className="resourceContainer">
      <div className="resourceContainer__resourceTitle">
        <span className="resourceContainer__resourceTitle--button">{backButton}</span>
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