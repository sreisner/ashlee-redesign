// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'Ashlee Noel Design Portfolio',
	'brand': 'Ashlee Noel Design Portfolio',

	'sass': 'public',
  'static': [
    'public',
    'client/dist',
    'client/node_modules'],
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
  'mongo': process.env.MONGODB_URI || 'mongodb://localhost:27017/ashlee-noel-design-portfolio',

  'cloudinary config': process.env.CLOUDINARY_SECRET
});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes

keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
  art: 'art',
  about: 'about',
	users: 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
