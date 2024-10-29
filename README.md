```markdown
# IP Address Middleware for Express.js

This repository contains middleware functions for capturing and blocking IP addresses in an Express.js application. The middleware helps in monitoring user IPs and implementing access control based on IP address filtering.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Middleware Functions](#middleware-functions)
  - [captureIpAddress](#captureipaddress)
  - [customIPBlocker](#customipblocker)
- [Example](#example)
- [License](#license)

## Installation

To use this middleware in your Express.js application, you need to have Node.js and npm installed. You can install Express by running the following command:

```bash
npm install express
```

## Usage

To use the IP address middleware in your Express application, follow these steps:

1. Import the middleware functions.
2. Use them in your Express app by adding them to your middleware stack.

### Middleware Functions

#### `captureIpAddress`

This middleware captures the user's IP address from the request and attaches it to the `req` object.

**Usage:**
```javascript
const express = require('express');
const captureIpAddress = require('./path/to/captureIpAddress');

const app = express();

// Use the captureIpAddress middleware
app.use(captureIpAddress);
```

#### `customIPBlocker`

This middleware checks if a user's IP address is in a specified list of blocked IPs. If the IP is blocked, it logs a message and sends a `403 Forbidden` response.

**Parameters:**
- `blockedIPs` (Array): An array of IP addresses that should be blocked.
- `text` (String): A custom message to log when access is denied.

**Usage:**
```javascript
const customIPBlocker = require('./path/to/customIPBlocker');

// Define an array of blocked IP addresses
const blockedIPs = ['192.168.1.1', '203.0.113.5'];

// Use the customIPBlocker middleware
app.use(customIPBlocker(blockedIPs, 'Access denied for blocked IP.'));
```

## Example

Here’s a complete example of an Express.js application using both middleware functions:

```javascript
const express = require('express');
const captureIpAddress = require('./path/to/captureIpAddress');
const customIPBlocker = require('./path/to/customIPBlocker');

const app = express();

// Define blocked IP addresses
const blockedIPs = ['192.168.1.1', '203.0.113.5'];

// Use the middleware
app.use(captureIpAddress);
app.use(customIPBlocker(blockedIPs, 'Access denied for blocked IP.'));

// Example route
app.get('/', (req, res) => {
  res.send(`Your IP address is ${req.userIp}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

### Explanation

- **Installation**: Instructions to install Express.js.
- **Usage**: How to incorporate the middleware into an Express application.
- **Middleware Functions**: Descriptions of the two middleware functions, including parameters and usage examples.
- **Example**: A complete code example showing how to use both middleware functions in an Express server.
- **License**: Licensing information for the project.
