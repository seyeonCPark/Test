const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');

const accessLogStream = fs.createWriteStream(
    appRoot.resolve('/log/access.log'),
// `${appRoot}/log/access.log`,
    { flags: 'a' }
);

module.exports = accessLogStream;