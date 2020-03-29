var express = require('express');
var router = express.Router();
const Account = require('../models/Account');

router.get('/', function (req, res, next) {
  res.status(200);
  res.json({
    status: 'OK',
    app: 'AccountService',
    version: 'v1.0.0'
  });
});

// Create account
router.put('/', function (req, res, next) {
  Account.findOne({ email: req.body.email })
    .then(account => {
      if (!account) {
        Account.create({
          email: req.body.email,
          username: req.body.username,
          full_name: req.body.full_name,
          password: req.body.password
        }).then( doc => {
          return res.status(200).json({
            status: 'OK',
            data: doc
          });
        }).catch(error => {
          return res.status(400).json({
            status: 'FAIL',
            message: error.message
          })
        })
      } else {
        return res.status(400).json({
          status: 'FAIL',
          message: 'Account already exists'
        })
      }
    })
});

// Find account
router.post('/', function (req, res, next) {
  Account.findOne(req.body)
    .then(account => {
      if (account) {
        return res.status(200).json({
          status: 'OK',
          data: account
        });
      } else {
        return res.status(400).json({
          status: 'FAIL',
          message: 'Account not found'
        })
      }
    })
    .catch(error => {
      return res.status(400).json({
        status: 'FAIL',
        message: error.message
      })
    });
});

// Get account
router.get('/:user', function (req, res, next) {
  var user_id = req.params.user;
  Account.findOne({
    _id: user_id
  })
    .then(account => {
      if (account) {
        return res.status(200).json({
          status: 'OK',
          data: account
        });
      } else {
        return res.status(400).json({
          status: 'FAIL',
          message: 'Account not found'
        })
      }
    })
    .catch(error => {
      return res.status(400).json({
        status: 'FAIL',
        message: error.message
      })
    });
});

// Update account
router.patch('/:user', function (req, res, next) {
  var user_id = req.params.user;
  Account.findOneAndUpdate({
    _id: user_id
  }, req.body)
    .then(account => {
      if (account) {
        return res.status(200).json({
          status: 'OK',
          message: 'Successfully updated'
        });
      } else {
        return res.status(400).json({
          status: 'FAIL',
          message: 'Account not found'
        })
      }
    })
    .catch(error => {
      return res.status(400).json({
        status: 'FAIL',
        message: error.message
      })
    });
});

// Delete account
router.delete('/:user', function (req, res, next) {
  var user_id = req.params.user;
  Account.deleteOne({
    _id: user_id
  })
    .then(account => {
      return res.status(200).json({
        status: 'OK',
        data: account
      });
    })
    .catch(error => {
      return res.status(400).json({
        status: 'FAIL',
        data: error.message
      })
    })
    ;
});

module.exports = router;
