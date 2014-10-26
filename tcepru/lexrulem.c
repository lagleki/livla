/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule M: giheks with BO */

/*
lexer_M_965             :  lexer_M_713  GIhEK_root_991 BO_508
                        |  lexer_M_713  GIhEK_root_991 simple_tag_971 BO_508
                        ;
*/

token *lexer_M_965_driver()
	{
	START(965);
	TRY(lexer_M_965_1);
	TRY(lexer_M_965_2);
	END;
	}

token *lexer_M_965_1()
	{
	INIT;
	CALL(GIhEK_root_991);
	IS(BO_508);
	RETURN;
	}

token *lexer_M_965_2()
	{
	INIT;
	CALL(GIhEK_root_991);
	CALL(simple_tag_971);
	IS(BO_508);
	RETURN;
	}
