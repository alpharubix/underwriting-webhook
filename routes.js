import { Router } from "express"
import { saveWebhookResponse } from "./controller.js"

export const bankStatementAnalyzerRouter = Router()
bankStatementAnalyzerRouter.post('/', saveWebhookResponse)
