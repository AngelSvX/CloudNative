export interface Locate{
  name: string
}

export interface Character{
  id: number,
  name: string,
  status: string,
  species: string,
  gender: string,
  image: string,
  location: Locate
}