import { db } from './infra'
import { PurchaseDto, PurchaseModel } from './model'
import { randomUUID } from 'crypto'

export class DataModel {
  newPurchase(dto: PurchaseDto): PurchaseModel {
    const total = dto.products.reduce((total, product) => {
      const result = total + product.price
      return result
    }, 0)

    const newPurchase: PurchaseModel = {
      id: randomUUID(),
      total,
      ...dto,
    }

    return db.addPurchase(newPurchase)
  }

  getPurchases(): PurchaseModel[] {
    return db.getPurchases()
  }
}
