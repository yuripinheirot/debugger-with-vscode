import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())
const port = process.env.PORT || 3003

app.get('/', (req: Request, res: Response) => {
  try {
    res.status(201).send({ message: 'Hello World!' })
  } catch (error: any) {
    res.status(400).send({ error: JSON.stringify(error) })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
