// Demand counter for not-yet-built alert channels. Logs one line per click; stores nothing personal.
export default function handler(req, res) {
  const ch = String((req.query && req.query.ch) || '').toLowerCase();
  if (ch === 'email' || ch === 'text') console.log(JSON.stringify({ want: ch, t: new Date().toISOString() }));
  res.setHeader('Cache-Control', 'no-store');
  res.status(204).end();
}
