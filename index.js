module.exports = function capn(str, re, n) {
  var matches = [];
  var match;
  while (match = re.exec(str)) {
    matches.push(match[n]);
  }
  return matches;
};
