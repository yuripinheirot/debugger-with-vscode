import express from 'express'
import { SalesController } from './SalesController'

const app = express()
const port = process.env.PORT || 3003

app.use(express.json())

app.get('/', SalesController.findAll)
app.post('/', SalesController.create)
app.put('/:id', SalesController.update)
app.delete('/:id', SalesController.delete)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
