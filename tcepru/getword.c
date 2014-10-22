/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

/* This module picks words out of the standard input stream.  It treats
whitespace and "." as word separators, mashes upper case to lower case,
converts digits to appropriate cmavo, and blows away all else.   Text between
slashes is treated as comments (possibly English translations) and discarded.

Getword returns a pointer to a static buffer which will be overwritten by
successive calls, or else NULL (which means end of file).
Line and column numbers are tracked for error recovery.
Getword remembers EOF on input and does not re-examine the input stream.
*/

static int eof = 0;
int line = 1;
int column = 0;

char *digits[] = {"no", "pa", "re", "ci", "vo", "mu", "xa", "ze", "bi", "so"};

char *
getword()
	{
	static char buffer[256];
	char *p;
	int ch;

	if (eof) return NULL;
	p = buffer;
	for(;;) {
		ch = getchar();
		column++;
		if (ch == '\n') {
			column = 0;
			line++;
			if (interactive) {
				eof = 1;
				*p = 0;
				return (p != buffer) ? buffer : NULL;
				}
			}
		if (ch == EOF) {
			if (interactive) exit(0);
			eof = 1;
			*p = 0;
			return (p != buffer) ? buffer : NULL;
			}
		else if (isspace(ch) || ch == '.') {
			*p = 0;
			if (p != buffer) return buffer;
			}
		else if (isupper(ch)) {
			*p++ = tolower(ch);
			}
		else if (islower(ch) || ch == '\'') {
			*p++ = ch;
			}
		else if (ch == '/') {
			while ((ch = getchar()) != EOF)
				if (ch == '/') break;
			}
		else if (ch == '\\') {
			ch = getchar();
			if (ch != '\n')
				ungetc(ch, stdin);
			else {
				column = 0;
				line++;
				}
			}
		else if (isdigit(ch)) {
			strcpy(p, digits[ch - '0']);
			p += 2;
			}
		}
	}
