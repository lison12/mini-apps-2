const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const app = express()
const port = 8080;

app.use(express.static(path.join(__dirname, '../public')));


app.get('/coindata/:start/:end', (req, res) => {
  const { start, end } = req.params;
  console.log(req.params)
  console.log('hiiiiiii',start)
  if (start === '0' || end === '0') {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
      .then(data => {
        res.status(200).send(data.data);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  } else {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
      .then(data => {
        // console.log(data.data);
        res.status(200).send(data.data);
      })
      .catch(error => {
        // console.log(error);
        res.status(500).send(error);
      });
  }
})


app.listen(port, () => {
  console.log(`Server listening on port: ${port}!`);
})



