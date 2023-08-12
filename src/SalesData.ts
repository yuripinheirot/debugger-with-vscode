import { SaleDto, SaleModel } from './SalesModel'
import SalesRepository from './SalesRepository'
import { randomUUID } from 'crypto'

class SalesData {
  findAll() {
    return SalesRepository.findAll()
  }

  findById(id: string) {
    return SalesRepository.findById(id)
  }

  private calculateTotalOrderValue(payload: SaleDto) {
    let totalProducts: number = 0

    for (let product of payload.products) {
      totalProducts += product.price * product.quantity
    }

    return totalProducts
  }

  insert(payload: SaleDto) {
    const totalProducts = this.calculateTotalOrderValue(payload)

    const sale: SaleModel = {
      ...payload,
      id: randomUUID(),
      total: totalProducts,
    }

    return SalesRepository.insert(sale)
  }

  delete(id: string) {
    const sale = SalesRepository.findById(id)

    if (!sale) {
      throw new Error('Sale not found!')
    }

    return SalesRepository.delete(id)
  }

  update(id: string, payload: SaleDto) {
    const sale = SalesRepository.findById(id)

    if (!sale) {
      throw new Error('Sale not found!')
    }

    sale.total = this.calculateTotalOrderValue(payload)

    return SalesRepository.update(id, payload)
  }
}

export default new SalesData()
