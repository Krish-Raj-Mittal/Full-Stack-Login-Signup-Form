const express= require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');


app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());

const PORT = process.env.PORT;


const signupRouter = require('./router/signupRouter');

app.use('/api/v1',signupRouter)

app.listen(PORT, ()=>{
    console.log('Server is started in port 4000');
})

const db_Connect = require('./config/database');

db_Connect();

app.get('/',(req,res)=>{
    res.send('<h1>Backend Server is started .....</h1>')
})