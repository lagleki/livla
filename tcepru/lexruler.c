/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule R: giheks */

/*
lexer_R_990             :  lexer_R_718  GIhEK_root_991
                        ;


GIhEK_root_991          :  GIhA_541
                        |  SE_596  GIhA_541
                        |  NA_578  GIhA_541
                        |  GIhA_541  NAI_581
                        |  SE_596  GIhA_541  NAI_581
                        |  NA_578  GIhA_541  NAI_581
                        |  NA_578  SE_596  GIhA_541
                        |  NA_578  SE_596  GIhA_541  NAI_581
                        ;
*/

token *lexer_R_990_driver()
	{
	return cpd_reduce(GIhEK_root_991(), 990);
	}

token *GIhEK_root_991()
	{
	START(991);
	TRY(GIhEK_root_991_4);
	TRY(GIhEK_root_991_5);
	TRY(GIhEK_root_991_6);
	TRY(GIhEK_root_991_8);
	TRY(GIhEK_root_991_1);
	TRY(GIhEK_root_991_2);
	TRY(GIhEK_root_991_3);
	TRY(GIhEK_root_991_7);
	END;
	}

token *GIhEK_root_991_1()
	{
	INIT;
	IS(GIhA_541);
	RETURN;
	}

token *GIhEK_root_991_2()
	{
	INIT;
	IS(SE_596);
	IS(GIhA_541);
	RETURN;
	}

token *GIhEK_root_991_3()
	{
	INIT;
	IS(NA_578);
	IS(GIhA_541);
	RETURN;
	}

token *GIhEK_root_991_4()
	{
	INIT;
	IS(GIhA_541);
	IS(NAI_581);
	RETURN;
	}

token *GIhEK_root_991_5()
	{
	INIT;
	IS(SE_596);
	IS(GIhA_541);
	IS(NAI_581);
	RETURN;
	}

token *GIhEK_root_991_6()
	{
	INIT;
	IS(NA_578);
	IS(GIhA_541);
	IS(NAI_581);
	RETURN;
	}

token *GIhEK_root_991_7()
	{
	INIT;
	IS(NA_578);
	IS(SE_596);
	IS(GIhA_541);
	RETURN;
	}

token *GIhEK_root_991_8()
	{
	INIT;
	IS(NA_578);
	IS(SE_596);
	IS(GIhA_541);
	IS(NAI_581);
	RETURN;
	}
