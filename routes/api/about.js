var keystone = require('keystone'),
    About = keystone.list('About');

exports = module.exports = function (req, res) {
  About.model.find()
    .exec(function(err, about) {
      res.json(about);
    });
};
