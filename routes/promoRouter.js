const express = require('express'),
      bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')

.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader = ('Content-type', 'text/plane');
    next();
})

.get((req,res,next) =>{
    res.end('Will send all promotions.');
})

.post((req,res,next)=>{
    res.end('Will add the promotion: '+ req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next) =>{
    res.statusCode = 403;
    res.end('PUT command not supported on /promotions.')
})
.delete((req,res,next)=>{
    res.end('Deleting all the promotions');
});

promoRouter.route('/:promoId')

.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Conetnt-Type', 'text/plane');
    next();
})

.get((req, res, next) =>{
    res.end('Will send details of Promotion: ' + req.params.promoId + ' to you.');
})

.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST command is not supported on /promotions/'+ req.params.promoId);
})
.put((req,res,next)=>{
    res.write('Updating the Promotion: ' + req.params.promoId + '\n');
    res.end('Will Update the Promotion: ' + req.body.name + ' with detail: ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('Will delete the promotion: ' + req.params.promoId);
})



module.exports = promoRouter;