/**
 * Middleware function to capture the user's IP address.
 * 
 * This function retrieves the user's IP address from the request headers or 
 * the connection information and attaches it to the `req` object. It also logs 
 * the IP address to the console for monitoring or debugging purposes.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware function in the stack.
 */
function captureIpAddress(req, res, next) {
    // Retrieve the user's IP address from the 'x-forwarded-for' header 
    // (for proxy servers) or from the connection's remote address.
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    // Log the user's IP address to the console.
    console.log(`User IP Address: ${ipAddress}`);
    
    // Attach the user's IP address to the request object for later use.
    req.userIp = ipAddress;

    // Call the next middleware function in the stack.
    next();
}

module.exports = captureIpAddress;
