/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"

# include "selmao.i"

/* This module assigns cmavo to their selmao using the table in selmao.i.
Tokens are collected from filter().  Any with types already assigned 
are not looked up.
*/

int
get_vowels(text)
char *text;
	{
# define VV(n) (text[2] ? UNK_M1 : n)
# define VhV(n) (text[3] ? UNK_M1 : n)
	switch (text[0]) {
	case 'a': switch(text[1]) {
		case 0: return A;
		case '\'': switch(text[2]) {
			case 'a': return VhV(AhA);
			case 'e': return VhV(AhE);
			case 'i': return VhV(AhI);
			case 'o': return VhV(AhO);
			case 'u': return VhV(AhU);
			default: return UNK_M1;
				};
		case 'i': return VV(AI);
		case 'u': return VV(AU);
		default: return UNK_M1;
			};
	case 'e': switch(text[1]) {
		case 0: return E;
		case '\'': switch(text[2]) {
			case 'a': return VhV(EhA);
			case 'e': return VhV(EhE);
			case 'i': return VhV(EhI);
			case 'o': return VhV(EhO);
			case 'u': return VhV(EhU);
			default: return UNK_M1;
				};
		case 'i': return VV(EI);
		default: return UNK_M1;
			};
	case 'i': switch (text[1]) {
		case 0: return I;
		case '\'': switch (text[2]) {
			case 'a': return VhV(IhA);
			case 'e': return VhV(IhE);
			case 'i': return VhV(IhI);
			case 'o': return VhV(IhO);
			case 'u': return VhV(IhU);
			default: return UNK_M1;
				};
		case 'a': return VV(IA);
		case 'e': return VV(IE);
		case 'i': return VV(II);
		case 'o': return VV(IO);
		case 'u': return VV(IU);
		default: return UNK_M1;
			};
	case 'o': switch (text[1]) {
		case 0: return O;
		case '\'': switch (text[2]) {
			case 'a': return VhV(OhA);
			case 'e': return VhV(OhE);
			case 'i': return VhV(OhI);
			case 'o': return VhV(OhO);
			case 'u': return VhV(OhU);
			default: return UNK_M1;
				};
		case 'i': return VV(OI);
		default: return UNK_M1;
			};
	case 'u': switch (text[1]) {
		case 0: return U;
		case '\'': switch(text[2]) {
			case 'a': return VhV(UhA);
			case 'e': return VhV(UhE);
			case 'i': return VhV(UhI);
			case 'o': return VhV(UhO);
			case 'u': return VhV(UhU);
			default: return UNK_M1;
				};
		case 'a': return VV(UA);
		case 'e': return VV(UE);
		case 'i': return VV(UI);
		case 'o': return VV(UO);
		case 'u': return VV(UU);
		default: return UNK_M1;
			};
	case 'y':
		if (text[1] == 0) return Y;
		else if (strcmp(text, "y'y") != 0) return YhY;
		else return UNK_M1;
	default:
		return UNK_M1;
		};
	}

token *
selmao()
	{
	int i, j;
	token *result;

	result = filter();
	if (result->type != UNK_M1) return result;
	i = result->text[0];
	i = (islower(i) ? cons[i - 'a'] : 0);
	j = get_vowels(result->text + (i != 0));
	if (i && j > 34) j = UNK_M1;
		/* bumps pointer by 1 if i is nonzero (consonant) */
	if (j != UNK_M1) result->type = cmavo[i][j];
	if (result->type == UNK_M1) {
		fprintf(stderr,
"Unknown cmavo %s at line %d, column %d; selma'o UI assumed\n",
			result->text, line, column);
		result->type = UI_612;
		}
	else if (result->type == XAI_M2) {
		fprintf(stderr,
"Experimental cmavo %s at line %d, column %d; selma'o UI assumed\n",
			result->text, line, column);
		result->type = UI_612;
		}
	return result;
	}
