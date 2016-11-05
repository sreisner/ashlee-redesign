var _ = require('lodash');
var keystone = require('keystone');
var Art = keystone.list('Art');
var cloudinary = require('./util/cloudinary');
var uiStrings = require('./util/uiStrings');


/**
	Initialises the standard view locals
*/
exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Home', key: 'home', href: '/' },
	];
	res.locals.user = req.user;
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};

exports.getArt = function (req, res, next) {
  Art.model.find().exec(function(error, art) {
    res.locals.art = art.map(function(artwork) {
      artwork.image.lowResUrl = cloudinary.getLowResImageUrl(artwork.image.url);
      artwork.image.highResUrl = cloudinary.getHighResImageUrl(artwork.image.url);
      artwork.dimensionsString = uiStrings.getDimensionsString(artwork);
      return artwork;
    });

    next();
  });
}
