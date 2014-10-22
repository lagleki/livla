/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule F: joiks */

/*
lexer_F_930             :  lexer_F_706  JOIK_root_931
                        ;

JOIK_root_931           :  JOI_548
                        |  JOI_548  NAI_581
                        |  SE_596  JOI_548
                        |  SE_596  JOI_548  NAI_581
                        |  BIhI_root_932
			|  GAhO_656  BIhI_root_932  GAhO_656
                        ;

BIhI_root_932           :  BIhI_507
                        |  BIhI_507  NAI_581
                        |  SE_596  BIhI_507
                        |  SE_596  BIhI_507  NAI_581
                        ;
*/

token *lexer_F_930_driver()
	{
	return cpd_reduce(JOIK_root_931(), 930);
	}

token *JOIK_root_931()
	{
	START(931);
	TRY(JOIK_root_931_2);
	TRY(JOIK_root_931_1);
	TRY(JOIK_root_931_4);
	TRY(JOIK_root_931_3);
	TRY(JOIK_root_931_5);
	TRY(JOIK_root_931_6);
	END;
	}

token *JOIK_root_931_1()
	{
	INIT;
	IS(JOI_548);
	RETURN;
	}

token *JOIK_root_931_2()
	{
	INIT;
	IS(JOI_548);
	IS(NAI_581);	
	RETURN;
	}

token *JOIK_root_931_3()
	{
	INIT;
	IS(SE_596);
	IS(JOI_548);
	RETURN;
	}

token *JOIK_root_931_4()
	{
	INIT;
	IS(SE_596);
	IS(JOI_548);
	IS(NAI_581);
	RETURN;
	}

token *JOIK_root_931_5()
	{
	INIT;
	CALL(BIhI_root_932);
	RETURN;
	}

token *JOIK_root_931_6()
	{
	INIT;
	IS(GAhO_656);
	CALL(BIhI_root_932);
	IS(GAhO_656);
	RETURN;
	}

token *BIhI_root_932()
	{
	START(932);
	TRY(BIhI_root_932_2);
	TRY(BIhI_root_932_1);
	TRY(BIhI_root_932_4);
	TRY(BIhI_root_932_3);
	END;
	}

token *BIhI_root_932_1()
	{
	INIT;
	IS(BIhI_507);
	RETURN;
	}

token *BIhI_root_932_2()
	{
	INIT;
	IS(BIhI_507);
	IS(NAI_581);
	RETURN;
	}

token *BIhI_root_932_3()
	{
	INIT;
	IS(SE_596);
	IS(BIhI_507);
	RETURN;
	}

token *BIhI_root_932_4()
	{
	INIT;
	IS(SE_596);
	IS(BIhI_507);
	IS(NAI_581);
	RETURN;
	}
