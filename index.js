
var kue = require('kue');
var express = require('express');

kue.createQueue({
    redis: process.env['REDIS_URL']
});

var app = express();

app.use('/' + process.env['KUE_UI_PATH'], kue.app);

var server = app.listen(process.env.NODE_PORT);
