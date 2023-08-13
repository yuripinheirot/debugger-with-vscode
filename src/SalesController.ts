import { Request, Response } from 'express'
import SalesData from './SalesData'
import { SaleDto } from './SalesModel'

export class SalesController {
  static findAll(req: Request, res: Response) {
    try {
      const result = SalesData.findAll()

      res.status(200).send(result)
    } catch (error: any) {
      console.log(error)
      res.status(400).send({ error: error.message })
    }
  }

  static create(req: Request, res: Response) {
    try {
      const payload = req.body as SaleDto

      if (!payload.products || !payload.products.length) {
        throw new Error('Products not provided')
      }
      if (payload.client) {
        throw new Error('Client not provided')
      }

      const result = SalesData.insert(payload)

      res.status(201).send(result)
    } catch (error: any) {
      console.log(error)
      res.status(400).send({ error: error.message })
    }
  }

  static update(req: Request, res: Response) {
    try {
      const id = req.params.id
      if (!id) {
        throw new Error('Id not provided')
      }

      const payload = req.body as SaleDto

      if (!payload.products || !payload.products.length) {
        throw new Error('Products not provided')
      }
      if (!payload.client) {
        throw new Error('Client not provided')
      }

      const result = SalesData.update(id, payload)

      res.status(200).send(result)
    } catch (error: any) {
      console.log(error)
      res.status(400).send({ error: error.message })
    }
  }

  static delete(req: Request, res: Response) {
    try {
      const id = req.params.id
      if (!id) {
        throw new Error('Id not provided')
      }

      const result = SalesData.delete(id)

      res.status(200).send(result)
    } catch (error: any) {
      console.log(error)
      res.status(400).send({ error: error.message })
    }
  }
}
