var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200);
  res.json({
    status: 'OK',
    app: 'AccountService',
    version: 'v1.0.0'
  });
});

// Create account
router.put('/', function(req, res, next) {
  res.status(200);
  res.json({
    status: 'OK',
    data: {
      id: 'b065a298-d897-4441-979d-d2f26b0265cf',
      username: 'danang.heriyadi',
      password: 'e5828c564f71fea3a12dde8bd5d27063',
      email: 'danang.ganteng@example.net',
      full_name: 'Danang Heriyadi',
      gender: 0
    }
  });
});

// Find account
router.post('/', function(req, res, next) {
  res.status(200);
  res.json({
    status: 'OK',
    data: [{
      id: 'b065a298-d897-4441-979d-d2f26b0265cf',
      username: 'danang.heriyadi',
      password: 'e5828c564f71fea3a12dde8bd5d27063',
      email: 'danang.ganteng@example.net',
      full_name: 'Danang Heriyadi',
      gender: 0
    }]
  });
});

// Get account
router.get('/:user', function(req, res, next) {
  res.status(200);
  res.json({
    status: 'OK',
    data: {
      id: 'b065a298-d897-4441-979d-d2f26b0265cf',
      username: 'danang.heriyadi',
      password: 'e5828c564f71fea3a12dde8bd5d27063',
      email: 'danang.ganteng@example.net',
      full_name: 'Danang Heriyadi',
      gender: 0
    }
  });
});

// Update account
router.patch('/:user', function(req, res, next) {
  res.status(200);
  res.json({
    status: 'OK',
    data: {
      id: 'b065a298-d897-4441-979d-d2f26b0265cf',
      username: 'danang.heriyadi',
      password: 'e5828c564f71fea3a12dde8bd5d27063',
      email: 'danang.ganteng@example.net',
      full_name: 'Danang Heriyadi',
      gender: 0
    }
  });
});

// Delete account
router.delete('/:user', function(req, res, next) {
  res.status(200);
  res.json({
    status: 'OK',
    data: {
      id: 'b065a298-d897-4441-979d-d2f26b0265cf',
      username: 'danang.heriyadi',
      password: 'e5828c564f71fea3a12dde8bd5d27063',
      email: 'danang.ganteng@example.net',
      full_name: 'Danang Heriyadi',
      gender: 0
    }
  });
});

module.exports = router;
