const express = require("express");
const bodyParser = require("body-parser");
const advertisingCollection = require("./mock/advertising");

const app = express();
app.use(bodyParser.json());

app.get("/advertising", (req, res) => {
    // random one advertising from advertisingCollection
    const randomIndex = Math.floor(Math.random() * advertisingCollection.length);
    const randomAdvertising = advertisingCollection[randomIndex];
    res.json(randomAdvertising)
});

const port = process.env.PORT && parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
    console.log(`Advertising microservice listening on port ${port}`);
});