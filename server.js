const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('resume, builder !');
});

app.listen(port, () => {hstopl
  console.log(`Server running at http://localhost:${http://127.0.0.1:5501/}`);
});
app.get('/about', (req, res) => {
    res.send('');
  });
  app.use((req, res, next) => {
    console.log(`${req.method} request received for ${req.url}`);
    next();
  });
  if(data.length){
    