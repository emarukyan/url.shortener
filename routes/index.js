var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  });
});

router.post('/shorten', function(req, res, next) {
    var query = "INSERT INTO `url` (`orig`) VALUES ('test');";
    var link = '11';

    var result = connection.query(query);

    console.log(result);

    res.render('shorten', {
        link: link
    });
});

module.exports = router;
