/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

/* This module does absorption of forethought indicators.
It invokes glue() and watches for BAhE tokens.
If found, the next token is read and the BAhE is absorbed
into it, passing up the type of the following token as the 
type of the compound.

*/

token *
fabsorb()
	{
	token *result;
	token *tok;
	token *absorber;

	tok = glue();
	if (tok->type == BAhE_503) {
		absorber = fabsorb();
		if (isEnd(absorber)) {
			return tok;
			}
		result = newtoken();
		add(result, tok);
		add(result, absorber);
		result->type = absorber->type;
		return result;
		}
	return tok;
	}
