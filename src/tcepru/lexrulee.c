/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule E: jeks */

/*
lexer_E_925             :  lexer_E_705  JEK_root_926
                        ;

JEK_root_926            :  JA_546
                        |  JA_546  NAI_581
                        |  NA_578  JA_546
                        |  NA_578  JA_546  NAI_581
                        |  SE_596  JA_546
                        |  SE_596  JA_546  NAI_581
                        |  NA_578  SE_596  JA_546
                        |  NA_578  SE_596  JA_546  NAI_581
                        ;
*/

token *lexer_E_925_driver()
	{
	return cpd_reduce(JEK_root_926(), 925);
	}

token *JEK_root_926()
	{
	START(926);
	TRY(JEK_root_926_4);
	TRY(JEK_root_926_5);
	TRY(JEK_root_926_6);
	TRY(JEK_root_926_8);
	TRY(JEK_root_926_1);
	TRY(JEK_root_926_2);
	TRY(JEK_root_926_3);
	TRY(JEK_root_926_7);
	END;
	}

token *JEK_root_926_1()
	{
	INIT;
	IS(JA_546);
	RETURN;
	}

token *JEK_root_926_2()
	{
	INIT;
	IS(SE_596);
	IS(JA_546);
	RETURN;
	}

token *JEK_root_926_3()
	{
	INIT;
	IS(NA_578);
	IS(JA_546);
	RETURN;
	}

token *JEK_root_926_4()
	{
	INIT;
	IS(JA_546);
	IS(NAI_581);
	RETURN;
	}

token *JEK_root_926_5()
	{
	INIT;
	IS(SE_596);
	IS(JA_546);
	IS(NAI_581);
	RETURN;
	}

token *JEK_root_926_6()
	{
	INIT;
	IS(NA_578);
	IS(JA_546);
	IS(NAI_581);
	RETURN;
	}

token *JEK_root_926_7()
	{
	INIT;
	IS(NA_578);
	IS(SE_596);
	IS(JA_546);
	RETURN;
	}

token *JEK_root_926_8()
	{
	INIT;
	IS(NA_578);
	IS(SE_596);
	IS(JA_546);
	IS(NAI_581);
	RETURN;
	}
