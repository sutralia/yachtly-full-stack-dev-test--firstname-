var express = require('express');
var router = express.Router();
const usersController = require('../controllers').users;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('user/userList', usersController.listVi);
// });
router.get('/', usersController.listView)
router.get('/delete/:id', usersController.deleteView)

module.exports = router;
