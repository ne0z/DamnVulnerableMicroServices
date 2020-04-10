var express = require('express');
var router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/', function (req, res, next) {
  res.status(200);
  res.json({
    status: 'OK',
    app: 'PaymentService',
    version: 'v1.0.0'
  });
});

router.post('/pay/:order_id', function(req, res, next) {
  const cc_number = req.body.cc_number;
  const cc_expirate_date = req.body.cc_expirate_date;
  const cc_cvv = req.body.cc_cvv;
  const order_id = req.params.order_id;

  Transaction.findOne({
    order_id: order_id
  })
  .then(result=>{
    if (!result){
      Transaction.create({
        order_id: order_id,
        cc_number: cc_number,
        cc_expirate_date: cc_expirate_date,
        cc_cvv: cc_cvv
      }).then(doc=>{
        return res.status(200).json({
          status: 'OK',
          data: doc
        })
      })
    } else {
      return res.status(400).json({
        status: 'FAIL',
        message: 'Your order already paid'
      });
    }
  })
  .catch(err => {
    return res.status(400).json({
      status: 'FAIL',
      message: err.message
    });
  });
});

module.exports = router;
