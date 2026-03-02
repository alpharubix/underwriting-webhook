import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const PORT = process.env.PORT
import cors from 'cors'
import express from 'express'
import { connectDB } from './connectDB.js'
import { bankStatementAnalyzerRouter } from './routes.js'

const app = express()
app.use(express.json())
app.use(cors({
  origin: "*"
}))

app.use("/webhook/bank-statement", bankStatementAnalyzerRouter)
app.get("/", (req, res) => {
  return res.json({ success: true })
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running")
  })
})
