
var kue = require('kue');

kue.createQueue({
    redis: process.env['REDIS_URL']
});

kue.app.listen(process.env['WEB_PORT'] || 3000);
