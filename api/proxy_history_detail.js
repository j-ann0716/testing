export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "id is required" });
  }

  try {
    const response = await fetch(
      `https://flummoxedly-summerly-tenisha.ngrok-free.dev/history_detail?id=${id}`
    );

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Failed to fetch history detail"
      });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
