const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3300;
const apiRoute = require("./routes/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//base route
app.get("/", (req, res) => {
    res.send("api works");
});

//register routes
app.use("/api/sentiment", apiRoute);

app.listen(port, () => {
    console.log(`Server started @ port ${port}`);
});



