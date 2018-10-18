var express = require('express')
var router = express.Router()
const usersController = require('../controllers').users

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', status: '3' });
});
router.post('/adduser', usersController.addview)
router.post('/editUSer/:id', usersController.editUser)


module.exports = router;
