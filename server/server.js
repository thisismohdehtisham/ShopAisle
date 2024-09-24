const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require('cors')

// create a db connection or create in diff file and import it here
mongoose
.connect(
    "mongodb+srv://mohammadehtisham034:ELuL0YHMnbirEUEp@cluster0.hcqy5.mongodb.net/"
)
.then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT | 5000;

app.use(
    cors({
        origin : 'http://localhost:5174/',
        methods : ['GET', 'POST','DELETE', 'PUT'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'    
        ],
        credentials : true
    })
);

app.use(cookieParser())
app.use(express.json())

app.listen(PORT, ()=>
    console.log(`Server is now running on port ${PORT}`)
)