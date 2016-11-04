'use strict';

// MODULES //

var readFile = require( 'utils-fs-read-file' ),
	parse = require( 'utils-json-parse' ),
	isString = require( 'validate.io-string-primitive' );


// READ JSON //

/**
* FUNCTION: readJSONSync( path[, options] )
*	Reads the entire contents of a JSON file.
*
* @param {String} path - file path
* @param {Object|String} [options] - function options
* @param {Function} [options.reviver] - JSON reviver function
* @returns {Object|Error} JSON object or an error
*/
function readJSONSync( path, options ) {
	var file,
		opts;

	if (
		arguments.length > 1 &&
		!isString( options )
	) {
		opts = options;
	} else {
		opts = {};
	}
	opts.encoding = 'utf8';
	file = readFile.sync( path, opts );
	if ( file instanceof Error ) {
		return file;
	}
	return parse( file, opts.reviver );
} // end FUNCTION readJSONSync()


// EXPORTS //

module.exports = readJSONSync;
