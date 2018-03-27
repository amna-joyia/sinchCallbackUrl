const sinch = require('./controllers/sinchservice');


module.exports = function (app) {
    app.get('/',function (req, res) {
        res.send({message: 'Hi Default'});
    });
    app.get('/apptoappcall', sinch.apptoappcall);
}