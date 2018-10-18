var express = require('express')
var router = express.Router()
const usersController = require('../controllers').users

router.get('/user', usersController.list)
router.get('/user/:id', usersController.getById)
router.post('/user/add', usersController.add)
router.post('/user/edit/:id', usersController.update)
router.post('/user/:id', usersController.delete)

module.exports = router;
