var keystone = require('keystone');
var Types = keystone.Field.Types;

var Art = new keystone.List('Art', {
  label: 'Art',
  plural: 'art',
  path: 'art',
  sortable: true,
  track: true,
  map: {
    name: 'title'
  }
});

Art.add({
  title: { type: String, required: true, initial: true },
  medium: { type: String, required: true, initial: true },
  width: { type: String, required: false, initial: true },
  height: { type: String, required: false, initial: true },
  previewPosition: { type: Number, required: false, default: 50, initial: true },
  image: { type: Types.CloudinaryImage },
  createdOn: { type: Date, default: Date.now }
});

/**
 * Registration
 */
Art.defaultColumns = 'title,medium,createdOn';
Art.register();
