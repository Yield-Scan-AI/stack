const fs = require("fs");
const path = require("path");

const readFile = (file, options) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(file), options, (err, data) => {
            if (err) return reject(err);
            else return resolve(data);
        });
    });
};

module.exports = readFile;
