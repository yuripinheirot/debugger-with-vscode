import { SaleDto, SaleModel } from './SalesModel'

class SalesRepository {
  private sales: SaleModel[] = [
    {
      id: '1f43efe3-b450-4ce0-8d1e-ec8cf91d318e',
      client: 'Marilyn Manson',
      products: [
        {
          description: 'Knife',
          quantity: 1,
          price: 200,
        },
      ],
      total: 200,
    },
    {
      id: 'e065f966-2530-4002-8339-8b3bd6dfc456',
      client: 'Zakk Wylde',
      products: [
        {
          description: 'Guitar Gibson',
          quantity: 1,
          price: 2000,
        },
        {
          description: 'Elixir strings 0.16',
          quantity: 2,
          price: 20,
        },
      ],
      total: 2040,
    },
    {
      id: 'cd8b522f-4e34-4c4a-ab3b-ae405c98222e',
      client: 'Amy Wine House',
      products: [
        {
          description: 'Wine',
          quantity: 3,
          price: 40,
        },
      ],
      total: 120,
    },
  ]

  findAll() {
    return this.sales
  }

  findById(id: string) {
    return this.sales.find((sale) => sale.id === id)
  }

  insert(data: SaleModel) {
    this.sales.push(data)
    return data
  }

  delete(id: string) {
    this.sales = this.sales.filter((sale) => sale.id !== id)
    return this.sales
  }

  update(id: string, data: SaleDto) {
    const index = this.sales.findIndex((sale) => sale.id === id)

    this.sales[index] = {
      ...this.sales[index],
      ...data,
    }

    return this.sales[index]
  }
}

export default new SalesRepository()
