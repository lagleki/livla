/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include <time.h>

/* This module provides the routines required by the YACC parser.
It also contains the main routine which drives the whole program.

yylex() is the parser's lexical analyzer.  It invokes compound() and
places the result in yylval.  yylex() returns the node type.

YYSTYPE node[1-8](type ...) are invoked while parsing.  They construct new nodes
in the parse tree and return them.  The first argument is the type of the new
YYSTYPE node; the remaining 1-8 arguments are subnodes to add to the new node.
node1 is special: it doesn't construct a new node but simply patches up the
old one.

elidable(type) returns an elidable terminator of the specified type.
Note: we hack the parser skeleton to YYABORT on real errors (which are known
because the parser state stack needs popping) before getting here.

toplevel(n1) is invoked at the top level of the parse to stash the topmost
node someplace useful.

yyerror() is invoked by the parser when an error (either a real error,
or else an elided terminator) is detected.  It stashes away the next token,
the current line, and the current column.
*/

static token *results = NULL;
static int errline;
static int errcol;
static int errtype;
static int errlastreduce = -1;
static int lastreduce = -1;

int D_valsi = 0;
int D_cpd_lex = 0;
int D_cpd_reduce = 0;
int D_lex = 0;
int D_reduce = 0;
int D_elidable = 0;

int interactive = 0;

long stringspace = 0L;
long tokspace = 0L;

int treemode = 0;
int simplemode = 0;
int elidemode = 0;
int rulemode = 0;
int singlemode = 0;

int
yylex()
	{
	extern YYSTYPE yylval;

	yylval = compound();
	if (D_lex) {
		printf("lexing (selma'o %s): ",
			rulename(yylval->type));
		print(yylval);
		}
	return yylval->type;
	}

YYSTYPE
newnode(type, n1)
int type;
YYSTYPE n1;
	{
	YYSTYPE result;

	if (0 && simplemode)	/* not yet implemented */
		result = n1;
	else {
		result = newtoken();
		add(result, n1);
		result->type = lastreduce = type;
		if (D_reduce)
			printf("reducing to %s\n", rulename(type));
		}
	return result;
	}

YYSTYPE
node1(type, n1)
int type;
YYSTYPE n1;
	{
	if (singlemode) {
		YYSTYPE result;
		result = newnode(type, n1);
		return result;
		}
	else {
		if (n1)
			n1->type = type;
		return n1;
		}
	}

YYSTYPE
node2(type, n1, n2)
int type;
YYSTYPE n1, n2;
	{
	YYSTYPE result;
	result = newnode(type, n1);
	add(result, n2);
	return result;
	}

YYSTYPE
node3(type, n1, n2, n3)
int type;
YYSTYPE n1, n2, n3;
	{
	YYSTYPE result;
	result = newnode(type, n1);
	add(result, n2);
	add(result, n3);
	return result;
	}

YYSTYPE
node4(type, n1, n2, n3, n4)
int type;
YYSTYPE n1, n2, n3, n4;
	{
	YYSTYPE result;
	result = newnode(type, n1);
	add(result, n2);
	add(result, n3);
	add(result, n4);
	return result;
	}

YYSTYPE
node5(type, n1, n2, n3, n4, n5)
int type;
YYSTYPE n1, n2, n3, n4, n5;
	{
	YYSTYPE result;
	result = newnode(type, n1);
	add(result, n2);
	add(result, n3);
	add(result, n4);
	add(result, n5);
	return result;
	}

YYSTYPE
node6(type, n1, n2, n3, n4, n5, n6)
int type;
YYSTYPE n1, n2, n3, n4, n5, n6;
	{
	YYSTYPE result;
	result = newnode(type, n1);
	add(result, n2);
	add(result, n3);
	add(result, n4);
	add(result, n5);
	add(result, n6);
	return result;
	}

YYSTYPE
node7(type, n1, n2, n3, n4, n5, n6, n7)
int type;
YYSTYPE n1, n2, n3, n4, n5, n6, n7;
	{
	YYSTYPE result;
	result = newnode(type, n1);
	add(result, n2);
	add(result, n3);
	add(result, n4);
	add(result, n5);
	add(result, n6);
	add(result, n7);
	return result;
	}

YYSTYPE
node8(type, n1, n2, n3, n4, n5, n6, n7, n8)
int type;
YYSTYPE n1, n2, n3, n4, n5, n6, n7, n8;
	{
	YYSTYPE result;
	result = newnode(type, n1);
	add(result, n2);
	add(result, n3);
	add(result, n4);
	add(result, n5);
	add(result, n6);
	add(result, n7);
	add(result, n8);
	return result;
	}

YYSTYPE
elidable(type)
int type;
	{
	YYSTYPE result;
	char *text;

	if (elidemode) {
		result = NULL;
		return result;
		}
	result = newtoken();
	text = rulename(type);
	result->type = type;
	if (type == FAhO_529)
		result->text = "/FA'O/";
	else
		result->text = text;
	if (D_elidable)
		printf("inserting elided %s (%d)\n", text, type);
	return result;
	}

YYSTYPE
toplevel(n1)
YYSTYPE n1;
	{
	results = n1;
	return n1;
	}

yyerror(msg)
char *msg;
	{
	errline = line;
	errcol = column;
/*	errtype = yytoken; */
	errlastreduce = lastreduce;
	}


int
main(argc, argv)
int argc;
char **argv;
	{
	time_t starttime, endtime;

	stream = stdout;
	setflags(argv);
	copyright();
	interactive = isatty(0);
	time(&starttime);
	if (interactive)
		fprintf(stderr, ">>> ");
	if (!yyparse())
		if (treemode)
			tree(results);
		else if (rulemode)
			rprint(results);
		else
			print(results);
	else {
		fprintf(stderr,
"Problem with selma'o %s at or before line %d column %d\n",
			rulename(errtype), errline, errcol);
		fprintf(stderr, "Last good construct was: %s\n",
			rulename(errlastreduce));
		}
	fprintf(stderr,
		"Space used: %ld bytes for tokens, %ld bytes for strings\n",
		tokspace, stringspace);
	if (interactive) {
		fprintf(stderr, "\n");
		execv(argv[0], argv);
		execv(getenv("PARSER"), argv);
		fprintf(stderr, "can't reload parser: set PARSER variable\n");
		return 1;
		}
	time(&endtime);
	fprintf(stderr, "Time used: %ld seconds\n", endtime - starttime);
	return 0;
	}

void
setflags(argv)
char **argv;
	{
	char *arg;

	for (argv++; *argv; argv++)
		if (strncmp(*argv, "-d", 2) == 0)
			for (arg = *argv; *arg; arg++)
				switch (*arg) {
				case 'v': D_valsi = 1; break;
				case 'L': D_cpd_lex = 1; break;
				case 'R': D_cpd_reduce = 1; break;
				case 'l': D_lex = 1; break;
				case 'r': D_reduce = 1; break;
				case 'e': D_elidable = 1; break;
				case '*': D_valsi = D_cpd_lex = D_cpd_reduce =
					D_lex = D_reduce = D_elidable = 1; break;
					}
		else if (strcmp(*argv, "-t") == 0)
			treemode = 1;
		else if (strcmp(*argv, "-s") == 0)
			simplemode = 1;
		else if (strcmp(*argv, "-e") == 0)
			elidemode = 1;
		else if (strcmp(*argv, "-f") == 0)
			singlemode = 1;
		else if (strcmp(*argv, "-p") == 0)
			rulemode = 1;
		else if (strcmp(*argv, "-c") == 0) {
			mkcmavo();
			exit(0);
			}
		else if ((*argv)[0] != '-')
			freopen(*argv, "r", stdin);
	}
