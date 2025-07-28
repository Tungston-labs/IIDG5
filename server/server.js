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
 

//CORS Options
const corsOptions ={
origin :'*',
methods :'GET,HEAD,PUT,PATCH,POST,DELETE',
credentials:true,
};


// Middleware
app.use(helmet());  // Security middleware to set various HTTP headers  
app.use(cors());  // Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(express.json());  // Middleware to parse incoming JSON requests


//Optional: Custom CORS headers middleware
app.use((req,res,next) => {
	res.header('Access-Control-Allow-Origin',corsOptions.origin);
	res.header('Access-Control-Allow-Credentials','true');
	res.header('Access-Control-Allow-Methods','GET,HEAD,PUT,PATCH,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
	next();
});

//Enable preflight requests for all routes
app.options('*',cors(corsOptions));


 
//routes
app.use("/auth/admin", authAdmin);
app.use("/auth/certificate", authCertificate);
app.use("/auth/contact",contactForm)
//connecting Db
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





















// const express = require('express');
// const app = express();

// const dotenv = require('dotenv').config();
// const port = process.env.PORT || 8080;

// const mongoose = require('mongoose');
// const helmet = require('helmet');
// const cors = require('cors');

// // Routes
// const authAdmin = require('./Routes/authAdmin');
// const authCertificate = require('./Routes/authCertificate');
// const contactForm = require('./Routes/contactFormRoute');

// // CORS Options
// const corsOptions = {
//   origin: [
//     'http://178.248.112.8:3000' // Add this line
//   ],  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // Allow credentials (cookies, authorization headers, etc.)
// };

// // Middleware
// app.use(helmet()); // Security middleware to set various HTTP headers
// app.use(cors(corsOptions)); // Middleware to enable Cross-Origin Resource Sharing (CORS)
// app.use(express.json()); // Middleware to parse incoming JSON requests

// // Optional: Custom CORS headers middleware
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', corsOptions.origin); // Allow specified origins
//   res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE'); // Allowed methods
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Allowed headers
//   next();
// });

// // Enable preflight requests for all routes
// app.options('*', cors(corsOptions)); // Allow preflight requests for all routes

// // Routes
// app.use("/auth/admin", authAdmin);
// app.use("/auth/certificate", authCertificate);
// app.use("/auth/contact", contactForm);

// // Connecting to the database
// mongoose.connect(process.env.CONNECTION_STRING, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Db connected successfully');
// }).catch((error) => {
//   console.log(error);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on ${port}`);
// });
