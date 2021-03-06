import type { SectionResponse } from "../types/common";


const getDataFromApiCorners = (): Promise<SectionResponse> => {
  return fetch(
    "https://api.mocklets.com/mock68016/rincones"
  )
    .then((response) => response.json())
    .then((data: SectionResponse ) => {      
      return data;
    });
};

export default getDataFromApiCorners;