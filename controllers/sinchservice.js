const Promise = require("bluebird");


exports.apptoappcall = function (req, res, next) {
//destination is optional
    res.send(    {
        "Action":
            {
                "name" : "ConnectMXP",
                "destination":
                    {
                        "type":"username",
                        "endpoint":"hello"
                    }
            }
    });
    console.log("first route");


}