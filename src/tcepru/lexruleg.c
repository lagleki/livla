/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule G: geks, including gi-based geks */

/*
lexer_G_935             :  lexer_G_707  GA_537
                        |  lexer_G_707  SE_596  GA_537
                        |  lexer_G_707  GA_537  NAI_581
                        |  lexer_G_707  SE_596  GA_537  NAI_581
                        |  lexer_G_707  simple_tag_971  GIK_root_981
                        |  lexer_G_707  JOIK_root_931  GI_539
                        ;
*/

token *lexer_G_935_driver()
	{
	START(935);
	TRY(lexer_G_935_3);
	TRY(lexer_G_935_1);
	TRY(lexer_G_935_4);
	TRY(lexer_G_935_2);
	TRY(lexer_G_935_5);
	TRY(lexer_G_935_6);
	END;
	}

token *lexer_G_935_1()
	{
	INIT;
	IS(GA_537);
	RETURN;
	}

token *lexer_G_935_2()
	{
	INIT;
	IS(SE_596);
	IS(GA_537);
	RETURN;
	}

token *lexer_G_935_3()
	{
	INIT;
	IS(GA_537);
	IS(NAI_581);
	RETURN;
	}

token *lexer_G_935_4()
	{
	INIT;
	IS(SE_596);
	IS(GA_537);
	IS(NAI_581);
	RETURN;
	}

token *lexer_G_935_5()
	{
	INIT;
	CALL(simple_tag_971);
	CALL(GIK_root_981);
	RETURN;
	}

token *lexer_G_935_6()
	{
	INIT;
	CALL(JOIK_root_931);
	IS(GI_539);
	RETURN;
	}
