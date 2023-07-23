import { PurchaseModel } from './model'

class MyDatabase {
  private purchases: PurchaseModel[] = []

  addPurchase(purchase: PurchaseModel) {
    this.purchases.push(purchase)
    return purchase
  }

  getPurchases() {
    return this.purchases
  }
}

export const db = new MyDatabase()
