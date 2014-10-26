/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule V: joiks with BO */

/*
lexer_V_1010            :  lexer_V_722  JOIK_root_931  BO_508
                        |  lexer_V_722  JOIK_root_931  simple_tag_971  BO_508
                        ;
*/


token *lexer_V_1010_driver()
	{
	START(1010);
	TRY(lexer_V_1010_2);
	TRY(lexer_V_1010_1);
	END;
	}

token *lexer_V_1010_1()
	{
	INIT;
	CALL(JOIK_root_931);
	IS(BO_508);
	RETURN;
	}

token *lexer_V_1010_2()
	{
	INIT;
	CALL(JOIK_root_931);
	CALL(simple_tag_971);
	IS(BO_508);
	RETURN;
	}
