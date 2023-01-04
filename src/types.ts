export interface IProduct {
  id: number,
  name: string,
  brand: string,
  category: string,
  price: number,
  stock: number,
  color: string,
  size: number,
  season: string,
  use: string,
  dopImg: number[],
  description: string,
}

export interface IFilters {
  brands: string [],
  colors: string [],
  category:string [],
  minStock: number,
  maxStock: number,
  minPrice: number,
  maxPrice: number,
  sort: string,
}

export interface ICartProduct {
  [id: number]: number
}
