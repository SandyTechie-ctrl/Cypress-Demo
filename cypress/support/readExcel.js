const XLSX = require("xlsx");
const path = require("path");

function readExcelFile(filePath, sheetName) {
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
  return jsonData;
}

module.exports = { readExcelFile };
