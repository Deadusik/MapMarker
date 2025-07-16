import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
        return res.status(400).json({ error: 'Missing or invalid query parameter: q' });
    }

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json`, {
            headers: { 'User-Agent': 'MyApp/1.0 (my@email.com)' }
        });
        const data = await response.json();

        res.setHeader('Access-Control-Allow-Origin', '*');  // Додаємо CORS заголовок
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}