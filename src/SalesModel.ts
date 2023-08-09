export type ProductModel = {
  description: string
  quantity: number
  price: number
}

export type SaleModel = {
  id: string
  client: string
  total: number
  products: ProductModel[]
}

export type SaleDto = Omit<SaleModel, 'id' | 'total'>
