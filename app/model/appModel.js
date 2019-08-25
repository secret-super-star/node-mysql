'user strict';
var sql = require('./db.js');

var User = function() {};

User.getUserById = function(userId, result) {
  sql.query("Select * from users where id = ? ", userId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

User.getUserList = function(result) {
  sql.query("Select * from users", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
