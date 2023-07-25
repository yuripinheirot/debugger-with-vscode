type PurchaseProductModel = {
  description: string
  price: number
  quantity: number
}

export type PurchaseModel = {
  id: string
  client: string
  paymentMethod: 'CREDIT_CARD' | 'CASH'
  products: PurchaseProductModel[]
  fee: number
  total: number
}

export type PurchaseDto = Omit<PurchaseModel, 'id' | 'total' | 'fee'>
