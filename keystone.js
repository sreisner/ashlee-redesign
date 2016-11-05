'use strict';
require('dotenv').config();

const keystone = require('keystone');

keystone.init({
	'name': 'Ashlee Noel Portfolio',
	'brand': 'Ashlee Noel Portfolio',

	'sass': 'public',
	'static': ['build', 'public'],
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
  'mongo': process.env.MONGODB_URI,
  'cloudinary config': process.env.CLOUDINARY_SECRET
});
keystone.import('models');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});
keystone.set('routes', require('./routes'));
keystone.set('nav', {
  art: 'art',
	users: 'users'
});

keystone.start();
