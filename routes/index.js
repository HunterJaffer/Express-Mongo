var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/',function(req,res){
//   res.send(200);
// });
// router.get('/',function(req,res){
//   res.send('ok');
// });

// router.get('/',function(req,res){
//   res.send({
//     people:['Me','Him','Her']
//   });
// });

// router.post('/',function(req,res){
//   req.query
// });

// router.get('/',function(req,res){
//   console.log(req.query);
// });

// router.get('/users/:id',function(req,res){
//   console.log(req.params);
//   res.send(req.params.id,200);
// });
router.get('/',function(req,res){
  res.render('index',{title:'Hi'});
});

module.exports = router;
