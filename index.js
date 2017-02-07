var express = require('express'),
    googleTrends = require('google-trends-api');

var app = express();

app.get("/", function (req, res) {
    var keywords = req.query.keyword;
    googleTrends.trendData({ keywords: keywords, timePeriod: { type: 'day', value: 1 } })
        .then(function (results) {
            var valuecheck = results[0].values;
            res.send(valuecheck);
        }).catch(function (err) {
            res.status(500).send(err);
        });
});

app.listen(3000, function () {
    console.log("App is up on http://localhost:" + 3000);
});