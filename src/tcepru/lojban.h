/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include <stdio.h>
# include <string.h>
# include <stdlib.h>
# include <ctype.h>

# include "token.h"
# include "grammar.h"

# define isC(ch) (strchr("bcdfgjklmnprstvxz", (ch)) ? 1 : 0)
# define isV(ch) (strchr("aeiouy", (ch)) ? 1 : 0)

# define isEnd(tok) ((tok)->type == 0)

# define MAXLINE 75
# define QUANTUM 200
# define STRINGQUANTUM 100

extern int line;
extern int column;
extern FILE *stream;

char *getword();
void print();
void rprint();
void prologize();
void downcase();
void tree();
void print1();
void rprint1();
void tree1();
void need();
void add();
void destroy();
int makefree();
token *lex();
int iscmene();
void cmenecheck();
int isbrivla();
char *newstring();
void memcheck();
token *settype();
token *filter();
token *selmao();
token *termin();
char *rulename();
token *glue();
token *fabsorb();
int isindicator();
token *lerfu();
token *absorb();
token *gettoken();
token *fail();
void release();
token *cpd_reduce();
token *is();
token *compound();
int yylex();
int yyerror();
int main();
void setflags();
void copyright();

# include "node.h"

extern int D_valsi;
extern int D_cpd_lex;
extern int D_cpd_reduce;
extern int D_lex;
extern int D_reduce;
extern int D_elidable;

extern int interactive;

extern long stringspace;
extern long tokspace;
