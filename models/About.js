var keystone = require('keystone');
var Types = keystone.Field.Types;

var About = new keystone.List('About', {
  label: 'About',
  plural: 'About',
  path: 'about',
  nocreate: true,
  nodelete: true
});

About.add({
  text: { type: Types.Textarea, required: true, initial: true },
  image: { type: Types.CloudinaryImage }
});

About.defaultColumns = 'text';
About.register();
