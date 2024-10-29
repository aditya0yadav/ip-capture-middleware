const geoip = require('geoip-lite');

function getGeolocation(ip) {
    const geo = geoip.lookup(ip);
    return geo;
}

exports.getGeolocation = getGeolocation;