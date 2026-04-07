// api/proxy_history.js
export default async function handler(req, res) {
  const { device_id } = req.query;

  if (!device_id) {
    return res.status(400).json({ error: "device_id is required" });
  }

  try {
    const response = await fetch(
      `https://flummoxedly-summerly-tenisha.ngrok-free.dev/history?device_id=${device_id}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch from backend" });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
