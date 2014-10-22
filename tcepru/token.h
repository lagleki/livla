/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

/* This is the fundamental datatype used by the parser, representing each
level in the parse tree. newtoken() is a macro which returns a token.
*/

typedef struct _token {
	int type;		/* token type from y.tab.h, or rule number */
	char *text;		/* text of token (an allocated string) */
	struct _token *up;	/* pointer to parent token */
	struct _token *right;	/* pointer to right-sibling token */
	struct _token *downleft;	/* pointer to leftmost child token */
	struct _token *downright;	/* pointer to rightmost child token */
	struct _token *next;		/* pointer to next token in queue */
	} token;

typedef token *ptoken;
# define YYSTYPE ptoken

extern token * newtoken_result;
extern token * freelist;

#define newtoken() \
	( \
	(freelist ? 0 : makefree()), \
	newtoken_result = freelist, \
	freelist = freelist->next, \
	newtoken_result->type = -1, \
	newtoken_result->text = NULL, \
	newtoken_result->up = newtoken_result->right = newtoken_result->next = \
		newtoken_result->downleft = newtoken_result->downright = NULL, \
	newtoken_result )
