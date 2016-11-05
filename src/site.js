require('./site.scss');

const landing = require('./landing/landing.js');
const nav = require('./nav/nav.js');
const modal = require('./modal/modal.js');

const smoothScroll = require('smooth-scroll');

landing.onload();
nav.onload();

window.onload = () => {
  smoothScroll.init();
}
