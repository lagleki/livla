/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "version.h"

void
copyright()
	{
	fprintf(stderr, "3;0;");
	/* VERSION is a string, so VERSION + 1 strips the first character */
	fprintf(stderr, VERSION + 1);
	fprintf(stderr, "moi ke lojbo genturfa'i\n");
	fprintf(stderr,
"Copyright 1991,1992,1993 The Logical Languages Group, Inc.  All Rights Reserved\n");
	}
