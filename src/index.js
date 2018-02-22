module.exports = function warmup(temperature) {
  return temperature * 9 / 5 + 32;
  // return temperature * 1.8 + 32 -- faster but less clear.
};
