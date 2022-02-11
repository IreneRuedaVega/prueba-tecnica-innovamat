import type { ResourceResponseType } from "../types/common";


const getDataResources = (id: string) => {
  return fetch(
    `https://api.mocklets.com/mock68016/resource/${id}`
  )
    .then((response) => response.json())
    .then((data: ResourceResponseType ) => {      
      return data;
    });
};

export default getDataResources ;