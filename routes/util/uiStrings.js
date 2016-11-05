const getDimensionsString = (art) => {
  return art.height && art.width ? `${art.height} by ${art.width}` : '';
}

module.exports = {
  getDimensionsString: getDimensionsString
};
