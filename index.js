import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('May the Force be with you.');
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

