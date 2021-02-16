const mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'movies2'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  };
  console.log('Why hey there beautiful :wink:')
})

module.exports = connection;