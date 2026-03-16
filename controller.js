import { BankStatement, GstStatements } from "./models.js";

export async function saveWebhookResponse(req, res) {
  let response_body = req.body;
  if (response_body) {
    console.log(response_body)
    BankStatement.create(response_body)
    return res.json(response_body)
  }
}

export async function gstStatementsController(req, res) {
  let response_body = req.body;
  if (response_body) {
    const result = await GstStatements.create(response_body)
    return res.json(response_body)
  }
}
