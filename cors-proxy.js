const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 19121;

app.use(cors());

app.get('/hnrss', async (req, res) => {
  try {
    const response = await fetch('https://hnrss.org/frontpage');
    const data = await response.text();
    res.set('Content-Type', 'application/rss+xml');
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching feed');
  }
});

app.listen(PORT, () => {
  console.log(`CORS proxy running at http://localhost:${PORT}/hnrss`);
});

