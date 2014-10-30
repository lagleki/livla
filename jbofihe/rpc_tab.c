extern elide_trace_reduce(int, int);
extern elide_trace_shift(int,int);
extern report_trace_shift(int);
extern report_trace_reduce(int, int);
extern report_trace_error(short *yyss, short *yyssp);
/* A Bison parser, made by GNU Bison 2.6.4.  */

/* Bison implementation for Yacc-like parsers in C
   
      Copyright (C) 1984, 1989-1990, 2000-2012 Free Software Foundation, Inc.
   
   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.  */

/* As a special exception, you may create a larger work that contains
   part or all of the Bison parser skeleton and distribute that work
   under terms of your choice, so long as that work isn't itself a
   parser generator using the skeleton or a modified version thereof
   as a parser skeleton.  Alternatively, if you modify or redistribute
   the parser skeleton itself, you may (at your option) remove this
   special exception, which will cause the skeleton and the resulting
   Bison output files to be licensed under the GNU General Public
   License without this special exception.
   
   This special exception was added by the Free Software Foundation in
   version 2.2 of Bison.  */

/* C LALR(1) parser skeleton written by Richard Stallman, by
   simplifying the original so-called "semantic" parser.  */

/* All symbols defined below should begin with yy or YY, to avoid
   infringing on user name space.  This should be done even for local
   variables, as they might otherwise be expanded by user macros.
   There are some unavoidable exceptions within include files to
   define necessary library symbols; they are noted "INFRINGES ON
   USER NAME SPACE" below.  */

/* Identify Bison output.  */
#define YYBISON 1

/* Bison version.  */
#define YYBISON_VERSION "2.6.4"

/* Skeleton name.  */
#define YYSKELETON_NAME "yacc.c"

/* Pure parsers.  */
#define YYPURE 0

/* Push parsers.  */
#define YYPUSH 0

/* Pull parsers.  */
#define YYPULL 1




/* Copy the first part of user declarations.  */
/* Line 358 of yacc.c  */
#line 178 "rpc2x_act.y"

#define YYDEBUG 1

#include <string.h>

#include "nodes.h"
#include "nonterm.h"
#include "functions.h"

#define YYSTYPE TreeNode *

extern TreeNode *top;

extern void yyerror(const char *);

extern int last_tok_line;
extern int last_tok_column;


/* Line 358 of yacc.c  */
#line 88 "rpc2x_act.tab.c"

# ifndef YY_NULL
#  if defined __cplusplus && 201103L <= __cplusplus
#   define YY_NULL nullptr
#  else
#   define YY_NULL 0
#  endif
# endif

/* Enabling verbose error messages.  */
#ifdef YYERROR_VERBOSE
# undef YYERROR_VERBOSE
# define YYERROR_VERBOSE 1
#else
# define YYERROR_VERBOSE 0
#endif

/* In a future release of Bison, this section will be replaced
   by #include "rpc2x_act.tab.h".  */
#ifndef YY_YY_RPC2X_ACT_TAB_H_INCLUDED
# define YY_YY_RPC2X_ACT_TAB_H_INCLUDED
/* Enabling traces.  */
#ifndef YYDEBUG
# define YYDEBUG 0
#endif
#if YYDEBUG
extern int yydebug;
#endif

/* Tokens.  */
#ifndef YYTOKENTYPE
# define YYTOKENTYPE
   /* Put the tokens into the symbol table, so that GDB and other debuggers
      know about them.  */
   enum yytokentype {
     GARBAGE = 258,
     A = 259,
     BAhE = 260,
     BAI = 261,
     BE = 262,
     BEhO = 263,
     BEI = 264,
     BIhE = 265,
     BIhI = 266,
     BO = 267,
     BOI = 268,
     BRIVLA = 269,
     BU = 270,
     BY = 271,
     CAhA = 272,
     CAI = 273,
     CEhE = 274,
     CEI = 275,
     CMENE = 276,
     CO = 277,
     COI = 278,
     CU = 279,
     CUhE = 280,
     DAhO = 281,
     DOhU = 282,
     DOI = 283,
     FA = 284,
     FAhA = 285,
     FAhO = 286,
     FEhE = 287,
     FEhU = 288,
     FIhO = 289,
     FOI = 290,
     FUhA = 291,
     FUhE = 292,
     FUhO = 293,
     GA = 294,
     GAhO = 295,
     GEhU = 296,
     GI = 297,
     GIhA = 298,
     GOhA = 299,
     GOI = 300,
     GUhA = 301,
     I = 302,
     JA = 303,
     JAI = 304,
     JOhI = 305,
     JOI = 306,
     KE = 307,
     KEhE = 308,
     KEI = 309,
     KI = 310,
     KOhA = 311,
     KUhE = 312,
     KUhO = 313,
     KU = 314,
     LA = 315,
     LAhE = 316,
     LAU = 317,
     LE = 318,
     LEhU = 319,
     LI = 320,
     LIhU = 321,
     LOhO = 322,
     LOhU = 323,
     LU = 324,
     LUhU = 325,
     MAhO = 326,
     MAI = 327,
     ME = 328,
     MEhU = 329,
     MOhE = 330,
     MOhI = 331,
     MOI = 332,
     NA = 333,
     NAhE = 334,
     NAhU = 335,
     NAI = 336,
     NIhE = 337,
     NIhO = 338,
     NOI = 339,
     NU = 340,
     NUhA = 341,
     NUhI = 342,
     NUhU = 343,
     PA = 344,
     PEhA = 345,
     PEhE = 346,
     PEhO = 347,
     POhA = 348,
     PU = 349,
     RAhO = 350,
     ROI = 351,
     SA = 352,
     SE = 353,
     SEhU = 354,
     SEI = 355,
     SI = 356,
     SOI = 357,
     SU = 358,
     TAhE = 359,
     TEhU = 360,
     TEI = 361,
     TO = 362,
     TOI = 363,
     TUhE = 364,
     TUhU = 365,
     UI = 366,
     VA = 367,
     VAU = 368,
     VEhA = 369,
     VEhO = 370,
     VEI = 371,
     VIhA = 372,
     VUhO = 373,
     VUhU = 374,
     XI = 375,
     Y = 376,
     ZAhO = 377,
     ZEhA = 378,
     ZEI = 379,
     ZI = 380,
     ZIhE = 381,
     ZO = 382,
     ZOhU = 383,
     ZOI = 384,
     PRIVATE_START_EK = 385,
     PRIVATE_START_GIHEK = 386,
     PRIVATE_START_GUHEK = 387,
     PRIVATE_START_JEK = 388,
     PRIVATE_END_JEK = 389,
     PRIVATE_START_JOIK = 390,
     PRIVATE_END_JOIK = 391,
     PRIVATE_START_GEK = 392,
     PRIVATE_START_BAI = 393,
     PRIVATE_EK_KE = 394,
     PRIVATE_EK_BO = 395,
     PRIVATE_JEK_KE = 396,
     PRIVATE_JEK_BO = 397,
     PRIVATE_JOIK_KE = 398,
     PRIVATE_JOIK_BO = 399,
     PRIVATE_I_JEKJOIK = 400,
     PRIVATE_I_BO = 401,
     PRIVATE_GIHEK_KE = 402,
     PRIVATE_GIHEK_BO = 403,
     PRIVATE_NAhE_BO = 404,
     PRIVATE_NAhE_time = 405,
     PRIVATE_NAhE_space = 406,
     PRIVATE_NAhE_CAhA = 407,
     PRIVATE_NA_KU = 408,
     PRIVATE_NUMBER_MAI = 409,
     PRIVATE_NUMBER_MOI = 410,
     PRIVATE_NUMBER_ROI = 411,
     PRIVATE_START_TENSE = 412,
     PRIVATE_END_TENSE = 413,
     PRIVATE_EOF_MARK = 414,
     IMPOSSIBLE_TOKEN = 415
   };
#endif


#if ! defined YYSTYPE && ! defined YYSTYPE_IS_DECLARED
typedef int YYSTYPE;
# define YYSTYPE_IS_TRIVIAL 1
# define yystype YYSTYPE /* obsolescent; will be withdrawn */
# define YYSTYPE_IS_DECLARED 1
#endif

#if ! defined YYLTYPE && ! defined YYLTYPE_IS_DECLARED
typedef struct YYLTYPE
{
  int first_line;
  int first_column;
  int last_line;
  int last_column;
} YYLTYPE;
# define yyltype YYLTYPE /* obsolescent; will be withdrawn */
# define YYLTYPE_IS_DECLARED 1
# define YYLTYPE_IS_TRIVIAL 1
#endif

extern YYSTYPE yylval;
extern YYLTYPE yylloc;
#ifdef YYPARSE_PARAM
#if defined __STDC__ || defined __cplusplus
int yyparse (void *YYPARSE_PARAM);
#else
int yyparse ();
#endif
#else /* ! YYPARSE_PARAM */
#if defined __STDC__ || defined __cplusplus
int yyparse (void);
#else
int yyparse ();
#endif
#endif /* ! YYPARSE_PARAM */

#endif /* !YY_YY_RPC2X_ACT_TAB_H_INCLUDED  */

/* Copy the second part of user declarations.  */

/* Line 377 of yacc.c  */
#line 327 "rpc2x_act.tab.c"

#ifdef short
# undef short
#endif

#ifdef YYTYPE_UINT8
typedef YYTYPE_UINT8 yytype_uint8;
#else
typedef unsigned char yytype_uint8;
#endif

#ifdef YYTYPE_INT8
typedef YYTYPE_INT8 yytype_int8;
#elif (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
typedef signed char yytype_int8;
#else
typedef short int yytype_int8;
#endif

#ifdef YYTYPE_UINT16
typedef YYTYPE_UINT16 yytype_uint16;
#else
typedef unsigned short int yytype_uint16;
#endif

#ifdef YYTYPE_INT16
typedef YYTYPE_INT16 yytype_int16;
#else
typedef short int yytype_int16;
#endif

#ifndef YYSIZE_T
# ifdef __SIZE_TYPE__
#  define YYSIZE_T __SIZE_TYPE__
# elif defined size_t
#  define YYSIZE_T size_t
# elif ! defined YYSIZE_T && (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
#  include <stddef.h> /* INFRINGES ON USER NAME SPACE */
#  define YYSIZE_T size_t
# else
#  define YYSIZE_T unsigned int
# endif
#endif

#define YYSIZE_MAXIMUM ((YYSIZE_T) -1)

#ifndef YY_
# if defined YYENABLE_NLS && YYENABLE_NLS
#  if ENABLE_NLS
#   include <libintl.h> /* INFRINGES ON USER NAME SPACE */
#   define YY_(Msgid) dgettext ("bison-runtime", Msgid)
#  endif
# endif
# ifndef YY_
#  define YY_(Msgid) Msgid
# endif
#endif

/* Suppress unused-variable warnings by "using" E.  */
#if ! defined lint || defined __GNUC__
# define YYUSE(E) ((void) (E))
#else
# define YYUSE(E) /* empty */
#endif

/* Identity function, used to suppress warnings about constant conditions.  */
#ifndef lint
# define YYID(N) (N)
#else
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static int
YYID (int yyi)
#else
static int
YYID (yyi)
    int yyi;
#endif
{
  return yyi;
}
#endif

#if ! defined yyoverflow || YYERROR_VERBOSE

/* The parser invokes alloca or malloc; define the necessary symbols.  */

# ifdef YYSTACK_USE_ALLOCA
#  if YYSTACK_USE_ALLOCA
#   ifdef __GNUC__
#    define YYSTACK_ALLOC __builtin_alloca
#   elif defined __BUILTIN_VA_ARG_INCR
#    include <alloca.h> /* INFRINGES ON USER NAME SPACE */
#   elif defined _AIX
#    define YYSTACK_ALLOC __alloca
#   elif defined _MSC_VER
#    include <malloc.h> /* INFRINGES ON USER NAME SPACE */
#    define alloca _alloca
#   else
#    define YYSTACK_ALLOC alloca
#    if ! defined _ALLOCA_H && ! defined EXIT_SUCCESS && (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
#     include <stdlib.h> /* INFRINGES ON USER NAME SPACE */
      /* Use EXIT_SUCCESS as a witness for stdlib.h.  */
#     ifndef EXIT_SUCCESS
#      define EXIT_SUCCESS 0
#     endif
#    endif
#   endif
#  endif
# endif

# ifdef YYSTACK_ALLOC
   /* Pacify GCC's `empty if-body' warning.  */
#  define YYSTACK_FREE(Ptr) do { /* empty */; } while (YYID (0))
#  ifndef YYSTACK_ALLOC_MAXIMUM
    /* The OS might guarantee only one guard page at the bottom of the stack,
       and a page size can be as small as 4096 bytes.  So we cannot safely
       invoke alloca (N) if N exceeds 4096.  Use a slightly smaller number
       to allow for a few compiler-allocated temporary stack slots.  */
#   define YYSTACK_ALLOC_MAXIMUM 4032 /* reasonable circa 2006 */
#  endif
# else
#  define YYSTACK_ALLOC YYMALLOC
#  define YYSTACK_FREE YYFREE
#  ifndef YYSTACK_ALLOC_MAXIMUM
#   define YYSTACK_ALLOC_MAXIMUM YYSIZE_MAXIMUM
#  endif
#  if (defined __cplusplus && ! defined EXIT_SUCCESS \
       && ! ((defined YYMALLOC || defined malloc) \
	     && (defined YYFREE || defined free)))
#   include <stdlib.h> /* INFRINGES ON USER NAME SPACE */
#   ifndef EXIT_SUCCESS
#    define EXIT_SUCCESS 0
#   endif
#  endif
#  ifndef YYMALLOC
#   define YYMALLOC malloc
#   if ! defined malloc && ! defined EXIT_SUCCESS && (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
void *malloc (YYSIZE_T); /* INFRINGES ON USER NAME SPACE */
#   endif
#  endif
#  ifndef YYFREE
#   define YYFREE free
#   if ! defined free && ! defined EXIT_SUCCESS && (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
void free (void *); /* INFRINGES ON USER NAME SPACE */
#   endif
#  endif
# endif
#endif /* ! defined yyoverflow || YYERROR_VERBOSE */


#if (! defined yyoverflow \
     && (! defined __cplusplus \
	 || (defined YYLTYPE_IS_TRIVIAL && YYLTYPE_IS_TRIVIAL \
	     && defined YYSTYPE_IS_TRIVIAL && YYSTYPE_IS_TRIVIAL)))

/* A type that is properly aligned for any stack member.  */
union yyalloc
{
  yytype_int16 yyss_alloc;
  YYSTYPE yyvs_alloc;
  YYLTYPE yyls_alloc;
};

/* The size of the maximum gap between one aligned stack and the next.  */
# define YYSTACK_GAP_MAXIMUM (sizeof (union yyalloc) - 1)

/* The size of an array large to enough to hold all stacks, each with
   N elements.  */
# define YYSTACK_BYTES(N) \
     ((N) * (sizeof (yytype_int16) + sizeof (YYSTYPE) + sizeof (YYLTYPE)) \
      + 2 * YYSTACK_GAP_MAXIMUM)

# define YYCOPY_NEEDED 1

/* Relocate STACK from its old location to the new one.  The
   local variables YYSIZE and YYSTACKSIZE give the old and new number of
   elements in the stack, and YYPTR gives the new location of the
   stack.  Advance YYPTR to a properly aligned location for the next
   stack.  */
# define YYSTACK_RELOCATE(Stack_alloc, Stack)				\
    do									\
      {									\
	YYSIZE_T yynewbytes;						\
	YYCOPY (&yyptr->Stack_alloc, Stack, yysize);			\
	Stack = &yyptr->Stack_alloc;					\
	yynewbytes = yystacksize * sizeof (*Stack) + YYSTACK_GAP_MAXIMUM; \
	yyptr += yynewbytes / sizeof (*yyptr);				\
      }									\
    while (YYID (0))

#endif

#if defined YYCOPY_NEEDED && YYCOPY_NEEDED
/* Copy COUNT objects from SRC to DST.  The source and destination do
   not overlap.  */
# ifndef YYCOPY
#  if defined __GNUC__ && 1 < __GNUC__
#   define YYCOPY(Dst, Src, Count) \
      __builtin_memcpy (Dst, Src, (Count) * sizeof (*(Src)))
#  else
#   define YYCOPY(Dst, Src, Count)              \
      do                                        \
        {                                       \
          YYSIZE_T yyi;                         \
          for (yyi = 0; yyi < (Count); yyi++)   \
            (Dst)[yyi] = (Src)[yyi];            \
        }                                       \
      while (YYID (0))
#  endif
# endif
#endif /* !YYCOPY_NEEDED */

/* YYFINAL -- State number of the termination state.  */
#define YYFINAL  365
/* YYLAST -- Last index in YYTABLE.  */
#define YYLAST   8965

/* YYNTOKENS -- Number of terminals.  */
#define YYNTOKENS  161
/* YYNNTS -- Number of nonterminals.  */
#define YYNNTS  163
/* YYNRULES -- Number of rules.  */
#define YYNRULES  1091
/* YYNRULES -- Number of states.  */
#define YYNSTATES  1761

/* YYTRANSLATE(YYLEX) -- Bison symbol number corresponding to YYLEX.  */
#define YYUNDEFTOK  2
#define YYMAXUTOK   415

#define YYTRANSLATE(YYX)						\
  ((unsigned int) (YYX) <= YYMAXUTOK ? yytranslate[YYX] : YYUNDEFTOK)

/* YYTRANSLATE[YYLEX] -- Bison symbol number corresponding to YYLEX.  */
static const yytype_uint8 yytranslate[] =
{
       0,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     1,     2,     3,     4,
       5,     6,     7,     8,     9,    10,    11,    12,    13,    14,
      15,    16,    17,    18,    19,    20,    21,    22,    23,    24,
      25,    26,    27,    28,    29,    30,    31,    32,    33,    34,
      35,    36,    37,    38,    39,    40,    41,    42,    43,    44,
      45,    46,    47,    48,    49,    50,    51,    52,    53,    54,
      55,    56,    57,    58,    59,    60,    61,    62,    63,    64,
      65,    66,    67,    68,    69,    70,    71,    72,    73,    74,
      75,    76,    77,    78,    79,    80,    81,    82,    83,    84,
      85,    86,    87,    88,    89,    90,    91,    92,    93,    94,
      95,    96,    97,    98,    99,   100,   101,   102,   103,   104,
     105,   106,   107,   108,   109,   110,   111,   112,   113,   114,
     115,   116,   117,   118,   119,   120,   121,   122,   123,   124,
     125,   126,   127,   128,   129,   130,   131,   132,   133,   134,
     135,   136,   137,   138,   139,   140,   141,   142,   143,   144,
     145,   146,   147,   148,   149,   150,   151,   152,   153,   154,
     155,   156,   157,   158,   159,   160
};

#if YYDEBUG
/* YYPRHS[YYN] -- Index of the first RHS symbol of rule number YYN in
   YYRHS.  */
static const yytype_uint16 yyprhs[] =
{
       0,     0,     3,     5,     8,    11,    15,    19,    26,    33,
      39,    45,    50,    56,    62,    67,    72,    76,    83,    90,
      96,   102,   107,   113,   119,   124,   129,   133,   139,   145,
     150,   155,   159,   164,   169,   173,   177,   180,   186,   192,
     197,   202,   206,   211,   216,   220,   224,   227,   233,   239,
     244,   249,   253,   258,   263,   267,   271,   274,   279,   284,
     288,   292,   295,   299,   303,   306,   309,   311,   314,   316,
     318,   319,   321,   323,   325,   328,   335,   342,   348,   354,
     360,   365,   371,   377,   382,   387,   392,   396,   401,   406,
     409,   413,   417,   419,   421,   425,   427,   429,   433,   437,
     440,   442,   445,   447,   449,   452,   454,   458,   461,   466,
     470,   475,   479,   481,   484,   488,   495,   501,   507,   512,
     519,   525,   531,   536,   542,   547,   552,   556,   558,   565,
     571,   576,   582,   587,   591,   597,   602,   606,   611,   615,
     618,   621,   623,   626,   628,   630,   633,   635,   639,   642,
     644,   646,   648,   650,   652,   656,   659,   664,   668,   670,
     672,   675,   678,   681,   683,   686,   688,   690,   693,   695,
     704,   712,   720,   727,   734,   740,   748,   755,   762,   768,
     774,   779,   783,   786,   788,   794,   799,   804,   808,   810,
     815,   819,   825,   830,   835,   839,   842,   844,   846,   848,
     852,   855,   857,   860,   862,   868,   873,   880,   886,   891,
     897,   902,   906,   912,   917,   921,   926,   930,   933,   937,
     940,   942,   945,   947,   954,   960,   967,   973,   979,   984,
     990,   995,   997,  1002,  1006,  1008,  1010,  1012,  1014,  1016,
    1018,  1020,  1022,  1024,  1028,  1031,  1034,  1037,  1041,  1044,
    1046,  1051,  1055,  1060,  1064,  1067,  1071,  1074,  1076,  1082,
    1085,  1088,  1090,  1094,  1097,  1099,  1101,  1106,  1110,  1112,
    1116,  1120,  1123,  1127,  1130,  1136,  1141,  1145,  1150,  1154,
    1157,  1159,  1164,  1168,  1173,  1177,  1179,  1183,  1189,  1194,
    1199,  1203,  1209,  1214,  1219,  1223,  1225,  1230,  1233,  1235,
    1238,  1240,  1243,  1245,  1250,  1254,  1257,  1259,  1261,  1264,
    1266,  1270,  1273,  1275,  1281,  1286,  1290,  1295,  1299,  1302,
    1308,  1313,  1317,  1322,  1326,  1329,  1331,  1337,  1342,  1346,
    1351,  1355,  1358,  1361,  1363,  1368,  1372,  1375,  1378,  1380,
    1383,  1385,  1392,  1398,  1403,  1409,  1414,  1418,  1424,  1429,
    1433,  1438,  1442,  1445,  1454,  1462,  1469,  1477,  1484,  1490,
    1498,  1505,  1511,  1518,  1524,  1529,  1535,  1540,  1545,  1549,
    1554,  1558,  1562,  1565,  1569,  1572,  1574,  1577,  1580,  1582,
    1585,  1588,  1590,  1592,  1594,  1599,  1603,  1605,  1607,  1613,
    1618,  1622,  1627,  1631,  1634,  1640,  1645,  1649,  1654,  1658,
    1661,  1664,  1666,  1668,  1672,  1675,  1680,  1684,  1686,  1689,
    1691,  1693,  1698,  1702,  1707,  1711,  1715,  1719,  1725,  1730,
    1734,  1739,  1743,  1746,  1748,  1752,  1758,  1763,  1768,  1772,
    1778,  1783,  1788,  1792,  1794,  1799,  1803,  1810,  1816,  1821,
    1823,  1828,  1832,  1834,  1837,  1840,  1842,  1846,  1849,  1852,
    1854,  1856,  1864,  1871,  1877,  1884,  1890,  1895,  1901,  1906,
    1910,  1917,  1923,  1928,  1934,  1939,  1943,  1948,  1952,  1955,
    1957,  1961,  1964,  1966,  1968,  1970,  1972,  1974,  1976,  1982,
    1987,  1991,  1996,  2000,  2003,  2008,  2012,  2017,  2021,  2025,
    2028,  2033,  2037,  2041,  2044,  2048,  2051,  2056,  2060,  2063,
    2067,  2070,  2073,  2075,  2082,  2088,  2094,  2099,  2105,  2110,
    2115,  2119,  2126,  2132,  2138,  2143,  2149,  2154,  2159,  2163,
    2170,  2176,  2181,  2187,  2192,  2196,  2202,  2207,  2211,  2216,
    2220,  2223,  2228,  2232,  2236,  2239,  2243,  2246,  2248,  2254,
    2259,  2263,  2268,  2272,  2275,  2277,  2279,  2283,  2286,  2288,
    2292,  2294,  2300,  2305,  2307,  2314,  2320,  2325,  2331,  2336,
    2340,  2345,  2349,  2352,  2354,  2357,  2361,  2365,  2369,  2373,
    2375,  2380,  2384,  2389,  2393,  2397,  2403,  2408,  2412,  2417,
    2421,  2424,  2426,  2431,  2435,  2437,  2443,  2448,  2452,  2457,
    2461,  2464,  2468,  2471,  2475,  2478,  2484,  2489,  2493,  2498,
    2502,  2505,  2511,  2516,  2520,  2525,  2529,  2532,  2535,  2537,
    2539,  2543,  2549,  2554,  2558,  2563,  2567,  2570,  2572,  2577,
    2581,  2586,  2590,  2592,  2596,  2598,  2602,  2605,  2607,  2613,
    2618,  2622,  2627,  2631,  2634,  2640,  2645,  2649,  2654,  2658,
    2661,  2667,  2672,  2676,  2681,  2685,  2688,  2693,  2699,  2704,
    2708,  2713,  2717,  2720,  2728,  2735,  2741,  2748,  2754,  2759,
    2761,  2763,  2766,  2769,  2771,  2774,  2777,  2779,  2781,  2784,
    2788,  2794,  2799,  2804,  2808,  2813,  2817,  2821,  2824,  2830,
    2835,  2840,  2844,  2849,  2853,  2857,  2860,  2867,  2873,  2879,
    2884,  2890,  2895,  2900,  2904,  2911,  2917,  2923,  2928,  2934,
    2939,  2944,  2948,  2956,  2963,  2970,  2976,  2983,  2989,  2995,
    3000,  3007,  3013,  3019,  3024,  3030,  3035,  3040,  3044,  3052,
    3059,  3066,  3072,  3079,  3085,  3091,  3096,  3104,  3111,  3118,
    3124,  3131,  3137,  3143,  3148,  3154,  3159,  3164,  3168,  3174,
    3179,  3184,  3188,  3196,  3203,  3210,  3216,  3222,  3227,  3232,
    3236,  3242,  3247,  3252,  3256,  3264,  3271,  3278,  3284,  3291,
    3297,  3303,  3308,  3315,  3321,  3327,  3332,  3341,  3349,  3357,
    3364,  3370,  3375,  3380,  3384,  3390,  3395,  3400,  3404,  3412,
    3419,  3426,  3432,  3439,  3445,  3451,  3456,  3463,  3469,  3475,
    3480,  3489,  3497,  3505,  3512,  3519,  3525,  3531,  3536,  3543,
    3549,  3555,  3560,  3569,  3577,  3585,  3592,  3598,  3603,  3608,
    3612,  3617,  3621,  3625,  3628,  3633,  3637,  3641,  3647,  3652,
    3657,  3661,  3666,  3670,  3674,  3677,  3681,  3684,  3687,  3689,
    3691,  3693,  3695,  3700,  3704,  3709,  3713,  3718,  3722,  3727,
    3731,  3736,  3740,  3745,  3749,  3755,  3760,  3764,  3769,  3773,
    3776,  3779,  3781,  3785,  3789,  3796,  3802,  3808,  3813,  3820,
    3826,  3832,  3837,  3843,  3848,  3853,  3857,  3863,  3868,  3873,
    3877,  3885,  3892,  3899,  3905,  3912,  3918,  3924,  3929,  3936,
    3942,  3948,  3953,  3959,  3964,  3969,  3973,  3981,  3988,  3995,
    4001,  4008,  4014,  4020,  4025,  4032,  4038,  4044,  4049,  4055,
    4060,  4065,  4069,  4074,  4078,  4084,  4089,  4093,  4097,  4100,
    4102,  4107,  4111,  4115,  4118,  4122,  4125,  4128,  4130,  4134,
    4137,  4140,  4142,  4145,  4147,  4149,  4153,  4156,  4158,  4162,
    4165,  4168,  4170,  4173,  4175,  4181,  4185,  4190,  4193,  4198,
    4201,  4205,  4207,  4212,  4215,  4219,  4221,  4225,  4227,  4230,
    4234,  4237,  4240,  4242,  4245,  4247,  4253,  4258,  4262,  4267,
    4271,  4274,  4279,  4283,  4286,  4291,  4295,  4298,  4302,  4305,
    4307,  4311,  4314,  4316,  4318,  4321,  4323,  4326,  4331,  4335,
    4338,  4340,  4343,  4345,  4348,  4350,  4353,  4355,  4357,  4359,
    4361,  4363,  4365,  4367,  4375,  4382,  4389,  4395,  4401,  4406,
    4411,  4415,  4422,  4428,  4434,  4439,  4444,  4448,  4452,  4455,
    4457,  4463,  4468,  4473,  4477,  4482,  4486,  4490,  4493,  4499,
    4504,  4509,  4513,  4518,  4522,  4526,  4529,  4536,  4542,  4548,
    4553,  4559,  4564,  4569,  4573,  4579,  4584,  4589,  4593,  4598,
    4602,  4606,  4609,  4613,  4616,  4619,  4621,  4625,  4629,  4633,
    4636,  4641,  4645,  4649,  4652,  4657,  4661,  4665,  4668,  4675,
    4681,  4687,  4692,  4698,  4703,  4708,  4712,  4715,  4717,  4719,
    4722,  4724,  4728,  4731,  4734,  4736,  4739,  4741,  4744,  4746,
    4749,  4751,  4753,  4755,  4757,  4760,  4762,  4765,  4767,  4770,
    4772,  4775
};

/* YYRHS -- A `-1'-separated list of the rules' RHS.  */
static const yytype_int16 yyrhs[] =
{
     162,     0,    -1,   163,    -1,   164,   159,    -1,   164,     1,
      -1,   163,   164,   159,    -1,   163,   164,     1,    -1,   320,
     321,   306,   282,   306,   165,    -1,   320,   321,   306,   279,
     306,   165,    -1,   320,   321,   306,   282,   165,    -1,   320,
     321,   306,   279,   165,    -1,   320,   321,   306,   165,    -1,
     320,   321,   282,   306,   165,    -1,   320,   321,   279,   306,
     165,    -1,   320,   321,   282,   165,    -1,   320,   321,   279,
     165,    -1,   320,   321,   165,    -1,   320,   317,   306,   282,
     306,   165,    -1,   320,   317,   306,   279,   306,   165,    -1,
     320,   317,   306,   282,   165,    -1,   320,   317,   306,   279,
     165,    -1,   320,   317,   306,   165,    -1,   320,   317,   282,
     306,   165,    -1,   320,   317,   279,   306,   165,    -1,   320,
     317,   282,   165,    -1,   320,   317,   279,   165,    -1,   320,
     317,   165,    -1,   320,   306,   282,   306,   165,    -1,   320,
     306,   279,   306,   165,    -1,   320,   306,   282,   165,    -1,
     320,   306,   279,   165,    -1,   320,   306,   165,    -1,   320,
     282,   306,   165,    -1,   320,   279,   306,   165,    -1,   320,
     282,   165,    -1,   320,   279,   165,    -1,   320,   165,    -1,
     321,   306,   282,   306,   165,    -1,   321,   306,   279,   306,
     165,    -1,   321,   306,   282,   165,    -1,   321,   306,   279,
     165,    -1,   321,   306,   165,    -1,   321,   282,   306,   165,
      -1,   321,   279,   306,   165,    -1,   321,   282,   165,    -1,
     321,   279,   165,    -1,   321,   165,    -1,   317,   306,   282,
     306,   165,    -1,   317,   306,   279,   306,   165,    -1,   317,
     306,   282,   165,    -1,   317,   306,   279,   165,    -1,   317,
     306,   165,    -1,   317,   282,   306,   165,    -1,   317,   279,
     306,   165,    -1,   317,   282,   165,    -1,   317,   279,   165,
      -1,   317,   165,    -1,   306,   282,   306,   165,    -1,   306,
     279,   306,   165,    -1,   306,   282,   165,    -1,   306,   279,
     165,    -1,   306,   165,    -1,   282,   306,   165,    -1,   279,
     306,   165,    -1,   282,   165,    -1,   279,   165,    -1,   165,
      -1,   166,   169,    -1,   166,    -1,   169,    -1,    -1,   167,
      -1,   322,    -1,   168,    -1,   167,   168,    -1,   146,    47,
     281,   290,    12,   306,    -1,   146,    47,   278,   290,    12,
     306,    -1,   146,    47,   290,    12,   306,    -1,   146,    47,
     281,   290,    12,    -1,   146,    47,   278,   290,    12,    -1,
     146,    47,   290,    12,    -1,   146,    47,   281,    12,   306,
      -1,   146,    47,   278,    12,   306,    -1,   146,    47,    12,
     306,    -1,   146,    47,   281,    12,    -1,   146,    47,   278,
      12,    -1,   146,    47,    12,    -1,   145,    47,   282,   306,
      -1,   145,    47,   279,   306,    -1,    47,   306,    -1,   145,
      47,   282,    -1,   145,    47,   279,    -1,    47,    -1,   170,
      -1,   169,   322,   170,    -1,   172,    -1,   179,    -1,   170,
     171,   172,    -1,   170,   171,   179,    -1,   170,   171,    -1,
      47,    -1,    47,   306,    -1,   173,    -1,   174,    -1,   180,
     173,    -1,   176,    -1,   174,   175,   176,    -1,   174,   175,
      -1,   145,    47,   282,   306,    -1,   145,    47,   282,    -1,
     145,    47,   279,   306,    -1,   145,    47,   279,    -1,   178,
      -1,   178,   177,    -1,   178,   177,   176,    -1,   146,    47,
     281,   290,    12,   306,    -1,   146,    47,   281,   290,    12,
      -1,   146,    47,   281,    12,   306,    -1,   146,    47,   281,
      12,    -1,   146,    47,   278,   290,    12,   306,    -1,   146,
      47,   278,   290,    12,    -1,   146,    47,   278,    12,   306,
      -1,   146,    47,   278,    12,    -1,   146,    47,   290,    12,
     306,    -1,   146,    47,   290,    12,    -1,   146,    47,    12,
     306,    -1,   146,    47,    12,    -1,   181,    -1,   287,   109,
     306,   165,   110,   306,    -1,   287,   109,   306,   165,   110,
      -1,   287,   109,   306,   165,    -1,   287,   109,   165,   110,
     306,    -1,   287,   109,   165,   110,    -1,   287,   109,   165,
      -1,   109,   306,   165,   110,   306,    -1,   109,   306,   165,
     110,    -1,   109,   306,   165,    -1,   109,   165,   110,   306,
      -1,   109,   165,   110,    -1,   109,   165,    -1,   276,   306,
      -1,   276,    -1,   277,   306,    -1,   277,    -1,   254,    -1,
      78,   306,    -1,    78,    -1,   194,   113,   306,    -1,   194,
     113,    -1,   194,    -1,   180,    -1,   226,    -1,   253,    -1,
     252,    -1,   194,   128,   306,    -1,   194,   128,    -1,   194,
      24,   306,   185,    -1,   194,    24,   185,    -1,   182,    -1,
     183,    -1,   194,   131,    -1,   194,   147,    -1,   194,   148,
      -1,   160,    -1,   194,   185,    -1,   185,    -1,   181,    -1,
     180,   184,    -1,   187,    -1,   187,   186,    52,   306,   185,
      53,   306,   192,    -1,   187,   186,    52,   306,   185,    53,
     306,    -1,   187,   186,    52,   306,   185,    53,   192,    -1,
     187,   186,    52,   306,   185,    53,    -1,   187,   186,    52,
     306,   185,   192,    -1,   187,   186,    52,   306,   185,    -1,
     187,   186,    52,   185,    53,   306,   192,    -1,   187,   186,
      52,   185,    53,   306,    -1,   187,   186,    52,   185,    53,
     192,    -1,   187,   186,    52,   185,    53,    -1,   187,   186,
      52,   185,   192,    -1,   187,   186,    52,   185,    -1,   147,
     277,   290,    -1,   147,   277,    -1,   188,    -1,   187,   277,
     306,   188,   192,    -1,   187,   277,   306,   188,    -1,   187,
     277,   188,   192,    -1,   187,   277,   188,    -1,   190,    -1,
     188,   189,   188,   192,    -1,   188,   189,   188,    -1,   148,
     277,   290,    12,   306,    -1,   148,   277,   290,    12,    -1,
     148,   277,    12,   306,    -1,   148,   277,    12,    -1,   191,
     192,    -1,   191,    -1,   193,    -1,   231,    -1,   194,   113,
     306,    -1,   194,   113,    -1,   194,    -1,   113,   306,    -1,
     113,    -1,   284,   184,   286,   184,   192,    -1,   284,   184,
     286,   184,    -1,   287,    52,   306,   193,    53,   306,    -1,
     287,    52,   306,   193,    53,    -1,   287,    52,   306,   193,
      -1,   287,    52,   193,    53,   306,    -1,   287,    52,   193,
      53,    -1,   287,    52,   193,    -1,    52,   306,   193,    53,
     306,    -1,    52,   306,   193,    53,    -1,    52,   306,   193,
      -1,    52,   193,    53,   306,    -1,    52,   193,    53,    -1,
      52,   193,    -1,    78,   306,   193,    -1,    78,   193,    -1,
     195,    -1,   194,   195,    -1,   196,    -1,   195,    91,   306,
     281,   306,   196,    -1,   195,    91,   306,   281,   196,    -1,
     195,    91,   306,   278,   306,   196,    -1,   195,    91,   306,
     278,   196,    -1,   195,    91,   281,   306,   196,    -1,   195,
      91,   281,   196,    -1,   195,    91,   278,   306,   196,    -1,
     195,    91,   278,   196,    -1,   197,    -1,   196,    19,   306,
     197,    -1,   196,    19,   197,    -1,   198,    -1,   200,    -1,
     199,    -1,   202,    -1,   205,    -1,   201,    -1,   203,    -1,
     204,    -1,   208,    -1,    29,   306,   208,    -1,    29,   208,
      -1,   287,   208,    -1,   287,   205,    -1,   287,    59,   306,
      -1,   287,    59,    -1,   287,    -1,   153,    78,    59,   306,
      -1,   153,    78,    59,    -1,    29,   306,    59,   306,    -1,
      29,   306,    59,    -1,    29,   306,    -1,    29,    59,   306,
      -1,    29,    59,    -1,    29,    -1,   206,   284,   207,   286,
     207,    -1,   206,   207,    -1,    87,   306,    -1,    87,    -1,
     194,    88,   306,    -1,   194,    88,    -1,   194,    -1,   209,
      -1,   209,   118,   306,   226,    -1,   209,   118,   226,    -1,
     212,    -1,   212,   210,   211,    -1,   143,   281,   290,    -1,
     143,   281,    -1,   139,   276,   290,    -1,   139,   276,    -1,
      52,   306,   208,    53,   306,    -1,    52,   306,   208,    53,
      -1,    52,   306,   208,    -1,    52,   208,    53,   306,    -1,
      52,   208,    53,    -1,    52,   208,    -1,   213,    -1,   212,
     281,   306,   213,    -1,   212,   281,   213,    -1,   212,   276,
     306,   213,    -1,   212,   276,   213,    -1,   215,    -1,   215,
     214,   213,    -1,   144,   281,   290,    12,   306,    -1,   144,
     281,   290,    12,    -1,   144,   281,    12,   306,    -1,   144,
     281,    12,    -1,   140,   276,   290,    12,   306,    -1,   140,
     276,   290,    12,    -1,   140,   276,    12,   306,    -1,   140,
     276,    12,    -1,   216,    -1,   284,   208,   286,   215,    -1,
     217,   226,    -1,   217,    -1,   218,   226,    -1,   218,    -1,
     254,   219,    -1,   219,    -1,   254,   231,    59,   306,    -1,
     254,   231,    59,    -1,   254,   231,    -1,   220,    -1,   221,
      -1,    56,   306,    -1,    56,    -1,   274,    13,   306,    -1,
     274,    13,    -1,   274,    -1,    63,   306,   223,    59,   306,
      -1,    63,   306,   223,    59,    -1,    63,   306,   223,    -1,
      63,   223,    59,   306,    -1,    63,   223,    59,    -1,    63,
     223,    -1,    60,   306,   223,    59,   306,    -1,    60,   306,
     223,    59,    -1,    60,   306,   223,    -1,    60,   223,    59,
     306,    -1,    60,   223,    59,    -1,    60,   223,    -1,   222,
      -1,    65,   306,   255,    67,   306,    -1,    65,   306,   255,
      67,    -1,    65,   306,   255,    -1,    65,   255,    67,   306,
      -1,    65,   255,    67,    -1,    65,   255,    -1,   127,   306,
      -1,   127,    -1,    69,   164,    66,   306,    -1,    69,   164,
      66,    -1,    69,   164,    -1,    68,   306,    -1,    68,    -1,
     129,   306,    -1,   129,    -1,    61,   306,   226,   208,    70,
     306,    -1,    61,   306,   226,   208,    70,    -1,    61,   306,
     226,   208,    -1,    61,   306,   208,    70,   306,    -1,    61,
     306,   208,    70,    -1,    61,   306,   208,    -1,    61,   226,
     208,    70,   306,    -1,    61,   226,   208,    70,    -1,    61,
     226,   208,    -1,    61,   208,    70,   306,    -1,    61,   208,
      70,    -1,    61,   208,    -1,   149,    79,    12,   306,   226,
     208,    70,   306,    -1,   149,    79,    12,   306,   226,   208,
      70,    -1,   149,    79,    12,   306,   226,   208,    -1,   149,
      79,    12,   306,   208,    70,   306,    -1,   149,    79,    12,
     306,   208,    70,    -1,   149,    79,    12,   306,   208,    -1,
     149,    79,    12,   226,   208,    70,   306,    -1,   149,    79,
      12,   226,   208,    70,    -1,   149,    79,    12,   226,   208,
      -1,   149,    79,    12,   208,    70,   306,    -1,   149,    79,
      12,   208,    70,    -1,   149,    79,    12,   208,    -1,    60,
     306,   226,   321,   306,    -1,    60,   306,   226,   321,    -1,
      60,   306,   321,   306,    -1,    60,   306,   321,    -1,    60,
     226,   321,   306,    -1,    60,   226,   321,    -1,    60,   321,
     306,    -1,    60,   321,    -1,   219,   226,   224,    -1,   219,
     224,    -1,   224,    -1,   226,   224,    -1,   225,   226,    -1,
     225,    -1,   254,   208,    -1,   254,   231,    -1,   231,    -1,
     227,    -1,   228,    -1,   227,   126,   306,   228,    -1,   227,
     126,   228,    -1,   229,    -1,   230,    -1,    45,   306,   197,
      41,   306,    -1,    45,   306,   197,    41,    -1,    45,   306,
     197,    -1,    45,   197,    41,   306,    -1,    45,   197,    41,
      -1,    45,   197,    -1,    84,   306,   184,    58,   306,    -1,
      84,   306,   184,    58,    -1,    84,   306,   184,    -1,    84,
     184,    58,   306,    -1,    84,   184,    58,    -1,    84,   184,
      -1,   287,   232,    -1,   232,    -1,   233,    -1,    78,   306,
     231,    -1,    78,   231,    -1,   234,    22,   306,   233,    -1,
     234,    22,   233,    -1,   234,    -1,   234,   235,    -1,   235,
      -1,   238,    -1,   235,   282,   306,   238,    -1,   235,   282,
     238,    -1,   235,   279,   306,   238,    -1,   235,   279,   238,
      -1,   235,   236,   237,    -1,   143,   281,   290,    -1,    52,
     306,   234,    53,   306,    -1,    52,   306,   234,    53,    -1,
      52,   306,   234,    -1,    52,   234,    53,   306,    -1,    52,
     234,    53,    -1,    52,   234,    -1,   240,    -1,   240,   239,
     238,    -1,   144,   281,   290,    12,   306,    -1,   144,   281,
     290,    12,    -1,   144,   281,    12,   306,    -1,   144,   281,
      12,    -1,   142,   278,   290,    12,   306,    -1,   142,   278,
     290,    12,    -1,   142,   278,    12,   306,    -1,   142,   278,
      12,    -1,   241,    -1,   241,    12,   306,   240,    -1,   241,
      12,   240,    -1,    79,   306,   285,   231,   286,   240,    -1,
      79,   285,   231,   286,   240,    -1,   285,   231,   286,   240,
      -1,   242,    -1,   241,    20,   306,   242,    -1,   241,    20,
     242,    -1,   243,    -1,   243,   252,    -1,    14,   306,    -1,
      14,    -1,    44,    95,   306,    -1,    44,    95,    -1,    44,
     306,    -1,    44,    -1,   244,    -1,    73,   306,   208,    74,
     306,    77,   306,    -1,    73,   306,   208,    74,   306,    77,
      -1,    73,   306,   208,    74,   306,    -1,    73,   306,   208,
      74,    77,   306,    -1,    73,   306,   208,    74,    77,    -1,
      73,   306,   208,    74,    -1,    73,   306,   208,    77,   306,
      -1,    73,   306,   208,    77,    -1,    73,   306,   208,    -1,
      73,   208,    74,   306,    77,   306,    -1,    73,   208,    74,
     306,    77,    -1,    73,   208,    74,   306,    -1,    73,   208,
      74,    77,   306,    -1,    73,   208,    74,    77,    -1,    73,
     208,    74,    -1,    73,   208,    77,   306,    -1,    73,   208,
      77,    -1,    73,   208,    -1,   245,    -1,    86,   306,   266,
      -1,    86,   266,    -1,   246,    -1,   247,    -1,   248,    -1,
     124,    -1,   249,    -1,   250,    -1,    52,   306,   234,    53,
     306,    -1,    52,   306,   234,    53,    -1,    52,   306,   234,
      -1,    52,   234,    53,   306,    -1,    52,   234,    53,    -1,
      52,   234,    -1,   155,   272,    77,   306,    -1,   155,   272,
      77,    -1,   155,   274,    77,   306,    -1,   155,   274,    77,
      -1,    98,   306,   243,    -1,    98,   243,    -1,    49,   306,
     287,   243,    -1,    49,   287,   243,    -1,    49,   306,   243,
      -1,    49,   243,    -1,    79,   306,   243,    -1,    79,   243,
      -1,   251,   184,    54,   306,    -1,   251,   184,    54,    -1,
     251,   184,    -1,    85,    81,   306,    -1,    85,   306,    -1,
      85,    81,    -1,    85,    -1,   251,   281,   306,    85,    81,
     306,    -1,   251,   281,   306,    85,    81,    -1,   251,   281,
     306,    85,   306,    -1,   251,   281,   306,    85,    -1,   251,
     281,    85,    81,   306,    -1,   251,   281,    85,    81,    -1,
     251,   281,    85,   306,    -1,   251,   281,    85,    -1,   251,
     278,   306,    85,    81,   306,    -1,   251,   278,   306,    85,
      81,    -1,   251,   278,   306,    85,   306,    -1,   251,   278,
     306,    85,    -1,   251,   278,    85,    81,   306,    -1,   251,
     278,    85,    81,    -1,   251,   278,    85,   306,    -1,   251,
     278,    85,    -1,     7,   306,   197,   253,     8,   306,    -1,
       7,   306,   197,   253,     8,    -1,     7,   306,   197,   253,
      -1,     7,   197,   253,     8,   306,    -1,     7,   197,   253,
       8,    -1,     7,   197,   253,    -1,     7,   306,   197,     8,
     306,    -1,     7,   306,   197,     8,    -1,     7,   306,   197,
      -1,     7,   197,     8,   306,    -1,     7,   197,     8,    -1,
       7,   197,    -1,     9,   306,   197,   253,    -1,     9,   197,
     253,    -1,     9,   306,   197,    -1,     9,   197,    -1,   272,
      13,   306,    -1,   272,    13,    -1,   272,    -1,   116,   306,
     255,   115,   306,    -1,   116,   306,   255,   115,    -1,   116,
     306,   255,    -1,   116,   255,   115,   306,    -1,   116,   255,
     115,    -1,   116,   255,    -1,   257,    -1,   256,    -1,    36,
     306,   261,    -1,    36,   261,    -1,   258,    -1,   257,   262,
     258,    -1,   259,    -1,   259,    10,   306,   262,   258,    -1,
     259,    10,   262,   258,    -1,   267,    -1,    92,   306,   262,
     260,    57,   306,    -1,    92,   306,   262,   260,    57,    -1,
      92,   306,   262,   260,    -1,    92,   262,   260,    57,   306,
      -1,    92,   262,   260,    57,    -1,    92,   262,   260,    -1,
     262,   260,    57,   306,    -1,   262,   260,    57,    -1,   262,
     260,    -1,   259,    -1,   260,   259,    -1,   261,   261,   262,
      -1,   267,   261,   262,    -1,   261,   267,   262,    -1,   267,
     267,   262,    -1,   264,    -1,   262,   282,   306,   264,    -1,
     262,   282,   264,    -1,   262,   279,   306,   264,    -1,   262,
     279,   264,    -1,   262,   236,   263,    -1,    52,   306,   262,
      53,   306,    -1,    52,   306,   262,    53,    -1,    52,   306,
     262,    -1,    52,   262,    53,   306,    -1,    52,   262,    53,
      -1,    52,   262,    -1,   265,    -1,   285,   264,   286,   265,
      -1,   265,   239,   264,    -1,   266,    -1,    52,   306,   262,
      53,   306,    -1,    52,   306,   262,    53,    -1,    52,   306,
     262,    -1,    52,   262,    53,   306,    -1,    52,   262,    53,
      -1,    52,   262,    -1,    98,   306,   266,    -1,    98,   266,
      -1,    79,   306,   266,    -1,    79,   266,    -1,    71,   306,
     255,   105,   306,    -1,    71,   306,   255,   105,    -1,    71,
     306,   255,    -1,    71,   255,   105,   306,    -1,    71,   255,
     105,    -1,    71,   255,    -1,    80,   306,   231,   105,   306,
      -1,    80,   306,   231,   105,    -1,    80,   306,   231,    -1,
      80,   231,   105,   306,    -1,    80,   231,   105,    -1,    80,
     231,    -1,   119,   306,    -1,   119,    -1,   269,    -1,   269,
     210,   268,    -1,    52,   306,   267,    53,   306,    -1,    52,
     306,   267,    53,    -1,    52,   306,   267,    -1,    52,   267,
      53,   306,    -1,    52,   267,    53,    -1,    52,   267,    -1,
     270,    -1,   269,   281,   306,   270,    -1,   269,   281,   270,
      -1,   269,   278,   306,   270,    -1,   269,   278,   270,    -1,
     271,    -1,   271,   214,   270,    -1,   254,    -1,   274,    13,
     306,    -1,   274,    13,    -1,   274,    -1,    82,   306,   231,
     105,   306,    -1,    82,   306,   231,   105,    -1,    82,   306,
     231,    -1,    82,   231,   105,   306,    -1,    82,   231,   105,
      -1,    82,   231,    -1,    75,   306,   208,   105,   306,    -1,
      75,   306,   208,   105,    -1,    75,   306,   208,    -1,    75,
     208,   105,   306,    -1,    75,   208,   105,    -1,    75,   208,
      -1,    50,   306,   260,   105,   306,    -1,    50,   306,   260,
     105,    -1,    50,   306,   260,    -1,    50,   260,   105,   306,
      -1,    50,   260,   105,    -1,    50,   260,    -1,   284,   267,
     286,   271,    -1,    61,   306,   267,    70,   306,    -1,    61,
     306,   267,    70,    -1,    61,   306,   267,    -1,    61,   267,
      70,   306,    -1,    61,   267,    70,    -1,    61,   267,    -1,
     149,    79,    12,   306,   267,    70,   306,    -1,   149,    79,
      12,   306,   267,    70,    -1,   149,    79,    12,   306,   267,
      -1,   149,    79,    12,   267,    70,   306,    -1,   149,    79,
      12,   267,    70,    -1,   149,    79,    12,   267,    -1,   273,
      -1,    89,    -1,   273,    89,    -1,   273,   275,    -1,   275,
      -1,   274,    89,    -1,   274,   275,    -1,    16,    -1,    15,
      -1,    62,   275,    -1,   106,   274,    35,    -1,   130,    78,
      98,     4,    81,    -1,   130,    78,    98,     4,    -1,   130,
      78,     4,    81,    -1,   130,    78,     4,    -1,   130,    98,
       4,    81,    -1,   130,    98,     4,    -1,   130,     4,    81,
      -1,   130,     4,    -1,   131,    78,    98,    43,    81,    -1,
     131,    78,    98,    43,    -1,   131,    78,    43,    81,    -1,
     131,    78,    43,    -1,   131,    98,    43,    81,    -1,   131,
      98,    43,    -1,   131,    43,    81,    -1,   131,    43,    -1,
     133,    78,    98,    48,    81,   134,    -1,   133,    78,    98,
      48,   134,    -1,   133,    78,    48,    81,   134,    -1,   133,
      78,    48,   134,    -1,   133,    98,    48,    81,   134,    -1,
     133,    98,    48,   134,    -1,   133,    48,    81,   134,    -1,
     133,    48,   134,    -1,   133,    78,    98,    48,    81,   134,
      -1,   133,    78,    98,    48,   134,    -1,   133,    78,    48,
      81,   134,    -1,   133,    78,    48,   134,    -1,   133,    98,
      48,    81,   134,    -1,   133,    98,    48,   134,    -1,   133,
      48,    81,   134,    -1,   133,    48,   134,    -1,   141,   133,
      78,    98,    48,    81,   134,    -1,   141,   133,    78,    98,
      48,   134,    -1,   141,   133,    78,    48,    81,   134,    -1,
     141,   133,    78,    48,   134,    -1,   141,   133,    98,    48,
      81,   134,    -1,   141,   133,    98,    48,   134,    -1,   141,
     133,    48,    81,   134,    -1,   141,   133,    48,   134,    -1,
     133,    78,    98,    48,    81,   134,    -1,   133,    78,    98,
      48,   134,    -1,   133,    78,    48,    81,   134,    -1,   133,
      78,    48,   134,    -1,   133,    98,    48,    81,   134,    -1,
     133,    98,    48,   134,    -1,   133,    48,    81,   134,    -1,
     133,    48,   134,    -1,   141,   133,    78,    98,    48,    81,
     134,    -1,   141,   133,    78,    98,    48,   134,    -1,   141,
     133,    78,    48,    81,   134,    -1,   141,   133,    78,    48,
     134,    -1,   141,   133,    98,    48,    81,   134,    -1,   141,
     133,    98,    48,   134,    -1,   141,   133,    48,    81,   134,
      -1,   141,   133,    48,   134,    -1,   142,   133,    78,    98,
      48,    81,   134,    -1,   142,   133,    78,    98,    48,   134,
      -1,   142,   133,    78,    48,    81,   134,    -1,   142,   133,
      78,    48,   134,    -1,   142,   133,    98,    48,    81,   134,
      -1,   142,   133,    98,    48,   134,    -1,   142,   133,    48,
      81,   134,    -1,   142,   133,    48,   134,    -1,   135,    98,
      51,    81,   136,    -1,   135,    98,    51,   136,    -1,   135,
      51,    81,   136,    -1,   135,    51,   136,    -1,   135,    98,
      11,    81,   136,    -1,   135,    98,    11,   136,    -1,   135,
      11,    81,   136,    -1,   135,    11,   136,    -1,   135,    40,
      98,    11,    81,    40,   136,    -1,   135,    40,    98,    11,
      40,   136,    -1,   135,    40,    11,    81,    40,   136,    -1,
     135,    40,    11,    40,   136,    -1,   135,    98,    51,    81,
     136,    -1,   135,    98,    51,   136,    -1,   135,    51,    81,
     136,    -1,   135,    51,   136,    -1,   135,    98,    11,    81,
     136,    -1,   135,    98,    11,   136,    -1,   135,    11,    81,
     136,    -1,   135,    11,   136,    -1,   135,    40,    98,    11,
      81,    40,   136,    -1,   135,    40,    98,    11,    40,   136,
      -1,   135,    40,    11,    81,    40,   136,    -1,   135,    40,
      11,    40,   136,    -1,   143,   135,    98,    51,    81,   136,
      -1,   143,   135,    98,    51,   136,    -1,   143,   135,    51,
      81,   136,    -1,   143,   135,    51,   136,    -1,   143,   135,
      98,    11,    81,   136,    -1,   143,   135,    98,    11,   136,
      -1,   143,   135,    11,    81,   136,    -1,   143,   135,    11,
     136,    -1,   143,   135,    40,    98,    11,    81,    40,   136,
      -1,   143,   135,    40,    98,    11,    40,   136,    -1,   143,
     135,    40,    11,    81,    40,   136,    -1,   143,   135,    40,
      11,    40,   136,    -1,   135,    98,    51,    81,   136,    -1,
     135,    98,    51,   136,    -1,   135,    51,    81,   136,    -1,
     135,    51,   136,    -1,   135,    98,    11,    81,   136,    -1,
     135,    98,    11,   136,    -1,   135,    11,    81,   136,    -1,
     135,    11,   136,    -1,   135,    40,    98,    11,    81,    40,
     136,    -1,   135,    40,    98,    11,    40,   136,    -1,   135,
      40,    11,    81,    40,   136,    -1,   135,    40,    11,    40,
     136,    -1,   143,   135,    98,    51,    81,   136,    -1,   143,
     135,    98,    51,   136,    -1,   143,   135,    51,    81,   136,
      -1,   143,   135,    51,   136,    -1,   143,   135,    98,    11,
      81,   136,    -1,   143,   135,    98,    11,   136,    -1,   143,
     135,    11,    81,   136,    -1,   143,   135,    11,   136,    -1,
     143,   135,    40,    98,    11,    81,    40,   136,    -1,   143,
     135,    40,    98,    11,    40,   136,    -1,   143,   135,    40,
      11,    81,    40,   136,    -1,   143,   135,    40,    11,    40,
     136,    -1,   144,   135,    98,    51,    81,   136,    -1,   144,
     135,    98,    51,   136,    -1,   144,   135,    51,    81,   136,
      -1,   144,   135,    51,   136,    -1,   144,   135,    98,    11,
      81,   136,    -1,   144,   135,    98,    11,   136,    -1,   144,
     135,    11,    81,   136,    -1,   144,   135,    11,   136,    -1,
     144,   135,    40,    98,    11,    81,    40,   136,    -1,   144,
     135,    40,    98,    11,    40,   136,    -1,   144,   135,    40,
      11,    81,    40,   136,    -1,   144,   135,    40,    11,    40,
     136,    -1,   137,    98,    39,    81,   306,    -1,   137,    98,
      39,    81,    -1,   137,    98,    39,   306,    -1,   137,    98,
      39,    -1,   137,    39,    81,   306,    -1,   137,    39,    81,
      -1,   137,    39,   306,    -1,   137,    39,    -1,   137,   281,
      42,   306,    -1,   137,   281,    42,    -1,   137,   290,   286,
      -1,   132,    98,    46,    81,   306,    -1,   132,    98,    46,
      81,    -1,   132,    98,    46,   306,    -1,   132,    98,    46,
      -1,   132,    46,    81,   306,    -1,   132,    46,    81,    -1,
     132,    46,   306,    -1,   132,    46,    -1,    42,    81,   306,
      -1,    42,    81,    -1,    42,   306,    -1,    42,    -1,   288,
      -1,   290,    -1,   289,    -1,   288,   283,   306,   289,    -1,
     288,   283,   289,    -1,   288,   280,   306,   289,    -1,   288,
     280,   289,    -1,   288,   283,   306,   291,    -1,   288,   283,
     291,    -1,   288,   280,   306,   291,    -1,   288,   280,   291,
      -1,   290,   283,   306,   289,    -1,   290,   283,   289,    -1,
     290,   280,   306,   289,    -1,   290,   280,   289,    -1,    34,
     306,   231,    33,   306,    -1,    34,   306,   231,    33,    -1,
      34,   306,   231,    -1,    34,   231,    33,   306,    -1,    34,
     231,    33,    -1,    34,   231,    -1,   291,   306,    -1,   291,
      -1,   290,   280,   291,    -1,   290,   283,   291,    -1,   157,
      79,   292,    81,    55,   158,    -1,   157,    79,   292,    81,
     158,    -1,   157,    79,   292,    55,   158,    -1,   157,    79,
     292,   158,    -1,   157,    79,   293,    81,    55,   158,    -1,
     157,    79,   293,    81,   158,    -1,   157,    79,   293,    55,
     158,    -1,   157,    79,   293,   158,    -1,   157,   292,    81,
      55,   158,    -1,   157,   292,    81,   158,    -1,   157,   292,
      55,   158,    -1,   157,   292,   158,    -1,   157,   293,    81,
      55,   158,    -1,   157,   293,    81,   158,    -1,   157,   293,
      55,   158,    -1,   157,   293,   158,    -1,   157,    79,   294,
     298,    17,    55,   158,    -1,   157,    79,   294,   298,    17,
     158,    -1,   157,    79,   294,   298,    55,   158,    -1,   157,
      79,   294,   298,   158,    -1,   157,    79,   294,    17,    55,
     158,    -1,   157,    79,   294,    17,   158,    -1,   157,    79,
     294,    55,   158,    -1,   157,    79,   294,   158,    -1,   157,
     294,   298,    17,    55,   158,    -1,   157,   294,   298,    17,
     158,    -1,   157,   294,   298,    55,   158,    -1,   157,   294,
     298,   158,    -1,   157,   294,    17,    55,   158,    -1,   157,
     294,    17,   158,    -1,   157,   294,    55,   158,    -1,   157,
     294,   158,    -1,   157,    79,   298,   294,    17,    55,   158,
      -1,   157,    79,   298,   294,    17,   158,    -1,   157,    79,
     298,   294,    55,   158,    -1,   157,    79,   298,   294,   158,
      -1,   157,    79,   298,    17,    55,   158,    -1,   157,    79,
     298,    17,   158,    -1,   157,    79,   298,    55,   158,    -1,
     157,    79,   298,   158,    -1,   157,   298,   294,    17,    55,
     158,    -1,   157,   298,   294,    17,   158,    -1,   157,   298,
     294,    55,   158,    -1,   157,   298,   294,   158,    -1,   157,
     298,    17,    55,   158,    -1,   157,   298,    17,   158,    -1,
     157,   298,    55,   158,    -1,   157,   298,   158,    -1,   157,
      17,    55,   158,    -1,   157,    17,   158,    -1,   157,    79,
      17,    55,   158,    -1,   157,    79,    17,   158,    -1,   157,
      55,   158,    -1,   157,    25,   158,    -1,    98,     6,    -1,
       6,    -1,   125,   297,   295,   305,    -1,   125,   297,   305,
      -1,   125,   297,   295,    -1,   125,   297,    -1,   125,   295,
     305,    -1,   125,   305,    -1,   125,   295,    -1,   125,    -1,
     297,   295,   305,    -1,   297,   305,    -1,   297,   295,    -1,
     297,    -1,   295,   305,    -1,   305,    -1,   295,    -1,   123,
      94,    81,    -1,   123,    94,    -1,   123,    -1,    94,    81,
     125,    -1,    94,    81,    -1,    94,   125,    -1,    94,    -1,
     297,   296,    -1,   296,    -1,   112,   300,   301,    76,   299,
      -1,   112,   300,   301,    -1,   112,   300,    76,   299,    -1,
     112,   300,    -1,   112,   301,    76,   299,    -1,   112,   301,
      -1,   112,    76,   299,    -1,   112,    -1,   300,   301,    76,
     299,    -1,   300,   301,    -1,   300,    76,   299,    -1,   300,
      -1,   301,    76,   299,    -1,   301,    -1,    76,   299,    -1,
      30,    81,   112,    -1,    30,    81,    -1,    30,   112,    -1,
      30,    -1,   300,   299,    -1,   299,    -1,   114,   117,    30,
      81,   302,    -1,   114,   117,    30,   302,    -1,   114,   117,
     302,    -1,   114,    30,    81,   302,    -1,   114,    30,   302,
      -1,   114,   302,    -1,   117,    30,    81,   302,    -1,   117,
      30,   302,    -1,   117,   302,    -1,   114,   117,    30,    81,
      -1,   114,   117,    30,    -1,   114,   117,    -1,   114,    30,
      81,    -1,   114,    30,    -1,   114,    -1,   117,    30,    81,
      -1,   117,    30,    -1,   117,    -1,   302,    -1,   302,   303,
      -1,   303,    -1,    32,   304,    -1,   156,   272,    96,    81,
      -1,   156,   272,    96,    -1,   104,    81,    -1,   104,    -1,
     122,    81,    -1,   122,    -1,   305,   304,    -1,   304,    -1,
     306,   307,    -1,   307,    -1,   308,    -1,   310,    -1,   311,
      -1,   312,    -1,   313,    -1,   314,    -1,   100,   306,   194,
      24,   306,   309,    99,    -1,   100,   306,   194,    24,   306,
     309,    -1,   100,   306,   194,    24,   309,    99,    -1,   100,
     306,   194,    24,   309,    -1,   100,   306,   194,   309,    99,
      -1,   100,   306,   194,   309,    -1,   100,   306,   309,    99,
      -1,   100,   306,   309,    -1,   100,   194,    24,   306,   309,
      99,    -1,   100,   194,    24,   306,   309,    -1,   100,   194,
      24,   309,    99,    -1,   100,   194,    24,   309,    -1,   100,
     194,   309,    99,    -1,   100,   194,   309,    -1,   100,   309,
      99,    -1,   100,   309,    -1,   231,    -1,   102,   306,   208,
     208,    99,    -1,   102,   306,   208,   208,    -1,   102,   306,
     208,    99,    -1,   102,   306,   208,    -1,   102,   208,   208,
      99,    -1,   102,   208,   208,    -1,   102,   208,    99,    -1,
     102,   208,    -1,   315,   226,   231,   226,    27,    -1,   315,
     226,   231,   226,    -1,   315,   226,   231,    27,    -1,   315,
     226,   231,    -1,   315,   231,   226,    27,    -1,   315,   231,
     226,    -1,   315,   231,    27,    -1,   315,   231,    -1,   315,
     226,   321,   306,   226,    27,    -1,   315,   226,   321,   306,
     226,    -1,   315,   226,   321,   306,    27,    -1,   315,   226,
     321,   306,    -1,   315,   321,   306,   226,    27,    -1,   315,
     321,   306,   226,    -1,   315,   321,   306,    27,    -1,   315,
     321,   306,    -1,   315,   226,   321,   226,    27,    -1,   315,
     226,   321,   226,    -1,   315,   226,   321,    27,    -1,   315,
     226,   321,    -1,   315,   321,   226,    27,    -1,   315,   321,
     226,    -1,   315,   321,    27,    -1,   315,   321,    -1,   315,
     208,    27,    -1,   315,   208,    -1,   315,    27,    -1,   315,
      -1,   154,   272,    72,    -1,   154,   274,    72,    -1,   107,
     164,   108,    -1,   107,   164,    -1,   120,   306,   272,    13,
      -1,   120,   306,   272,    -1,   120,   272,    13,    -1,   120,
     272,    -1,   120,   306,   274,    13,    -1,   120,   306,   274,
      -1,   120,   274,    13,    -1,   120,   274,    -1,   120,   306,
     116,   306,   255,   115,    -1,   120,   306,   116,   306,   255,
      -1,   120,   306,   116,   255,   115,    -1,   120,   306,   116,
     255,    -1,   120,   116,   306,   255,   115,    -1,   120,   116,
     306,   255,    -1,   120,   116,   255,   115,    -1,   120,   116,
     255,    -1,   316,    28,    -1,   316,    -1,    28,    -1,    23,
      81,    -1,    23,    -1,   316,    23,    81,    -1,   316,    23,
      -1,    37,   318,    -1,   318,    -1,   318,   319,    -1,   319,
      -1,   111,    81,    -1,   111,    -1,    18,    81,    -1,    18,
      -1,   121,    -1,    26,    -1,    38,    -1,   320,    81,    -1,
      81,    -1,   321,    21,    -1,    21,    -1,   323,   306,    -1,
     323,    -1,   323,    83,    -1,    83,    -1
};

/* YYRLINE[YYN] -- source line where rule number YYN was defined.  */
static const yytype_uint16 yyrline[] =
{
       0,   202,   202,   209,   211,   213,   215,   223,   225,   227,
     229,   231,   234,   236,   238,   240,   242,   245,   247,   249,
     251,   253,   256,   258,   260,   262,   264,   267,   269,   271,
     273,   275,   278,   280,   282,   284,   286,   289,   291,   293,
     295,   297,   300,   302,   304,   306,   308,   311,   313,   315,
     317,   319,   322,   324,   326,   328,   330,   333,   335,   337,
     339,   341,   344,   346,   348,   350,   352,   495,   497,   499,
     502,   505,   507,   511,   513,   519,   521,   523,   525,   527,
     529,   531,   533,   535,   537,   539,   541,   543,   545,   547,
     549,   551,   553,   564,   566,   570,   572,   575,   577,   580,
     585,   587,   593,   597,   599,   605,   607,   609,   613,   615,
     617,   619,   626,   628,   630,   635,   637,   639,   641,   643,
     645,   647,   649,   651,   653,   655,   657,   663,   666,   668,
     670,   673,   675,   677,   680,   682,   684,   687,   689,   691,
     697,   699,   701,   703,   705,   707,   709,   711,   713,   715,
     717,   719,   721,   723,   729,   731,   740,   742,   744,   746,
     752,   761,   770,   783,   785,   790,   797,   799,   806,   808,
     810,   812,   814,   816,   818,   821,   823,   825,   827,   829,
     831,   835,   837,   843,   845,   847,   849,   851,   857,   859,
     861,   865,   867,   869,   871,   878,   880,   882,   886,   892,
     894,   896,   898,   900,   906,   908,   911,   913,   915,   918,
     920,   922,   925,   927,   929,   932,   934,   936,   939,   941,
     950,   952,   958,   960,   962,   964,   966,   968,   970,   972,
     974,   981,   983,   985,   994,   996,   998,  1000,  1002,  1004,
    1006,  1008,  1012,  1016,  1018,  1022,  1028,  1032,  1034,  1036,
    1040,  1042,  1047,  1049,  1051,  1053,  1055,  1057,  1065,  1067,
    1071,  1073,  1077,  1079,  1081,  1087,  1089,  1091,  1098,  1100,
    1104,  1106,  1108,  1110,  1114,  1116,  1118,  1120,  1122,  1124,
    1130,  1132,  1134,  1136,  1138,  1146,  1148,  1152,  1154,  1156,
    1158,  1160,  1162,  1164,  1166,  1172,  1174,  1180,  1182,  1184,
    1186,  1190,  1192,  1196,  1198,  1200,  1206,  1208,  1211,  1213,
    1216,  1218,  1220,  1223,  1225,  1227,  1230,  1232,  1234,  1237,
    1239,  1241,  1244,  1246,  1248,  1251,  1254,  1256,  1258,  1261,
    1263,  1265,  1268,  1270,  1272,  1274,  1276,  1278,  1280,  1282,
    1284,  1288,  1290,  1292,  1294,  1296,  1298,  1301,  1303,  1305,
    1307,  1309,  1311,  1315,  1317,  1319,  1321,  1323,  1325,  1328,
    1330,  1332,  1334,  1336,  1338,  1342,  1344,  1346,  1348,  1351,
    1353,  1355,  1357,  1363,  1365,  1367,  1369,  1378,  1380,  1382,
    1386,  1388,  1394,  1398,  1400,  1402,  1408,  1410,  1414,  1416,
    1418,  1420,  1422,  1424,  1428,  1430,  1432,  1434,  1436,  1438,
    1444,  1446,  1452,  1454,  1456,  1462,  1464,  1466,  1472,  1474,
    1483,  1485,  1487,  1489,  1491,  1493,  1497,  1501,  1503,  1505,
    1507,  1509,  1511,  1519,  1521,  1525,  1527,  1529,  1531,  1533,
    1535,  1537,  1539,  1545,  1547,  1549,  1552,  1554,  1556,  1563,
    1565,  1567,  1574,  1576,  1586,  1588,  1591,  1593,  1595,  1597,
    1600,  1603,  1605,  1607,  1609,  1611,  1613,  1615,  1617,  1619,
    1622,  1624,  1626,  1628,  1630,  1632,  1634,  1636,  1638,  1641,
    1644,  1646,  1649,  1652,  1655,  1658,  1661,  1664,  1669,  1671,
    1673,  1675,  1677,  1679,  1683,  1685,  1687,  1689,  1693,  1695,
    1699,  1701,  1705,  1707,  1711,  1713,  1719,  1721,  1723,  1727,
    1729,  1731,  1733,  1735,  1737,  1739,  1741,  1743,  1745,  1747,
    1749,  1751,  1753,  1755,  1757,  1759,  1761,  1763,  1765,  1772,
    1774,  1776,  1778,  1780,  1782,  1784,  1786,  1788,  1790,  1792,
    1794,  1800,  1802,  1804,  1806,  1812,  1814,  1816,  1818,  1820,
    1822,  1824,  1826,  1828,  1834,  1836,  1840,  1842,  1846,  1848,
    1854,  1856,  1858,  1864,  1866,  1868,  1870,  1873,  1875,  1877,
    1880,  1882,  1884,  1888,  1890,  1896,  1898,  1900,  1902,  1912,
    1914,  1916,  1918,  1920,  1922,  1926,  1928,  1930,  1932,  1934,
    1936,  1943,  1945,  1947,  1954,  1956,  1958,  1960,  1962,  1964,
    1966,  1973,  1975,  1977,  1979,  1981,  1983,  1985,  1987,  1989,
    1991,  1993,  1995,  1997,  1999,  2001,  2003,  2005,  2007,  2013,
    2015,  2019,  2021,  2023,  2025,  2027,  2029,  2036,  2038,  2040,
    2042,  2044,  2051,  2053,  2061,  2064,  2066,  2068,  2071,  2073,
    2075,  2077,  2079,  2081,  2084,  2086,  2088,  2090,  2092,  2094,
    2097,  2099,  2101,  2103,  2105,  2107,  2110,  2113,  2115,  2117,
    2119,  2121,  2123,  2126,  2128,  2130,  2132,  2134,  2136,  2143,
    2147,  2149,  2151,  2158,  2160,  2162,  2169,  2171,  2173,  2175,
    2181,  2183,  2185,  2187,  2189,  2191,  2193,  2195,  2201,  2203,
    2205,  2207,  2209,  2211,  2213,  2215,  2221,  2223,  2225,  2227,
    2229,  2231,  2233,  2235,  2239,  2241,  2243,  2245,  2247,  2249,
    2251,  2253,  2255,  2257,  2259,  2261,  2263,  2265,  2267,  2269,
    2273,  2275,  2277,  2279,  2281,  2283,  2285,  2287,  2289,  2291,
    2293,  2295,  2297,  2299,  2301,  2303,  2305,  2307,  2309,  2311,
    2313,  2315,  2317,  2319,  2325,  2327,  2329,  2331,  2333,  2335,
    2337,  2339,  2341,  2343,  2345,  2347,  2353,  2355,  2357,  2359,
    2361,  2363,  2365,  2367,  2369,  2371,  2373,  2375,  2377,  2379,
    2381,  2383,  2385,  2387,  2389,  2391,  2393,  2395,  2397,  2399,
    2403,  2405,  2407,  2409,  2411,  2413,  2415,  2417,  2419,  2421,
    2423,  2425,  2427,  2429,  2431,  2433,  2435,  2437,  2439,  2441,
    2443,  2445,  2447,  2449,  2451,  2453,  2455,  2457,  2459,  2461,
    2463,  2465,  2467,  2469,  2471,  2473,  2484,  2486,  2488,  2490,
    2492,  2494,  2496,  2498,  2500,  2502,  2504,  2510,  2512,  2514,
    2516,  2518,  2520,  2522,  2524,  2530,  2532,  2534,  2536,  2543,
    2545,  2550,  2552,  2554,  2556,  2558,  2560,  2562,  2564,  2566,
    2568,  2570,  2572,  2574,  2579,  2581,  2583,  2585,  2587,  2589,
    2591,  2598,  2600,  2602,  2611,  2613,  2615,  2617,  2619,  2621,
    2623,  2625,  2627,  2629,  2631,  2633,  2635,  2637,  2639,  2641,
    2644,  2646,  2648,  2650,  2652,  2654,  2656,  2658,  2660,  2662,
    2664,  2666,  2668,  2670,  2672,  2674,  2677,  2679,  2681,  2683,
    2685,  2687,  2689,  2691,  2693,  2695,  2697,  2699,  2701,  2703,
    2705,  2707,  2710,  2712,  2715,  2717,  2720,  2722,  2729,  2733,
    2740,  2742,  2745,  2747,  2750,  2752,  2755,  2757,  2760,  2762,
    2765,  2767,  2770,  2772,  2775,  2780,  2782,  2784,  2790,  2792,
    2794,  2796,  2800,  2802,  2808,  2810,  2812,  2814,  2817,  2819,
    2821,  2823,  2826,  2828,  2830,  2832,  2835,  2837,  2839,  2845,
    2847,  2849,  2851,  2855,  2857,  2863,  2865,  2867,  2869,  2871,
    2873,  2875,  2877,  2879,  2882,  2884,  2886,  2888,  2890,  2892,
    2894,  2896,  2898,  2901,  2907,  2909,  2913,  2919,  2921,  2923,
    2925,  2927,  2929,  2933,  2935,  2942,  2944,  2948,  2950,  2952,
    2954,  2956,  2958,  2963,  2965,  2967,  2969,  2971,  2973,  2975,
    2977,  2980,  2982,  2984,  2986,  2988,  2990,  2992,  2994,  2998,
    3002,  3004,  3006,  3008,  3010,  3012,  3014,  3016,  3021,  3023,
    3025,  3027,  3029,  3031,  3033,  3035,  3038,  3040,  3042,  3044,
    3047,  3049,  3051,  3053,  3056,  3058,  3060,  3062,  3065,  3067,
    3069,  3071,  3074,  3076,  3078,  3080,  3084,  3086,  3090,  3092,
    3096,  3098,  3100,  3102,  3104,  3106,  3108,  3110,  3113,  3115,
    3117,  3119,  3121,  3123,  3125,  3127,  3136,  3138,  3140,  3144,
    3146,  3148,  3150,  3157,  3159,  3163,  3165,  3171,  3173,  3175,
    3177,  3179,  3181,  3183,  3187,  3189,  3193,  3195,  3199,  3201,
    3205,  3207
};
#endif

#if YYDEBUG || YYERROR_VERBOSE || 0
/* YYTNAME[SYMBOL-NUM] -- String name of the symbol SYMBOL-NUM.
   First, the terminals, then, starting at YYNTOKENS, nonterminals.  */
static const char *const yytname[] =
{
  "$end", "error", "$undefined", "GARBAGE", "A", "BAhE", "BAI", "BE",
  "BEhO", "BEI", "BIhE", "BIhI", "BO", "BOI", "BRIVLA", "BU", "BY", "CAhA",
  "CAI", "CEhE", "CEI", "CMENE", "CO", "COI", "CU", "CUhE", "DAhO", "DOhU",
  "DOI", "FA", "FAhA", "FAhO", "FEhE", "FEhU", "FIhO", "FOI", "FUhA",
  "FUhE", "FUhO", "GA", "GAhO", "GEhU", "GI", "GIhA", "GOhA", "GOI",
  "GUhA", "I", "JA", "JAI", "JOhI", "JOI", "KE", "KEhE", "KEI", "KI",
  "KOhA", "KUhE", "KUhO", "KU", "LA", "LAhE", "LAU", "LE", "LEhU", "LI",
  "LIhU", "LOhO", "LOhU", "LU", "LUhU", "MAhO", "MAI", "ME", "MEhU",
  "MOhE", "MOhI", "MOI", "NA", "NAhE", "NAhU", "NAI", "NIhE", "NIhO",
  "NOI", "NU", "NUhA", "NUhI", "NUhU", "PA", "PEhA", "PEhE", "PEhO",
  "POhA", "PU", "RAhO", "ROI", "SA", "SE", "SEhU", "SEI", "SI", "SOI",
  "SU", "TAhE", "TEhU", "TEI", "TO", "TOI", "TUhE", "TUhU", "UI", "VA",
  "VAU", "VEhA", "VEhO", "VEI", "VIhA", "VUhO", "VUhU", "XI", "Y", "ZAhO",
  "ZEhA", "ZEI", "ZI", "ZIhE", "ZO", "ZOhU", "ZOI", "PRIVATE_START_EK",
  "PRIVATE_START_GIHEK", "PRIVATE_START_GUHEK", "PRIVATE_START_JEK",
  "PRIVATE_END_JEK", "PRIVATE_START_JOIK", "PRIVATE_END_JOIK",
  "PRIVATE_START_GEK", "PRIVATE_START_BAI", "PRIVATE_EK_KE",
  "PRIVATE_EK_BO", "PRIVATE_JEK_KE", "PRIVATE_JEK_BO", "PRIVATE_JOIK_KE",
  "PRIVATE_JOIK_BO", "PRIVATE_I_JEKJOIK", "PRIVATE_I_BO",
  "PRIVATE_GIHEK_KE", "PRIVATE_GIHEK_BO", "PRIVATE_NAhE_BO",
  "PRIVATE_NAhE_time", "PRIVATE_NAhE_space", "PRIVATE_NAhE_CAhA",
  "PRIVATE_NA_KU", "PRIVATE_NUMBER_MAI", "PRIVATE_NUMBER_MOI",
  "PRIVATE_NUMBER_ROI", "PRIVATE_START_TENSE", "PRIVATE_END_TENSE",
  "PRIVATE_EOF_MARK", "IMPOSSIBLE_TOKEN", "$accept", "all", "chunks",
  "text", "text_1", "text_1A", "text_1B", "text_1C", "paragraphs",
  "paragraph", "i_opt_free_seq", "statement", "inner_statement",
  "statement_1", "i_joik_jek", "statement_2", "i_jj_stag_bo",
  "statement_3", "fragment", "prenex", "sentence", "no_cu_sentence",
  "observative_sentence", "subsentence", "bridi_tail", "gihek_stag_ke",
  "bridi_tail_1", "bridi_tail_2", "gihek_stag_bo", "bridi_tail_3",
  "main_selbri", "tail_terms", "gek_sentence", "terms", "terms_1",
  "terms_2", "term", "term_plain_sumti", "term_placed_sumti",
  "term_tagged_sumti", "tagged_termset", "term_floating_tense",
  "term_floating_negate", "term_other", "termset", "termset_start",
  "termset_body", "sumti", "sumti_1", "joik_ek_ke", "ke_sumti", "sumti_2",
  "sumti_3", "joik_ek_stag_bo", "sumti_4", "sumti_5", "sumti_5a",
  "sumti_5b", "sumti_6", "lahe_sumti_6", "nahe_bo_sumti_6", "name_sumti_6",
  "sumti_tail", "sumti_tail_1", "sumti_tail_1A", "relative_clauses",
  "relative_clause_seq", "relative_clause", "term_relative_clause",
  "full_relative_clause", "selbri", "selbri_1", "selbri_2", "selbri_3",
  "selbri_4", "joik_stag_ke", "ke_selbri_3", "selbri_5",
  "joik_jek_stag_bo", "selbri_6", "tanru_unit", "tanru_unit_1",
  "tanru_unit_2", "ke_selbri3_tu2", "number_moi_tu2", "se_tu2",
  "jai_tag_tu2", "jai_tu2", "nahe_tu2", "abstraction", "nu_nai_seq",
  "linkargs", "links", "quantifier", "mex", "mex_rp", "mex_infix", "mex_1",
  "mex_2", "mex_2_seq", "rp_expression", "operator", "ke_operator",
  "operator_1", "operator_2", "mex_operator", "operand", "ke_operand",
  "operand_1", "operand_2", "operand_3", "number", "inner_number",
  "lerfu_string", "lerfu_word", "ek", "gihek", "jek", "jek_opt_ke",
  "jek_opt_kebo", "joik", "joik_opt_ke", "joik_opt_kebo", "gek", "guhek",
  "gik", "tag", "ctag", "complex_tense_modal", "stag",
  "simple_tense_modal", "se_bai", "bai1", "time", "zeha_pu_nai",
  "time_offset", "time_offset_seq", "space", "space_offset",
  "space_offset_seq", "space_interval", "space_int_props",
  "space_int_prop", "interval_property", "interval_property_seq",
  "free_seq", "free", "metalinguistic", "metalinguistic_main_selbri",
  "reciprocity", "free_vocative", "utterance_ordinal", "parenthetical",
  "subscript", "vocative", "coi_nai_seq", "indicators", "indicator_seq",
  "indicator", "NAI_seq", "CMENE_seq", "NIhO_seq_free_seq", "NIhO_seq", YY_NULL
};
#endif

# ifdef YYPRINT
/* YYTOKNUM[YYLEX-NUM] -- Internal token number corresponding to
   token YYLEX-NUM.  */
static const yytype_uint16 yytoknum[] =
{
       0,   256,   257,   258,   259,   260,   261,   262,   263,   264,
     265,   266,   267,   268,   269,   270,   271,   272,   273,   274,
     275,   276,   277,   278,   279,   280,   281,   282,   283,   284,
     285,   286,   287,   288,   289,   290,   291,   292,   293,   294,
     295,   296,   297,   298,   299,   300,   301,   302,   303,   304,
     305,   306,   307,   308,   309,   310,   311,   312,   313,   314,
     315,   316,   317,   318,   319,   320,   321,   322,   323,   324,
     325,   326,   327,   328,   329,   330,   331,   332,   333,   334,
     335,   336,   337,   338,   339,   340,   341,   342,   343,   344,
     345,   346,   347,   348,   349,   350,   351,   352,   353,   354,
     355,   356,   357,   358,   359,   360,   361,   362,   363,   364,
     365,   366,   367,   368,   369,   370,   371,   372,   373,   374,
     375,   376,   377,   378,   379,   380,   381,   382,   383,   384,
     385,   386,   387,   388,   389,   390,   391,   392,   393,   394,
     395,   396,   397,   398,   399,   400,   401,   402,   403,   404,
     405,   406,   407,   408,   409,   410,   411,   412,   413,   414,
     415
};
# endif

/* YYR1[YYN] -- Symbol number of symbol that rule YYN derives.  */
static const yytype_uint16 yyr1[] =
{
       0,   161,   162,   163,   163,   163,   163,   164,   164,   164,
     164,   164,   164,   164,   164,   164,   164,   164,   164,   164,
     164,   164,   164,   164,   164,   164,   164,   164,   164,   164,
     164,   164,   164,   164,   164,   164,   164,   164,   164,   164,
     164,   164,   164,   164,   164,   164,   164,   164,   164,   164,
     164,   164,   164,   164,   164,   164,   164,   164,   164,   164,
     164,   164,   164,   164,   164,   164,   164,   165,   165,   165,
     165,   166,   166,   167,   167,   168,   168,   168,   168,   168,
     168,   168,   168,   168,   168,   168,   168,   168,   168,   168,
     168,   168,   168,   169,   169,   170,   170,   170,   170,   170,
     171,   171,   172,   173,   173,   174,   174,   174,   175,   175,
     175,   175,   176,   176,   176,   177,   177,   177,   177,   177,
     177,   177,   177,   177,   177,   177,   177,   178,   178,   178,
     178,   178,   178,   178,   178,   178,   178,   178,   178,   178,
     179,   179,   179,   179,   179,   179,   179,   179,   179,   179,
     179,   179,   179,   179,   180,   180,   181,   181,   181,   181,
     181,   181,   181,   182,   182,   183,   184,   184,   185,   185,
     185,   185,   185,   185,   185,   185,   185,   185,   185,   185,
     185,   186,   186,   187,   187,   187,   187,   187,   188,   188,
     188,   189,   189,   189,   189,   190,   190,   190,   191,   192,
     192,   192,   192,   192,   193,   193,   193,   193,   193,   193,
     193,   193,   193,   193,   193,   193,   193,   193,   193,   193,
     194,   194,   195,   195,   195,   195,   195,   195,   195,   195,
     195,   196,   196,   196,   197,   197,   197,   197,   197,   197,
     197,   197,   198,   199,   199,   200,   201,   202,   202,   202,
     203,   203,   204,   204,   204,   204,   204,   204,   205,   205,
     206,   206,   207,   207,   207,   208,   208,   208,   209,   209,
     210,   210,   210,   210,   211,   211,   211,   211,   211,   211,
     212,   212,   212,   212,   212,   213,   213,   214,   214,   214,
     214,   214,   214,   214,   214,   215,   215,   216,   216,   216,
     216,   217,   217,   218,   218,   218,   219,   219,   219,   219,
     219,   219,   219,   219,   219,   219,   219,   219,   219,   219,
     219,   219,   219,   219,   219,   219,   219,   219,   219,   219,
     219,   219,   219,   219,   219,   219,   219,   219,   219,   219,
     219,   220,   220,   220,   220,   220,   220,   220,   220,   220,
     220,   220,   220,   221,   221,   221,   221,   221,   221,   221,
     221,   221,   221,   221,   221,   222,   222,   222,   222,   222,
     222,   222,   222,   223,   223,   223,   223,   224,   224,   224,
     225,   225,   226,   227,   227,   227,   228,   228,   229,   229,
     229,   229,   229,   229,   230,   230,   230,   230,   230,   230,
     231,   231,   232,   232,   232,   233,   233,   233,   234,   234,
     235,   235,   235,   235,   235,   235,   236,   237,   237,   237,
     237,   237,   237,   238,   238,   239,   239,   239,   239,   239,
     239,   239,   239,   240,   240,   240,   240,   240,   240,   241,
     241,   241,   242,   242,   243,   243,   243,   243,   243,   243,
     243,   243,   243,   243,   243,   243,   243,   243,   243,   243,
     243,   243,   243,   243,   243,   243,   243,   243,   243,   243,
     243,   243,   243,   243,   243,   243,   243,   243,   244,   244,
     244,   244,   244,   244,   245,   245,   245,   245,   246,   246,
     247,   247,   248,   248,   249,   249,   250,   250,   250,   251,
     251,   251,   251,   251,   251,   251,   251,   251,   251,   251,
     251,   251,   251,   251,   251,   251,   251,   251,   251,   252,
     252,   252,   252,   252,   252,   252,   252,   252,   252,   252,
     252,   253,   253,   253,   253,   254,   254,   254,   254,   254,
     254,   254,   254,   254,   255,   255,   256,   256,   257,   257,
     258,   258,   258,   259,   259,   259,   259,   259,   259,   259,
     259,   259,   259,   260,   260,   261,   261,   261,   261,   262,
     262,   262,   262,   262,   262,   263,   263,   263,   263,   263,
     263,   264,   264,   264,   265,   265,   265,   265,   265,   265,
     265,   266,   266,   266,   266,   266,   266,   266,   266,   266,
     266,   266,   266,   266,   266,   266,   266,   266,   266,   267,
     267,   268,   268,   268,   268,   268,   268,   269,   269,   269,
     269,   269,   270,   270,   271,   271,   271,   271,   271,   271,
     271,   271,   271,   271,   271,   271,   271,   271,   271,   271,
     271,   271,   271,   271,   271,   271,   271,   271,   271,   271,
     271,   271,   271,   271,   271,   271,   271,   271,   271,   272,
     273,   273,   273,   274,   274,   274,   275,   275,   275,   275,
     276,   276,   276,   276,   276,   276,   276,   276,   277,   277,
     277,   277,   277,   277,   277,   277,   278,   278,   278,   278,
     278,   278,   278,   278,   279,   279,   279,   279,   279,   279,
     279,   279,   279,   279,   279,   279,   279,   279,   279,   279,
     280,   280,   280,   280,   280,   280,   280,   280,   280,   280,
     280,   280,   280,   280,   280,   280,   280,   280,   280,   280,
     280,   280,   280,   280,   281,   281,   281,   281,   281,   281,
     281,   281,   281,   281,   281,   281,   282,   282,   282,   282,
     282,   282,   282,   282,   282,   282,   282,   282,   282,   282,
     282,   282,   282,   282,   282,   282,   282,   282,   282,   282,
     283,   283,   283,   283,   283,   283,   283,   283,   283,   283,
     283,   283,   283,   283,   283,   283,   283,   283,   283,   283,
     283,   283,   283,   283,   283,   283,   283,   283,   283,   283,
     283,   283,   283,   283,   283,   283,   284,   284,   284,   284,
     284,   284,   284,   284,   284,   284,   284,   285,   285,   285,
     285,   285,   285,   285,   285,   286,   286,   286,   286,   287,
     287,   288,   288,   288,   288,   288,   288,   288,   288,   288,
     288,   288,   288,   288,   289,   289,   289,   289,   289,   289,
     289,   290,   290,   290,   291,   291,   291,   291,   291,   291,
     291,   291,   291,   291,   291,   291,   291,   291,   291,   291,
     291,   291,   291,   291,   291,   291,   291,   291,   291,   291,
     291,   291,   291,   291,   291,   291,   291,   291,   291,   291,
     291,   291,   291,   291,   291,   291,   291,   291,   291,   291,
     291,   291,   291,   291,   291,   291,   291,   291,   292,   293,
     294,   294,   294,   294,   294,   294,   294,   294,   294,   294,
     294,   294,   294,   294,   294,   295,   295,   295,   296,   296,
     296,   296,   297,   297,   298,   298,   298,   298,   298,   298,
     298,   298,   298,   298,   298,   298,   298,   298,   298,   299,
     299,   299,   299,   300,   300,   301,   301,   301,   301,   301,
     301,   301,   301,   301,   301,   301,   301,   301,   301,   301,
     301,   301,   301,   301,   302,   302,   303,   304,   304,   304,
     304,   304,   304,   305,   305,   306,   306,   307,   307,   307,
     307,   307,   307,   308,   308,   308,   308,   308,   308,   308,
     308,   308,   308,   308,   308,   308,   308,   308,   308,   309,
     310,   310,   310,   310,   310,   310,   310,   310,   311,   311,
     311,   311,   311,   311,   311,   311,   311,   311,   311,   311,
     311,   311,   311,   311,   311,   311,   311,   311,   311,   311,
     311,   311,   311,   311,   311,   311,   312,   312,   313,   313,
     314,   314,   314,   314,   314,   314,   314,   314,   314,   314,
     314,   314,   314,   314,   314,   314,   315,   315,   315,   316,
     316,   316,   316,   317,   317,   318,   318,   319,   319,   319,
     319,   319,   319,   319,   320,   320,   321,   321,   322,   322,
     323,   323
};

/* YYR2[YYN] -- Number of symbols composing right hand side of rule YYN.  */
static const yytype_uint8 yyr2[] =
{
       0,     2,     1,     2,     2,     3,     3,     6,     6,     5,
       5,     4,     5,     5,     4,     4,     3,     6,     6,     5,
       5,     4,     5,     5,     4,     4,     3,     5,     5,     4,
       4,     3,     4,     4,     3,     3,     2,     5,     5,     4,
       4,     3,     4,     4,     3,     3,     2,     5,     5,     4,
       4,     3,     4,     4,     3,     3,     2,     4,     4,     3,
       3,     2,     3,     3,     2,     2,     1,     2,     1,     1,
       0,     1,     1,     1,     2,     6,     6,     5,     5,     5,
       4,     5,     5,     4,     4,     4,     3,     4,     4,     2,
       3,     3,     1,     1,     3,     1,     1,     3,     3,     2,
       1,     2,     1,     1,     2,     1,     3,     2,     4,     3,
       4,     3,     1,     2,     3,     6,     5,     5,     4,     6,
       5,     5,     4,     5,     4,     4,     3,     1,     6,     5,
       4,     5,     4,     3,     5,     4,     3,     4,     3,     2,
       2,     1,     2,     1,     1,     2,     1,     3,     2,     1,
       1,     1,     1,     1,     3,     2,     4,     3,     1,     1,
       2,     2,     2,     1,     2,     1,     1,     2,     1,     8,
       7,     7,     6,     6,     5,     7,     6,     6,     5,     5,
       4,     3,     2,     1,     5,     4,     4,     3,     1,     4,
       3,     5,     4,     4,     3,     2,     1,     1,     1,     3,
       2,     1,     2,     1,     5,     4,     6,     5,     4,     5,
       4,     3,     5,     4,     3,     4,     3,     2,     3,     2,
       1,     2,     1,     6,     5,     6,     5,     5,     4,     5,
       4,     1,     4,     3,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     3,     2,     2,     2,     3,     2,     1,
       4,     3,     4,     3,     2,     3,     2,     1,     5,     2,
       2,     1,     3,     2,     1,     1,     4,     3,     1,     3,
       3,     2,     3,     2,     5,     4,     3,     4,     3,     2,
       1,     4,     3,     4,     3,     1,     3,     5,     4,     4,
       3,     5,     4,     4,     3,     1,     4,     2,     1,     2,
       1,     2,     1,     4,     3,     2,     1,     1,     2,     1,
       3,     2,     1,     5,     4,     3,     4,     3,     2,     5,
       4,     3,     4,     3,     2,     1,     5,     4,     3,     4,
       3,     2,     2,     1,     4,     3,     2,     2,     1,     2,
       1,     6,     5,     4,     5,     4,     3,     5,     4,     3,
       4,     3,     2,     8,     7,     6,     7,     6,     5,     7,
       6,     5,     6,     5,     4,     5,     4,     4,     3,     4,
       3,     3,     2,     3,     2,     1,     2,     2,     1,     2,
       2,     1,     1,     1,     4,     3,     1,     1,     5,     4,
       3,     4,     3,     2,     5,     4,     3,     4,     3,     2,
       2,     1,     1,     3,     2,     4,     3,     1,     2,     1,
       1,     4,     3,     4,     3,     3,     3,     5,     4,     3,
       4,     3,     2,     1,     3,     5,     4,     4,     3,     5,
       4,     4,     3,     1,     4,     3,     6,     5,     4,     1,
       4,     3,     1,     2,     2,     1,     3,     2,     2,     1,
       1,     7,     6,     5,     6,     5,     4,     5,     4,     3,
       6,     5,     4,     5,     4,     3,     4,     3,     2,     1,
       3,     2,     1,     1,     1,     1,     1,     1,     5,     4,
       3,     4,     3,     2,     4,     3,     4,     3,     3,     2,
       4,     3,     3,     2,     3,     2,     4,     3,     2,     3,
       2,     2,     1,     6,     5,     5,     4,     5,     4,     4,
       3,     6,     5,     5,     4,     5,     4,     4,     3,     6,
       5,     4,     5,     4,     3,     5,     4,     3,     4,     3,
       2,     4,     3,     3,     2,     3,     2,     1,     5,     4,
       3,     4,     3,     2,     1,     1,     3,     2,     1,     3,
       1,     5,     4,     1,     6,     5,     4,     5,     4,     3,
       4,     3,     2,     1,     2,     3,     3,     3,     3,     1,
       4,     3,     4,     3,     3,     5,     4,     3,     4,     3,
       2,     1,     4,     3,     1,     5,     4,     3,     4,     3,
       2,     3,     2,     3,     2,     5,     4,     3,     4,     3,
       2,     5,     4,     3,     4,     3,     2,     2,     1,     1,
       3,     5,     4,     3,     4,     3,     2,     1,     4,     3,
       4,     3,     1,     3,     1,     3,     2,     1,     5,     4,
       3,     4,     3,     2,     5,     4,     3,     4,     3,     2,
       5,     4,     3,     4,     3,     2,     4,     5,     4,     3,
       4,     3,     2,     7,     6,     5,     6,     5,     4,     1,
       1,     2,     2,     1,     2,     2,     1,     1,     2,     3,
       5,     4,     4,     3,     4,     3,     3,     2,     5,     4,
       4,     3,     4,     3,     3,     2,     6,     5,     5,     4,
       5,     4,     4,     3,     6,     5,     5,     4,     5,     4,
       4,     3,     7,     6,     6,     5,     6,     5,     5,     4,
       6,     5,     5,     4,     5,     4,     4,     3,     7,     6,
       6,     5,     6,     5,     5,     4,     7,     6,     6,     5,
       6,     5,     5,     4,     5,     4,     4,     3,     5,     4,
       4,     3,     7,     6,     6,     5,     5,     4,     4,     3,
       5,     4,     4,     3,     7,     6,     6,     5,     6,     5,
       5,     4,     6,     5,     5,     4,     8,     7,     7,     6,
       5,     4,     4,     3,     5,     4,     4,     3,     7,     6,
       6,     5,     6,     5,     5,     4,     6,     5,     5,     4,
       8,     7,     7,     6,     6,     5,     5,     4,     6,     5,
       5,     4,     8,     7,     7,     6,     5,     4,     4,     3,
       4,     3,     3,     2,     4,     3,     3,     5,     4,     4,
       3,     4,     3,     3,     2,     3,     2,     2,     1,     1,
       1,     1,     4,     3,     4,     3,     4,     3,     4,     3,
       4,     3,     4,     3,     5,     4,     3,     4,     3,     2,
       2,     1,     3,     3,     6,     5,     5,     4,     6,     5,
       5,     4,     5,     4,     4,     3,     5,     4,     4,     3,
       7,     6,     6,     5,     6,     5,     5,     4,     6,     5,
       5,     4,     5,     4,     4,     3,     7,     6,     6,     5,
       6,     5,     5,     4,     6,     5,     5,     4,     5,     4,
       4,     3,     4,     3,     5,     4,     3,     3,     2,     1,
       4,     3,     3,     2,     3,     2,     2,     1,     3,     2,
       2,     1,     2,     1,     1,     3,     2,     1,     3,     2,
       2,     1,     2,     1,     5,     3,     4,     2,     4,     2,
       3,     1,     4,     2,     3,     1,     3,     1,     2,     3,
       2,     2,     1,     2,     1,     5,     4,     3,     4,     3,
       2,     4,     3,     2,     4,     3,     2,     3,     2,     1,
       3,     2,     1,     1,     2,     1,     2,     4,     3,     2,
       1,     2,     1,     2,     1,     2,     1,     1,     1,     1,
       1,     1,     1,     7,     6,     6,     5,     5,     4,     4,
       3,     6,     5,     5,     4,     4,     3,     3,     2,     1,
       5,     4,     4,     3,     4,     3,     3,     2,     5,     4,
       4,     3,     4,     3,     3,     2,     6,     5,     5,     4,
       5,     4,     4,     3,     5,     4,     4,     3,     4,     3,
       3,     2,     3,     2,     2,     1,     3,     3,     3,     2,
       4,     3,     3,     2,     4,     3,     3,     2,     6,     5,
       5,     4,     5,     4,     4,     3,     2,     1,     1,     2,
       1,     3,     2,     2,     1,     2,     1,     2,     1,     2,
       1,     1,     1,     1,     2,     1,     2,     1,     2,     1,
       2,     1
};

/* YYDEFACT[STATE-NAME] -- Default reduction number in state STATE-NUM.
   Performed when YYTABLE doesn't specify something else to do.  Zero
   means the default is an error.  */
static const yytype_uint16 yydefact[] =
{
      70,     0,     0,   445,   667,   666,  1080,  1087,  1070,  1082,
    1068,   257,     0,     0,  1083,   449,     0,    92,     0,     0,
     309,     0,     0,     0,     0,     0,   338,    70,     0,   146,
       0,  1085,  1091,     0,   502,     0,   261,   660,     0,     0,
       0,     0,    70,    70,  1078,     0,     0,  1081,   475,   333,
     340,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   163,     0,    70,     0,
      66,    68,    71,    73,    69,    93,    95,   102,   103,   105,
     112,    96,   150,   127,   158,   159,   165,   168,   183,   188,
     196,   197,   149,   220,   222,   231,   234,   236,   235,   239,
     237,   240,   241,   238,     0,   242,   265,   268,   280,   285,
     295,   298,   300,   302,   306,   307,   325,   151,   382,   383,
     386,   387,   198,   401,   402,   407,   409,   410,   423,   433,
     439,   442,   450,   469,   472,   473,   474,   476,   477,     0,
     153,   152,   144,   537,   659,   312,   663,   141,   143,    70,
      70,     0,     0,   249,   829,   831,   830,   851,    70,   986,
     987,   988,   989,   990,   991,   992,  1045,  1067,    70,  1074,
    1076,    70,    70,    72,  1089,   530,     0,     0,   249,     0,
     534,     0,   444,  1079,  1069,   256,   244,   254,     0,     0,
     849,     0,     0,  1073,   447,   448,   393,     0,    89,     0,
     493,     0,     0,     0,   217,   483,     0,     0,     0,   308,
       0,   324,   375,   378,     0,   381,     0,     0,   372,   352,
       0,     0,   668,   318,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   608,     0,   624,
     331,   545,   544,   548,   550,     0,   569,   581,   584,   553,
     609,   617,   622,   627,     0,     0,     0,   337,   336,   468,
       0,     0,   219,   404,     0,   145,   495,     0,     0,     0,
     166,   399,     0,   249,     0,   501,   500,   471,     0,   260,
     489,     0,     0,  1009,   249,     0,  1008,  1017,     0,     0,
    1049,   139,    70,  1077,   543,     0,     0,  1053,  1057,     0,
     332,   339,   677,     0,     0,   685,     0,     0,   824,     0,
       0,     0,     0,     0,     0,     0,     0,   813,     0,     0,
       0,     0,   851,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   909,     0,     0,   952,     0,     0,     0,
       0,   931,     0,   980,   941,   969,   972,   982,   927,   917,
       0,     0,     0,     0,   924,   933,   921,     0,   954,   945,
     947,   973,   975,   984,   923,     1,     0,     4,     3,    67,
      74,     0,   100,    99,     0,   107,     0,   113,   104,     0,
       0,     0,     0,     0,     0,   203,   195,   201,     0,   148,
     155,   160,   161,   162,   164,   221,     0,     0,   264,   259,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     297,   299,     0,     0,   408,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   443,     0,   498,     0,     0,   301,
     305,   536,   661,   662,   311,   664,   665,   140,   142,    65,
      70,    64,    70,     0,   242,     0,     0,   248,    70,   246,
     245,   400,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   850,    61,    70,    70,   985,  1044,  1043,     0,
    1025,  1041,  1072,  1066,    56,    70,    70,    70,  1075,  1084,
      36,    70,    70,    70,    70,    70,  1086,    46,    70,    70,
      70,  1090,  1088,   529,   524,     0,   527,   532,   533,   255,
     253,   243,     0,     0,   848,   846,   446,   392,   390,     0,
     491,   492,     0,     0,     0,   216,   482,     0,   214,   480,
     374,     0,   323,   377,   376,   370,   379,   380,   321,     0,
     368,   371,   351,   349,   346,     0,   317,   315,   547,     0,
       0,   563,   645,     0,   590,     0,   652,     0,   600,     0,
     639,     0,   594,     0,   606,     0,   633,     0,     0,     0,
     592,     0,   607,     0,   330,     0,     0,     0,   562,     0,
       0,     0,     0,     0,     0,     0,   626,     0,     0,   328,
     335,   465,   467,   459,     0,   218,   403,     0,   494,     0,
     167,   398,   396,   499,   470,   488,     0,  1006,     0,  1000,
    1007,  1016,  1015,  1013,   669,  1048,   138,   136,   542,   540,
    1065,     0,  1052,  1056,     0,  1051,  1055,   676,   673,     0,
     675,   684,   681,     0,   683,   822,   823,   820,     0,   701,
       0,     0,     0,     0,   753,     0,     0,     0,   749,     0,
       0,   811,   812,   809,     0,     0,     0,     0,   815,   828,
       0,     0,   816,     0,     0,     0,     0,     0,     0,     0,
      91,    90,    86,     0,     0,     0,     0,   251,  1046,  1047,
     485,   487,     0,   903,   907,   950,   951,   976,   906,   948,
       0,     0,     0,     0,     0,   929,   930,   908,   979,     0,
     937,   939,   968,   966,   960,   971,   963,   981,   926,   916,
     913,   915,     0,     0,     0,   865,     0,     0,   869,     0,
       0,   885,     0,   922,   920,   932,   919,     0,     0,   901,
       0,     0,   953,   943,     0,   974,   983,     6,     5,    94,
     101,    97,    98,     0,   106,     0,     0,   114,   182,     0,
     187,     0,     0,   190,   202,   200,   157,     0,   147,   154,
       0,     0,     0,   233,     0,   263,     0,   267,     0,   273,
     271,     0,   269,   284,     0,   282,     0,     0,     0,   286,
     385,     0,   406,     0,     0,     0,     0,   415,   414,     0,
     412,     0,     0,     0,   424,   435,     0,   441,     0,     0,
       0,     0,   497,   518,     0,   510,     0,   304,   535,   310,
      63,    62,     0,     0,     0,   211,     0,   247,   133,    70,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   835,   839,     0,   833,   837,     0,   843,   852,     0,
     841,   853,     0,    60,    70,    59,    70,  1042,  1021,  1037,
    1024,  1023,  1040,  1039,  1033,  1071,    55,    70,    54,    70,
      51,    70,    70,    35,    70,    34,    70,    31,    70,    70,
      26,    70,    70,    70,    16,    70,    70,    70,    45,    70,
      44,    70,    41,    70,    70,   528,   523,   526,   521,   531,
     252,   847,   845,   391,   389,   490,     0,   215,   481,     0,
     213,   479,   373,   322,   369,   320,   366,   367,   350,   348,
     345,   343,   316,   314,     0,     0,     0,     0,   546,   644,
     564,   642,   589,   587,   651,   649,   599,   597,   638,   636,
     593,   605,   603,   632,   630,   559,     0,   591,     0,   329,
     549,     0,     0,     0,   574,   561,   573,     0,   571,     0,
     583,     0,   610,   621,     0,   619,     0,   623,   625,     0,
       0,   327,   334,   464,   462,   466,   456,   458,     0,     0,
     397,   395,     0,  1004,  1005,     0,   998,   999,  1014,  1012,
    1011,   137,   135,   541,   539,  1064,  1063,  1061,     0,  1050,
    1054,   672,   671,   674,   680,   679,   682,   821,   818,   819,
     700,     0,   697,     0,     0,   699,   752,     0,     0,     0,
     748,     0,   751,     0,   747,   810,   807,   808,     0,   741,
       0,     0,     0,   737,     0,     0,   814,   826,   827,   852,
     853,     0,   709,     0,     0,     0,     0,   765,     0,     0,
       0,   761,     0,     0,    88,    87,    83,    85,     0,    84,
       0,    80,   364,     0,     0,   250,   484,   486,   902,   949,
       0,   905,     0,     0,   857,     0,     0,   861,     0,     0,
     877,     0,     0,     0,   893,     0,   928,   940,     0,   935,
       0,   967,   959,   965,   957,   970,   962,   925,   914,   912,
     911,   978,   864,     0,   863,   868,     0,   867,     0,   883,
     884,     0,     0,   881,   918,     0,   899,   900,     0,     0,
     897,   944,     0,   946,   111,   109,   126,     0,     0,     0,
     181,   180,     0,   186,   185,   194,     0,   189,   199,   156,
     230,     0,   228,     0,     0,     0,   232,   262,     0,   266,
     272,   270,   279,     0,   283,   281,   294,     0,   290,     0,
     384,   405,     0,     0,     0,     0,   416,   422,     0,   413,
     411,   432,     0,   428,     0,   434,   440,     0,   693,     0,
       0,     0,   496,   516,   517,   514,   508,   509,   506,   303,
     205,   296,   438,   210,   208,   132,   130,     0,   717,     0,
       0,     0,     0,   777,     0,     0,     0,   773,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   834,   838,   832,   836,   842,     0,
     840,    58,    57,  1020,  1019,  1036,  1035,  1029,  1022,  1038,
    1032,  1031,    53,    52,    50,    70,    49,    70,    33,    32,
      30,    70,    29,    70,    25,    70,    24,    70,    21,    70,
      70,    15,    70,    14,    70,    11,    70,    70,    43,    42,
      40,    70,    39,    70,   522,   525,   520,   844,   388,   212,
     478,   319,   365,   347,   344,   342,   313,   565,   567,   566,
     568,   643,   641,   588,   586,   650,   648,   598,   596,   637,
     635,   604,   602,   631,   629,   558,   556,   658,     0,   552,
       0,   580,     0,   560,   572,   570,   616,     0,   620,   618,
     646,   582,   326,   463,   461,   455,   453,   457,   437,     0,
     394,  1002,  1003,     0,   996,   997,  1010,   134,   538,  1062,
    1060,  1059,   670,   678,   817,   696,     0,   695,   698,   757,
       0,     0,     0,   750,   746,   806,   740,     0,     0,     0,
     736,     0,   739,     0,   735,   825,   708,     0,   705,     0,
       0,   707,   764,     0,     0,     0,   760,     0,   763,     0,
     759,    82,    79,    81,    78,    77,   363,   361,   358,     0,
     904,   856,     0,   855,   860,     0,   859,     0,   875,   876,
       0,     0,   873,     0,   891,   892,     0,     0,   889,   936,
       0,   938,   958,   964,   956,   961,   910,   977,   862,   866,
     882,     0,   879,   880,   898,     0,   895,   896,   942,   110,
     108,   125,   122,     0,   118,     0,   124,   178,   179,   174,
     184,   193,   192,   229,   227,   226,     0,   224,     0,   258,
     278,   276,   293,   292,   289,   288,     0,   765,     0,     0,
       0,   761,     0,     0,   421,   419,   431,   430,   427,   426,
     692,     0,   689,     0,     0,   691,   515,   512,   513,   507,
     504,   505,   204,   209,   207,   131,   129,   716,     0,   713,
       0,     0,   715,   776,     0,     0,     0,   772,     0,   775,
       0,   771,     0,   725,     0,     0,     0,     0,   733,     0,
       0,     0,     0,   789,     0,     0,     0,   785,     0,     0,
       0,   801,     0,     0,     0,   797,     0,     0,  1018,  1034,
    1028,  1027,  1030,    48,    47,    28,    27,    23,    22,    20,
      70,    19,    70,    13,    12,    10,    70,     9,    70,    38,
      37,   519,   341,   640,   585,   647,   595,   634,   601,   628,
     557,   555,   657,   655,   551,   579,   577,   615,   613,   460,
     454,   452,   436,  1001,   994,   995,  1058,   694,   756,   755,
       0,   745,     0,     0,     0,   738,   734,   704,     0,   703,
     706,   769,     0,     0,     0,   762,   758,    76,    75,   362,
     360,   357,   355,   854,   858,   874,     0,   871,   872,   890,
       0,   887,   888,   934,   955,   878,   894,   121,   120,   117,
     116,   123,   177,   176,   172,   173,   191,   225,   223,   277,
     275,   291,   287,   764,     0,     0,     0,   760,     0,   763,
       0,   759,   420,   418,   429,   425,   688,     0,   687,   690,
     511,   503,   206,   128,   712,     0,   711,   714,   781,     0,
       0,     0,   774,   770,   724,     0,   721,     0,     0,   723,
     732,     0,   729,     0,     0,   731,   788,     0,     0,     0,
     784,     0,   787,     0,   783,   800,     0,     0,     0,   796,
       0,   799,     0,   795,  1026,    18,    17,     8,     7,   554,
     656,   654,   578,   576,   614,   612,   451,   993,   754,   744,
     743,     0,   702,   768,   767,     0,   359,   356,   354,   870,
     886,   119,   115,   175,   171,   170,   274,   769,     0,     0,
       0,   762,   758,   417,   686,   710,   780,   779,     0,   720,
       0,   719,   722,   728,     0,   727,   730,   793,     0,     0,
       0,   786,   782,   805,     0,     0,     0,   798,   794,   653,
     575,   611,   742,   766,   353,   169,   768,   767,     0,   778,
     718,   726,   792,   791,     0,   804,   803,     0,   766,   790,
     802
};

/* YYDEFGOTO[NTERM-NUM].  */
static const yytype_int16 yydefgoto[] =
{
      -1,    67,    68,    69,    70,    71,    72,    73,    74,    75,
     373,    76,    77,    78,   375,    79,   377,    80,    81,    82,
      83,    84,    85,   443,    86,   381,    87,    88,   384,    89,
      90,   386,    91,    92,    93,    94,    95,    96,    97,    98,
      99,   100,   101,   102,   103,   104,   399,   105,   106,   404,
     762,   107,   108,   409,   109,   110,   111,   112,   113,   114,
     115,   116,   211,   212,   213,   117,   118,   119,   120,   121,
     122,   123,   124,   125,   126,   567,   777,   127,   421,   128,
     129,   130,   131,   132,   133,   134,   135,   136,   137,   138,
     139,   140,   141,   176,   240,   241,   242,   243,   244,   542,
     904,   245,   934,   246,   247,   248,   249,   942,   250,   251,
     252,   143,   144,   145,   146,   147,   148,   427,   569,   650,
     320,   570,   651,   151,   152,   803,   153,   154,   155,   156,
     157,   351,   352,   353,   354,   355,   356,   357,   358,   359,
     360,   361,   362,   363,   364,   462,   159,   160,   286,   161,
     162,   163,   164,   165,   166,   167,   168,   169,   170,   171,
     172,   173,   174
};

/* YYPACT[STATE-NUM] -- Index in YYTABLE of the portion describing
   STATE-NUM.  */
#define YYPACT_NINF -692
static const yytype_int16 yypact[] =
{
    5100,  4465,  4465,  3488,  -692,  -692,   -46,  -692,    46,  -692,
    -692,  8309,  3159,   480,  -692,   540,  4465,  3488,  3250,  1683,
    3488,  4885,  8246,   296,  5224,  8070,  3488,  5100,  8391,  2548,
    2693,  -692,  -692,  6128,  1881,  2064,  3488,  -692,  3772,  6449,
    8391,   296,  5100,  5865,    60,  8070,  1239,  -692,  -692,  3488,
    3488,   647,   333,   405,  1048,    72,   446,   -53,   -33,   103,
     122,   162,   121,  1078,  1078,   552,  -692,   347,  4727,    53,
    -692,  5992,    52,  -692,   279,   330,  -692,  -692,   410,  -692,
     424,  -692,  6235,  -692,  -692,  -692,  -692,   910,   371,  -692,
    7547,  -692,  6556,   485,   595,  -692,  -692,  -692,  -692,  -692,
    -692,  -692,  -692,  -692,  7760,  -692,   521,  1249,  -692,  1038,
    -692,    89,    89,  -692,  -692,  -692,  -692,  -692,   579,  -692,
    -692,  -692,  -692,  -692,  -692,  3340,  1673,  -692,   173,   629,
    -692,   637,  -692,  -692,  -692,  -692,  -692,  -692,  -692,  2789,
    -692,  -692,  2286,   697,  1209,  1419,  -692,  3488,  3488,  5865,
    5865,  6342,  3624,  7859,  1856,  -692,  1856,  3488,  5716,  -692,
    -692,  -692,  -692,  -692,  -692,  -692,  6917,   282,  5716,   480,
    -692,  5411,  5567,  -692,   863,  1241,  2286,  2107,  4089,  4465,
     644,  4465,  3488,  -692,  -692,  3488,  -692,  8328,  3910,  3159,
     694,  2887,  3159,   480,  3488,  3488,   725,  4465,  3488,  3772,
    -692,  1360,  3250,  1682,   730,  3091,  6342,   719,  1683,  3488,
    1829,   756,  -692,    89,  2380,  -692,  7235,  4885,   583,   799,
    2107,  8246,  -692,   761,  2608,  5224,  8417,  8151,  5506,  8417,
    8070,  8391,  2064,  3159,  3159,  5506,  2064,  3488,   829,  -692,
     823,  -692,  1924,  -692,   931,  8480,  -692,   173,  -692,  -692,
    1178,  -692,  1038,  1458,  1437,  1924,  8070,  3488,   901,  1225,
    8391,  2548,  -692,  -692,  4088,  2548,  -692,  3624,  2693,  6342,
    -692,   862,  6683,  7891,  6128,  3488,  3488,  -692,  2064,  3488,
    -692,  3772,  7021,  -692,  7989,  6449,   899,  4528,  8391,  1102,
     860,   893,  5865,  -692,   954,  8070,  8070,  1021,  1473,  2045,
    3488,  3488,   997,    55,  1082,  1080,   147,  1071,  1996,  1129,
      -3,   428,  1153,   307,    58,   381,   155,  2449,  1174,   718,
    1191,   538,  -692,  1132,   757,  1729,    22,  1257,  1214,  1220,
    1739,  1229,  1613,  -692,    24,  1139,   750,   927,  1167,  1300,
    1326,   189,  1325,  1271,   638,    96,   646,  1283,  1244,  1577,
    1264,    91,   459,   906,   927,  -692,  1577,  1122,  -692,  1240,
    1304,  1349,  -692,  -692,   927,  -692,    57,  -692,  -692,   279,
    -692,  5992,  3488,  5992,  1340,  6235,  1351,  6235,  -692,  6235,
    1259,  1344,  2548,  1259,  1451,  3488,  -692,  7625,  2548,  3488,
    3488,  -692,  -692,  -692,  -692,   485,  1777,  4465,  7703,  -692,
    7760,  3186,  1276,  1270,  1358,  8391,  8391,  1276,  1270,  2107,
    -692,  -692,  3186,  3910,  1673,  1294,  1379,  3910,  3910,  1303,
    1270,   404,  3910,  3772,  -692,  1159,  1388,  1431,  2276,  -692,
    1385,  3488,  -692,  -692,  3488,  -692,  -692,  3488,  3488,  -692,
    5865,  -692,  5865,  1405,  1405,  1405,  1683,  3488,  5865,  -692,
    -692,  -692,  1216,   882,  1317,  1322,  1321,  1327,   951,   951,
     951,   951,  3488,  -692,  5865,  5865,  -692,  -692,  1430,  3372,
     116,  2214,  1380,  -692,  -692,  5865,  5865,  5716,  -692,  -692,
    -692,  5865,  5865,  5716,  5716,  5567,  -692,  -692,  5865,  5865,
    5716,  -692,  3488,  3488,  1452,  1405,  1275,  -692,   644,  3488,
    3488,  -692,  3910,  3159,  3488,  1434,  3488,  3488,  1423,  3772,
    -692,  -692,  1360,  1682,  1682,  3488,  3488,  1682,  1422,  4205,
    -692,  2608,  3488,  -692,  -692,   583,  -692,  -692,  1433,  2380,
     583,  3488,  3488,  1424,  1426,  2107,  3488,  1438,  1437,  1437,
    8417,  -692,  8564,  8151,   735,  5506,  1435,  8417,  1396,  8070,
    1399,  8391,  -692,  2064,  1401,  3159,  1402,  3159,  8480,  5506,
    -692,  2064,  3488,  1481,  3488,  8480,  5506,  1457,  8632,  5506,
    5506,  1924,  1459,  8417,  8417,  1437,  3488,  1405,  1405,  1443,
    3488,  1121,  3488,  1246,  2548,  -692,  -692,  1405,  -692,  3624,
    -692,  3488,  1455,  3488,  -692,  -692,  3159,  1415,  7128,  1418,
    -692,  -692,  1428,  8816,  -692,  -692,  3488,  1408,  3488,  1406,
    1413,  8070,  -692,  -692,  8070,  1510,  1669,  -692,  1453,  1528,
    1460,  -692,  1461,  1496,  1469,  3488,  3488,  2631,  1420,  -692,
      25,  1513,   255,  1427,  -692,   120,  1559,  1440,  -692,   389,
     393,  3488,  3488,  2833,   490,   184,   512,   498,  3488,  3100,
    1432,  1432,  -692,   518,   804,  1529,   527,   192,   557,   567,
    3488,  3488,  3488,    75,    78,   739,  8246,  3488,  -692,  -692,
    3488,  3488,  1429,  -692,  -692,  1468,  -692,  -692,  -692,  -692,
      59,   466,   475,  1151,  1154,  1465,  -692,  -692,  -692,  1300,
    1297,  1508,   406,  1188,  1349,   454,  1349,  -692,  1511,   927,
    1577,   927,  1497,  1436,   212,  -692,  1439,   313,  -692,   337,
    1441,  -692,    64,   927,   927,  -692,   927,   364,  1442,  -692,
     168,  1300,  -692,  1520,  1300,  -692,  -692,  -692,  -692,   330,
    3488,  -692,  -692,  1729,  -692,  6810,   104,  -692,  1432,  2548,
    7313,  2548,    93,  7313,  3488,  3488,  -692,  2548,  3488,  3488,
    4465,  4465,  1777,  -692,  4465,  3488,  1405,  -692,  3186,  1432,
    1432,  8391,  -692,  -692,  8391,  -692,  8391,    97,   112,  -692,
    -692,  3186,  -692,  3910,  1005,  1432,  3910,  -692,  -692,  3910,
    -692,  3910,   118,   136,  -692,  -692,  3910,  -692,  3772,   610,
     831,  1553,  3488,  3244,  2571,  3315,  3371,  3488,  3488,  3488,
    -692,  -692,  6342,  2107,   404,  1551,  1683,  3488,  1495,  5865,
     666,   912,  1561,   631,   199,   642,   708,  1288,  1343,  1033,
    1134,  -692,  3488,   951,  -692,  3488,   951,  -692,  3488,   951,
    -692,  3488,   951,  -692,  5865,  -692,  5865,  -692,   689,  2753,
    -692,  1583,  -692,  1585,  2980,  -692,  -692,  5865,  -692,  5865,
    -692,  5865,  5865,  -692,  5865,  -692,  5865,  -692,  5865,  5865,
    -692,  5865,  5865,  5716,  -692,  5865,  5865,  5716,  -692,  5865,
    -692,  5865,  -692,  5865,  5865,  3488,  3488,  3488,  1605,  -692,
    3488,  3488,  3488,  3488,  3488,  -692,  1682,  3488,  3488,  1682,
    3488,  3488,  -692,  3488,  3488,  3488,   583,  3488,  3488,  3488,
    3488,  1544,  3488,  3488,  7735,  7735,  7735,  7735,  1437,  3488,
    -692,  8670,  3488,  1242,  3488,  1546,  3488,  1512,  3488,  1514,
    -692,  3488,  1517,  3488,  1518,  8738,  8480,  -692,  8417,  3488,
    -692,  8480,  5506,  5506,  -692,  3488,  -692,  5506,  -692,  5506,
    -692,  8417,  -692,  -692,  8417,  -692,  8417,  -692,  3488,  1437,
    1163,  3488,  3488,  3488,  1872,  3488,  3332,  3488,   404,  1405,
    3488,  3488,  3159,  1516,  -692,  3159,  1519,  -692,  -692,  -692,
    1531,  3488,  3488,  3488,  3488,  -692,  1523,  1532,  8070,  -692,
    -692,  -692,  1550,  -692,  -692,  1552,  -692,  3488,  3488,  3488,
    -692,  1498,  -692,   676,  1500,  -692,  -692,  1525,  1615,   511,
    -692,  1536,  -692,  1540,  -692,  3488,  3488,  3488,  1541,  -692,
     603,  1654,  1543,  -692,   655,   667,  3488,  3488,  3488,  -692,
    -692,  1534,  -692,   693,  1647,   794,  1557,  -692,   680,  1685,
    1567,  -692,   696,   700,  3488,  3488,  3488,  3488,   919,  3488,
    1207,  3488,  1637,  2107,  8246,  3488,  3488,  3488,  -692,  -692,
    1555,  -692,  1560,   373,  -692,  1566,   374,  -692,   387,  1568,
    -692,   245,   394,  1570,  -692,   335,  -692,  -692,  1300,  1632,
    1300,  1349,  1349,   528,  1349,  1349,  1349,  -692,   927,   927,
     927,  1628,  -692,  1571,  -692,  -692,  1572,  -692,  1581,  -692,
    -692,   417,  1582,  -692,   927,  1587,  -692,  -692,   442,  1595,
    -692,  -692,  1300,  -692,  3488,  3488,  3488,   139,   142,  1228,
    1856,  7391,  2548,  -692,  7313,  3488,  1335,  -692,  3488,  -692,
     595,  4465,   595,  4465,  4465,  4465,  -692,  3488,  7760,  -692,
    1856,  1856,  1662,  8391,  -692,  -692,  3488,  1425,  3488,  1545,
    -692,  -692,   706,   247,   709,   713,  1856,  4207,  3910,  -692,
    -692,  3488,  1579,  3488,  1608,  -692,  -692,  1591,  -692,   808,
    1715,   830,  3488,  3488,  3488,  3359,  3488,  3488,  3461,  3488,
    7547,  -692,  -692,  3488,  1711,  3488,  1655,  1642,  -692,   835,
    1718,   878,  1641,  -692,   714,  1768,  1651,  -692,   717,   720,
     914,   952,  1743,   925,  1049,  1745,   737,   327,   760,   888,
     765,   361,   783,  1044,  -692,  3488,  -692,  3488,  -692,  3488,
    -692,  -692,  -692,  -692,  1767,  -692,  1770,  3025,  -692,  -692,
    -692,  1772,  -692,  -692,  -692,  5865,  -692,  5865,  -692,  -692,
    -692,  5865,  -692,  5865,  -692,  5865,  -692,  5865,  -692,  5865,
    5865,  -692,  5865,  -692,  5865,  -692,  5865,  5865,  -692,  -692,
    -692,  5865,  -692,  5865,  3488,  3488,  3488,  3488,  3488,  3488,
    3488,  3488,  3488,  3488,  3488,  3488,  3488,  1673,  1673,  1673,
    1673,  3488,  3488,  3488,  3488,  3488,  3488,  3488,  3488,  3488,
    3488,  3488,  3488,  3488,  3488,  3488,  8776,  1734,  8417,  -692,
    8480,  1603,  5506,  3488,  -692,  -692,  1757,  8417,  -692,  -692,
    -692,  -692,  3488,  3488,  3488,  3488,  3400,  3488,  -692,   404,
    3488,  1726,  -692,  3159,  1727,  -692,  -692,  3488,  3488,  -692,
    -692,  1702,  -692,  -692,  3488,  -692,  1695,  -692,  -692,  -692,
    1698,  1699,  1801,  -692,  -692,  3488,  -692,  1708,  1806,   811,
    -692,  1713,  -692,  1730,  -692,  3488,  -692,  1714,  -692,   946,
    1731,  -692,  -692,  1732,  1807,   959,  -692,  1733,  -692,  1735,
    -692,  3488,  3488,  3488,  3488,  3488,  3488,  1797,  1805,  2107,
    -692,  -692,  1725,  -692,  -692,  1728,  -692,  1736,  -692,  -692,
     465,  1738,  -692,  1740,  -692,  -692,   472,  1748,  -692,  -692,
    1300,  -692,  1349,  1349,  1349,  1349,   927,  -692,  -692,  -692,
    -692,  1753,  -692,  -692,  -692,  1763,  -692,  -692,  -692,  3488,
    3488,  3488,  3488,  1689,  3488,  1747,  3488,  3815,  -692,  7469,
    -692,  3488,  3488,   595,   595,   595,  4465,   595,  4465,  -692,
    3488,  1823,  3488,  3488,  3488,  3488,  1751,  1744,  1028,  1882,
    1756,  1746,   790,   840,  3488,  4384,  3488,  3488,  3488,  3488,
    -692,  1771,  -692,   947,  1788,  -692,  3488,  3488,  3488,  3488,
    3488,  3488,  -692,  3488,  3488,  3488,  3488,  -692,  1789,  -692,
     994,  1790,  -692,  -692,  1798,  1885,  1072,  -692,  1799,  -692,
    1800,  -692,  1803,  -692,   995,  1890,  1004,  1810,  -692,  1023,
    1900,  1026,  1814,  -692,  1119,  1941,  1820,  -692,   851,   854,
    1822,  -692,  1123,  1948,  1824,  -692,   868,   869,  -692,  -692,
    -692,  1936,  -692,  -692,  -692,  -692,  -692,  -692,  -692,  -692,
    5865,  -692,  5865,  -692,  -692,  -692,  5865,  -692,  5865,  -692,
    -692,  3488,  3488,  3488,  3488,  3488,  3488,  3488,  3488,  3488,
    3488,  3488,  3488,  1894,  -692,  3488,  1645,  3488,  1912,  3488,
    3488,  3488,  -692,  -692,  1867,  -692,  -692,  -692,  -692,  -692,
    1833,  -692,  1835,  1837,  1937,  -692,  -692,  -692,  1844,  -692,
    -692,  -692,  1846,  1851,  1950,  -692,  -692,  3488,  3488,  3488,
    3488,  3488,  1923,  -692,  -692,  -692,  1836,  -692,  -692,  -692,
    1847,  -692,  -692,  -692,  1349,  -692,  -692,  3488,  3488,  3488,
    3488,  3488,  -692,  3815,  3815,  -692,  3488,   595,   595,  3488,
    3488,  3488,  3488,  1845,  1874,  1975,  1155,  1859,  1887,  1860,
    1891,  1861,  3488,  3488,  3488,  3488,  -692,  1897,  -692,  -692,
    3488,  3488,  3488,  3488,  -692,  1898,  -692,  -692,  -692,  1892,
    1902,  1993,  -692,  -692,  -692,  1905,  -692,  1052,  1906,  -692,
    -692,  1910,  -692,  1060,  1911,  -692,  -692,  1913,  1994,  1172,
    -692,  1914,  -692,  1917,  -692,  -692,  1918,  2008,  1226,  -692,
    1921,  -692,  1926,  -692,  -692,  -692,  -692,  -692,  -692,  3488,
    3488,  3488,  3488,  3488,  3488,  3488,  3488,  -692,  -692,  -692,
    -692,  1927,  -692,  -692,  -692,  1928,  3488,  3488,  3488,  -692,
    -692,  3488,  3488,  -692,  -692,  3815,  3488,  1908,  1930,  1931,
    2019,  1919,  1922,  3488,  -692,  -692,  -692,  -692,  1938,  -692,
    1944,  -692,  -692,  -692,  1946,  -692,  -692,  -692,  1939,  1945,
    2046,  -692,  -692,  -692,  1954,  1955,  2053,  -692,  -692,  3488,
    3488,  3488,  -692,  -692,  3488,  -692,  1940,  1947,  1958,  -692,
    -692,  -692,  -692,  -692,  1966,  -692,  -692,  1974,  1962,  -692,
    -692
};

/* YYPGOTO[NTERM-NUM].  */
static const yytype_int16 yypgoto[] =
{
    -692,  -692,  -692,   762,  2672,  -692,  -692,  2048,  2050,  1754,
    -692,  1759,   -12,  -692,  -692,   990,  -692,  -692,  1760,    85,
      82,  -692,  -692,   -26,   -80,  -692,  -692,  -327,  -692,  -692,
    -692,  -691,    48,   -22,   113,  -656,    30,  -692,  -692,  -692,
    -692,  -692,  -692,  -692,     5,  -692,  -397,   153,  -692,  1876,
    -692,  -692,  -284,  1875,  1333,  -692,  -692,  -692,   412,  -692,
    -692,  -692,    40,    -6,  -692,    21,  -692,  -362,  -692,  -692,
     633,   352,  -380,   -14,  -121,   -89,  -692,  -321,  1883,  -392,
    -692,  -409,   971,  -692,  -692,  -692,  -692,  -692,  -692,  -692,
    -692,  1998,   -35,  4164,   -16,  -692,  -692,  -549,  -219,  -183,
    -175,   -93,  -692,  -242,  1192,    66,  -206,  -692,  -692,  -500,
    1189,   125,  -692,    47,    18,   -41,   -62,  -228,  1088,  1263,
     885,  1943,  1272,    -1,  1712,  -177,   805,  -692,  -322,   383,
     640,  1808,  1813,  -304,  -309,  -337,  1809,  -249,  -274,  1811,
    -273,  -238,  -359,  -217,  -293,  1624,  2818,  -692,  -276,  -692,
    -692,  -692,  -692,  -692,  -692,  -692,  1986,  2146,   983,  -692,
     264,     2,  -692
};

/* YYTABLE[YYPACT[STATE-NUM]].  What to do in state STATE-NUM.  If
   positive, shift that token.  If negative, reduce the rule which
   number is the opposite.  If YYTABLE_NINF, syntax error.  */
#define YYTABLE_NINF -746
static const yytype_int16 yytable[] =
{
     177,   177,   725,   756,   414,   205,   597,   271,   541,   599,
     177,   272,   394,   578,   787,   177,   930,   282,   206,   715,
     539,   177,   573,   546,   254,   382,   541,   177,   206,   294,
     785,   175,   180,   772,   662,   183,   683,   416,   177,   177,
     699,   222,   214,   220,   254,   224,   196,   714,   577,  1113,
     770,   538,  1117,   720,   367,   740,   701,   743,   727,   618,
     272,   713,   568,   716,   223,   679,   405,   204,   387,   635,
     378,   691,   253,   943,   945,   947,   371,   262,   628,   672,
     323,  1091,   398,   313,   414,   722,   723,  1037,   289,   177,
    1039,   684,   253,   298,  1120,  1122,   778,   780,   663,    17,
     784,   277,   324,   400,   712,  1115,   991,   694,   696,  1136,
     330,   332,   314,   426,  1050,   270,  1106,   272,   269,  1092,
     677,   763,   765,   315,  1138,   769,   692,   184,   337,   272,
    1151,   629,   410,   411,    16,   544,   821,   824,   827,   830,
     494,   293,   558,   840,   652,   497,   703,   726,  1153,   565,
     325,  1412,   177,   619,  1414,   425,   636,   319,   449,   992,
     997,    16,   433,   436,   186,   177,   639,   379,   750,   326,
     316,   297,   704,    33,   205,   219,   177,   177,   177,    65,
     177,   259,   673,   449,   272,  1098,   177,   469,   329,   331,
     622,   782,   394,   287,   519,  1010,   177,    59,    60,   328,
      33,   998,   206,  1028,   520,   395,   640,   206,   524,   496,
    1184,   498,   368,   693,   548,   177,   728,  1051,   524,   177,
     177,   270,  1093,  1099,   269,   254,   254,   508,   254,   254,
     177,   521,    65,   270,   523,    65,   269,   425,   529,   319,
     579,   327,   535,   590,   254,   623,   224,   272,   592,   705,
      65,   262,   272,   254,    65,   254,   518,   528,  1438,   177,
     206,    65,  1380,   598,   206,   537,   802,  1083,   804,    65,
     685,   436,   177,   253,   253,    65,   253,   253,   449,   609,
     610,   177,  1011,   177,   177,   218,   177,   177,   270,   449,
    1029,   269,   253,    65,   254,   254,    65,  1185,   552,    65,
    1381,   253,   560,   253,   444,   472,   450,   436,   746,   262,
     473,     4,     5,   585,   686,   419,   436,   420,   738,   468,
     963,   742,   966,   910,   541,   416,  1100,   936,   938,   940,
     495,   450,   905,   907,   539,   725,   994,   725,  1494,   541,
     501,   915,   253,   253,   594,  1439,   616,   365,   436,   910,
     436,   270,  1386,   735,   269,   735,   270,   272,    23,   269,
     911,   759,    32,   715,   906,   908,   767,   378,  1086,   526,
    1084,   371,  1502,   533,   534,   925,   305,   372,   398,  1156,
    1065,   206,  1289,   206,   550,   395,   177,   206,   633,   995,
    1387,  1079,  1088,  1141,  1155,   395,   177,   177,   414,   177,
     949,   950,    41,  1382,   177,   177,  1078,  1080,   177,  1140,
     958,   306,  1172,   583,  1114,  1067,   722,  1069,     3,  1095,
    1418,  1094,   757,  1420,   615,  1495,   450,   753,  1372,  1375,
     471,   307,   205,   210,  1061,   485,   210,   450,   337,   321,
     602,   603,  1377,   634,  1298,   206,  1299,  1101,    15,  1383,
    1103,   308,   913,    18,  1072,  1074,   188,  1076,  1149,  1503,
    1150,   878,   637,   879,   379,  1423,   926,  1424,  1425,  1427,
    1001,  1087,  1401,   931,  1003,   702,   630,    28,   525,  1462,
    1134,   530,  1135,    30,   726,   317,   337,  1071,   519,    34,
      35,   841,   843,  1388,   805,  1089,   726,  1405,     6,   726,
     395,  1204,    38,   309,  1206,   451,     9,  1208,  1107,  1014,
    1210,   395,   206,   206,   706,   892,   206,   638,    14,   383,
    1586,  1052,  1096,   524,  1124,  1002,   631,  1590,    48,  1004,
    1055,  1373,  1376,   917,   177,  1075,    53,   254,   254,   254,
     707,   254,   254,   451,   318,  1378,   254,  1053,   254,  1015,
     177,  1331,  1384,   444,   429,   374,  1056,   254,   333,    64,
     337,   204,   585,     8,   254,   805,  1308,   254,    10,   334,
     376,  1008,   254,   254,   254,  1402,   396,   335,  1032,  1128,
     649,   319,   336,   206,   337,   253,   253,   253,   429,   253,
     253,    44,  1332,  1012,   253,   976,   253,   177,   977,  1021,
    1406,    47,   177,    65,   486,   253,     8,   338,  1026,  1393,
     254,    10,   253,   254,   397,   253,   451,   708,  1033,   920,
     253,   253,   253,  1587,  1054,   451,  1009,   927,   339,   210,
    1591,   340,   585,  1057,   436,   194,   451,   210,  1030,   401,
      39,   422,    40,  1337,     1,   190,   341,    42,  1013,   423,
     342,   302,  1022,     2,   215,   394,   343,   215,   253,  1111,
      46,   253,   263,  1027,   344,   177,   345,  1119,   336,   346,
     337,   452,   283,   453,   347,   348,   695,   349,   337,   454,
     455,   456,   457,    39,  1338,    40,  1311,  1043,   901,  1314,
      42,  1157,   910,  1031,    63,  1294,   322,  1295,   905,   907,
     905,   907,   905,    46,   919,   412,   910,   541,   350,   665,
     431,   395,  1182,   725,   689,   725,  1213,   725,   387,  1188,
    1353,   387,  1287,  1186,  1442,   303,  1602,   504,  1605,   644,
     906,  1429,   906,   839,    16,  1296,  1341,    63,   206,   177,
     206,  1544,   177,  1286,  1158,   304,   206,  1177,  1343,   177,
     177,  1041,   345,   177,  1474,   346,   970,  1326,   645,  1189,
     177,  1354,  1147,   177,  1443,   177,   507,  1183,   656,   646,
    1607,   517,  1608,    33,  1347,   430,  1170,  1357,  1187,  1129,
     272,  1359,  1309,   515,  1126,   445,  1396,  1436,   912,   258,
    1440,  1342,   519,   896,  1389,  1475,  1391,   657,  1478,   470,
    1178,  1480,   177,  1344,   290,   206,   178,   178,   658,   430,
    1327,  1267,  1268,  1269,  1270,   522,   647,   191,  1492,  1042,
     536,   178,   263,   201,   207,   505,   191,  1348,  1408,   191,
     366,   675,  1358,  1392,   264,  1394,  1360,  1395,   273,  1290,
    1291,  1496,  1437,   215,   284,  1441,  1500,   215,   395,   527,
     215,  1563,  1023,  1479,  1174,   659,  1481,   215,   215,  1214,
    1216,   726,   676,   726,  1504,  1221,   554,   556,    54,   532,
      55,  1618,   452,  1493,   453,  1350,    57,   726,   415,  1159,
     454,   455,   456,   457,   270,   206,     8,   269,   206,  1451,
     564,    10,  1564,   813,   263,   178,  1497,   273,   586,  1498,
     587,  1501,  1024,   254,   254,   254,   254,   254,   563,   178,
     254,  1454,  1703,  1704,  1132,   283,  1468,  1552,   283,  1505,
     591,  1620,   814,   709,   254,   254,  1619,   254,  1351,  1160,
     254,  1362,  1661,   815,   518,  1663,   336,  1174,   337,  1499,
     254,   566,  1452,   254,   273,   254,   491,   191,   254,  1670,
    1672,   253,   253,   253,   253,   253,   273,   191,   253,  1471,
    1179,   710,  1321,    39,  1455,    40,   322,   580,   605,  1469,
      42,   191,   253,   253,     8,   253,  1621,   254,   253,    10,
     816,   191,   339,    46,   178,    12,   178,  1662,   253,   200,
    1664,   253,   406,   253,   191,  1482,   253,   191,   600,  1573,
    1484,   266,   178,   606,  1671,  1673,  1487,   512,   207,   280,
    1180,   273,  1472,   207,  1745,   191,  1142,    63,   344,   191,
     345,   191,   191,   346,   428,   253,   414,  1568,  1627,   191,
     191,   343,  1419,   725,   612,   725,   725,  1554,   191,   191,
    1574,    52,   177,   177,  1196,  1143,  1038,  1040,  1483,   347,
    1485,    39,   452,    40,   453,  1506,  1144,   380,    42,  1488,
     454,   455,   456,   457,   711,  1369,   264,   910,  1614,   608,
     264,    46,   191,  1197,   273,  1635,  1645,   273,   617,   273,
    1569,  1628,  1543,   350,  1198,  1648,   620,   284,   149,   387,
     284,  1548,   387,     4,     5,  1507,   310,  1489,   822,   825,
     828,   831,   838,  1145,  1651,    63,   398,  1654,    65,  1615,
     177,   206,  1640,   177,   624,   149,  1593,     4,     5,  1109,
     177,  1110,   177,   177,   177,  1116,   311,   177,  1636,  1646,
     149,  1199,   177,  1720,  1445,   574,   586,   604,  1649,   717,
      23,  1724,  1130,  1131,     8,  1200,   312,  1490,   387,    10,
    1137,  1139,   478,  1641,   215,  1594,   149,  1652,  1146,  1657,
    1655,   621,   215,  1666,    23,  1152,  1154,    37,  1058,   177,
     266,  1062,   510,   511,  1201,   627,   478,   718,   407,   726,
     653,   336,   408,   337,    41,  1202,  1721,   264,   922,   264,
     924,   435,   178,   264,  1725,  1709,  1367,  1368,   953,  1546,
    1658,   632,   178,   178,  1667,   178,  1059,   789,    41,  1063,
     654,   664,  1729,   643,   417,   228,   341,   586,  1073,  1364,
     337,    39,   959,    40,     4,     5,   343,   339,    42,   283,
     655,   283,  1203,   648,   230,   725,  1710,   790,  1511,   588,
    1416,    46,   232,   233,   347,   348,   464,   349,   341,   493,
       2,   207,   595,  1730,     4,     5,   475,   791,   343,   481,
     488,   236,     8,   344,   810,   345,  1735,    10,   346,   666,
     336,    23,   337,   667,   191,    63,   347,   348,   350,   349,
     719,   751,   237,   877,     2,   254,  1431,   254,   760,   254,
    1019,  1020,   668,   768,   811,  1274,   254,   674,   432,   581,
     775,    23,   582,   322,   322,   783,   670,  1736,   191,  1060,
     350,   425,  1064,   319,   812,    41,   721,   402,   207,   207,
     956,   403,   207,   957,   414,   678,   191,   336,    37,   337,
     336,   687,   333,   253,   191,   253,  1190,   253,   698,    39,
     452,    40,   453,   680,   253,    41,    42,  1422,   454,   455,
     456,   457,   688,    37,   345,   296,   336,   346,   337,    46,
     191,   452,   191,   453,   697,   734,  1191,   737,   177,   454,
     455,   456,   457,  1068,     3,    54,   322,    55,   322,    51,
     724,   337,   322,    57,   319,   415,  1192,   733,   402,   264,
      52,  1193,   403,    63,   191,   387,   739,   387,   736,   322,
     322,   191,   339,   284,    15,   319,    51,   322,   322,    18,
     761,   345,   188,   660,   346,   322,   177,   458,   177,   460,
     341,  1194,   322,   322,   342,   177,   459,   177,   461,   774,
     343,   776,   434,    28,     4,     5,   425,  1433,   344,   199,
     345,  1195,   792,   346,   797,    34,    35,   649,   347,   348,
     817,   349,     4,     5,     8,   818,   819,   837,    38,    10,
     876,   845,   820,  1205,   884,     3,  1207,   882,   452,  1209,
     453,   576,  1209,     4,     5,   890,   454,   455,   456,   457,
     588,    23,   350,   885,    48,    12,   613,   227,     4,     5,
    1413,  1415,   895,   928,   899,    15,   900,   903,   229,    23,
      18,   916,   417,    19,   918,   914,   921,   923,   435,   933,
     951,   941,   231,   961,   964,    64,   793,   967,   972,   234,
      23,   974,  1582,   979,    28,    41,    37,   968,   975,   261,
      30,    39,   982,    40,   981,    23,    34,    35,    42,   985,
     273,   983,   984,    41,   264,   178,   264,   435,   178,    38,
     986,    46,   264,    45,   990,   178,   178,  1435,   452,   178,
     453,   993,   435,   996,    41,   851,   454,   455,   456,   457,
     999,   858,   861,   865,    56,    48,  1000,  1025,   873,    41,
    1049,   387,   387,    53,  1070,    63,   238,  1048,    56,    65,
    1066,  1447,  1077,  1081,  1082,   283,  1102,  1085,   283,  1090,
    1097,  1161,   177,   177,  1173,  1175,    64,   273,    65,  1181,
    1218,   207,  1219,  1256,  1265,  1312,  1276,  1278,  1315,  1280,
    1449,  1108,  1282,  1284,   158,   179,   181,   182,     4,     5,
    1316,  1322,  1325,  1323,  1328,   187,   192,  1125,  1319,   195,
     197,   198,   202,   208,   209,   217,   221,  1320,   225,   256,
     257,   158,   260,   265,   268,  1330,  1545,   274,   276,   278,
     279,  1329,   281,   285,   288,  1339,   158,   292,  1346,   295,
     299,   341,  1333,   300,   301,    23,  1334,  1336,   452,  1340,
     453,   343,   980,   387,     4,     5,   454,   455,   456,   457,
     671,   207,   158,  1352,   207,  1349,  1355,     3,  1683,   347,
     348,  1598,   435,  1356,   177,     8,     8,  1366,  1390,  1397,
      10,    10,   452,  1370,   453,  1430,    12,    12,  1371,    41,
     454,   455,   456,   457,  1374,  1450,  1379,    15,  1385,  1398,
    1399,    23,    18,   350,   513,    19,    54,   255,    55,  1400,
    1403,   452,   267,   453,    57,  1404,   415,   322,   322,   454,
     455,   456,   457,  1407,     4,     5,    28,   255,   435,  1600,
     203,   203,    30,  1453,  1464,  1466,  1470,   191,    34,    35,
     191,   437,   438,   440,   442,    41,  1467,  1473,    54,  1476,
      55,    38,    39,    39,    40,    40,    57,  1477,   415,    42,
      42,  1486,   477,  1491,  1508,   483,   490,  1509,   492,  1512,
       8,    23,    46,    46,  1542,    10,    54,    48,    55,   499,
    1547,   669,   502,   503,    57,    53,   415,  1556,   506,    56,
      56,  1104,   452,   509,   453,  1553,  1555,   514,   435,  1557,
     454,   455,   456,   457,  1558,  1559,    63,    63,    64,    65,
      65,  1560,   531,     3,  1561,    41,  1562,  1572,  1567,  1565,
     540,   543,   545,   547,   549,   551,   553,   555,   557,   559,
     561,   562,    54,    12,    55,  1570,  1566,  1580,  1571,  1575,
      57,  1576,    58,    15,    16,  1581,  1610,    39,    18,    40,
     452,   188,   453,  1583,    42,   584,  1584,  1613,   454,   455,
     456,   457,  1617,  1616,  1585,     8,  1588,    46,  1589,   593,
      10,  -741,    28,  -737,     8,  1626,  1592,   189,    30,    10,
     425,  1595,   319,    33,    34,    35,   178,   264,    37,   178,
     611,  1596,  1629,  1634,  1637,  1639,   178,    38,   178,   178,
     178,    63,   626,   178,  1638,  1642,  1643,  1644,  1647,   255,
     255,   642,   255,   150,  1650,    45,   283,   255,  1653,  1304,
    1656,  1239,  1659,    48,   255,  1246,  1660,   255,  1665,  1668,
    1669,    53,   275,  1674,  1681,  1685,  1687,   255,   255,  1688,
     150,  1689,    39,  1690,    40,   178,   228,  1691,  1692,    42,
     589,    39,  1693,    40,    64,   150,    65,  1694,    42,   452,
    1695,   453,    46,  1698,  1699,   230,   730,   454,   455,   456,
     457,    46,  -740,   232,   233,  1700,   741,   255,   255,   744,
    1707,   150,   747,   748,   749,  1708,  -736,  -739,  -735,     8,
     752,   754,   236,  1711,    10,   758,    63,  1712,  1716,   764,
     766,  1714,  1715,  1718,  1728,    63,   771,   773,  1717,  1719,
    1722,   779,   781,   237,  1723,  1726,   786,   788,  1734,  1727,
    1731,   794,   796,  1732,  1733,   798,    53,  1737,   799,  1748,
       4,     5,  1738,  1742,  1743,  -745,  1746,  1747,     8,   418,
     806,   807,   809,    10,  1749,  1752,  -738,   625,  1750,  -734,
    1751,  1753,   823,   826,   829,   832,  1754,     8,   834,   836,
    1755,  1756,    10,  1757,  1758,   844,    39,  -744,    40,   847,
     849,   465,  1759,    42,  -743,   854,   856,    23,   863,   867,
    1760,   476,   869,   871,   482,   489,    46,   875,   191,  -742,
     370,   369,     4,     5,   880,   729,   572,   575,   881,   424,
     571,   883,   731,   732,    37,   230,  1171,   886,  1300,   887,
     888,   889,  1301,   232,   233,    39,   893,    40,   681,   894,
      63,    41,    42,   682,   897,   690,   898,   484,   700,   193,
     902,   614,   236,    20,    39,    46,    40,    21,    22,    23,
      24,    42,    25,     0,     0,    26,    27,     0,     0,     0,
       0,     0,     0,   237,    46,     0,     0,     0,   929,     0,
     932,     0,     0,   937,   939,     0,    37,   944,   946,    63,
     948,     0,     0,     0,   952,   954,   955,     0,     0,     0,
       0,     0,     0,    41,     0,   960,     0,     0,    63,     0,
     962,     0,   178,    45,   178,     0,     0,     0,     0,     0,
     971,   178,   973,   178,    49,   486,    50,     8,   978,     0,
       0,   842,    10,     0,    56,     0,     0,     0,     0,   987,
       0,   989,     0,     0,   255,   255,    61,   255,     0,    16,
       0,   255,     0,     0,     0,  1005,     0,  1007,   661,     0,
     255,   255,  1016,  1018,     0,     0,     0,   255,   255,     0,
     255,   255,   255,   255,  1034,  1035,  1036,     0,     0,     0,
    1044,  1045,     0,     0,  1046,  1047,     0,     0,    33,     8,
       3,     4,     5,     0,    10,     0,     0,     0,     0,     0,
       0,     0,     0,     0,    39,     0,    40,     0,     0,     0,
      12,    42,     0,   255,     0,     0,   255,     0,     0,     0,
      15,     0,     0,     0,    46,    18,     0,     0,   188,     0,
       0,     0,    20,     0,     0,     0,    21,    22,    23,    24,
       0,    25,     0,     0,    26,    27,     0,   418,     0,    28,
       0,   795,     0,  1112,   189,    30,     0,     0,    63,  1118,
       0,    34,    35,     0,  1121,  1123,    39,     0,    40,  1127,
       0,     0,     0,    42,    38,  1133,     0,     0,     0,     0,
       0,     0,    41,     0,     3,     0,    46,     0,     0,     0,
    1148,     7,     0,     0,     0,     0,     0,     0,   178,   178,
      48,     0,     0,    49,    12,    50,  1162,  1164,    53,  1167,
     852,  1169,     0,     0,    15,     0,   859,   862,   866,    18,
      63,     0,   188,   874,     0,    61,     0,     0,     0,     0,
       0,    64,     0,    65,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    28,     0,     0,     0,     0,   189,    30,
       0,     0,     0,  1217,     0,    34,    35,     0,     0,    37,
       0,     0,     8,     0,     0,  1225,  1227,    10,    38,     0,
       0,     0,  1231,  1233,     0,  1235,  1237,     0,     0,  1242,
    1244,     0,     0,     0,     0,     0,    45,  1251,  1253,     0,
    1254,  1255,     0,     0,    48,     0,  1257,     0,  1258,     0,
     178,     0,    53,     0,  1259,  1260,     0,     0,     0,  1261,
    1262,     0,     0,  1263,  1264,     0,     0,  1266,     0,     0,
     641,     0,     0,  1271,     0,    64,  1273,    65,  1275,     0,
    1277,     0,  1279,     0,     0,  1281,     0,  1283,     0,    39,
       0,    40,  1288,     0,     0,     0,    42,  1292,     0,  1293,
       0,     0,     3,     0,     0,  1297,     0,     0,     0,    46,
       0,     8,     0,     0,     0,  1302,    10,  1303,     0,     0,
    1306,  1307,    12,     0,     0,  1310,     0,     0,     0,  1313,
       0,     0,    15,     0,     8,     0,  1317,    18,  1318,    10,
      19,     0,     0,    63,     0,     0,     0,     0,     0,     0,
       0,     0,  1324,     0,     0,     0,   255,   255,   255,   255,
       0,    28,     3,   255,     0,     0,   261,    30,     0,     0,
    1335,     0,     0,    34,    35,     0,     0,   255,   255,     0,
       0,  1345,    12,   255,   255,   255,    38,     0,    39,   255,
      40,   255,    15,     0,     8,    42,  1165,    18,     0,    10,
     188,  1361,     0,  1363,     0,  1365,     0,     0,    46,     0,
       0,    39,    48,    40,     0,     0,  1105,     0,    42,     0,
      53,    28,     0,     0,     0,    56,   189,    30,     0,     0,
     255,    46,     0,    34,    35,     0,     0,    37,     0,     0,
       0,     0,    63,    64,     0,    65,    38,     3,     0,     0,
       0,     0,   988,     0,     0,   291,     8,     0,     0,     0,
       0,    10,     0,     0,    45,    63,     0,     0,  1409,  1410,
    1411,    39,    48,    40,     0,     0,     0,    15,    42,  1421,
      53,     0,    18,     0,     0,   188,     0,     0,  1426,  1428,
       0,    46,     0,     0,     0,     0,     0,     0,     0,     0,
    1432,     0,  1434,    64,     0,    65,    28,     0,     0,     0,
       0,     0,   199,     0,   486,  1446,     8,  1448,    34,    35,
    1215,    10,     0,     0,     0,    63,     0,  1456,     0,  1458,
    1459,    38,  1461,    39,     0,    40,     0,  1463,    16,  1465,
      42,     0,     0,     3,     4,     5,  1240,     0,     0,     0,
    1247,     0,     0,    46,     0,     0,     0,    48,    11,     0,
       0,   439,   441,    12,     0,    53,     0,     0,     0,     0,
     463,     0,     0,    15,     0,     0,     0,    33,    18,     0,
     474,    19,     0,   480,   487,    20,     0,    63,    64,    21,
      22,    23,    24,    39,    25,    40,     8,    26,    27,     0,
      42,    10,    28,  1520,  1522,     0,     0,   261,    30,     0,
    1526,  1528,     0,    46,    34,    35,    36,     0,    37,     0,
    1531,     0,     0,     0,     0,     0,     0,    38,     0,  1532,
       0,     0,     0,     0,     0,    41,  1533,     0,  1534,     0,
    1535,     3,  1536,     0,  1537,    45,  1538,    63,  1539,  1540,
       0,     0,     0,    48,  1006,     0,    49,     0,    50,     0,
       0,    53,   425,     0,   319,     0,    56,     0,  1549,  1550,
       0,    15,     0,    39,     0,    40,    18,     0,    61,   188,
      42,     0,    62,     0,    64,     0,    65,     0,     0,    66,
       0,     0,     0,    46,     0,     0,     0,     0,     0,     0,
      28,     0,     0,     0,   607,   189,    30,     0,     0,     0,
       0,     0,    34,    35,     0,     0,   466,     0,     0,     0,
       0,     0,     0,     0,     0,    38,  1577,    63,  1578,     0,
    1579,     0,     0,     0,     0,     0,     0,   466,   255,   466,
     466,     0,   255,     8,   255,   466,     0,  1220,    10,     0,
     466,    48,     0,   466,     0,   466,   466,     0,     0,    53,
     466,     0,     0,     0,     0,    16,   466,   466,     0,     0,
       0,     0,     0,     0,     0,   466,  1597,     0,  1599,   466,
    1601,  1603,    64,   466,     0,     0,  1606,     0,     8,     0,
       0,     0,  1510,    10,  1609,     0,     0,  1611,     0,  1612,
       0,     0,     0,     0,    33,     0,     0,     0,  1622,     0,
      16,  1624,     0,  1625,   466,   466,     0,     0,   466,     0,
      39,  1630,    40,   466,  1631,     0,   466,    42,  1632,     0,
    1633,     0,   466,     0,   466,     0,   466,   466,     0,   466,
      46,     0,     0,   466,     0,     3,   466,     0,     0,    33,
     466,     0,   800,   466,   801,     0,     0,   466,   466,   466,
     808,     0,     0,     8,     0,    39,     0,    40,    10,     0,
       0,     0,    42,     0,    63,    15,   833,   835,     0,     0,
      18,     0,     0,   188,   516,    46,     0,   846,   848,   850,
       0,     0,     0,   853,   855,   857,   860,   864,     0,     0,
     868,   870,   872,     0,    28,  1679,  1680,     0,     0,  1682,
      30,  1684,     0,     3,     0,  1686,    34,    35,     0,    63,
       0,  1017,     8,     0,     0,     0,     0,    10,     0,    38,
       0,     0,     0,    12,     0,     0,     0,     0,     0,     0,
      39,     0,    40,    15,  1696,  1697,     0,    42,    18,     8,
       0,   188,     0,     0,    10,    48,     0,     0,     0,     0,
      46,     0,  1701,    53,  1702,     0,     0,     0,  1705,     0,
       0,    16,    28,     0,  1706,     0,     0,   189,    30,     0,
       0,     0,     0,     0,    34,    35,    64,  1713,     0,     0,
       0,     0,     0,     0,    63,   466,   466,    38,   466,    39,
     466,    40,     0,     0,     3,     0,    42,     8,     0,     0,
      33,     0,    10,     8,     0,     0,     0,     0,    10,    46,
     466,     0,     0,    48,    12,     0,    39,     0,    40,     0,
       0,    53,     0,    42,    15,   466,     0,     0,     0,    18,
       0,   466,   188,     0,     0,  1739,    46,  1740,   466,  1741,
     466,     0,     0,    63,    64,     0,    65,   466,     0,     0,
     466,   466,  1744,    28,   466,  1163,     0,   466,     0,   199,
       0,     0,   466,     0,     0,    34,    35,     0,     8,     0,
      63,     0,     0,    10,    39,     0,    40,     0,    38,   466,
      39,    42,    40,     0,     3,     8,     0,    42,   466,     0,
      10,   466,   413,   466,    46,   466,     0,   466,     0,   466,
      46,   466,     0,   466,    48,   466,     0,   466,     0,   466,
     466,     0,     8,     0,    15,     0,     3,    10,     0,    18,
       0,     0,   188,     7,     8,     0,  1166,     0,    63,    10,
       0,     0,   466,     0,    63,    64,    12,    65,     0,  1305,
       0,   466,     0,    28,     0,    39,    15,    40,     0,    30,
       0,    18,    42,     8,   188,    34,    35,     0,    10,   466,
       0,     0,    39,     0,    40,    46,     0,     0,    38,    42,
    1457,     0,     0,     0,   466,    28,     0,     0,     0,     0,
     189,    30,    46,     0,     0,     0,  1168,    34,    35,    39,
     466,    40,     0,     0,    48,     0,    42,     0,     0,    63,
      38,    39,    53,    40,     0,     0,     0,  1551,    42,    46,
       0,  1176,     0,     0,     8,     0,    63,     0,     0,    10,
       0,    46,     0,     0,     0,    64,    48,     0,     0,     0,
      39,     0,    40,     0,    53,     0,  1211,    42,  1212,     0,
       0,     8,     0,    63,     0,     0,    10,     0,     0,  1222,
      46,  1223,     0,  1224,  1226,    63,  1228,    64,  1229,    65,
    1230,  1232,     0,  1234,  1236,  1238,     0,  1241,  1243,  1245,
       0,  1248,  1460,  1249,     0,  1250,  1252,     0,   466,     0,
       0,     0,     0,     0,    63,     0,     0,     0,     0,   466,
       0,    39,   466,    40,     0,   466,   466,   466,    42,     0,
     466,     0,   466,     0,     0,     0,   466,     0,     0,     0,
       0,    46,   466,     0,   466,     0,     0,     0,    39,   466,
      40,   466,     0,     0,     0,    42,     0,   466,     0,   466,
       0,     0,     0,     0,   466,     0,   466,     0,    46,     0,
       0,     0,   466,     0,   466,    63,   466,   466,     0,     0,
       0,     0,     0,     0,   466,   466,     0,   466,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     3,     0,
       0,   466,    63,     0,   466,     0,     0,   466,     0,     0,
     466,     0,   466,     0,   466,     0,     0,     0,    12,     0,
       0,     0,   466,     0,     0,   466,     0,   466,    15,     0,
       0,     0,   466,    18,   466,     0,   188,     0,     0,     0,
       0,   466,     0,     0,     0,   466,     0,   466,     0,   466,
       0,     0,     0,   466,     0,     0,     0,    28,   466,   466,
       0,   466,   189,    30,   466,   466,   466,   466,     0,    34,
      35,   466,   466,     0,     0,   466,   466,     0,     0,     0,
     466,     0,    38,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   466,    48,     0,
     466,     0,     0,     0,     0,   466,    53,   466,     0,     0,
       0,     0,   466,     0,   466,     0,   466,     0,     0,     0,
     466,     0,   466,   466,     0,     0,     0,     0,   466,    64,
     466,    65,     0,     0,     0,     0,     3,     0,     0,   466,
       0,   466,     0,     0,     0,     8,   466,     0,     0,     0,
      10,     0,     0,     0,     0,   466,     0,   466,     0,     0,
       0,     0,     0,     0,     0,     0,    15,     0,     0,     0,
       0,    18,     0,   466,   188,   466,     0,     0,     0,     0,
       4,     5,     0,     0,   466,     0,   466,     0,     8,     0,
       0,     0,     0,    10,    11,    28,     0,     0,     0,    12,
       0,   199,   466,   466,   466,     0,     0,    34,    35,     0,
       0,     0,   466,   466,   466,   466,     0,     0,     0,     0,
      38,    20,    39,     0,    40,    21,    22,    23,    24,    42,
      25,     0,     0,    26,    27,     0,     0,     0,     0,     0,
       0,     0,    46,     0,     0,     0,    48,  1513,     0,  1514,
       0,     0,    36,  1515,    37,  1516,     0,  1517,     0,  1518,
       0,  1519,  1521,     0,  1523,    39,  1524,    40,  1525,  1527,
       0,    41,    42,  1529,     3,  1530,    63,    64,   385,     0,
     466,    45,     0,     8,     0,    46,   466,     0,    10,   466,
       0,   466,    49,     0,    50,   466,     0,     0,     0,     0,
       0,   466,    56,     0,    15,     0,     0,     0,     0,    18,
       0,     0,   188,     0,    61,     0,   466,     0,    62,    63,
       0,     0,    65,     0,     0,     0,     0,     0,     0,     0,
     466,     0,   466,    28,     0,   466,     0,   466,     0,    30,
       0,     0,     0,     0,     0,    34,    35,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,    38,     0,
      39,     0,    40,     0,     0,     0,     0,    42,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
      46,     0,     0,     0,    48,   466,     0,     0,     0,     0,
       0,     0,    53,   466,     0,   466,     0,     0,     0,   466,
       0,   466,     0,   466,     0,   466,     0,     0,     0,     0,
     466,     0,   466,     0,    63,    64,     0,     0,     0,   466,
       0,   466,   466,   466,     0,   466,   466,   466,   466,   466,
     466,   466,   466,     0,   466,     0,     0,     0,     0,   466,
       0,   466,     0,   466,     0,   466,     0,   466,     0,   466,
       0,   466,     3,     0,     4,     5,   466,     0,     0,     0,
     466,   466,     0,     0,     0,   466,     0,     0,     0,     0,
     466,   466,     0,     0,   466,   466,     0,     0,   466,     0,
       0,   466,    15,     0,     0,   466,   466,    18,     0,     0,
     446,     0,   466,     0,     0,    20,     0,     0,   447,    21,
      22,    23,    24,   466,    25,     0,     0,    26,    27,     0,
       0,    28,     0,   466,   142,     0,   189,    30,     0,     0,
       0,     0,     0,    34,    35,     0,    36,     0,    37,   466,
       0,   466,     0,   466,     0,   216,    38,     0,   216,   239,
       0,   142,  1675,     0,  1676,    41,     0,     0,  1677,     0,
    1678,     0,     0,     0,     0,    45,   142,   142,     0,   239,
       0,     0,    48,     0,     0,     0,    49,     0,    50,     3,
      53,     3,     0,     0,     0,     0,    56,   466,   466,   466,
       0,     0,   142,     0,     0,   142,     0,     0,    61,   466,
       0,     0,     0,    64,   466,     0,   466,     0,     0,    15,
     466,    15,   466,     0,    18,     0,    18,   188,   891,   188,
    1444,     0,     0,     0,   466,     0,   466,     0,     0,     0,
       0,     0,     0,     0,   466,     0,   466,   466,    28,   466,
      28,   466,     0,   466,    30,     0,    30,     0,     0,     0,
      34,    35,    34,    35,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    38,     0,    38,     0,     0,     0,     0,
       0,     0,     0,   142,   142,     0,     0,     0,     0,     0,
       0,     0,   142,     0,     0,     0,     0,     0,     0,    48,
       0,    48,   142,     0,     0,   142,   142,    53,   466,    53,
     466,     0,     0,     0,   466,     0,   466,     0,     0,   466,
     466,   466,   466,   466,   466,   466,   466,   466,   466,     0,
      64,     0,    64,     0,     0,     0,     0,   466,   466,     0,
       0,     0,     0,     0,   216,     0,     0,     0,   216,     0,
       0,   216,     0,     0,     0,     0,     0,     0,   216,   216,
     239,   239,     0,   239,   239,   466,   466,   466,     3,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   239,
       0,     0,     0,     0,     0,   466,     0,   466,   239,   466,
     239,   466,     0,     0,   466,     0,     0,   466,    15,   466,
     466,     0,     0,    18,     0,     0,   188,  1623,     0,     0,
     466,     0,   466,   466,     0,     0,     0,     0,   466,   466,
     466,   466,     0,     0,     0,     0,   142,    28,     0,   239,
     239,     0,     0,    30,     0,     0,     0,     0,     0,    34,
      35,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       4,     5,    38,     0,     0,     0,     0,     0,     8,     0,
       0,     0,     0,    10,    11,     0,     0,   466,   466,    12,
     466,     0,   466,     0,   466,     0,     0,     0,    48,     0,
       0,     0,     0,     0,   466,   466,    53,     0,     0,   466,
     466,    20,     0,   466,   466,    21,    22,    23,    24,     0,
      25,   466,     0,    26,    27,   142,     0,   142,     0,    64,
       0,     0,     0,     4,     5,     0,     0,     0,     0,     0,
       0,     0,    36,     0,    37,     0,     0,   466,   466,   466,
       0,     0,   466,     0,     0,    39,     0,    40,     0,     0,
       0,    41,    42,     0,     0,     0,     0,     0,     0,     0,
       0,    45,     0,     0,    20,    46,     0,     0,    21,    22,
      23,    24,    49,    25,    50,     0,    26,    27,     0,     0,
       0,     0,    56,     0,   142,     0,   142,     0,     0,     0,
       0,     0,   142,     0,    61,     0,     0,    37,    62,    63,
       0,     0,    65,     0,     0,     0,     0,   601,   142,   142,
       0,     0,     0,     0,    41,     0,     0,     0,     0,   142,
     142,   142,     0,     0,    45,   142,   142,   142,   142,   142,
       0,     0,   142,   142,   142,    49,     0,    50,     0,     0,
       0,     0,     0,     0,     0,    56,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    61,     0,     0,
       0,     0,     0,     0,     0,   216,     0,     0,     0,     0,
       0,     0,     0,   216,     0,     0,     0,     0,     0,     0,
       0,     0,   239,   239,   239,     0,   239,   239,     0,     0,
       0,   239,     0,   239,     0,     0,     0,     0,     0,     0,
       0,     0,   239,     0,     0,     0,     0,    -2,     0,   239,
       0,     0,   239,     0,     1,     0,     2,   239,   239,   239,
       0,     3,     4,     5,     0,     6,     0,     0,     7,     0,
       8,     0,     0,     9,     0,    10,    11,     0,     0,     0,
       0,    12,     0,     0,    13,    14,     0,     0,     0,     0,
       0,    15,    16,     0,    17,   239,    18,     0,   239,    19,
       0,     0,     0,    20,     0,     0,     0,    21,    22,    23,
      24,     0,    25,     0,     0,    26,    27,     0,     0,     0,
      28,     0,     0,     0,     0,    29,    30,     0,    31,     0,
      32,    33,    34,    35,    36,     0,    37,     0,     0,     0,
       0,     0,     0,     0,     0,    38,     0,    39,     0,    40,
       0,     0,     0,    41,    42,     0,    43,     0,    44,     0,
       0,     0,     0,    45,     0,     0,     0,    46,    47,     0,
       0,    48,     0,     0,    49,     0,    50,    51,    52,    53,
      54,     0,    55,     0,    56,     0,     0,     0,    57,     0,
      58,     0,    59,    60,     0,     0,    61,     0,     0,     0,
      62,    63,    64,     0,    65,     0,     0,    66,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     3,
       4,     5,     0,     0,     0,     0,     7,     0,     8,     0,
       0,     0,     0,    10,     0,     0,     0,     0,     0,    12,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    15,
      16,     0,     0,     0,    18,     0,     0,   188,     0,     0,
       0,    20,     0,     0,     0,    21,    22,    23,    24,     0,
      25,     0,     0,    26,    27,     0,     0,     0,    28,     0,
       0,     0,     0,   189,    30,     0,     0,     0,     0,    33,
      34,    35,     0,   142,    37,     0,     0,     0,     0,     0,
       0,     0,     0,    38,     0,    39,     0,    40,     0,     0,
       0,    41,    42,     0,     0,     0,     0,     0,   142,     0,
     142,    45,     0,     0,     0,    46,     0,     0,     0,    48,
       0,   142,    49,   142,    50,   142,   142,    53,   142,     0,
     142,     0,   142,   142,     0,   142,   142,   142,     0,   142,
     142,   142,     0,   142,    61,   142,     0,   142,   142,    63,
      64,     0,    65,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   239,   239,
     239,   239,   239,     0,     0,   239,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   239,
     239,     0,   239,     0,     0,   239,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   239,     0,     1,   239,     2,
     239,     0,     0,   239,     3,     4,     5,     0,     6,     0,
       0,     7,     0,     8,     0,     0,     9,     0,    10,    11,
       0,     0,     0,     0,    12,     0,     0,    13,    14,     0,
       0,     0,   239,     0,    15,    16,     0,    17,     0,    18,
       0,     0,    19,     0,     0,     0,    20,     0,     0,     0,
      21,    22,    23,    24,     0,    25,     0,     0,    26,    27,
       0,     0,     0,    28,     0,     0,     0,     0,    29,    30,
       0,    31,     0,    32,    33,    34,    35,    36,     0,    37,
       0,     0,     0,     0,     0,     0,     0,     0,    38,     0,
      39,     0,    40,     0,     0,     0,    41,    42,     0,    43,
       0,    44,     0,     0,     0,     0,    45,     0,     0,     0,
      46,    47,     0,     0,    48,     0,     0,    49,     0,    50,
      51,    52,    53,    54,     0,    55,     0,    56,     3,     4,
       5,    57,     0,    58,     0,    59,    60,     8,     0,    61,
       0,     0,    10,    62,    63,    64,     0,    65,    12,     0,
      66,     0,     0,     0,     0,     0,     0,     0,    15,    16,
       0,     0,     0,    18,     0,     0,   188,     0,     0,     0,
      20,     0,     0,     0,    21,    22,    23,    24,     0,    25,
       0,     0,    26,    27,     0,     0,     0,    28,     0,     0,
       0,     0,   189,    30,     0,     0,     0,     0,    33,    34,
      35,     0,     0,    37,     0,     0,     0,     0,     0,     0,
       0,     0,    38,     0,    39,     0,    40,     0,     0,     0,
      41,    42,     0,     0,     0,     0,     0,     0,     0,     0,
      45,     0,     0,     0,    46,     0,     0,     0,    48,     0,
       0,    49,     0,    50,     0,     0,    53,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    61,     0,     0,     0,     0,    63,    64,
       0,    65,     0,     0,     0,     0,     0,     0,     0,   142,
       0,   142,     0,     0,     0,   142,     0,   142,     0,   142,
       0,   142,     0,   142,   142,     0,   142,     0,   142,     0,
     142,   142,     0,     0,     0,   142,     0,   142,     1,     0,
       2,     0,     0,     0,     0,     3,     4,     5,     0,     6,
       0,     0,     7,     0,     8,     0,     0,     9,     0,    10,
      11,     0,     0,     0,     0,    12,     0,     0,    13,    14,
     239,     0,   239,     0,   239,    15,    16,     0,    17,     0,
      18,   239,     0,    19,     0,     0,     0,    20,     0,     0,
       0,    21,    22,    23,    24,     0,    25,     0,     0,    26,
      27,     0,     0,     0,    28,     0,     0,     0,     0,    29,
      30,     0,   479,     0,    32,    33,    34,    35,    36,     0,
      37,     0,     0,     0,     0,     0,     0,     0,     0,    38,
       0,    39,     0,    40,     0,     0,     0,    41,    42,     0,
      43,     0,    44,     0,     0,     0,     0,    45,     0,     8,
       0,    46,    47,     0,    10,    48,     0,     0,    49,     0,
      50,    51,    52,    53,    54,     0,    55,     0,    56,     0,
       0,     0,    57,     0,    58,     0,    59,    60,   228,     0,
      61,     0,     0,     0,    62,    63,    64,     0,    65,     0,
       0,    66,     0,     0,     1,     0,     2,   230,     0,     0,
       0,     3,     4,     5,     0,   232,   233,     0,   486,     0,
       8,     0,     0,     0,     0,    10,    11,     0,     0,     0,
       0,    12,     0,     0,   236,     0,    39,     0,    40,     0,
       0,    15,    16,    42,    17,     0,    18,     0,     0,    19,
       0,     0,     0,    20,     0,   237,    46,    21,    22,    23,
      24,     0,    25,     0,     0,    26,    27,     0,    53,     0,
      28,     0,     0,     0,     0,    29,    30,     0,     0,     0,
      32,    33,    34,    35,    36,     0,    37,     0,     0,     0,
      63,     0,     0,     0,     0,    38,     0,    39,     0,    40,
       0,     0,     0,    41,    42,     0,    43,     0,     0,     0,
       0,     0,     0,    45,   142,     0,   142,    46,     0,     0,
     142,    48,   142,     0,    49,     0,    50,    51,    52,    53,
      54,     0,    55,     0,    56,     0,     0,     0,    57,     0,
      58,     0,    59,    60,     0,     0,    61,     0,     0,     0,
      62,    63,    64,     1,    65,     2,     0,    66,     0,     0,
       3,     4,     5,     0,     0,     0,     0,     0,     0,     8,
       0,     0,     0,     0,    10,    11,     0,     0,     0,     0,
      12,     0,     0,     0,     0,     0,     0,     0,     0,     0,
      15,    16,     0,    17,     0,    18,     0,     0,    19,     0,
       0,     0,    20,     0,     0,     0,    21,    22,    23,    24,
       0,    25,     0,     0,    26,    27,     0,     0,     0,    28,
       0,     0,     0,     0,    29,    30,     0,     0,     0,    32,
      33,    34,    35,    36,     0,    37,     0,     0,     0,     0,
       0,     0,     0,     0,    38,     0,    39,     0,    40,     0,
       0,     0,    41,    42,     0,    43,     0,     0,     0,     0,
       0,     0,    45,     0,     0,     0,    46,     0,     0,     0,
      48,     0,     0,    49,     0,    50,    51,    52,    53,    54,
       0,    55,     0,    56,     0,     0,     0,    57,     0,    58,
       0,    59,    60,     0,     0,    61,     0,     0,     0,    62,
      63,    64,     1,    65,     2,     0,    66,     0,     0,     3,
       4,     5,     0,     0,     0,     0,     0,     0,     8,     0,
       0,     0,     0,    10,    11,     0,     0,     0,     0,    12,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    15,
      16,     0,    17,     0,    18,     0,     0,    19,     0,     0,
       0,    20,     0,     0,     0,    21,    22,    23,    24,     0,
      25,     0,     0,    26,    27,     0,     0,     0,    28,     0,
       0,     0,     0,    29,    30,     0,     0,     0,    32,    33,
      34,    35,    36,     0,    37,     0,     0,     0,     0,     0,
       0,     0,     0,    38,     0,    39,     0,    40,     0,     0,
       0,    41,    42,     0,    43,     0,     0,     0,     0,     0,
       0,    45,     0,     0,     0,    46,     0,     0,     0,    48,
       0,     0,    49,     0,    50,    51,    52,    53,     0,     1,
       0,     2,    56,     0,     0,     0,     3,     4,     5,     0,
      59,    60,     0,     0,    61,     0,     0,     0,    62,    63,
      64,    11,    65,     0,     0,    66,    12,     0,     0,     0,
       0,     0,     0,     0,     0,     0,    15,    16,     0,     0,
       0,    18,     0,     0,    19,     0,     0,     0,    20,     0,
       0,     0,    21,    22,    23,    24,     0,    25,     0,     0,
      26,    27,     0,     0,     0,    28,     0,     0,     0,     0,
      29,    30,     0,     0,     0,     0,    33,    34,    35,    36,
       0,    37,     0,     0,     0,     0,     0,     0,     0,     0,
      38,     0,     0,     0,     0,     0,     0,     0,    41,     0,
       0,    43,     0,     0,     0,     0,     0,     0,    45,     0,
       0,     0,     0,     0,     0,     0,    48,     0,     0,    49,
       0,    50,    51,    52,    53,     0,     0,     0,     0,    56,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    61,     3,     4,     5,    62,     0,    64,     0,    65,
       0,     8,    66,     0,     0,     0,    10,    11,     0,     0,
       0,     0,    12,     0,     0,     0,     0,     0,     0,     0,
       0,     0,    15,     0,     0,     0,     0,    18,     0,     0,
      19,     0,     0,     0,    20,     0,     0,     0,    21,    22,
      23,    24,     0,    25,     0,     0,    26,    27,     0,     0,
       0,    28,     0,     0,     0,     0,   261,    30,     0,     0,
       0,     0,     0,    34,    35,    36,     0,    37,     0,     0,
       0,     0,     0,     0,     0,     0,    38,     0,    39,     0,
      40,     0,     0,     0,    41,    42,     0,     0,     0,     0,
       0,     0,     0,     0,    45,     0,     0,     0,    46,     3,
       4,     5,    48,     0,     0,    49,     0,    50,     0,     0,
      53,     0,     0,     0,    11,    56,     0,     0,     0,    12,
       0,     0,     0,     0,     0,     0,     0,    61,     0,    15,
       0,    62,    63,    64,    18,    65,     0,    19,    66,     0,
       0,    20,     0,     0,     0,    21,    22,    23,    24,     0,
      25,     0,     0,    26,    27,     0,     0,     0,    28,     0,
       0,     0,     0,   261,    30,     0,     0,     0,     0,     0,
      34,    35,    36,     0,    37,     0,     0,     0,     0,     0,
       0,     0,     0,    38,     0,     0,     0,     0,     0,     0,
       0,    41,     0,     0,    43,     0,     0,     0,     0,     0,
       0,    45,     0,     0,     0,     0,     3,     4,     5,    48,
       0,     0,    49,     0,    50,     0,     0,    53,     0,     0,
       0,    11,    56,     0,     0,     0,    12,     0,     0,     0,
       0,     0,     0,     0,    61,     0,    15,     0,    62,     0,
      64,    18,    65,     0,    19,    66,     0,     0,    20,     0,
       0,     0,    21,    22,    23,    24,     0,    25,     0,     0,
      26,    27,     0,     0,     0,    28,     0,     0,     0,     0,
     261,    30,     0,     0,     0,     0,     0,    34,    35,    36,
       0,    37,     0,     0,     0,     0,     0,     0,     0,     0,
      38,     0,     0,     0,     0,     0,     0,     0,    41,     0,
       0,     0,     0,     0,     0,     0,     0,     0,    45,     0,
       0,     0,     0,     3,     4,     5,    48,     0,     0,    49,
       0,    50,     8,     0,    53,     0,     0,    10,    11,    56,
       0,     0,     0,    12,     0,     0,     0,     0,     0,     0,
       0,    61,     0,    15,     0,    62,     0,    64,    18,    65,
       0,   188,    66,     0,     0,    20,     0,     0,     0,    21,
      22,    23,    24,     0,    25,     0,     0,    26,    27,     0,
       0,     0,    28,     0,     0,     0,     0,   189,    30,     0,
       0,     0,     0,     0,    34,    35,    36,     0,    37,     0,
       0,     0,     0,     0,     0,     0,     0,    38,     0,    39,
       0,    40,     0,     0,     0,    41,    42,     0,     0,     0,
       0,     0,     0,     0,     0,    45,     0,     0,     0,    46,
       3,     4,     5,    48,     0,     0,    49,     0,    50,     0,
     388,    53,     0,     0,     0,    11,    56,     0,     0,     0,
      12,     0,     0,     0,     0,     0,     0,     0,    61,     0,
      15,     0,    62,    63,    64,    18,    65,     0,    19,     0,
       0,     0,    20,     0,     0,     0,    21,    22,    23,    24,
       0,    25,     0,     0,    26,    27,     0,     0,     0,    28,
       0,     0,     0,     0,   261,    30,     0,     0,     0,     0,
       0,    34,    35,    36,     0,    37,     0,     0,     0,     0,
       0,     0,     0,     0,    38,     0,     0,     0,     0,     0,
       0,     0,    41,     0,     0,     0,     0,     0,     0,   389,
       0,     0,    45,     0,     0,     0,     0,     0,     0,     0,
      48,     0,     0,    49,   390,    50,     0,   391,    53,     0,
       0,     0,     0,    56,     0,     0,     0,     3,     4,     5,
       0,     0,     0,   392,   393,    61,     0,   388,     0,    62,
       0,    64,    11,    65,     0,     0,     0,    12,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    15,     0,     0,
       0,     0,    18,     0,     0,    19,     0,     0,     0,    20,
       0,     0,     0,    21,    22,    23,    24,     0,    25,     0,
       0,    26,    27,     0,     0,     0,    28,     0,     0,     0,
       0,   261,    30,     0,     0,     0,     0,     0,    34,    35,
      36,     0,    37,     0,     0,     0,     0,     0,     0,     0,
       0,    38,     0,     0,     0,     0,     0,     0,     0,    41,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    45,
       0,     0,     0,     0,     0,     0,     0,    48,     0,     0,
      49,   390,    50,     0,   391,    53,     0,     0,     0,     0,
      56,     0,     0,     0,     3,     4,     5,     0,     0,     0,
     392,   393,    61,     0,   388,     0,    62,     0,    64,    11,
      65,     0,     0,     0,    12,     0,     0,     0,     0,     0,
       0,     0,     0,     0,    15,     0,     0,     0,     0,    18,
       0,     0,    19,     0,     0,     0,    20,     0,     0,     0,
      21,    22,    23,    24,     0,    25,     0,     0,    26,    27,
       0,     0,     0,    28,     0,     0,     0,     0,   261,    30,
       0,     0,     0,     0,     0,    34,    35,    36,     0,    37,
       0,     0,     0,     0,     0,     0,     0,     0,    38,     0,
       0,     0,     0,     0,     0,     0,    41,     0,     0,     0,
       0,     0,     0,     0,     0,     0,    45,     0,     0,     0,
       0,     3,     4,     5,    48,     0,     0,    49,     7,    50,
       0,   391,    53,     0,   467,     0,     0,    56,     0,     0,
       0,    12,     0,     0,     0,     0,     0,   392,   393,    61,
       0,    15,    16,    62,     0,    64,    18,    65,     0,   188,
       0,     0,     0,    20,     0,     0,     0,    21,    22,    23,
      24,     0,    25,     0,     0,    26,    27,     0,     0,     0,
      28,     0,     0,     0,     0,   189,    30,     0,     0,     0,
       0,    33,    34,    35,     0,     0,    37,     0,     0,     0,
       0,     0,     0,     0,     0,    38,     0,     0,     0,     0,
       0,     0,     0,    41,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    45,     0,     3,     4,     5,     0,     0,
       0,    48,     0,     0,    49,   596,    50,     0,     0,    53,
      11,     0,     0,     0,    56,    12,     0,     0,     0,     0,
       0,     0,     0,     0,     0,    15,    61,     0,     0,     0,
      18,     0,    64,   188,    65,     0,     0,    20,     0,     0,
       0,    21,    22,    23,    24,     0,    25,     0,     0,    26,
      27,     0,     0,     0,    28,     0,     0,     0,     0,   189,
      30,     0,     0,     0,     0,     0,    34,    35,    36,     0,
      37,     0,     0,     0,     0,     0,     0,     0,     0,    38,
       0,     0,     0,     0,     0,     0,     0,    41,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    45,     0,     0,
       0,     0,     3,     4,     5,    48,     0,     0,    49,     0,
      50,     0,   965,    53,     0,     0,     0,    11,    56,     0,
       0,     0,    12,     0,     0,     0,     0,     0,     0,     0,
      61,     0,    15,     0,    62,     0,    64,    18,    65,     0,
     188,     0,     0,     0,    20,     0,     0,     0,    21,    22,
      23,    24,     0,    25,     0,     0,    26,    27,     0,     0,
       0,    28,     0,     0,     0,     0,   189,    30,     0,     0,
       0,     0,     0,    34,    35,    36,     0,    37,     0,     0,
       0,     0,     0,     0,     0,     0,    38,     0,     0,     0,
       0,     0,     0,     0,    41,     0,     0,     0,     0,     0,
       0,     0,     0,     0,    45,     0,     0,     0,     0,     3,
       4,     5,    48,     0,     0,    49,     0,    50,     0,     0,
      53,     0,     0,     0,     0,    56,     0,     0,     0,    12,
       0,     0,     0,     0,     0,     0,     0,    61,     0,    15,
       0,    62,     0,    64,    18,    65,     0,   188,     0,     0,
       0,    20,     0,     0,     0,    21,    22,    23,    24,     0,
      25,     0,     0,    26,    27,     0,     0,     0,    28,     0,
       0,     0,     0,   189,    30,     0,     0,     0,     0,     0,
      34,    35,     0,     0,    37,     0,     0,     0,     4,     5,
       0,     0,     0,    38,     0,     0,     0,     0,     0,     0,
       0,    41,    11,     0,     0,     0,     0,    12,     0,     0,
       0,    45,     0,     0,     0,     0,     0,     0,     0,    48,
       0,     0,    49,     0,    50,     0,     0,    53,     0,    20,
       0,     0,    56,    21,    22,    23,    24,     0,    25,     0,
       0,    26,    27,     0,    61,     0,     0,     0,     0,     0,
      64,     0,    65,     0,     0,     0,     0,     0,     0,     0,
      36,     0,    37,     0,     0,     0,     4,     5,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    41,
      11,     0,     0,     0,     0,    12,   385,     0,     0,    45,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
      49,     0,    50,     0,  1417,     0,     0,    20,     0,     0,
      56,    21,    22,    23,    24,     0,    25,     0,     0,    26,
      27,   383,    61,     0,     0,     0,    62,     0,     0,     0,
      65,     0,     0,     0,     0,     0,     0,     0,    36,     0,
      37,     0,     0,     0,     4,     5,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    41,    11,     0,
       0,     0,     0,    12,   385,     0,     0,    45,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,    49,     0,
      50,     0,  1604,     0,     0,    20,     0,     0,    56,    21,
      22,    23,    24,     0,    25,     0,     0,    26,    27,     0,
      61,     0,     0,     0,    62,     0,     0,     0,    65,     0,
       0,     0,     0,     0,     0,     0,    36,     0,    37,     0,
       0,     0,     4,     5,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,    41,    11,     0,     0,     0,
       0,    12,   385,     0,     0,    45,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,    49,     0,    50,     0,
       0,     0,     0,    20,     0,     0,    56,    21,    22,    23,
      24,     0,    25,     0,     0,    26,    27,     0,    61,     0,
       0,     0,    62,     0,     0,     0,    65,     0,     0,     0,
       0,     0,     0,     0,    36,     0,    37,     0,     0,     0,
       4,     5,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    41,    11,     0,     0,     0,     0,    12,
     385,     0,     0,    45,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,    49,     0,    50,     0,     0,     0,
       0,    20,     0,     0,    56,    21,    22,    23,    24,     0,
      25,     0,     0,    26,    27,     0,    61,     0,     0,     0,
      62,     0,     0,     0,    65,     0,     0,     0,     0,     0,
       0,     0,    36,     0,    37,     0,     0,     0,     4,     5,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    41,    11,     0,     0,     0,     0,    12,   745,     0,
       0,    45,     0,     0,     0,     0,     0,     0,     0,     0,
       4,     5,    49,     0,    50,     0,     0,     0,     0,    20,
       0,     0,    56,    21,    22,    23,    24,     0,    25,     0,
       0,    26,    27,     0,    61,     4,     5,     0,    62,     0,
       0,     0,    65,     0,     0,   227,     0,   228,     0,    11,
      36,   755,    37,     0,    12,     0,   229,    23,     0,     0,
       0,     0,     0,     0,     0,     0,   230,     0,     0,    41,
     231,     0,     0,     0,   232,   233,    20,   234,     0,    45,
      21,    22,    23,    24,    37,    25,     0,     0,    26,    27,
      49,     0,    50,   236,     0,     0,     0,     0,     0,     0,
      56,    41,     0,     0,     0,     0,     0,    36,     0,    37,
       0,    45,    61,     0,   237,     0,    62,     0,     0,     0,
      65,     0,     0,     0,     0,     0,    41,    53,     0,     0,
       0,     0,    56,     3,     4,     5,    45,     0,     0,     0,
       0,     0,     0,     0,   238,     0,     0,    49,     0,    50,
       0,     0,     0,     0,     0,     0,     0,    56,     0,     0,
       0,     0,     0,    15,     0,     3,     4,     5,    18,    61,
       0,   446,     0,    62,     0,    20,     0,    65,   447,    21,
      22,    23,    24,     0,    25,     0,     0,    26,    27,     0,
       0,     0,    28,     0,     0,    15,     0,   189,    30,     0,
      18,     0,     0,   446,    34,    35,    36,    20,    37,     0,
     447,    21,    22,    23,    24,     0,    25,    38,     0,    26,
      27,     0,     0,     0,    28,    41,     0,     0,   448,   189,
      30,     0,     0,     0,     0,    45,    34,    35,    36,     0,
      37,     0,     0,    48,     0,     0,    49,     0,    50,    38,
       0,    53,     0,     0,     0,     0,    56,    41,     0,     0,
       0,     0,     0,     3,     4,     5,     0,    45,    61,     0,
       0,     0,     0,     0,    64,    48,     0,     0,    49,     0,
      50,     0,     0,    53,     0,     0,     0,     0,    56,     0,
       0,     0,     0,    15,     0,     0,     0,     0,    18,     0,
      61,   188,     0,     0,     0,    20,    64,     0,   447,    21,
      22,    23,    24,     0,    25,     0,     0,    26,    27,     0,
       0,     0,    28,     0,     0,     0,     0,   189,    30,     0,
       0,     0,     0,     0,    34,    35,    36,     0,    37,     0,
       0,     0,     0,     0,     0,     4,     5,    38,     0,     0,
       0,     0,     0,     8,     0,    41,     0,     0,    10,     0,
       0,     0,     0,     0,     0,    45,   226,     0,     0,     0,
       0,     0,     0,    48,     0,     0,    49,     0,    50,     0,
     227,    53,   228,     0,     0,     0,    56,     0,     0,     0,
       0,   229,    23,     0,     0,     0,     0,     0,    61,     0,
       0,   230,     0,     0,    64,   231,     0,     0,     0,   232,
     233,     0,   234,     0,     0,     0,     0,     0,     0,    37,
       0,     0,   235,     0,     0,     0,     4,     5,   236,     0,
      39,     0,    40,     0,     8,     0,    41,    42,     0,    10,
       0,     0,     0,     0,     0,     0,    45,     0,     0,   237,
      46,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   227,    53,   228,     0,     0,     0,    56,     0,     0,
       0,     0,   229,    23,     0,     0,     0,     0,     0,   238,
       0,     0,   230,     0,    63,     0,   231,     0,     0,     0,
     232,   233,     0,   234,     0,     0,     0,     0,     0,     0,
      37,     0,     0,   235,     0,     0,     0,     0,     0,   236,
       0,    39,     0,    40,     0,     0,     0,    41,    42,     0,
       0,     4,     5,     0,     0,     0,     0,    45,     0,     8,
     237,    46,     0,     0,    10,     0,     0,     0,     0,     0,
       0,     0,     0,    53,     0,     0,     0,     0,    56,     0,
       0,    16,     0,     0,     0,     0,     0,     0,     0,     0,
     238,     0,    20,     0,     0,    63,    21,    22,    23,    24,
       0,    25,     0,     0,    26,    27,     0,     0,     0,     0,
       0,     0,     0,     0,     4,     5,     0,     0,     0,     0,
      33,     0,     8,     0,     0,    37,     0,    10,     0,     0,
       0,     0,     0,     4,     5,     0,    39,     0,    40,     0,
       0,     8,    41,    42,     0,     0,    10,     0,     0,     0,
       0,     0,    45,     0,     0,    20,    46,     0,   185,    21,
      22,    23,    24,    49,    25,    50,     0,    26,    27,     0,
       0,     0,     0,    56,    20,     0,     0,   500,    21,    22,
      23,    24,     0,    25,     0,    61,    26,    27,    37,     0,
      63,     0,     0,     0,     0,     0,     4,     5,     0,    39,
       0,    40,     0,     0,     8,    41,    42,    37,     0,    10,
       0,     0,     0,     0,     0,    45,     0,     0,    39,    46,
      40,     0,     4,     5,    41,    42,    49,     0,    50,     0,
       8,     0,     0,     0,    45,    10,    56,    20,    46,     0,
       0,    21,    22,    23,    24,    49,    25,    50,    61,    26,
      27,     0,     0,    63,     0,    56,     0,   227,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    61,   229,    23,
      37,     0,    63,     0,     0,     0,     0,     0,     0,     0,
       0,    39,   231,    40,     0,     4,     5,    41,    42,   234,
       0,     0,     0,     0,     0,     0,    37,    45,     0,     0,
       0,    46,     0,     0,     0,     0,     0,    39,    49,    40,
      50,     0,     0,    41,    42,     0,     0,     0,    56,     0,
     227,     0,   228,    45,     0,     0,     0,    46,     0,     0,
      61,   229,    23,     0,     0,    63,     0,     0,     0,     0,
       0,   230,     0,     0,    56,   231,     0,     0,     0,   232,
     233,     0,   234,     0,     0,     0,   238,     0,     0,    37,
       0,    63,   235,     0,     0,     0,     0,     0,   236,     4,
       5,     0,     0,     0,     0,     0,    41,     0,     0,     0,
       0,     0,     0,     0,     0,     0,    45,     0,     0,   237,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,    53,    54,   227,    55,   228,    56,     0,     0,
       0,    57,     0,   415,     0,   229,    23,     0,     0,   238,
       0,     0,     0,     0,     0,   230,     0,     0,     0,   231,
       0,     0,     0,   232,   233,     0,   234,     4,     5,     0,
       0,     0,     0,    37,     0,     0,   235,     0,     0,     0,
       0,     0,   236,     0,     0,     0,     0,     0,     0,   909,
      41,     0,     0,     0,     0,     0,     0,     0,     0,     0,
      45,     0,   227,   237,   228,     4,     5,     0,     0,   935,
       0,     0,     0,   229,    23,     0,    53,     0,     0,     0,
       0,    56,     0,   230,     0,     0,     0,   231,     0,     0,
       0,   232,   233,   238,   234,     0,     0,     0,     0,     0,
     227,    37,   228,     0,   235,     0,     0,     0,     0,     0,
     236,   229,    23,     0,     0,     0,     0,     0,    41,     0,
       0,   230,     0,     0,     0,   231,     0,     0,    45,   232,
     233,   237,   234,     4,     5,     0,     0,     0,     0,    37,
       0,     0,   235,     0,    53,     0,     0,     0,   236,    56,
       0,     0,     0,     0,     0,  1272,    41,     0,     0,     0,
       0,   238,     0,     0,     0,     0,    45,     0,   227,   237,
     228,     4,     5,     0,     0,  1285,     0,     0,     0,   229,
      23,     0,    53,     0,     0,     0,     0,    56,     0,   230,
       0,     0,     0,   231,     0,     0,     0,   232,   233,   238,
     234,     0,     0,     0,     0,     0,   227,    37,   228,     0,
     235,     4,     5,  1541,     0,     0,   236,   229,    23,     0,
       0,     0,     0,     0,    41,     0,     0,   230,     0,     0,
       0,   231,     0,     0,    45,   232,   233,   237,   234,     0,
       0,     0,     0,     0,     0,    37,     0,     0,   235,     0,
      53,     0,    20,     0,   236,    56,    21,    22,    23,    24,
       0,    25,    41,     0,    26,    27,     0,   238,     0,     0,
       0,     0,    45,     0,     0,   237,     0,     0,     0,     0,
       0,     0,     0,     0,     0,    37,     0,     0,    53,     0,
       0,     0,     0,    56,     0,   969,     0,     0,     0,     0,
       0,     0,    41,     0,     0,   238,     0,     0,     0,     0,
       0,     0,    45,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    49,     0,    50,     0,     0,     0,     0,
       0,     0,     0,    56,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,    61
};

#define yypact_value_is_default(Yystate) \
  (!!((Yystate) == (-692)))

#define yytable_value_is_error(Yytable_value) \
  YYID (0)

static const yytype_int16 yycheck[] =
{
       1,     2,   361,   400,   125,    19,   282,    33,   227,   285,
      11,    33,    92,   255,   423,    16,   565,    39,    19,   356,
     226,    22,   250,   229,    25,    87,   245,    28,    29,    45,
     422,     1,     2,   413,    12,    81,   340,   126,    39,    40,
     349,    23,    21,    22,    45,    24,    16,   356,   254,   740,
     412,   226,   743,   357,     1,   382,   349,   384,     1,     4,
      82,   354,   245,   356,    24,   339,   107,    19,    90,    11,
      82,   344,    25,   573,   574,   575,    74,    29,    81,    55,
     133,    17,   104,    11,   205,   359,   359,    12,    41,    90,
      12,   340,    45,    46,   750,   751,   417,   418,   326,    47,
     421,    35,   135,   104,   353,    12,    81,   345,   346,    12,
      63,    64,    40,   139,    55,    33,    12,   139,    33,    55,
     337,   405,   406,    51,    12,   409,    30,    81,    32,   151,
      12,   134,   111,   112,    45,   228,   458,   459,   460,   461,
     175,    81,   235,    27,   321,   180,    55,   364,    12,   242,
      47,    12,   153,    98,    12,   133,    98,   135,   153,   134,
      40,    45,   144,   145,    11,   166,    11,    82,   396,    47,
      98,    46,    81,    84,   188,    22,   177,   178,   179,   157,
     181,    28,   158,   178,   206,    17,   187,   166,    63,    64,
      43,   419,   272,    40,   208,    11,   197,   145,   146,    78,
      84,    81,   203,    11,   210,    92,    51,   208,   214,   179,
      11,   181,   159,   117,   230,   216,   159,   158,   224,   220,
     221,   139,   158,    55,   139,   226,   227,   197,   229,   230,
     231,   210,   157,   151,   213,   157,   151,   133,   217,   135,
     256,    79,   221,   269,   245,    98,   225,   269,   274,   158,
     157,   203,   274,   254,   157,   256,   208,   217,    11,   260,
     261,   157,    17,   285,   265,   225,   443,    55,   445,   157,
      81,   253,   273,   226,   227,   157,   229,   230,   273,   295,
     296,   282,    98,   284,   285,    21,   287,   288,   206,   284,
      98,   206,   245,   157,   295,   296,   157,    98,   232,   157,
      55,   254,   236,   256,   151,    23,   153,   289,   388,   261,
      28,    15,    16,   265,   125,   142,   298,   144,   380,   166,
     596,   383,   598,   542,   543,   414,   158,   569,   570,   571,
     177,   178,   538,   539,   540,   694,    81,   696,    11,   558,
     187,   547,   295,   296,   278,    98,   299,     0,   330,   568,
     332,   269,    17,   375,   269,   377,   274,   379,    62,   274,
     543,   402,    83,   700,   539,   540,   407,   379,    55,   216,
     158,   369,    11,   220,   221,   558,    43,    47,   400,   788,
     684,   382,   931,   384,   231,   272,   387,   388,    81,   134,
      55,   700,    55,   773,   786,   282,   397,   398,   519,   400,
     577,   578,   106,   158,   405,   406,   699,   700,   409,   771,
     587,    78,   804,   260,   741,   689,   690,   690,    14,    55,
    1111,   714,   401,  1114,   299,    98,   273,   397,    55,    55,
     166,    98,   446,    21,   683,   171,    24,   284,    32,    56,
     287,   288,    55,   136,   944,   446,   946,   721,    44,    55,
     724,    46,   545,    49,   692,   693,    52,   695,   779,    98,
     781,   496,    81,   498,   379,  1121,   559,  1123,  1124,  1125,
      81,   158,    55,   566,    81,   350,    48,    73,   214,  1170,
     764,   217,   766,    79,   701,    39,    32,    81,   502,    85,
      86,   470,   471,   158,   446,   158,   713,    55,    18,   716,
     387,   823,    98,    98,   826,   153,    26,   829,   736,    11,
     832,   398,   513,   514,    55,   521,   517,   136,    38,   148,
      55,    55,   158,   529,   752,   136,    98,    55,   124,   136,
      55,   158,   158,   549,   535,    81,   132,   538,   539,   540,
      81,   542,   543,   191,    98,   158,   547,    81,   549,    51,
     551,    40,   158,   400,   142,   145,    81,   558,     6,   155,
      32,   513,   514,    23,   565,   517,   958,   568,    28,    17,
     146,    81,   573,   574,   575,   158,    91,    25,    11,   756,
      42,   135,    30,   584,    32,   538,   539,   540,   176,   542,
     543,   111,    81,    81,   547,   611,   549,   598,   614,    81,
     158,   121,   603,   157,    21,   558,    23,    55,    81,    81,
     611,    28,   565,   614,    19,   568,   264,   158,    51,   553,
     573,   574,   575,   158,   158,   273,   136,   561,    76,   217,
     158,    79,   584,   158,   616,    95,   284,   225,    81,   118,
     100,    12,   102,    40,     7,    12,    94,   107,   136,    20,
      98,     4,   134,     9,    21,   735,   104,    24,   611,   739,
     120,   614,    29,   136,   112,   666,   114,   747,    30,   117,
      32,   133,    39,   135,   122,   123,    30,   125,    32,   141,
     142,   143,   144,   100,    81,   102,   962,   666,   535,   965,
     107,    81,   911,   136,   154,   937,    56,   939,   904,   905,
     906,   907,   908,   120,   551,   126,   925,   926,   156,   326,
      13,   598,    81,  1072,    76,  1074,    27,  1076,   740,    11,
      40,   743,   928,    81,    11,    78,  1417,    33,  1419,    11,
     905,  1128,   907,   469,    45,   941,    81,   154,   739,   740,
     741,  1290,   743,   926,   134,    98,   747,    81,    81,   750,
     751,    12,   114,   754,    40,   117,   603,    81,    40,    51,
     761,    81,   776,   764,    51,   766,    41,   136,    11,    51,
    1426,    52,  1428,    84,    81,   142,   802,    81,   136,   758,
     802,    81,   959,    53,   754,   152,  1079,    81,    53,    27,
      81,   136,   806,   529,  1068,    81,  1070,    40,    81,   166,
     134,    81,   803,   136,    42,   806,     1,     2,    51,   176,
     134,   904,   905,   906,   907,    59,    98,    12,    81,   666,
      59,    16,   189,    18,    19,   192,    21,   134,  1102,    24,
      68,    81,   136,  1071,    29,  1073,   136,  1075,    33,   932,
     933,    81,   136,   210,    39,   136,    81,   214,   735,   216,
     217,    40,    48,   136,   806,    98,   136,   224,   225,   838,
     839,  1078,   112,  1080,    81,   844,   233,   234,   133,    70,
     135,    81,   133,   136,   135,    81,   141,  1094,   143,    48,
     141,   142,   143,   144,   802,   886,    23,   802,   889,    81,
      67,    28,    81,    11,   261,    90,   136,    92,   265,    11,
     267,   136,    98,   904,   905,   906,   907,   908,    79,   104,
     911,    81,  1603,  1604,   761,   282,    81,  1309,   285,   136,
      58,    81,    40,    17,   925,   926,   136,   928,   134,    98,
     931,    12,    81,    51,   886,    81,    30,   889,    32,    51,
     941,    10,   134,   944,   139,   946,    83,   142,   949,    81,
      81,   904,   905,   906,   907,   908,   151,   152,   911,    81,
      48,    55,   978,   100,   134,   102,   326,    66,   108,   134,
     107,   166,   925,   926,    23,   928,   136,   978,   931,    28,
      98,   176,    76,   120,   179,    34,   181,   136,   941,    18,
     136,   944,   107,   946,   189,    81,   949,   192,    99,    40,
      48,    30,   197,   110,   136,   136,    81,   202,   203,    38,
      98,   206,   134,   208,  1705,   210,    11,   154,   112,   214,
     114,   216,   217,   117,   139,   978,  1147,    81,    81,   224,
     225,   104,  1112,  1392,    13,  1394,  1395,  1313,   233,   234,
      81,   131,  1043,  1044,    11,    40,   663,   664,   134,   122,
      98,   100,   133,   102,   135,    11,    51,   147,   107,   134,
     141,   142,   143,   144,   158,  1044,   261,  1286,    40,   115,
     265,   120,   267,    40,   269,    81,    81,   272,    81,   274,
     134,   134,  1288,   156,    51,    81,     4,   282,     0,  1111,
     285,  1297,  1114,    15,    16,    51,    48,    48,   458,   459,
     460,   461,   469,    98,    81,   154,  1128,    81,   157,    81,
    1111,  1112,    40,  1114,    43,    27,  1390,    15,    16,   736,
    1121,   738,  1123,  1124,  1125,   742,    78,  1128,   134,   134,
      42,    98,  1133,    81,  1148,   250,   503,    35,   134,    17,
      62,    81,   759,   760,    23,    11,    98,    98,  1170,    28,
     767,   768,   169,    81,   521,  1393,    68,   134,   775,    40,
     134,    81,   529,    40,    62,   782,   783,    89,    17,  1170,
     199,    17,   201,   202,    40,    46,   193,    55,   140,  1396,
      48,    30,   144,    32,   106,    51,   134,   382,   555,   384,
     557,    89,   387,   388,   134,    40,  1043,  1044,    77,  1292,
      81,    48,   397,   398,    81,   400,    55,    48,   106,    55,
      78,   326,    40,    39,   126,    52,    94,   584,    30,    12,
      32,   100,   589,   102,    15,    16,   104,    76,   107,   596,
      98,   598,    98,    42,    71,  1594,    81,    78,  1217,   268,
      12,   120,    79,    80,   122,   123,   158,   125,    94,     8,
       9,   446,   281,    81,    15,    16,   168,    98,   104,   171,
     172,    98,    23,   112,    48,   114,    40,    28,   117,    12,
      30,    62,    32,    59,   469,   154,   122,   123,   156,   125,
     158,   396,   119,     8,     9,  1286,  1133,  1288,   403,  1290,
     650,   651,    72,   408,    78,    53,  1297,   158,    89,    74,
     415,    62,    77,   663,   664,   420,    77,    81,   503,   158,
     156,   133,   158,   135,    98,   106,    76,   139,   513,   514,
      74,   143,   517,    77,  1445,   158,   521,    30,    89,    32,
      30,     6,     6,  1286,   529,  1288,    48,  1290,    94,   100,
     133,   102,   135,    17,  1297,   106,   107,    12,   141,   142,
     143,   144,    81,    89,   114,   116,    30,   117,    32,   120,
     555,   133,   557,   135,    81,   375,    78,   377,  1369,   141,
     142,   143,   144,    76,    14,   133,   736,   135,   738,   130,
      76,    32,   742,   141,   135,   143,    98,    47,   139,   584,
     131,    48,   143,   154,   589,  1417,    52,  1419,    47,   759,
     760,   596,    76,   598,    44,   135,   130,   767,   768,    49,
      52,   114,    52,   325,   117,   775,  1417,   154,  1419,   156,
      94,    78,   782,   783,    98,  1426,   154,  1428,   156,   135,
     104,    52,    13,    73,    15,    16,   133,    12,   112,    79,
     114,    98,    54,   117,    59,    85,    86,    42,   122,   123,
     133,   125,    15,    16,    23,   133,   135,    27,    98,    28,
       8,    81,   135,   823,    41,    14,   826,    33,   133,   829,
     135,    13,   832,    15,    16,    53,   141,   142,   143,   144,
     509,    62,   156,   512,   124,    34,    13,    50,    15,    16,
    1107,  1108,    59,    12,    70,    44,    70,    59,    61,    62,
      49,   105,   414,    52,   105,    70,   105,   105,    89,    52,
      67,    52,    75,    58,    99,   155,    85,    99,   110,    82,
      62,   115,  1369,    13,    73,   106,    89,    99,   115,    78,
      79,   100,     4,   102,    81,    62,    85,    86,   107,    43,
     735,    81,    81,   106,   739,   740,   741,    89,   743,    98,
      81,   120,   747,   116,   134,   750,   751,    12,   133,   754,
     135,    48,    89,   136,   106,   477,   141,   142,   143,   144,
      11,   483,   484,   485,   137,   124,   136,    48,   490,   106,
     112,  1603,  1604,   132,    76,   154,   149,   158,   137,   157,
     125,    12,    81,    96,   158,   962,    76,   158,   965,   158,
     158,    48,  1603,  1604,    53,   110,   155,   802,   157,    48,
      27,   806,    27,     8,    70,    99,    70,   105,    99,   105,
      12,   736,   105,   105,     0,     1,     2,     3,    15,    16,
      99,    81,   134,    81,   134,    11,    12,   752,   115,    15,
      16,    17,    18,    19,    20,    21,    22,   115,    24,    25,
      26,    27,    28,    29,    30,    40,    53,    33,    34,    35,
      36,   136,    38,    39,    40,    11,    42,    43,   134,    45,
      46,    94,   136,    49,    50,    62,   136,   136,   133,   136,
     135,   104,    13,  1705,    15,    16,   141,   142,   143,   144,
      77,   886,    68,   136,   889,    48,    11,    14,    53,   122,
     123,    12,    89,   136,  1705,    23,    23,    70,    76,    81,
      28,    28,   133,   158,   135,    53,    34,    34,   158,   106,
     141,   142,   143,   144,   158,   134,   158,    44,   158,   158,
     158,    62,    49,   156,    52,    52,   133,    25,   135,   158,
     158,   133,    30,   135,   141,   158,   143,  1107,  1108,   141,
     142,   143,   144,   158,    15,    16,    73,    45,    89,    12,
      78,    78,    79,    48,    53,   110,    48,   962,    85,    86,
     965,   147,   148,   149,   150,   106,   134,   136,   133,    11,
     135,    98,   100,   100,   102,   102,   141,   136,   143,   107,
     107,    48,   168,    48,    27,   171,   172,    27,   174,    27,
      23,    62,   120,   120,    70,    28,   133,   124,   135,   185,
      53,    72,   188,   189,   141,   132,   143,   115,   194,   137,
     137,   733,   133,   199,   135,    99,    99,   203,    89,   134,
     141,   142,   143,   144,   136,   136,   154,   154,   155,   157,
     157,    40,   218,    14,   136,   106,    40,    40,   134,   136,
     226,   227,   228,   229,   230,   231,   232,   233,   234,   235,
     236,   237,   133,    34,   135,   134,   136,    70,   136,   136,
     141,   136,   143,    44,    45,    70,    53,   100,    49,   102,
     133,    52,   135,   158,   107,   261,   158,   136,   141,   142,
     143,   144,   136,    11,   158,    23,   158,   120,   158,   275,
      28,   157,    73,   157,    23,   134,   158,    78,    79,    28,
     133,   158,   135,    84,    85,    86,  1111,  1112,    89,  1114,
     296,   158,   134,   134,   134,    40,  1121,    98,  1123,  1124,
    1125,   154,   308,  1128,   136,   136,   136,   134,    48,   227,
     228,   317,   230,     0,   134,   116,  1313,   235,    48,    77,
     136,   863,    11,   124,   242,   867,   136,   245,   136,    11,
     136,   132,    81,    27,    70,    53,    99,   255,   256,   136,
      27,   136,   100,   136,   102,  1170,    52,    40,   134,   107,
     268,   100,   136,   102,   155,    42,   157,   136,   107,   133,
      40,   135,   120,    70,   158,    71,   372,   141,   142,   143,
     144,   120,   157,    79,    80,   158,   382,   295,   296,   385,
     136,    68,   388,   389,   390,    40,   157,   157,   157,    23,
     396,   397,    98,   136,    28,   401,   154,   136,   136,   405,
     406,   134,   134,    40,    40,   154,   412,   413,   136,   134,
     134,   417,   418,   119,   134,   134,   422,   423,    40,   136,
     136,   427,   428,   136,   136,   431,   132,   136,   434,    40,
      15,    16,   136,   136,   136,   157,   136,   136,    23,   126,
     446,   447,   448,    28,   136,   136,   157,    81,   134,   157,
     134,   136,   458,   459,   460,   461,    40,    23,   464,   465,
     136,   136,    28,    40,   136,   471,   100,   157,   102,   475,
     476,   158,   136,   107,   157,   481,   482,    62,   484,   485,
     136,   168,   488,   489,   171,   172,   120,   493,  1313,   157,
      72,    71,    15,    16,   500,   371,   250,   252,   504,   131,
     247,   507,   373,   373,    89,    71,   803,   513,   949,   515,
     516,   517,   950,    79,    80,   100,   522,   102,   340,   525,
     154,   106,   107,   340,   530,   344,   532,   171,   349,    13,
     536,   116,    98,    56,   100,   120,   102,    60,    61,    62,
      63,   107,    65,    -1,    -1,    68,    69,    -1,    -1,    -1,
      -1,    -1,    -1,   119,   120,    -1,    -1,    -1,   564,    -1,
     566,    -1,    -1,   569,   570,    -1,    89,   573,   574,   154,
     576,    -1,    -1,    -1,   580,   581,   582,    -1,    -1,    -1,
      -1,    -1,    -1,   106,    -1,   591,    -1,    -1,   154,    -1,
     596,    -1,  1417,   116,  1419,    -1,    -1,    -1,    -1,    -1,
     606,  1426,   608,  1428,   127,    21,   129,    23,   614,    -1,
      -1,    27,    28,    -1,   137,    -1,    -1,    -1,    -1,   625,
      -1,   627,    -1,    -1,   542,   543,   149,   545,    -1,    45,
      -1,   549,    -1,    -1,    -1,   641,    -1,   643,   325,    -1,
     558,   559,   648,   649,    -1,    -1,    -1,   565,   566,    -1,
     568,   569,   570,   571,   660,   661,   662,    -1,    -1,    -1,
     666,   667,    -1,    -1,   670,   671,    -1,    -1,    84,    23,
      14,    15,    16,    -1,    28,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   100,    -1,   102,    -1,    -1,    -1,
      34,   107,    -1,   611,    -1,    -1,   614,    -1,    -1,    -1,
      44,    -1,    -1,    -1,   120,    49,    -1,    -1,    52,    -1,
      -1,    -1,    56,    -1,    -1,    -1,    60,    61,    62,    63,
      -1,    65,    -1,    -1,    68,    69,    -1,   414,    -1,    73,
      -1,    85,    -1,   739,    78,    79,    -1,    -1,   154,   745,
      -1,    85,    86,    -1,   750,   751,   100,    -1,   102,   755,
      -1,    -1,    -1,   107,    98,   761,    -1,    -1,    -1,    -1,
      -1,    -1,   106,    -1,    14,    -1,   120,    -1,    -1,    -1,
     776,    21,    -1,    -1,    -1,    -1,    -1,    -1,  1603,  1604,
     124,    -1,    -1,   127,    34,   129,   792,   793,   132,   795,
     477,   797,    -1,    -1,    44,    -1,   483,   484,   485,    49,
     154,    -1,    52,   490,    -1,   149,    -1,    -1,    -1,    -1,
      -1,   155,    -1,   157,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,    78,    79,
      -1,    -1,    -1,   839,    -1,    85,    86,    -1,    -1,    89,
      -1,    -1,    23,    -1,    -1,   851,   852,    28,    98,    -1,
      -1,    -1,   858,   859,    -1,   861,   862,    -1,    -1,   865,
     866,    -1,    -1,    -1,    -1,    -1,   116,   873,   874,    -1,
     876,   877,    -1,    -1,   124,    -1,   882,    -1,   884,    -1,
    1705,    -1,   132,    -1,   890,   891,    -1,    -1,    -1,   895,
     896,    -1,    -1,   899,   900,    -1,    -1,   903,    -1,    -1,
      81,    -1,    -1,   909,    -1,   155,   912,   157,   914,    -1,
     916,    -1,   918,    -1,    -1,   921,    -1,   923,    -1,   100,
      -1,   102,   928,    -1,    -1,    -1,   107,   933,    -1,   935,
      -1,    -1,    14,    -1,    -1,   941,    -1,    -1,    -1,   120,
      -1,    23,    -1,    -1,    -1,   951,    28,   953,    -1,    -1,
     956,   957,    34,    -1,    -1,   961,    -1,    -1,    -1,   965,
      -1,    -1,    44,    -1,    23,    -1,   972,    49,   974,    28,
      52,    -1,    -1,   154,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   988,    -1,    -1,    -1,   904,   905,   906,   907,
      -1,    73,    14,   911,    -1,    -1,    78,    79,    -1,    -1,
    1006,    -1,    -1,    85,    86,    -1,    -1,   925,   926,    -1,
      -1,  1017,    34,   931,   932,   933,    98,    -1,   100,   937,
     102,   939,    44,    -1,    23,   107,    85,    49,    -1,    28,
      52,  1037,    -1,  1039,    -1,  1041,    -1,    -1,   120,    -1,
      -1,   100,   124,   102,    -1,    -1,   733,    -1,   107,    -1,
     132,    73,    -1,    -1,    -1,   137,    78,    79,    -1,    -1,
     978,   120,    -1,    85,    86,    -1,    -1,    89,    -1,    -1,
      -1,    -1,   154,   155,    -1,   157,    98,    14,    -1,    -1,
      -1,    -1,    81,    -1,    -1,    43,    23,    -1,    -1,    -1,
      -1,    28,    -1,    -1,   116,   154,    -1,    -1,  1104,  1105,
    1106,   100,   124,   102,    -1,    -1,    -1,    44,   107,  1115,
     132,    -1,    49,    -1,    -1,    52,    -1,    -1,  1124,  1125,
      -1,   120,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
    1136,    -1,  1138,   155,    -1,   157,    73,    -1,    -1,    -1,
      -1,    -1,    79,    -1,    21,  1151,    23,  1153,    85,    86,
      27,    28,    -1,    -1,    -1,   154,    -1,  1163,    -1,  1165,
    1166,    98,  1168,   100,    -1,   102,    -1,  1173,    45,  1175,
     107,    -1,    -1,    14,    15,    16,   863,    -1,    -1,    -1,
     867,    -1,    -1,   120,    -1,    -1,    -1,   124,    29,    -1,
      -1,   149,   150,    34,    -1,   132,    -1,    -1,    -1,    -1,
     158,    -1,    -1,    44,    -1,    -1,    -1,    84,    49,    -1,
     168,    52,    -1,   171,   172,    56,    -1,   154,   155,    60,
      61,    62,    63,   100,    65,   102,    23,    68,    69,    -1,
     107,    28,    73,  1239,  1240,    -1,    -1,    78,    79,    -1,
    1246,  1247,    -1,   120,    85,    86,    87,    -1,    89,    -1,
    1256,    -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,  1265,
      -1,    -1,    -1,    -1,    -1,   106,  1272,    -1,  1274,    -1,
    1276,    14,  1278,    -1,  1280,   116,  1282,   154,  1284,  1285,
      -1,    -1,    -1,   124,    81,    -1,   127,    -1,   129,    -1,
      -1,   132,   133,    -1,   135,    -1,   137,    -1,  1304,  1305,
      -1,    44,    -1,   100,    -1,   102,    49,    -1,   149,    52,
     107,    -1,   153,    -1,   155,    -1,   157,    -1,    -1,   160,
      -1,    -1,    -1,   120,    -1,    -1,    -1,    -1,    -1,    -1,
      73,    -1,    -1,    -1,   292,    78,    79,    -1,    -1,    -1,
      -1,    -1,    85,    86,    -1,    -1,   158,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    98,  1362,   154,  1364,    -1,
    1366,    -1,    -1,    -1,    -1,    -1,    -1,   179,  1286,   181,
     182,    -1,  1290,    23,  1292,   187,    -1,    27,    28,    -1,
     192,   124,    -1,   195,    -1,   197,   198,    -1,    -1,   132,
     202,    -1,    -1,    -1,    -1,    45,   208,   209,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   217,  1412,    -1,  1414,   221,
    1416,  1417,   155,   225,    -1,    -1,  1422,    -1,    23,    -1,
      -1,    -1,    27,    28,  1430,    -1,    -1,  1433,    -1,  1435,
      -1,    -1,    -1,    -1,    84,    -1,    -1,    -1,  1444,    -1,
      45,  1447,    -1,  1449,   256,   257,    -1,    -1,   260,    -1,
     100,  1457,   102,   265,  1460,    -1,   268,   107,  1464,    -1,
    1466,    -1,   274,    -1,   276,    -1,   278,   279,    -1,   281,
     120,    -1,    -1,   285,    -1,    14,   288,    -1,    -1,    84,
     292,    -1,   440,   295,   442,    -1,    -1,   299,   300,   301,
     448,    -1,    -1,    23,    -1,   100,    -1,   102,    28,    -1,
      -1,    -1,   107,    -1,   154,    44,   464,   465,    -1,    -1,
      49,    -1,    -1,    52,    53,   120,    -1,   475,   476,   477,
      -1,    -1,    -1,   481,   482,   483,   484,   485,    -1,    -1,
     488,   489,   490,    -1,    73,  1541,  1542,    -1,    -1,  1545,
      79,  1547,    -1,    14,    -1,  1551,    85,    86,    -1,   154,
      -1,    81,    23,    -1,    -1,    -1,    -1,    28,    -1,    98,
      -1,    -1,    -1,    34,    -1,    -1,    -1,    -1,    -1,    -1,
     100,    -1,   102,    44,  1580,  1581,    -1,   107,    49,    23,
      -1,    52,    -1,    -1,    28,   124,    -1,    -1,    -1,    -1,
     120,    -1,  1598,   132,  1600,    -1,    -1,    -1,  1604,    -1,
      -1,    45,    73,    -1,  1610,    -1,    -1,    78,    79,    -1,
      -1,    -1,    -1,    -1,    85,    86,   155,  1623,    -1,    -1,
      -1,    -1,    -1,    -1,   154,   437,   438,    98,   440,   100,
     442,   102,    -1,    -1,    14,    -1,   107,    23,    -1,    -1,
      84,    -1,    28,    23,    -1,    -1,    -1,    -1,    28,   120,
     462,    -1,    -1,   124,    34,    -1,   100,    -1,   102,    -1,
      -1,   132,    -1,   107,    44,   477,    -1,    -1,    -1,    49,
      -1,   483,    52,    -1,    -1,  1681,   120,  1683,   490,  1685,
     492,    -1,    -1,   154,   155,    -1,   157,   499,    -1,    -1,
     502,   503,  1698,    73,   506,    81,    -1,   509,    -1,    79,
      -1,    -1,   514,    -1,    -1,    85,    86,    -1,    23,    -1,
     154,    -1,    -1,    28,   100,    -1,   102,    -1,    98,   531,
     100,   107,   102,    -1,    14,    23,    -1,   107,   540,    -1,
      28,   543,    22,   545,   120,   547,    -1,   549,    -1,   551,
     120,   553,    -1,   555,   124,   557,    -1,   559,    -1,   561,
     562,    -1,    23,    -1,    44,    -1,    14,    28,    -1,    49,
      -1,    -1,    52,    21,    23,    -1,    81,    -1,   154,    28,
      -1,    -1,   584,    -1,   154,   155,    34,   157,    -1,    77,
      -1,   593,    -1,    73,    -1,   100,    44,   102,    -1,    79,
      -1,    49,   107,    23,    52,    85,    86,    -1,    28,   611,
      -1,    -1,   100,    -1,   102,   120,    -1,    -1,    98,   107,
      81,    -1,    -1,    -1,   626,    73,    -1,    -1,    -1,    -1,
      78,    79,   120,    -1,    -1,    -1,    85,    85,    86,   100,
     642,   102,    -1,    -1,   124,    -1,   107,    -1,    -1,   154,
      98,   100,   132,   102,    -1,    -1,    -1,    77,   107,   120,
      -1,   809,    -1,    -1,    23,    -1,   154,    -1,    -1,    28,
      -1,   120,    -1,    -1,    -1,   155,   124,    -1,    -1,    -1,
     100,    -1,   102,    -1,   132,    -1,   834,   107,   836,    -1,
      -1,    23,    -1,   154,    -1,    -1,    28,    -1,    -1,   847,
     120,   849,    -1,   851,   852,   154,   854,   155,   856,   157,
     858,   859,    -1,   861,   862,   863,    -1,   865,   866,   867,
      -1,   869,    81,   871,    -1,   873,   874,    -1,   730,    -1,
      -1,    -1,    -1,    -1,   154,    -1,    -1,    -1,    -1,   741,
      -1,   100,   744,   102,    -1,   747,   748,   749,   107,    -1,
     752,    -1,   754,    -1,    -1,    -1,   758,    -1,    -1,    -1,
      -1,   120,   764,    -1,   766,    -1,    -1,    -1,   100,   771,
     102,   773,    -1,    -1,    -1,   107,    -1,   779,    -1,   781,
      -1,    -1,    -1,    -1,   786,    -1,   788,    -1,   120,    -1,
      -1,    -1,   794,    -1,   796,   154,   798,   799,    -1,    -1,
      -1,    -1,    -1,    -1,   806,   807,    -1,   809,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    14,    -1,
      -1,   823,   154,    -1,   826,    -1,    -1,   829,    -1,    -1,
     832,    -1,   834,    -1,   836,    -1,    -1,    -1,    34,    -1,
      -1,    -1,   844,    -1,    -1,   847,    -1,   849,    44,    -1,
      -1,    -1,   854,    49,   856,    -1,    52,    -1,    -1,    -1,
      -1,   863,    -1,    -1,    -1,   867,    -1,   869,    -1,   871,
      -1,    -1,    -1,   875,    -1,    -1,    -1,    73,   880,   881,
      -1,   883,    78,    79,   886,   887,   888,   889,    -1,    85,
      86,   893,   894,    -1,    -1,   897,   898,    -1,    -1,    -1,
     902,    -1,    98,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   929,   124,    -1,
     932,    -1,    -1,    -1,    -1,   937,   132,   939,    -1,    -1,
      -1,    -1,   944,    -1,   946,    -1,   948,    -1,    -1,    -1,
     952,    -1,   954,   955,    -1,    -1,    -1,    -1,   960,   155,
     962,   157,    -1,    -1,    -1,    -1,    14,    -1,    -1,   971,
      -1,   973,    -1,    -1,    -1,    23,   978,    -1,    -1,    -1,
      28,    -1,    -1,    -1,    -1,   987,    -1,   989,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    44,    -1,    -1,    -1,
      -1,    49,    -1,  1005,    52,  1007,    -1,    -1,    -1,    -1,
      15,    16,    -1,    -1,  1016,    -1,  1018,    -1,    23,    -1,
      -1,    -1,    -1,    28,    29,    73,    -1,    -1,    -1,    34,
      -1,    79,  1034,  1035,  1036,    -1,    -1,    85,    86,    -1,
      -1,    -1,  1044,  1045,  1046,  1047,    -1,    -1,    -1,    -1,
      98,    56,   100,    -1,   102,    60,    61,    62,    63,   107,
      65,    -1,    -1,    68,    69,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   120,    -1,    -1,    -1,   124,  1225,    -1,  1227,
      -1,    -1,    87,  1231,    89,  1233,    -1,  1235,    -1,  1237,
      -1,  1239,  1240,    -1,  1242,   100,  1244,   102,  1246,  1247,
      -1,   106,   107,  1251,    14,  1253,   154,   155,   113,    -1,
    1112,   116,    -1,    23,    -1,   120,  1118,    -1,    28,  1121,
      -1,  1123,   127,    -1,   129,  1127,    -1,    -1,    -1,    -1,
      -1,  1133,   137,    -1,    44,    -1,    -1,    -1,    -1,    49,
      -1,    -1,    52,    -1,   149,    -1,  1148,    -1,   153,   154,
      -1,    -1,   157,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
    1162,    -1,  1164,    73,    -1,  1167,    -1,  1169,    -1,    79,
      -1,    -1,    -1,    -1,    -1,    85,    86,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,
     100,    -1,   102,    -1,    -1,    -1,    -1,   107,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     120,    -1,    -1,    -1,   124,  1217,    -1,    -1,    -1,    -1,
      -1,    -1,   132,  1225,    -1,  1227,    -1,    -1,    -1,  1231,
      -1,  1233,    -1,  1235,    -1,  1237,    -1,    -1,    -1,    -1,
    1242,    -1,  1244,    -1,   154,   155,    -1,    -1,    -1,  1251,
      -1,  1253,  1254,  1255,    -1,  1257,  1258,  1259,  1260,  1261,
    1262,  1263,  1264,    -1,  1266,    -1,    -1,    -1,    -1,  1271,
      -1,  1273,    -1,  1275,    -1,  1277,    -1,  1279,    -1,  1281,
      -1,  1283,    14,    -1,    15,    16,  1288,    -1,    -1,    -1,
    1292,  1293,    -1,    -1,    -1,  1297,    -1,    -1,    -1,    -1,
    1302,  1303,    -1,    -1,  1306,  1307,    -1,    -1,  1310,    -1,
      -1,  1313,    44,    -1,    -1,  1317,  1318,    49,    -1,    -1,
      52,    -1,  1324,    -1,    -1,    56,    -1,    -1,    59,    60,
      61,    62,    63,  1335,    65,    -1,    -1,    68,    69,    -1,
      -1,    73,    -1,  1345,     0,    -1,    78,    79,    -1,    -1,
      -1,    -1,    -1,    85,    86,    -1,    87,    -1,    89,  1361,
      -1,  1363,    -1,  1365,    -1,    21,    98,    -1,    24,    25,
      -1,    27,  1520,    -1,  1522,   106,    -1,    -1,  1526,    -1,
    1528,    -1,    -1,    -1,    -1,   116,    42,    43,    -1,    45,
      -1,    -1,   124,    -1,    -1,    -1,   127,    -1,   129,    14,
     132,    14,    -1,    -1,    -1,    -1,   137,  1409,  1410,  1411,
      -1,    -1,    68,    -1,    -1,    71,    -1,    -1,   149,  1421,
      -1,    -1,    -1,   155,  1426,    -1,  1428,    -1,    -1,    44,
    1432,    44,  1434,    -1,    49,    -1,    49,    52,    53,    52,
      53,    -1,    -1,    -1,  1446,    -1,  1448,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,  1456,    -1,  1458,  1459,    73,  1461,
      73,  1463,    -1,  1465,    79,    -1,    79,    -1,    -1,    -1,
      85,    86,    85,    86,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    98,    -1,    98,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   149,   150,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   158,    -1,    -1,    -1,    -1,    -1,    -1,   124,
      -1,   124,   168,    -1,    -1,   171,   172,   132,  1520,   132,
    1522,    -1,    -1,    -1,  1526,    -1,  1528,    -1,    -1,  1531,
    1532,  1533,  1534,  1535,  1536,  1537,  1538,  1539,  1540,    -1,
     155,    -1,   155,    -1,    -1,    -1,    -1,  1549,  1550,    -1,
      -1,    -1,    -1,    -1,   210,    -1,    -1,    -1,   214,    -1,
      -1,   217,    -1,    -1,    -1,    -1,    -1,    -1,   224,   225,
     226,   227,    -1,   229,   230,  1577,  1578,  1579,    14,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   245,
      -1,    -1,    -1,    -1,    -1,  1597,    -1,  1599,   254,  1601,
     256,  1603,    -1,    -1,  1606,    -1,    -1,  1609,    44,  1611,
    1612,    -1,    -1,    49,    -1,    -1,    52,    53,    -1,    -1,
    1622,    -1,  1624,  1625,    -1,    -1,    -1,    -1,  1630,  1631,
    1632,  1633,    -1,    -1,    -1,    -1,   292,    73,    -1,   295,
     296,    -1,    -1,    79,    -1,    -1,    -1,    -1,    -1,    85,
      86,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      15,    16,    98,    -1,    -1,    -1,    -1,    -1,    23,    -1,
      -1,    -1,    -1,    28,    29,    -1,    -1,  1679,  1680,    34,
    1682,    -1,  1684,    -1,  1686,    -1,    -1,    -1,   124,    -1,
      -1,    -1,    -1,    -1,  1696,  1697,   132,    -1,    -1,  1701,
    1702,    56,    -1,  1705,  1706,    60,    61,    62,    63,    -1,
      65,  1713,    -1,    68,    69,   371,    -1,   373,    -1,   155,
      -1,    -1,    -1,    15,    16,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    87,    -1,    89,    -1,    -1,  1739,  1740,  1741,
      -1,    -1,  1744,    -1,    -1,   100,    -1,   102,    -1,    -1,
      -1,   106,   107,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   116,    -1,    -1,    56,   120,    -1,    -1,    60,    61,
      62,    63,   127,    65,   129,    -1,    68,    69,    -1,    -1,
      -1,    -1,   137,    -1,   440,    -1,   442,    -1,    -1,    -1,
      -1,    -1,   448,    -1,   149,    -1,    -1,    89,   153,   154,
      -1,    -1,   157,    -1,    -1,    -1,    -1,    99,   464,   465,
      -1,    -1,    -1,    -1,   106,    -1,    -1,    -1,    -1,   475,
     476,   477,    -1,    -1,   116,   481,   482,   483,   484,   485,
      -1,    -1,   488,   489,   490,   127,    -1,   129,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   137,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   149,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   521,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   529,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   538,   539,   540,    -1,   542,   543,    -1,    -1,
      -1,   547,    -1,   549,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   558,    -1,    -1,    -1,    -1,     0,    -1,   565,
      -1,    -1,   568,    -1,     7,    -1,     9,   573,   574,   575,
      -1,    14,    15,    16,    -1,    18,    -1,    -1,    21,    -1,
      23,    -1,    -1,    26,    -1,    28,    29,    -1,    -1,    -1,
      -1,    34,    -1,    -1,    37,    38,    -1,    -1,    -1,    -1,
      -1,    44,    45,    -1,    47,   611,    49,    -1,   614,    52,
      -1,    -1,    -1,    56,    -1,    -1,    -1,    60,    61,    62,
      63,    -1,    65,    -1,    -1,    68,    69,    -1,    -1,    -1,
      73,    -1,    -1,    -1,    -1,    78,    79,    -1,    81,    -1,
      83,    84,    85,    86,    87,    -1,    89,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    98,    -1,   100,    -1,   102,
      -1,    -1,    -1,   106,   107,    -1,   109,    -1,   111,    -1,
      -1,    -1,    -1,   116,    -1,    -1,    -1,   120,   121,    -1,
      -1,   124,    -1,    -1,   127,    -1,   129,   130,   131,   132,
     133,    -1,   135,    -1,   137,    -1,    -1,    -1,   141,    -1,
     143,    -1,   145,   146,    -1,    -1,   149,    -1,    -1,    -1,
     153,   154,   155,    -1,   157,    -1,    -1,   160,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    14,
      15,    16,    -1,    -1,    -1,    -1,    21,    -1,    23,    -1,
      -1,    -1,    -1,    28,    -1,    -1,    -1,    -1,    -1,    34,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    44,
      45,    -1,    -1,    -1,    49,    -1,    -1,    52,    -1,    -1,
      -1,    56,    -1,    -1,    -1,    60,    61,    62,    63,    -1,
      65,    -1,    -1,    68,    69,    -1,    -1,    -1,    73,    -1,
      -1,    -1,    -1,    78,    79,    -1,    -1,    -1,    -1,    84,
      85,    86,    -1,   809,    89,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    98,    -1,   100,    -1,   102,    -1,    -1,
      -1,   106,   107,    -1,    -1,    -1,    -1,    -1,   834,    -1,
     836,   116,    -1,    -1,    -1,   120,    -1,    -1,    -1,   124,
      -1,   847,   127,   849,   129,   851,   852,   132,   854,    -1,
     856,    -1,   858,   859,    -1,   861,   862,   863,    -1,   865,
     866,   867,    -1,   869,   149,   871,    -1,   873,   874,   154,
     155,    -1,   157,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   904,   905,
     906,   907,   908,    -1,    -1,   911,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   925,
     926,    -1,   928,    -1,    -1,   931,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   941,    -1,     7,   944,     9,
     946,    -1,    -1,   949,    14,    15,    16,    -1,    18,    -1,
      -1,    21,    -1,    23,    -1,    -1,    26,    -1,    28,    29,
      -1,    -1,    -1,    -1,    34,    -1,    -1,    37,    38,    -1,
      -1,    -1,   978,    -1,    44,    45,    -1,    47,    -1,    49,
      -1,    -1,    52,    -1,    -1,    -1,    56,    -1,    -1,    -1,
      60,    61,    62,    63,    -1,    65,    -1,    -1,    68,    69,
      -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,    78,    79,
      -1,    81,    -1,    83,    84,    85,    86,    87,    -1,    89,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,
     100,    -1,   102,    -1,    -1,    -1,   106,   107,    -1,   109,
      -1,   111,    -1,    -1,    -1,    -1,   116,    -1,    -1,    -1,
     120,   121,    -1,    -1,   124,    -1,    -1,   127,    -1,   129,
     130,   131,   132,   133,    -1,   135,    -1,   137,    14,    15,
      16,   141,    -1,   143,    -1,   145,   146,    23,    -1,   149,
      -1,    -1,    28,   153,   154,   155,    -1,   157,    34,    -1,
     160,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    44,    45,
      -1,    -1,    -1,    49,    -1,    -1,    52,    -1,    -1,    -1,
      56,    -1,    -1,    -1,    60,    61,    62,    63,    -1,    65,
      -1,    -1,    68,    69,    -1,    -1,    -1,    73,    -1,    -1,
      -1,    -1,    78,    79,    -1,    -1,    -1,    -1,    84,    85,
      86,    -1,    -1,    89,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    98,    -1,   100,    -1,   102,    -1,    -1,    -1,
     106,   107,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     116,    -1,    -1,    -1,   120,    -1,    -1,    -1,   124,    -1,
      -1,   127,    -1,   129,    -1,    -1,   132,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   149,    -1,    -1,    -1,    -1,   154,   155,
      -1,   157,    -1,    -1,    -1,    -1,    -1,    -1,    -1,  1225,
      -1,  1227,    -1,    -1,    -1,  1231,    -1,  1233,    -1,  1235,
      -1,  1237,    -1,  1239,  1240,    -1,  1242,    -1,  1244,    -1,
    1246,  1247,    -1,    -1,    -1,  1251,    -1,  1253,     7,    -1,
       9,    -1,    -1,    -1,    -1,    14,    15,    16,    -1,    18,
      -1,    -1,    21,    -1,    23,    -1,    -1,    26,    -1,    28,
      29,    -1,    -1,    -1,    -1,    34,    -1,    -1,    37,    38,
    1286,    -1,  1288,    -1,  1290,    44,    45,    -1,    47,    -1,
      49,  1297,    -1,    52,    -1,    -1,    -1,    56,    -1,    -1,
      -1,    60,    61,    62,    63,    -1,    65,    -1,    -1,    68,
      69,    -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,    78,
      79,    -1,    81,    -1,    83,    84,    85,    86,    87,    -1,
      89,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,
      -1,   100,    -1,   102,    -1,    -1,    -1,   106,   107,    -1,
     109,    -1,   111,    -1,    -1,    -1,    -1,   116,    -1,    23,
      -1,   120,   121,    -1,    28,   124,    -1,    -1,   127,    -1,
     129,   130,   131,   132,   133,    -1,   135,    -1,   137,    -1,
      -1,    -1,   141,    -1,   143,    -1,   145,   146,    52,    -1,
     149,    -1,    -1,    -1,   153,   154,   155,    -1,   157,    -1,
      -1,   160,    -1,    -1,     7,    -1,     9,    71,    -1,    -1,
      -1,    14,    15,    16,    -1,    79,    80,    -1,    21,    -1,
      23,    -1,    -1,    -1,    -1,    28,    29,    -1,    -1,    -1,
      -1,    34,    -1,    -1,    98,    -1,   100,    -1,   102,    -1,
      -1,    44,    45,   107,    47,    -1,    49,    -1,    -1,    52,
      -1,    -1,    -1,    56,    -1,   119,   120,    60,    61,    62,
      63,    -1,    65,    -1,    -1,    68,    69,    -1,   132,    -1,
      73,    -1,    -1,    -1,    -1,    78,    79,    -1,    -1,    -1,
      83,    84,    85,    86,    87,    -1,    89,    -1,    -1,    -1,
     154,    -1,    -1,    -1,    -1,    98,    -1,   100,    -1,   102,
      -1,    -1,    -1,   106,   107,    -1,   109,    -1,    -1,    -1,
      -1,    -1,    -1,   116,  1520,    -1,  1522,   120,    -1,    -1,
    1526,   124,  1528,    -1,   127,    -1,   129,   130,   131,   132,
     133,    -1,   135,    -1,   137,    -1,    -1,    -1,   141,    -1,
     143,    -1,   145,   146,    -1,    -1,   149,    -1,    -1,    -1,
     153,   154,   155,     7,   157,     9,    -1,   160,    -1,    -1,
      14,    15,    16,    -1,    -1,    -1,    -1,    -1,    -1,    23,
      -1,    -1,    -1,    -1,    28,    29,    -1,    -1,    -1,    -1,
      34,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      44,    45,    -1,    47,    -1,    49,    -1,    -1,    52,    -1,
      -1,    -1,    56,    -1,    -1,    -1,    60,    61,    62,    63,
      -1,    65,    -1,    -1,    68,    69,    -1,    -1,    -1,    73,
      -1,    -1,    -1,    -1,    78,    79,    -1,    -1,    -1,    83,
      84,    85,    86,    87,    -1,    89,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    98,    -1,   100,    -1,   102,    -1,
      -1,    -1,   106,   107,    -1,   109,    -1,    -1,    -1,    -1,
      -1,    -1,   116,    -1,    -1,    -1,   120,    -1,    -1,    -1,
     124,    -1,    -1,   127,    -1,   129,   130,   131,   132,   133,
      -1,   135,    -1,   137,    -1,    -1,    -1,   141,    -1,   143,
      -1,   145,   146,    -1,    -1,   149,    -1,    -1,    -1,   153,
     154,   155,     7,   157,     9,    -1,   160,    -1,    -1,    14,
      15,    16,    -1,    -1,    -1,    -1,    -1,    -1,    23,    -1,
      -1,    -1,    -1,    28,    29,    -1,    -1,    -1,    -1,    34,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    44,
      45,    -1,    47,    -1,    49,    -1,    -1,    52,    -1,    -1,
      -1,    56,    -1,    -1,    -1,    60,    61,    62,    63,    -1,
      65,    -1,    -1,    68,    69,    -1,    -1,    -1,    73,    -1,
      -1,    -1,    -1,    78,    79,    -1,    -1,    -1,    83,    84,
      85,    86,    87,    -1,    89,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    98,    -1,   100,    -1,   102,    -1,    -1,
      -1,   106,   107,    -1,   109,    -1,    -1,    -1,    -1,    -1,
      -1,   116,    -1,    -1,    -1,   120,    -1,    -1,    -1,   124,
      -1,    -1,   127,    -1,   129,   130,   131,   132,    -1,     7,
      -1,     9,   137,    -1,    -1,    -1,    14,    15,    16,    -1,
     145,   146,    -1,    -1,   149,    -1,    -1,    -1,   153,   154,
     155,    29,   157,    -1,    -1,   160,    34,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    44,    45,    -1,    -1,
      -1,    49,    -1,    -1,    52,    -1,    -1,    -1,    56,    -1,
      -1,    -1,    60,    61,    62,    63,    -1,    65,    -1,    -1,
      68,    69,    -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,
      78,    79,    -1,    -1,    -1,    -1,    84,    85,    86,    87,
      -1,    89,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      98,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   106,    -1,
      -1,   109,    -1,    -1,    -1,    -1,    -1,    -1,   116,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   124,    -1,    -1,   127,
      -1,   129,   130,   131,   132,    -1,    -1,    -1,    -1,   137,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   149,    14,    15,    16,   153,    -1,   155,    -1,   157,
      -1,    23,   160,    -1,    -1,    -1,    28,    29,    -1,    -1,
      -1,    -1,    34,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    44,    -1,    -1,    -1,    -1,    49,    -1,    -1,
      52,    -1,    -1,    -1,    56,    -1,    -1,    -1,    60,    61,
      62,    63,    -1,    65,    -1,    -1,    68,    69,    -1,    -1,
      -1,    73,    -1,    -1,    -1,    -1,    78,    79,    -1,    -1,
      -1,    -1,    -1,    85,    86,    87,    -1,    89,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,   100,    -1,
     102,    -1,    -1,    -1,   106,   107,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   116,    -1,    -1,    -1,   120,    14,
      15,    16,   124,    -1,    -1,   127,    -1,   129,    -1,    -1,
     132,    -1,    -1,    -1,    29,   137,    -1,    -1,    -1,    34,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   149,    -1,    44,
      -1,   153,   154,   155,    49,   157,    -1,    52,   160,    -1,
      -1,    56,    -1,    -1,    -1,    60,    61,    62,    63,    -1,
      65,    -1,    -1,    68,    69,    -1,    -1,    -1,    73,    -1,
      -1,    -1,    -1,    78,    79,    -1,    -1,    -1,    -1,    -1,
      85,    86,    87,    -1,    89,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    98,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   106,    -1,    -1,   109,    -1,    -1,    -1,    -1,    -1,
      -1,   116,    -1,    -1,    -1,    -1,    14,    15,    16,   124,
      -1,    -1,   127,    -1,   129,    -1,    -1,   132,    -1,    -1,
      -1,    29,   137,    -1,    -1,    -1,    34,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   149,    -1,    44,    -1,   153,    -1,
     155,    49,   157,    -1,    52,   160,    -1,    -1,    56,    -1,
      -1,    -1,    60,    61,    62,    63,    -1,    65,    -1,    -1,
      68,    69,    -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,
      78,    79,    -1,    -1,    -1,    -1,    -1,    85,    86,    87,
      -1,    89,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      98,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   106,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   116,    -1,
      -1,    -1,    -1,    14,    15,    16,   124,    -1,    -1,   127,
      -1,   129,    23,    -1,   132,    -1,    -1,    28,    29,   137,
      -1,    -1,    -1,    34,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   149,    -1,    44,    -1,   153,    -1,   155,    49,   157,
      -1,    52,   160,    -1,    -1,    56,    -1,    -1,    -1,    60,
      61,    62,    63,    -1,    65,    -1,    -1,    68,    69,    -1,
      -1,    -1,    73,    -1,    -1,    -1,    -1,    78,    79,    -1,
      -1,    -1,    -1,    -1,    85,    86,    87,    -1,    89,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,   100,
      -1,   102,    -1,    -1,    -1,   106,   107,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   116,    -1,    -1,    -1,   120,
      14,    15,    16,   124,    -1,    -1,   127,    -1,   129,    -1,
      24,   132,    -1,    -1,    -1,    29,   137,    -1,    -1,    -1,
      34,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   149,    -1,
      44,    -1,   153,   154,   155,    49,   157,    -1,    52,    -1,
      -1,    -1,    56,    -1,    -1,    -1,    60,    61,    62,    63,
      -1,    65,    -1,    -1,    68,    69,    -1,    -1,    -1,    73,
      -1,    -1,    -1,    -1,    78,    79,    -1,    -1,    -1,    -1,
      -1,    85,    86,    87,    -1,    89,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    98,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   106,    -1,    -1,    -1,    -1,    -1,    -1,   113,
      -1,    -1,   116,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     124,    -1,    -1,   127,   128,   129,    -1,   131,   132,    -1,
      -1,    -1,    -1,   137,    -1,    -1,    -1,    14,    15,    16,
      -1,    -1,    -1,   147,   148,   149,    -1,    24,    -1,   153,
      -1,   155,    29,   157,    -1,    -1,    -1,    34,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    44,    -1,    -1,
      -1,    -1,    49,    -1,    -1,    52,    -1,    -1,    -1,    56,
      -1,    -1,    -1,    60,    61,    62,    63,    -1,    65,    -1,
      -1,    68,    69,    -1,    -1,    -1,    73,    -1,    -1,    -1,
      -1,    78,    79,    -1,    -1,    -1,    -1,    -1,    85,    86,
      87,    -1,    89,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    98,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   106,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   116,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   124,    -1,    -1,
     127,   128,   129,    -1,   131,   132,    -1,    -1,    -1,    -1,
     137,    -1,    -1,    -1,    14,    15,    16,    -1,    -1,    -1,
     147,   148,   149,    -1,    24,    -1,   153,    -1,   155,    29,
     157,    -1,    -1,    -1,    34,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    44,    -1,    -1,    -1,    -1,    49,
      -1,    -1,    52,    -1,    -1,    -1,    56,    -1,    -1,    -1,
      60,    61,    62,    63,    -1,    65,    -1,    -1,    68,    69,
      -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,    78,    79,
      -1,    -1,    -1,    -1,    -1,    85,    86,    87,    -1,    89,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   106,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   116,    -1,    -1,    -1,
      -1,    14,    15,    16,   124,    -1,    -1,   127,    21,   129,
      -1,   131,   132,    -1,    27,    -1,    -1,   137,    -1,    -1,
      -1,    34,    -1,    -1,    -1,    -1,    -1,   147,   148,   149,
      -1,    44,    45,   153,    -1,   155,    49,   157,    -1,    52,
      -1,    -1,    -1,    56,    -1,    -1,    -1,    60,    61,    62,
      63,    -1,    65,    -1,    -1,    68,    69,    -1,    -1,    -1,
      73,    -1,    -1,    -1,    -1,    78,    79,    -1,    -1,    -1,
      -1,    84,    85,    86,    -1,    -1,    89,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    98,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   106,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   116,    -1,    14,    15,    16,    -1,    -1,
      -1,   124,    -1,    -1,   127,    24,   129,    -1,    -1,   132,
      29,    -1,    -1,    -1,   137,    34,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    44,   149,    -1,    -1,    -1,
      49,    -1,   155,    52,   157,    -1,    -1,    56,    -1,    -1,
      -1,    60,    61,    62,    63,    -1,    65,    -1,    -1,    68,
      69,    -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,    78,
      79,    -1,    -1,    -1,    -1,    -1,    85,    86,    87,    -1,
      89,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   106,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   116,    -1,    -1,
      -1,    -1,    14,    15,    16,   124,    -1,    -1,   127,    -1,
     129,    -1,    24,   132,    -1,    -1,    -1,    29,   137,    -1,
      -1,    -1,    34,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     149,    -1,    44,    -1,   153,    -1,   155,    49,   157,    -1,
      52,    -1,    -1,    -1,    56,    -1,    -1,    -1,    60,    61,
      62,    63,    -1,    65,    -1,    -1,    68,    69,    -1,    -1,
      -1,    73,    -1,    -1,    -1,    -1,    78,    79,    -1,    -1,
      -1,    -1,    -1,    85,    86,    87,    -1,    89,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   106,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   116,    -1,    -1,    -1,    -1,    14,
      15,    16,   124,    -1,    -1,   127,    -1,   129,    -1,    -1,
     132,    -1,    -1,    -1,    -1,   137,    -1,    -1,    -1,    34,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   149,    -1,    44,
      -1,   153,    -1,   155,    49,   157,    -1,    52,    -1,    -1,
      -1,    56,    -1,    -1,    -1,    60,    61,    62,    63,    -1,
      65,    -1,    -1,    68,    69,    -1,    -1,    -1,    73,    -1,
      -1,    -1,    -1,    78,    79,    -1,    -1,    -1,    -1,    -1,
      85,    86,    -1,    -1,    89,    -1,    -1,    -1,    15,    16,
      -1,    -1,    -1,    98,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   106,    29,    -1,    -1,    -1,    -1,    34,    -1,    -1,
      -1,   116,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   124,
      -1,    -1,   127,    -1,   129,    -1,    -1,   132,    -1,    56,
      -1,    -1,   137,    60,    61,    62,    63,    -1,    65,    -1,
      -1,    68,    69,    -1,   149,    -1,    -1,    -1,    -1,    -1,
     155,    -1,   157,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      87,    -1,    89,    -1,    -1,    -1,    15,    16,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   106,
      29,    -1,    -1,    -1,    -1,    34,   113,    -1,    -1,   116,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     127,    -1,   129,    -1,    53,    -1,    -1,    56,    -1,    -1,
     137,    60,    61,    62,    63,    -1,    65,    -1,    -1,    68,
      69,   148,   149,    -1,    -1,    -1,   153,    -1,    -1,    -1,
     157,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    87,    -1,
      89,    -1,    -1,    -1,    15,    16,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   106,    29,    -1,
      -1,    -1,    -1,    34,   113,    -1,    -1,   116,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   127,    -1,
     129,    -1,    53,    -1,    -1,    56,    -1,    -1,   137,    60,
      61,    62,    63,    -1,    65,    -1,    -1,    68,    69,    -1,
     149,    -1,    -1,    -1,   153,    -1,    -1,    -1,   157,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    87,    -1,    89,    -1,
      -1,    -1,    15,    16,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   106,    29,    -1,    -1,    -1,
      -1,    34,   113,    -1,    -1,   116,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   127,    -1,   129,    -1,
      -1,    -1,    -1,    56,    -1,    -1,   137,    60,    61,    62,
      63,    -1,    65,    -1,    -1,    68,    69,    -1,   149,    -1,
      -1,    -1,   153,    -1,    -1,    -1,   157,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    87,    -1,    89,    -1,    -1,    -1,
      15,    16,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   106,    29,    -1,    -1,    -1,    -1,    34,
     113,    -1,    -1,   116,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   127,    -1,   129,    -1,    -1,    -1,
      -1,    56,    -1,    -1,   137,    60,    61,    62,    63,    -1,
      65,    -1,    -1,    68,    69,    -1,   149,    -1,    -1,    -1,
     153,    -1,    -1,    -1,   157,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    87,    -1,    89,    -1,    -1,    -1,    15,    16,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   106,    29,    -1,    -1,    -1,    -1,    34,   113,    -1,
      -1,   116,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      15,    16,   127,    -1,   129,    -1,    -1,    -1,    -1,    56,
      -1,    -1,   137,    60,    61,    62,    63,    -1,    65,    -1,
      -1,    68,    69,    -1,   149,    15,    16,    -1,   153,    -1,
      -1,    -1,   157,    -1,    -1,    50,    -1,    52,    -1,    29,
      87,    88,    89,    -1,    34,    -1,    61,    62,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    71,    -1,    -1,   106,
      75,    -1,    -1,    -1,    79,    80,    56,    82,    -1,   116,
      60,    61,    62,    63,    89,    65,    -1,    -1,    68,    69,
     127,    -1,   129,    98,    -1,    -1,    -1,    -1,    -1,    -1,
     137,   106,    -1,    -1,    -1,    -1,    -1,    87,    -1,    89,
      -1,   116,   149,    -1,   119,    -1,   153,    -1,    -1,    -1,
     157,    -1,    -1,    -1,    -1,    -1,   106,   132,    -1,    -1,
      -1,    -1,   137,    14,    15,    16,   116,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   149,    -1,    -1,   127,    -1,   129,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   137,    -1,    -1,
      -1,    -1,    -1,    44,    -1,    14,    15,    16,    49,   149,
      -1,    52,    -1,   153,    -1,    56,    -1,   157,    59,    60,
      61,    62,    63,    -1,    65,    -1,    -1,    68,    69,    -1,
      -1,    -1,    73,    -1,    -1,    44,    -1,    78,    79,    -1,
      49,    -1,    -1,    52,    85,    86,    87,    56,    89,    -1,
      59,    60,    61,    62,    63,    -1,    65,    98,    -1,    68,
      69,    -1,    -1,    -1,    73,   106,    -1,    -1,   109,    78,
      79,    -1,    -1,    -1,    -1,   116,    85,    86,    87,    -1,
      89,    -1,    -1,   124,    -1,    -1,   127,    -1,   129,    98,
      -1,   132,    -1,    -1,    -1,    -1,   137,   106,    -1,    -1,
      -1,    -1,    -1,    14,    15,    16,    -1,   116,   149,    -1,
      -1,    -1,    -1,    -1,   155,   124,    -1,    -1,   127,    -1,
     129,    -1,    -1,   132,    -1,    -1,    -1,    -1,   137,    -1,
      -1,    -1,    -1,    44,    -1,    -1,    -1,    -1,    49,    -1,
     149,    52,    -1,    -1,    -1,    56,   155,    -1,    59,    60,
      61,    62,    63,    -1,    65,    -1,    -1,    68,    69,    -1,
      -1,    -1,    73,    -1,    -1,    -1,    -1,    78,    79,    -1,
      -1,    -1,    -1,    -1,    85,    86,    87,    -1,    89,    -1,
      -1,    -1,    -1,    -1,    -1,    15,    16,    98,    -1,    -1,
      -1,    -1,    -1,    23,    -1,   106,    -1,    -1,    28,    -1,
      -1,    -1,    -1,    -1,    -1,   116,    36,    -1,    -1,    -1,
      -1,    -1,    -1,   124,    -1,    -1,   127,    -1,   129,    -1,
      50,   132,    52,    -1,    -1,    -1,   137,    -1,    -1,    -1,
      -1,    61,    62,    -1,    -1,    -1,    -1,    -1,   149,    -1,
      -1,    71,    -1,    -1,   155,    75,    -1,    -1,    -1,    79,
      80,    -1,    82,    -1,    -1,    -1,    -1,    -1,    -1,    89,
      -1,    -1,    92,    -1,    -1,    -1,    15,    16,    98,    -1,
     100,    -1,   102,    -1,    23,    -1,   106,   107,    -1,    28,
      -1,    -1,    -1,    -1,    -1,    -1,   116,    -1,    -1,   119,
     120,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    50,   132,    52,    -1,    -1,    -1,   137,    -1,    -1,
      -1,    -1,    61,    62,    -1,    -1,    -1,    -1,    -1,   149,
      -1,    -1,    71,    -1,   154,    -1,    75,    -1,    -1,    -1,
      79,    80,    -1,    82,    -1,    -1,    -1,    -1,    -1,    -1,
      89,    -1,    -1,    92,    -1,    -1,    -1,    -1,    -1,    98,
      -1,   100,    -1,   102,    -1,    -1,    -1,   106,   107,    -1,
      -1,    15,    16,    -1,    -1,    -1,    -1,   116,    -1,    23,
     119,   120,    -1,    -1,    28,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   132,    -1,    -1,    -1,    -1,   137,    -1,
      -1,    45,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     149,    -1,    56,    -1,    -1,   154,    60,    61,    62,    63,
      -1,    65,    -1,    -1,    68,    69,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    15,    16,    -1,    -1,    -1,    -1,
      84,    -1,    23,    -1,    -1,    89,    -1,    28,    -1,    -1,
      -1,    -1,    -1,    15,    16,    -1,   100,    -1,   102,    -1,
      -1,    23,   106,   107,    -1,    -1,    28,    -1,    -1,    -1,
      -1,    -1,   116,    -1,    -1,    56,   120,    -1,    59,    60,
      61,    62,    63,   127,    65,   129,    -1,    68,    69,    -1,
      -1,    -1,    -1,   137,    56,    -1,    -1,    59,    60,    61,
      62,    63,    -1,    65,    -1,   149,    68,    69,    89,    -1,
     154,    -1,    -1,    -1,    -1,    -1,    15,    16,    -1,   100,
      -1,   102,    -1,    -1,    23,   106,   107,    89,    -1,    28,
      -1,    -1,    -1,    -1,    -1,   116,    -1,    -1,   100,   120,
     102,    -1,    15,    16,   106,   107,   127,    -1,   129,    -1,
      23,    -1,    -1,    -1,   116,    28,   137,    56,   120,    -1,
      -1,    60,    61,    62,    63,   127,    65,   129,   149,    68,
      69,    -1,    -1,   154,    -1,   137,    -1,    50,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   149,    61,    62,
      89,    -1,   154,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   100,    75,   102,    -1,    15,    16,   106,   107,    82,
      -1,    -1,    -1,    -1,    -1,    -1,    89,   116,    -1,    -1,
      -1,   120,    -1,    -1,    -1,    -1,    -1,   100,   127,   102,
     129,    -1,    -1,   106,   107,    -1,    -1,    -1,   137,    -1,
      50,    -1,    52,   116,    -1,    -1,    -1,   120,    -1,    -1,
     149,    61,    62,    -1,    -1,   154,    -1,    -1,    -1,    -1,
      -1,    71,    -1,    -1,   137,    75,    -1,    -1,    -1,    79,
      80,    -1,    82,    -1,    -1,    -1,   149,    -1,    -1,    89,
      -1,   154,    92,    -1,    -1,    -1,    -1,    -1,    98,    15,
      16,    -1,    -1,    -1,    -1,    -1,   106,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   116,    -1,    -1,   119,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   132,   133,    50,   135,    52,   137,    -1,    -1,
      -1,   141,    -1,   143,    -1,    61,    62,    -1,    -1,   149,
      -1,    -1,    -1,    -1,    -1,    71,    -1,    -1,    -1,    75,
      -1,    -1,    -1,    79,    80,    -1,    82,    15,    16,    -1,
      -1,    -1,    -1,    89,    -1,    -1,    92,    -1,    -1,    -1,
      -1,    -1,    98,    -1,    -1,    -1,    -1,    -1,    -1,   105,
     106,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     116,    -1,    50,   119,    52,    15,    16,    -1,    -1,    57,
      -1,    -1,    -1,    61,    62,    -1,   132,    -1,    -1,    -1,
      -1,   137,    -1,    71,    -1,    -1,    -1,    75,    -1,    -1,
      -1,    79,    80,   149,    82,    -1,    -1,    -1,    -1,    -1,
      50,    89,    52,    -1,    92,    -1,    -1,    -1,    -1,    -1,
      98,    61,    62,    -1,    -1,    -1,    -1,    -1,   106,    -1,
      -1,    71,    -1,    -1,    -1,    75,    -1,    -1,   116,    79,
      80,   119,    82,    15,    16,    -1,    -1,    -1,    -1,    89,
      -1,    -1,    92,    -1,   132,    -1,    -1,    -1,    98,   137,
      -1,    -1,    -1,    -1,    -1,   105,   106,    -1,    -1,    -1,
      -1,   149,    -1,    -1,    -1,    -1,   116,    -1,    50,   119,
      52,    15,    16,    -1,    -1,    57,    -1,    -1,    -1,    61,
      62,    -1,   132,    -1,    -1,    -1,    -1,   137,    -1,    71,
      -1,    -1,    -1,    75,    -1,    -1,    -1,    79,    80,   149,
      82,    -1,    -1,    -1,    -1,    -1,    50,    89,    52,    -1,
      92,    15,    16,    57,    -1,    -1,    98,    61,    62,    -1,
      -1,    -1,    -1,    -1,   106,    -1,    -1,    71,    -1,    -1,
      -1,    75,    -1,    -1,   116,    79,    80,   119,    82,    -1,
      -1,    -1,    -1,    -1,    -1,    89,    -1,    -1,    92,    -1,
     132,    -1,    56,    -1,    98,   137,    60,    61,    62,    63,
      -1,    65,   106,    -1,    68,    69,    -1,   149,    -1,    -1,
      -1,    -1,   116,    -1,    -1,   119,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    89,    -1,    -1,   132,    -1,
      -1,    -1,    -1,   137,    -1,    99,    -1,    -1,    -1,    -1,
      -1,    -1,   106,    -1,    -1,   149,    -1,    -1,    -1,    -1,
      -1,    -1,   116,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   127,    -1,   129,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   137,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   149
};

/* YYSTOS[STATE-NUM] -- The (internal number of the) accessing
   symbol of state STATE-NUM.  */
static const yytype_uint16 yystos[] =
{
       0,     7,     9,    14,    15,    16,    18,    21,    23,    26,
      28,    29,    34,    37,    38,    44,    45,    47,    49,    52,
      56,    60,    61,    62,    63,    65,    68,    69,    73,    78,
      79,    81,    83,    84,    85,    86,    87,    89,    98,   100,
     102,   106,   107,   109,   111,   116,   120,   121,   124,   127,
     129,   130,   131,   132,   133,   135,   137,   141,   143,   145,
     146,   149,   153,   154,   155,   157,   160,   162,   163,   164,
     165,   166,   167,   168,   169,   170,   172,   173,   174,   176,
     178,   179,   180,   181,   182,   183,   185,   187,   188,   190,
     191,   193,   194,   195,   196,   197,   198,   199,   200,   201,
     202,   203,   204,   205,   206,   208,   209,   212,   213,   215,
     216,   217,   218,   219,   220,   221,   222,   226,   227,   228,
     229,   230,   231,   232,   233,   234,   235,   238,   240,   241,
     242,   243,   244,   245,   246,   247,   248,   249,   250,   251,
     252,   253,   254,   272,   273,   274,   275,   276,   277,   279,
     282,   284,   285,   287,   288,   289,   290,   291,   306,   307,
     308,   310,   311,   312,   313,   314,   315,   316,   317,   318,
     319,   320,   321,   322,   323,   197,   254,   284,   287,   306,
     197,   306,   306,    81,    81,    59,   208,   306,    52,    78,
     231,   287,   306,   318,    95,   306,   197,   306,   306,    79,
     243,   287,   306,    78,   193,   234,   284,   287,   306,   306,
     219,   223,   224,   225,   226,   231,   254,   306,   321,   208,
     226,   306,   275,   223,   226,   306,    36,    50,    52,    61,
      71,    75,    79,    80,    82,    92,    98,   119,   149,   254,
     255,   256,   257,   258,   259,   262,   264,   265,   266,   267,
     269,   270,   271,   274,   284,   285,   306,   306,   164,   208,
     306,    78,   193,   231,   287,   306,   243,   285,   306,   180,
     181,   184,   194,   287,   306,    81,   306,   266,   306,   306,
     243,   306,   194,   231,   287,   306,   309,   208,   306,   274,
     164,   165,   306,    81,   255,   306,   116,   272,   274,   306,
     306,   306,     4,    78,    98,    43,    78,    98,    46,    98,
      48,    78,    98,    11,    40,    51,    98,    39,    98,   135,
     281,   290,   291,   133,   135,    47,    47,    79,    78,   272,
     274,   272,   274,     6,    17,    25,    30,    32,    55,    76,
      79,    94,    98,   104,   112,   114,   117,   122,   123,   125,
     156,   292,   293,   294,   295,   296,   297,   298,   299,   300,
     301,   302,   303,   304,   305,     0,   164,     1,   159,   169,
     168,   322,    47,   171,   145,   175,   146,   177,   173,   180,
     147,   186,   277,   148,   189,   113,   192,   194,    24,   113,
     128,   131,   147,   148,   185,   195,    91,    19,   194,   207,
     284,   118,   139,   143,   210,   276,   281,   140,   144,   214,
     226,   226,   126,    22,   235,   143,   236,   279,   282,   142,
     144,   239,    12,    20,   252,   133,   184,   278,   281,   219,
     231,    13,    89,   275,    13,    89,   275,   306,   306,   165,
     306,   165,   306,   184,   208,   231,    52,    59,   109,   205,
     208,   232,   133,   135,   141,   142,   143,   144,   280,   283,
     280,   283,   306,   165,   279,   282,   307,    27,   208,   226,
     231,   321,    23,    28,   165,   279,   282,   306,   319,    81,
     165,   279,   282,   306,   317,   321,    21,   165,   279,   282,
     306,    83,   306,     8,   253,   208,   197,   253,   197,   306,
      59,   208,   306,   306,    33,   231,   306,    41,   197,   306,
     243,   243,   287,    52,   306,    53,    53,    52,   193,   234,
     224,   226,    59,   226,   224,   321,   208,   231,   223,   226,
     321,   306,    70,   208,   208,   226,    59,   223,   261,   267,
     306,   259,   260,   306,   262,   306,   267,   306,   255,   306,
     208,   306,   266,   306,   231,   306,   231,   306,   262,   306,
     266,   306,   306,    79,    67,   262,    10,   236,   260,   279,
     282,   239,   210,   278,   281,   214,    13,   267,   264,   255,
      66,    74,    77,   208,   306,   193,   231,   231,   243,   285,
     184,    58,   184,   306,   266,   243,    24,   309,   194,   309,
      99,    99,   208,   208,    35,   108,   110,   165,   115,   255,
     255,   306,    13,    13,   116,   272,   274,    81,     4,    98,
       4,    81,    43,    98,    43,    81,   306,    46,    81,   134,
      48,    98,    48,    81,   136,    11,    98,    81,   136,    11,
      51,    81,   306,    39,    11,    40,    51,    98,    42,    42,
     280,   283,   286,    48,    78,    98,    11,    40,    51,    98,
     279,   282,    12,   278,   281,   290,    12,    59,    72,    72,
      77,    77,    55,   158,   158,    81,   112,   304,   158,   299,
      17,   292,   293,   294,   298,    81,   125,     6,    81,    76,
     300,   301,    30,   117,   302,    30,   302,    81,    94,   295,
     297,   305,   272,    55,    81,   158,    55,    81,   158,    17,
      55,   158,   298,   305,   295,   296,   305,    17,    55,   158,
     294,    76,   299,   301,    76,   303,   304,     1,   159,   170,
     306,   172,   179,    47,   176,   194,    47,   176,   277,    52,
     188,   306,   277,   188,   306,   113,   185,   306,   306,   306,
     278,   281,   306,   197,   306,    88,   207,   226,   306,   276,
     281,    52,   211,   213,   306,   213,   306,   276,   281,   213,
     228,   306,   233,   306,   135,   281,    52,   237,   238,   306,
     238,   306,   278,   281,   238,   240,   306,   242,   306,    48,
      78,    98,    54,    85,   306,    85,   306,    59,   306,   306,
     165,   165,   286,   286,   286,   193,   306,   306,   165,   306,
      48,    78,    98,    11,    40,    51,    98,   133,   133,   135,
     135,   289,   291,   306,   289,   291,   306,   289,   291,   306,
     289,   291,   306,   165,   306,   165,   306,    27,   231,   321,
      27,   226,    27,   226,   306,    81,   165,   306,   165,   306,
     165,   279,   282,   165,   306,   165,   306,   165,   279,   282,
     165,   279,   282,   306,   165,   279,   282,   306,   165,   306,
     165,   306,   165,   279,   282,   306,     8,     8,   253,   253,
     306,   306,    33,   306,    41,   243,   306,   306,   306,   306,
      53,    53,   224,   306,   306,    59,   321,   306,   306,    70,
      70,   208,   306,    59,   261,   267,   261,   267,   261,   105,
     259,   260,    53,   262,    70,   267,   105,   255,   105,   208,
     266,   105,   231,   105,   231,   260,   262,   266,    12,   306,
     258,   262,   306,    52,   263,    57,   264,   306,   264,   306,
     264,    52,   268,   270,   306,   270,   306,   270,   306,   286,
     286,    67,   306,    77,   306,   306,    74,    77,   286,   231,
     306,    58,   306,   309,    99,    24,   309,    99,    99,    99,
     208,   306,   110,   306,   115,   115,   255,   255,   306,    13,
      13,    81,     4,    81,    81,    43,    81,   306,    81,   306,
     134,    81,   134,    48,    81,   134,   136,    40,    81,    11,
     136,    81,   136,    81,   136,   306,    81,   306,    81,   136,
      11,    98,    81,   136,    11,    51,   306,    81,   306,   291,
     291,    81,   134,    48,    98,    48,    81,   136,    11,    98,
      81,   136,    11,    51,   306,   306,   306,    12,   290,    12,
     290,    12,   208,   226,   306,   306,   306,   306,   158,   112,
      55,   158,    55,    81,   158,    55,    81,   158,    17,    55,
     158,   298,    17,    55,   158,   294,   125,   299,    76,   301,
      76,    81,   302,    30,   302,    81,   302,    81,   305,   295,
     305,    96,   158,    55,   158,   158,    55,   158,    55,   158,
     158,    17,    55,   158,   305,    55,   158,   158,    17,    55,
     158,   299,    76,   299,   279,   282,    12,   278,   281,   290,
     290,   185,   306,   192,   188,    12,   290,   192,   306,   185,
     196,   306,   196,   306,   278,   281,   197,   306,   286,   226,
     290,   290,   208,   306,   213,   213,    12,   290,    12,   290,
     228,   233,    11,    40,    51,    98,   290,   234,   306,   238,
     238,    12,   290,    12,   290,   240,   242,    81,   134,    48,
      98,    48,   306,    81,   306,    85,    81,   306,    85,   306,
     184,   215,   240,    53,   193,   110,   165,    81,   134,    48,
      98,    48,    81,   136,    11,    98,    81,   136,    11,    51,
      48,    78,    98,    48,    78,    98,    11,    40,    51,    98,
      11,    40,    51,    98,   289,   291,   289,   291,   289,   291,
     289,   165,   165,    27,   226,    27,   226,   306,    27,    27,
      27,   226,   165,   165,   165,   306,   165,   306,   165,   165,
     165,   306,   165,   306,   165,   306,   165,   306,   165,   279,
     282,   165,   306,   165,   306,   165,   279,   282,   165,   165,
     165,   306,   165,   306,   306,   306,     8,   306,   306,   306,
     306,   306,   306,   306,   306,    70,   306,   262,   262,   262,
     262,   306,   105,   306,    53,   306,    70,   306,   105,   306,
     105,   306,   105,   306,   105,    57,   260,   267,   306,   258,
     262,   262,   306,   306,   264,   264,   267,   306,   270,   270,
     271,   265,   306,   306,    77,    77,   306,   306,   240,   286,
     306,   309,    99,   306,   309,    99,    99,   306,   306,   115,
     115,   255,    81,    81,   306,   134,    81,   134,   134,   136,
      40,    40,    81,   136,   136,   306,   136,    40,    81,    11,
     136,    81,   136,    81,   136,   306,   134,    81,   134,    48,
      81,   134,   136,    40,    81,    11,   136,    81,   136,    81,
     136,   306,    12,   306,    12,   306,    70,   208,   208,   226,
     158,   158,    55,   158,   158,    55,   158,    55,   158,   158,
      17,    55,   158,    55,   158,   158,    17,    55,   158,   299,
      76,   299,   302,    81,   302,   302,   305,    81,   158,   158,
     158,    55,   158,   158,   158,    55,   158,   158,   299,   306,
     306,   306,    12,   290,    12,   290,    12,    53,   192,   185,
     192,   306,    12,   196,   196,   196,   306,   196,   306,   207,
      53,   208,   306,    12,   306,    12,    81,   136,    11,    98,
      81,   136,    11,    51,    53,   234,   306,    12,   306,    12,
     134,    81,   134,    48,    81,   134,   306,    81,   306,   306,
      81,   306,   192,   306,    53,   306,   110,   134,    81,   134,
      48,    81,   134,   136,    40,    81,    11,   136,    81,   136,
      81,   136,    81,   134,    48,    98,    48,    81,   134,    48,
      98,    48,    81,   136,    11,    98,    81,   136,    11,    51,
      81,   136,    11,    98,    81,   136,    11,    51,    27,    27,
      27,   226,    27,   165,   165,   165,   165,   165,   165,   165,
     306,   165,   306,   165,   165,   165,   306,   165,   306,   165,
     165,   306,   306,   306,   306,   306,   306,   306,   306,   306,
     306,    57,    70,   267,   258,    53,   262,    53,   267,   306,
     306,    77,   240,    99,   309,    99,   115,   134,   136,   136,
      40,   136,    40,    40,    81,   136,   136,   134,    81,   134,
     134,   136,    40,    40,    81,   136,   136,   306,   306,   306,
      70,    70,   208,   158,   158,   158,    55,   158,   158,   158,
      55,   158,   158,   299,   302,   158,   158,   306,    12,   306,
      12,   306,   192,   306,    53,   192,   306,   196,   196,   306,
      53,   306,   306,   136,    40,    81,    11,   136,    81,   136,
      81,   136,   306,    53,   306,   306,   134,    81,   134,   134,
     306,   306,   306,   306,   134,    81,   134,   134,   136,    40,
      40,    81,   136,   136,   134,    81,   134,    48,    81,   134,
     134,    81,   134,    48,    81,   134,   136,    40,    81,    11,
     136,    81,   136,    81,   136,   136,    40,    81,    11,   136,
      81,   136,    81,   136,    27,   165,   165,   165,   165,   306,
     306,    70,   306,    53,   306,    53,   306,    99,   136,   136,
     136,    40,   134,   136,   136,    40,   306,   306,    70,   158,
     158,   306,   306,   192,   192,   306,   306,   136,    40,    40,
      81,   136,   136,   306,   134,   134,   136,   136,    40,   134,
      81,   134,   134,   134,    81,   134,   134,   136,    40,    40,
      81,   136,   136,   136,    40,    40,    81,   136,   136,   306,
     306,   306,   136,   136,   306,   192,   136,   136,    40,   136,
     134,   134,   136,   136,    40,   136,   136,    40,   136,   136,
     136
};

#define yyerrok		(yyerrstatus = 0)
#define yyclearin	(yychar = YYEMPTY)
#define YYEMPTY		(-2)
#define YYEOF		0

#define YYACCEPT	goto yyacceptlab
#define YYABORT		goto yyabortlab
#define YYERROR		goto yyerrorlab


/* Like YYERROR except do call yyerror.  This remains here temporarily
   to ease the transition to the new meaning of YYERROR, for GCC.
   Once GCC version 2 has supplanted version 1, this can go.  However,
   YYFAIL appears to be in use.  Nevertheless, it is formally deprecated
   in Bison 2.4.2's NEWS entry, where a plan to phase it out is
   discussed.  */

#define YYFAIL		goto yyerrlab
#if defined YYFAIL
  /* This is here to suppress warnings from the GCC cpp's
     -Wunused-macros.  Normally we don't worry about that warning, but
     some users do, and we want to make it easy for users to remove
     YYFAIL uses, which will produce warnings from Bison 2.5.  */
#endif

#define YYRECOVERING()  (!!yyerrstatus)

#define YYBACKUP(Token, Value)                                  \
do                                                              \
  if (yychar == YYEMPTY)                                        \
    {                                                           \
      yychar = (Token);                                         \
      yylval = (Value);                                         \
      YYPOPSTACK (yylen);                                       \
      yystate = *yyssp;                                         \
      goto yybackup;                                            \
    }                                                           \
  else                                                          \
    {                                                           \
      yyerror (YY_("syntax error: cannot back up")); \
      YYERROR;							\
    }								\
while (YYID (0))


#define YYTERROR	1
#define YYERRCODE	256

/* YYLLOC_DEFAULT -- Set CURRENT to span from RHS[1] to RHS[N].
   If N is 0, then set CURRENT to the empty location which ends
   the previous symbol: RHS[0] (always defined).  */

#ifndef YYLLOC_DEFAULT
# define YYLLOC_DEFAULT(Current, Rhs, N)                                \
    do                                                                  \
      if (YYID (N))                                                     \
        {                                                               \
          (Current).first_line   = YYRHSLOC (Rhs, 1).first_line;        \
          (Current).first_column = YYRHSLOC (Rhs, 1).first_column;      \
          (Current).last_line    = YYRHSLOC (Rhs, N).last_line;         \
          (Current).last_column  = YYRHSLOC (Rhs, N).last_column;       \
        }                                                               \
      else                                                              \
        {                                                               \
          (Current).first_line   = (Current).last_line   =              \
            YYRHSLOC (Rhs, 0).last_line;                                \
          (Current).first_column = (Current).last_column =              \
            YYRHSLOC (Rhs, 0).last_column;                              \
        }                                                               \
    while (YYID (0))
#endif

#define YYRHSLOC(Rhs, K) ((Rhs)[K])



/* YY_LOCATION_PRINT -- Print the location on the stream.
   This macro was not mandated originally: define only if we know
   we won't break user code: when these are the locations we know.  */

#ifndef YY_LOCATION_PRINT
# if defined YYLTYPE_IS_TRIVIAL && YYLTYPE_IS_TRIVIAL
#  define YY_LOCATION_PRINT(File, Loc)			\
     fprintf (File, "%d.%d-%d.%d",			\
	      (Loc).first_line, (Loc).first_column,	\
	      (Loc).last_line,  (Loc).last_column)
# else
#  define YY_LOCATION_PRINT(File, Loc) ((void) 0)
# endif
#endif


/* YYLEX -- calling `yylex' with the right arguments.  */

#ifdef YYLEX_PARAM
# define YYLEX yylex (YYLEX_PARAM)
#else
# define YYLEX yylex ()
#endif

/* Enable debugging if requested.  */
#if YYDEBUG

# ifndef YYFPRINTF
#  include <stdio.h> /* INFRINGES ON USER NAME SPACE */
#  define YYFPRINTF fprintf
# endif

# define YYDPRINTF(Args)			\
do {						\
  if (yydebug)					\
    YYFPRINTF Args;				\
} while (YYID (0))

# define YY_SYMBOL_PRINT(Title, Type, Value, Location)			  \
do {									  \
  if (yydebug)								  \
    {									  \
      YYFPRINTF (stderr, "%s ", Title);					  \
      yy_symbol_print (stderr,						  \
		  Type, Value, Location); \
      YYFPRINTF (stderr, "\n");						  \
    }									  \
} while (YYID (0))


/*--------------------------------.
| Print this symbol on YYOUTPUT.  |
`--------------------------------*/

/*ARGSUSED*/
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static void
yy_symbol_value_print (FILE *yyoutput, int yytype, YYSTYPE const * const yyvaluep, YYLTYPE const * const yylocationp)
#else
static void
yy_symbol_value_print (yyoutput, yytype, yyvaluep, yylocationp)
    FILE *yyoutput;
    int yytype;
    YYSTYPE const * const yyvaluep;
    YYLTYPE const * const yylocationp;
#endif
{
  FILE *yyo = yyoutput;
  YYUSE (yyo);
  if (!yyvaluep)
    return;
  YYUSE (yylocationp);
# ifdef YYPRINT
  if (yytype < YYNTOKENS)
    YYPRINT (yyoutput, yytoknum[yytype], *yyvaluep);
# else
  YYUSE (yyoutput);
# endif
  switch (yytype)
    {
      default:
	break;
    }
}


/*--------------------------------.
| Print this symbol on YYOUTPUT.  |
`--------------------------------*/

#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static void
yy_symbol_print (FILE *yyoutput, int yytype, YYSTYPE const * const yyvaluep, YYLTYPE const * const yylocationp)
#else
static void
yy_symbol_print (yyoutput, yytype, yyvaluep, yylocationp)
    FILE *yyoutput;
    int yytype;
    YYSTYPE const * const yyvaluep;
    YYLTYPE const * const yylocationp;
#endif
{
  if (yytype < YYNTOKENS)
    YYFPRINTF (yyoutput, "token %s (", yytname[yytype]);
  else
    YYFPRINTF (yyoutput, "nterm %s (", yytname[yytype]);

  YY_LOCATION_PRINT (yyoutput, *yylocationp);
  YYFPRINTF (yyoutput, ": ");
  yy_symbol_value_print (yyoutput, yytype, yyvaluep, yylocationp);
  YYFPRINTF (yyoutput, ")");
}

/*------------------------------------------------------------------.
| yy_stack_print -- Print the state stack from its BOTTOM up to its |
| TOP (included).                                                   |
`------------------------------------------------------------------*/

#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static void
yy_stack_print (yytype_int16 *yybottom, yytype_int16 *yytop)
#else
static void
yy_stack_print (yybottom, yytop)
    yytype_int16 *yybottom;
    yytype_int16 *yytop;
#endif
{
  YYFPRINTF (stderr, "Stack now");
  for (; yybottom <= yytop; yybottom++)
    {
      int yybot = *yybottom;
      YYFPRINTF (stderr, " %d", yybot);
    }
  YYFPRINTF (stderr, "\n");
}

# define YY_STACK_PRINT(Bottom, Top)				\
do {								\
  if (yydebug)							\
    yy_stack_print ((Bottom), (Top));				\
} while (YYID (0))


/*------------------------------------------------.
| Report that the YYRULE is going to be reduced.  |
`------------------------------------------------*/

#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static void
yy_reduce_print (YYSTYPE *yyvsp, YYLTYPE *yylsp, int yyrule)
#else
static void
yy_reduce_print (yyvsp, yylsp, yyrule)
    YYSTYPE *yyvsp;
    YYLTYPE *yylsp;
    int yyrule;
#endif
{
  int yynrhs = yyr2[yyrule];
  int yyi;
  unsigned long int yylno = yyrline[yyrule];
  YYFPRINTF (stderr, "Reducing stack by rule %d (line %lu):\n",
	     yyrule - 1, yylno);
  /* The symbols being reduced.  */
  for (yyi = 0; yyi < yynrhs; yyi++)
    {
      YYFPRINTF (stderr, "   $%d = ", yyi + 1);
      yy_symbol_print (stderr, yyrhs[yyprhs[yyrule] + yyi],
		       &(yyvsp[(yyi + 1) - (yynrhs)])
		       , &(yylsp[(yyi + 1) - (yynrhs)])		       );
      YYFPRINTF (stderr, "\n");
    }
}

# define YY_REDUCE_PRINT(Rule)		\
do {					\
  if (yydebug)				\
    yy_reduce_print (yyvsp, yylsp, Rule); \
} while (YYID (0))

/* Nonzero means print parse trace.  It is left uninitialized so that
   multiple parsers can coexist.  */
int yydebug;
#else /* !YYDEBUG */
# define YYDPRINTF(Args)
# define YY_SYMBOL_PRINT(Title, Type, Value, Location)
# define YY_STACK_PRINT(Bottom, Top)
# define YY_REDUCE_PRINT(Rule)
#endif /* !YYDEBUG */


/* YYINITDEPTH -- initial size of the parser's stacks.  */
#ifndef	YYINITDEPTH
# define YYINITDEPTH 200
#endif

/* YYMAXDEPTH -- maximum size the stacks can grow to (effective only
   if the built-in stack extension method is used).

   Do not make this value too large; the results are undefined if
   YYSTACK_ALLOC_MAXIMUM < YYSTACK_BYTES (YYMAXDEPTH)
   evaluated with infinite-precision integer arithmetic.  */

#ifndef YYMAXDEPTH
# define YYMAXDEPTH 10000
#endif


#if YYERROR_VERBOSE

# ifndef yystrlen
#  if defined __GLIBC__ && defined _STRING_H
#   define yystrlen strlen
#  else
/* Return the length of YYSTR.  */
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static YYSIZE_T
yystrlen (const char *yystr)
#else
static YYSIZE_T
yystrlen (yystr)
    const char *yystr;
#endif
{
  YYSIZE_T yylen;
  for (yylen = 0; yystr[yylen]; yylen++)
    continue;
  return yylen;
}
#  endif
# endif

# ifndef yystpcpy
#  if defined __GLIBC__ && defined _STRING_H && defined _GNU_SOURCE
#   define yystpcpy stpcpy
#  else
/* Copy YYSRC to YYDEST, returning the address of the terminating '\0' in
   YYDEST.  */
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static char *
yystpcpy (char *yydest, const char *yysrc)
#else
static char *
yystpcpy (yydest, yysrc)
    char *yydest;
    const char *yysrc;
#endif
{
  char *yyd = yydest;
  const char *yys = yysrc;

  while ((*yyd++ = *yys++) != '\0')
    continue;

  return yyd - 1;
}
#  endif
# endif

# ifndef yytnamerr
/* Copy to YYRES the contents of YYSTR after stripping away unnecessary
   quotes and backslashes, so that it's suitable for yyerror.  The
   heuristic is that double-quoting is unnecessary unless the string
   contains an apostrophe, a comma, or backslash (other than
   backslash-backslash).  YYSTR is taken from yytname.  If YYRES is
   null, do not copy; instead, return the length of what the result
   would have been.  */
static YYSIZE_T
yytnamerr (char *yyres, const char *yystr)
{
  if (*yystr == '"')
    {
      YYSIZE_T yyn = 0;
      char const *yyp = yystr;

      for (;;)
	switch (*++yyp)
	  {
	  case '\'':
	  case ',':
	    goto do_not_strip_quotes;

	  case '\\':
	    if (*++yyp != '\\')
	      goto do_not_strip_quotes;
	    /* Fall through.  */
	  default:
	    if (yyres)
	      yyres[yyn] = *yyp;
	    yyn++;
	    break;

	  case '"':
	    if (yyres)
	      yyres[yyn] = '\0';
	    return yyn;
	  }
    do_not_strip_quotes: ;
    }

  if (! yyres)
    return yystrlen (yystr);

  return yystpcpy (yyres, yystr) - yyres;
}
# endif

/* Copy into *YYMSG, which is of size *YYMSG_ALLOC, an error message
   about the unexpected token YYTOKEN for the state stack whose top is
   YYSSP.

   Return 0 if *YYMSG was successfully written.  Return 1 if *YYMSG is
   not large enough to hold the message.  In that case, also set
   *YYMSG_ALLOC to the required number of bytes.  Return 2 if the
   required number of bytes is too large to store.  */
static int
yysyntax_error (YYSIZE_T *yymsg_alloc, char **yymsg,
                yytype_int16 *yyssp, int yytoken)
{
  YYSIZE_T yysize0 = yytnamerr (YY_NULL, yytname[yytoken]);
  YYSIZE_T yysize = yysize0;
  YYSIZE_T yysize1;
  enum { YYERROR_VERBOSE_ARGS_MAXIMUM = 5 };
  /* Internationalized format string. */
  const char *yyformat = YY_NULL;
  /* Arguments of yyformat. */
  char const *yyarg[YYERROR_VERBOSE_ARGS_MAXIMUM];
  /* Number of reported tokens (one for the "unexpected", one per
     "expected"). */
  int yycount = 0;

  /* There are many possibilities here to consider:
     - Assume YYFAIL is not used.  It's too flawed to consider.  See
       <http://lists.gnu.org/archive/html/bison-patches/2009-12/msg00024.html>
       for details.  YYERROR is fine as it does not invoke this
       function.
     - If this state is a consistent state with a default action, then
       the only way this function was invoked is if the default action
       is an error action.  In that case, don't check for expected
       tokens because there are none.
     - The only way there can be no lookahead present (in yychar) is if
       this state is a consistent state with a default action.  Thus,
       detecting the absence of a lookahead is sufficient to determine
       that there is no unexpected or expected token to report.  In that
       case, just report a simple "syntax error".
     - Don't assume there isn't a lookahead just because this state is a
       consistent state with a default action.  There might have been a
       previous inconsistent state, consistent state with a non-default
       action, or user semantic action that manipulated yychar.
     - Of course, the expected token list depends on states to have
       correct lookahead information, and it depends on the parser not
       to perform extra reductions after fetching a lookahead from the
       scanner and before detecting a syntax error.  Thus, state merging
       (from LALR or IELR) and default reductions corrupt the expected
       token list.  However, the list is correct for canonical LR with
       one exception: it will still contain any token that will not be
       accepted due to an error action in a later state.
  */
  if (yytoken != YYEMPTY)
    {
      int yyn = yypact[*yyssp];
      yyarg[yycount++] = yytname[yytoken];
      if (!yypact_value_is_default (yyn))
        {
          /* Start YYX at -YYN if negative to avoid negative indexes in
             YYCHECK.  In other words, skip the first -YYN actions for
             this state because they are default actions.  */
          int yyxbegin = yyn < 0 ? -yyn : 0;
          /* Stay within bounds of both yycheck and yytname.  */
          int yychecklim = YYLAST - yyn + 1;
          int yyxend = yychecklim < YYNTOKENS ? yychecklim : YYNTOKENS;
          int yyx;

          for (yyx = yyxbegin; yyx < yyxend; ++yyx)
            if (yycheck[yyx + yyn] == yyx && yyx != YYTERROR
                && !yytable_value_is_error (yytable[yyx + yyn]))
              {
                if (yycount == YYERROR_VERBOSE_ARGS_MAXIMUM)
                  {
                    yycount = 1;
                    yysize = yysize0;
                    break;
                  }
                yyarg[yycount++] = yytname[yyx];
                yysize1 = yysize + yytnamerr (YY_NULL, yytname[yyx]);
                if (! (yysize <= yysize1
                       && yysize1 <= YYSTACK_ALLOC_MAXIMUM))
                  return 2;
                yysize = yysize1;
              }
        }
    }

  switch (yycount)
    {
# define YYCASE_(N, S)                      \
      case N:                               \
        yyformat = S;                       \
      break
      YYCASE_(0, YY_("syntax error"));
      YYCASE_(1, YY_("syntax error, unexpected %s"));
      YYCASE_(2, YY_("syntax error, unexpected %s, expecting %s"));
      YYCASE_(3, YY_("syntax error, unexpected %s, expecting %s or %s"));
      YYCASE_(4, YY_("syntax error, unexpected %s, expecting %s or %s or %s"));
      YYCASE_(5, YY_("syntax error, unexpected %s, expecting %s or %s or %s or %s"));
# undef YYCASE_
    }

  yysize1 = yysize + yystrlen (yyformat);
  if (! (yysize <= yysize1 && yysize1 <= YYSTACK_ALLOC_MAXIMUM))
    return 2;
  yysize = yysize1;

  if (*yymsg_alloc < yysize)
    {
      *yymsg_alloc = 2 * yysize;
      if (! (yysize <= *yymsg_alloc
             && *yymsg_alloc <= YYSTACK_ALLOC_MAXIMUM))
        *yymsg_alloc = YYSTACK_ALLOC_MAXIMUM;
      return 1;
    }

  /* Avoid sprintf, as that infringes on the user's name space.
     Don't have undefined behavior even if the translation
     produced a string with the wrong number of "%s"s.  */
  {
    char *yyp = *yymsg;
    int yyi = 0;
    while ((*yyp = *yyformat) != '\0')
      if (*yyp == '%' && yyformat[1] == 's' && yyi < yycount)
        {
          yyp += yytnamerr (yyp, yyarg[yyi++]);
          yyformat += 2;
        }
      else
        {
          yyp++;
          yyformat++;
        }
  }
  return 0;
}
#endif /* YYERROR_VERBOSE */

/*-----------------------------------------------.
| Release the memory associated to this symbol.  |
`-----------------------------------------------*/

/*ARGSUSED*/
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static void
yydestruct (const char *yymsg, int yytype, YYSTYPE *yyvaluep, YYLTYPE *yylocationp)
#else
static void
yydestruct (yymsg, yytype, yyvaluep, yylocationp)
    const char *yymsg;
    int yytype;
    YYSTYPE *yyvaluep;
    YYLTYPE *yylocationp;
#endif
{
  YYUSE (yyvaluep);
  YYUSE (yylocationp);

  if (!yymsg)
    yymsg = "Deleting";
  YY_SYMBOL_PRINT (yymsg, yytype, yyvaluep, yylocationp);

  switch (yytype)
    {

      default:
	break;
    }
}




/* The lookahead symbol.  */
int yychar;


#ifndef YYLVAL_INITIALIZE
# define YYLVAL_INITIALIZE()
#endif
#ifndef YY_IGNORE_MAYBE_UNINITIALIZED_BEGIN
# define YY_IGNORE_MAYBE_UNINITIALIZED_BEGIN
# define YY_IGNORE_MAYBE_UNINITIALIZED_END
#endif

/* The semantic value of the lookahead symbol.  */
YYSTYPE yylval;

/* Location data for the lookahead symbol.  */
YYLTYPE yylloc;

/* Number of syntax errors so far.  */
int yynerrs;


/*----------.
| yyparse.  |
`----------*/

#ifdef YYPARSE_PARAM
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
int
yyparse (void *YYPARSE_PARAM)
#else
int
yyparse (YYPARSE_PARAM)
    void *YYPARSE_PARAM;
#endif
#else /* ! YYPARSE_PARAM */
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
int
yyparse (void)
#else
int
yyparse ()

#endif
#endif
{
    int yystate;
    /* Number of tokens to shift before error messages enabled.  */
    int yyerrstatus;

    /* The stacks and their tools:
       `yyss': related to states.
       `yyvs': related to semantic values.
       `yyls': related to locations.

       Refer to the stacks through separate pointers, to allow yyoverflow
       to reallocate them elsewhere.  */

    /* The state stack.  */
    yytype_int16 yyssa[YYINITDEPTH];
    yytype_int16 *yyss;
    yytype_int16 *yyssp;

    /* The semantic value stack.  */
    YYSTYPE yyvsa[YYINITDEPTH];
    YYSTYPE *yyvs;
    YYSTYPE *yyvsp;

    /* The location stack.  */
    YYLTYPE yylsa[YYINITDEPTH];
    YYLTYPE *yyls;
    YYLTYPE *yylsp;

    /* The locations where the error started and ended.  */
    YYLTYPE yyerror_range[3];

    YYSIZE_T yystacksize;

  int yyn;
  int yyresult;
  /* Lookahead token as an internal (translated) token number.  */
  int yytoken = 0;
  /* The variables used to return semantic value and location from the
     action routines.  */
  YYSTYPE yyval;
  YYLTYPE yyloc;

#if YYERROR_VERBOSE
  /* Buffer for error messages, and its allocated size.  */
  char yymsgbuf[128];
  char *yymsg = yymsgbuf;
  YYSIZE_T yymsg_alloc = sizeof yymsgbuf;
#endif

#define YYPOPSTACK(N)   (yyvsp -= (N), yyssp -= (N), yylsp -= (N))

  /* The number of symbols on the RHS of the reduced rule.
     Keep to zero when no symbol should be popped.  */
  int yylen = 0;

  yyss = yyssa;
  yyvs = yyvsa;
  yyls = yylsa;
  yystacksize = YYINITDEPTH;

  YYDPRINTF ((stderr, "Starting parse\n"));

  yystate = 0;
  yyerrstatus = 0;
  yynerrs = 0;
  yychar = YYEMPTY; /* Cause a token to be read.  */

  /* Initialize stack pointers.
     Waste one element of value and location stack
     so that they stay on the same level as the state stack.
     The wasted elements are never initialized.  */
  yyssp = yyss;
  yyvsp = yyvs;
  yylsp = yyls;

  YYLVAL_INITIALIZE ();
#if defined YYLTYPE_IS_TRIVIAL && YYLTYPE_IS_TRIVIAL
  /* Initialize the default location before parsing starts.  */
  yylloc.first_line   = yylloc.last_line   = 1;
  yylloc.first_column = yylloc.last_column = 1;
#endif
  goto yysetstate;

/*------------------------------------------------------------.
| yynewstate -- Push a new state, which is found in yystate.  |
`------------------------------------------------------------*/
 yynewstate:
  /* In all cases, when you get here, the value and location stacks
     have just been pushed.  So pushing a state here evens the stacks.  */
  yyssp++;

 yysetstate:
  *yyssp = yystate;

  if (yyss + yystacksize - 1 <= yyssp)
    {
      /* Get the current used size of the three stacks, in elements.  */
      YYSIZE_T yysize = yyssp - yyss + 1;

#ifdef yyoverflow
      {
	/* Give user a chance to reallocate the stack.  Use copies of
	   these so that the &'s don't force the real ones into
	   memory.  */
	YYSTYPE *yyvs1 = yyvs;
	yytype_int16 *yyss1 = yyss;
	YYLTYPE *yyls1 = yyls;

	/* Each stack pointer address is followed by the size of the
	   data in use in that stack, in bytes.  This used to be a
	   conditional around just the two extra args, but that might
	   be undefined if yyoverflow is a macro.  */
	yyoverflow (YY_("memory exhausted"),
		    &yyss1, yysize * sizeof (*yyssp),
		    &yyvs1, yysize * sizeof (*yyvsp),
		    &yyls1, yysize * sizeof (*yylsp),
		    &yystacksize);

	yyls = yyls1;
	yyss = yyss1;
	yyvs = yyvs1;
      }
#else /* no yyoverflow */
# ifndef YYSTACK_RELOCATE
      goto yyexhaustedlab;
# else
      /* Extend the stack our own way.  */
      if (YYMAXDEPTH <= yystacksize)
	goto yyexhaustedlab;
      yystacksize *= 2;
      if (YYMAXDEPTH < yystacksize)
	yystacksize = YYMAXDEPTH;

      {
	yytype_int16 *yyss1 = yyss;
	union yyalloc *yyptr =
	  (union yyalloc *) YYSTACK_ALLOC (YYSTACK_BYTES (yystacksize));
	if (! yyptr)
	  goto yyexhaustedlab;
	YYSTACK_RELOCATE (yyss_alloc, yyss);
	YYSTACK_RELOCATE (yyvs_alloc, yyvs);
	YYSTACK_RELOCATE (yyls_alloc, yyls);
#  undef YYSTACK_RELOCATE
	if (yyss1 != yyssa)
	  YYSTACK_FREE (yyss1);
      }
# endif
#endif /* no yyoverflow */

      yyssp = yyss + yysize - 1;
      yyvsp = yyvs + yysize - 1;
      yylsp = yyls + yysize - 1;

      YYDPRINTF ((stderr, "Stack size increased to %lu\n",
		  (unsigned long int) yystacksize));

      if (yyss + yystacksize - 1 <= yyssp)
	YYABORT;
    }

  YYDPRINTF ((stderr, "Entering state %d\n", yystate));

  if (yystate == YYFINAL)
    YYACCEPT;

  goto yybackup;

/*-----------.
| yybackup.  |
`-----------*/
yybackup:

  /* Do appropriate processing given the current state.  Read a
     lookahead token if we need one and don't already have one.  */

  /* First try to decide what to do without reference to lookahead token.  */
  yyn = yypact[yystate];
  if (yypact_value_is_default (yyn))
    goto yydefault;

  /* Not known => get a lookahead token if don't already have one.  */

  /* YYCHAR is either YYEMPTY or YYEOF or a valid lookahead symbol.  */
  if (yychar == YYEMPTY)
    {
      YYDPRINTF ((stderr, "Reading a token: "));
      yychar = YYLEX;
    }

  if (yychar <= YYEOF)
    {
      yychar = yytoken = YYEOF;
      YYDPRINTF ((stderr, "Now at end of input.\n"));
    }
  else
    {
      yytoken = YYTRANSLATE (yychar);
      YY_SYMBOL_PRINT ("Next token is", yytoken, &yylval, &yylloc);
    }

  /* If the proper action on seeing token YYTOKEN is to reduce or to
     detect an error, take that action.  */
  yyn += yytoken;
  if (yyn < 0 || YYLAST < yyn || yycheck[yyn] != yytoken)
    goto yydefault;
  yyn = yytable[yyn];
  if (yyn <= 0)
    {
      if (yytable_value_is_error (yyn))
        goto yyerrlab;
      yyn = -yyn;
      goto yyreduce;
    }

  /* Count tokens shifted since error; after three, turn off error
     status.  */
  if (yyerrstatus)
    yyerrstatus--;

  /* Shift the lookahead token.  */
elide_trace_shift(yystate,yychar);
report_trace_shift(yychar);
  YY_SYMBOL_PRINT ("Shifting", yytoken, &yylval, &yylloc);

  /* Discard the shifted token.  */
  yychar = YYEMPTY;

  yystate = yyn;
  YY_IGNORE_MAYBE_UNINITIALIZED_BEGIN
  *++yyvsp = yylval;
  YY_IGNORE_MAYBE_UNINITIALIZED_END
  *++yylsp = yylloc;
  goto yynewstate;


/*-----------------------------------------------------------.
| yydefault -- do the default action for the current state.  |
`-----------------------------------------------------------*/
yydefault:
  yyn = yydefact[yystate];
  if (yyn == 0)
    goto yyerrlab;
  goto yyreduce;


/*-----------------------------.
| yyreduce -- Do a reduction.  |
`-----------------------------*/
yyreduce:
elide_trace_reduce(yystate, yyn);
report_trace_reduce(yystate, yyn);
  /* yyn is the number of a rule to reduce with.  */
  yylen = yyr2[yyn];

  /* If YYLEN is nonzero, implement the default value of the action:
     `$$ = $1'.

     Otherwise, the following line sets YYVAL to garbage.
     This behavior is undocumented and Bison
     users should not rely upon it.  Assigning to YYVAL
     unconditionally makes the parser a bit smaller, and it avoids a
     GCC warning that YYVAL may be used uninitialized.  */
  yyval = yyvsp[1-yylen];

  /* Default location.  */
  YYLLOC_DEFAULT (yyloc, (yylsp - yylen), yylen);
  YY_REDUCE_PRINT (yyn);
  switch (yyn)
    {
        case 2:
/* Line 1813 of yacc.c  */
#line 203 "rpc2x_act.y"
    { top = (yyvsp[(1) - (1)]); }
    break;

  case 3:
/* Line 1813 of yacc.c  */
#line 210 "rpc2x_act.y"
    {(yyval) = new_node_1(CHUNKS,(yyvsp[(1) - (2)]));}
    break;

  case 4:
/* Line 1813 of yacc.c  */
#line 212 "rpc2x_act.y"
    { (yyval) = (yyvsp[(1) - (2)]); yyclearin; }
    break;

  case 5:
/* Line 1813 of yacc.c  */
#line 214 "rpc2x_act.y"
    {(yyval) = new_node_2(CHUNKS,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]));}
    break;

  case 6:
/* Line 1813 of yacc.c  */
#line 216 "rpc2x_act.y"
    { fprintf(stderr, "Syntax error following text ending at line %d column %d\n",
          (yylsp[(2) - (3)]).last_line, (yylsp[(2) - (3)]).last_column);
  yyclearin;
  (yyval) = new_node_2(CHUNKS, (yyvsp[(1) - (3)]), (yyvsp[(2) - (3)])); }
    break;

  case 7:
/* Line 1813 of yacc.c  */
#line 224 "rpc2x_act.y"
    {(yyval) = new_node_6(TEXT,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 8:
/* Line 1813 of yacc.c  */
#line 226 "rpc2x_act.y"
    {(yyval) = new_node_6(TEXT,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 9:
/* Line 1813 of yacc.c  */
#line 228 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 10:
/* Line 1813 of yacc.c  */
#line 230 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 11:
/* Line 1813 of yacc.c  */
#line 232 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 12:
/* Line 1813 of yacc.c  */
#line 235 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 13:
/* Line 1813 of yacc.c  */
#line 237 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 14:
/* Line 1813 of yacc.c  */
#line 239 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 15:
/* Line 1813 of yacc.c  */
#line 241 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 16:
/* Line 1813 of yacc.c  */
#line 243 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 17:
/* Line 1813 of yacc.c  */
#line 246 "rpc2x_act.y"
    {(yyval) = new_node_6(TEXT,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 18:
/* Line 1813 of yacc.c  */
#line 248 "rpc2x_act.y"
    {(yyval) = new_node_6(TEXT,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 19:
/* Line 1813 of yacc.c  */
#line 250 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 20:
/* Line 1813 of yacc.c  */
#line 252 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 21:
/* Line 1813 of yacc.c  */
#line 254 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 22:
/* Line 1813 of yacc.c  */
#line 257 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 23:
/* Line 1813 of yacc.c  */
#line 259 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 24:
/* Line 1813 of yacc.c  */
#line 261 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 25:
/* Line 1813 of yacc.c  */
#line 263 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 26:
/* Line 1813 of yacc.c  */
#line 265 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 27:
/* Line 1813 of yacc.c  */
#line 268 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 28:
/* Line 1813 of yacc.c  */
#line 270 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 29:
/* Line 1813 of yacc.c  */
#line 272 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 30:
/* Line 1813 of yacc.c  */
#line 274 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 31:
/* Line 1813 of yacc.c  */
#line 276 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 32:
/* Line 1813 of yacc.c  */
#line 279 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 33:
/* Line 1813 of yacc.c  */
#line 281 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 34:
/* Line 1813 of yacc.c  */
#line 283 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 35:
/* Line 1813 of yacc.c  */
#line 285 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 36:
/* Line 1813 of yacc.c  */
#line 287 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 37:
/* Line 1813 of yacc.c  */
#line 290 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 38:
/* Line 1813 of yacc.c  */
#line 292 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 39:
/* Line 1813 of yacc.c  */
#line 294 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 40:
/* Line 1813 of yacc.c  */
#line 296 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 41:
/* Line 1813 of yacc.c  */
#line 298 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 42:
/* Line 1813 of yacc.c  */
#line 301 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 43:
/* Line 1813 of yacc.c  */
#line 303 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 44:
/* Line 1813 of yacc.c  */
#line 305 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 45:
/* Line 1813 of yacc.c  */
#line 307 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 46:
/* Line 1813 of yacc.c  */
#line 309 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 47:
/* Line 1813 of yacc.c  */
#line 312 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 48:
/* Line 1813 of yacc.c  */
#line 314 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 49:
/* Line 1813 of yacc.c  */
#line 316 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 50:
/* Line 1813 of yacc.c  */
#line 318 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 51:
/* Line 1813 of yacc.c  */
#line 320 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 52:
/* Line 1813 of yacc.c  */
#line 323 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 53:
/* Line 1813 of yacc.c  */
#line 325 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 54:
/* Line 1813 of yacc.c  */
#line 327 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 55:
/* Line 1813 of yacc.c  */
#line 329 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 56:
/* Line 1813 of yacc.c  */
#line 331 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 57:
/* Line 1813 of yacc.c  */
#line 334 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 58:
/* Line 1813 of yacc.c  */
#line 336 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 59:
/* Line 1813 of yacc.c  */
#line 338 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 60:
/* Line 1813 of yacc.c  */
#line 340 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 61:
/* Line 1813 of yacc.c  */
#line 342 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 62:
/* Line 1813 of yacc.c  */
#line 345 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 63:
/* Line 1813 of yacc.c  */
#line 347 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 64:
/* Line 1813 of yacc.c  */
#line 349 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 65:
/* Line 1813 of yacc.c  */
#line 351 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 66:
/* Line 1813 of yacc.c  */
#line 353 "rpc2x_act.y"
    {(yyval) = new_node_1(TEXT,(yyvsp[(1) - (1)]));}
    break;

  case 67:
/* Line 1813 of yacc.c  */
#line 496 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT_1,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 68:
/* Line 1813 of yacc.c  */
#line 498 "rpc2x_act.y"
    {(yyval) = new_node_1(TEXT_1,(yyvsp[(1) - (1)]));}
    break;

  case 69:
/* Line 1813 of yacc.c  */
#line 500 "rpc2x_act.y"
    {(yyval) = new_node_1(TEXT_1,(yyvsp[(1) - (1)]));}
    break;

  case 70:
/* Line 1813 of yacc.c  */
#line 502 "rpc2x_act.y"
    {(yyval) = new_node_0(TEXT_1);}
    break;

  case 71:
/* Line 1813 of yacc.c  */
#line 506 "rpc2x_act.y"
    {(yyval) = new_node_1(TEXT_1A,(yyvsp[(1) - (1)]));}
    break;

  case 72:
/* Line 1813 of yacc.c  */
#line 508 "rpc2x_act.y"
    {(yyval) = new_node_1(TEXT_1A,(yyvsp[(1) - (1)]));}
    break;

  case 73:
/* Line 1813 of yacc.c  */
#line 512 "rpc2x_act.y"
    {(yyval) = new_node_1(TEXT_1B,(yyvsp[(1) - (1)]));}
    break;

  case 74:
/* Line 1813 of yacc.c  */
#line 514 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT_1B,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 75:
/* Line 1813 of yacc.c  */
#line 520 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT_1C,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 76:
/* Line 1813 of yacc.c  */
#line 522 "rpc2x_act.y"
    {(yyval) = new_node_5(TEXT_1C,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 77:
/* Line 1813 of yacc.c  */
#line 524 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT_1C,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 78:
/* Line 1813 of yacc.c  */
#line 526 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT_1C,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 79:
/* Line 1813 of yacc.c  */
#line 528 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT_1C,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 80:
/* Line 1813 of yacc.c  */
#line 530 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 81:
/* Line 1813 of yacc.c  */
#line 532 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT_1C,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 82:
/* Line 1813 of yacc.c  */
#line 534 "rpc2x_act.y"
    {(yyval) = new_node_4(TEXT_1C,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 83:
/* Line 1813 of yacc.c  */
#line 536 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 84:
/* Line 1813 of yacc.c  */
#line 538 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 85:
/* Line 1813 of yacc.c  */
#line 540 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 86:
/* Line 1813 of yacc.c  */
#line 542 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT_1C,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 87:
/* Line 1813 of yacc.c  */
#line 544 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 88:
/* Line 1813 of yacc.c  */
#line 546 "rpc2x_act.y"
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 89:
/* Line 1813 of yacc.c  */
#line 548 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT_1C,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 90:
/* Line 1813 of yacc.c  */
#line 550 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT_1C,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 91:
/* Line 1813 of yacc.c  */
#line 552 "rpc2x_act.y"
    {(yyval) = new_node_2(TEXT_1C,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 92:
/* Line 1813 of yacc.c  */
#line 554 "rpc2x_act.y"
    {(yyval) = new_node_1(TEXT_1C,(yyvsp[(1) - (1)]));}
    break;

  case 93:
/* Line 1813 of yacc.c  */
#line 565 "rpc2x_act.y"
    {(yyval) = new_node_1(PARAGRAPHS,(yyvsp[(1) - (1)]));}
    break;

  case 94:
/* Line 1813 of yacc.c  */
#line 567 "rpc2x_act.y"
    {(yyval) = new_node_3(PARAGRAPHS,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 95:
/* Line 1813 of yacc.c  */
#line 571 "rpc2x_act.y"
    {(yyval) = new_node_1(PARAGRAPH,(yyvsp[(1) - (1)]));}
    break;

  case 96:
/* Line 1813 of yacc.c  */
#line 573 "rpc2x_act.y"
    {(yyval) = new_node_1(PARAGRAPH,(yyvsp[(1) - (1)]));}
    break;

  case 97:
/* Line 1813 of yacc.c  */
#line 576 "rpc2x_act.y"
    {(yyval) = new_node_3(PARAGRAPH,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 98:
/* Line 1813 of yacc.c  */
#line 578 "rpc2x_act.y"
    {(yyval) = new_node_3(PARAGRAPH,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 99:
/* Line 1813 of yacc.c  */
#line 581 "rpc2x_act.y"
    {(yyval) = new_node_2(PARAGRAPH,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 100:
/* Line 1813 of yacc.c  */
#line 586 "rpc2x_act.y"
    {(yyval) = new_node_1(I_OPT_FREE_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 101:
/* Line 1813 of yacc.c  */
#line 588 "rpc2x_act.y"
    {(yyval) = new_node_2(I_OPT_FREE_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 102:
/* Line 1813 of yacc.c  */
#line 594 "rpc2x_act.y"
    {(yyval) = new_node_1(STATEMENT,(yyvsp[(1) - (1)]));}
    break;

  case 103:
/* Line 1813 of yacc.c  */
#line 598 "rpc2x_act.y"
    {(yyval) = new_node_1(INNER_STATEMENT,(yyvsp[(1) - (1)]));}
    break;

  case 104:
/* Line 1813 of yacc.c  */
#line 600 "rpc2x_act.y"
    {(yyval) = new_node_2(INNER_STATEMENT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 105:
/* Line 1813 of yacc.c  */
#line 606 "rpc2x_act.y"
    {(yyval) = new_node_1(STATEMENT_1,(yyvsp[(1) - (1)]));}
    break;

  case 106:
/* Line 1813 of yacc.c  */
#line 608 "rpc2x_act.y"
    {(yyval) = new_node_3(STATEMENT_1,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 107:
/* Line 1813 of yacc.c  */
#line 610 "rpc2x_act.y"
    {(yyval) = new_node_2(STATEMENT_1,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 108:
/* Line 1813 of yacc.c  */
#line 614 "rpc2x_act.y"
    {(yyval) = new_node_3(I_JOIK_JEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 109:
/* Line 1813 of yacc.c  */
#line 616 "rpc2x_act.y"
    {(yyval) = new_node_2(I_JOIK_JEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 110:
/* Line 1813 of yacc.c  */
#line 618 "rpc2x_act.y"
    {(yyval) = new_node_3(I_JOIK_JEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 111:
/* Line 1813 of yacc.c  */
#line 620 "rpc2x_act.y"
    {(yyval) = new_node_2(I_JOIK_JEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 112:
/* Line 1813 of yacc.c  */
#line 627 "rpc2x_act.y"
    {(yyval) = new_node_1(STATEMENT_2,(yyvsp[(1) - (1)]));}
    break;

  case 113:
/* Line 1813 of yacc.c  */
#line 629 "rpc2x_act.y"
    {(yyval) = new_node_2(STATEMENT_2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 114:
/* Line 1813 of yacc.c  */
#line 631 "rpc2x_act.y"
    {(yyval) = new_node_3(STATEMENT_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 115:
/* Line 1813 of yacc.c  */
#line 636 "rpc2x_act.y"
    {(yyval) = new_node_5(I_JJ_STAG_BO,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 116:
/* Line 1813 of yacc.c  */
#line 638 "rpc2x_act.y"
    {(yyval) = new_node_4(I_JJ_STAG_BO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 117:
/* Line 1813 of yacc.c  */
#line 640 "rpc2x_act.y"
    {(yyval) = new_node_4(I_JJ_STAG_BO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 118:
/* Line 1813 of yacc.c  */
#line 642 "rpc2x_act.y"
    {(yyval) = new_node_3(I_JJ_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 119:
/* Line 1813 of yacc.c  */
#line 644 "rpc2x_act.y"
    {(yyval) = new_node_5(I_JJ_STAG_BO,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 120:
/* Line 1813 of yacc.c  */
#line 646 "rpc2x_act.y"
    {(yyval) = new_node_4(I_JJ_STAG_BO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 121:
/* Line 1813 of yacc.c  */
#line 648 "rpc2x_act.y"
    {(yyval) = new_node_4(I_JJ_STAG_BO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 122:
/* Line 1813 of yacc.c  */
#line 650 "rpc2x_act.y"
    {(yyval) = new_node_3(I_JJ_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 123:
/* Line 1813 of yacc.c  */
#line 652 "rpc2x_act.y"
    {(yyval) = new_node_4(I_JJ_STAG_BO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 124:
/* Line 1813 of yacc.c  */
#line 654 "rpc2x_act.y"
    {(yyval) = new_node_3(I_JJ_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 125:
/* Line 1813 of yacc.c  */
#line 656 "rpc2x_act.y"
    {(yyval) = new_node_3(I_JJ_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 126:
/* Line 1813 of yacc.c  */
#line 658 "rpc2x_act.y"
    {(yyval) = new_node_2(I_JJ_STAG_BO,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 127:
/* Line 1813 of yacc.c  */
#line 664 "rpc2x_act.y"
    {(yyval) = new_node_1(STATEMENT_3,(yyvsp[(1) - (1)]));}
    break;

  case 128:
/* Line 1813 of yacc.c  */
#line 667 "rpc2x_act.y"
    {(yyval) = new_node_6(STATEMENT_3,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 129:
/* Line 1813 of yacc.c  */
#line 669 "rpc2x_act.y"
    {(yyval) = new_node_5(STATEMENT_3,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 130:
/* Line 1813 of yacc.c  */
#line 671 "rpc2x_act.y"
    {(yyval) = new_node_5(STATEMENT_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(1454,TUhU));}
    break;

  case 131:
/* Line 1813 of yacc.c  */
#line 674 "rpc2x_act.y"
    {(yyval) = new_node_5(STATEMENT_3,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 132:
/* Line 1813 of yacc.c  */
#line 676 "rpc2x_act.y"
    {(yyval) = new_node_4(STATEMENT_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 133:
/* Line 1813 of yacc.c  */
#line 678 "rpc2x_act.y"
    {(yyval) = new_node_4(STATEMENT_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1454,TUhU));}
    break;

  case 134:
/* Line 1813 of yacc.c  */
#line 681 "rpc2x_act.y"
    {(yyval) = new_node_5(STATEMENT_3,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 135:
/* Line 1813 of yacc.c  */
#line 683 "rpc2x_act.y"
    {(yyval) = new_node_4(STATEMENT_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 136:
/* Line 1813 of yacc.c  */
#line 685 "rpc2x_act.y"
    {(yyval) = new_node_4(STATEMENT_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1454,TUhU));}
    break;

  case 137:
/* Line 1813 of yacc.c  */
#line 688 "rpc2x_act.y"
    {(yyval) = new_node_4(STATEMENT_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 138:
/* Line 1813 of yacc.c  */
#line 690 "rpc2x_act.y"
    {(yyval) = new_node_3(STATEMENT_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 139:
/* Line 1813 of yacc.c  */
#line 692 "rpc2x_act.y"
    {(yyval) = new_node_3(STATEMENT_3,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(1454,TUhU));}
    break;

  case 140:
/* Line 1813 of yacc.c  */
#line 698 "rpc2x_act.y"
    {(yyval) = new_node_2(FRAGMENT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 141:
/* Line 1813 of yacc.c  */
#line 700 "rpc2x_act.y"
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[(1) - (1)]));}
    break;

  case 142:
/* Line 1813 of yacc.c  */
#line 702 "rpc2x_act.y"
    {(yyval) = new_node_2(FRAGMENT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 143:
/* Line 1813 of yacc.c  */
#line 704 "rpc2x_act.y"
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[(1) - (1)]));}
    break;

  case 144:
/* Line 1813 of yacc.c  */
#line 706 "rpc2x_act.y"
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[(1) - (1)]));}
    break;

  case 145:
/* Line 1813 of yacc.c  */
#line 708 "rpc2x_act.y"
    {(yyval) = new_node_2(FRAGMENT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 146:
/* Line 1813 of yacc.c  */
#line 710 "rpc2x_act.y"
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[(1) - (1)]));}
    break;

  case 147:
/* Line 1813 of yacc.c  */
#line 712 "rpc2x_act.y"
    {(yyval) = new_node_3(FRAGMENT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 148:
/* Line 1813 of yacc.c  */
#line 714 "rpc2x_act.y"
    {(yyval) = new_node_2(FRAGMENT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 149:
/* Line 1813 of yacc.c  */
#line 716 "rpc2x_act.y"
    {(yyval) = new_node_2(FRAGMENT,(yyvsp[(1) - (1)]),new_elidable(1489,VAU));}
    break;

  case 150:
/* Line 1813 of yacc.c  */
#line 718 "rpc2x_act.y"
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[(1) - (1)]));}
    break;

  case 151:
/* Line 1813 of yacc.c  */
#line 720 "rpc2x_act.y"
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[(1) - (1)]));}
    break;

  case 152:
/* Line 1813 of yacc.c  */
#line 722 "rpc2x_act.y"
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[(1) - (1)]));}
    break;

  case 153:
/* Line 1813 of yacc.c  */
#line 724 "rpc2x_act.y"
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[(1) - (1)]));}
    break;

  case 154:
/* Line 1813 of yacc.c  */
#line 730 "rpc2x_act.y"
    {(yyval) = new_node_3(PRENEX,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 155:
/* Line 1813 of yacc.c  */
#line 732 "rpc2x_act.y"
    {(yyval) = new_node_2(PRENEX,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 156:
/* Line 1813 of yacc.c  */
#line 741 "rpc2x_act.y"
    {(yyval) = new_node_4(SENTENCE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 157:
/* Line 1813 of yacc.c  */
#line 743 "rpc2x_act.y"
    {(yyval) = new_node_3(SENTENCE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 158:
/* Line 1813 of yacc.c  */
#line 745 "rpc2x_act.y"
    {(yyval) = new_node_1(SENTENCE,(yyvsp[(1) - (1)]));}
    break;

  case 159:
/* Line 1813 of yacc.c  */
#line 747 "rpc2x_act.y"
    {(yyval) = new_node_1(SENTENCE,(yyvsp[(1) - (1)]));}
    break;

  case 160:
/* Line 1813 of yacc.c  */
#line 753 "rpc2x_act.y"
    {
 fprintf(stderr, "Missing selbri before GIhA at line %d column %d\n",
         (yylsp[(2) - (2)]).first_line, (yylsp[(2) - (2)]).first_column);
 error_advance(0);
 (yyval) = (yyvsp[(1) - (2)]);
 YYERROR;
}
    break;

  case 161:
/* Line 1813 of yacc.c  */
#line 762 "rpc2x_act.y"
    {
 fprintf(stderr, "Missing selbri before GIhA at line %d column %d\n",
         (yylsp[(2) - (2)]).first_line, (yylsp[(2) - (2)]).first_column);
 error_advance(0);
 (yyval) = (yyvsp[(1) - (2)]);
 YYERROR;
}
    break;

  case 162:
/* Line 1813 of yacc.c  */
#line 771 "rpc2x_act.y"
    {
 fprintf(stderr, "Missing selbri before GIhA at line %d column %d\n",
         (yylsp[(2) - (2)]).first_line, (yylsp[(2) - (2)]).first_column);
 error_advance(0);
 (yyval) = (yyvsp[(1) - (2)]);
 YYERROR;
}
    break;

  case 163:
/* Line 1813 of yacc.c  */
#line 784 "rpc2x_act.y"
    {(yyval) = new_node_1(NO_CU_SENTENCE,(yyvsp[(1) - (1)]));}
    break;

  case 164:
/* Line 1813 of yacc.c  */
#line 786 "rpc2x_act.y"
    {(yyval) = new_node_3(NO_CU_SENTENCE,(yyvsp[(1) - (2)]),new_elidable(266,CU),(yyvsp[(2) - (2)]));}
    break;

  case 165:
/* Line 1813 of yacc.c  */
#line 791 "rpc2x_act.y"
    {(yyval) = new_node_1(OBSERVATIVE_SENTENCE,(yyvsp[(1) - (1)]));}
    break;

  case 166:
/* Line 1813 of yacc.c  */
#line 798 "rpc2x_act.y"
    {(yyval) = new_node_1(SUBSENTENCE,(yyvsp[(1) - (1)]));}
    break;

  case 167:
/* Line 1813 of yacc.c  */
#line 800 "rpc2x_act.y"
    {(yyval) = new_node_2(SUBSENTENCE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 168:
/* Line 1813 of yacc.c  */
#line 807 "rpc2x_act.y"
    {(yyval) = new_node_1(BRIDI_TAIL,(yyvsp[(1) - (1)]));}
    break;

  case 169:
/* Line 1813 of yacc.c  */
#line 809 "rpc2x_act.y"
    {(yyval) = new_node_8(BRIDI_TAIL,(yyvsp[(1) - (8)]),(yyvsp[(2) - (8)]),(yyvsp[(3) - (8)]),(yyvsp[(4) - (8)]),(yyvsp[(5) - (8)]),(yyvsp[(6) - (8)]),(yyvsp[(7) - (8)]),(yyvsp[(8) - (8)]));}
    break;

  case 170:
/* Line 1813 of yacc.c  */
#line 811 "rpc2x_act.y"
    {(yyval) = new_node_8(BRIDI_TAIL,(yyvsp[(1) - (7)]),(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]),(yyvsp[(7) - (7)]),new_elidable(1489,VAU));}
    break;

  case 171:
/* Line 1813 of yacc.c  */
#line 813 "rpc2x_act.y"
    {(yyval) = new_node_7(BRIDI_TAIL,(yyvsp[(1) - (7)]),(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]),(yyvsp[(7) - (7)]));}
    break;

  case 172:
/* Line 1813 of yacc.c  */
#line 815 "rpc2x_act.y"
    {(yyval) = new_node_7(BRIDI_TAIL,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]),new_elidable(1489,VAU));}
    break;

  case 173:
/* Line 1813 of yacc.c  */
#line 817 "rpc2x_act.y"
    {(yyval) = new_node_7(BRIDI_TAIL,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),new_elidable(723,KEhE),(yyvsp[(6) - (6)]));}
    break;

  case 174:
/* Line 1813 of yacc.c  */
#line 819 "rpc2x_act.y"
    {(yyval) = new_node_7(BRIDI_TAIL,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]),new_elidable(723,KEhE),new_elidable(1489,VAU));}
    break;

  case 175:
/* Line 1813 of yacc.c  */
#line 822 "rpc2x_act.y"
    {(yyval) = new_node_7(BRIDI_TAIL,(yyvsp[(1) - (7)]),(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]),(yyvsp[(7) - (7)]));}
    break;

  case 176:
/* Line 1813 of yacc.c  */
#line 824 "rpc2x_act.y"
    {(yyval) = new_node_7(BRIDI_TAIL,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]),new_elidable(1489,VAU));}
    break;

  case 177:
/* Line 1813 of yacc.c  */
#line 826 "rpc2x_act.y"
    {(yyval) = new_node_6(BRIDI_TAIL,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 178:
/* Line 1813 of yacc.c  */
#line 828 "rpc2x_act.y"
    {(yyval) = new_node_6(BRIDI_TAIL,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]),new_elidable(1489,VAU));}
    break;

  case 179:
/* Line 1813 of yacc.c  */
#line 830 "rpc2x_act.y"
    {(yyval) = new_node_6(BRIDI_TAIL,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),new_elidable(723,KEhE),(yyvsp[(5) - (5)]));}
    break;

  case 180:
/* Line 1813 of yacc.c  */
#line 832 "rpc2x_act.y"
    {(yyval) = new_node_5(BRIDI_TAIL,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(1489,VAU));}
    break;

  case 181:
/* Line 1813 of yacc.c  */
#line 836 "rpc2x_act.y"
    {(yyval) = new_node_2(GIHEK_STAG_KE,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 182:
/* Line 1813 of yacc.c  */
#line 838 "rpc2x_act.y"
    {(yyval) = new_node_1(GIHEK_STAG_KE,(yyvsp[(2) - (2)]));}
    break;

  case 183:
/* Line 1813 of yacc.c  */
#line 844 "rpc2x_act.y"
    {(yyval) = new_node_1(BRIDI_TAIL_1,(yyvsp[(1) - (1)]));}
    break;

  case 184:
/* Line 1813 of yacc.c  */
#line 846 "rpc2x_act.y"
    {(yyval) = new_node_5(BRIDI_TAIL_1,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 185:
/* Line 1813 of yacc.c  */
#line 848 "rpc2x_act.y"
    {(yyval) = new_node_5(BRIDI_TAIL_1,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(1489,VAU));}
    break;

  case 186:
/* Line 1813 of yacc.c  */
#line 850 "rpc2x_act.y"
    {(yyval) = new_node_4(BRIDI_TAIL_1,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 187:
/* Line 1813 of yacc.c  */
#line 852 "rpc2x_act.y"
    {(yyval) = new_node_4(BRIDI_TAIL_1,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1489,VAU));}
    break;

  case 188:
/* Line 1813 of yacc.c  */
#line 858 "rpc2x_act.y"
    {(yyval) = new_node_1(BRIDI_TAIL_2,(yyvsp[(1) - (1)]));}
    break;

  case 189:
/* Line 1813 of yacc.c  */
#line 860 "rpc2x_act.y"
    {(yyval) = new_node_4(BRIDI_TAIL_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 190:
/* Line 1813 of yacc.c  */
#line 862 "rpc2x_act.y"
    {(yyval) = new_node_4(BRIDI_TAIL_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1489,VAU));}
    break;

  case 191:
/* Line 1813 of yacc.c  */
#line 866 "rpc2x_act.y"
    {(yyval) = new_node_4(GIHEK_STAG_BO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 192:
/* Line 1813 of yacc.c  */
#line 868 "rpc2x_act.y"
    {(yyval) = new_node_3(GIHEK_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 193:
/* Line 1813 of yacc.c  */
#line 870 "rpc2x_act.y"
    {(yyval) = new_node_3(GIHEK_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 194:
/* Line 1813 of yacc.c  */
#line 872 "rpc2x_act.y"
    {(yyval) = new_node_2(GIHEK_STAG_BO,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 195:
/* Line 1813 of yacc.c  */
#line 879 "rpc2x_act.y"
    {(yyval) = new_node_2(BRIDI_TAIL_3,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 196:
/* Line 1813 of yacc.c  */
#line 881 "rpc2x_act.y"
    {(yyval) = new_node_2(BRIDI_TAIL_3,(yyvsp[(1) - (1)]),new_elidable(1489,VAU));}
    break;

  case 197:
/* Line 1813 of yacc.c  */
#line 883 "rpc2x_act.y"
    {(yyval) = new_node_1(BRIDI_TAIL_3,(yyvsp[(1) - (1)]));}
    break;

  case 198:
/* Line 1813 of yacc.c  */
#line 887 "rpc2x_act.y"
    {(yyval) = new_node_1(MAIN_SELBRI,(yyvsp[(1) - (1)]));}
    break;

  case 199:
/* Line 1813 of yacc.c  */
#line 893 "rpc2x_act.y"
    {(yyval) = new_node_3(TAIL_TERMS,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 200:
/* Line 1813 of yacc.c  */
#line 895 "rpc2x_act.y"
    {(yyval) = new_node_2(TAIL_TERMS,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 201:
/* Line 1813 of yacc.c  */
#line 897 "rpc2x_act.y"
    {(yyval) = new_node_2(TAIL_TERMS,(yyvsp[(1) - (1)]),new_elidable(1489,VAU));}
    break;

  case 202:
/* Line 1813 of yacc.c  */
#line 899 "rpc2x_act.y"
    {(yyval) = new_node_2(TAIL_TERMS,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 203:
/* Line 1813 of yacc.c  */
#line 901 "rpc2x_act.y"
    {(yyval) = new_node_1(TAIL_TERMS,(yyvsp[(1) - (1)]));}
    break;

  case 204:
/* Line 1813 of yacc.c  */
#line 907 "rpc2x_act.y"
    {(yyval) = new_node_5(GEK_SENTENCE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 205:
/* Line 1813 of yacc.c  */
#line 909 "rpc2x_act.y"
    {(yyval) = new_node_5(GEK_SENTENCE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(1489,VAU));}
    break;

  case 206:
/* Line 1813 of yacc.c  */
#line 912 "rpc2x_act.y"
    {(yyval) = new_node_6(GEK_SENTENCE,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 207:
/* Line 1813 of yacc.c  */
#line 914 "rpc2x_act.y"
    {(yyval) = new_node_5(GEK_SENTENCE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 208:
/* Line 1813 of yacc.c  */
#line 916 "rpc2x_act.y"
    {(yyval) = new_node_5(GEK_SENTENCE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(723,KEhE));}
    break;

  case 209:
/* Line 1813 of yacc.c  */
#line 919 "rpc2x_act.y"
    {(yyval) = new_node_5(GEK_SENTENCE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 210:
/* Line 1813 of yacc.c  */
#line 921 "rpc2x_act.y"
    {(yyval) = new_node_4(GEK_SENTENCE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 211:
/* Line 1813 of yacc.c  */
#line 923 "rpc2x_act.y"
    {(yyval) = new_node_4(GEK_SENTENCE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(723,KEhE));}
    break;

  case 212:
/* Line 1813 of yacc.c  */
#line 926 "rpc2x_act.y"
    {(yyval) = new_node_5(GEK_SENTENCE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 213:
/* Line 1813 of yacc.c  */
#line 928 "rpc2x_act.y"
    {(yyval) = new_node_4(GEK_SENTENCE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 214:
/* Line 1813 of yacc.c  */
#line 930 "rpc2x_act.y"
    {(yyval) = new_node_4(GEK_SENTENCE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(723,KEhE));}
    break;

  case 215:
/* Line 1813 of yacc.c  */
#line 933 "rpc2x_act.y"
    {(yyval) = new_node_4(GEK_SENTENCE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 216:
/* Line 1813 of yacc.c  */
#line 935 "rpc2x_act.y"
    {(yyval) = new_node_3(GEK_SENTENCE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 217:
/* Line 1813 of yacc.c  */
#line 937 "rpc2x_act.y"
    {(yyval) = new_node_3(GEK_SENTENCE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(723,KEhE));}
    break;

  case 218:
/* Line 1813 of yacc.c  */
#line 940 "rpc2x_act.y"
    {(yyval) = new_node_3(GEK_SENTENCE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 219:
/* Line 1813 of yacc.c  */
#line 942 "rpc2x_act.y"
    {(yyval) = new_node_2(GEK_SENTENCE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 220:
/* Line 1813 of yacc.c  */
#line 951 "rpc2x_act.y"
    {(yyval) = new_node_1(TERMS,(yyvsp[(1) - (1)]));}
    break;

  case 221:
/* Line 1813 of yacc.c  */
#line 953 "rpc2x_act.y"
    {(yyval) = new_node_2(TERMS,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 222:
/* Line 1813 of yacc.c  */
#line 959 "rpc2x_act.y"
    {(yyval) = new_node_1(TERMS_1,(yyvsp[(1) - (1)]));}
    break;

  case 223:
/* Line 1813 of yacc.c  */
#line 961 "rpc2x_act.y"
    {(yyval) = new_node_6(TERMS_1,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 224:
/* Line 1813 of yacc.c  */
#line 963 "rpc2x_act.y"
    {(yyval) = new_node_5(TERMS_1,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 225:
/* Line 1813 of yacc.c  */
#line 965 "rpc2x_act.y"
    {(yyval) = new_node_6(TERMS_1,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 226:
/* Line 1813 of yacc.c  */
#line 967 "rpc2x_act.y"
    {(yyval) = new_node_5(TERMS_1,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 227:
/* Line 1813 of yacc.c  */
#line 969 "rpc2x_act.y"
    {(yyval) = new_node_5(TERMS_1,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 228:
/* Line 1813 of yacc.c  */
#line 971 "rpc2x_act.y"
    {(yyval) = new_node_4(TERMS_1,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 229:
/* Line 1813 of yacc.c  */
#line 973 "rpc2x_act.y"
    {(yyval) = new_node_5(TERMS_1,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 230:
/* Line 1813 of yacc.c  */
#line 975 "rpc2x_act.y"
    {(yyval) = new_node_4(TERMS_1,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 231:
/* Line 1813 of yacc.c  */
#line 982 "rpc2x_act.y"
    {(yyval) = new_node_1(TERMS_2,(yyvsp[(1) - (1)]));}
    break;

  case 232:
/* Line 1813 of yacc.c  */
#line 984 "rpc2x_act.y"
    {(yyval) = new_node_4(TERMS_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 233:
/* Line 1813 of yacc.c  */
#line 986 "rpc2x_act.y"
    {(yyval) = new_node_3(TERMS_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 234:
/* Line 1813 of yacc.c  */
#line 995 "rpc2x_act.y"
    {(yyval) = new_node_1(TERM,(yyvsp[(1) - (1)]));}
    break;

  case 235:
/* Line 1813 of yacc.c  */
#line 997 "rpc2x_act.y"
    {(yyval) = new_node_1(TERM,(yyvsp[(1) - (1)]));}
    break;

  case 236:
/* Line 1813 of yacc.c  */
#line 999 "rpc2x_act.y"
    {(yyval) = new_node_1(TERM,(yyvsp[(1) - (1)]));}
    break;

  case 237:
/* Line 1813 of yacc.c  */
#line 1001 "rpc2x_act.y"
    {(yyval) = new_node_1(TERM,(yyvsp[(1) - (1)]));}
    break;

  case 238:
/* Line 1813 of yacc.c  */
#line 1003 "rpc2x_act.y"
    {(yyval) = new_node_1(TERM,(yyvsp[(1) - (1)]));}
    break;

  case 239:
/* Line 1813 of yacc.c  */
#line 1005 "rpc2x_act.y"
    {(yyval) = new_node_1(TERM,(yyvsp[(1) - (1)]));}
    break;

  case 240:
/* Line 1813 of yacc.c  */
#line 1007 "rpc2x_act.y"
    {(yyval) = new_node_1(TERM,(yyvsp[(1) - (1)]));}
    break;

  case 241:
/* Line 1813 of yacc.c  */
#line 1009 "rpc2x_act.y"
    {(yyval) = new_node_1(TERM,(yyvsp[(1) - (1)]));}
    break;

  case 242:
/* Line 1813 of yacc.c  */
#line 1013 "rpc2x_act.y"
    {(yyval) = new_node_1(TERM_PLAIN_SUMTI,(yyvsp[(1) - (1)]));}
    break;

  case 243:
/* Line 1813 of yacc.c  */
#line 1017 "rpc2x_act.y"
    {(yyval) = new_node_3(TERM_PLACED_SUMTI,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 244:
/* Line 1813 of yacc.c  */
#line 1019 "rpc2x_act.y"
    {(yyval) = new_node_2(TERM_PLACED_SUMTI,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 245:
/* Line 1813 of yacc.c  */
#line 1023 "rpc2x_act.y"
    {(yyval) = new_node_2(TERM_TAGGED_SUMTI,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 246:
/* Line 1813 of yacc.c  */
#line 1029 "rpc2x_act.y"
    {(yyval) = new_node_2(TAGGED_TERMSET,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 247:
/* Line 1813 of yacc.c  */
#line 1033 "rpc2x_act.y"
    {(yyval) = new_node_3(TERM_FLOATING_TENSE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 248:
/* Line 1813 of yacc.c  */
#line 1035 "rpc2x_act.y"
    {(yyval) = new_node_2(TERM_FLOATING_TENSE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 249:
/* Line 1813 of yacc.c  */
#line 1037 "rpc2x_act.y"
    {(yyval) = new_node_2(TERM_FLOATING_TENSE,(yyvsp[(1) - (1)]),new_elidable(756,KU));}
    break;

  case 250:
/* Line 1813 of yacc.c  */
#line 1041 "rpc2x_act.y"
    {(yyval) = new_node_3(TERM_FLOATING_NEGATE,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 251:
/* Line 1813 of yacc.c  */
#line 1043 "rpc2x_act.y"
    {(yyval) = new_node_2(TERM_FLOATING_NEGATE,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 252:
/* Line 1813 of yacc.c  */
#line 1048 "rpc2x_act.y"
    {(yyval) = new_node_4(TERM_OTHER,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 253:
/* Line 1813 of yacc.c  */
#line 1050 "rpc2x_act.y"
    {(yyval) = new_node_3(TERM_OTHER,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 254:
/* Line 1813 of yacc.c  */
#line 1052 "rpc2x_act.y"
    {(yyval) = new_node_3(TERM_OTHER,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(756,KU));}
    break;

  case 255:
/* Line 1813 of yacc.c  */
#line 1054 "rpc2x_act.y"
    {(yyval) = new_node_3(TERM_OTHER,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 256:
/* Line 1813 of yacc.c  */
#line 1056 "rpc2x_act.y"
    {(yyval) = new_node_2(TERM_OTHER,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 257:
/* Line 1813 of yacc.c  */
#line 1058 "rpc2x_act.y"
    {(yyval) = new_node_2(TERM_OTHER,(yyvsp[(1) - (1)]),new_elidable(756,KU));}
    break;

  case 258:
/* Line 1813 of yacc.c  */
#line 1066 "rpc2x_act.y"
    {(yyval) = new_node_5(TERMSET,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 259:
/* Line 1813 of yacc.c  */
#line 1068 "rpc2x_act.y"
    {(yyval) = new_node_2(TERMSET,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 260:
/* Line 1813 of yacc.c  */
#line 1072 "rpc2x_act.y"
    {(yyval) = new_node_2(TERMSET_START,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 261:
/* Line 1813 of yacc.c  */
#line 1074 "rpc2x_act.y"
    {(yyval) = new_node_1(TERMSET_START,(yyvsp[(1) - (1)]));}
    break;

  case 262:
/* Line 1813 of yacc.c  */
#line 1078 "rpc2x_act.y"
    {(yyval) = new_node_3(TERMSET_BODY,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 263:
/* Line 1813 of yacc.c  */
#line 1080 "rpc2x_act.y"
    {(yyval) = new_node_2(TERMSET_BODY,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 264:
/* Line 1813 of yacc.c  */
#line 1082 "rpc2x_act.y"
    {(yyval) = new_node_2(TERMSET_BODY,(yyvsp[(1) - (1)]),new_elidable(1062,NUhU));}
    break;

  case 265:
/* Line 1813 of yacc.c  */
#line 1088 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI,(yyvsp[(1) - (1)]));}
    break;

  case 266:
/* Line 1813 of yacc.c  */
#line 1090 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 267:
/* Line 1813 of yacc.c  */
#line 1092 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 268:
/* Line 1813 of yacc.c  */
#line 1099 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_1,(yyvsp[(1) - (1)]));}
    break;

  case 269:
/* Line 1813 of yacc.c  */
#line 1101 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_1,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 270:
/* Line 1813 of yacc.c  */
#line 1105 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_EK_KE,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 271:
/* Line 1813 of yacc.c  */
#line 1107 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_EK_KE,(yyvsp[(2) - (2)]));}
    break;

  case 272:
/* Line 1813 of yacc.c  */
#line 1109 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_EK_KE,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 273:
/* Line 1813 of yacc.c  */
#line 1111 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_EK_KE,(yyvsp[(2) - (2)]));}
    break;

  case 274:
/* Line 1813 of yacc.c  */
#line 1115 "rpc2x_act.y"
    {(yyval) = new_node_5(KE_SUMTI,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 275:
/* Line 1813 of yacc.c  */
#line 1117 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_SUMTI,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 276:
/* Line 1813 of yacc.c  */
#line 1119 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_SUMTI,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(723,KEhE));}
    break;

  case 277:
/* Line 1813 of yacc.c  */
#line 1121 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_SUMTI,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 278:
/* Line 1813 of yacc.c  */
#line 1123 "rpc2x_act.y"
    {(yyval) = new_node_3(KE_SUMTI,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 279:
/* Line 1813 of yacc.c  */
#line 1125 "rpc2x_act.y"
    {(yyval) = new_node_3(KE_SUMTI,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(723,KEhE));}
    break;

  case 280:
/* Line 1813 of yacc.c  */
#line 1131 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_2,(yyvsp[(1) - (1)]));}
    break;

  case 281:
/* Line 1813 of yacc.c  */
#line 1133 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 282:
/* Line 1813 of yacc.c  */
#line 1135 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 283:
/* Line 1813 of yacc.c  */
#line 1137 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 284:
/* Line 1813 of yacc.c  */
#line 1139 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 285:
/* Line 1813 of yacc.c  */
#line 1147 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_3,(yyvsp[(1) - (1)]));}
    break;

  case 286:
/* Line 1813 of yacc.c  */
#line 1149 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 287:
/* Line 1813 of yacc.c  */
#line 1153 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_EK_STAG_BO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 288:
/* Line 1813 of yacc.c  */
#line 1155 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_EK_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 289:
/* Line 1813 of yacc.c  */
#line 1157 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_EK_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 290:
/* Line 1813 of yacc.c  */
#line 1159 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_EK_STAG_BO,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 291:
/* Line 1813 of yacc.c  */
#line 1161 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_EK_STAG_BO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 292:
/* Line 1813 of yacc.c  */
#line 1163 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_EK_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 293:
/* Line 1813 of yacc.c  */
#line 1165 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_EK_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 294:
/* Line 1813 of yacc.c  */
#line 1167 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_EK_STAG_BO,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 295:
/* Line 1813 of yacc.c  */
#line 1173 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_4,(yyvsp[(1) - (1)]));}
    break;

  case 296:
/* Line 1813 of yacc.c  */
#line 1175 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_4,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 297:
/* Line 1813 of yacc.c  */
#line 1181 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_5,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 298:
/* Line 1813 of yacc.c  */
#line 1183 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_5,(yyvsp[(1) - (1)]));}
    break;

  case 299:
/* Line 1813 of yacc.c  */
#line 1185 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_5,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 300:
/* Line 1813 of yacc.c  */
#line 1187 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_5,(yyvsp[(1) - (1)]));}
    break;

  case 301:
/* Line 1813 of yacc.c  */
#line 1191 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_5A,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 302:
/* Line 1813 of yacc.c  */
#line 1193 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_5A,(yyvsp[(1) - (1)]));}
    break;

  case 303:
/* Line 1813 of yacc.c  */
#line 1197 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_5B,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 304:
/* Line 1813 of yacc.c  */
#line 1199 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_5B,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 305:
/* Line 1813 of yacc.c  */
#line 1201 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_5B,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(756,KU));}
    break;

  case 306:
/* Line 1813 of yacc.c  */
#line 1207 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[(1) - (1)]));}
    break;

  case 307:
/* Line 1813 of yacc.c  */
#line 1209 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[(1) - (1)]));}
    break;

  case 308:
/* Line 1813 of yacc.c  */
#line 1212 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_6,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 309:
/* Line 1813 of yacc.c  */
#line 1214 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[(1) - (1)]));}
    break;

  case 310:
/* Line 1813 of yacc.c  */
#line 1217 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 311:
/* Line 1813 of yacc.c  */
#line 1219 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_6,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 312:
/* Line 1813 of yacc.c  */
#line 1221 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_6,(yyvsp[(1) - (1)]),new_elidable(157,BOI));}
    break;

  case 313:
/* Line 1813 of yacc.c  */
#line 1224 "rpc2x_act.y"
    {(yyval) = new_node_5(SUMTI_6,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 314:
/* Line 1813 of yacc.c  */
#line 1226 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 315:
/* Line 1813 of yacc.c  */
#line 1228 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(756,KU));}
    break;

  case 316:
/* Line 1813 of yacc.c  */
#line 1231 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 317:
/* Line 1813 of yacc.c  */
#line 1233 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 318:
/* Line 1813 of yacc.c  */
#line 1235 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(756,KU));}
    break;

  case 319:
/* Line 1813 of yacc.c  */
#line 1238 "rpc2x_act.y"
    {(yyval) = new_node_5(SUMTI_6,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 320:
/* Line 1813 of yacc.c  */
#line 1240 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 321:
/* Line 1813 of yacc.c  */
#line 1242 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(756,KU));}
    break;

  case 322:
/* Line 1813 of yacc.c  */
#line 1245 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 323:
/* Line 1813 of yacc.c  */
#line 1247 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 324:
/* Line 1813 of yacc.c  */
#line 1249 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(756,KU));}
    break;

  case 325:
/* Line 1813 of yacc.c  */
#line 1252 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[(1) - (1)]));}
    break;

  case 326:
/* Line 1813 of yacc.c  */
#line 1255 "rpc2x_act.y"
    {(yyval) = new_node_5(SUMTI_6,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 327:
/* Line 1813 of yacc.c  */
#line 1257 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 328:
/* Line 1813 of yacc.c  */
#line 1259 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(851,LOhO));}
    break;

  case 329:
/* Line 1813 of yacc.c  */
#line 1262 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 330:
/* Line 1813 of yacc.c  */
#line 1264 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 331:
/* Line 1813 of yacc.c  */
#line 1266 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(851,LOhO));}
    break;

  case 332:
/* Line 1813 of yacc.c  */
#line 1269 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_6,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 333:
/* Line 1813 of yacc.c  */
#line 1271 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[(1) - (1)]));}
    break;

  case 334:
/* Line 1813 of yacc.c  */
#line 1273 "rpc2x_act.y"
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 335:
/* Line 1813 of yacc.c  */
#line 1275 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 336:
/* Line 1813 of yacc.c  */
#line 1277 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(838,LIhU));}
    break;

  case 337:
/* Line 1813 of yacc.c  */
#line 1279 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_6,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 338:
/* Line 1813 of yacc.c  */
#line 1281 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[(1) - (1)]));}
    break;

  case 339:
/* Line 1813 of yacc.c  */
#line 1283 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_6,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 340:
/* Line 1813 of yacc.c  */
#line 1285 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[(1) - (1)]));}
    break;

  case 341:
/* Line 1813 of yacc.c  */
#line 1289 "rpc2x_act.y"
    {(yyval) = new_node_6(LAHE_SUMTI_6,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 342:
/* Line 1813 of yacc.c  */
#line 1291 "rpc2x_act.y"
    {(yyval) = new_node_5(LAHE_SUMTI_6,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 343:
/* Line 1813 of yacc.c  */
#line 1293 "rpc2x_act.y"
    {(yyval) = new_node_5(LAHE_SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(866,LUhU));}
    break;

  case 344:
/* Line 1813 of yacc.c  */
#line 1295 "rpc2x_act.y"
    {(yyval) = new_node_5(LAHE_SUMTI_6,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 345:
/* Line 1813 of yacc.c  */
#line 1297 "rpc2x_act.y"
    {(yyval) = new_node_4(LAHE_SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 346:
/* Line 1813 of yacc.c  */
#line 1299 "rpc2x_act.y"
    {(yyval) = new_node_4(LAHE_SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(866,LUhU));}
    break;

  case 347:
/* Line 1813 of yacc.c  */
#line 1302 "rpc2x_act.y"
    {(yyval) = new_node_5(LAHE_SUMTI_6,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 348:
/* Line 1813 of yacc.c  */
#line 1304 "rpc2x_act.y"
    {(yyval) = new_node_4(LAHE_SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 349:
/* Line 1813 of yacc.c  */
#line 1306 "rpc2x_act.y"
    {(yyval) = new_node_4(LAHE_SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(866,LUhU));}
    break;

  case 350:
/* Line 1813 of yacc.c  */
#line 1308 "rpc2x_act.y"
    {(yyval) = new_node_4(LAHE_SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 351:
/* Line 1813 of yacc.c  */
#line 1310 "rpc2x_act.y"
    {(yyval) = new_node_3(LAHE_SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 352:
/* Line 1813 of yacc.c  */
#line 1312 "rpc2x_act.y"
    {(yyval) = new_node_3(LAHE_SUMTI_6,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(866,LUhU));}
    break;

  case 353:
/* Line 1813 of yacc.c  */
#line 1316 "rpc2x_act.y"
    {(yyval) = new_node_7(NAHE_BO_SUMTI_6,(yyvsp[(2) - (8)]),(yyvsp[(3) - (8)]),(yyvsp[(4) - (8)]),(yyvsp[(5) - (8)]),(yyvsp[(6) - (8)]),(yyvsp[(7) - (8)]),(yyvsp[(8) - (8)]));}
    break;

  case 354:
/* Line 1813 of yacc.c  */
#line 1318 "rpc2x_act.y"
    {(yyval) = new_node_6(NAHE_BO_SUMTI_6,(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]),(yyvsp[(7) - (7)]));}
    break;

  case 355:
/* Line 1813 of yacc.c  */
#line 1320 "rpc2x_act.y"
    {(yyval) = new_node_6(NAHE_BO_SUMTI_6,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]),new_elidable(866,LUhU));}
    break;

  case 356:
/* Line 1813 of yacc.c  */
#line 1322 "rpc2x_act.y"
    {(yyval) = new_node_6(NAHE_BO_SUMTI_6,(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]),(yyvsp[(7) - (7)]));}
    break;

  case 357:
/* Line 1813 of yacc.c  */
#line 1324 "rpc2x_act.y"
    {(yyval) = new_node_5(NAHE_BO_SUMTI_6,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 358:
/* Line 1813 of yacc.c  */
#line 1326 "rpc2x_act.y"
    {(yyval) = new_node_5(NAHE_BO_SUMTI_6,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]),new_elidable(866,LUhU));}
    break;

  case 359:
/* Line 1813 of yacc.c  */
#line 1329 "rpc2x_act.y"
    {(yyval) = new_node_6(NAHE_BO_SUMTI_6,(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]),(yyvsp[(7) - (7)]));}
    break;

  case 360:
/* Line 1813 of yacc.c  */
#line 1331 "rpc2x_act.y"
    {(yyval) = new_node_5(NAHE_BO_SUMTI_6,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 361:
/* Line 1813 of yacc.c  */
#line 1333 "rpc2x_act.y"
    {(yyval) = new_node_5(NAHE_BO_SUMTI_6,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]),new_elidable(866,LUhU));}
    break;

  case 362:
/* Line 1813 of yacc.c  */
#line 1335 "rpc2x_act.y"
    {(yyval) = new_node_5(NAHE_BO_SUMTI_6,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 363:
/* Line 1813 of yacc.c  */
#line 1337 "rpc2x_act.y"
    {(yyval) = new_node_4(NAHE_BO_SUMTI_6,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 364:
/* Line 1813 of yacc.c  */
#line 1339 "rpc2x_act.y"
    {(yyval) = new_node_4(NAHE_BO_SUMTI_6,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(866,LUhU));}
    break;

  case 365:
/* Line 1813 of yacc.c  */
#line 1343 "rpc2x_act.y"
    {(yyval) = new_node_5(NAME_SUMTI_6,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 366:
/* Line 1813 of yacc.c  */
#line 1345 "rpc2x_act.y"
    {(yyval) = new_node_4(NAME_SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 367:
/* Line 1813 of yacc.c  */
#line 1347 "rpc2x_act.y"
    {(yyval) = new_node_4(NAME_SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 368:
/* Line 1813 of yacc.c  */
#line 1349 "rpc2x_act.y"
    {(yyval) = new_node_3(NAME_SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 369:
/* Line 1813 of yacc.c  */
#line 1352 "rpc2x_act.y"
    {(yyval) = new_node_4(NAME_SUMTI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 370:
/* Line 1813 of yacc.c  */
#line 1354 "rpc2x_act.y"
    {(yyval) = new_node_3(NAME_SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 371:
/* Line 1813 of yacc.c  */
#line 1356 "rpc2x_act.y"
    {(yyval) = new_node_3(NAME_SUMTI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 372:
/* Line 1813 of yacc.c  */
#line 1358 "rpc2x_act.y"
    {(yyval) = new_node_2(NAME_SUMTI_6,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 373:
/* Line 1813 of yacc.c  */
#line 1364 "rpc2x_act.y"
    {(yyval) = new_node_3(SUMTI_TAIL,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 374:
/* Line 1813 of yacc.c  */
#line 1366 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_TAIL,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 375:
/* Line 1813 of yacc.c  */
#line 1368 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_TAIL,(yyvsp[(1) - (1)]));}
    break;

  case 376:
/* Line 1813 of yacc.c  */
#line 1370 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_TAIL,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 377:
/* Line 1813 of yacc.c  */
#line 1379 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_TAIL_1,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 378:
/* Line 1813 of yacc.c  */
#line 1381 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_TAIL_1,(yyvsp[(1) - (1)]));}
    break;

  case 379:
/* Line 1813 of yacc.c  */
#line 1383 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_TAIL_1,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 380:
/* Line 1813 of yacc.c  */
#line 1387 "rpc2x_act.y"
    {(yyval) = new_node_2(SUMTI_TAIL_1A,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 381:
/* Line 1813 of yacc.c  */
#line 1389 "rpc2x_act.y"
    {(yyval) = new_node_1(SUMTI_TAIL_1A,(yyvsp[(1) - (1)]));}
    break;

  case 382:
/* Line 1813 of yacc.c  */
#line 1395 "rpc2x_act.y"
    {(yyval) = new_node_1(RELATIVE_CLAUSES,(yyvsp[(1) - (1)]));}
    break;

  case 383:
/* Line 1813 of yacc.c  */
#line 1399 "rpc2x_act.y"
    {(yyval) = new_node_1(RELATIVE_CLAUSE_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 384:
/* Line 1813 of yacc.c  */
#line 1401 "rpc2x_act.y"
    {(yyval) = new_node_4(RELATIVE_CLAUSE_SEQ,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 385:
/* Line 1813 of yacc.c  */
#line 1403 "rpc2x_act.y"
    {(yyval) = new_node_3(RELATIVE_CLAUSE_SEQ,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 386:
/* Line 1813 of yacc.c  */
#line 1409 "rpc2x_act.y"
    {(yyval) = new_node_1(RELATIVE_CLAUSE,(yyvsp[(1) - (1)]));}
    break;

  case 387:
/* Line 1813 of yacc.c  */
#line 1411 "rpc2x_act.y"
    {(yyval) = new_node_1(RELATIVE_CLAUSE,(yyvsp[(1) - (1)]));}
    break;

  case 388:
/* Line 1813 of yacc.c  */
#line 1415 "rpc2x_act.y"
    {(yyval) = new_node_5(TERM_RELATIVE_CLAUSE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 389:
/* Line 1813 of yacc.c  */
#line 1417 "rpc2x_act.y"
    {(yyval) = new_node_4(TERM_RELATIVE_CLAUSE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 390:
/* Line 1813 of yacc.c  */
#line 1419 "rpc2x_act.y"
    {(yyval) = new_node_4(TERM_RELATIVE_CLAUSE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(530,GEhU));}
    break;

  case 391:
/* Line 1813 of yacc.c  */
#line 1421 "rpc2x_act.y"
    {(yyval) = new_node_4(TERM_RELATIVE_CLAUSE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 392:
/* Line 1813 of yacc.c  */
#line 1423 "rpc2x_act.y"
    {(yyval) = new_node_3(TERM_RELATIVE_CLAUSE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 393:
/* Line 1813 of yacc.c  */
#line 1425 "rpc2x_act.y"
    {(yyval) = new_node_3(TERM_RELATIVE_CLAUSE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(530,GEhU));}
    break;

  case 394:
/* Line 1813 of yacc.c  */
#line 1429 "rpc2x_act.y"
    {(yyval) = new_node_5(FULL_RELATIVE_CLAUSE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 395:
/* Line 1813 of yacc.c  */
#line 1431 "rpc2x_act.y"
    {(yyval) = new_node_4(FULL_RELATIVE_CLAUSE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 396:
/* Line 1813 of yacc.c  */
#line 1433 "rpc2x_act.y"
    {(yyval) = new_node_4(FULL_RELATIVE_CLAUSE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(767,KUhO));}
    break;

  case 397:
/* Line 1813 of yacc.c  */
#line 1435 "rpc2x_act.y"
    {(yyval) = new_node_4(FULL_RELATIVE_CLAUSE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 398:
/* Line 1813 of yacc.c  */
#line 1437 "rpc2x_act.y"
    {(yyval) = new_node_3(FULL_RELATIVE_CLAUSE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 399:
/* Line 1813 of yacc.c  */
#line 1439 "rpc2x_act.y"
    {(yyval) = new_node_3(FULL_RELATIVE_CLAUSE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(767,KUhO));}
    break;

  case 400:
/* Line 1813 of yacc.c  */
#line 1445 "rpc2x_act.y"
    {(yyval) = new_node_2(SELBRI,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 401:
/* Line 1813 of yacc.c  */
#line 1447 "rpc2x_act.y"
    {(yyval) = new_node_1(SELBRI,(yyvsp[(1) - (1)]));}
    break;

  case 402:
/* Line 1813 of yacc.c  */
#line 1453 "rpc2x_act.y"
    {(yyval) = new_node_1(SELBRI_1,(yyvsp[(1) - (1)]));}
    break;

  case 403:
/* Line 1813 of yacc.c  */
#line 1455 "rpc2x_act.y"
    {(yyval) = new_node_3(SELBRI_1,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 404:
/* Line 1813 of yacc.c  */
#line 1457 "rpc2x_act.y"
    {(yyval) = new_node_2(SELBRI_1,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 405:
/* Line 1813 of yacc.c  */
#line 1463 "rpc2x_act.y"
    {(yyval) = new_node_4(SELBRI_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 406:
/* Line 1813 of yacc.c  */
#line 1465 "rpc2x_act.y"
    {(yyval) = new_node_3(SELBRI_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 407:
/* Line 1813 of yacc.c  */
#line 1467 "rpc2x_act.y"
    {(yyval) = new_node_1(SELBRI_2,(yyvsp[(1) - (1)]));}
    break;

  case 408:
/* Line 1813 of yacc.c  */
#line 1473 "rpc2x_act.y"
    {(yyval) = new_node_2(SELBRI_3,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 409:
/* Line 1813 of yacc.c  */
#line 1475 "rpc2x_act.y"
    {(yyval) = new_node_1(SELBRI_3,(yyvsp[(1) - (1)]));}
    break;

  case 410:
/* Line 1813 of yacc.c  */
#line 1484 "rpc2x_act.y"
    {(yyval) = new_node_1(SELBRI_4,(yyvsp[(1) - (1)]));}
    break;

  case 411:
/* Line 1813 of yacc.c  */
#line 1486 "rpc2x_act.y"
    {(yyval) = new_node_4(SELBRI_4,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 412:
/* Line 1813 of yacc.c  */
#line 1488 "rpc2x_act.y"
    {(yyval) = new_node_3(SELBRI_4,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 413:
/* Line 1813 of yacc.c  */
#line 1490 "rpc2x_act.y"
    {(yyval) = new_node_4(SELBRI_4,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 414:
/* Line 1813 of yacc.c  */
#line 1492 "rpc2x_act.y"
    {(yyval) = new_node_3(SELBRI_4,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 415:
/* Line 1813 of yacc.c  */
#line 1494 "rpc2x_act.y"
    {(yyval) = new_node_3(SELBRI_4,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 416:
/* Line 1813 of yacc.c  */
#line 1498 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_STAG_KE,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 417:
/* Line 1813 of yacc.c  */
#line 1502 "rpc2x_act.y"
    {(yyval) = new_node_5(KE_SELBRI_3,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 418:
/* Line 1813 of yacc.c  */
#line 1504 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_SELBRI_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 419:
/* Line 1813 of yacc.c  */
#line 1506 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_SELBRI_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(723,KEhE));}
    break;

  case 420:
/* Line 1813 of yacc.c  */
#line 1508 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_SELBRI_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 421:
/* Line 1813 of yacc.c  */
#line 1510 "rpc2x_act.y"
    {(yyval) = new_node_3(KE_SELBRI_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 422:
/* Line 1813 of yacc.c  */
#line 1512 "rpc2x_act.y"
    {(yyval) = new_node_3(KE_SELBRI_3,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(723,KEhE));}
    break;

  case 423:
/* Line 1813 of yacc.c  */
#line 1520 "rpc2x_act.y"
    {(yyval) = new_node_1(SELBRI_5,(yyvsp[(1) - (1)]));}
    break;

  case 424:
/* Line 1813 of yacc.c  */
#line 1522 "rpc2x_act.y"
    {(yyval) = new_node_3(SELBRI_5,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 425:
/* Line 1813 of yacc.c  */
#line 1526 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_JEK_STAG_BO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 426:
/* Line 1813 of yacc.c  */
#line 1528 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_JEK_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 427:
/* Line 1813 of yacc.c  */
#line 1530 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_JEK_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 428:
/* Line 1813 of yacc.c  */
#line 1532 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_JEK_STAG_BO,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 429:
/* Line 1813 of yacc.c  */
#line 1534 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_JEK_STAG_BO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 430:
/* Line 1813 of yacc.c  */
#line 1536 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_JEK_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 431:
/* Line 1813 of yacc.c  */
#line 1538 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_JEK_STAG_BO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 432:
/* Line 1813 of yacc.c  */
#line 1540 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_JEK_STAG_BO,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 433:
/* Line 1813 of yacc.c  */
#line 1546 "rpc2x_act.y"
    {(yyval) = new_node_1(SELBRI_6,(yyvsp[(1) - (1)]));}
    break;

  case 434:
/* Line 1813 of yacc.c  */
#line 1548 "rpc2x_act.y"
    {(yyval) = new_node_4(SELBRI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 435:
/* Line 1813 of yacc.c  */
#line 1550 "rpc2x_act.y"
    {(yyval) = new_node_3(SELBRI_6,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 436:
/* Line 1813 of yacc.c  */
#line 1553 "rpc2x_act.y"
    {(yyval) = new_node_6(SELBRI_6,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 437:
/* Line 1813 of yacc.c  */
#line 1555 "rpc2x_act.y"
    {(yyval) = new_node_5(SELBRI_6,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 438:
/* Line 1813 of yacc.c  */
#line 1557 "rpc2x_act.y"
    {(yyval) = new_node_4(SELBRI_6,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 439:
/* Line 1813 of yacc.c  */
#line 1564 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT,(yyvsp[(1) - (1)]));}
    break;

  case 440:
/* Line 1813 of yacc.c  */
#line 1566 "rpc2x_act.y"
    {(yyval) = new_node_4(TANRU_UNIT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 441:
/* Line 1813 of yacc.c  */
#line 1568 "rpc2x_act.y"
    {(yyval) = new_node_3(TANRU_UNIT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 442:
/* Line 1813 of yacc.c  */
#line 1575 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT_1,(yyvsp[(1) - (1)]));}
    break;

  case 443:
/* Line 1813 of yacc.c  */
#line 1577 "rpc2x_act.y"
    {(yyval) = new_node_2(TANRU_UNIT_1,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 444:
/* Line 1813 of yacc.c  */
#line 1587 "rpc2x_act.y"
    {(yyval) = new_node_2(TANRU_UNIT_2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 445:
/* Line 1813 of yacc.c  */
#line 1589 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[(1) - (1)]));}
    break;

  case 446:
/* Line 1813 of yacc.c  */
#line 1592 "rpc2x_act.y"
    {(yyval) = new_node_3(TANRU_UNIT_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 447:
/* Line 1813 of yacc.c  */
#line 1594 "rpc2x_act.y"
    {(yyval) = new_node_2(TANRU_UNIT_2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 448:
/* Line 1813 of yacc.c  */
#line 1596 "rpc2x_act.y"
    {(yyval) = new_node_2(TANRU_UNIT_2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 449:
/* Line 1813 of yacc.c  */
#line 1598 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[(1) - (1)]));}
    break;

  case 450:
/* Line 1813 of yacc.c  */
#line 1601 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[(1) - (1)]));}
    break;

  case 451:
/* Line 1813 of yacc.c  */
#line 1604 "rpc2x_act.y"
    {(yyval) = new_node_7(TANRU_UNIT_2,(yyvsp[(1) - (7)]),(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]),(yyvsp[(7) - (7)]));}
    break;

  case 452:
/* Line 1813 of yacc.c  */
#line 1606 "rpc2x_act.y"
    {(yyval) = new_node_6(TANRU_UNIT_2,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 453:
/* Line 1813 of yacc.c  */
#line 1608 "rpc2x_act.y"
    {(yyval) = new_node_5(TANRU_UNIT_2,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 454:
/* Line 1813 of yacc.c  */
#line 1610 "rpc2x_act.y"
    {(yyval) = new_node_6(TANRU_UNIT_2,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 455:
/* Line 1813 of yacc.c  */
#line 1612 "rpc2x_act.y"
    {(yyval) = new_node_5(TANRU_UNIT_2,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 456:
/* Line 1813 of yacc.c  */
#line 1614 "rpc2x_act.y"
    {(yyval) = new_node_4(TANRU_UNIT_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 457:
/* Line 1813 of yacc.c  */
#line 1616 "rpc2x_act.y"
    {(yyval) = new_node_6(TANRU_UNIT_2,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),new_elidable(922,MEhU),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 458:
/* Line 1813 of yacc.c  */
#line 1618 "rpc2x_act.y"
    {(yyval) = new_node_5(TANRU_UNIT_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),new_elidable(922,MEhU),(yyvsp[(4) - (4)]));}
    break;

  case 459:
/* Line 1813 of yacc.c  */
#line 1620 "rpc2x_act.y"
    {(yyval) = new_node_4(TANRU_UNIT_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(922,MEhU));}
    break;

  case 460:
/* Line 1813 of yacc.c  */
#line 1623 "rpc2x_act.y"
    {(yyval) = new_node_6(TANRU_UNIT_2,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 461:
/* Line 1813 of yacc.c  */
#line 1625 "rpc2x_act.y"
    {(yyval) = new_node_5(TANRU_UNIT_2,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 462:
/* Line 1813 of yacc.c  */
#line 1627 "rpc2x_act.y"
    {(yyval) = new_node_4(TANRU_UNIT_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 463:
/* Line 1813 of yacc.c  */
#line 1629 "rpc2x_act.y"
    {(yyval) = new_node_5(TANRU_UNIT_2,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 464:
/* Line 1813 of yacc.c  */
#line 1631 "rpc2x_act.y"
    {(yyval) = new_node_4(TANRU_UNIT_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 465:
/* Line 1813 of yacc.c  */
#line 1633 "rpc2x_act.y"
    {(yyval) = new_node_3(TANRU_UNIT_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 466:
/* Line 1813 of yacc.c  */
#line 1635 "rpc2x_act.y"
    {(yyval) = new_node_5(TANRU_UNIT_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),new_elidable(922,MEhU),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 467:
/* Line 1813 of yacc.c  */
#line 1637 "rpc2x_act.y"
    {(yyval) = new_node_4(TANRU_UNIT_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),new_elidable(922,MEhU),(yyvsp[(3) - (3)]));}
    break;

  case 468:
/* Line 1813 of yacc.c  */
#line 1639 "rpc2x_act.y"
    {(yyval) = new_node_3(TANRU_UNIT_2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(922,MEhU));}
    break;

  case 469:
/* Line 1813 of yacc.c  */
#line 1642 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[(1) - (1)]));}
    break;

  case 470:
/* Line 1813 of yacc.c  */
#line 1645 "rpc2x_act.y"
    {(yyval) = new_node_3(TANRU_UNIT_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 471:
/* Line 1813 of yacc.c  */
#line 1647 "rpc2x_act.y"
    {(yyval) = new_node_2(TANRU_UNIT_2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 472:
/* Line 1813 of yacc.c  */
#line 1650 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[(1) - (1)]));}
    break;

  case 473:
/* Line 1813 of yacc.c  */
#line 1653 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[(1) - (1)]));}
    break;

  case 474:
/* Line 1813 of yacc.c  */
#line 1656 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[(1) - (1)]));}
    break;

  case 475:
/* Line 1813 of yacc.c  */
#line 1659 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[(1) - (1)]));}
    break;

  case 476:
/* Line 1813 of yacc.c  */
#line 1662 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[(1) - (1)]));}
    break;

  case 477:
/* Line 1813 of yacc.c  */
#line 1665 "rpc2x_act.y"
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[(1) - (1)]));}
    break;

  case 478:
/* Line 1813 of yacc.c  */
#line 1670 "rpc2x_act.y"
    {(yyval) = new_node_5(KE_SELBRI3_TU2,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 479:
/* Line 1813 of yacc.c  */
#line 1672 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_SELBRI3_TU2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 480:
/* Line 1813 of yacc.c  */
#line 1674 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_SELBRI3_TU2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(723,KEhE));}
    break;

  case 481:
/* Line 1813 of yacc.c  */
#line 1676 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_SELBRI3_TU2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 482:
/* Line 1813 of yacc.c  */
#line 1678 "rpc2x_act.y"
    {(yyval) = new_node_3(KE_SELBRI3_TU2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 483:
/* Line 1813 of yacc.c  */
#line 1680 "rpc2x_act.y"
    {(yyval) = new_node_3(KE_SELBRI3_TU2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(723,KEhE));}
    break;

  case 484:
/* Line 1813 of yacc.c  */
#line 1684 "rpc2x_act.y"
    {(yyval) = new_node_3(NUMBER_MOI_TU2,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 485:
/* Line 1813 of yacc.c  */
#line 1686 "rpc2x_act.y"
    {(yyval) = new_node_2(NUMBER_MOI_TU2,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 486:
/* Line 1813 of yacc.c  */
#line 1688 "rpc2x_act.y"
    {(yyval) = new_node_3(NUMBER_MOI_TU2,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 487:
/* Line 1813 of yacc.c  */
#line 1690 "rpc2x_act.y"
    {(yyval) = new_node_2(NUMBER_MOI_TU2,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 488:
/* Line 1813 of yacc.c  */
#line 1694 "rpc2x_act.y"
    {(yyval) = new_node_3(SE_TU2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 489:
/* Line 1813 of yacc.c  */
#line 1696 "rpc2x_act.y"
    {(yyval) = new_node_2(SE_TU2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 490:
/* Line 1813 of yacc.c  */
#line 1700 "rpc2x_act.y"
    {(yyval) = new_node_4(JAI_TAG_TU2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 491:
/* Line 1813 of yacc.c  */
#line 1702 "rpc2x_act.y"
    {(yyval) = new_node_3(JAI_TAG_TU2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 492:
/* Line 1813 of yacc.c  */
#line 1706 "rpc2x_act.y"
    {(yyval) = new_node_3(JAI_TU2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 493:
/* Line 1813 of yacc.c  */
#line 1708 "rpc2x_act.y"
    {(yyval) = new_node_2(JAI_TU2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 494:
/* Line 1813 of yacc.c  */
#line 1712 "rpc2x_act.y"
    {(yyval) = new_node_3(NAHE_TU2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 495:
/* Line 1813 of yacc.c  */
#line 1714 "rpc2x_act.y"
    {(yyval) = new_node_2(NAHE_TU2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 496:
/* Line 1813 of yacc.c  */
#line 1720 "rpc2x_act.y"
    {(yyval) = new_node_4(ABSTRACTION,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 497:
/* Line 1813 of yacc.c  */
#line 1722 "rpc2x_act.y"
    {(yyval) = new_node_3(ABSTRACTION,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 498:
/* Line 1813 of yacc.c  */
#line 1724 "rpc2x_act.y"
    {(yyval) = new_node_3(ABSTRACTION,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(717,KEI));}
    break;

  case 499:
/* Line 1813 of yacc.c  */
#line 1728 "rpc2x_act.y"
    {(yyval) = new_node_3(NU_NAI_SEQ,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 500:
/* Line 1813 of yacc.c  */
#line 1730 "rpc2x_act.y"
    {(yyval) = new_node_2(NU_NAI_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 501:
/* Line 1813 of yacc.c  */
#line 1732 "rpc2x_act.y"
    {(yyval) = new_node_2(NU_NAI_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 502:
/* Line 1813 of yacc.c  */
#line 1734 "rpc2x_act.y"
    {(yyval) = new_node_1(NU_NAI_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 503:
/* Line 1813 of yacc.c  */
#line 1736 "rpc2x_act.y"
    {(yyval) = new_node_6(NU_NAI_SEQ,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 504:
/* Line 1813 of yacc.c  */
#line 1738 "rpc2x_act.y"
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 505:
/* Line 1813 of yacc.c  */
#line 1740 "rpc2x_act.y"
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 506:
/* Line 1813 of yacc.c  */
#line 1742 "rpc2x_act.y"
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 507:
/* Line 1813 of yacc.c  */
#line 1744 "rpc2x_act.y"
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 508:
/* Line 1813 of yacc.c  */
#line 1746 "rpc2x_act.y"
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 509:
/* Line 1813 of yacc.c  */
#line 1748 "rpc2x_act.y"
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 510:
/* Line 1813 of yacc.c  */
#line 1750 "rpc2x_act.y"
    {(yyval) = new_node_3(NU_NAI_SEQ,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 511:
/* Line 1813 of yacc.c  */
#line 1752 "rpc2x_act.y"
    {(yyval) = new_node_6(NU_NAI_SEQ,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 512:
/* Line 1813 of yacc.c  */
#line 1754 "rpc2x_act.y"
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 513:
/* Line 1813 of yacc.c  */
#line 1756 "rpc2x_act.y"
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 514:
/* Line 1813 of yacc.c  */
#line 1758 "rpc2x_act.y"
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 515:
/* Line 1813 of yacc.c  */
#line 1760 "rpc2x_act.y"
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 516:
/* Line 1813 of yacc.c  */
#line 1762 "rpc2x_act.y"
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 517:
/* Line 1813 of yacc.c  */
#line 1764 "rpc2x_act.y"
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 518:
/* Line 1813 of yacc.c  */
#line 1766 "rpc2x_act.y"
    {(yyval) = new_node_3(NU_NAI_SEQ,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 519:
/* Line 1813 of yacc.c  */
#line 1773 "rpc2x_act.y"
    {(yyval) = new_node_6(LINKARGS,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 520:
/* Line 1813 of yacc.c  */
#line 1775 "rpc2x_act.y"
    {(yyval) = new_node_5(LINKARGS,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 521:
/* Line 1813 of yacc.c  */
#line 1777 "rpc2x_act.y"
    {(yyval) = new_node_5(LINKARGS,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(137,BEhO));}
    break;

  case 522:
/* Line 1813 of yacc.c  */
#line 1779 "rpc2x_act.y"
    {(yyval) = new_node_5(LINKARGS,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 523:
/* Line 1813 of yacc.c  */
#line 1781 "rpc2x_act.y"
    {(yyval) = new_node_4(LINKARGS,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 524:
/* Line 1813 of yacc.c  */
#line 1783 "rpc2x_act.y"
    {(yyval) = new_node_4(LINKARGS,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(137,BEhO));}
    break;

  case 525:
/* Line 1813 of yacc.c  */
#line 1785 "rpc2x_act.y"
    {(yyval) = new_node_5(LINKARGS,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 526:
/* Line 1813 of yacc.c  */
#line 1787 "rpc2x_act.y"
    {(yyval) = new_node_4(LINKARGS,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 527:
/* Line 1813 of yacc.c  */
#line 1789 "rpc2x_act.y"
    {(yyval) = new_node_4(LINKARGS,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(137,BEhO));}
    break;

  case 528:
/* Line 1813 of yacc.c  */
#line 1791 "rpc2x_act.y"
    {(yyval) = new_node_4(LINKARGS,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 529:
/* Line 1813 of yacc.c  */
#line 1793 "rpc2x_act.y"
    {(yyval) = new_node_3(LINKARGS,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 530:
/* Line 1813 of yacc.c  */
#line 1795 "rpc2x_act.y"
    {(yyval) = new_node_3(LINKARGS,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(137,BEhO));}
    break;

  case 531:
/* Line 1813 of yacc.c  */
#line 1801 "rpc2x_act.y"
    {(yyval) = new_node_4(LINKS,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 532:
/* Line 1813 of yacc.c  */
#line 1803 "rpc2x_act.y"
    {(yyval) = new_node_3(LINKS,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 533:
/* Line 1813 of yacc.c  */
#line 1805 "rpc2x_act.y"
    {(yyval) = new_node_3(LINKS,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 534:
/* Line 1813 of yacc.c  */
#line 1807 "rpc2x_act.y"
    {(yyval) = new_node_2(LINKS,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 535:
/* Line 1813 of yacc.c  */
#line 1813 "rpc2x_act.y"
    {(yyval) = new_node_3(QUANTIFIER,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 536:
/* Line 1813 of yacc.c  */
#line 1815 "rpc2x_act.y"
    {(yyval) = new_node_2(QUANTIFIER,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 537:
/* Line 1813 of yacc.c  */
#line 1817 "rpc2x_act.y"
    {(yyval) = new_node_2(QUANTIFIER,(yyvsp[(1) - (1)]),new_elidable(157,BOI));}
    break;

  case 538:
/* Line 1813 of yacc.c  */
#line 1819 "rpc2x_act.y"
    {(yyval) = new_node_5(QUANTIFIER,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 539:
/* Line 1813 of yacc.c  */
#line 1821 "rpc2x_act.y"
    {(yyval) = new_node_4(QUANTIFIER,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 540:
/* Line 1813 of yacc.c  */
#line 1823 "rpc2x_act.y"
    {(yyval) = new_node_4(QUANTIFIER,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1509,VEhO));}
    break;

  case 541:
/* Line 1813 of yacc.c  */
#line 1825 "rpc2x_act.y"
    {(yyval) = new_node_4(QUANTIFIER,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 542:
/* Line 1813 of yacc.c  */
#line 1827 "rpc2x_act.y"
    {(yyval) = new_node_3(QUANTIFIER,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 543:
/* Line 1813 of yacc.c  */
#line 1829 "rpc2x_act.y"
    {(yyval) = new_node_3(QUANTIFIER,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(1509,VEhO));}
    break;

  case 544:
/* Line 1813 of yacc.c  */
#line 1835 "rpc2x_act.y"
    {(yyval) = new_node_1(MEX,(yyvsp[(1) - (1)]));}
    break;

  case 545:
/* Line 1813 of yacc.c  */
#line 1837 "rpc2x_act.y"
    {(yyval) = new_node_1(MEX,(yyvsp[(1) - (1)]));}
    break;

  case 546:
/* Line 1813 of yacc.c  */
#line 1841 "rpc2x_act.y"
    {(yyval) = new_node_3(MEX_RP,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 547:
/* Line 1813 of yacc.c  */
#line 1843 "rpc2x_act.y"
    {(yyval) = new_node_2(MEX_RP,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 548:
/* Line 1813 of yacc.c  */
#line 1847 "rpc2x_act.y"
    {(yyval) = new_node_1(MEX_INFIX,(yyvsp[(1) - (1)]));}
    break;

  case 549:
/* Line 1813 of yacc.c  */
#line 1849 "rpc2x_act.y"
    {(yyval) = new_node_3(MEX_INFIX,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 550:
/* Line 1813 of yacc.c  */
#line 1855 "rpc2x_act.y"
    {(yyval) = new_node_1(MEX_1,(yyvsp[(1) - (1)]));}
    break;

  case 551:
/* Line 1813 of yacc.c  */
#line 1857 "rpc2x_act.y"
    {(yyval) = new_node_5(MEX_1,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 552:
/* Line 1813 of yacc.c  */
#line 1859 "rpc2x_act.y"
    {(yyval) = new_node_4(MEX_1,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 553:
/* Line 1813 of yacc.c  */
#line 1865 "rpc2x_act.y"
    {(yyval) = new_node_1(MEX_2,(yyvsp[(1) - (1)]));}
    break;

  case 554:
/* Line 1813 of yacc.c  */
#line 1867 "rpc2x_act.y"
    {(yyval) = new_node_6(MEX_2,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 555:
/* Line 1813 of yacc.c  */
#line 1869 "rpc2x_act.y"
    {(yyval) = new_node_5(MEX_2,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 556:
/* Line 1813 of yacc.c  */
#line 1871 "rpc2x_act.y"
    {(yyval) = new_node_5(MEX_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(765,KUhE));}
    break;

  case 557:
/* Line 1813 of yacc.c  */
#line 1874 "rpc2x_act.y"
    {(yyval) = new_node_5(MEX_2,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 558:
/* Line 1813 of yacc.c  */
#line 1876 "rpc2x_act.y"
    {(yyval) = new_node_4(MEX_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 559:
/* Line 1813 of yacc.c  */
#line 1878 "rpc2x_act.y"
    {(yyval) = new_node_4(MEX_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(765,KUhE));}
    break;

  case 560:
/* Line 1813 of yacc.c  */
#line 1881 "rpc2x_act.y"
    {(yyval) = new_node_4(MEX_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 561:
/* Line 1813 of yacc.c  */
#line 1883 "rpc2x_act.y"
    {(yyval) = new_node_3(MEX_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 562:
/* Line 1813 of yacc.c  */
#line 1885 "rpc2x_act.y"
    {(yyval) = new_node_3(MEX_2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(765,KUhE));}
    break;

  case 563:
/* Line 1813 of yacc.c  */
#line 1889 "rpc2x_act.y"
    {(yyval) = new_node_1(MEX_2_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 564:
/* Line 1813 of yacc.c  */
#line 1891 "rpc2x_act.y"
    {(yyval) = new_node_2(MEX_2_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 565:
/* Line 1813 of yacc.c  */
#line 1897 "rpc2x_act.y"
    {(yyval) = new_node_3(RP_EXPRESSION,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 566:
/* Line 1813 of yacc.c  */
#line 1899 "rpc2x_act.y"
    {(yyval) = new_node_3(RP_EXPRESSION,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 567:
/* Line 1813 of yacc.c  */
#line 1901 "rpc2x_act.y"
    {(yyval) = new_node_3(RP_EXPRESSION,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 568:
/* Line 1813 of yacc.c  */
#line 1903 "rpc2x_act.y"
    {(yyval) = new_node_3(RP_EXPRESSION,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 569:
/* Line 1813 of yacc.c  */
#line 1913 "rpc2x_act.y"
    {(yyval) = new_node_1(OPERATOR,(yyvsp[(1) - (1)]));}
    break;

  case 570:
/* Line 1813 of yacc.c  */
#line 1915 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERATOR,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 571:
/* Line 1813 of yacc.c  */
#line 1917 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERATOR,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 572:
/* Line 1813 of yacc.c  */
#line 1919 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERATOR,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 573:
/* Line 1813 of yacc.c  */
#line 1921 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERATOR,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 574:
/* Line 1813 of yacc.c  */
#line 1923 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERATOR,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 575:
/* Line 1813 of yacc.c  */
#line 1927 "rpc2x_act.y"
    {(yyval) = new_node_5(KE_OPERATOR,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 576:
/* Line 1813 of yacc.c  */
#line 1929 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_OPERATOR,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 577:
/* Line 1813 of yacc.c  */
#line 1931 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_OPERATOR,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(723,KEhE));}
    break;

  case 578:
/* Line 1813 of yacc.c  */
#line 1933 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_OPERATOR,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 579:
/* Line 1813 of yacc.c  */
#line 1935 "rpc2x_act.y"
    {(yyval) = new_node_3(KE_OPERATOR,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 580:
/* Line 1813 of yacc.c  */
#line 1937 "rpc2x_act.y"
    {(yyval) = new_node_3(KE_OPERATOR,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(723,KEhE));}
    break;

  case 581:
/* Line 1813 of yacc.c  */
#line 1944 "rpc2x_act.y"
    {(yyval) = new_node_1(OPERATOR_1,(yyvsp[(1) - (1)]));}
    break;

  case 582:
/* Line 1813 of yacc.c  */
#line 1946 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERATOR_1,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 583:
/* Line 1813 of yacc.c  */
#line 1948 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERATOR_1,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 584:
/* Line 1813 of yacc.c  */
#line 1955 "rpc2x_act.y"
    {(yyval) = new_node_1(OPERATOR_2,(yyvsp[(1) - (1)]));}
    break;

  case 585:
/* Line 1813 of yacc.c  */
#line 1957 "rpc2x_act.y"
    {(yyval) = new_node_5(OPERATOR_2,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 586:
/* Line 1813 of yacc.c  */
#line 1959 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERATOR_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 587:
/* Line 1813 of yacc.c  */
#line 1961 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERATOR_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(723,KEhE));}
    break;

  case 588:
/* Line 1813 of yacc.c  */
#line 1963 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERATOR_2,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 589:
/* Line 1813 of yacc.c  */
#line 1965 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERATOR_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 590:
/* Line 1813 of yacc.c  */
#line 1967 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERATOR_2,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(723,KEhE));}
    break;

  case 591:
/* Line 1813 of yacc.c  */
#line 1974 "rpc2x_act.y"
    {(yyval) = new_node_3(MEX_OPERATOR,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 592:
/* Line 1813 of yacc.c  */
#line 1976 "rpc2x_act.y"
    {(yyval) = new_node_2(MEX_OPERATOR,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 593:
/* Line 1813 of yacc.c  */
#line 1978 "rpc2x_act.y"
    {(yyval) = new_node_3(MEX_OPERATOR,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 594:
/* Line 1813 of yacc.c  */
#line 1980 "rpc2x_act.y"
    {(yyval) = new_node_2(MEX_OPERATOR,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 595:
/* Line 1813 of yacc.c  */
#line 1982 "rpc2x_act.y"
    {(yyval) = new_node_5(MEX_OPERATOR,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 596:
/* Line 1813 of yacc.c  */
#line 1984 "rpc2x_act.y"
    {(yyval) = new_node_4(MEX_OPERATOR,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 597:
/* Line 1813 of yacc.c  */
#line 1986 "rpc2x_act.y"
    {(yyval) = new_node_4(MEX_OPERATOR,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1412,TEhU));}
    break;

  case 598:
/* Line 1813 of yacc.c  */
#line 1988 "rpc2x_act.y"
    {(yyval) = new_node_4(MEX_OPERATOR,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 599:
/* Line 1813 of yacc.c  */
#line 1990 "rpc2x_act.y"
    {(yyval) = new_node_3(MEX_OPERATOR,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 600:
/* Line 1813 of yacc.c  */
#line 1992 "rpc2x_act.y"
    {(yyval) = new_node_3(MEX_OPERATOR,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(1412,TEhU));}
    break;

  case 601:
/* Line 1813 of yacc.c  */
#line 1994 "rpc2x_act.y"
    {(yyval) = new_node_5(MEX_OPERATOR,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 602:
/* Line 1813 of yacc.c  */
#line 1996 "rpc2x_act.y"
    {(yyval) = new_node_4(MEX_OPERATOR,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 603:
/* Line 1813 of yacc.c  */
#line 1998 "rpc2x_act.y"
    {(yyval) = new_node_4(MEX_OPERATOR,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1412,TEhU));}
    break;

  case 604:
/* Line 1813 of yacc.c  */
#line 2000 "rpc2x_act.y"
    {(yyval) = new_node_4(MEX_OPERATOR,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 605:
/* Line 1813 of yacc.c  */
#line 2002 "rpc2x_act.y"
    {(yyval) = new_node_3(MEX_OPERATOR,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 606:
/* Line 1813 of yacc.c  */
#line 2004 "rpc2x_act.y"
    {(yyval) = new_node_3(MEX_OPERATOR,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(1412,TEhU));}
    break;

  case 607:
/* Line 1813 of yacc.c  */
#line 2006 "rpc2x_act.y"
    {(yyval) = new_node_2(MEX_OPERATOR,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 608:
/* Line 1813 of yacc.c  */
#line 2008 "rpc2x_act.y"
    {(yyval) = new_node_1(MEX_OPERATOR,(yyvsp[(1) - (1)]));}
    break;

  case 609:
/* Line 1813 of yacc.c  */
#line 2014 "rpc2x_act.y"
    {(yyval) = new_node_1(OPERAND,(yyvsp[(1) - (1)]));}
    break;

  case 610:
/* Line 1813 of yacc.c  */
#line 2016 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 611:
/* Line 1813 of yacc.c  */
#line 2020 "rpc2x_act.y"
    {(yyval) = new_node_5(KE_OPERAND,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 612:
/* Line 1813 of yacc.c  */
#line 2022 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_OPERAND,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 613:
/* Line 1813 of yacc.c  */
#line 2024 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_OPERAND,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(723,KEhE));}
    break;

  case 614:
/* Line 1813 of yacc.c  */
#line 2026 "rpc2x_act.y"
    {(yyval) = new_node_4(KE_OPERAND,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 615:
/* Line 1813 of yacc.c  */
#line 2028 "rpc2x_act.y"
    {(yyval) = new_node_3(KE_OPERAND,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 616:
/* Line 1813 of yacc.c  */
#line 2030 "rpc2x_act.y"
    {(yyval) = new_node_3(KE_OPERAND,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(723,KEhE));}
    break;

  case 617:
/* Line 1813 of yacc.c  */
#line 2037 "rpc2x_act.y"
    {(yyval) = new_node_1(OPERAND_1,(yyvsp[(1) - (1)]));}
    break;

  case 618:
/* Line 1813 of yacc.c  */
#line 2039 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_1,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 619:
/* Line 1813 of yacc.c  */
#line 2041 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_1,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 620:
/* Line 1813 of yacc.c  */
#line 2043 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_1,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 621:
/* Line 1813 of yacc.c  */
#line 2045 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_1,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 622:
/* Line 1813 of yacc.c  */
#line 2052 "rpc2x_act.y"
    {(yyval) = new_node_1(OPERAND_2,(yyvsp[(1) - (1)]));}
    break;

  case 623:
/* Line 1813 of yacc.c  */
#line 2054 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_2,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 624:
/* Line 1813 of yacc.c  */
#line 2062 "rpc2x_act.y"
    {(yyval) = new_node_1(OPERAND_3,(yyvsp[(1) - (1)]));}
    break;

  case 625:
/* Line 1813 of yacc.c  */
#line 2065 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 626:
/* Line 1813 of yacc.c  */
#line 2067 "rpc2x_act.y"
    {(yyval) = new_node_2(OPERAND_3,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 627:
/* Line 1813 of yacc.c  */
#line 2069 "rpc2x_act.y"
    {(yyval) = new_node_2(OPERAND_3,(yyvsp[(1) - (1)]),new_elidable(157,BOI));}
    break;

  case 628:
/* Line 1813 of yacc.c  */
#line 2072 "rpc2x_act.y"
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 629:
/* Line 1813 of yacc.c  */
#line 2074 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 630:
/* Line 1813 of yacc.c  */
#line 2076 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1412,TEhU));}
    break;

  case 631:
/* Line 1813 of yacc.c  */
#line 2078 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 632:
/* Line 1813 of yacc.c  */
#line 2080 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 633:
/* Line 1813 of yacc.c  */
#line 2082 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(1412,TEhU));}
    break;

  case 634:
/* Line 1813 of yacc.c  */
#line 2085 "rpc2x_act.y"
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 635:
/* Line 1813 of yacc.c  */
#line 2087 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 636:
/* Line 1813 of yacc.c  */
#line 2089 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1412,TEhU));}
    break;

  case 637:
/* Line 1813 of yacc.c  */
#line 2091 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 638:
/* Line 1813 of yacc.c  */
#line 2093 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 639:
/* Line 1813 of yacc.c  */
#line 2095 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(1412,TEhU));}
    break;

  case 640:
/* Line 1813 of yacc.c  */
#line 2098 "rpc2x_act.y"
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 641:
/* Line 1813 of yacc.c  */
#line 2100 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 642:
/* Line 1813 of yacc.c  */
#line 2102 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1412,TEhU));}
    break;

  case 643:
/* Line 1813 of yacc.c  */
#line 2104 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 644:
/* Line 1813 of yacc.c  */
#line 2106 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 645:
/* Line 1813 of yacc.c  */
#line 2108 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(1412,TEhU));}
    break;

  case 646:
/* Line 1813 of yacc.c  */
#line 2111 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 647:
/* Line 1813 of yacc.c  */
#line 2114 "rpc2x_act.y"
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 648:
/* Line 1813 of yacc.c  */
#line 2116 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 649:
/* Line 1813 of yacc.c  */
#line 2118 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(866,LUhU));}
    break;

  case 650:
/* Line 1813 of yacc.c  */
#line 2120 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 651:
/* Line 1813 of yacc.c  */
#line 2122 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 652:
/* Line 1813 of yacc.c  */
#line 2124 "rpc2x_act.y"
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(866,LUhU));}
    break;

  case 653:
/* Line 1813 of yacc.c  */
#line 2127 "rpc2x_act.y"
    {(yyval) = new_node_6(OPERAND_3,(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]),(yyvsp[(7) - (7)]));}
    break;

  case 654:
/* Line 1813 of yacc.c  */
#line 2129 "rpc2x_act.y"
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 655:
/* Line 1813 of yacc.c  */
#line 2131 "rpc2x_act.y"
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]),new_elidable(866,LUhU));}
    break;

  case 656:
/* Line 1813 of yacc.c  */
#line 2133 "rpc2x_act.y"
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 657:
/* Line 1813 of yacc.c  */
#line 2135 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 658:
/* Line 1813 of yacc.c  */
#line 2137 "rpc2x_act.y"
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(866,LUhU));}
    break;

  case 659:
/* Line 1813 of yacc.c  */
#line 2144 "rpc2x_act.y"
    {(yyval) = new_node_1(NUMBER,(yyvsp[(1) - (1)]));}
    break;

  case 660:
/* Line 1813 of yacc.c  */
#line 2148 "rpc2x_act.y"
    {(yyval) = new_node_1(INNER_NUMBER,(yyvsp[(1) - (1)]));}
    break;

  case 661:
/* Line 1813 of yacc.c  */
#line 2150 "rpc2x_act.y"
    {(yyval) = new_node_2(INNER_NUMBER,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 662:
/* Line 1813 of yacc.c  */
#line 2152 "rpc2x_act.y"
    {(yyval) = new_node_2(INNER_NUMBER,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 663:
/* Line 1813 of yacc.c  */
#line 2159 "rpc2x_act.y"
    {(yyval) = new_node_1(LERFU_STRING,(yyvsp[(1) - (1)]));}
    break;

  case 664:
/* Line 1813 of yacc.c  */
#line 2161 "rpc2x_act.y"
    {(yyval) = new_node_2(LERFU_STRING,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 665:
/* Line 1813 of yacc.c  */
#line 2163 "rpc2x_act.y"
    {(yyval) = new_node_2(LERFU_STRING,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 666:
/* Line 1813 of yacc.c  */
#line 2170 "rpc2x_act.y"
    {(yyval) = new_node_1(LERFU_WORD,(yyvsp[(1) - (1)]));}
    break;

  case 667:
/* Line 1813 of yacc.c  */
#line 2172 "rpc2x_act.y"
    {(yyval) = new_node_1(LERFU_WORD,(yyvsp[(1) - (1)]));}
    break;

  case 668:
/* Line 1813 of yacc.c  */
#line 2174 "rpc2x_act.y"
    {(yyval) = new_node_2(LERFU_WORD,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 669:
/* Line 1813 of yacc.c  */
#line 2176 "rpc2x_act.y"
    {(yyval) = new_node_3(LERFU_WORD,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 670:
/* Line 1813 of yacc.c  */
#line 2182 "rpc2x_act.y"
    {(yyval) = new_node_4(EK,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 671:
/* Line 1813 of yacc.c  */
#line 2184 "rpc2x_act.y"
    {(yyval) = new_node_3(EK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 672:
/* Line 1813 of yacc.c  */
#line 2186 "rpc2x_act.y"
    {(yyval) = new_node_3(EK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 673:
/* Line 1813 of yacc.c  */
#line 2188 "rpc2x_act.y"
    {(yyval) = new_node_2(EK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 674:
/* Line 1813 of yacc.c  */
#line 2190 "rpc2x_act.y"
    {(yyval) = new_node_3(EK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 675:
/* Line 1813 of yacc.c  */
#line 2192 "rpc2x_act.y"
    {(yyval) = new_node_2(EK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 676:
/* Line 1813 of yacc.c  */
#line 2194 "rpc2x_act.y"
    {(yyval) = new_node_2(EK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 677:
/* Line 1813 of yacc.c  */
#line 2196 "rpc2x_act.y"
    {(yyval) = new_node_1(EK,(yyvsp[(2) - (2)]));}
    break;

  case 678:
/* Line 1813 of yacc.c  */
#line 2202 "rpc2x_act.y"
    {(yyval) = new_node_4(GIHEK,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 679:
/* Line 1813 of yacc.c  */
#line 2204 "rpc2x_act.y"
    {(yyval) = new_node_3(GIHEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 680:
/* Line 1813 of yacc.c  */
#line 2206 "rpc2x_act.y"
    {(yyval) = new_node_3(GIHEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 681:
/* Line 1813 of yacc.c  */
#line 2208 "rpc2x_act.y"
    {(yyval) = new_node_2(GIHEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 682:
/* Line 1813 of yacc.c  */
#line 2210 "rpc2x_act.y"
    {(yyval) = new_node_3(GIHEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 683:
/* Line 1813 of yacc.c  */
#line 2212 "rpc2x_act.y"
    {(yyval) = new_node_2(GIHEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 684:
/* Line 1813 of yacc.c  */
#line 2214 "rpc2x_act.y"
    {(yyval) = new_node_2(GIHEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 685:
/* Line 1813 of yacc.c  */
#line 2216 "rpc2x_act.y"
    {(yyval) = new_node_1(GIHEK,(yyvsp[(2) - (2)]));}
    break;

  case 686:
/* Line 1813 of yacc.c  */
#line 2222 "rpc2x_act.y"
    {(yyval) = new_node_4(JEK,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 687:
/* Line 1813 of yacc.c  */
#line 2224 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 688:
/* Line 1813 of yacc.c  */
#line 2226 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 689:
/* Line 1813 of yacc.c  */
#line 2228 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 690:
/* Line 1813 of yacc.c  */
#line 2230 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 691:
/* Line 1813 of yacc.c  */
#line 2232 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 692:
/* Line 1813 of yacc.c  */
#line 2234 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 693:
/* Line 1813 of yacc.c  */
#line 2236 "rpc2x_act.y"
    {(yyval) = new_node_1(JEK,(yyvsp[(2) - (3)]));}
    break;

  case 694:
/* Line 1813 of yacc.c  */
#line 2240 "rpc2x_act.y"
    {(yyval) = new_node_4(JEK_OPT_KE,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 695:
/* Line 1813 of yacc.c  */
#line 2242 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 696:
/* Line 1813 of yacc.c  */
#line 2244 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 697:
/* Line 1813 of yacc.c  */
#line 2246 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 698:
/* Line 1813 of yacc.c  */
#line 2248 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 699:
/* Line 1813 of yacc.c  */
#line 2250 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 700:
/* Line 1813 of yacc.c  */
#line 2252 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 701:
/* Line 1813 of yacc.c  */
#line 2254 "rpc2x_act.y"
    {(yyval) = new_node_1(JEK_OPT_KE,(yyvsp[(2) - (3)]));}
    break;

  case 702:
/* Line 1813 of yacc.c  */
#line 2256 "rpc2x_act.y"
    {(yyval) = new_node_4(JEK_OPT_KE,(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 703:
/* Line 1813 of yacc.c  */
#line 2258 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 704:
/* Line 1813 of yacc.c  */
#line 2260 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 705:
/* Line 1813 of yacc.c  */
#line 2262 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 706:
/* Line 1813 of yacc.c  */
#line 2264 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 707:
/* Line 1813 of yacc.c  */
#line 2266 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 708:
/* Line 1813 of yacc.c  */
#line 2268 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 709:
/* Line 1813 of yacc.c  */
#line 2270 "rpc2x_act.y"
    {(yyval) = new_node_1(JEK_OPT_KE,(yyvsp[(3) - (4)]));}
    break;

  case 710:
/* Line 1813 of yacc.c  */
#line 2274 "rpc2x_act.y"
    {(yyval) = new_node_4(JEK_OPT_KEBO,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 711:
/* Line 1813 of yacc.c  */
#line 2276 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 712:
/* Line 1813 of yacc.c  */
#line 2278 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 713:
/* Line 1813 of yacc.c  */
#line 2280 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 714:
/* Line 1813 of yacc.c  */
#line 2282 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 715:
/* Line 1813 of yacc.c  */
#line 2284 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 716:
/* Line 1813 of yacc.c  */
#line 2286 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 717:
/* Line 1813 of yacc.c  */
#line 2288 "rpc2x_act.y"
    {(yyval) = new_node_1(JEK_OPT_KEBO,(yyvsp[(2) - (3)]));}
    break;

  case 718:
/* Line 1813 of yacc.c  */
#line 2290 "rpc2x_act.y"
    {(yyval) = new_node_4(JEK_OPT_KEBO,(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 719:
/* Line 1813 of yacc.c  */
#line 2292 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 720:
/* Line 1813 of yacc.c  */
#line 2294 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 721:
/* Line 1813 of yacc.c  */
#line 2296 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 722:
/* Line 1813 of yacc.c  */
#line 2298 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 723:
/* Line 1813 of yacc.c  */
#line 2300 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 724:
/* Line 1813 of yacc.c  */
#line 2302 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 725:
/* Line 1813 of yacc.c  */
#line 2304 "rpc2x_act.y"
    {(yyval) = new_node_1(JEK_OPT_KEBO,(yyvsp[(3) - (4)]));}
    break;

  case 726:
/* Line 1813 of yacc.c  */
#line 2306 "rpc2x_act.y"
    {(yyval) = new_node_4(JEK_OPT_KEBO,(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 727:
/* Line 1813 of yacc.c  */
#line 2308 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 728:
/* Line 1813 of yacc.c  */
#line 2310 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 729:
/* Line 1813 of yacc.c  */
#line 2312 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 730:
/* Line 1813 of yacc.c  */
#line 2314 "rpc2x_act.y"
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 731:
/* Line 1813 of yacc.c  */
#line 2316 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 732:
/* Line 1813 of yacc.c  */
#line 2318 "rpc2x_act.y"
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 733:
/* Line 1813 of yacc.c  */
#line 2320 "rpc2x_act.y"
    {(yyval) = new_node_1(JEK_OPT_KEBO,(yyvsp[(3) - (4)]));}
    break;

  case 734:
/* Line 1813 of yacc.c  */
#line 2326 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 735:
/* Line 1813 of yacc.c  */
#line 2328 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 736:
/* Line 1813 of yacc.c  */
#line 2330 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 737:
/* Line 1813 of yacc.c  */
#line 2332 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK,(yyvsp[(2) - (3)]));}
    break;

  case 738:
/* Line 1813 of yacc.c  */
#line 2334 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 739:
/* Line 1813 of yacc.c  */
#line 2336 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 740:
/* Line 1813 of yacc.c  */
#line 2338 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 741:
/* Line 1813 of yacc.c  */
#line 2340 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK,(yyvsp[(2) - (3)]));}
    break;

  case 742:
/* Line 1813 of yacc.c  */
#line 2342 "rpc2x_act.y"
    {(yyval) = new_node_5(JOIK,(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 743:
/* Line 1813 of yacc.c  */
#line 2344 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 744:
/* Line 1813 of yacc.c  */
#line 2346 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 745:
/* Line 1813 of yacc.c  */
#line 2348 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 746:
/* Line 1813 of yacc.c  */
#line 2354 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 747:
/* Line 1813 of yacc.c  */
#line 2356 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 748:
/* Line 1813 of yacc.c  */
#line 2358 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 749:
/* Line 1813 of yacc.c  */
#line 2360 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_OPT_KE,(yyvsp[(2) - (3)]));}
    break;

  case 750:
/* Line 1813 of yacc.c  */
#line 2362 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 751:
/* Line 1813 of yacc.c  */
#line 2364 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 752:
/* Line 1813 of yacc.c  */
#line 2366 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 753:
/* Line 1813 of yacc.c  */
#line 2368 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_OPT_KE,(yyvsp[(2) - (3)]));}
    break;

  case 754:
/* Line 1813 of yacc.c  */
#line 2370 "rpc2x_act.y"
    {(yyval) = new_node_5(JOIK_OPT_KE,(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 755:
/* Line 1813 of yacc.c  */
#line 2372 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_OPT_KE,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 756:
/* Line 1813 of yacc.c  */
#line 2374 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_OPT_KE,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 757:
/* Line 1813 of yacc.c  */
#line 2376 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 758:
/* Line 1813 of yacc.c  */
#line 2378 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 759:
/* Line 1813 of yacc.c  */
#line 2380 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 760:
/* Line 1813 of yacc.c  */
#line 2382 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 761:
/* Line 1813 of yacc.c  */
#line 2384 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_OPT_KE,(yyvsp[(3) - (4)]));}
    break;

  case 762:
/* Line 1813 of yacc.c  */
#line 2386 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 763:
/* Line 1813 of yacc.c  */
#line 2388 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 764:
/* Line 1813 of yacc.c  */
#line 2390 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 765:
/* Line 1813 of yacc.c  */
#line 2392 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_OPT_KE,(yyvsp[(3) - (4)]));}
    break;

  case 766:
/* Line 1813 of yacc.c  */
#line 2394 "rpc2x_act.y"
    {(yyval) = new_node_5(JOIK_OPT_KE,(yyvsp[(3) - (8)]),(yyvsp[(4) - (8)]),(yyvsp[(5) - (8)]),(yyvsp[(6) - (8)]),(yyvsp[(7) - (8)]));}
    break;

  case 767:
/* Line 1813 of yacc.c  */
#line 2396 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_OPT_KE,(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 768:
/* Line 1813 of yacc.c  */
#line 2398 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_OPT_KE,(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 769:
/* Line 1813 of yacc.c  */
#line 2400 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 770:
/* Line 1813 of yacc.c  */
#line 2404 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 771:
/* Line 1813 of yacc.c  */
#line 2406 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 772:
/* Line 1813 of yacc.c  */
#line 2408 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 773:
/* Line 1813 of yacc.c  */
#line 2410 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[(2) - (3)]));}
    break;

  case 774:
/* Line 1813 of yacc.c  */
#line 2412 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 775:
/* Line 1813 of yacc.c  */
#line 2414 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 776:
/* Line 1813 of yacc.c  */
#line 2416 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 777:
/* Line 1813 of yacc.c  */
#line 2418 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[(2) - (3)]));}
    break;

  case 778:
/* Line 1813 of yacc.c  */
#line 2420 "rpc2x_act.y"
    {(yyval) = new_node_5(JOIK_OPT_KEBO,(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 779:
/* Line 1813 of yacc.c  */
#line 2422 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 780:
/* Line 1813 of yacc.c  */
#line 2424 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 781:
/* Line 1813 of yacc.c  */
#line 2426 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 782:
/* Line 1813 of yacc.c  */
#line 2428 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 783:
/* Line 1813 of yacc.c  */
#line 2430 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 784:
/* Line 1813 of yacc.c  */
#line 2432 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 785:
/* Line 1813 of yacc.c  */
#line 2434 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[(3) - (4)]));}
    break;

  case 786:
/* Line 1813 of yacc.c  */
#line 2436 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 787:
/* Line 1813 of yacc.c  */
#line 2438 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 788:
/* Line 1813 of yacc.c  */
#line 2440 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 789:
/* Line 1813 of yacc.c  */
#line 2442 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[(3) - (4)]));}
    break;

  case 790:
/* Line 1813 of yacc.c  */
#line 2444 "rpc2x_act.y"
    {(yyval) = new_node_5(JOIK_OPT_KEBO,(yyvsp[(3) - (8)]),(yyvsp[(4) - (8)]),(yyvsp[(5) - (8)]),(yyvsp[(6) - (8)]),(yyvsp[(7) - (8)]));}
    break;

  case 791:
/* Line 1813 of yacc.c  */
#line 2446 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 792:
/* Line 1813 of yacc.c  */
#line 2448 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 793:
/* Line 1813 of yacc.c  */
#line 2450 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 794:
/* Line 1813 of yacc.c  */
#line 2452 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 795:
/* Line 1813 of yacc.c  */
#line 2454 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 796:
/* Line 1813 of yacc.c  */
#line 2456 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 797:
/* Line 1813 of yacc.c  */
#line 2458 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[(3) - (4)]));}
    break;

  case 798:
/* Line 1813 of yacc.c  */
#line 2460 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 799:
/* Line 1813 of yacc.c  */
#line 2462 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 800:
/* Line 1813 of yacc.c  */
#line 2464 "rpc2x_act.y"
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 801:
/* Line 1813 of yacc.c  */
#line 2466 "rpc2x_act.y"
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[(3) - (4)]));}
    break;

  case 802:
/* Line 1813 of yacc.c  */
#line 2468 "rpc2x_act.y"
    {(yyval) = new_node_5(JOIK_OPT_KEBO,(yyvsp[(3) - (8)]),(yyvsp[(4) - (8)]),(yyvsp[(5) - (8)]),(yyvsp[(6) - (8)]),(yyvsp[(7) - (8)]));}
    break;

  case 803:
/* Line 1813 of yacc.c  */
#line 2470 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 804:
/* Line 1813 of yacc.c  */
#line 2472 "rpc2x_act.y"
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 805:
/* Line 1813 of yacc.c  */
#line 2474 "rpc2x_act.y"
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 806:
/* Line 1813 of yacc.c  */
#line 2485 "rpc2x_act.y"
    {(yyval) = new_node_4(GEK,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 807:
/* Line 1813 of yacc.c  */
#line 2487 "rpc2x_act.y"
    {(yyval) = new_node_3(GEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 808:
/* Line 1813 of yacc.c  */
#line 2489 "rpc2x_act.y"
    {(yyval) = new_node_3(GEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 809:
/* Line 1813 of yacc.c  */
#line 2491 "rpc2x_act.y"
    {(yyval) = new_node_2(GEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 810:
/* Line 1813 of yacc.c  */
#line 2493 "rpc2x_act.y"
    {(yyval) = new_node_3(GEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 811:
/* Line 1813 of yacc.c  */
#line 2495 "rpc2x_act.y"
    {(yyval) = new_node_2(GEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 812:
/* Line 1813 of yacc.c  */
#line 2497 "rpc2x_act.y"
    {(yyval) = new_node_2(GEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 813:
/* Line 1813 of yacc.c  */
#line 2499 "rpc2x_act.y"
    {(yyval) = new_node_1(GEK,(yyvsp[(2) - (2)]));}
    break;

  case 814:
/* Line 1813 of yacc.c  */
#line 2501 "rpc2x_act.y"
    {(yyval) = new_node_3(GEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 815:
/* Line 1813 of yacc.c  */
#line 2503 "rpc2x_act.y"
    {(yyval) = new_node_2(GEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 816:
/* Line 1813 of yacc.c  */
#line 2505 "rpc2x_act.y"
    {(yyval) = new_node_2(GEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 817:
/* Line 1813 of yacc.c  */
#line 2511 "rpc2x_act.y"
    {(yyval) = new_node_4(GUHEK,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 818:
/* Line 1813 of yacc.c  */
#line 2513 "rpc2x_act.y"
    {(yyval) = new_node_3(GUHEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 819:
/* Line 1813 of yacc.c  */
#line 2515 "rpc2x_act.y"
    {(yyval) = new_node_3(GUHEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 820:
/* Line 1813 of yacc.c  */
#line 2517 "rpc2x_act.y"
    {(yyval) = new_node_2(GUHEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 821:
/* Line 1813 of yacc.c  */
#line 2519 "rpc2x_act.y"
    {(yyval) = new_node_3(GUHEK,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 822:
/* Line 1813 of yacc.c  */
#line 2521 "rpc2x_act.y"
    {(yyval) = new_node_2(GUHEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 823:
/* Line 1813 of yacc.c  */
#line 2523 "rpc2x_act.y"
    {(yyval) = new_node_2(GUHEK,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 824:
/* Line 1813 of yacc.c  */
#line 2525 "rpc2x_act.y"
    {(yyval) = new_node_1(GUHEK,(yyvsp[(2) - (2)]));}
    break;

  case 825:
/* Line 1813 of yacc.c  */
#line 2531 "rpc2x_act.y"
    {(yyval) = new_node_3(GIK,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 826:
/* Line 1813 of yacc.c  */
#line 2533 "rpc2x_act.y"
    {(yyval) = new_node_2(GIK,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 827:
/* Line 1813 of yacc.c  */
#line 2535 "rpc2x_act.y"
    {(yyval) = new_node_2(GIK,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 828:
/* Line 1813 of yacc.c  */
#line 2537 "rpc2x_act.y"
    {(yyval) = new_node_1(GIK,(yyvsp[(1) - (1)]));}
    break;

  case 829:
/* Line 1813 of yacc.c  */
#line 2544 "rpc2x_act.y"
    {(yyval) = new_node_1(TAG,(yyvsp[(1) - (1)]));}
    break;

  case 830:
/* Line 1813 of yacc.c  */
#line 2546 "rpc2x_act.y"
    {(yyval) = new_node_1(TAG,(yyvsp[(1) - (1)]));}
    break;

  case 831:
/* Line 1813 of yacc.c  */
#line 2551 "rpc2x_act.y"
    {(yyval) = new_node_1(CTAG,(yyvsp[(1) - (1)]));}
    break;

  case 832:
/* Line 1813 of yacc.c  */
#line 2553 "rpc2x_act.y"
    {(yyval) = new_node_4(CTAG,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 833:
/* Line 1813 of yacc.c  */
#line 2555 "rpc2x_act.y"
    {(yyval) = new_node_3(CTAG,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 834:
/* Line 1813 of yacc.c  */
#line 2557 "rpc2x_act.y"
    {(yyval) = new_node_4(CTAG,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 835:
/* Line 1813 of yacc.c  */
#line 2559 "rpc2x_act.y"
    {(yyval) = new_node_3(CTAG,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 836:
/* Line 1813 of yacc.c  */
#line 2561 "rpc2x_act.y"
    {(yyval) = new_node_4(CTAG,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 837:
/* Line 1813 of yacc.c  */
#line 2563 "rpc2x_act.y"
    {(yyval) = new_node_3(CTAG,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 838:
/* Line 1813 of yacc.c  */
#line 2565 "rpc2x_act.y"
    {(yyval) = new_node_4(CTAG,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 839:
/* Line 1813 of yacc.c  */
#line 2567 "rpc2x_act.y"
    {(yyval) = new_node_3(CTAG,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 840:
/* Line 1813 of yacc.c  */
#line 2569 "rpc2x_act.y"
    {(yyval) = new_node_4(CTAG,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 841:
/* Line 1813 of yacc.c  */
#line 2571 "rpc2x_act.y"
    {(yyval) = new_node_3(CTAG,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 842:
/* Line 1813 of yacc.c  */
#line 2573 "rpc2x_act.y"
    {(yyval) = new_node_4(CTAG,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 843:
/* Line 1813 of yacc.c  */
#line 2575 "rpc2x_act.y"
    {(yyval) = new_node_3(CTAG,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 844:
/* Line 1813 of yacc.c  */
#line 2580 "rpc2x_act.y"
    {(yyval) = new_node_5(COMPLEX_TENSE_MODAL,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 845:
/* Line 1813 of yacc.c  */
#line 2582 "rpc2x_act.y"
    {(yyval) = new_node_4(COMPLEX_TENSE_MODAL,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 846:
/* Line 1813 of yacc.c  */
#line 2584 "rpc2x_act.y"
    {(yyval) = new_node_4(COMPLEX_TENSE_MODAL,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(432,FEhU));}
    break;

  case 847:
/* Line 1813 of yacc.c  */
#line 2586 "rpc2x_act.y"
    {(yyval) = new_node_4(COMPLEX_TENSE_MODAL,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 848:
/* Line 1813 of yacc.c  */
#line 2588 "rpc2x_act.y"
    {(yyval) = new_node_3(COMPLEX_TENSE_MODAL,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 849:
/* Line 1813 of yacc.c  */
#line 2590 "rpc2x_act.y"
    {(yyval) = new_node_3(COMPLEX_TENSE_MODAL,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(432,FEhU));}
    break;

  case 850:
/* Line 1813 of yacc.c  */
#line 2592 "rpc2x_act.y"
    {(yyval) = new_node_2(COMPLEX_TENSE_MODAL,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 851:
/* Line 1813 of yacc.c  */
#line 2599 "rpc2x_act.y"
    {(yyval) = new_node_1(STAG,(yyvsp[(1) - (1)]));}
    break;

  case 852:
/* Line 1813 of yacc.c  */
#line 2601 "rpc2x_act.y"
    {(yyval) = new_node_3(STAG,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 853:
/* Line 1813 of yacc.c  */
#line 2603 "rpc2x_act.y"
    {(yyval) = new_node_3(STAG,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 854:
/* Line 1813 of yacc.c  */
#line 2612 "rpc2x_act.y"
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 855:
/* Line 1813 of yacc.c  */
#line 2614 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 856:
/* Line 1813 of yacc.c  */
#line 2616 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 857:
/* Line 1813 of yacc.c  */
#line 2618 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 858:
/* Line 1813 of yacc.c  */
#line 2620 "rpc2x_act.y"
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 859:
/* Line 1813 of yacc.c  */
#line 2622 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 860:
/* Line 1813 of yacc.c  */
#line 2624 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 861:
/* Line 1813 of yacc.c  */
#line 2626 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 862:
/* Line 1813 of yacc.c  */
#line 2628 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 863:
/* Line 1813 of yacc.c  */
#line 2630 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 864:
/* Line 1813 of yacc.c  */
#line 2632 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 865:
/* Line 1813 of yacc.c  */
#line 2634 "rpc2x_act.y"
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (3)]));}
    break;

  case 866:
/* Line 1813 of yacc.c  */
#line 2636 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 867:
/* Line 1813 of yacc.c  */
#line 2638 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 868:
/* Line 1813 of yacc.c  */
#line 2640 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 869:
/* Line 1813 of yacc.c  */
#line 2642 "rpc2x_act.y"
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (3)]));}
    break;

  case 870:
/* Line 1813 of yacc.c  */
#line 2645 "rpc2x_act.y"
    {(yyval) = new_node_5(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 871:
/* Line 1813 of yacc.c  */
#line 2647 "rpc2x_act.y"
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 872:
/* Line 1813 of yacc.c  */
#line 2649 "rpc2x_act.y"
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 873:
/* Line 1813 of yacc.c  */
#line 2651 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 874:
/* Line 1813 of yacc.c  */
#line 2653 "rpc2x_act.y"
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 875:
/* Line 1813 of yacc.c  */
#line 2655 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 876:
/* Line 1813 of yacc.c  */
#line 2657 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 877:
/* Line 1813 of yacc.c  */
#line 2659 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 878:
/* Line 1813 of yacc.c  */
#line 2661 "rpc2x_act.y"
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 879:
/* Line 1813 of yacc.c  */
#line 2663 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 880:
/* Line 1813 of yacc.c  */
#line 2665 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 881:
/* Line 1813 of yacc.c  */
#line 2667 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 882:
/* Line 1813 of yacc.c  */
#line 2669 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 883:
/* Line 1813 of yacc.c  */
#line 2671 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 884:
/* Line 1813 of yacc.c  */
#line 2673 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 885:
/* Line 1813 of yacc.c  */
#line 2675 "rpc2x_act.y"
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (3)]));}
    break;

  case 886:
/* Line 1813 of yacc.c  */
#line 2678 "rpc2x_act.y"
    {(yyval) = new_node_5(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]));}
    break;

  case 887:
/* Line 1813 of yacc.c  */
#line 2680 "rpc2x_act.y"
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 888:
/* Line 1813 of yacc.c  */
#line 2682 "rpc2x_act.y"
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 889:
/* Line 1813 of yacc.c  */
#line 2684 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 890:
/* Line 1813 of yacc.c  */
#line 2686 "rpc2x_act.y"
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 891:
/* Line 1813 of yacc.c  */
#line 2688 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 892:
/* Line 1813 of yacc.c  */
#line 2690 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 893:
/* Line 1813 of yacc.c  */
#line 2692 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 894:
/* Line 1813 of yacc.c  */
#line 2694 "rpc2x_act.y"
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]));}
    break;

  case 895:
/* Line 1813 of yacc.c  */
#line 2696 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 896:
/* Line 1813 of yacc.c  */
#line 2698 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 897:
/* Line 1813 of yacc.c  */
#line 2700 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 898:
/* Line 1813 of yacc.c  */
#line 2702 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 899:
/* Line 1813 of yacc.c  */
#line 2704 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 900:
/* Line 1813 of yacc.c  */
#line 2706 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 901:
/* Line 1813 of yacc.c  */
#line 2708 "rpc2x_act.y"
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (3)]));}
    break;

  case 902:
/* Line 1813 of yacc.c  */
#line 2711 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 903:
/* Line 1813 of yacc.c  */
#line 2713 "rpc2x_act.y"
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (3)]));}
    break;

  case 904:
/* Line 1813 of yacc.c  */
#line 2716 "rpc2x_act.y"
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]));}
    break;

  case 905:
/* Line 1813 of yacc.c  */
#line 2718 "rpc2x_act.y"
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]));}
    break;

  case 906:
/* Line 1813 of yacc.c  */
#line 2721 "rpc2x_act.y"
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (3)]));}
    break;

  case 907:
/* Line 1813 of yacc.c  */
#line 2723 "rpc2x_act.y"
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[(2) - (3)]));}
    break;

  case 908:
/* Line 1813 of yacc.c  */
#line 2730 "rpc2x_act.y"
    {(yyval) = new_node_2(SE_BAI,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 909:
/* Line 1813 of yacc.c  */
#line 2734 "rpc2x_act.y"
    {(yyval) = new_node_1(BAI1,(yyvsp[(1) - (1)]));}
    break;

  case 910:
/* Line 1813 of yacc.c  */
#line 2741 "rpc2x_act.y"
    {(yyval) = new_node_4(TIME,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 911:
/* Line 1813 of yacc.c  */
#line 2743 "rpc2x_act.y"
    {(yyval) = new_node_3(TIME,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 912:
/* Line 1813 of yacc.c  */
#line 2746 "rpc2x_act.y"
    {(yyval) = new_node_3(TIME,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 913:
/* Line 1813 of yacc.c  */
#line 2748 "rpc2x_act.y"
    {(yyval) = new_node_2(TIME,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 914:
/* Line 1813 of yacc.c  */
#line 2751 "rpc2x_act.y"
    {(yyval) = new_node_3(TIME,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 915:
/* Line 1813 of yacc.c  */
#line 2753 "rpc2x_act.y"
    {(yyval) = new_node_2(TIME,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 916:
/* Line 1813 of yacc.c  */
#line 2756 "rpc2x_act.y"
    {(yyval) = new_node_2(TIME,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 917:
/* Line 1813 of yacc.c  */
#line 2758 "rpc2x_act.y"
    {(yyval) = new_node_1(TIME,(yyvsp[(1) - (1)]));}
    break;

  case 918:
/* Line 1813 of yacc.c  */
#line 2761 "rpc2x_act.y"
    {(yyval) = new_node_3(TIME,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 919:
/* Line 1813 of yacc.c  */
#line 2763 "rpc2x_act.y"
    {(yyval) = new_node_2(TIME,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 920:
/* Line 1813 of yacc.c  */
#line 2766 "rpc2x_act.y"
    {(yyval) = new_node_2(TIME,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 921:
/* Line 1813 of yacc.c  */
#line 2768 "rpc2x_act.y"
    {(yyval) = new_node_1(TIME,(yyvsp[(1) - (1)]));}
    break;

  case 922:
/* Line 1813 of yacc.c  */
#line 2771 "rpc2x_act.y"
    {(yyval) = new_node_2(TIME,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 923:
/* Line 1813 of yacc.c  */
#line 2773 "rpc2x_act.y"
    {(yyval) = new_node_1(TIME,(yyvsp[(1) - (1)]));}
    break;

  case 924:
/* Line 1813 of yacc.c  */
#line 2776 "rpc2x_act.y"
    {(yyval) = new_node_1(TIME,(yyvsp[(1) - (1)]));}
    break;

  case 925:
/* Line 1813 of yacc.c  */
#line 2781 "rpc2x_act.y"
    {(yyval) = new_node_3(ZEHA_PU_NAI,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 926:
/* Line 1813 of yacc.c  */
#line 2783 "rpc2x_act.y"
    {(yyval) = new_node_2(ZEHA_PU_NAI,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 927:
/* Line 1813 of yacc.c  */
#line 2785 "rpc2x_act.y"
    {(yyval) = new_node_1(ZEHA_PU_NAI,(yyvsp[(1) - (1)]));}
    break;

  case 928:
/* Line 1813 of yacc.c  */
#line 2791 "rpc2x_act.y"
    {(yyval) = new_node_3(TIME_OFFSET,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 929:
/* Line 1813 of yacc.c  */
#line 2793 "rpc2x_act.y"
    {(yyval) = new_node_2(TIME_OFFSET,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 930:
/* Line 1813 of yacc.c  */
#line 2795 "rpc2x_act.y"
    {(yyval) = new_node_2(TIME_OFFSET,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 931:
/* Line 1813 of yacc.c  */
#line 2797 "rpc2x_act.y"
    {(yyval) = new_node_1(TIME_OFFSET,(yyvsp[(1) - (1)]));}
    break;

  case 932:
/* Line 1813 of yacc.c  */
#line 2801 "rpc2x_act.y"
    {(yyval) = new_node_2(TIME_OFFSET_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 933:
/* Line 1813 of yacc.c  */
#line 2803 "rpc2x_act.y"
    {(yyval) = new_node_1(TIME_OFFSET_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 934:
/* Line 1813 of yacc.c  */
#line 2809 "rpc2x_act.y"
    {(yyval) = new_node_5(SPACE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 935:
/* Line 1813 of yacc.c  */
#line 2811 "rpc2x_act.y"
    {(yyval) = new_node_3(SPACE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 936:
/* Line 1813 of yacc.c  */
#line 2813 "rpc2x_act.y"
    {(yyval) = new_node_4(SPACE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 937:
/* Line 1813 of yacc.c  */
#line 2815 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 938:
/* Line 1813 of yacc.c  */
#line 2818 "rpc2x_act.y"
    {(yyval) = new_node_4(SPACE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 939:
/* Line 1813 of yacc.c  */
#line 2820 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 940:
/* Line 1813 of yacc.c  */
#line 2822 "rpc2x_act.y"
    {(yyval) = new_node_3(SPACE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 941:
/* Line 1813 of yacc.c  */
#line 2824 "rpc2x_act.y"
    {(yyval) = new_node_1(SPACE,(yyvsp[(1) - (1)]));}
    break;

  case 942:
/* Line 1813 of yacc.c  */
#line 2827 "rpc2x_act.y"
    {(yyval) = new_node_4(SPACE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 943:
/* Line 1813 of yacc.c  */
#line 2829 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 944:
/* Line 1813 of yacc.c  */
#line 2831 "rpc2x_act.y"
    {(yyval) = new_node_3(SPACE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 945:
/* Line 1813 of yacc.c  */
#line 2833 "rpc2x_act.y"
    {(yyval) = new_node_1(SPACE,(yyvsp[(1) - (1)]));}
    break;

  case 946:
/* Line 1813 of yacc.c  */
#line 2836 "rpc2x_act.y"
    {(yyval) = new_node_3(SPACE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 947:
/* Line 1813 of yacc.c  */
#line 2838 "rpc2x_act.y"
    {(yyval) = new_node_1(SPACE,(yyvsp[(1) - (1)]));}
    break;

  case 948:
/* Line 1813 of yacc.c  */
#line 2840 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 949:
/* Line 1813 of yacc.c  */
#line 2846 "rpc2x_act.y"
    {(yyval) = new_node_3(SPACE_OFFSET,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 950:
/* Line 1813 of yacc.c  */
#line 2848 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE_OFFSET,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 951:
/* Line 1813 of yacc.c  */
#line 2850 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE_OFFSET,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 952:
/* Line 1813 of yacc.c  */
#line 2852 "rpc2x_act.y"
    {(yyval) = new_node_1(SPACE_OFFSET,(yyvsp[(1) - (1)]));}
    break;

  case 953:
/* Line 1813 of yacc.c  */
#line 2856 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE_OFFSET_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 954:
/* Line 1813 of yacc.c  */
#line 2858 "rpc2x_act.y"
    {(yyval) = new_node_1(SPACE_OFFSET_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 955:
/* Line 1813 of yacc.c  */
#line 2864 "rpc2x_act.y"
    {(yyval) = new_node_5(SPACE_INTERVAL,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 956:
/* Line 1813 of yacc.c  */
#line 2866 "rpc2x_act.y"
    {(yyval) = new_node_4(SPACE_INTERVAL,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 957:
/* Line 1813 of yacc.c  */
#line 2868 "rpc2x_act.y"
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 958:
/* Line 1813 of yacc.c  */
#line 2870 "rpc2x_act.y"
    {(yyval) = new_node_4(SPACE_INTERVAL,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 959:
/* Line 1813 of yacc.c  */
#line 2872 "rpc2x_act.y"
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 960:
/* Line 1813 of yacc.c  */
#line 2874 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE_INTERVAL,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 961:
/* Line 1813 of yacc.c  */
#line 2876 "rpc2x_act.y"
    {(yyval) = new_node_4(SPACE_INTERVAL,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 962:
/* Line 1813 of yacc.c  */
#line 2878 "rpc2x_act.y"
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 963:
/* Line 1813 of yacc.c  */
#line 2880 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE_INTERVAL,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 964:
/* Line 1813 of yacc.c  */
#line 2883 "rpc2x_act.y"
    {(yyval) = new_node_4(SPACE_INTERVAL,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 965:
/* Line 1813 of yacc.c  */
#line 2885 "rpc2x_act.y"
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 966:
/* Line 1813 of yacc.c  */
#line 2887 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE_INTERVAL,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 967:
/* Line 1813 of yacc.c  */
#line 2889 "rpc2x_act.y"
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 968:
/* Line 1813 of yacc.c  */
#line 2891 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE_INTERVAL,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 969:
/* Line 1813 of yacc.c  */
#line 2893 "rpc2x_act.y"
    {(yyval) = new_node_1(SPACE_INTERVAL,(yyvsp[(1) - (1)]));}
    break;

  case 970:
/* Line 1813 of yacc.c  */
#line 2895 "rpc2x_act.y"
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 971:
/* Line 1813 of yacc.c  */
#line 2897 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE_INTERVAL,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 972:
/* Line 1813 of yacc.c  */
#line 2899 "rpc2x_act.y"
    {(yyval) = new_node_1(SPACE_INTERVAL,(yyvsp[(1) - (1)]));}
    break;

  case 973:
/* Line 1813 of yacc.c  */
#line 2902 "rpc2x_act.y"
    {(yyval) = new_node_1(SPACE_INTERVAL,(yyvsp[(1) - (1)]));}
    break;

  case 974:
/* Line 1813 of yacc.c  */
#line 2908 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE_INT_PROPS,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 975:
/* Line 1813 of yacc.c  */
#line 2910 "rpc2x_act.y"
    {(yyval) = new_node_1(SPACE_INT_PROPS,(yyvsp[(1) - (1)]));}
    break;

  case 976:
/* Line 1813 of yacc.c  */
#line 2914 "rpc2x_act.y"
    {(yyval) = new_node_2(SPACE_INT_PROP,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 977:
/* Line 1813 of yacc.c  */
#line 2920 "rpc2x_act.y"
    {(yyval) = new_node_3(INTERVAL_PROPERTY,(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 978:
/* Line 1813 of yacc.c  */
#line 2922 "rpc2x_act.y"
    {(yyval) = new_node_2(INTERVAL_PROPERTY,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 979:
/* Line 1813 of yacc.c  */
#line 2924 "rpc2x_act.y"
    {(yyval) = new_node_2(INTERVAL_PROPERTY,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 980:
/* Line 1813 of yacc.c  */
#line 2926 "rpc2x_act.y"
    {(yyval) = new_node_1(INTERVAL_PROPERTY,(yyvsp[(1) - (1)]));}
    break;

  case 981:
/* Line 1813 of yacc.c  */
#line 2928 "rpc2x_act.y"
    {(yyval) = new_node_2(INTERVAL_PROPERTY,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 982:
/* Line 1813 of yacc.c  */
#line 2930 "rpc2x_act.y"
    {(yyval) = new_node_1(INTERVAL_PROPERTY,(yyvsp[(1) - (1)]));}
    break;

  case 983:
/* Line 1813 of yacc.c  */
#line 2934 "rpc2x_act.y"
    {(yyval) = new_node_2(INTERVAL_PROPERTY_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 984:
/* Line 1813 of yacc.c  */
#line 2936 "rpc2x_act.y"
    {(yyval) = new_node_1(INTERVAL_PROPERTY_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 985:
/* Line 1813 of yacc.c  */
#line 2943 "rpc2x_act.y"
    {(yyval) = new_node_2(FREE_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 986:
/* Line 1813 of yacc.c  */
#line 2945 "rpc2x_act.y"
    {(yyval) = new_node_1(FREE_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 987:
/* Line 1813 of yacc.c  */
#line 2949 "rpc2x_act.y"
    {(yyval) = new_node_1(FREE,(yyvsp[(1) - (1)]));}
    break;

  case 988:
/* Line 1813 of yacc.c  */
#line 2951 "rpc2x_act.y"
    {(yyval) = new_node_1(FREE,(yyvsp[(1) - (1)]));}
    break;

  case 989:
/* Line 1813 of yacc.c  */
#line 2953 "rpc2x_act.y"
    {(yyval) = new_node_1(FREE,(yyvsp[(1) - (1)]));}
    break;

  case 990:
/* Line 1813 of yacc.c  */
#line 2955 "rpc2x_act.y"
    {(yyval) = new_node_1(FREE,(yyvsp[(1) - (1)]));}
    break;

  case 991:
/* Line 1813 of yacc.c  */
#line 2957 "rpc2x_act.y"
    {(yyval) = new_node_1(FREE,(yyvsp[(1) - (1)]));}
    break;

  case 992:
/* Line 1813 of yacc.c  */
#line 2959 "rpc2x_act.y"
    {(yyval) = new_node_1(FREE,(yyvsp[(1) - (1)]));}
    break;

  case 993:
/* Line 1813 of yacc.c  */
#line 2964 "rpc2x_act.y"
    {(yyval) = new_node_7(METALINGUISTIC,(yyvsp[(1) - (7)]),(yyvsp[(2) - (7)]),(yyvsp[(3) - (7)]),(yyvsp[(4) - (7)]),(yyvsp[(5) - (7)]),(yyvsp[(6) - (7)]),(yyvsp[(7) - (7)]));}
    break;

  case 994:
/* Line 1813 of yacc.c  */
#line 2966 "rpc2x_act.y"
    {(yyval) = new_node_7(METALINGUISTIC,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]),new_elidable(1314,SEhU));}
    break;

  case 995:
/* Line 1813 of yacc.c  */
#line 2968 "rpc2x_act.y"
    {(yyval) = new_node_6(METALINGUISTIC,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 996:
/* Line 1813 of yacc.c  */
#line 2970 "rpc2x_act.y"
    {(yyval) = new_node_6(METALINGUISTIC,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]),new_elidable(1314,SEhU));}
    break;

  case 997:
/* Line 1813 of yacc.c  */
#line 2972 "rpc2x_act.y"
    {(yyval) = new_node_5(METALINGUISTIC,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 998:
/* Line 1813 of yacc.c  */
#line 2974 "rpc2x_act.y"
    {(yyval) = new_node_5(METALINGUISTIC,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(1314,SEhU));}
    break;

  case 999:
/* Line 1813 of yacc.c  */
#line 2976 "rpc2x_act.y"
    {(yyval) = new_node_4(METALINGUISTIC,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1000:
/* Line 1813 of yacc.c  */
#line 2978 "rpc2x_act.y"
    {(yyval) = new_node_4(METALINGUISTIC,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1314,SEhU));}
    break;

  case 1001:
/* Line 1813 of yacc.c  */
#line 2981 "rpc2x_act.y"
    {(yyval) = new_node_6(METALINGUISTIC,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 1002:
/* Line 1813 of yacc.c  */
#line 2983 "rpc2x_act.y"
    {(yyval) = new_node_6(METALINGUISTIC,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]),new_elidable(1314,SEhU));}
    break;

  case 1003:
/* Line 1813 of yacc.c  */
#line 2985 "rpc2x_act.y"
    {(yyval) = new_node_5(METALINGUISTIC,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 1004:
/* Line 1813 of yacc.c  */
#line 2987 "rpc2x_act.y"
    {(yyval) = new_node_5(METALINGUISTIC,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(1314,SEhU));}
    break;

  case 1005:
/* Line 1813 of yacc.c  */
#line 2989 "rpc2x_act.y"
    {(yyval) = new_node_4(METALINGUISTIC,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1006:
/* Line 1813 of yacc.c  */
#line 2991 "rpc2x_act.y"
    {(yyval) = new_node_4(METALINGUISTIC,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1314,SEhU));}
    break;

  case 1007:
/* Line 1813 of yacc.c  */
#line 2993 "rpc2x_act.y"
    {(yyval) = new_node_3(METALINGUISTIC,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 1008:
/* Line 1813 of yacc.c  */
#line 2995 "rpc2x_act.y"
    {(yyval) = new_node_3(METALINGUISTIC,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(1314,SEhU));}
    break;

  case 1009:
/* Line 1813 of yacc.c  */
#line 2999 "rpc2x_act.y"
    {(yyval) = new_node_1(METALINGUISTIC_MAIN_SELBRI,(yyvsp[(1) - (1)]));}
    break;

  case 1010:
/* Line 1813 of yacc.c  */
#line 3003 "rpc2x_act.y"
    {(yyval) = new_node_5(RECIPROCITY,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 1011:
/* Line 1813 of yacc.c  */
#line 3005 "rpc2x_act.y"
    {(yyval) = new_node_5(RECIPROCITY,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(1314,SEhU));}
    break;

  case 1012:
/* Line 1813 of yacc.c  */
#line 3007 "rpc2x_act.y"
    {(yyval) = new_node_4(RECIPROCITY,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1013:
/* Line 1813 of yacc.c  */
#line 3009 "rpc2x_act.y"
    {(yyval) = new_node_4(RECIPROCITY,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1314,SEhU));}
    break;

  case 1014:
/* Line 1813 of yacc.c  */
#line 3011 "rpc2x_act.y"
    {(yyval) = new_node_4(RECIPROCITY,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1015:
/* Line 1813 of yacc.c  */
#line 3013 "rpc2x_act.y"
    {(yyval) = new_node_4(RECIPROCITY,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1314,SEhU));}
    break;

  case 1016:
/* Line 1813 of yacc.c  */
#line 3015 "rpc2x_act.y"
    {(yyval) = new_node_3(RECIPROCITY,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 1017:
/* Line 1813 of yacc.c  */
#line 3017 "rpc2x_act.y"
    {(yyval) = new_node_3(RECIPROCITY,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(1314,SEhU));}
    break;

  case 1018:
/* Line 1813 of yacc.c  */
#line 3022 "rpc2x_act.y"
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 1019:
/* Line 1813 of yacc.c  */
#line 3024 "rpc2x_act.y"
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(362,DOhU));}
    break;

  case 1020:
/* Line 1813 of yacc.c  */
#line 3026 "rpc2x_act.y"
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1021:
/* Line 1813 of yacc.c  */
#line 3028 "rpc2x_act.y"
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(362,DOhU));}
    break;

  case 1022:
/* Line 1813 of yacc.c  */
#line 3030 "rpc2x_act.y"
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1023:
/* Line 1813 of yacc.c  */
#line 3032 "rpc2x_act.y"
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(362,DOhU));}
    break;

  case 1024:
/* Line 1813 of yacc.c  */
#line 3034 "rpc2x_act.y"
    {(yyval) = new_node_3(FREE_VOCATIVE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 1025:
/* Line 1813 of yacc.c  */
#line 3036 "rpc2x_act.y"
    {(yyval) = new_node_3(FREE_VOCATIVE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(362,DOhU));}
    break;

  case 1026:
/* Line 1813 of yacc.c  */
#line 3039 "rpc2x_act.y"
    {(yyval) = new_node_6(FREE_VOCATIVE,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 1027:
/* Line 1813 of yacc.c  */
#line 3041 "rpc2x_act.y"
    {(yyval) = new_node_6(FREE_VOCATIVE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]),new_elidable(362,DOhU));}
    break;

  case 1028:
/* Line 1813 of yacc.c  */
#line 3043 "rpc2x_act.y"
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 1029:
/* Line 1813 of yacc.c  */
#line 3045 "rpc2x_act.y"
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(362,DOhU));}
    break;

  case 1030:
/* Line 1813 of yacc.c  */
#line 3048 "rpc2x_act.y"
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 1031:
/* Line 1813 of yacc.c  */
#line 3050 "rpc2x_act.y"
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(362,DOhU));}
    break;

  case 1032:
/* Line 1813 of yacc.c  */
#line 3052 "rpc2x_act.y"
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1033:
/* Line 1813 of yacc.c  */
#line 3054 "rpc2x_act.y"
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(362,DOhU));}
    break;

  case 1034:
/* Line 1813 of yacc.c  */
#line 3057 "rpc2x_act.y"
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 1035:
/* Line 1813 of yacc.c  */
#line 3059 "rpc2x_act.y"
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(362,DOhU));}
    break;

  case 1036:
/* Line 1813 of yacc.c  */
#line 3061 "rpc2x_act.y"
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1037:
/* Line 1813 of yacc.c  */
#line 3063 "rpc2x_act.y"
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(362,DOhU));}
    break;

  case 1038:
/* Line 1813 of yacc.c  */
#line 3066 "rpc2x_act.y"
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1039:
/* Line 1813 of yacc.c  */
#line 3068 "rpc2x_act.y"
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(362,DOhU));}
    break;

  case 1040:
/* Line 1813 of yacc.c  */
#line 3070 "rpc2x_act.y"
    {(yyval) = new_node_3(FREE_VOCATIVE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 1041:
/* Line 1813 of yacc.c  */
#line 3072 "rpc2x_act.y"
    {(yyval) = new_node_3(FREE_VOCATIVE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(362,DOhU));}
    break;

  case 1042:
/* Line 1813 of yacc.c  */
#line 3075 "rpc2x_act.y"
    {(yyval) = new_node_3(FREE_VOCATIVE,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 1043:
/* Line 1813 of yacc.c  */
#line 3077 "rpc2x_act.y"
    {(yyval) = new_node_3(FREE_VOCATIVE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(362,DOhU));}
    break;

  case 1044:
/* Line 1813 of yacc.c  */
#line 3079 "rpc2x_act.y"
    {(yyval) = new_node_2(FREE_VOCATIVE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1045:
/* Line 1813 of yacc.c  */
#line 3081 "rpc2x_act.y"
    {(yyval) = new_node_2(FREE_VOCATIVE,(yyvsp[(1) - (1)]),new_elidable(362,DOhU));}
    break;

  case 1046:
/* Line 1813 of yacc.c  */
#line 3085 "rpc2x_act.y"
    {(yyval) = new_node_2(UTTERANCE_ORDINAL,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 1047:
/* Line 1813 of yacc.c  */
#line 3087 "rpc2x_act.y"
    {(yyval) = new_node_2(UTTERANCE_ORDINAL,(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 1048:
/* Line 1813 of yacc.c  */
#line 3091 "rpc2x_act.y"
    {(yyval) = new_node_3(PARENTHETICAL,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 1049:
/* Line 1813 of yacc.c  */
#line 3093 "rpc2x_act.y"
    {(yyval) = new_node_3(PARENTHETICAL,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(1431,TOI));}
    break;

  case 1050:
/* Line 1813 of yacc.c  */
#line 3097 "rpc2x_act.y"
    {(yyval) = new_node_4(SUBSCRIPT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1051:
/* Line 1813 of yacc.c  */
#line 3099 "rpc2x_act.y"
    {(yyval) = new_node_4(SUBSCRIPT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(157,BOI));}
    break;

  case 1052:
/* Line 1813 of yacc.c  */
#line 3101 "rpc2x_act.y"
    {(yyval) = new_node_3(SUBSCRIPT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 1053:
/* Line 1813 of yacc.c  */
#line 3103 "rpc2x_act.y"
    {(yyval) = new_node_3(SUBSCRIPT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(157,BOI));}
    break;

  case 1054:
/* Line 1813 of yacc.c  */
#line 3105 "rpc2x_act.y"
    {(yyval) = new_node_4(SUBSCRIPT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1055:
/* Line 1813 of yacc.c  */
#line 3107 "rpc2x_act.y"
    {(yyval) = new_node_4(SUBSCRIPT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(157,BOI));}
    break;

  case 1056:
/* Line 1813 of yacc.c  */
#line 3109 "rpc2x_act.y"
    {(yyval) = new_node_3(SUBSCRIPT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 1057:
/* Line 1813 of yacc.c  */
#line 3111 "rpc2x_act.y"
    {(yyval) = new_node_3(SUBSCRIPT,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]),new_elidable(157,BOI));}
    break;

  case 1058:
/* Line 1813 of yacc.c  */
#line 3114 "rpc2x_act.y"
    {(yyval) = new_node_6(SUBSCRIPT,(yyvsp[(1) - (6)]),(yyvsp[(2) - (6)]),(yyvsp[(3) - (6)]),(yyvsp[(4) - (6)]),(yyvsp[(5) - (6)]),(yyvsp[(6) - (6)]));}
    break;

  case 1059:
/* Line 1813 of yacc.c  */
#line 3116 "rpc2x_act.y"
    {(yyval) = new_node_6(SUBSCRIPT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]),new_elidable(1509,VEhO));}
    break;

  case 1060:
/* Line 1813 of yacc.c  */
#line 3118 "rpc2x_act.y"
    {(yyval) = new_node_5(SUBSCRIPT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 1061:
/* Line 1813 of yacc.c  */
#line 3120 "rpc2x_act.y"
    {(yyval) = new_node_5(SUBSCRIPT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(1509,VEhO));}
    break;

  case 1062:
/* Line 1813 of yacc.c  */
#line 3122 "rpc2x_act.y"
    {(yyval) = new_node_5(SUBSCRIPT,(yyvsp[(1) - (5)]),(yyvsp[(2) - (5)]),(yyvsp[(3) - (5)]),(yyvsp[(4) - (5)]),(yyvsp[(5) - (5)]));}
    break;

  case 1063:
/* Line 1813 of yacc.c  */
#line 3124 "rpc2x_act.y"
    {(yyval) = new_node_5(SUBSCRIPT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]),new_elidable(1509,VEhO));}
    break;

  case 1064:
/* Line 1813 of yacc.c  */
#line 3126 "rpc2x_act.y"
    {(yyval) = new_node_4(SUBSCRIPT,(yyvsp[(1) - (4)]),(yyvsp[(2) - (4)]),(yyvsp[(3) - (4)]),(yyvsp[(4) - (4)]));}
    break;

  case 1065:
/* Line 1813 of yacc.c  */
#line 3128 "rpc2x_act.y"
    {(yyval) = new_node_4(SUBSCRIPT,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]),new_elidable(1509,VEhO));}
    break;

  case 1066:
/* Line 1813 of yacc.c  */
#line 3137 "rpc2x_act.y"
    {(yyval) = new_node_2(VOCATIVE,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1067:
/* Line 1813 of yacc.c  */
#line 3139 "rpc2x_act.y"
    {(yyval) = new_node_1(VOCATIVE,(yyvsp[(1) - (1)]));}
    break;

  case 1068:
/* Line 1813 of yacc.c  */
#line 3141 "rpc2x_act.y"
    {(yyval) = new_node_1(VOCATIVE,(yyvsp[(1) - (1)]));}
    break;

  case 1069:
/* Line 1813 of yacc.c  */
#line 3145 "rpc2x_act.y"
    {(yyval) = new_node_2(COI_NAI_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1070:
/* Line 1813 of yacc.c  */
#line 3147 "rpc2x_act.y"
    {(yyval) = new_node_1(COI_NAI_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 1071:
/* Line 1813 of yacc.c  */
#line 3149 "rpc2x_act.y"
    {(yyval) = new_node_3(COI_NAI_SEQ,(yyvsp[(1) - (3)]),(yyvsp[(2) - (3)]),(yyvsp[(3) - (3)]));}
    break;

  case 1072:
/* Line 1813 of yacc.c  */
#line 3151 "rpc2x_act.y"
    {(yyval) = new_node_2(COI_NAI_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1073:
/* Line 1813 of yacc.c  */
#line 3158 "rpc2x_act.y"
    {(yyval) = new_node_2(INDICATORS,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1074:
/* Line 1813 of yacc.c  */
#line 3160 "rpc2x_act.y"
    {(yyval) = new_node_1(INDICATORS,(yyvsp[(1) - (1)]));}
    break;

  case 1075:
/* Line 1813 of yacc.c  */
#line 3164 "rpc2x_act.y"
    {(yyval) = new_node_2(INDICATOR_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1076:
/* Line 1813 of yacc.c  */
#line 3166 "rpc2x_act.y"
    {(yyval) = new_node_1(INDICATOR_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 1077:
/* Line 1813 of yacc.c  */
#line 3172 "rpc2x_act.y"
    {(yyval) = new_node_2(INDICATOR,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1078:
/* Line 1813 of yacc.c  */
#line 3174 "rpc2x_act.y"
    {(yyval) = new_node_1(INDICATOR,(yyvsp[(1) - (1)]));}
    break;

  case 1079:
/* Line 1813 of yacc.c  */
#line 3176 "rpc2x_act.y"
    {(yyval) = new_node_2(INDICATOR,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1080:
/* Line 1813 of yacc.c  */
#line 3178 "rpc2x_act.y"
    {(yyval) = new_node_1(INDICATOR,(yyvsp[(1) - (1)]));}
    break;

  case 1081:
/* Line 1813 of yacc.c  */
#line 3180 "rpc2x_act.y"
    {(yyval) = new_node_1(INDICATOR,(yyvsp[(1) - (1)]));}
    break;

  case 1082:
/* Line 1813 of yacc.c  */
#line 3182 "rpc2x_act.y"
    {(yyval) = new_node_1(INDICATOR,(yyvsp[(1) - (1)]));}
    break;

  case 1083:
/* Line 1813 of yacc.c  */
#line 3184 "rpc2x_act.y"
    {(yyval) = new_node_1(INDICATOR,(yyvsp[(1) - (1)]));}
    break;

  case 1084:
/* Line 1813 of yacc.c  */
#line 3188 "rpc2x_act.y"
    {(yyval) = new_node_2(NAI_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1085:
/* Line 1813 of yacc.c  */
#line 3190 "rpc2x_act.y"
    {(yyval) = new_node_1(NAI_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 1086:
/* Line 1813 of yacc.c  */
#line 3194 "rpc2x_act.y"
    {(yyval) = new_node_2(CMENE_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1087:
/* Line 1813 of yacc.c  */
#line 3196 "rpc2x_act.y"
    {(yyval) = new_node_1(CMENE_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 1088:
/* Line 1813 of yacc.c  */
#line 3200 "rpc2x_act.y"
    {(yyval) = new_node_2(NIHO_SEQ_FREE_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1089:
/* Line 1813 of yacc.c  */
#line 3202 "rpc2x_act.y"
    {(yyval) = new_node_1(NIHO_SEQ_FREE_SEQ,(yyvsp[(1) - (1)]));}
    break;

  case 1090:
/* Line 1813 of yacc.c  */
#line 3206 "rpc2x_act.y"
    {(yyval) = new_node_2(NIHO_SEQ,(yyvsp[(1) - (2)]),(yyvsp[(2) - (2)]));}
    break;

  case 1091:
/* Line 1813 of yacc.c  */
#line 3208 "rpc2x_act.y"
    {(yyval) = new_node_1(NIHO_SEQ,(yyvsp[(1) - (1)]));}
    break;


/* Line 1813 of yacc.c  */
#line 11497 "rpc2x_act.tab.c"
      default: break;
    }
  /* User semantic actions sometimes alter yychar, and that requires
     that yytoken be updated with the new translation.  We take the
     approach of translating immediately before every use of yytoken.
     One alternative is translating here after every semantic action,
     but that translation would be missed if the semantic action invokes
     YYABORT, YYACCEPT, or YYERROR immediately after altering yychar or
     if it invokes YYBACKUP.  In the case of YYABORT or YYACCEPT, an
     incorrect destructor might then be invoked immediately.  In the
     case of YYERROR or YYBACKUP, subsequent parser actions might lead
     to an incorrect destructor call or verbose syntax error message
     before the lookahead is translated.  */
  YY_SYMBOL_PRINT ("-> $$ =", yyr1[yyn], &yyval, &yyloc);

  YYPOPSTACK (yylen);
  yylen = 0;
  YY_STACK_PRINT (yyss, yyssp);

  *++yyvsp = yyval;
  *++yylsp = yyloc;

  /* Now `shift' the result of the reduction.  Determine what state
     that goes to, based on the state we popped back to and the rule
     number reduced by.  */

  yyn = yyr1[yyn];

  yystate = yypgoto[yyn - YYNTOKENS] + *yyssp;
  if (0 <= yystate && yystate <= YYLAST && yycheck[yystate] == *yyssp)
    yystate = yytable[yystate];
  else
    yystate = yydefgoto[yyn - YYNTOKENS];

  goto yynewstate;


/*------------------------------------.
| yyerrlab -- here on detecting error |
`------------------------------------*/
yyerrlab:
report_trace_error(yyss, yyssp);  /* Make sure we have latest lookahead translation.  See comments at
     user semantic actions for why this is necessary.  */
  yytoken = yychar == YYEMPTY ? YYEMPTY : YYTRANSLATE (yychar);

  /* If not already recovering from an error, report this error.  */
  if (!yyerrstatus)
    {
      ++yynerrs;
#if ! YYERROR_VERBOSE
      yyerror (YY_("syntax error"));
#else
# define YYSYNTAX_ERROR yysyntax_error (&yymsg_alloc, &yymsg, \
                                        yyssp, yytoken)
      {
        char const *yymsgp = YY_("syntax error");
        int yysyntax_error_status;
        yysyntax_error_status = YYSYNTAX_ERROR;
        if (yysyntax_error_status == 0)
          yymsgp = yymsg;
        else if (yysyntax_error_status == 1)
          {
            if (yymsg != yymsgbuf)
              YYSTACK_FREE (yymsg);
            yymsg = (char *) YYSTACK_ALLOC (yymsg_alloc);
            if (!yymsg)
              {
                yymsg = yymsgbuf;
                yymsg_alloc = sizeof yymsgbuf;
                yysyntax_error_status = 2;
              }
            else
              {
                yysyntax_error_status = YYSYNTAX_ERROR;
                yymsgp = yymsg;
              }
          }
        yyerror (yymsgp);
        if (yysyntax_error_status == 2)
          goto yyexhaustedlab;
      }
# undef YYSYNTAX_ERROR
#endif
    }

  yyerror_range[1] = yylloc;

  if (yyerrstatus == 3)
    {
      /* If just tried and failed to reuse lookahead token after an
	 error, discard it.  */

      if (yychar <= YYEOF)
	{
	  /* Return failure if at end of input.  */
	  if (yychar == YYEOF)
	    YYABORT;
	}
      else
	{
	  yydestruct ("Error: discarding",
		      yytoken, &yylval, &yylloc);
	  yychar = YYEMPTY;
	}
    }

  /* Else will try to reuse lookahead token after shifting the error
     token.  */
  goto yyerrlab1;


/*---------------------------------------------------.
| yyerrorlab -- error raised explicitly by YYERROR.  |
`---------------------------------------------------*/
yyerrorlab:

  /* Pacify compilers like GCC when the user code never invokes
     YYERROR and the label yyerrorlab therefore never appears in user
     code.  */
  if (/*CONSTCOND*/ 0)
     goto yyerrorlab;

  yyerror_range[1] = yylsp[1-yylen];
  /* Do not reclaim the symbols of the rule which action triggered
     this YYERROR.  */
  YYPOPSTACK (yylen);
  yylen = 0;
  YY_STACK_PRINT (yyss, yyssp);
  yystate = *yyssp;
  goto yyerrlab1;


/*-------------------------------------------------------------.
| yyerrlab1 -- common code for both syntax error and YYERROR.  |
`-------------------------------------------------------------*/
yyerrlab1:
  yyerrstatus = 3;	/* Each real token shifted decrements this.  */

  for (;;)
    {
      yyn = yypact[yystate];
      if (!yypact_value_is_default (yyn))
	{
	  yyn += YYTERROR;
	  if (0 <= yyn && yyn <= YYLAST && yycheck[yyn] == YYTERROR)
	    {
	      yyn = yytable[yyn];
	      if (0 < yyn)
		break;
	    }
	}

      /* Pop the current state because it cannot handle the error token.  */
      if (yyssp == yyss)
	YYABORT;

      yyerror_range[1] = *yylsp;
      yydestruct ("Error: popping",
		  yystos[yystate], yyvsp, yylsp);
      YYPOPSTACK (1);
      yystate = *yyssp;
      YY_STACK_PRINT (yyss, yyssp);
    }

  YY_IGNORE_MAYBE_UNINITIALIZED_BEGIN
  *++yyvsp = yylval;
  YY_IGNORE_MAYBE_UNINITIALIZED_END

  yyerror_range[2] = yylloc;
  /* Using YYLLOC is tempting, but would change the location of
     the lookahead.  YYLOC is available though.  */
  YYLLOC_DEFAULT (yyloc, yyerror_range, 2);
  *++yylsp = yyloc;

  /* Shift the error token.  */
  YY_SYMBOL_PRINT ("Shifting", yystos[yyn], yyvsp, yylsp);

  yystate = yyn;
  goto yynewstate;


/*-------------------------------------.
| yyacceptlab -- YYACCEPT comes here.  |
`-------------------------------------*/
yyacceptlab:
  yyresult = 0;
  goto yyreturn;

/*-----------------------------------.
| yyabortlab -- YYABORT comes here.  |
`-----------------------------------*/
yyabortlab:
  yyresult = 1;
  goto yyreturn;

#if !defined yyoverflow || YYERROR_VERBOSE
/*-------------------------------------------------.
| yyexhaustedlab -- memory exhaustion comes here.  |
`-------------------------------------------------*/
yyexhaustedlab:
  yyerror (YY_("memory exhausted"));
  yyresult = 2;
  /* Fall through.  */
#endif

yyreturn:
  if (yychar != YYEMPTY)
    {
      /* Make sure we have latest lookahead translation.  See comments at
         user semantic actions for why this is necessary.  */
      yytoken = YYTRANSLATE (yychar);
      yydestruct ("Cleanup: discarding lookahead",
                  yytoken, &yylval, &yylloc);
    }
  /* Do not reclaim the symbols of the rule which action triggered
     this YYABORT or YYACCEPT.  */
  YYPOPSTACK (yylen);
  YY_STACK_PRINT (yyss, yyssp);
  while (yyssp != yyss)
    {
      yydestruct ("Cleanup: popping",
		  yystos[*yyssp], yyvsp, yylsp);
      YYPOPSTACK (1);
    }
#ifndef yyoverflow
  if (yyss != yyssa)
    YYSTACK_FREE (yyss);
#endif
#if YYERROR_VERBOSE
  if (yymsg != yymsgbuf)
    YYSTACK_FREE (yymsg);
#endif
  /* Make sure YYID is used.  */
  return YYID (yyresult);
}


