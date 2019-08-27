'use strict';

var User = require('../model/appModel.js');

exports.read_a_user = function(req, res) {

  var userId = req.body.id;

  User.getUserById(userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.list_all_users = function(req, res) {

  User.getUserList(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.usercount = function(req, res) {

  User.usercount(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
