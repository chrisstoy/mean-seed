const express = require('express');
//const morgan = require('morgan');

const app = express();
const PORT = (process.env.PORT || 3000);

//app.use(morgan('combined'));

// create default route that matches everything for now
app.all('/*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
      <html>
        <head>
          <title>MEAN todo App</title>
        </head>
        <body>
          <h1>Hello MEAN app</h1>
        </body>
      </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
