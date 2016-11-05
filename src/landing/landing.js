let smoothScroll = require('smooth-scroll');

const onload = () => {
  const arrow = document.querySelector('#landing .arrow-container');
  arrow.addEventListener('click', function() {
    smoothScroll.animateScroll('#art');
  });
};

module.exports = {
  onload: onload
};
