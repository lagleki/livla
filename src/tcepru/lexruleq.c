/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule Q: letteral strings */

/*
lexer_Q_985             :  lexer_Q_717  lerfu_string_root_986
                        ;

lerfu_string_root_986   :  lerfu_word_987
                        |  lerfu_string_root_986  lerfu_word_987
                        |  lerfu_string_root_986  PA_672
                        ;

lerfu_word_987                  :  BY_513
                        |  LAU_559  lerfu_word_987
			|  TEI_605  lerfu_string_root_986  FOI_533
                        ;

*/

token *lexer_Q_985_driver()
	{
	return cpd_reduce(lerfu_string_root_986(), 985);
	}

token *lerfu_string_root_986()
	{
	token *result;
	token *tok;

	result = newtoken();
	tok = lerfu_word_987();
	if (!tok) return fail(result);
	add(result, tok);
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
			return cpd_reduce(result, 986);
			}
		}
	}

token *lerfu_word_987()
	{
	START(987);
	TRY(lerfu_word_987_1);
	TRY(lerfu_word_987_2);
	TRY(lerfu_word_987_3);
	END;
	}

token *lerfu_word_987_1()
	{
	INIT;
	IS(BY_513);
	RETURN;
	}

token *lerfu_word_987_2()
	{
	INIT;
	IS(LAU_559);
	CALL(lerfu_word_987);
	RETURN;
	}

token *lerfu_word_987_3()
	{
	INIT;
	IS(TEI_605);
	CALL(lerfu_string_root_986);
	IS(FOI_533);
	RETURN;
	}
