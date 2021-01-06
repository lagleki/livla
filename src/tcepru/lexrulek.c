/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule K: ijek with BO */

/*
lexer_K_955             :  lexer_K_711  I_root_956  BO_508
                        |  lexer_K_711  I_root_956  simple_tag_971  BO_508
                        ;

I_root_956              :  I_545
                        |  I_545  simple_JOIK_JEK_957
                        ;


simple_JOIK_JEK_957     :  JOIK_806
                        |  JEK_805
                        ;
*/

token *lexer_K_955_driver()
	{
	START(955);
	TRY(lexer_K_955_1);
	TRY(lexer_K_955_2);
	END;
	}

token *lexer_K_955_1()
	{
	INIT;
	CALL(I_root_956);
	IS(BO_508);
	RETURN;
	}

token *lexer_K_955_2()
	{
	INIT;
	CALL(I_root_956);
	CALL(simple_tag_971);
	IS(BO_508);
	RETURN;
	}

token *I_root_956()
	{
	START(956);
	TRY(I_root_956_2);
	TRY(I_root_956_1);
	END;
	}

token *I_root_956_1()
	{
	INIT;
	IS(I_545);
	RETURN;
	}

token *I_root_956_2()
	{
	INIT;
	IS(I_545);
	CALL(simple_JOIK_JEK_957);
	RETURN;
	}

token *simple_JOIK_JEK_957()
	{
	START(957);
	TRY(JOIK_root_931);
	TRY(JEK_root_926);
	END;
	}
