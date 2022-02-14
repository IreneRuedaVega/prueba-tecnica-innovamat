
export type SectionResponse = SectionType[];

export type ResourceResponseType ={
  title: string,
  description: string,
  type: string,
  videoId: string,
}

export type SectionType ={
  sectionName: string,
  resources: Array<ResourcesType>,
 }
 
export type ResourcesType ={
  id: string,
  title: string,
  tag: string,
  description: string,
  image: string,
}

export type ImageType={
  src: string,
  alt: string,
}