/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

/* This module provides token utilities:
	newtoken() returns a newly allocated and initialized token.
		(This is a macro residing in token.h)
	add(parent, child) adds child as the rightmost child of parent.
	destroy(tok) releases a token to the freelist.
	settype(tok, type) sets tok's type to type and returns it
		settype returns NULL if tok is NULL
	makefree() manufactures new tokens for the freelist.
*/

token *newtoken_result = NULL;
token *freelist = NULL;


void
add(parent, child)
token *parent;
token *child;
	{
	if (!child) return;
	child->up = parent;
	if (parent->downleft)
		parent->downright->right = child;
	else
		parent->downleft = child;
	parent->downright = child;
	}

void
destroy(tok)
token *tok;
	{
	tok->next = freelist;
	freelist = tok;
	}

token *
settype(tok, type)
token *tok;
int type;
	{
	if (tok) tok->type = type;
	return tok;
	}

int
makefree()
	{
	int i;

	freelist = (token *) malloc(sizeof(token) * QUANTUM);
	memcheck(freelist, "token");
	for (i = 0; i < QUANTUM - 1; i++)
		freelist[i].next = &freelist[i+1];
	freelist[QUANTUM-1].next = NULL;
	tokspace += sizeof(token) * QUANTUM;
	return 0;
	}
