%start toplevel

%{
# include "token.h"
# include "node.h"
%}

%%

toplevel                :  text_0  FAhO_529
                           { $$ = toplevel($1); }
                        ;
