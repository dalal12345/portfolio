const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 300 || 5000 || 3000;
const url = "mongodb://localhost:27017/portfolio";
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(express.static(path.resolve('public')));
app.use(express.static(path.join(__dirname, 'portfolio/dist/')));

app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(url).then(() => {
    console.log("Connected to database");
}   ).catch((err) => {
    console.log("Error connecting to database", err);
});

app.listen(port,(err)=>{
    if(err){
        console.log("Error starting server", err);
    } else {
        console.log(`Server started on port ${port}`);
    }
});




//Routes....
app.use("/", require("./routes/home.js"));
app.use("/", require("./routes/create_framework_type.js"));
app.use("/", require("./routes/create_framework.js"));
app.use("/", require("./routes/create_language.js"));
app.use("/",require("./api/language.js"));
app.use("/",require("./api/framework.js"));
app.use("/",require("./api/framework_type.js"));