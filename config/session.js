const session = require('express-session');

const sessionConfigured = session({
	secret: process.env.SESSION_SECRET || 'no secret',
	resave: true,
	saveUninitialized: false,
	cookie: { maxAge: 28800 * 1000 }
});

module.exports = sessionConfigured;
