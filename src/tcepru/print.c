/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

/* This module provides all output facilities.
Currently, all output is to stdout, but this is easy to change.
	print(tok) uses Lisp format, rprint(tok) uses Prolog format.
	tree(tok) uses portable tree format (one line per node).
*/

FILE *stream;

extern int singlemode;

static int level = 0;
static int outcolumn = 0;

# define LDELIM ("({<[" [level++ & 3])
# define RDELIM (")}>]" [--level & 3])

void
print(tok)
token *tok;
	{
	outcolumn = level = 0;
	print1(tok);
	fprintf(stream, "\n");
	}

void
print1(tok)
token *tok;
	{
	token *p;

tail_recursion:
	if (!tok) {
		need(4, stream);
		fprintf(stream, "NULL");
		}
	else if (tok->type == 0) {
		need(3, stream);
		fprintf(stream, "EOT");
		}
	else if (tok->text) {
		need(strlen(tok->text), stream);
		fprintf(stream, "%s", tok->text);
		}
	else if (!tok->downleft) {
		need(2, stream);
		fprintf(stream, "()");
		}
	else if (!singlemode && !tok->downleft->right) {
		tok = tok->downleft;
		goto tail_recursion;
		}
	else {
		for (p = tok->downleft; p; p = p->right) {
			need(1, stream);
			fprintf(stream, "%c",
				(p == tok->downleft) ? LDELIM : ' ');
			print1(p);
			}
		need(1, stream);
		fprintf(stream, "%c", RDELIM);
		}
	}

void
rprint(tok)
token *tok;
	{
	outcolumn = level = 0;
	rprint1(tok);
	fprintf(stream, ".\n");
	}

void
rprint1(tok)
token *tok;
	{
	token *p;
	char *rule;

tail_recursion:
	if (tok && tok->type)
		rule = rulename(tok->type);
	else
		rule = NULL;
	prologize(rule);

	if (!tok) {
		need(4, stream);
		fprintf(stream, "NULL");
		}
	else if (tok->type == 0) {
		need(3, stream);
		fprintf(stream, "EOT");
		}
	else if (tok->text) {
		need(strlen(rule) + strlen(tok->text) + 2, stream);
		prologize(tok->text);
		downcase(tok->text);
		fprintf(stream, "%s(%s)", rule, tok->text);
		}
	else if (!tok->downleft) {
		need(strlen(rule) + 2, stream);
		fprintf(stream, "%s()", rule);
		}
	else if (!singlemode && !tok->downleft->right) {
		tok = tok->downleft;
		goto tail_recursion;
		}
	else {
		need(strlen(rule), stream);
		fprintf(stream, "%s", rule);
		for (p = tok->downleft; p; p = p->right) {
			need(1, stream);
			fprintf(stream, "%c",
				(p == tok->downleft) ? '(' : ',');
			rprint1(p);
			}
		need(1, stream);
		fprintf(stream, ")");
		}
	}

int magic = 0;

void
tree(tok)
token *tok;
	{
	magic = 0;
	tree1(tok);
	}

void
tree1(tok)
token *tok;
	{
	token *child;
	char *name;

	for (child = tok->downleft; child; child = child->right)
		tree1(child);
	name = rulename(tok->type);
# if 0
	if (tok->downleft && !tok->downleft->right) {
		tok->type = tok->downleft->type;
		return;
		}
# endif
	tok->type = ++magic;
	fprintf(stream, "%d\t%s", tok->type, name);
	if (tok->text)
		fprintf(stream, "\t%s", tok->text);
	else
		for (child = tok->downleft; child; child = child->right)
			fprintf(stream, "\t%d", child->type);
	fprintf(stream, "\n");
	}

void
need(n, stream)
int n;
FILE *stream;
	{

	outcolumn += n;
	if (outcolumn >= MAXLINE) {
		fprintf(stream, "\n");
		outcolumn = n;
		}
	}

void
prologize(p)
char *p;
	{
	if (!p) return;
	while (*p) {
		if (*p == '\'') *p = 'h';
		if (!isalnum(*p)) *p = '_';
		p++;
		}
	}

void
downcase(p)
char *p;
	{
	if (!p) return;
	while (*p)
		*p++ = tolower(*p);
	}
