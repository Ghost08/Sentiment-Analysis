const sentiment = require("sentiment");

function nlpHelper(){
    
}

nlpHelper.prototype.getSentimentResult= function(src){
    let sm = new sentiment();
    return sm.analyze(src);
}


module.exports = nlpHelper;