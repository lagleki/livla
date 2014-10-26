# Copyright 1992-2003 Logical Language Group Inc.
# Licensed under the Academic Free License version 2.0
# Build the first part of the rulename.i table.  See mknames.ksh.

BEGIN {
	print "# define RULECOUNT ###"
	print "struct {int type; char *text;} rulenames[RULECOUNT] = {"
	print "{0, \"EOT\"},"
	}

/:/ {
	rulename = $1
	tmpFS = FS
	FS = "_"
	i = split($1, rulenames)
	FS = tmpFS
	if (rulenames[1] == "lexer") next
	ruleno = rulenames[i]
	if (ruleno == 0) ruleno = 10000
	printf "{%d, \"%s\"},\n", ruleno, rulename
	}
