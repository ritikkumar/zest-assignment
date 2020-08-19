const compare = require("../scripts/compare-json.js")
const fs = require('fs')

const fileText1 = fs.readFileSync("./data/file.txt")
const fileText2 = fs.readFileSync("./data/file2.txt")

compare(fileText1, fileText2)