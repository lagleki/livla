/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

char *cc[18] = {".", "b", "c", "d", "f", "g", "j", "k", "l", "m", "n",
	"p", "r", "s", "t", "v", "x", "z"};

char *vc[46] = {
	"a", "a'a", "a'e", "a'i", "a'o", "a'u", "ai", "au", "e", "e'a", 
	"e'e", "e'i", "e'o", "e'u", "ei", "i", "i'a", "i'e", "i'i", "i'o", 
	"i'u", "o", "o'a", "o'e", "o'i", "o'o", "o'u", "oi", "u", "u'a", 
	"u'e", "u'i", "u'o", "u'u", "y", "ia", "ie", "ii", "io", "iu", 
	"ua", "ue", "ui", "uo", "uu", "y'y"
	};

mkcmavo() {
	int i, j, type;
	char *rule;
	char *apos;
	extern int *cmavo[];

	for (i = 0; i < 18; i++)
		for (j = 0; j < ((i == 0) ? 46 : 35); j++) {
			type = cmavo[i][j];
			if (type < 0) continue;
			rule = rulename(type);
			apos = strchr(rule, '\'');
			if (apos) *apos = 'h';
			printf("%1.1s%-8.8s %-8.8s\n", cc[i], vc[j], rule);
			}
	}
