var express = require('express');
var router = express.Router();

const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'mydb.com',
  user: 'myUser',
  connectionLimit: 5
});


/* GET home page. */
router.get('/', function (req, res, next) {
  // give me the data from the DB
  // contents of the timesheet
  // var timesheet = contents
  res.render('time-sheet', {
    title: 'Timesheet',
    data: [
      'val1',
      'val2',
      'val3',
      'val4'
    ]
  });
});

module.exports = router;