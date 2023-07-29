import { db } from './infra'
import { PurchaseDto, PurchaseModel } from './model'
import { randomUUID } from 'crypto'

export class DataModel {
  fee: number = 1.1

  newPurchase(dto: PurchaseDto): PurchaseModel {
    try {
      const totalAmountProducts = dto.products.reduce(
        (accumulator, product) => {
          const totalCurrentProduct = product.price * product.quantity
          return accumulator + totalCurrentProduct
        },
        0
      )

      const isCreditCardPayment = dto.paymentMethod === 'CREDIT_CARD'

      const calcTotalPurchase = () => {
        if (isCreditCardPayment) {
          return totalAmountProducts * this.fee
        }

        return totalAmountProducts
      }

      const newPurchase: PurchaseModel = {
        id: randomUUID(),
        ...dto,
        total: calcTotalPurchase(),
        fee: isCreditCardPayment ? this.fee : 0,
      }

      return db.addPurchase(newPurchase)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  getPurchases(): PurchaseModel[] {
    return db.getPurchases()
  }
}
