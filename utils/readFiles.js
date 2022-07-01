const fs = require("fs");
const path = require("path");

const directoryPath = path.join(
  "/Users/patriciarosa/Desktop/aula/pet-sitter-service/src/",
  "uploads"
);

const readFiles = () =>
  new Promise(function (resolve, reject) {
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        reject(err);
      }

      let allFiles = [];
      files.forEach(function (file) {
        allFiles.push(file);
      });
      resolve(allFiles);
    });
  });

module.exports = readFiles;
