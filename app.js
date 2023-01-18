const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  axios.post('https://flooty-coins.com/api/api-v2.php', req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
