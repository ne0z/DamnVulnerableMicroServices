var express = require('express');
var router = express.Router();
const Product = require('../models/Product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.json({
    status: 'OK',
    app: 'ProductService',
    version: 'v1.0.0'
  });
});

// Create product
router.put('/', function (req, res, next) {
  Product.findOne({ product_name: req.body.product_name })
    .then(product => {
      if (!product) {
        Product.create({
          product_name: req.body.product_name,
          product_description: req.body.product_description,
          product_price: req.body.product_price,
          product_image: req.body.product_image
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
          message: 'Product already exists'
        })
      }
    })
});

// Find product
router.post('/', function (req, res, next) {
  Product.findOne(req.body)
    .then(product => {
      if (product) {
        return res.status(200).json({
          status: 'OK',
          data: product
        });
      } else {
        return res.status(400).json({
          status: 'FAIL',
          message: 'Product not found'
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

// Get product
router.get('/:product', function (req, res, next) {
  var product_id = req.params.product;
  Product.findOne({
    _id: product_id
  })
    .then(product => {
      if (product) {
        return res.status(200).json({
          status: 'OK',
          data: product
        });
      } else {
        return res.status(400).json({
          status: 'FAIL',
          message: 'Product not found'
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

// Update product
router.patch('/:product', function (req, res, next) {
  var product_id = req.params.product;
  Product.findOneAndUpdate({
    _id: product_id
  }, req.body)
    .then(product => {
      if (product) {
        return res.status(200).json({
          status: 'OK',
          message: 'Successfully updated'
        });
      } else {
        return res.status(400).json({
          status: 'FAIL',
          message: 'Product not found'
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

// Delete product
router.delete('/:product', function (req, res, next) {
  var product_id = req.params.product;
  Product.deleteOne({
    _id: product_id
  })
    .then(product => {
      return res.status(200).json({
        status: 'OK',
        data: product
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
