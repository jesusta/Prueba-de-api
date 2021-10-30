const express= require('express');
const app=express();
const morgan= require('morgan');
const path = require('path');

//settings
app.set('port',process.env.PORT || 800);
app.set('view engine','ejs');


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//router
app.use(require('./router'));


//inicia serve
app.listen(app.get('port'),()=>{
    console.log(`Sever en port ${app.get('port')}`)
    console.log(path.join(__dirname+'/view/index.ejs'));
});
