import express, { Request, Response } from 'express'
import { SaleDto } from './SalesModel'
import SalesData from './SalesData'

const app = express()
app.use(express.json())
const port = process.env.PORT || 3003

app.get('/', (req: Request, res: Response) => {
  try {
    const result = SalesData.findAll()

    res.status(200).send(result)
  } catch (error: any) {
    console.log(error)
    res.status(400).send({ error: error.message })
  }
})

app.post('/', (req: Request, res: Response) => {
  try {
    const payload = req.body as SaleDto

    if (!payload.products.length) {
      throw new Error('Products not provided')
    }
    if (!payload.client) {
      throw new Error('Client not provided')
    }

    const result = SalesData.insert(payload)

    res.status(201).send(result)
  } catch (error: any) {
    console.log(error)
    res.status(400).send({ error: error.message })
  }
})

app.put('/:id', (req: Request, res: Response) => {
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
})

app.delete('/:id', (req: Request, res: Response) => {
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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
