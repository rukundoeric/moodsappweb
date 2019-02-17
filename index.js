const express = require('express');
const path    =require('path');
const app = express();
app.set('view engine','ejs');
app.set('views', path.resolve(__dirname, 'ui', 'src'));
app.get('/',(req, res) => { res.render('index.ejs')});;
app.listen(3000, () =>console.log("Server is running on post 3000"));
