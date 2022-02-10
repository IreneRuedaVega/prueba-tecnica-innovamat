export type WorkshopType ={
 sectionName: string,
 resources: Array<ResourcesType>
}

export type ResourcesType ={
  id: string,
  title: string,
  tag: string,
  description: string,
  image: string,
}