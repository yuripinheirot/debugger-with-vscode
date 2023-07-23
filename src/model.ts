type PurchaseProductModel = {
  id: number
  name: string
  price: number
}

export type PurchaseModel = {
  id: string
  client: string
  status: 'DONE' | 'OPEN'
  products: PurchaseProductModel[]
  total: number
}

export type PurchaseDto = Omit<PurchaseModel, 'id' | 'total'>
