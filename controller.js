import { BankStatement } from "./models.js";

export async function saveWebhookResponse(req, res) {
  let response_body = req.body;
  if (response_body) {
    console.log(response_body)
    BankStatement.create(response_body)
    return res.json(response_body)
  }
}
