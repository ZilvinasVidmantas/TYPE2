const path = require('path');
const fs = require('fs');

const deleteFile = (filePath) => {
  const fullPath = path.join(process.cwd(), filePath);
  try {
    fs.unlinkSync(fullPath);
  } catch (err) {
    console.error(err)
  }
}

const fileExists = (filePath) => {
  const fullPath = path.join(process.cwd(), filePath);
  return fs.existsSync(fullPath);
}

module.exports = {
  deleteFile,
  fileExists,
}