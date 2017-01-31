var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Nomad Seoul' });
});

router.get('/contact', function(req, res){
    res.render('contact', { title: 'Contact' });
})
module.exports = router;
