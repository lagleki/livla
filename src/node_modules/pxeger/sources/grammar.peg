regex = root:full_expression
    {
        var bucket = [ ];
        root( function ( text ) { bucket.push( text ); } );
        return bucket;
    }

full_expression = first:long_expression others:( '|' expression:long_expression { return expression; } )*
    {
        var expressions = [ first ].concat( others );

        return function ( cb ) {
            expressions.forEach( function ( expression ) {
                expression( cb );
            } );
        };
    }

long_expression = expressions:( modified_expression * )
    {
        return function ( cb ) {
            var next = function ( index, string ) {
                if ( ! expressions[ index ] ) {
                    cb( string );
                } else {
                    expressions[ index ]( function ( part ) {
                        var temporaryString = string + part;
                        next( index + 1, temporaryString );
                    } );
                }
            };

            next( 0, '' );
        };
    }

modified_expression = expression:expression modifier:modifier
    {
        return function ( cb ) {
            modifier( cb, expression );
        };
    }

expression = range_expression
           / scope_expression
           / character_expression

range_expression = '[' ranges:(range *) ']'
    {
        return function ( cb ) {
            ranges.forEach( function ( range ) {
                range( cb );
            } );
        };
    }

range = range_set
      / range_character

range_set = from:([^\]-]) '-' to:([^\]-])
    {
        var from = from.charCodeAt( 0 );
        var to = to.charCodeAt( 0 );
        to = Math.max( from, to );
        return function ( cb ) {
            for ( var t = from; t <= to; ++ t ) {
                cb( String.fromCharCode( t ) );
            }
        };
    }

range_character = character:([^\]])
    {
        return function ( cb ) {
            cb( character );
        };
    }

scope_expression = '(' expression:full_expression ')'
    {
        return function ( cb ) {
            expression( cb );
        }
    }

character_expression = character:( character:[^[\](){}|?\\] { return character; }
                                 / '\\' character:.       { return character; } )
    {
        return function ( cb ) {
            cb( character );
        };
    }

modifier = ornot_modifier
         / count_modifier
         / no_modifier

count_modifier = limits:( '{' from:([0-9]+) ',' to:([0-9]+) '}' { return [from.join( '' ), to.join( '' )  ]; }
                        / '{' ',' to:([0-9]+) '}'               { return ['0',             to.join( '' )  ]; }
                        / '{' from:([0-9]+) '}'                 { return [from.join( '' ), from.join( '' )]; } )
    {
        var min = parseInt( limits[ 0 ], 10 ) || 0;
        var max = parseInt( limits[ 1 ], 10 );
        max = Math.max( min, max );
        return function ( cb, expression ) {
            var next = function ( index, max, string ) {
                if ( index === max ) {
                    cb( string );
                } else {
                    expression( function ( part ) {
                        var temporaryString = string + part;
                        next( index + 1, max, temporaryString );
                    } );
                }
            };

            for ( var t = min; t <= max; ++ t ) {
                next( 0, t, '' );
            }
        };
    }

ornot_modifier = '?'
    {
        return function ( cb, expression ) {
            cb( '' );
            expression( cb );
        };
    }

no_modifier =
    {
        return function ( cb, expression ) {
            expression( cb );
        };
    }
