

const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoute');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoute');
const productRoutes = require('./routes/productRoute');
const cors = require('cors');
const path = require('path');

const app = express();

const PORT = 4000;

dotEnv.config();
app.use(cors())
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("MongoDB Connected Successfully"))
    .catch((error)=>console.log(error))

app.use(bodyParser.json());
app.use('/vendor',vendorRoutes);
app.use('/firm', firmRoutes);
app.use('/product', productRoutes);
app.use('/uploads', express.static('uploads'));
app.listen(PORT, ()=>{
    console.log(`server started and running at ${PORT}`);
    
});

app.use('/home', (req, res)=>{
    res.send("welcome to subby");
})