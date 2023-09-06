
const express = require('express'); 

const app = express();  

const path = require('path');

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname,'public')));

const menuController = require('./MenuController.js')
app.use(menuController);


app.get('/', (req, res) => {
	res.render('page',{
		title : 'Bank',
	});
  });
  

const server =   app.listen(8080, () => {
 console.log(`App running on port: ${server.address().port}`);
     });