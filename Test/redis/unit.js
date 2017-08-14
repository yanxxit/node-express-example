var RankProxy = require('./Ranking');

//RankProxy.Query('sessionid', function (err, result) {
//    console.log(err + JSON.stringify(result))
//});

setInterval(function () {
    RankProxy.login(function (err, result) {
        console.log(err + JSON.stringify(result))
    });
}, 500)
