import { GstStatements } from "./models.js";
export async function saveWebhookResponse(req, res) {
  let response_body = req.body;
  if (response_body) {
    const bankstatementStatementWebhookConsumerUrl =
  "https://underwritting-tool-backend-972437264901.us-east1.run.app/v1/bsa/webhook-response-handler";
    await fetch(bankstatementStatementWebhookConsumerUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(response_body),
});
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
