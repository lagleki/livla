/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule A: utterance ordinals */

/*
lexer_A_905             :  lexer_A_701  utt_ordinal_root_906
                        ;
*/

token *lexer_A_905_driver()
	{
	return cpd_reduce(utt_ordinal_root_906(), 905);
	}


/*
utt_ordinal_root_906    :  lerfu_string_root_986  MAI_661
                        |  number_root_961  MAI_661
                        ;
*/

token *utt_ordinal_root_906()
	{
	START(906);
	TRY(utt_ordinal_root_906_1);
	TRY(utt_ordinal_root_906_2);
	END;
	}

token *utt_ordinal_root_906_1()
	{
	INIT;
	CALL(lerfu_string_root_986);
	IS(MAI_661);
	RETURN;
	}

token *utt_ordinal_root_906_2()
	{
	INIT;
	CALL(number_root_961);
	IS(MAI_661);
	RETURN;
	}
