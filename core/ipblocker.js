/**
 * Middleware function to block access based on the user's IP address.
 * 
 * This function checks if the user's IP address is included in the 
 * specified array of blocked IP addresses. If the user's IP address 
 * is found in the blocked list, the function logs a custom message and 
 * responds with a 403 Forbidden status, denying access. If the IP 
 * address is not blocked, it proceeds to the next middleware in the stack.
 * 
 * @param {Array} blockedIPs - An array of blocked IP addresses.
 * @param {string} text - A custom message to log when access is denied.
 * @returns {Function} - A middleware function that checks the user's IP 
 * address against the blocked list.
 */
function customIPBlocker(blockedIPs, text) {
  return function (req, res, next) {
    // Retrieve the user's IP address from the 'x-forwarded-for' header 
    // or from the connection's remote address.
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Check if the user's IP address is included in the blocked IPs array.
    if (blockedIPs.includes(ipAddress)) {
      // Log the custom message to the console.
      console.log(text);
      // Respond with a 403 Forbidden status to deny access.
      return res.status(403).send('Access denied');
    }

    // Call the next middleware function in the stack if the IP is not blocked.
    next();
  };
}

module.exports = customIPBlocker;
