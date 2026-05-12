import "dotenv/config"

const PORT = process.env.PORT || 8080
import cors from 'cors'
import express from 'express'
import { connectDB } from './connectDB.js'
import { bankStatementAnalyzerRouter, gstStatementsRouter } from './routes.js'

const app = express()
app.use(express.json())
app.use(cors({
  origin: "*"
}))


app.use("/webhook/bank-statement", bankStatementAnalyzerRouter)
app.use("/webhook/gst-statements",gstStatementsRouter)
app.get("/", (req, res) => {
  return res.json({ success: true })
})

connectDB().then(() => {
  app.listen(PORT, () => {
    
    console.log(`Server is running on ${PORT} Port`)
  })
})
