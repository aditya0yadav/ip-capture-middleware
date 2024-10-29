function captureIpAddress(req, res, next) {
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    console.log(`User IP Address: ${ipAddress}`);
    
    req.userIp = ipAddress;

    next();
}

module.exports = captureIpAddress;
