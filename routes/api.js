const express = require("express");
const router = express.Router();
const response = require("../models/response");
const nlpHelper = require("../models/nlpHelper");
const error = require("../models/error");

router.post("/single", (req, res) => {

    let nlm = new nlpHelper();
    let body = req.body;
    if (body) {
        let input = body.inputText;
        let result = nlm.getSentimentResult(input);
        let final = new response(result, null, "success");
        res.status(200).send(final);
    } else {
        res.status(400).send(new response(null, new error(400, "provide input data"), "error"));
    }
});

module.exports = router;