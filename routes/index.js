var express = require('express');
var router = express.Router();
var Flickr = require("flickrapi");

var FlickrOptions = {
      api_key: "f34432b27b27503ac179af20848f0a9a",
      secret: "38b16d0c43e8c14a",
      requestOptions: {
        timeout: 20000,
        /* other default options accepted by request.defaults */
      }
    };



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Nomad Seoul' });
});

router.get('/contact', function(req, res){
    res.render('contact', { title: 'Contact' });
})

router.get('/dailylife', function(req, res){
		Flickr.tokenOnly(FlickrOptions, function(err, flickr) {
  flickr.photos.search({tags:"seoul"}, function(err,result) { console.log(JSON.stringify(result));if(err) { throw new Error(err);}
  res.render('dailylife', { title: 'daily life', flickr:result });
})});
    
});
	
router.get('/portfolio', function(req, res){
  res.render('porfrolio', {title:'portfolio', flickr:res});	
})
module.exports = router;

