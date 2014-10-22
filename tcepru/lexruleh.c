/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule H: guheks */

/*
lexer_H_940             :  lexer_H_708  GUhA_544
                        |  lexer_H_708  SE_596  GUhA_544
                        |  lexer_H_708  GUhA_544  NAI_581
                        |  lexer_H_708  SE_596  GUhA_544  NAI_581
                        ;
*/

token *lexer_H_940_driver()
	{
	START(940);
	TRY(lexer_H_940_3);
	TRY(lexer_H_940_1);
	TRY(lexer_H_940_4);
	TRY(lexer_H_940_2);
	END;
	}

token *lexer_H_940_1()
	{
	INIT;
	IS(GUhA_544);
	RETURN;
	}

token *lexer_H_940_2()
	{
	INIT;
	IS(SE_596);
	IS(GUhA_544);
	RETURN;
	}

token *lexer_H_940_3()
	{
	INIT;
	IS(GUhA_544);
	IS(NAI_581);
	RETURN;
	}

token *lexer_H_940_4()
	{
	INIT;
	IS(SE_596);
	IS(GUhA_544);
	IS(NAI_581);
	RETURN;
	}
