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

  insert(payload: SaleDto) {
    const sale: SaleModel = {
      ...payload,
      id: randomUUID(),
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

    return SalesRepository.update(id, payload)
  }
}

export default new SalesData()
