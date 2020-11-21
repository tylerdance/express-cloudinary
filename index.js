require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const multer = require('multer')
const cloudinary = require('cloudinary')

const app = express();
const PORT = process.env.PORT || 3000;
const uploads = multer({ dest: './uploads'})

// middleware
app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', uploads.single('inputFile'), (req, res) => {
  console.log('on post route');
  
  // get input from user
  let file = req.file.path;
  console.log(file);

  cloudinary.uploader.upload(file, (result) => {
    console.log(result);
    res.render('result', { image: result.url })

  })
})

app.listen(PORT, () => {
  console.log(`Server live on PORT: ${PORT}`);
});
