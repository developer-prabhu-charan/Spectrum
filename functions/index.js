const { onRequest } = require("firebase-functions/v2/https");
const axios = require("axios");

const SOCIOVIA_BASE = "https://sociovia-backend-362038465411.europe-west1.run.app";

exports.sendWhatsApp = onRequest({ cors: true, region: "us-central1" }, async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        // Forward the full path and query string to the Sociovia backend
        const forwardPath = req.path || "/api/whatsapp/hooks/21";
        const secret = req.query.secret || "";

        const response = await axios.post(
            `${SOCIOVIA_BASE}${forwardPath}?secret=${secret}`,
            req.body,
            {
                headers: { "Content-Type": "application/json" },
                timeout: 15000,
            }
        );

        return res.status(response.status).json(response.data);
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: "Failed to forward request" };
        console.error("WhatsApp proxy error:", status, data);
        return res.status(status).json(data);
    }
});
