/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

/* This module guarantees proper termination.  It calls selmao() and passes
through the tokens unchanged, except that if the current token is EOT and
the last token was not FAhO, a FAhO is generated.  After any FAhO, whether
real or generated, only EOT tokens will be returned.
*/

token *
termin()
	{
	token *tok;
	static int lasttype = -1;

	if (lasttype == FAhO_529) {
		tok = newtoken();
		tok->type = 0;
		return tok;
		}
	tok = selmao();
	if (tok->type == 0) {
		tok = newtoken();
		tok->type = FAhO_529;
		tok->text = newstring(7);
		strcpy(tok->text, "(fa'o)");
		}
	lasttype = tok->type;
	return tok;
	}
