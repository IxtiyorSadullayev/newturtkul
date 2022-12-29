const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')


const app = express();

app.use(cors())
app.use(express.json())
app.use('/rasmlar', express.static('./rasmlar'))
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/testmyturtkul')
.then(()=> console.log(`Malumotlar bazasiga boglandi`))
.catch(e => console.log(`Hatolik bor \n${e.message}`))


app.use('/', require('./router/adress'))



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server ${PORT} da ishlamoqda`)
})