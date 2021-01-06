/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule W: joiks with KE */

/*
lexer_W_1015            :  lexer_V_722  JOIK_root_931  KE_551
                        |  lexer_W_722  JOIK_root_931  simple_tag_971  KE_551
                        ;
*/


token *lexer_W_1015_driver()
	{
	START(1015);
	TRY(lexer_W_1015_2);
	TRY(lexer_W_1015_1);
	END;
	}

token *lexer_W_1015_1()
	{
	INIT;
	CALL(JOIK_root_931);
	IS(KE_551);
	RETURN;
	}

token *lexer_W_1015_2()
	{
	INIT;
	CALL(JOIK_root_931);
	CALL(simple_tag_971);
	IS(KE_551);
	RETURN;
	}
