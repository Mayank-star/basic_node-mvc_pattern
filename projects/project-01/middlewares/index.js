const fs = require("fs");

function logRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `\n request-Path => ${req.path} ,  request-Type => ${
        req.method
      } , Date => ${Date.now()} \n`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = { logRes };
