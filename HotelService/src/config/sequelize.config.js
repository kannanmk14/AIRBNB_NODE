require("ts-node/register");// This step enables typescript support in js
const {dbConfig} = require(".");
module.exports={development:dbConfig};