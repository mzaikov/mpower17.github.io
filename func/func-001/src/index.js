const concat = require('goss_concat');
const concatRgb = (r = 255, g = 255, b = 255) => concat('rgb(', r, ',', g, ',', b, ')');
module.exports = concatRgb;
console.log(concatRgb());
console.log(concatRgb(128, 128, 0));
