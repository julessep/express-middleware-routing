var path = require('path');
let express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, `public`)))

let routes = require('./routes/');
app.use(routes);

app.listen(3000, () => {
  console.log('Listening on port 3000'); 
});