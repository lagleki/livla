var FS  = require( 'fs' );
var PEG = require( 'pegjs' );

var parser = PEG.buildParser( FS.readFileSync( __dirname + '/grammar.peg' ).toString( 'utf-8' ) );

exports.reverse = function ( pxeger ) {
    return parser.parse( pxeger );
};
