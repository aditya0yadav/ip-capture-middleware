const captureIpAddress = require('./core/iptracker');
const customIPBlocker = require('./core/ipblocker');
const getGeolocation = require('./core/ipgeo');

module.exports = {
  captureIpAddress, 
  customIPBlocker,
  getGeolocation
};
