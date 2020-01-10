var express = require('express');
var router = express.Router();
var db = require('../connect');

router.get('/', function(req, res, next) {
  
  var query = 'SELECT `vehicleType`, `basePrice`, `perKmCost`, `perMinCost`, `vehMaintenanceCost` FROM `priceTable` WHERE `status` = "active"';
  db.query(query, function(err, rows, fields) {
    if (err) throw err;
    
    /*If you are creating api then get response in json format*/
   // res.json(rows);

    /*If you want response as json then comment below line*/
 res.json(rows);
  })
});
module.exports = router; 