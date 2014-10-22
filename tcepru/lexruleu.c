/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule U: jeks with BO */

/*
lexer_U_1005            :  lexer_U_721  JEK_root_926  BO_508
                        |  lexer_U_721  JEK_root_926  simple_tag_971  BO_508
                        ;
*/


token *lexer_U_1005_driver()
	{
	START(1005);
	TRY(lexer_U_1005_2);
	TRY(lexer_U_1005_1);
	END;
	}

token *lexer_U_1005_1()
	{
	INIT;
	CALL(JEK_root_926);
	IS(BO_508);
	RETURN;
	}

token *lexer_U_1005_2()
	{
	INIT;
	CALL(JEK_root_926);
	CALL(simple_tag_971);
	IS(BO_508);
	RETURN;
	}
