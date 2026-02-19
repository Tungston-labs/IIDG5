const express = require('express')
const app = express()
 
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8080
 
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')
 
// const authUser = require('./Routes/authUser')
const authAdmin = require('./Routes/authAdmin')
const authCertificate = require('./Routes/authCertificate')
const contactForm = require('./Routes/contactFormRoute')
const authBulkCerticate=require("./Routes/authBulkCertificate") 

const corsOptions ={
origin :'*',
methods :'GET,HEAD,PUT,PATCH,POST,DELETE',
credentials:true,
};



app.use(helmet());  
app.use(cors()); 
app.use(express.json()); 


app.use((req,res,next) => {
	res.header('Access-Control-Allow-Origin',corsOptions.origin);
	res.header('Access-Control-Allow-Credentials','true');
	res.header('Access-Control-Allow-Methods','GET,HEAD,PUT,PATCH,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
	next();
});

app.options('*',cors(corsOptions));


 
app.use("/auth/admin", authAdmin);
app.use("/auth/certificate", authCertificate, );
app.use("/auth/contact",contactForm)
app.use("/auth/bulk-cert", authBulkCerticate)
mongoose.connect(process.env.CONNECTION_STRING,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(()=>{
        console.log('Db connected successfully')
    }).catch((error)=>{
        console.log(error)
    })
 
// start the server
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
