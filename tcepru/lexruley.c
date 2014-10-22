/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule Y: numeric selbri */

/*
lexer_Y_1025            :  lexer_Y_725  number_root_961  MOI_663
                        |  lexer_Y_725  lerfu_string_root_986  MOI_663
                        ;
*/

token *lexer_Y_1025_driver()
	{
	START(1025);
	TRY(lexer_Y_1025_1);
	TRY(lexer_Y_1025_2);
	END;
	}

token *lexer_Y_1025_1()
	{
	INIT;
	CALL(number_root_961);
	IS(MOI_663);
	RETURN;
	}

token *lexer_Y_1025_2()
	{
	INIT;
	CALL(lerfu_string_root_986);
	IS(MOI_663);
	RETURN;
	}
