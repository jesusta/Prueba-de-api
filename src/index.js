const express= require('express');
const app=express();
const morgan= require('morgan');

//settings
app.set('port',800)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:flase}));
app.use(express.json());


//inicia serve
app.listen(app.get('port'),()=>{
    console.log(`Sever en port ${app.get('port')}`)
})
