var keystone = require('keystone'),
    Art = keystone.list('Art');

exports = module.exports = function (req, res) {
  Art.model.find()
    .exec(function(err, art) {
      res.json(art);
    });
};
