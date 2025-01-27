
exports.min = function min (array) {
  if(array === undefined || array.length === 0) return 0;
  return array.sort((a, b) => a - b)[0];
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) return 0;
  return array.sort((a, b) => b - a)[0];
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) return 0;
  let sum = array.reduce((sum, current) => sum + current, 0);
  return sum / array.length;
}
