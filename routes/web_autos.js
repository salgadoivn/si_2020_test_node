var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request('http://localhost:3000/autos',(err,resonse,body)=>{
    res.render('web_autos',{ data:JSON.parse(body) });
  });
});

/*
router.get('/:id',(req,res,next)=>{
  request('http://localhost:3000/autos'+req.params.id,(err,res,next)=>{
    res.render({});
  });
});
*/

module.exports = router;
