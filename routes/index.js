var express = require('express');
var router = express.Router();
var db = require('../connect');

/* GET home page. */
router.get('/', function(req, res, next) {
    var sel = `SELECT * FROM priceTable`;
    db.query(sel, function(err, rows, fields) {
      if (err) throw err;
      
      /*If you are creating api then get response in json format*/
      res.json(rows);
    });

});






module.exports = router;
