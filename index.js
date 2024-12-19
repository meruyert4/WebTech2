import express from "express"

const app = express();

const port = 5500
console.log("Hello")

const fs = require('fs')

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});