const diacritics = require('../../../lib/core/diacritics');
import fs from "fs"; 
import { parseString } from "xml2js"; 

exports.xmlToJSON = function (arr) {
    parseString(xmldata, function (err, arr) {
  
	// parsing to json
	let data = JSON.stringify(arr)
	  
	// display the json data
	return data;
	});
}