import mongoose from 'mongoose'

const bankStateWebhookSchema = new mongoose.Schema(
  {}, { timestamps: true, strict: false }
)

export const BankStatement = mongoose.model("bankstatement", bankStateWebhookSchema)

const gstStatementsSchema=new mongoose.Schema(
  {},{timestamps:true,strict:false}
)

export const GstStatements=mongoose.model("gststatements", gstStatementsSchema)