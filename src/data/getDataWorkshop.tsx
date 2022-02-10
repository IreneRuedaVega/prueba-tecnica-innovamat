import type { ResourcesType } from "../types/common";

interface Workshop{
  sectionName: string,
  resources: Array<ResourcesType>
}

const getDataFromApiWorkshop = ():Promise<Workshop> => {
  return fetch(
    "https://api.mocklets.com/mock68016/talleres"
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getDataFromApiWorkshop;



