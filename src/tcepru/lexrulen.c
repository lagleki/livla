/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule N: giheks with KE */

/*
lexer_N_966             :  lexer_N_713  GIhEK_root_991 KE_551
                        |  lexer_N_713  GIhEK_root_991 simple_tag_971 KE_551
                        ;
*/

token *lexer_N_966_driver()
	{
	START(966);
	TRY(lexer_N_966_1);
	TRY(lexer_N_966_2);
	END;
	}

token *lexer_N_966_1()
	{
	INIT;
	CALL(GIhEK_root_991);
	IS(KE_551);
	RETURN;
	}

token *lexer_N_966_2()
	{
	INIT;
	CALL(GIhEK_root_991);
	CALL(simple_tag_971);
	IS(KE_551);
	RETURN;
	}
