var express = require('express');
var router = express.Router();
var db = require('../connect');
var rn = require('random-number');
var request = require("request");
//var user = require('http://192.168.3.91:3000/users');
var options = {
  min: 0000,
  max: 9999,
  integer: true
}
rn(options)
console.log("otp:"+rn(options));


console.log("dsds");
router.post('/', function (req, res, next) {
    
    var rideId = req.body.rideId;
    var driverId = req.body.driverId;
    var vehType = req.body.vehType;
    var rideType = "hello";
    var mobileNumber = req.body.mobileNumber;
    //var mobileNumber = '944323340';
    var deviceId = req.body.deviceId;
    var otp = rn(options);
    var sourceLat = req.body.sourceLat;
    var sourceLon = req.body.sourceLon;
    var destinationLat = req.body.destinationLat;
    var destinationLon = req.body.destinationLon;
    var passengerCount = req.body.passengerCount;
    var rideStatus = req.body.rideStatus;
    var bookingTime = req.body.bookingTime;
    var action = req.body.action;

    // var rideDetailId = req.body.rideDetailId;
    // var razorPayId = req.body.razorPayId;
    // var paymentType = req.body.paymentType;
    // var individualFare = req.body.individualFare;
    // var couponId = req.body.couponId;
    // var totalpayment = req.body.totalpayment;
    // var discountAmount = req.body.discountAmount; 
    // var paymentStatus = req.body.paymentStatus;
    // var settlementstatus=req.body.settlementstatus;
    // var paymentDate=req.body.paymentDate;
    console.log(rideId +"hiiiiiiii");

    request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://192.168.3.91:3000/users",
        "body": JSON.stringify({
            "paymentType":rideType,
            
        })
    }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
    });
    if(action == "rideRequestInsert")
    
    // request.post('http://192.168.3.91:3000/users',{
    //     rideDetailId : '123'
    // })
    var qur = `INSERT INTO rideDetail
    (rideId, vehicleType, rideType, otp, psourceLatitude, psourceLongitude,pdestiLatitude, pdestiLongitude, passengerCount, rideStatus, bookingTime)
     VALUES ('${rideId}','${vehType}','${rideType}','${otp}','${sourceLat}','${sourceLon}',
     '${destinationLat}','${destinationLon}','${passengerCount}','${rideStatus}','${bookingTime}')`;
    db.query(qur, function (err, rows, fields) {
        if (err) throw err;
        /*If you are creating api then get response in json format*/
        // res.json(rows);
        /*If you want response as json then comment below line*/
        res.json(rows);
    })
});
module.exports = router; 