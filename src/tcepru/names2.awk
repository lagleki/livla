# Copyright 1992-2003 Logical Language Group Inc.
# Licensed under the Academic Free License version 2.0
# Build the second part of the rulename.i table.  See mknames.ksh

BEGIN {
	fixup["lexer_A_905"] = "lexer_A (utterance ordinal)"
	fixup["lexer_B_910"] = "lexer_B (ek)"
	fixup["lexer_C_915"] = "lexer_C (ek with BO)"
	fixup["lexer_D_916"] = "lexer_D (ek with KE)"
	fixup["lexer_E_925"] = "lexer_E (jek)"
	fixup["lexer_F_930"] = "lexer_F (joik)"
	fixup["lexer_G_935"] = "lexer_G (gek)"
	fixup["lexer_H_940"] = "lexer_H (guhek)"
	fixup["lexer_I_945"] = "lexer_I (NAhE BO)"
	fixup["lexer_J_950"] = "lexer_J (NA KU)"
	fixup["lexer_K_955"] = "lexer_K (i with BO)"
	fixup["lexer_L_960"] = "lexer_L (number)"
	fixup["lexer_M_965"] = "lexer_M (gihek with BO)"
	fixup["lexer_N_966"] = "lexer_N (gihek with KE)"
	fixup["lexer_O_970"] = "lexer_O (tense/modal)"
	fixup["lexer_P_980"] = "lexer_P (gik)"
	fixup["lexer_Q_985"] = "lexer_Q (lerfu string)"
	fixup["lexer_R_990"] = "lexer_R (gihek)"
	fixup["lexer_S_995"] = "lexer_S (i or ijek)"
	fixup["lexer_U_1005"] = "lexer_U (jek with BO)"
	fixup["lexer_V_1010"] = "lexer_V (joik with BO)"
	fixup["lexer_W_1015"] = "lexer_W (joik with KE)"
	fixup["lexer_Y_1025"] = "lexer_Y (numeric selbri)"
	}

$1 == "#" && $2 == "define" {
	if ($3 in fixup) {
		printf "{%d, \"%s\"},\n", $4, fixup[$3]
		next
		}
	i = index($3, "_")
	name = substr($3, 1, i - 1)
	i = index(name, "h")
	if (i)
		name = substr(name, 1, i - 1) "'" substr(name, i + 1, length(name))
	printf "{%d, \"%s\"},\n", $4, name
	}

$1 == "#define" {
	if ($2 in fixup) {
		printf "{%d, \"%s\"},\n", $3, fixup[$2]
		next
		}
	i = index($2, "_")
	name = substr($2, 1, i - 1)
	i = index(name, "h")
	if (i)
		name = substr(name, 1, i - 1) "'" substr(name, i + 1, length(name))
	printf "{%d, \"%s\"},\n", $3, name
	}

END {
	print "};"
	}
