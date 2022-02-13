import type { SectionResponse } from "../types/common";


const getDataFromApiWorkshop = (): Promise<SectionResponse> => {
  return fetch(
    "https://api.mocklets.com/mock68016/talleres"
  )
    .then((response) => response.json())
    .then((data: SectionResponse ) => {      
      return data;
    });
};

export default getDataFromApiWorkshop;



