/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

/* This module does filtering, removing non-parsable quoted material.
It invokes lex() and passes everything through unchanged unless it involves
"zo", "zoi", "la'o", "lo'u", or "le'u".
*/

# define NORMAL_MODE 0
# define ZO_MODE 1
# define ZOI_START_MODE 2
# define ZOI_STRING_MODE 3
# define ZOI_END_MODE 4
# define LOhU_MODE 5
# define LEhU_MODE 6

token *
filter()
	{
	static token *tok = NULL;
	static token *delim = NULL;
	static int mode = NORMAL_MODE;
	token *result;
	int zo;

	switch (mode) {
	case NORMAL_MODE:
		tok = lex();
		if (isEnd(tok)) return tok;
		if (strcmp(tok->text, "zo") == 0)
			mode = ZO_MODE;
		else if (strcmp(tok->text, "zoi") == 0)
			mode = ZOI_START_MODE;
		else if (strcmp(tok->text, "la'o") == 0)
			mode = ZOI_START_MODE;
		else if (strcmp(tok->text, "lo'u") == 0)
			mode = LOhU_MODE;
		return tok;
	case ZO_MODE:
		tok = lex();
		if (isEnd(tok)) return tok;
		tok->type = any_word_698;
		mode = NORMAL_MODE;
		return tok;
	case ZOI_START_MODE:
		tok = lex();
		if (isEnd(tok)) return tok;
		tok->type = any_word_698;
		mode = ZOI_STRING_MODE;
		delim = tok;
		return tok;
	case ZOI_STRING_MODE:
		result = newtoken();
		result->type = anything_699;
		for (;;) {
			tok = lex();
			if (isEnd(tok)) return tok;
			if (strcmp(tok->text, delim->text) == 0) break;
			tok->type = -1;
			add(result, tok);
			}
		mode = ZOI_END_MODE;
		return result;
	case ZOI_END_MODE:
		/* note: token has already been read */
		tok->type = any_word_698;
		mode = NORMAL_MODE;
		return tok;
	case LOhU_MODE:
		result = newtoken();
		result->type = any_words_697;
		zo = 0;
		for (;;) {
			tok = lex();
			if (isEnd(tok)) return tok;
			if (zo == 0 && strcmp(tok->text, "le'u") == 0) break;
			zo = (strcmp(tok->text, "zo") == 0);
			tok->type = -1;
			add(result, tok);
			}
		mode = LEhU_MODE;
		return result;
	case LEhU_MODE:
		/* note: token has already been read */
		mode = NORMAL_MODE;
		return tok;
		}
	/*NOTREACHED*/
	}
