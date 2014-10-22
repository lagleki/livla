/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

/* This module handles lujvo glue.  It invokes termin() and does
1-token lookahead to watch for ZEI.  If found, the ZEI and the following
token are absorbed into the previous token.  The result is given type BRIVLA.
*/

token *
glue()
	{
	static token *cache = NULL;
	token *tok;
	token *result;

	tok = (cache) ? cache : termin();
	if (isEnd(tok)) return tok;
	result = NULL;
	for (;;) {
		cache = termin();
		if (cache->type != ZEI_623)
			break;
		else if (!result) {
			result = newtoken();
			result->type = BRIVLA_509;
			add(result, tok);
			}
		add(result, cache);
		add(result, termin());
		}
	return (result) ? result : tok;
	}
