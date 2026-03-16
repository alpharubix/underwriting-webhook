import { Router } from "express"
import { gstStatementsController, saveWebhookResponse } from "./controller.js"

export const bankStatementAnalyzerRouter = Router()
bankStatementAnalyzerRouter.post('/', saveWebhookResponse)

export const gstStatementsRouter=Router()
gstStatementsRouter.post('/', gstStatementsController)