import React, { useEffect, useState } from "react";
import getDataResources from "../data/getDataResources";
import type { ResourceResponseType } from "../types/common";

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
  }, []);

  console.log("data", resourceData)


  if(resourceData === undefined) return <p>Cargando...</p>
  return (
    <div>
      {resourceData.title}
    </div>
  );

}
  

export default DetailResource;