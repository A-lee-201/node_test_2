const express = require('express');
const router = express.Router();
const authenticate = require('../controllers/authenticate');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('login', {
		active: 'login'
	});
});

router.post('/', function(req, res, next) {
	// this asks the authenticagtor
	// if it gets OK, it renders home page
	// if not it sends errore message
});

module.exports = router;
