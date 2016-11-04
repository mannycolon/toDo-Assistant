'use strict';

// MODULES //

var readFile = require( 'utils-fs-read-file' ),
	parse = require( 'utils-json-parse' ),
	isString = require( 'validate.io-string-primitive' );


// READ JSON //

/**
* FUNCTION: readJSON( path[, options,] clbk )
*	Reads the entire contents of a JSON file.
*
* @param {String} path - file path
* @param {Object|String} [options] - function options
* @param {Function} [options.reviver] - JSON reviver function
* @param {Function} clbk - callback to invoke after attempting to read a JSON file
* @returns {Void}
*/
function readJSON( path, options, clbk ) {
	var done,
		opts;

	if ( arguments.length < 3 ) {
		opts = {};
		done = options;
	} else {
		if ( isString( options ) ) {
			opts = {};
		} else {
			opts = options;
		}
		done = clbk;
	}
	opts.encoding = 'utf8';
	readFile( path, opts, onRead );

	/**
	* FUNCTION: onRead( error, data )
	*	Callback invoked upon attempting to read a JSON file.
	*
	* @private
	* @param {Error|Null} error - error object
	* @param {String} data - JSON data
	* @returns {Void}
	*/
	function onRead( error, data ) {
		if ( error ) {
			return done( error );
		}
		data = parse( data, opts.reviver );
		if ( data instanceof Error ) {
			return done( data );
		}
		done( null, data );
	}
} // end FUNCTION readJSON()


// EXPORTS //

module.exports = readJSON;
