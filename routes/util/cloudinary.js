const getLowResImageUrl = (url) => {
  const transformations = [
    'w_500',
    'c_fit',
    'fl_progressive'
  ];

  const splitUrl = url.split('/upload');
  return `${splitUrl[0]}/upload/${transformations.join(',')}${splitUrl[1]}`;
};

const getHighResImageUrl = (url) => {
  const transformations = [
    'w_1000',
    'c_fit',
    'fl_progressive'
  ];

  const splitUrl = url.split('/upload');
  return `${splitUrl[0]}/upload/${transformations.join(',')}${splitUrl[1]}`;
};

module.exports = {
  getLowResImageUrl: getLowResImageUrl,
  getHighResImageUrl: getHighResImageUrl
};
