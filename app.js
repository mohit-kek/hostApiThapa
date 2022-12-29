const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const products_routes = require("./routes/products")
require("dotenv").config();

const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hi I'm alive")
})

//middleware or to set router
app.use("/api/products", products_routes)

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();



