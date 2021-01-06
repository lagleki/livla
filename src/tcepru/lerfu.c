/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

/* This module does BU processing.  It invokes fabsorb() and does
1-token lookahead to detect a following BU.  The BU is absorbed into
the previous token, changing its selmao to BY.
*/

token *
lerfu()
	{
	static token *cache = NULL;
	token *tok;
	token *result;

	tok = (cache) ? cache : fabsorb();
	cache = fabsorb();
	if (cache->type == BU_511) {
		result = newtoken();
		result->type = BY_513;
		add(result, tok);
		add(result, cache);
		cache = NULL;
		return result;
		}
	else {
		return tok;
		}
	}
