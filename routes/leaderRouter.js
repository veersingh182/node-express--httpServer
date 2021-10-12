const express = require('express'),
      bodyParser = require('body-parser');

const leaderRouter  = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plane');
    next();
})
.get((req,res,next)=>{
    res.end('will send all leaders.');
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST command not supported on /leaders.');
})
.post((req,res,next)=>{
    res.end('will add the leader: ' + req.body.name + ' with details: ' + req.body.description +'.');
})
.delete((req,res,next)=>{
    res.end('deleting all leaders.');
});

leaderRouter.route('/:leaderId')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-typr','text/plane');
    next();
})
.get((req,res,next)=>{
    res.end('Will send leader ' + req.params.leaderId + ' to you.');
})
.post((req,res,next)=>{
    res.end('POST command is not supported on /leaders/'+req.params.leaderId);
})
.put((req,res,next)=>{
    res.write('Updating leader '+ req.params.leaderId + '\n');
    res.end('Will update the Leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('Will deleting the leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;