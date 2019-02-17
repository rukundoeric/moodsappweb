const express = require('express');
const path    =require('path');
const app = express();
require('dotenv').config();
const PORT =5432;
app.set('view engine','ejs');
app.set('views', path.resolve(__dirname, 'ui', 'src'));
app.get('/',(req, res) => { res.render('index.ejs')});;
app.listen(PORT, () =>console.log("Server is running on post "+PORT));
