'use strict';

module.exports = function(app) {
  var todoList = require('../controller/appController');

  app.route('/users')
    .get(todoList.list_all_users);

  app.route('/users/detail')
    .post(todoList.read_a_user)
};
