/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule B: eks */

/*
lexer_B_910             :  lexer_B_702  EK_root_911
                        ;

EK_root_911             :  A_501
                        |  SE_596  A_501
                        |  NA_578  A_501
                        |  A_501  NAI_581
                        |  SE_596  A_501  NAI_581
                        |  NA_578  A_501  NAI_581
                        |  NA_578  SE_596  A_501
                        |  NA_578  SE_596  A_501  NAI_581
                        ;
*/

token *lexer_B_910_driver()
	{
	return cpd_reduce(EK_root_911(), 910);
	}

token *EK_root_911()
	{
	START(911);
	TRY(EK_root_911_4);
	TRY(EK_root_911_5);
	TRY(EK_root_911_6);
	TRY(EK_root_911_8);
	TRY(EK_root_911_1);
	TRY(EK_root_911_2);
	TRY(EK_root_911_3);
	TRY(EK_root_911_7);
	END;
	}

token *EK_root_911_1()
	{
	INIT;
	IS(A_501);
	RETURN;
	}

token *EK_root_911_2()
	{
	INIT;
	IS(SE_596);
	IS(A_501);
	RETURN;
	}

token *EK_root_911_3()
	{
	INIT;
	IS(NA_578);
	IS(A_501);
	RETURN;
	}

token *EK_root_911_4()
	{
	INIT;
	IS(A_501);
	IS(NAI_581);
	RETURN;
	}

token *EK_root_911_5()
	{
	INIT;
	IS(SE_596);
	IS(A_501);
	IS(NAI_581);
	RETURN;
	}

token *EK_root_911_6()
	{
	INIT;
	IS(NA_578);
	IS(A_501);
	IS(NAI_581);
	RETURN;
	}

token *EK_root_911_7()
	{
	INIT;
	IS(NA_578);
	IS(SE_596);
	IS(A_501);
	RETURN;
	}

token *EK_root_911_8()
	{
	INIT;
	IS(NA_578);
	IS(SE_596);
	IS(A_501);
	IS(NAI_581);
	RETURN;
	}
