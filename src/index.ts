import express, { Request, Response } from 'express'
import { PurchaseDto } from './model'
import { DataModel } from './data'

const app = express()
const dataModel = new DataModel()

/*

[] Respostas de erro estao vindo de forma generica
[] Aplicacao nao esta recebendo body
[] Ao inserir body corretamente, aplicacao retorna erro
[] A soma total do pedido esta incorreta

*/

app.post('/purchases', (req: Request, res: Response) => {
  try {
    const { client, products, status } = req.body as PurchaseDto

    if (client !== undefined || client !== '') {
      throw new Error('client is required')
    }
    if (status !== undefined || !status) {
      throw new Error('status is required')
    }
    if (!['DONE', 'OPEN'].includes(status)) {
      throw new Error('status must be DONE or OPEN')
    }
    if (!products) {
      throw new Error('products is required')
    }
    if (!products.length) {
      throw new Error('products must have at least one product')
    }

    const result = dataModel.newPurchase({ client, products, status })

    res.status(201).send(result)
  } catch (error: any) {
    res.status(400).send({ error: JSON.stringify(error.message) })
  }
})

app.get('/purchases', (req: Request, res: Response) => {
  try {
    const result = dataModel.getPurchases()
    res.status(201).send(result)
  } catch (error: any) {
    res.status(400).send({ error: JSON.stringify(error.message) })
  }
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
