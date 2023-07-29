import express, { Request, Response } from 'express'
import { PurchaseDto } from './model'
import { DataModel } from './data'
import {
  testsAndValidation,
  errorIdentification,
  functionToFunction,
  saveTime,
} from './slides'

const app = express()
app.use(express.json())
const dataModel = new DataModel()

/*

[] Respostas de erro estao vindo de forma generica
[] Ao inserir body corretamente, aplicacao retorna erro
[] A soma total do pedido esta incorreta
[] A taxa do pedido esta incorreta quando e pago com cartao de credito

*/

app.post('/purchases', (req: Request, res: Response) => {
  try {
    const { client, products, paymentMethod } = req.body as PurchaseDto

    if (client === undefined || client === '') {
      throw new Error('client is required')
    }
    if (paymentMethod === undefined || !paymentMethod) {
      throw new Error('paymentMethod is required')
    }
    if (!['CREDIT_CARD', 'CASH'].includes(paymentMethod.toUpperCase())) {
      throw new Error('paymentMethod must be CREDIT_CARD or CASH')
    }
    if (!products) {
      throw new Error('products is required')
    }
    if (!products.length) {
      throw new Error('products must have at least one product')
    }

    const result = dataModel.newPurchase({ client, products, paymentMethod })

    res.status(201).send(result)
  } catch (error: any) {
    res.status(400).send({ error: JSON.stringify(error) })
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

app.post('/slides', (req: Request, res: Response) => {
  try {
    const { toExecute, param } = req.body as { toExecute: string; param: any }

    const methods: Record<string, Function> = {
      errorIdentification,
      saveTime,
      functionToFunction,
      testsAndValidation,
    }

    const result = methods[toExecute](param)

    res.status(201).send({ result })
  } catch (error: any) {
    res.status(400).send({ error: JSON.stringify(error.message) })
  }
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
