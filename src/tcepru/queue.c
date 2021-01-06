/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

/* This module supports a queue of tokens with support for backtracking.
gettoken() invokes absorb() and returns tokens without modification.
However, if there are any tokens on the pushback list, they will be used first.

fail(tok) is used to cause backtracking failure.  The argument, tok, is
scanned recursively, and all selmao-level tokens are pushed onto the
front of the pushback queue (preserving their order).  Fail() returns NULL.

is(type, result) gets the next token and adds it to result.  If it has the
specified type, return it; otherwise, return NULL to provoke backtracking.

cpd_reduce(result, type) does a settype() and outputs debugging info.
*/

static token *pushback = NULL;
static token *head = NULL;
static token *tail = NULL;

token *
gettoken()
	{
	token *result;

	if (pushback) {
		result = pushback;
		pushback = pushback->next;
		result->next = NULL;
		}
	else {
		result = absorb();
		if (D_cpd_lex) {
			printf("compounder lexing: ");
			print(result);
			}
		}
	return result;
	}

token *
fail(tok)
token *tok;
	{
	int type;

	type=tok->type;
	if (D_cpd_reduce && type != -1)
		printf("failure at %s (%d) ... backtracking\n",
			rulename(tok->type), tok->type);
	head = tail = NULL;
	release(tok);
	if (head) {
		tail->next = pushback;
		pushback = head;
		}
	return NULL;
	}

void
release(tok)
token *tok;
	{
	token *p;
	token *nextp;
	int type;

	type = tok->type;
	if (type == 0 || (type >= 500 && type <= 699)) {
		if (tail)
			tail->next = tok;
		else
			head = tok;
		tail = tok;
		tok->right = tok->up = tok->next = NULL;
		}
	else {
		for (p = tok->downleft; p; p = nextp) {
			nextp = p->right;
			release(p);
			}
		destroy(tok);
		}
	}

token *
is(type, result)
int type;
token *result;
	{
	token *tok;

	tok = gettoken();
	add(result, tok);
	return (tok->type == type) ? tok : NULL;
	}

token *
cpd_reduce(tok, type)
token *tok;
int type;
	{
	if (tok) {
		tok->type = type;
		if (D_cpd_reduce)
			printf("compounder reduced %s (%d)\n",
				rulename(type), type);
		}
	return tok;
	}
