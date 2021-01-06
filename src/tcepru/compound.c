/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* This module invokes the lexer rule drivers to try to make compounds.
If all of them fail, it calls gettoken() and returns it.
*/

/* Note: the following defines specify the ordering constraints needed for
recursive-descent compounding: longest first. */

# define A lexer_A_905_driver
# define C lexer_C_915_driver
# define D lexer_D_916_driver
# define B lexer_B_910_driver
# define U lexer_U_1005_driver
# define E lexer_E_925_driver
# define H lexer_H_940_driver
# define I lexer_I_945_driver
# define J lexer_J_950_driver
# define K lexer_K_955_driver
# define M lexer_M_965_driver
# define N lexer_N_966_driver
# define G lexer_G_935_driver
# define O lexer_O_970_driver
# define V lexer_V_1010_driver
# define W lexer_W_1015_driver
# define F lexer_F_930_driver
# define P lexer_P_980_driver
# define R lexer_R_990_driver
# define S lexer_S_995_driver
# define Y lexer_Y_1025_driver
# define L lexer_L_960_driver
# define Q lexer_Q_985_driver

# define TEST(x) \
	tok = x(); \
	if (tok) return tok;


token *
compound()
	{
	int type;
	token *tok;

	tok = gettoken();
	type = tok->type;
	fail(tok);
	switch (type) {
	case A_501:
		TEST(C); TEST(D); TEST(B); break;
	case BAI_502:
		TEST(G); TEST(O); break;
	case BIhI_507:
		TEST(G); TEST(V); TEST(W); TEST(F); break;
	case BY_513:
		TEST(A); TEST(Y); TEST(Q); break;
	case CAhA_514:
		TEST(G); TEST(O); break;
	case CUhE_522:
		TEST(G); TEST(O); break;
	case FAhA_528:
		TEST(G); TEST(O); break;
	case FEhE_530:
		TEST(G); TEST(O); break;
	case GA_537:
		TEST(G); break;
	case GI_539:
		TEST(P); break;
	case GIhA_541:
		TEST(M); TEST(N); TEST(R); break;
	case GUhA_544:
		TEST(H); break;
	case I_545:
		TEST(K); TEST(S); break;
	case JA_546:
		TEST(U); TEST(E); break;
	case JOI_548:
		TEST(G); TEST(V); TEST(W); TEST(F); break;
	case KI_554:
		TEST(G); TEST(O); break;
	case LAU_559:
		TEST(A); TEST(Y); TEST(Q); break;
	case MOhI_577:
		TEST(G); TEST(O); break;
	case NA_578:
		TEST(C); TEST(D); TEST(B); TEST(U); TEST(E); TEST(J); TEST(M);
		TEST(N); TEST(R); break;
	case NAhE_583:
		TEST(I); TEST(G); TEST(O); break;
	case PU_592:
		TEST(G); TEST(O); break;
	case SE_596:
		TEST(C); TEST(D); TEST(B); TEST(U); TEST(E); TEST(H); TEST(M);
		TEST(N); TEST(G); TEST(O); TEST(V); TEST(W); TEST(F);
		TEST(R); break;
	case TAhE_604:
		TEST(G); TEST(O); break;
	case TEI_605:
		TEST(A); TEST(Y); TEST(Q); break;
	case VA_613:
		TEST(G); TEST(O); break;
	case VEhA_615:
		TEST(G); TEST(O); break;
	case VIhA_616:
		TEST(G); TEST(O); break;
	case ZAhO_621:
		TEST(G); TEST(O); break;
	case ZEhA_622:
		TEST(G); TEST(O); break;
	case ZI_624:
		TEST(G); TEST(O); break;
	case GAhO_656:
		TEST(G); TEST(V); TEST(W); TEST(F); break;
	case PA_672:
		TEST(A); TEST(Y); TEST(O); TEST(L); break;
		}
	return gettoken();
	}
