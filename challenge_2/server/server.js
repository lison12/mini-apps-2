const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express()
const port = 8080;

app.use(express.static(path.join(__dirname, '../public')));


app.get('', (req, res) => {

})


app.listen(port, () => {
  console.log(`Server listening on port: ${port}!`);
})



