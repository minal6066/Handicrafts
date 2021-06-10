const mongoose = require('mongoose');
const user = require('../controller/user');
const handicraftRoutes = require('../routes/handicraftRoutes');

module.exports = function (app, passport) {
    app.get('/', (req,res, next) => {
        res.set('Content-Type', 'text/html');
        res.render('checkout');
    });

    app.get('/auth/hello', (req, res) => {
        res.send('hello world');
    });

    //USER
    app.post('/register', user.create);
    app.post('/login', user.login);
    app.get('/myprofile',user.getMyProfile);
    app.delete('/permanent-delete',user.deleteAccount);

    //Handicrafts
    app.use('/handicrafts',handicraftRoutes);
}