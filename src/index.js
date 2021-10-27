const express= require('express');
const app=express();
const morgan= require('morgan');
const path = require('path');

//settings
app.set('port',process.env.PORT || 800);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//router
app.get("/",(req,res)=>{
    res.render(path.join(__dirname+'/index.ejs'));
});


//inicia serve
app.listen(app.get('port'),()=>{
    console.log(`Sever en port ${app.get('port')}`)
});
