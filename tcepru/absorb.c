/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

/* This module does indicator processing.  It invokes lerfu() and does
1-token lookahead to watch for following indicators.  If found, they
are absorbed into the previous token.  Indicators belong to selmao
UI, CAI, Y, DAhO, FUhE, or FUhO.  UI and CAI can also have a
following NAI, which is checked for and absorbed as well.
*/

token *
absorb()
	{
	static token *cache = NULL;
	token *tok;
	token *result;
	int lasttype;

	tok = (cache) ? cache : lerfu();
	if (isEnd(tok)) return tok;
	result = NULL;
	while (isindicator(cache = lerfu())) {
		if (cache->type == NAI_581) {
			if (!result) break;
			lasttype = result->downright->type;
			if (lasttype != UI_612 && lasttype != CAI_515) break;
			}
		if (!result) {
			result = newtoken();
			result->type = tok->type;
			add(result, tok);
			}
		add(result, cache);
		}
	return (result) ? result : tok;
	}

int
isindicator(tok)
token *tok;
	{
	switch (tok->type) {
	case UI_612:
	case CAI_515:
	case Y_619:
	case DAhO_524:
	case FUhO_536:
	case FUhE_535:
	case NAI_581:
		return 1;
	default:
		return 0;
		}
	}
