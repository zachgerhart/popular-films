const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const {apiUrl, apiKey} = require('../config.js')

const port = 3001;
const app = express();

// checking if backend is connected to front end
// app.get('/api/test', (req, res, next) => {
//   res.status(200).json('hello world')
// })

app.get('/api/movies', (req, res) => {
  axios.get(`${apiUrl}/popular${apiKey}`).then(response => {
    return res.send(response.data);
  }).catch(console.log);
})



//middlewares
app.use(cors());
app.use(bodyParser.json());









app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
})
