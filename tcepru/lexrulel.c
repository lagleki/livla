/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule L: simple numbers */

/*
lexer_L_960             :  lexer_L_712  number_root_961
                        ;


number_root_961         :  PA_672
                        |  number_root_961  PA_672
                        |  number_root_961  lerfu_word_987
                        ;
*/

token *lexer_L_960_driver()
	{
	return cpd_reduce(number_root_961(), 960);
	}

token *number_root_961()
	{
	INIT;
	IS(PA_672);
	for (;;) {
		tok = gettoken();
		switch (tok->type) {
		case PA_672:
			add(result, tok);
			break;
		case BY_513: case LAU_559: case TEI_605:
			fail(tok);
			tok = lerfu_word_987();
			add(result, tok);
			break;
		default:
			fail(tok);
			RETURN;
			}
		}
	}
