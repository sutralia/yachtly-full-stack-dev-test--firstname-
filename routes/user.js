var express = require('express');
var router = express.Router();
const usersController = require('../controllers').users;

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.render('user/adduser', { title: 'ngTodo', status: '3' });
});
router.get('/edit/:id', usersController.editView)


module.exports = router;
