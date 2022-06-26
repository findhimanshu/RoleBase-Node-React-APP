const connection = require("../connection/connection");

//err, rows, fields
const execute = (query) => {
  return new Promise((resolve, reject) => {
    try {
      connection.query(query, (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    } catch (error) {
      reject(error);
    }
  });

  // connection.query(query, callback);
};

module.exports = execute;
