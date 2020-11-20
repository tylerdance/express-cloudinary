const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
