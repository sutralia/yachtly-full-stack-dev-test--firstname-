const User = require('../models').User;
const swal = require('sweetalert2')

module.exports = {
  list(req, res) {
    return User
      .findAll({
        order: [
          ['createdAt', 'DESC']
        ]
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return User
      .findOne({
        where: { userID: req.params.id } ,
        attributes: ['userID', 'name', 'email', 'phoneNumber', 'address'],
        limit: 1,
        raw: true
      })
      .then((users) => {
        if (!users) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(users);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return User
      .create({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
      })
      .then((users) => res.status(201).send(users))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
      .findById(req.params.id)
      .then(users => {
        console.log(users)
        if (!users) {
          return res.status(404).send({
            message: 'user Not Found',
          });
        }
        return users
          .update({
            name: req.body.name || users.name,
            email: req.body.email || users.email,
            phoneNumber: req.body.phoneNumber || users.phoneNumber,
            address: req.body.address || users.address,
          })
          .then(() => res.status(200).send(users))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    console.log(req.params.id)
    return User
      .findById(req.params.id)
      .then(users => {
        if (!users) {
          return res.status(400).send({
            message: 'users Not Found',
          });
        }
        return users
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  addview(req, res) {
    console.log(req.body)
    return User
      .create({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
      })
      .then((users) => {
        swal({
          type: 'success',
          title: 'Your Data saved',
          showConfirmButton: false,
          timer: 1500
        })
        res.render("user/adduser", { title: 'Express', status: '1' });
        // alert('success')
      })
      .catch((error) => {
        res.render("user/adduser", { title: 'Express', status: '0' });
        // alert('error')
      });
  },
  listView(req, res) {
    return User
      .findAll({
        order: [
          ['createdAt', 'DESC']
        ]
      })
      .then((users) => {
         res.render("user/userList", {title: 'List User', data: users});
      })
      .catch((error) => { res.status(400).send(error); });
  },
  deleteView(req, res) {
    return User
      .findById(req.params.id)
      .then(users => {
        if (!users) {
          return res.status(400).send({
            message: 'users Not Found',
          });
        }
        return users
          .destroy()
          .then(() => {
            res.redirect('/users')
          })
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  editView(req, res) {
    return User
      .findOne({
        where: { userID: req.params.id } ,
        attributes: ['userID', 'name', 'email', 'phoneNumber', 'address'],
        limit: 1,
        raw: true
      })
      .then((users) => {
        if (!users) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        res.render("user/adduser", {title: 'Edit User', data: users, status: '3'});
      })
      .catch((error) => res.status(400).send(error));
  },
  editUser(req, res) {
    return User
      .findById(req.params.id)
      .then(users => {
        console.log(users)
        if (!users) {
          return res.status(404).send({
            message: 'user Not Found',
          });
        }
        return users
          .update({
            name: req.body.name || users.name,
            email: req.body.email || users.email,
            phoneNumber: req.body.phoneNumber || users.phoneNumber,
            address: req.body.address || users.address,
          })
          .then(() => {
             res.redirect('/users')
          })
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }

};