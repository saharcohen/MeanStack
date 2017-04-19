var Nerd = require('./models/nerd');
var path = require('path');

module.exports = function(app){
    app.get('/api/nerds', function(req,res){
        Nerd.find(function(err,nerds){ //get all nerds in DB
            if(err)
                res.send(err);
            res.json(nerds); //return all nerds in json format
        });
    });
    //route to creating new nerds
    //route to delete nerds


    //frontend routes
    app.get('*', function(req,res){
        res.sendFile('./public/views/index.html',{root: 'D:\\MyWebProjects\\MEANStack'}); //send the find you want to show
    });
};