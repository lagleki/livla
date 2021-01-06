/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule C: eks with BO */

/*
lexer_C_915             :  lexer_C_703  EK_root_911  BO_508
                        |  lexer_C_703  EK_root_911  simple_tag_971  BO_508
                        ;
*/

token *lexer_C_915_driver()
	{
	START(915);
	TRY(lexer_C_915_1);
	TRY(lexer_C_915_2);
	END;
	}

token *lexer_C_915_1()
	{
	INIT;
	CALL(EK_root_911);
	IS(BO_508);
	RETURN;
	}

token *lexer_C_915_2()
	{
	INIT;
	CALL(EK_root_911);
	CALL(simple_tag_971);
	IS(BO_508);
	RETURN;
	}
