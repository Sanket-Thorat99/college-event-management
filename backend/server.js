const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require("./routes/authRoutes");

const connectDB = require("./config/db");


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send(("API Running !"));
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running at port 5000`);
});