/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule P: giks */

/*
lexer_P_980             :  lexer_P_716  GIK_root_981
                        ;

GIK_root_981            :  GI_539
                        |  GI_539  NAI_581
                        ;
*/

token *lexer_P_980_driver()
	{
	return cpd_reduce(GIK_root_981(), 980);
	}

token *GIK_root_981()
	{
	START(981);
	TRY(GIK_root_981_2);
	TRY(GIK_root_981_1);
	END;
	}

token *GIK_root_981_1()
	{
	INIT;
	IS(GI_539);
	RETURN;
	}

token *GIK_root_981_2()
	{
	INIT;
	IS(GI_539);
	IS(NAI_581);
	RETURN;
	}
