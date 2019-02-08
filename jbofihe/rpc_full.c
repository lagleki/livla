extern elide_trace_reduce(int, int);
extern elide_trace_shift(int,int);
extern report_trace_shift(int);
extern report_trace_reduce(int, int);
extern report_trace_error(short *yyss, short *yyssp);
/* A Bison parser, made by GNU Bison 3.0.5.  */

/* Bison implementation for Yacc-like parsers in C

   Copyright (C) 1984, 1989-1990, 2000-2015, 2018 Free Software Foundation, Inc.

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
#define YYBISON_VERSION "3.0.5"

/* Skeleton name.  */
#define YYSKELETON_NAME "yacc.c"

/* Pure parsers.  */
#define YYPURE 0

/* Push parsers.  */
#define YYPUSH 0

/* Pull parsers.  */
#define YYPULL 1


/* Substitute the variable and function names.  */
#define yyparse         full_yyparse
#define yylex           yylex
#define yyerror         yyerror
#define yydebug         yydebug
#define yynerrs         full_yynerrs

#define yylval          yylval
#define yychar          full_yychar
#define yylloc          full_yylloc

/* Copy the first part of user declarations.  */
#line 178 "rpc2x_full_act.y" /* yacc.c:339  */

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


#line 95 "rpc2x_full_act.tab.c" /* yacc.c:339  */

# ifndef YY_NULLPTR
#  if defined __cplusplus && 201103L <= __cplusplus
#   define YY_NULLPTR nullptr
#  else
#   define YY_NULLPTR 0
#  endif
# endif

/* Enabling verbose error messages.  */
#ifdef YYERROR_VERBOSE
# undef YYERROR_VERBOSE
# define YYERROR_VERBOSE 1
#else
# define YYERROR_VERBOSE 0
#endif


/* Debug traces.  */
#ifndef YYDEBUG
# define YYDEBUG 0
#endif
#if YYDEBUG
extern int yydebug;
#endif

/* Token type.  */
#ifndef YYTOKENTYPE
# define YYTOKENTYPE
  enum yytokentype
  {
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

/* Value type.  */
#if ! defined YYSTYPE && ! defined YYSTYPE_IS_DECLARED
typedef int YYSTYPE;
# define YYSTYPE_IS_TRIVIAL 1
# define YYSTYPE_IS_DECLARED 1
#endif

/* Location type.  */
#if ! defined YYLTYPE && ! defined YYLTYPE_IS_DECLARED
typedef struct YYLTYPE YYLTYPE;
struct YYLTYPE
{
  int first_line;
  int first_column;
  int last_line;
  int last_column;
};
# define YYLTYPE_IS_DECLARED 1
# define YYLTYPE_IS_TRIVIAL 1
#endif


extern YYSTYPE yylval;
extern YYLTYPE full_yylloc;
int full_yyparse (void);



/* Copy the second part of user declarations.  */

#line 318 "rpc2x_full_act.tab.c" /* yacc.c:358  */

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
#else
typedef signed char yytype_int8;
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
# elif ! defined YYSIZE_T
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

#ifndef YY_ATTRIBUTE
# if (defined __GNUC__                                               \
      && (2 < __GNUC__ || (__GNUC__ == 2 && 96 <= __GNUC_MINOR__)))  \
     || defined __SUNPRO_C && 0x5110 <= __SUNPRO_C
#  define YY_ATTRIBUTE(Spec) __attribute__(Spec)
# else
#  define YY_ATTRIBUTE(Spec) /* empty */
# endif
#endif

#ifndef YY_ATTRIBUTE_PURE
# define YY_ATTRIBUTE_PURE   YY_ATTRIBUTE ((__pure__))
#endif

#ifndef YY_ATTRIBUTE_UNUSED
# define YY_ATTRIBUTE_UNUSED YY_ATTRIBUTE ((__unused__))
#endif

#if !defined _Noreturn \
     && (!defined __STDC_VERSION__ || __STDC_VERSION__ < 201112)
# if defined _MSC_VER && 1200 <= _MSC_VER
#  define _Noreturn __declspec (noreturn)
# else
#  define _Noreturn YY_ATTRIBUTE ((__noreturn__))
# endif
#endif

/* Suppress unused-variable warnings by "using" E.  */
#if ! defined lint || defined __GNUC__
# define YYUSE(E) ((void) (E))
#else
# define YYUSE(E) /* empty */
#endif

#if defined __GNUC__ && 407 <= __GNUC__ * 100 + __GNUC_MINOR__
/* Suppress an incorrect diagnostic about yylval being uninitialized.  */
# define YY_IGNORE_MAYBE_UNINITIALIZED_BEGIN \
    _Pragma ("GCC diagnostic push") \
    _Pragma ("GCC diagnostic ignored \"-Wuninitialized\"")\
    _Pragma ("GCC diagnostic ignored \"-Wmaybe-uninitialized\"")
# define YY_IGNORE_MAYBE_UNINITIALIZED_END \
    _Pragma ("GCC diagnostic pop")
#else
# define YY_INITIAL_VALUE(Value) Value
#endif
#ifndef YY_IGNORE_MAYBE_UNINITIALIZED_BEGIN
# define YY_IGNORE_MAYBE_UNINITIALIZED_BEGIN
# define YY_IGNORE_MAYBE_UNINITIALIZED_END
#endif
#ifndef YY_INITIAL_VALUE
# define YY_INITIAL_VALUE(Value) /* Nothing. */
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
#    if ! defined _ALLOCA_H && ! defined EXIT_SUCCESS
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
   /* Pacify GCC's 'empty if-body' warning.  */
#  define YYSTACK_FREE(Ptr) do { /* empty */; } while (0)
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
#   if ! defined malloc && ! defined EXIT_SUCCESS
void *malloc (YYSIZE_T); /* INFRINGES ON USER NAME SPACE */
#   endif
#  endif
#  ifndef YYFREE
#   define YYFREE free
#   if ! defined free && ! defined EXIT_SUCCESS
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
# define YYSTACK_RELOCATE(Stack_alloc, Stack)                           \
    do                                                                  \
      {                                                                 \
        YYSIZE_T yynewbytes;                                            \
        YYCOPY (&yyptr->Stack_alloc, Stack, yysize);                    \
        Stack = &yyptr->Stack_alloc;                                    \
        yynewbytes = yystacksize * sizeof (*Stack) + YYSTACK_GAP_MAXIMUM; \
        yyptr += yynewbytes / sizeof (*yyptr);                          \
      }                                                                 \
    while (0)

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
      while (0)
#  endif
# endif
#endif /* !YYCOPY_NEEDED */

/* YYFINAL -- State number of the termination state.  */
#define YYFINAL  365
/* YYLAST -- Last index in YYTABLE.  */
#define YYLAST   8675

/* YYNTOKENS -- Number of terminals.  */
#define YYNTOKENS  161
/* YYNNTS -- Number of nonterminals.  */
#define YYNNTS  163
/* YYNRULES -- Number of rules.  */
#define YYNRULES  961
/* YYNSTATES -- Number of states.  */
#define YYNSTATES  1754

/* YYTRANSLATE[YYX] -- Symbol number corresponding to YYX as returned
   by yylex, with out-of-bounds checking.  */
#define YYUNDEFTOK  2
#define YYMAXUTOK   415

#define YYTRANSLATE(YYX)                                                \
  ((unsigned int) (YYX) <= YYMAXUTOK ? yytranslate[YYX] : YYUNDEFTOK)

/* YYTRANSLATE[TOKEN-NUM] -- Symbol number corresponding to TOKEN-NUM
   as returned by yylex, without out-of-bounds checking.  */
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
  /* YYRLINE[YYN] -- Source line where rule number YYN was defined.  */
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
     671,   673,   676,   678,   681,   683,   689,   691,   693,   695,
     697,   699,   701,   703,   705,   707,   709,   711,   713,   719,
     721,   730,   732,   734,   736,   742,   751,   760,   773,   778,
     785,   787,   794,   796,   798,   801,   803,   807,   809,   815,
     817,   819,   825,   827,   831,   833,   835,   837,   844,   846,
     850,   856,   858,   860,   862,   868,   871,   873,   876,   878,
     881,   883,   886,   888,   891,   893,   902,   904,   910,   912,
     914,   916,   918,   920,   922,   924,   926,   933,   935,   937,
     946,   948,   950,   952,   954,   956,   958,   960,   964,   968,
     970,   974,   980,   984,   986,   990,   992,   997,   999,  1001,
    1003,  1011,  1013,  1017,  1019,  1023,  1025,  1031,  1033,  1035,
    1042,  1044,  1048,  1050,  1052,  1054,  1058,  1060,  1062,  1064,
    1070,  1072,  1074,  1076,  1078,  1086,  1088,  1092,  1094,  1096,
    1098,  1100,  1102,  1104,  1106,  1112,  1114,  1120,  1122,  1124,
    1126,  1130,  1132,  1136,  1138,  1144,  1146,  1149,  1151,  1154,
    1156,  1159,  1161,  1164,  1166,  1169,  1171,  1174,  1176,  1179,
    1182,  1184,  1187,  1189,  1192,  1194,  1196,  1198,  1200,  1202,
    1204,  1206,  1210,  1212,  1214,  1216,  1219,  1221,  1223,  1225,
    1229,  1231,  1233,  1235,  1238,  1240,  1242,  1244,  1248,  1250,
    1252,  1254,  1257,  1259,  1261,  1263,  1269,  1271,  1273,  1275,
    1284,  1286,  1288,  1292,  1294,  1300,  1304,  1306,  1308,  1314,
    1316,  1320,  1322,  1324,  1326,  1330,  1332,  1334,  1336,  1342,
    1344,  1350,  1352,  1354,  1360,  1362,  1364,  1370,  1372,  1381,
    1383,  1385,  1387,  1389,  1391,  1395,  1399,  1401,  1403,  1405,
    1413,  1415,  1419,  1421,  1423,  1425,  1427,  1429,  1431,  1433,
    1439,  1441,  1443,  1446,  1448,  1450,  1457,  1459,  1461,  1468,
    1470,  1480,  1482,  1485,  1487,  1489,  1491,  1494,  1497,  1499,
    1501,  1503,  1505,  1507,  1510,  1512,  1514,  1516,  1518,  1520,
    1523,  1526,  1528,  1531,  1534,  1537,  1540,  1543,  1546,  1551,
    1553,  1555,  1557,  1561,  1563,  1565,  1567,  1571,  1573,  1577,
    1579,  1583,  1585,  1589,  1591,  1597,  1599,  1603,  1605,  1607,
    1609,  1611,  1613,  1615,  1617,  1619,  1621,  1623,  1625,  1627,
    1629,  1631,  1633,  1635,  1637,  1639,  1641,  1648,  1650,  1652,
    1654,  1656,  1658,  1660,  1662,  1668,  1670,  1672,  1674,  1680,
    1682,  1684,  1686,  1688,  1690,  1696,  1698,  1702,  1704,  1708,
    1710,  1716,  1718,  1720,  1726,  1728,  1730,  1733,  1735,  1738,
    1740,  1744,  1746,  1752,  1754,  1756,  1758,  1768,  1770,  1772,
    1774,  1776,  1778,  1782,  1784,  1786,  1788,  1795,  1797,  1799,
    1806,  1808,  1810,  1812,  1814,  1821,  1823,  1825,  1827,  1829,
    1831,  1833,  1835,  1837,  1839,  1841,  1843,  1845,  1847,  1853,
    1855,  1859,  1861,  1863,  1865,  1872,  1874,  1876,  1878,  1880,
    1887,  1889,  1897,  1900,  1902,  1905,  1907,  1909,  1911,  1914,
    1916,  1918,  1920,  1923,  1925,  1927,  1929,  1932,  1935,  1937,
    1939,  1941,  1944,  1946,  1948,  1950,  1957,  1961,  1963,  1965,
    1972,  1974,  1976,  1983,  1985,  1987,  1989,  1995,  1997,  1999,
    2001,  2003,  2005,  2007,  2009,  2015,  2017,  2019,  2021,  2023,
    2025,  2027,  2029,  2035,  2037,  2039,  2041,  2043,  2045,  2047,
    2049,  2053,  2055,  2057,  2059,  2061,  2063,  2065,  2067,  2069,
    2071,  2073,  2075,  2077,  2079,  2081,  2083,  2087,  2089,  2091,
    2093,  2095,  2097,  2099,  2101,  2103,  2105,  2107,  2109,  2111,
    2113,  2115,  2117,  2119,  2121,  2123,  2125,  2127,  2129,  2131,
    2133,  2139,  2141,  2143,  2145,  2147,  2149,  2151,  2153,  2155,
    2157,  2159,  2161,  2167,  2169,  2171,  2173,  2175,  2177,  2179,
    2181,  2183,  2185,  2187,  2189,  2191,  2193,  2195,  2197,  2199,
    2201,  2203,  2205,  2207,  2209,  2211,  2213,  2217,  2219,  2221,
    2223,  2225,  2227,  2229,  2231,  2233,  2235,  2237,  2239,  2241,
    2243,  2245,  2247,  2249,  2251,  2253,  2255,  2257,  2259,  2261,
    2263,  2265,  2267,  2269,  2271,  2273,  2275,  2277,  2279,  2281,
    2283,  2285,  2287,  2298,  2300,  2302,  2304,  2306,  2308,  2310,
    2312,  2314,  2316,  2318,  2324,  2326,  2328,  2330,  2332,  2334,
    2336,  2338,  2344,  2346,  2348,  2350,  2357,  2359,  2364,  2366,
    2368,  2370,  2372,  2374,  2376,  2378,  2380,  2382,  2384,  2386,
    2388,  2393,  2395,  2397,  2399,  2401,  2408,  2410,  2412,  2421,
    2423,  2425,  2427,  2429,  2431,  2433,  2435,  2437,  2439,  2441,
    2443,  2445,  2447,  2449,  2451,  2454,  2456,  2458,  2460,  2462,
    2464,  2466,  2468,  2470,  2472,  2474,  2476,  2478,  2480,  2482,
    2484,  2487,  2489,  2491,  2493,  2495,  2497,  2499,  2501,  2503,
    2505,  2507,  2509,  2511,  2513,  2515,  2517,  2520,  2522,  2525,
    2527,  2530,  2532,  2539,  2543,  2550,  2552,  2555,  2557,  2560,
    2562,  2565,  2567,  2570,  2572,  2575,  2577,  2580,  2582,  2585,
    2590,  2592,  2594,  2600,  2602,  2604,  2606,  2610,  2612,  2618,
    2620,  2622,  2624,  2627,  2629,  2631,  2633,  2636,  2638,  2640,
    2642,  2645,  2647,  2649,  2655,  2657,  2659,  2661,  2665,  2667,
    2673,  2675,  2677,  2679,  2681,  2683,  2685,  2687,  2689,  2692,
    2694,  2696,  2698,  2700,  2702,  2704,  2706,  2708,  2711,  2717,
    2719,  2723,  2729,  2731,  2733,  2735,  2737,  2739,  2743,  2745,
    2752,  2754,  2758,  2760,  2762,  2764,  2766,  2768,  2773,  2775,
    2777,  2779,  2782,  2784,  2786,  2788,  2792,  2796,  2798,  2800,
    2802,  2807,  2809,  2811,  2813,  2816,  2818,  2821,  2823,  2826,
    2828,  2831,  2833,  2836,  2838,  2842,  2844,  2848,  2852,  2854,
    2856,  2858,  2861,  2863,  2865,  2867,  2876,  2878,  2880,  2884,
    2886,  2888,  2890,  2897,  2899,  2903,  2905,  2911,  2913,  2915,
    2917,  2919,  2921,  2923,  2927,  2929,  2933,  2935,  2939,  2941,
    2945,  2947
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
  "indicator", "NAI_seq", "CMENE_seq", "NIhO_seq_free_seq", "NIhO_seq", YY_NULLPTR
};
#endif

# ifdef YYPRINT
/* YYTOKNUM[NUM] -- (External) token number corresponding to the
   (internal) symbol number NUM (which must be that of a token).  */
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

#define YYPACT_NINF -703

#define yypact_value_is_default(Yystate) \
  (!!((Yystate) == (-703)))

#define YYTABLE_NINF -653

#define yytable_value_is_error(Yytable_value) \
  0

  /* YYPACT[STATE-NUM] -- Index in YYTABLE of the portion describing
     STATE-NUM.  */
static const yytype_int16 yypact[] =
{
    4720,  6970,  6970,  1157,  -703,  -703,    58,  -703,    75,  -703,
    -703,  7980,  4326,   651,  -703,  1054,  6970,  1157,  1600,  2324,
    1157,  6257,  7917,   447,  6364,  7741,  1157,  4720,  8062,  3741,
    4493,  -703,  -703,  5829,   516,  1869,  1157,  -703,  3026,  6150,
    8062,   447,  4720,  5693,    88,  7741,  1520,  -703,  -703,  1157,
    1157,    95,   583,    90,  1271,   459,    44,   103,    11,   264,
     293,   313,   330,  1116,  1116,  2105,  -703,   478,  3222,    49,
    -703,  2928,   315,  -703,   384,   445,  -703,  -703,   355,  -703,
     359,  -703,  5936,  -703,  -703,  -703,  -703,    20,   375,  -703,
    7311,  -703,  7049,   444,   499,  -703,  -703,  -703,  -703,  -703,
    -703,  -703,  -703,  -703,  7491,  -703,   408,  1460,  -703,    13,
    -703,   879,   879,  -703,  -703,  -703,  -703,  -703,   456,  -703,
    -703,  -703,  -703,  -703,  -703,  2368,  1269,  -703,   737,   146,
    -703,   594,  -703,  -703,  -703,  -703,  -703,  -703,  -703,  2589,
    -703,  -703,  5271,   659,  1312,   660,  -703,  1157,  1157,  5693,
    5693,  6043,  2529,  7525,  1653,  -703,  1653,  1157,  5544,  -703,
    -703,  -703,  -703,  -703,  -703,  -703,  6471,   475,  5544,   651,
    -703,  5081,  5390,  -703,  2146,  1420,  5271,  8526,  5235,  6970,
     655,  6970,  1157,  -703,  -703,  1157,  -703,  7999,  6996,  4326,
     645,   913,  4326,   651,  1157,  1157,   638,  6970,  1157,  3026,
    -703,  1977,  1600,  3362,   648,  3891,  6043,   719,  2324,  1157,
    1667,   726,  -703,   879,  2030,  -703,  6789,  6257,  1048,   637,
    8526,  7917,  -703,   763,  2720,  6364,  2422,  7822,  2468,  2422,
    7741,  8062,  1869,  4326,  4326,  2468,  1869,  1157,   738,  -703,
     766,  -703,  2336,  -703,   815,  8123,  -703,   737,  -703,  -703,
    1508,  -703,    13,  1309,  2259,  2336,  7741,  1157,   810,   838,
    8062,  3741,  -703,  -703,  3024,  3741,  -703,  2529,  4493,  6043,
    -703,   927,  7155,  7623,  5829,  1157,  1157,  -703,  1869,  1157,
    -703,  3026,  6575,  -703,  7655,  6150,   865,  1912,  8062,   718,
     874,   905,  5693,  -703,   917,  7741,  7741,  1033,  1981,  1748,
    1157,  1157,   997,   159,  1075,  1008,   433,  1057,  1463,  1062,
      37,   219,  1066,    34,    52,    62,   435,  1685,  1083,   535,
    1101,  1738,  -703,  1294,   802,  1368,   179,  1182,  1140,  1160,
     782,  1141,  1028,  -703,    25,  1068,    56,   186,  1090,  1231,
    1408,    60,  1292,  1228,   670,   489,   918,  1240,  1238,   931,
    1259,    59,    64,   537,   186,  -703,   931,  1017,  -703,  1491,
    1279,  1328,  -703,  -703,   186,  -703,    65,  -703,  -703,   384,
    -703,  2928,  1157,  2928,  1319,  5936,  1353,  5936,  -703,  5936,
    1250,  1364,  3741,  1250,  2198,  1157,  -703,  7374,  3741,  1157,
    1157,  -703,  -703,  -703,   444,  1289,  6970,  7389,  -703,  7491,
    2152,  1290,  1302,  1387,  8062,  8062,  1290,  1302,  8526,  -703,
    -703,  2152,  6996,  1269,  1318,  1392,  6996,  6996,  1329,  1302,
    3905,  6996,  3026,  -703,  1305,  1407,  2607,  2660,  -703,  1412,
    1157,  -703,  -703,  1157,  -703,  -703,  1157,  1157,  -703,  5693,
    -703,  5693,  1425,  1425,  1425,  2324,  1157,  5693,  -703,  -703,
    -703,  1440,   920,  1341,  1344,  1343,  1347,   320,   320,   320,
     320,  1157,  -703,  5693,  5693,  -703,  -703,  1465,  1138,   412,
    1273,  1409,  -703,  -703,  5693,  5693,  5544,  -703,  -703,  -703,
    5693,  5693,  5544,  5544,  5390,  -703,  -703,  5693,  5693,  5544,
    -703,  1157,  1157,  1496,  1425,  1427,  -703,   655,  1157,  1157,
    -703,  6996,  4326,  1157,  1466,  1157,  1157,  1467,  3026,  -703,
    -703,  1977,  3362,  3362,  1157,  1157,  3362,  1464,  4149,  -703,
    2720,  1157,  -703,  -703,  1048,  -703,  -703,  1468,  2030,  1048,
    1157,  1157,  1456,  1458,  8526,  1157,  1470,  2259,  2259,  2422,
    -703,  8207,  7822,   381,  2468,  1471,  2422,  1429,  7741,  1432,
    8062,  -703,  1869,  1437,  4326,  1445,  4326,  8123,  2468,  -703,
    1869,  1157,  1549,  1157,  8123,  2468,  1480,  8275,  2468,  2468,
    2336,  1510,  2422,  2422,  2259,  1157,  1425,  1425,  1501,  1157,
    2138,  1495,  3741,  -703,  -703,  1425,  -703,  2529,  -703,  1157,
    1514,  1157,  -703,  -703,  4326,  1474,  6682,  1482,  -703,  -703,
    1486,  8098,  -703,  -703,  1157,  1477,  1157,  1473,  1476,  7741,
    -703,  -703,  7741,  1576,  2044,  -703,  1512,  1590,  1519,  -703,
    1525,  1564,  1529,  1157,  1157,  2465,  1487,  -703,    41,  1563,
     493,  1489,  -703,   270,  1605,  1503,  -703,   467,   517,  1157,
    1157,  2964,   547,    91,   560,   483,  1157,  2980,  1475,  1475,
    -703,   557,   226,  1594,   574,   199,   585,   663,  1157,  1157,
    1157,    61,    76,   515,  7917,  1157,  -703,  -703,  1157,  1157,
    1488,  -703,  -703,  1533,  -703,  -703,  -703,  -703,    42,    83,
     100,  1069,  1146,  1528,  -703,  -703,  -703,  1231,  1554,  1578,
      46,  1130,  1328,   818,  1328,  -703,  1574,   186,   931,   186,
    1573,  1517,   107,  -703,  1522,   135,  -703,   248,  1526,  -703,
      54,   186,   186,  -703,   186,   314,  1530,  -703,   117,  1231,
    -703,  1596,  1231,  -703,  -703,  -703,  -703,   445,  1157,  -703,
    -703,  1368,  -703,  7212,   338,  -703,  1475,  3741,  3513,  3741,
      78,  3513,  1157,  1157,  -703,  3741,  1157,  1157,  6970,  6970,
    1289,  -703,  6970,  1157,  1425,  -703,  2152,  1475,  1475,  8062,
    -703,  -703,  8062,  -703,  8062,    80,    92,  -703,  -703,  2152,
    -703,  6996,   982,  1475,  6996,  -703,  -703,  6996,  -703,  6996,
     104,   111,  -703,  -703,  6996,  -703,  3026,   616,   454,  1622,
    1157,  3161,  3316,  3423,  3450,  1157,  1157,  1157,  -703,  -703,
    6043,  8526,  3905,  1624,  2324,  1157,  1568,  5693,   755,   592,
    1635,   606,   221,   618,   976,  1441,  1462,   996,  1383,  -703,
    1157,   320,  -703,  1157,   320,  -703,  1157,   320,  -703,  1157,
     320,  -703,  5693,  -703,  5693,  -703,   523,  2149,  -703,  1660,
    -703,  1662,   906,  -703,  -703,  5693,  -703,  5693,  -703,  5693,
    5693,  -703,  5693,  -703,  5693,  -703,  5693,  5693,  -703,  5693,
    5693,  5544,  -703,  5693,  5693,  5544,  -703,  5693,  -703,  5693,
    -703,  5693,  5693,  1157,  1157,  1157,  1682,  -703,  1157,  1157,
    1157,  1157,  1157,  -703,  3362,  1157,  1157,  3362,  1157,  1157,
    -703,  1157,  1157,  1157,  1048,  1157,  1157,  1157,  1157,  1623,
    1157,  1157,  8487,  8487,  8487,  8487,  2259,  1157,  -703,  8313,
    1157,   640,  1157,  1629,  1157,  1589,  1157,  1598,  -703,  1157,
    1599,  1157,  1601,  8381,  8123,  -703,  2422,  1157,  -703,  8123,
    2468,  2468,  -703,  1157,  -703,  2468,  -703,  2468,  -703,  2422,
    -703,  -703,  2422,  -703,  2422,  -703,  1157,  2259,   541,  1157,
    1157,  1157,  3070,  3487,  3905,  1425,  1157,  1157,  4326,  1610,
    -703,  4326,  1611,  -703,  -703,  -703,  1615,  1157,  1157,  1157,
    1157,  -703,  1602,  1603,  7741,  -703,  -703,  -703,  1634,  -703,
    -703,  1641,  -703,  1157,  1157,  1157,  -703,  1591,  -703,   939,
    1593,  -703,  -703,  1592,  1689,   603,  -703,  1595,  -703,  1606,
    -703,  1157,  1157,  1157,  1607,  -703,   607,  1724,  1608,  -703,
     676,   678,  1157,  1157,  1157,  -703,  -703,  1614,  -703,   961,
    1688,   969,  1613,  -703,   856,  1728,  1636,  -703,   695,   705,
    1157,  1157,  1157,  1157,   837,  1157,   861,  1157,  1671,  8526,
    7917,  1157,  1157,  1157,  -703,  -703,  1604,  -703,  1616,   325,
    -703,  1617,   370,  -703,   374,  1619,  -703,   127,   393,  1620,
    -703,   144,  -703,  -703,  1231,  1674,  1231,  1328,  1328,   894,
    1328,  1328,  1328,  -703,   186,   186,   186,  1677,  -703,  1631,
    -703,  -703,  1632,  -703,  1640,  -703,  -703,   397,  1642,  -703,
     186,  1645,  -703,  -703,   404,  1646,  -703,  -703,  1231,  -703,
    1157,  1157,  1157,   112,   116,  1071,  1653,  1707,  3741,  -703,
    3513,  1157,  1172,  -703,  1157,  -703,   499,  6970,   499,  6970,
    6970,  6970,  -703,  1157,  7491,  -703,  1653,  1653,  1720,  8062,
    -703,  -703,  1157,  1235,  1157,  1264,  -703,  -703,   707,   307,
     712,  1186,  1653,  4854,  6996,  -703,  -703,  1157,  1352,  1157,
    1372,  -703,  -703,  1647,  -703,   993,  1734,  1003,  1157,  1157,
    1157,  3532,  1157,  1157,  3544,  1157,  7311,  -703,  -703,  1157,
    1731,  1157,  1683,  1672,  -703,  1032,  1759,  1055,  1673,  -703,
     902,  1797,  1675,  -703,   723,   725,  1096,   753,  1765,  1110,
     817,  1766,   728,   377,   730,  1214,   758,   399,   774,  1334,
    -703,  1157,  -703,  1157,  -703,  1157,  -703,  -703,  -703,  -703,
    1789,  -703,  1790,  2713,  -703,  -703,  -703,  1794,  -703,  -703,
    -703,  5693,  -703,  5693,  -703,  -703,  -703,  5693,  -703,  5693,
    -703,  5693,  -703,  5693,  -703,  5693,  5693,  -703,  5693,  -703,
    5693,  -703,  5693,  5693,  -703,  -703,  -703,  5693,  -703,  5693,
    1157,  1157,  1157,  1157,  1157,  1157,  1157,  1157,  1157,  1157,
    1157,  1157,  1157,  1269,  1269,  1269,  1269,  1157,  1157,  1157,
    1157,  1157,  1157,  1157,  1157,  1157,  1157,  1157,  1157,  1157,
    1157,  1157,  8419,  1753,  2422,  -703,  8123,   924,  2468,  1157,
    -703,  -703,  1774,  2422,  -703,  -703,  -703,  -703,  1157,  1157,
    1157,  1157,  3620,  -703,  3905,  1157,  1729,  -703,  4326,  1730,
    -703,  -703,  1157,  1157,  -703,  -703,  1716,  -703,  -703,  1157,
    -703,  1698,  -703,  -703,  -703,  1697,  1700,  1798,  -703,  -703,
    1157,  -703,  1704,  1803,   907,  -703,  1708,  -703,  1709,  -703,
    1157,  -703,  1719,  -703,  1122,  1725,  -703,  -703,  1722,  1821,
    1012,  -703,  1726,  -703,  1733,  -703,  1157,  1157,  1157,  1157,
    1157,  1157,  1795,  1796,  8526,  -703,  -703,  1712,  -703,  -703,
    1714,  -703,  1727,  -703,  -703,   425,  1737,  -703,  1740,  -703,
    -703,   427,  1741,  -703,  -703,  1231,  -703,  1328,  1328,  1328,
    1328,   186,  -703,  -703,  -703,  -703,  1743,  -703,  -703,  -703,
    1745,  -703,  -703,  -703,  1157,  1157,  1157,  1157,  1414,  1157,
    1626,  1157,  6868,  1814,  -703,  1157,  1157,   499,   499,   499,
    6970,   499,  6970,  -703,  1157,  1825,  1157,  1157,  1157,  1157,
    1747,  1717,  1111,  1873,  1750,  1739,   794,   803,  1157,  4904,
    1157,  1157,  1157,  1157,  -703,  1757,  -703,  1129,  1772,  -703,
    1157,  1157,  1157,  1157,  1157,  1157,  -703,  1157,  1157,  1157,
    1157,  -703,  1773,  -703,  1154,  1775,  -703,  -703,  1776,  1868,
    1158,  -703,  1779,  -703,  1780,  -703,  1785,  -703,  1165,  1872,
    1174,  1791,  -703,  1206,  1875,  1210,  1788,  -703,  1179,  1915,
    1802,  -703,   878,   893,  1805,  -703,  1257,  1919,  1811,  -703,
     974,  1010,  -703,  -703,  -703,  1905,  -703,  -703,  -703,  -703,
    -703,  -703,  -703,  -703,  5693,  -703,  5693,  -703,  -703,  -703,
    5693,  -703,  5693,  -703,  -703,  1157,  1157,  1157,  1157,  1157,
    1157,  1157,  1157,  1157,  1157,  1157,  1157,  1864,  -703,  1157,
     963,  1157,  1886,  1157,  1157,  1157,  -703,  -703,  1851,  -703,
    -703,  -703,  -703,  -703,  1817,  -703,  1820,  1822,  1917,  -703,
    -703,  -703,  1828,  -703,  -703,  -703,  1827,  1830,  1924,  -703,
    -703,  1157,  1157,  1157,  1157,  1157,  1908,  -703,  -703,  -703,
    1824,  -703,  -703,  -703,  1826,  -703,  -703,  -703,  1328,  -703,
    -703,  1157,  1157,  1157,  1157,  1157,  -703,  6868,  6868,  1157,
     499,   499,  1157,  1157,  1157,  1157,  1829,  1843,  1943,  1286,
    1833,  1849,  1835,  1876,  1847,  1157,  1157,  1157,  1157,  -703,
    1853,  -703,  -703,  1157,  1157,  1157,  1157,  -703,  1880,  -703,
    -703,  -703,  1879,  1881,  1976,  -703,  -703,  -703,  1888,  -703,
    1222,  1893,  -703,  -703,  1896,  -703,  1225,  1897,  -703,  -703,
    1884,  1992,  1301,  -703,  1901,  -703,  1902,  -703,  -703,  1904,
    2005,  1307,  -703,  1910,  -703,  1911,  -703,  -703,  -703,  -703,
    -703,  -703,  1157,  1157,  1157,  1157,  1157,  1157,  1157,  1157,
    -703,  -703,  -703,  -703,  1916,  -703,  -703,  -703,  1918,  1157,
    1157,  1157,  -703,  -703,  1157,  1157,  -703,  -703,  6868,  1157,
    1891,  1922,  1929,  2026,  1921,  1923,  1157,  -703,  -703,  -703,
    -703,  1932,  -703,  1933,  -703,  -703,  -703,  1938,  -703,  -703,
    -703,  1945,  1948,  2045,  -703,  -703,  -703,  1950,  1955,  2052,
    -703,  -703,  1157,  1157,  1157,  -703,  -703,  1157,  -703,  1936,
    1939,  1964,  -703,  -703,  -703,  -703,  -703,  1966,  -703,  -703,
    1968,  1953,  -703,  -703
};

  /* YYDEFACT[STATE-NUM] -- Default reduction number in state STATE-NUM.
     Performed when YYTABLE does not specify something else to do.  Zero
     means the default is an error.  */
static const yytype_uint16 yydefact[] =
{
      70,     0,     0,   392,   574,   573,   950,   957,   940,   952,
     938,     0,     0,     0,   953,   396,     0,    92,     0,     0,
     278,     0,     0,     0,     0,     0,   299,    70,     0,   142,
       0,   955,   961,     0,   440,     0,   234,   567,     0,     0,
       0,     0,    70,    70,   948,     0,     0,   951,   416,   295,
     301,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   158,     0,    70,     0,
      66,    68,    71,    73,    69,    93,    95,   102,   103,   105,
     112,    96,   145,   127,   153,   154,   159,   162,   169,   172,
       0,   179,     0,   196,   198,   207,   210,   212,   211,   215,
     213,   216,   217,   214,     0,   218,   237,   240,   250,   255,
     265,   268,   270,   272,   275,   276,   289,   146,   335,   336,
     339,   340,   180,   350,   351,   356,   358,   359,   370,   380,
     386,   389,   397,   410,   413,   414,   415,   417,   418,     0,
     148,   147,   140,     0,   566,     0,   570,   137,   139,    70,
      70,     0,     0,     0,   736,   738,   737,   756,    70,   891,
     892,   893,   894,   895,   896,   897,     0,   937,    70,   944,
     946,    70,    70,    72,   959,     0,     0,     0,     0,     0,
     468,     0,   391,   949,   939,   230,   220,     0,     0,     0,
       0,     0,     0,   943,   394,   395,     0,     0,    89,     0,
     432,     0,     0,     0,     0,     0,     0,     0,     0,   277,
       0,     0,   328,   331,     0,   334,     0,     0,   325,     0,
       0,     0,   575,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   528,     0,   542,
       0,   476,   475,   479,   481,     0,   497,   507,   510,   484,
     529,   535,   540,     0,     0,     0,     0,   298,     0,     0,
       0,     0,   195,   353,     0,   141,   434,     0,     0,     0,
     160,     0,     0,     0,     0,   439,   438,   412,     0,   233,
     428,     0,     0,   906,     0,     0,     0,     0,     0,     0,
       0,     0,    70,   947,     0,     0,     0,     0,     0,     0,
     294,   300,   584,     0,     0,   592,     0,     0,   731,     0,
       0,     0,     0,     0,     0,     0,     0,   720,     0,     0,
       0,     0,   756,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   814,     0,     0,   857,     0,     0,     0,
       0,   836,     0,   885,   846,   874,   877,   887,   832,   822,
       0,     0,     0,     0,   829,   838,   826,     0,   859,   850,
     852,   878,   880,   889,   828,     1,     0,     4,     3,    67,
      74,     0,   100,    99,     0,   107,     0,   113,   104,     0,
       0,     0,     0,     0,     0,   184,   178,     0,     0,   144,
     150,   155,   156,   157,   197,     0,     0,     0,   232,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   267,
     269,     0,     0,   357,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   390,     0,     0,     0,     0,   271,     0,
     470,   568,   569,   280,   571,   572,   136,   138,    65,    70,
      64,    70,     0,   218,     0,     0,   224,    70,   222,   221,
     349,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   755,    61,    70,    70,   890,   924,     0,     0,     0,
       0,   942,   936,    56,    70,    70,    70,   945,   954,    36,
      70,    70,    70,    70,    70,   956,    46,    70,    70,    70,
     960,   958,   464,     0,     0,     0,   466,   467,   229,   228,
     219,     0,     0,   754,     0,   393,   344,     0,     0,   430,
     431,     0,     0,     0,   193,   422,     0,     0,     0,   327,
       0,   288,   330,   329,   323,   332,   333,     0,     0,   321,
     324,   309,     0,     0,     0,   284,     0,   478,     0,     0,
     491,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   518,     0,     0,     0,     0,     0,     0,     0,   516,
       0,   527,     0,   293,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   544,     0,     0,     0,   297,
     409,     0,     0,   194,   352,     0,   433,     0,   161,   348,
       0,   437,   411,   427,     0,     0,     0,     0,   905,   910,
       0,     0,   576,   927,   135,     0,   474,     0,     0,     0,
     929,   931,     0,     0,     0,   583,   580,     0,   582,   591,
     588,     0,   590,   729,   730,   727,     0,   608,     0,     0,
       0,     0,   660,     0,     0,     0,   656,     0,     0,   718,
     719,   716,     0,     0,     0,     0,   722,   735,     0,     0,
     723,     0,     0,     0,     0,     0,     0,     0,    91,    90,
      86,     0,     0,     0,     0,   226,   925,   926,   424,   426,
       0,   808,   812,   855,   856,   881,   811,   853,     0,     0,
       0,     0,     0,   834,   835,   813,   884,     0,   842,   844,
     873,   871,   865,   876,   868,   886,   831,   821,   818,   820,
       0,     0,     0,   770,     0,     0,   774,     0,     0,   790,
       0,   827,   825,   837,   824,     0,     0,   806,     0,     0,
     858,   848,     0,   879,   888,     6,     5,    94,   101,    97,
      98,     0,   106,     0,     0,   114,   168,     0,     0,     0,
       0,     0,   183,   182,   152,     0,   143,   149,     0,     0,
       0,   209,     0,   236,     0,   239,     0,   245,   243,     0,
     241,   254,     0,   252,     0,     0,     0,   256,   338,     0,
     355,     0,     0,     0,     0,   364,   363,     0,   361,     0,
       0,     0,   371,   382,     0,   388,     0,     0,     0,     0,
     436,   456,     0,   448,     0,   274,   469,   279,    63,    62,
       0,     0,     0,     0,     0,   223,     0,    70,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   742,
     746,     0,   740,   744,     0,   750,   757,     0,   748,   758,
       0,    60,    70,    59,    70,   923,     0,     0,   914,     0,
     922,     0,     0,   941,    55,    70,    54,    70,    51,    70,
      70,    35,    70,    34,    70,    31,    70,    70,    26,    70,
      70,    70,    16,    70,    70,    70,    45,    70,    44,    70,
      41,    70,    70,   463,   460,   462,     0,   465,   227,   753,
     752,   343,   342,   429,     0,   192,   421,     0,   191,   420,
     326,   287,   322,   286,   319,   320,   308,   307,   305,     0,
     283,   282,     0,     0,     0,     0,   477,   556,   492,     0,
     514,     0,   561,     0,   522,     0,   552,     0,   517,   526,
       0,   548,     0,     0,     0,   515,     0,   292,   480,     0,
       0,     0,   502,   490,   501,     0,   499,     0,   509,     0,
     530,   539,     0,   537,     0,   541,   543,     0,     0,   291,
     296,   408,   406,   403,     0,     0,   347,   346,     0,     0,
     904,     0,     0,   901,   909,   908,     0,   134,   133,   473,
     472,   935,     0,     0,     0,   928,   930,   579,   578,   581,
     587,   586,   589,   728,   725,   726,   607,     0,   604,     0,
       0,   606,   659,     0,     0,     0,   655,     0,   658,     0,
     654,   717,   714,   715,     0,   648,     0,     0,     0,   644,
       0,     0,   721,   733,   734,   757,   758,     0,   616,     0,
       0,     0,     0,   672,     0,     0,     0,   668,     0,     0,
      88,    87,    83,    85,     0,    84,     0,    80,     0,     0,
       0,   225,   423,   425,   807,   854,     0,   810,     0,     0,
     762,     0,     0,   766,     0,     0,   782,     0,     0,     0,
     798,     0,   833,   845,     0,   840,     0,   872,   864,   870,
     862,   875,   867,   830,   819,   817,   816,   883,   769,     0,
     768,   773,     0,   772,     0,   788,   789,     0,     0,   786,
     823,     0,   804,   805,     0,     0,   802,   849,     0,   851,
     111,   109,   126,     0,     0,     0,   167,     0,     0,   171,
       0,   177,     0,   173,   181,   151,   206,     0,   204,     0,
       0,     0,   208,   235,     0,   238,   244,   242,     0,     0,
     253,   251,   264,     0,   260,     0,   337,   354,     0,     0,
       0,     0,   365,     0,     0,   362,   360,   379,     0,   375,
       0,   381,   387,     0,   600,     0,     0,     0,   435,   454,
     455,   452,   446,   447,   444,   273,     0,   266,   385,   189,
       0,   131,     0,     0,   624,     0,     0,     0,     0,   684,
       0,     0,     0,   680,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     741,   745,   739,   743,   749,     0,   747,    58,    57,   912,
       0,   920,     0,     0,   913,   921,   918,     0,    53,    52,
      50,    70,    49,    70,    33,    32,    30,    70,    29,    70,
      25,    70,    24,    70,    21,    70,    70,    15,    70,    14,
      70,    11,    70,    70,    43,    42,    40,    70,    39,    70,
     459,   461,   458,   751,   341,   190,   419,   285,   318,   306,
     304,   303,   281,   493,   495,   494,   496,   555,   554,   513,
     512,   560,   559,   521,   520,   551,   550,   525,   524,   547,
     546,   488,     0,     0,     0,   483,     0,     0,     0,   489,
     500,   498,     0,     0,   538,   536,   557,   508,   290,   407,
     405,   402,   400,   384,     0,   345,     0,   903,     0,     0,
     900,   907,   132,   471,   934,   933,     0,   577,   585,   724,
     603,     0,   602,   605,   664,     0,     0,     0,   657,   653,
     713,   647,     0,     0,     0,   643,     0,   646,     0,   642,
     732,   615,     0,   612,     0,     0,   614,   671,     0,     0,
       0,   667,     0,   670,     0,   666,    82,    79,    81,    78,
      77,   317,     0,     0,     0,   809,   761,     0,   760,   765,
       0,   764,     0,   780,   781,     0,     0,   778,     0,   796,
     797,     0,     0,   794,   841,     0,   843,   863,   869,   861,
     866,   815,   882,   767,   771,   787,     0,   784,   785,   803,
       0,   800,   801,   847,   110,   108,   125,   122,     0,   118,
       0,   124,     0,     0,   170,   176,   175,   205,   203,   202,
       0,   200,     0,   231,   249,     0,   263,   262,   259,   258,
       0,   672,     0,     0,     0,   668,     0,     0,   369,     0,
     378,   377,   374,   373,   599,     0,   596,     0,     0,   598,
     453,   450,   451,   445,   442,   443,   185,   188,   187,   130,
     129,   623,     0,   620,     0,     0,   622,   683,     0,     0,
       0,   679,     0,   682,     0,   678,     0,   632,     0,     0,
       0,     0,   640,     0,     0,     0,     0,   696,     0,     0,
       0,   692,     0,     0,     0,   708,     0,     0,     0,   704,
       0,     0,   911,   919,   916,     0,   917,    48,    47,    28,
      27,    23,    22,    20,    70,    19,    70,    13,    12,    10,
      70,     9,    70,    38,    37,   457,   302,   553,   511,   558,
     519,   549,   523,   545,   487,   486,   565,     0,   482,   506,
       0,   534,     0,   404,   401,   399,   383,   902,     0,   899,
     932,   601,   663,   662,     0,   652,     0,     0,     0,   645,
     641,   611,     0,   610,   613,   676,     0,     0,     0,   669,
     665,    76,    75,   316,   315,   313,     0,   759,   763,   779,
       0,   776,   777,   795,     0,   792,   793,   839,   860,   783,
     799,   121,   120,   117,   116,   123,   166,     0,     0,   174,
     201,   199,   248,   247,   261,   257,   671,     0,     0,     0,
     667,     0,   670,     0,   666,   368,   367,   376,   372,   595,
       0,   594,   597,   449,   441,   186,   128,   619,     0,   618,
     621,   688,     0,     0,     0,   681,   677,   631,     0,   628,
       0,     0,   630,   639,     0,   636,     0,     0,   638,   695,
       0,     0,     0,   691,     0,   694,     0,   690,   707,     0,
       0,     0,   703,     0,   706,     0,   702,   915,    18,    17,
       8,     7,   485,   564,   563,   505,   504,   533,   532,   398,
     898,   661,   651,   650,     0,   609,   675,   674,     0,   314,
     312,   311,   775,   791,   119,   115,   165,   164,     0,   246,
     676,     0,     0,     0,   669,   665,   366,   593,   617,   687,
     686,     0,   627,     0,   626,   629,   635,     0,   634,   637,
     700,     0,     0,     0,   693,   689,   712,     0,     0,     0,
     705,   701,   562,   503,   531,   649,   673,   310,   163,   675,
     674,     0,   685,   625,   633,   699,   698,     0,   711,   710,
       0,   673,   697,   709
};

  /* YYPGOTO[NTERM-NUM].  */
static const yytype_int16 yypgoto[] =
{
    -703,  -703,  -703,  1024,  3270,  -703,  -703,  2033,  2041,  1742,
    -703,  1744,   -59,  -703,  -703,   954,  -703,  -703,  1751,    72,
       8,  -703,  -703,   -26,  -352,  -703,  -703,  -328,  -703,  -703,
    -703,  -677,    48,   -22,   -66,  -702,   110,  -703,  -703,  -703,
    -703,  -703,  -703,  -703,   351,  -703,  -395,   181,  -703,  1871,
    -703,  -703,  -373,  1862,  1317,  -703,  -703,  -703,    63,  -703,
    -703,  -703,    45,  -104,  -703,    21,  -703,  -398,  -703,  -703,
    1931,   326,  -396,   -14,  -119,   -64,  -703,  -341,  1878,  -412,
    -703,  -408,   668,  -703,  -703,  -703,  -703,  -703,  -703,  -703,
    -703,  1995,   -50,  4147,    10,  -703,  -703,  -556,  -197,  -220,
    -223,  -135,  -703,  -243,  1183,    18,    50,  -703,  -703,  -478,
    1180,    85,  -703,  3987,   579,   -78,    73,  -191,  1070,  1077,
     106,  1524,  1181,    -1,   349,  -247,   613,  -703,  -159,   283,
     509,  1799,  1800,  -306,  -316,  -298,  1787,  -255,  -238,  1807,
    -322,  -326,  -359,  -256,  -284,  1430,  2653,  -703,  -233,  -703,
    -703,  -703,  -703,  -703,  -703,  -703,  1958,  2121,   995,  -703,
     271,   -17,  -703
};

  /* YYDEFGOTO[NTERM-NUM].  */
static const yytype_int16 yydefgoto[] =
{
      -1,    67,    68,    69,    70,    71,    72,    73,    74,    75,
     373,    76,    77,    78,   375,    79,   377,    80,    81,    82,
      83,    84,    85,   442,    86,   381,    87,    88,   384,    89,
      90,   386,    91,    92,    93,    94,    95,    96,    97,    98,
      99,   100,   101,   102,   103,   104,   398,   105,   106,   403,
     760,   107,   108,   408,   109,   110,   111,   112,   113,   114,
     115,   116,   211,   212,   213,   117,   118,   119,   120,   121,
     122,   123,   124,   125,   126,   566,   775,   127,   420,   128,
     129,   130,   131,   132,   133,   134,   135,   136,   137,   138,
     139,   140,   141,   176,   240,   241,   242,   243,   244,   541,
     902,   245,   932,   246,   247,   248,   249,   940,   250,   251,
     252,   143,   144,   145,   146,   147,   148,   426,   568,   648,
     320,   569,   649,   151,   152,   801,   153,   154,   155,   156,
     157,   351,   352,   353,   354,   355,   356,   357,   358,   359,
     360,   361,   362,   363,   364,   461,   159,   160,   286,   161,
     162,   163,   164,   165,   166,   167,   168,   169,   170,   171,
     172,   173,   174
};

  /* YYTABLE[YYPACT[STATE-NUM]] -- What to do in state STATE-NUM.  If
     positive, shift that token.  If negative, reduce the rule whose
     number is the opposite.  If YYTABLE_NINF, syntax error.  */
static const yytype_int16 yytable[] =
{
     177,   177,   723,   537,   754,   205,   413,   271,   928,   783,
     177,   272,   577,   768,   785,   177,   770,   282,   206,   692,
     694,   177,   689,   378,   254,   567,   394,   177,   206,   404,
     540,   761,   763,   697,   681,   767,   744,   721,   177,   177,
     712,   270,   214,   220,   254,   224,  1116,  1118,   540,   595,
     367,   718,   597,   277,   738,   294,   741,   371,   713,   572,
     272,  1109,   415,   633,  1113,   699,   725,   204,   387,   223,
     711,  1087,   714,  1033,   650,   776,   778,   262,   337,   782,
     670,   675,   397,   317,   210,   682,   413,   210,  1035,   177,
    1111,   177,  1132,   543,   941,   943,   945,  1046,   710,   302,
     557,   677,  1006,   399,  1134,   269,   519,   564,   724,  1088,
     523,   175,   180,   425,   701,   631,  1147,   272,   626,   704,
     523,   720,   987,  1149,  1407,   493,   196,  1067,  1409,   272,
     496,   297,   409,   410,  1094,   661,   308,   673,  1048,   183,
     702,   683,   318,   635,  1375,   705,   324,   270,   329,   331,
     634,    52,   177,   406,   379,  1051,   184,   407,   421,   270,
     382,  1381,  1079,   616,  1049,   177,   422,   380,   674,   293,
     632,   627,  1095,   303,   205,   988,   177,   177,   177,   319,
     177,  1052,  1376,   671,   272,   684,   177,   468,   309,  1007,
    1082,   660,   186,   304,   518,   800,   177,   802,   636,  1382,
    1047,    65,   206,   219,   748,   428,   394,   206,   368,   259,
    1024,   269,  1089,   405,   270,   177,   394,   703,    65,   177,
     177,   287,   706,   269,   726,   254,   254,   780,   254,   254,
     177,   520,  1180,    65,   522,    65,   323,    65,   528,   428,
     547,  1050,   534,   588,   254,   427,   224,   272,   590,    65,
     551,   262,   272,   254,   559,   254,   517,   617,  1053,   177,
     206,    65,   527,   596,   206,  1080,   578,   628,    65,    65,
     536,   177,   177,    65,  1019,  1096,   538,   270,   269,   545,
     210,   177,   270,   177,   177,  1377,   177,   177,   210,   495,
     343,   497,   218,  1083,   254,   254,   592,  1025,   819,   822,
     825,   828,  1383,  1084,   576,   607,   608,   507,   347,   262,
     993,   325,   424,   583,   319,   904,   906,   629,  1432,  1181,
     378,   394,   909,   757,  1020,   934,   936,   938,   765,   947,
     948,   394,   443,   723,   449,   723,    65,   923,   954,   321,
     326,   269,   350,     8,   908,   540,   269,   467,    10,   415,
    1102,   994,   371,   733,    12,   733,   573,   272,   494,   449,
     540,   959,    17,   962,  1068,  1070,  1065,  1072,   500,  1091,
     908,  1136,  1151,  1285,   255,  1137,  1061,   397,  1152,   267,
    1367,   206,  1075,   206,   613,  1107,   177,   206,  1488,  1130,
    1168,  1131,   327,  1115,   255,   177,   177,   525,   177,   413,
     713,   532,   533,   177,   177,  1433,  1085,   177,   328,   911,
    1496,  1110,   549,  1074,  1076,  1417,   890,  1418,  1419,  1421,
      39,   755,    40,   924,   523,  1370,  1057,    42,  1090,  1372,
     929,   205,   662,  1414,   910,   700,  1145,   470,  1146,   838,
      46,   581,   484,   724,   206,   876,   637,   877,  1378,  1063,
     720,   379,  1396,   736,   449,   724,   740,    16,   724,  1400,
      59,    60,     4,     5,  1294,   449,  1295,    32,   600,   601,
     313,   424,  1092,   319,    63,  1489,   620,    65,   365,   450,
    1580,  1097,  1584,  1368,  1099,   524,   638,   518,   529,  1456,
     839,   841,   372,   803,  1010,    65,    33,  1497,   471,   314,
     374,   749,  1155,   472,   448,   376,   751,  1124,   758,    23,
     315,   206,   206,   766,    54,   206,    55,   450,   396,   690,
     773,   337,    57,   383,   414,   781,   400,  1037,  1371,   448,
     394,   621,  1373,   177,  1011,   395,   254,   254,   254,     8,
     254,   254,  1303,  1103,    10,   254,   642,   254,   997,   177,
    1209,  1379,  1156,    41,   707,  1397,   254,   316,   915,  1120,
     204,   583,  1401,   254,   803,   322,   254,   336,    16,   337,
     918,   254,   254,   254,   990,   643,   255,   255,   925,   255,
     443,   206,   411,  1581,   255,  1585,   644,   903,   905,   538,
     450,   255,   708,   228,   255,   177,   913,   275,   999,   450,
     177,     1,   222,   998,   255,   255,   691,    33,   254,   663,
     450,   254,   230,   339,   178,   178,    39,   587,    40,   972,
     232,   233,   973,    42,   448,   191,   305,   991,  1004,   178,
     583,   201,   207,   645,   191,   448,    46,   191,  1017,   236,
    1175,  1008,   264,  1326,   255,   255,   273,  1332,   451,   344,
     452,   345,   284,  1000,   346,  1022,   453,   454,   455,   456,
     237,   306,  1200,   177,     2,  1202,  1026,   394,  1204,     6,
      63,  1206,   430,   433,  1028,     4,     5,     9,   503,   506,
     904,   307,   904,  1005,  1327,  1039,   200,  1178,  1333,    14,
    1176,  1018,  1290,  1270,  1291,   709,  1009,  1153,   266,  1182,
     336,   514,   337,   178,  1282,   178,   280,   531,  1304,   723,
    1023,   723,   908,   723,  1029,   899,   387,   178,  1600,   387,
    1601,  1027,    23,   432,   435,  1306,   908,   540,  1309,  1423,
    1538,   917,   177,     4,     5,  1596,   206,   177,   206,   837,
     177,  1387,  1179,  1389,   206,  1390,   687,   177,   177,   434,
    1154,   177,   273,   602,  1183,   191,  1413,  1336,   177,  1338,
    1143,   177,    44,   177,   273,   191,    41,  1263,  1264,  1265,
    1266,   516,    47,    54,  1166,    55,  1352,  1125,   272,   191,
      23,    57,   966,   414,   345,   521,  1354,   346,  1430,   191,
     518,  1391,   178,  1434,   178,  1286,  1287,     4,     5,   894,
     177,  1478,   191,   206,  1472,   191,  1474,   434,   270,  1486,
     178,  1490,  1337,   654,  1339,   511,   207,   562,   724,   273,
     724,   207,   535,   191,    41,   565,  1384,   191,  1386,   191,
     191,  1353,   435,   563,   724,   322,  1173,   191,   191,  1494,
    1104,  1355,   655,  1431,    23,  1038,   191,   191,  1435,  1357,
     337,  1479,  1170,   656,   667,  1498,  1121,  1210,  1212,  1473,
    1403,  1475,  1122,  1217,  1487,  1483,  1491,   266,   435,   509,
     510,   434,   269,  1359,   264,  1611,   579,   435,   264,   418,
     191,   419,   273,   206,  1613,   178,   206,   273,    41,  1174,
     255,   255,  1546,   255,  1495,   284,  1348,   255,   284,  1071,
     657,   254,   254,   254,   254,   254,   255,   255,   254,   435,
    1499,   435,   580,   255,   255,  1484,   255,   255,   255,   255,
    1696,  1697,   254,   254,    16,   254,   337,     3,   254,     8,
    1612,   811,   517,  1216,    10,  1170,   586,  1349,   254,  1614,
    1128,   254,  1468,   254,  1034,  1036,   254,  1557,   693,   593,
     337,    16,   903,   905,   903,   905,   903,    15,   255,  1654,
     812,   255,    18,    33,   598,   188,   820,   823,   826,   829,
     451,   813,   452,   254,  1656,  1388,  1283,  1539,   453,   454,
     455,   456,   603,  1469,  1316,   589,    28,  1184,  1558,  1292,
      33,   189,    30,  1138,   451,   264,   452,   264,    34,    35,
     178,   264,   453,   454,   455,   456,    39,  1192,    40,   178,
     178,    38,   178,    42,  1655,   604,  1676,  1105,   814,  1106,
    1321,  1738,  1139,  1112,   413,   341,    46,  1185,   723,  1657,
     723,   723,   606,  1140,   715,   343,  1193,    48,   177,   177,
    1126,  1127,  1342,     4,     5,    53,   610,  1194,  1133,  1135,
    1345,   258,  1567,   347,   348,  1663,  1142,    54,   207,    55,
      63,  1364,  1588,  1148,  1150,    57,   290,   414,    64,   485,
     149,     8,   716,  1322,  1445,  1548,    10,     8,   615,   618,
    1141,   191,    10,  1411,  1448,   908,  1054,   350,   387,   619,
      23,  1665,   366,  1568,  1195,  1343,    54,   149,    55,   336,
     622,   337,   397,  1346,    57,   669,   414,   206,   625,   177,
    1664,   341,   149,  1462,   630,   191,   177,   434,   177,   177,
     177,   343,   641,   177,  1055,   207,   207,  1446,   177,   207,
    1439,     4,     5,   191,    41,   724,  1465,  1449,   149,   347,
     348,   191,   349,   646,   387,   339,  1666,  1587,    39,   194,
      40,  1607,     3,  1540,    39,    42,    40,  1015,  1016,     7,
    1069,    42,   337,  1058,   477,   177,  1463,   191,    46,   191,
     322,   322,    12,   350,    46,   717,   586,  1476,    23,   883,
       8,   344,    15,   345,  1416,    10,   346,    18,   477,  1466,
     188,  1481,  1608,   435,   664,   264,   416,  1436,  1633,   665,
     191,  1059,    63,  1562,   451,    37,   452,   191,    63,   284,
    1620,    28,   453,   454,   455,   456,   189,    30,   668,  1650,
    1362,  1363,    41,    34,    35,  1492,   672,  1056,   463,   723,
    1477,   457,   666,   459,  1505,  1628,    38,  1437,   474,  1634,
     341,   480,   487,   322,  1482,   322,  1638,  1427,   676,   322,
     343,   255,   255,   255,   255,  1641,  1563,    39,   255,    40,
    1651,   336,    48,  1621,    42,  1493,   322,   322,   347,   348,
      53,   349,   255,   255,   322,   322,  1429,    46,   255,   255,
     255,   254,   322,   254,   255,   254,   255,  1644,  1629,   322,
     322,  1647,   254,    64,   485,    65,     8,  1659,   685,  1639,
     840,    10,   350,  1713,  1060,   451,  1717,   452,  1642,   686,
    1425,    63,     8,   453,   454,   455,   456,    10,    16,   310,
     413,   695,   575,   255,     4,     5,  1702,     4,     5,   732,
    1201,   735,   696,  1203,  1537,   458,  1205,   460,  1660,  1205,
    1645,  1722,   651,  1542,  1648,  1500,   178,  1728,    37,   311,
     264,   178,   264,   787,   178,   722,  1714,    33,   264,  1718,
     337,   178,   178,   177,  1441,   178,   731,  1703,   451,   312,
     452,    23,   652,    39,    23,    40,   453,   454,   455,   456,
      42,    52,  1723,   788,  1443,  1501,  1408,  1410,  1729,    39,
     387,    40,   653,    46,  1196,   658,    42,   451,   434,   452,
     734,   431,    54,   789,    55,   453,   454,   455,   456,    46,
      57,   177,   414,   273,   333,    41,   737,   207,    41,   177,
      51,   177,   424,  1197,   319,   678,  1592,    63,   492,     2,
     158,   179,   181,   182,  1198,   875,     2,   319,   336,   759,
     337,   187,   192,    63,   774,   195,   197,   198,   202,   208,
     209,   217,   221,   772,   225,   256,   257,   158,   260,   265,
     268,   790,   424,   274,   276,   278,   279,   647,   281,   285,
     288,   795,   158,   292,   815,   295,   299,   816,   817,   300,
     301,  1199,   818,   416,   339,   451,     8,   452,   808,  1186,
     843,    10,   835,   453,   454,   455,   456,   207,   158,   880,
     207,    54,   341,    55,   874,   451,   342,   452,   882,    57,
    1189,    58,   343,   453,   454,   455,   456,   888,   809,  1187,
     344,   336,   345,   337,   150,   346,   897,   893,   898,   901,
     347,   348,   931,   349,   914,     4,     5,   916,   810,  1188,
    1190,   912,   919,     8,   623,  1576,   849,   451,    10,   452,
     921,   150,   856,   859,   863,   453,   454,   455,   456,   871,
    1191,   926,   939,    39,   350,    40,   150,   719,   949,   953,
      42,   191,   957,   960,   191,   387,   387,   436,   437,   439,
     441,   963,    23,    46,   336,   964,   337,   968,   970,   975,
      51,   971,   150,   977,   978,   319,   177,   177,   476,   401,
     979,   482,   489,   402,   491,   345,   980,   981,   346,    37,
     982,   989,   322,   322,     3,   498,   995,    63,   501,   502,
      39,   986,    40,     8,   505,   992,    41,    42,    10,   508,
    1064,   255,    65,   513,    12,   255,   296,   255,  1594,   996,
      46,   424,  1021,   319,    15,  1045,  1044,   401,   530,    18,
     417,   402,   188,  1062,  1066,  1073,   539,   542,   544,   546,
     548,   550,   552,   554,   556,   558,   560,   561,   345,  1077,
    1157,   346,  1098,    28,    63,  1078,   387,  1169,  1171,   199,
    1081,     3,   464,  1177,  1086,    34,    35,  1214,  1093,  1215,
    1252,   582,   475,  1261,  1274,   481,   488,   177,    38,  1272,
      39,    12,    40,  1276,  1278,   591,  1280,    42,     8,  1307,
    1310,    15,    16,    10,  1311,  1317,    18,  1314,  1315,   188,
      46,   264,  1318,   178,    48,  1320,   609,  1323,  1324,  1325,
     178,  1328,   178,   178,   178,  1334,  1344,   178,   624,  1350,
      28,  1361,  1329,  1331,  1335,   189,    30,   640,  1341,  1347,
    1385,    33,    34,    35,    63,    64,    37,    65,  1392,   451,
    1412,   452,  1365,     4,     5,    38,   639,   453,   454,   455,
     456,     8,  1351,  1424,  1366,  1369,    10,  1374,  1380,   178,
     647,  1444,  1447,    45,  1458,    39,   451,    40,   452,  1393,
    1394,    48,    42,  1460,   453,   454,   455,   456,  1395,    53,
    1398,  1100,   728,  1399,  1402,    46,  1461,  1464,  1470,  1467,
      23,  1471,   739,  1480,  1485,   742,  1502,  1503,   745,   746,
     747,  1506,    64,  1536,    65,   750,   752,  1541,  1547,  1549,
     756,  1550,  1551,  1552,   762,   764,  1553,    37,  1554,    63,
    1555,   769,   771,  1556,  1559,  1560,   777,   779,    39,   659,
      40,   784,   786,  1561,    41,    42,   792,   794,  1565,  1564,
     796,  1566,  1569,   797,   612,  1574,  1575,  1598,    46,  1570,
    1577,   451,  1578,   452,  -648,   804,   805,   807,  1603,   453,
     454,   455,   456,  1606,  1609,  1579,  1610,   821,   824,   827,
     830,  1619,     8,   832,   834,  1582,  -644,    10,  1583,  1586,
     842,  1589,    63,  1590,   845,   847,  1622,  1627,  1632,  1630,
     852,   854,  1631,   861,   865,  1635,  1636,   867,   869,  1637,
    1640,   191,   873,  1646,  1649,  1643,  1652,     4,     5,   878,
    1661,  1235,  1667,   879,  1674,  1242,   881,   417,  1653,  1678,
     230,  1658,   884,   190,   885,   886,   887,  1662,   232,   233,
    1680,   891,   215,  1681,   892,   215,  1682,  1684,  1683,   895,
     263,   896,  1685,  1686,  1688,   900,  1687,   236,    20,    39,
     283,    40,    21,    22,    23,    24,    42,    25,  1691,  1700,
      26,    27,  1692,  1701,  1693,  1704,  -647,  1707,   237,    46,
    -643,     3,  -646,   927,   611,   930,     4,     5,   935,   937,
     850,    37,   942,   944,  -642,   946,   857,   860,   864,   950,
     952,   599,  1705,   872,  1708,  1709,  1711,  1710,    41,   956,
    1720,    15,  1712,    63,   958,   178,    18,  1715,    45,   188,
    1716,  1719,  1721,   178,   967,   178,   969,  1724,  1725,    49,
    1726,    50,   974,    23,     3,  1727,  1730,  1731,  -652,    56,
      28,     7,  1735,   983,  1736,   985,   199,   976,  1739,     4,
       5,    61,    34,    35,    12,  1740,  1741,  1743,  1742,  1001,
     434,  1003,  1744,   429,    15,    38,  1012,  1014,  -645,    18,
    -641,  1745,   188,   444,  1746,  1747,  1748,    41,  1030,  1031,
    1032,  1749,  1750,  -651,  1040,  1041,  -650,   469,  1042,  1043,
    1751,    48,  1752,    28,  1753,   370,    23,   429,   189,    30,
    -649,   333,   369,   727,   574,    34,    35,   729,  1167,    37,
     263,   571,   334,   504,   730,   570,   423,  1296,    38,   483,
     335,  1297,    64,   434,   193,   336,   698,   337,     0,   679,
     680,   215,     0,     0,     0,   215,    45,   526,   215,     0,
      41,   688,     0,     0,    48,   215,   215,     0,     0,     0,
     338,     8,    53,     0,   553,   555,    10,  1108,     0,     8,
     485,     0,     8,  1114,    10,     8,  1211,    10,  1117,  1119,
      10,   339,     0,  1123,   340,    64,     0,    65,     0,  1129,
       0,     0,   263,     0,    16,     0,   584,    16,   585,   341,
       0,     0,     0,   342,  1144,     0,     0,     0,     0,   343,
     178,   178,     3,   283,     0,   951,   283,   344,     0,   345,
    1158,  1160,   346,  1163,     0,  1165,     0,   347,   348,   490,
     349,     0,    12,    33,     0,     0,    33,     0,    39,     0,
      40,     0,    15,     0,     0,    42,    39,    18,    40,    39,
      19,    40,    39,    42,    40,  1101,    42,     0,    46,    42,
       0,   350,     0,     0,     0,     0,    46,  1213,     0,    46,
       0,    28,    46,     0,     4,     5,   261,    30,     0,  1221,
    1223,     0,     0,    34,    35,     0,  1227,  1229,     0,  1231,
    1233,     0,    63,  1238,  1240,     0,    38,     0,     0,     0,
      63,  1247,  1249,    63,  1250,  1251,    63,     0,     0,   227,
    1253,   178,  1254,     0,     0,     0,     0,     0,  1255,  1256,
     229,    23,    48,  1257,  1258,     0,     0,  1259,  1260,     0,
      53,  1262,     0,     0,   231,    56,     0,  1267,     3,     0,
    1269,   234,  1271,     0,  1273,     0,  1275,     8,    37,  1277,
       0,  1279,    10,    64,     0,    65,  1284,     0,    12,     0,
       0,  1288,     0,  1289,     0,    41,     0,     0,    15,  1293,
       0,     0,     0,    18,     0,    45,    19,     0,     0,  1298,
       0,  1299,     3,  1302,     0,  1236,     0,  1305,   228,  1243,
     412,  1308,     0,     0,     0,     0,    56,    28,  1312,   836,
    1313,     0,   203,    30,     0,     0,     0,   230,   238,    34,
      35,     0,    15,     0,  1319,   232,   233,    18,     0,     0,
     188,     0,    38,     0,    39,     0,    40,     0,     0,     0,
       0,    42,  1330,   584,   236,     0,     0,     4,     5,     0,
       0,    28,     0,  1340,    46,     8,     0,    30,    48,     0,
      10,   215,     0,    34,    35,   237,    53,     0,     0,   215,
       0,    56,     0,  1356,     0,  1358,    38,  1360,    53,     0,
       0,     0,   227,     0,     0,     0,     0,     0,    63,    64,
       0,    65,     0,   229,    23,   920,     0,   922,     8,     0,
       0,     8,    48,    10,     0,     0,    10,   231,     0,     0,
      53,     0,     0,     0,   234,     0,     0,     0,     0,     0,
       0,    37,     0,   584,     0,     0,     0,     0,   955,     0,
     228,     0,    39,    64,    40,   283,     0,   283,    41,    42,
    1404,  1405,  1406,     0,     0,     0,     0,     0,    45,   230,
       0,  1415,    46,     3,     0,     0,   984,   232,   233,     0,
    1420,  1422,     0,     0,     0,     0,     0,     0,     0,    56,
       0,     0,  1426,    12,  1428,    39,   236,    40,    39,     0,
      40,   238,    42,    15,     0,    42,    63,  1440,    18,  1442,
       0,   188,     0,     0,     0,    46,     0,   237,    46,  1450,
       0,  1452,  1453,     0,  1455,     0,     0,     0,     0,  1457,
      53,  1459,    28,     3,     4,     5,     0,   189,    30,     0,
       0,     0,     0,     0,    34,    35,     0,     0,    11,    63,
       0,     0,    63,    12,     0,     0,     0,    38,     0,     0,
       8,     0,     0,    15,     0,    10,     0,     0,    18,     0,
       0,    19,     0,     0,     0,    20,     0,     0,     0,    21,
      22,    23,    24,    48,    25,     0,     0,    26,    27,     0,
       0,    53,    28,     0,     0,  1514,  1516,   261,    30,     0,
       0,     0,  1520,  1522,    34,    35,    36,     0,    37,     0,
       0,     0,  1525,     8,    64,     0,    65,    38,    10,     0,
       0,  1526,   791,     0,     0,    41,     0,     0,  1527,     0,
    1528,     0,  1529,     0,  1530,    45,  1531,    39,  1532,    40,
    1533,  1534,     0,    48,    42,     0,    49,     0,    50,     0,
       0,    53,   424,     0,   319,     0,    56,    46,     0,     0,
    1543,  1544,     0,     0,     3,     0,     8,     0,    61,     0,
    1504,    10,    62,     0,    64,   793,    65,     0,     0,    66,
       0,     0,     0,     0,    12,     0,     0,     0,    16,     0,
      39,    63,    40,     0,    15,     0,     0,    42,     0,    18,
       0,     0,   188,     0,     0,     0,     0,     0,     0,     0,
      46,     0,     0,     0,     0,     0,     0,  1571,     0,  1572,
       0,  1573,     0,    28,     0,     0,     0,    33,   189,    30,
       0,     0,     0,     0,     0,    34,    35,     0,     0,    37,
       0,   465,     0,    39,    63,    40,     0,     0,    38,     0,
      42,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   465,    46,   465,   465,    45,  1591,     0,  1593,
     465,  1595,  1597,     0,    48,   465,  1599,     0,   465,     0,
     465,   465,    53,     0,  1602,   465,     0,  1604,     0,  1605,
       0,   465,   465,     0,     0,     0,     0,    63,  1615,     0,
     465,  1617,     0,  1618,   465,    64,     0,    65,   465,     0,
       0,  1623,     0,     0,  1624,     0,     0,     0,  1625,   283,
    1626,     0,   283,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   465,
     465,     0,     0,   465,     0,     0,     0,     0,   465,     0,
       0,   465,     0,     0,     0,     0,     0,   465,     0,   465,
       0,   465,   465,     0,   465,     1,     0,     2,   465,     0,
       0,   465,     3,     4,     5,   465,     0,     0,   465,     0,
       0,     0,   465,   465,   465,     0,     0,    11,     0,     0,
       0,     0,    12,     0,     0,  1672,  1673,     0,     0,  1675,
       0,  1677,    15,    16,     0,  1679,     0,    18,     0,     0,
      19,     0,     0,     0,    20,     0,     0,     8,    21,    22,
      23,    24,    10,    25,     0,     0,    26,    27,     0,     0,
       0,    28,     0,     8,  1689,  1690,    29,    30,    10,     0,
       0,     0,    33,    34,    35,    36,     0,    37,     0,     0,
       0,     0,  1694,     0,  1695,     0,    38,     0,  1698,     0,
       0,     0,     0,  1699,    41,     0,     0,    43,     3,     0,
       3,     0,     0,     0,    45,  1002,  1706,     0,     0,     8,
       0,     0,    48,     0,    10,    49,     0,    50,    51,    52,
      53,  1013,     0,     0,    39,    56,    40,     0,    15,     0,
      15,    42,     0,    18,     0,    18,   445,    61,   188,     0,
      39,    62,    40,    64,    46,    65,     0,    42,    66,   465,
     465,     0,   465,     8,   465,     0,     0,    28,    10,    28,
      46,     0,   189,    30,  1732,   199,  1733,     0,  1734,    34,
      35,    34,    35,     0,   465,     0,     0,     0,    63,     0,
       0,  1737,    38,     0,    38,     0,    39,     0,    40,   465,
       0,     0,     0,    42,    63,   465,     0,     0,     0,     0,
       0,     0,   465,     0,   465,     0,    46,  1300,    48,     0,
      48,   465,     0,     0,   465,   465,    53,     0,   465,     0,
       0,   465,     0,     0,     0,     0,   465,     0,     0,     0,
      39,     0,    40,     0,     0,     0,     0,    42,     0,    64,
      63,    64,     0,   465,     8,     0,     0,     0,     0,    10,
      46,     0,   465,     0,     0,   465,     0,   465,     0,   465,
       0,   465,     0,   465,     0,   465,     0,   465,     0,   465,
       0,   465,     0,   465,   465,     0,     0,     0,     0,     0,
       0,     0,    -2,     0,    63,     0,     0,     0,     0,     1,
       0,     2,     0,     0,     0,   465,     3,     4,     5,   283,
       6,     0,  1159,     7,   465,     8,     0,     0,     9,     0,
      10,    11,     0,     0,     0,     0,    12,     0,     0,    13,
      14,    39,   465,    40,     0,     0,    15,    16,    42,    17,
       0,    18,     0,     0,    19,     0,     0,   465,    20,     0,
       0,    46,    21,    22,    23,    24,     0,    25,     0,     0,
      26,    27,     0,   465,     0,    28,     0,     0,     0,     0,
      29,    30,     0,    31,     0,    32,    33,    34,    35,    36,
       0,    37,     0,   291,     0,    63,     0,     0,     0,     0,
      38,     0,    39,     0,    40,     0,     0,     0,    41,    42,
       0,    43,     0,    44,     0,     0,     0,     0,    45,     8,
       0,     0,    46,    47,    10,     0,    48,     0,     0,    49,
       0,    50,    51,    52,    53,    54,     0,    55,     0,    56,
       0,     0,     0,    57,     0,    58,     0,    59,    60,     0,
       0,    61,     0,     0,     0,    62,    63,    64,     0,    65,
       0,   465,    66,     0,     0,     8,     0,     0,     0,     0,
      10,     0,   465,     0,     0,   465,    12,     0,   465,   465,
     465,  1161,     0,   465,     0,   465,     0,     0,     0,   465,
       0,     0,     0,     0,   512,   465,    39,   465,    40,   438,
     440,     0,   465,    42,   465,     0,     0,     0,   462,     0,
     465,     0,   465,     0,     0,     0,    46,   465,   473,   465,
     203,   479,   486,     0,     0,   465,     8,   465,     0,   465,
     465,    10,     0,     0,     0,     0,     0,   465,   465,     0,
     465,     0,    39,     0,    40,     0,     0,     0,     0,    42,
      63,     0,     0,     8,   465,     0,     0,   465,    10,     0,
     465,     0,    46,   465,     0,   465,     0,   465,     0,     0,
       0,     0,     0,     0,     0,   465,     0,     0,   465,    56,
     465,     0,     0,     0,  1162,   465,     0,   465,     0,     0,
       8,     0,     0,     0,   465,    10,    63,     0,   465,    65,
     465,     0,   465,    39,     0,    40,   465,     0,     4,     5,
      42,   465,   465,     0,   465,  1164,     0,   465,   465,   465,
     465,     0,    11,    46,   465,   465,     0,    12,   465,   465,
      39,     0,    40,   465,     0,     8,     0,    42,     0,     0,
      10,     0,   605,     0,  1301,     0,     0,     8,     0,    20,
      46,     0,    10,    21,    22,    23,    24,    63,    25,     0,
     465,    26,    27,   465,     0,     0,     0,    39,   465,    40,
     465,     0,     0,     0,    42,   465,     0,   465,     0,   465,
      36,     0,    37,   465,    63,   465,     0,    46,     0,   465,
       0,   465,     0,  1451,     0,     0,     0,     0,     0,    41,
     465,     0,   465,     0,     0,  1454,   385,   465,     0,    45,
       0,     0,    39,     0,    40,     0,   465,     0,   465,    42,
      49,    63,    50,     8,    39,     0,    40,     0,    10,     0,
      56,    42,    46,     0,   465,     0,   465,     0,     0,     0,
       0,   383,    61,     0,    46,   465,    62,   465,     0,     0,
      65,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   465,   465,   465,    63,     0,     0,     0,
       0,     0,     0,   465,   465,   465,   465,  1545,    63,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   798,
       0,   799,     0,     0,     0,     0,     0,   806,     0,     0,
      39,     0,    40,     0,     0,     0,     0,    42,     0,     0,
       0,     0,     0,   831,   833,     0,     0,     0,     0,     0,
      46,     0,     0,     0,   844,   846,   848,     0,     0,     0,
     851,   853,   855,   858,   862,     3,     0,   866,   868,   870,
       0,   465,     0,     0,     8,     0,     0,   465,     0,    10,
     465,     0,   465,     0,    63,    12,   465,     0,     0,     0,
       0,     0,   465,     0,     0,    15,     0,     0,     0,     0,
      18,     0,     0,    19,     0,     0,     0,   465,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   465,     0,   465,    28,     0,   465,     0,   465,   261,
      30,     0,     0,     0,     0,     0,    34,    35,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    38,
       0,    39,     0,    40,     0,     0,     0,     0,    42,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    46,     0,     0,     0,    48,   465,     0,     0,     0,
       0,     0,     0,    53,   465,     0,   465,     0,    56,     0,
     465,     0,   465,     0,   465,     0,   465,     0,     0,     0,
       0,   465,     0,   465,     0,    63,    64,     0,    65,     0,
     465,     0,   465,   465,   465,     3,   465,   465,   465,   465,
     465,   465,   465,   465,     0,   465,     0,     0,     0,     3,
     465,     0,   465,     0,   465,     0,   465,     0,   465,     0,
     465,     0,   465,     0,     0,    15,     0,   465,     0,     0,
      18,   465,   465,   188,   515,     0,   465,     0,     0,    15,
       0,   465,   465,     0,    18,   465,     0,   188,   465,     0,
       0,   465,     0,     0,    28,   465,   465,     0,     0,     0,
      30,     0,   465,     0,     0,     0,    34,    35,    28,     0,
       0,     0,     0,   465,    30,     0,     0,     0,     0,    38,
      34,    35,     0,   465,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    38,     0,     0,     0,     0,     0,   465,
       0,   465,   253,   465,     0,    48,     0,     0,     0,     0,
       0,     0,     0,    53,     0,     0,     0,     0,   289,    48,
       0,     0,   253,   298,     0,     0,     0,    53,     0,     0,
       0,     0,     0,     0,     0,     0,    64,     0,     0,     0,
     330,   332,     0,     0,     0,     0,     0,   465,   465,   465,
      64,     0,     0,     0,     0,     0,     0,     0,   465,     0,
       0,     0,     0,   465,     0,   465,     0,  1172,     0,   465,
       0,   465,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   465,     0,   465,     0,     0,     0,     0,
       0,     0,  1207,   465,  1208,   465,   465,     0,   465,     0,
     465,     0,   465,     0,     0,  1218,     0,  1219,     0,  1220,
    1222,     0,  1224,     0,  1225,     0,  1226,  1228,     0,  1230,
    1232,  1234,     0,  1237,  1239,  1241,     0,  1244,     0,  1245,
       0,  1246,  1248,     0,     0,     0,     0,   142,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     3,     0,     0,     0,   465,   216,   465,
       0,   216,   239,   465,   142,   465,     0,     0,   465,   465,
     465,   465,   465,   465,   465,   465,   465,   465,     0,   142,
     142,     0,   239,    15,     0,     0,   465,   465,    18,     0,
       0,   188,   889,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   253,   253,   142,   253,   253,   142,     0,
       0,     0,    28,     0,   465,   465,   465,     0,    30,     0,
       0,     0,   253,     0,    34,    35,     0,     0,     0,     0,
       0,   253,     0,   253,   465,     0,   465,    38,   465,     0,
     465,     0,   465,     0,     0,   465,     0,   465,   465,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   465,     0,
     465,   465,     0,    48,     0,     0,   465,   465,   465,   465,
       0,    53,   253,   253,     0,     0,   614,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   142,   142,     0,     0,
       0,     0,     0,     0,    64,   142,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   142,     0,     0,   142,   142,
       0,     0,     0,     0,     0,   465,   465,     0,   465,     0,
     465,     0,   465,     0,     0,     0,     0,     0,     0,     0,
       3,     0,   465,   465,     0,     0,     0,   465,   465,     8,
       0,   465,   465,     0,    10,     0,     0,   216,     0,   465,
      12,   216,     0,     0,   216,     0,     0,     0,     0,     0,
      15,   216,   216,   239,   239,    18,   239,   239,   188,     0,
       0,     0,     0,     0,     0,   465,   465,   465,     0,     0,
     465,     0,   239,     0,     0,     0,     0,     0,     0,    28,
       0,   239,     0,   239,   189,    30,     0,     0,     0,     0,
       0,    34,    35,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,    38,     0,    39,     0,    40,     0,
       0,     0,     0,    42,     0,     0,     0,     0,     0,   142,
       0,     0,   239,   239,     0,     0,    46,     0,     0,     0,
      48,     0,     0,     0,     0,     0,     0,     0,    53,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
      63,    64,     0,    65,     0,     0,     0,     0,     0,     0,
       0,  1507,     0,  1508,     0,     0,     0,  1509,     0,  1510,
       0,  1511,     0,  1512,     0,  1513,  1515,     3,  1517,     0,
    1518,     0,  1519,  1521,     0,     0,     8,  1523,   142,  1524,
     142,    10,     0,     0,   253,   253,   253,     0,   253,   253,
       0,     0,     0,   253,     0,   253,     0,    15,     0,     0,
       0,     0,    18,     0,   253,   188,     0,     0,     0,     0,
       0,   253,     0,     0,   253,     0,     0,     0,     0,   253,
     253,   253,     0,     0,     0,     0,    28,     0,     0,     0,
       0,     0,   199,     0,     0,     0,     0,     0,    34,    35,
       0,     0,     0,     0,     0,     0,   142,     0,   142,     0,
       0,    38,     0,    39,   142,    40,   253,     0,     0,   253,
      42,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     142,   142,     0,    46,     0,     0,     0,    48,     0,     0,
       0,   142,   142,   142,     0,    53,     0,   142,   142,   142,
     142,   142,     0,     0,   142,   142,   142,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    63,    64,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   216,     0,     0,
       0,     0,     0,     0,     0,   216,     0,     0,     0,     0,
       0,     0,     0,     0,   239,   239,   239,     0,   239,   239,
       0,     0,     0,   239,     0,   239,     0,     0,     0,     0,
       0,     0,     0,     0,   239,     0,     0,     0,     0,     0,
       0,   239,     0,     0,   239,     0,     0,     0,     0,   239,
     239,   239,     0,     0,     0,     0,     0,     1,     0,     2,
       0,     0,     0,     0,     3,     4,     5,     0,     6,     0,
       0,     7,     0,     8,     0,     0,     9,     0,    10,    11,
       0,     0,     0,     0,    12,     0,   239,    13,    14,   239,
       0,     0,     0,     0,    15,    16,     0,    17,     0,    18,
       0,     0,    19,     0,     0,     0,    20,     0,     0,     0,
      21,    22,    23,    24,  1668,    25,  1669,     0,    26,    27,
    1670,     0,  1671,    28,     0,     0,     0,     0,    29,    30,
       0,    31,     0,    32,    33,    34,    35,    36,     0,    37,
       0,     0,     0,     0,     0,     0,     0,     0,    38,     0,
      39,     0,    40,     0,     0,     0,    41,    42,     0,    43,
       0,    44,     0,     0,     0,     0,    45,     0,     0,     0,
      46,    47,     0,     0,    48,     0,     0,    49,     0,    50,
      51,    52,    53,    54,     0,    55,     0,    56,     0,     0,
       0,    57,     0,    58,     0,    59,    60,     0,     3,    61,
       0,     0,     0,    62,    63,    64,     0,    65,     0,     0,
      66,     0,     0,     0,     0,     0,     0,     0,     0,   253,
     253,   253,   253,   253,     0,     0,   253,     0,    15,     0,
       0,     0,     0,    18,     0,     0,   188,  1438,     0,     0,
     253,   253,     0,   253,     0,     0,   253,     0,     3,     0,
       0,     0,     0,     0,     0,     0,   253,    28,     0,   253,
       0,   253,     0,    30,   253,     0,     0,     0,     0,    34,
      35,     0,     0,     0,     0,     0,     0,     0,    15,     0,
       0,     0,    38,    18,   142,     0,   188,  1616,     0,     0,
       0,   253,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    28,    48,   142,
       0,   142,     0,    30,     0,     0,    53,     0,     0,    34,
      35,     0,   142,     0,   142,     0,   142,   142,     0,   142,
       0,   142,    38,   142,   142,     0,   142,   142,   142,    64,
     142,   142,   142,     0,   142,     0,   142,     0,   142,   142,
       0,     0,     0,     0,     0,     0,     0,     0,    48,     0,
       0,     0,     0,     0,     0,     0,    53,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   239,
     239,   239,   239,   239,     0,     0,   239,     0,     0,    64,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     239,   239,     0,   239,     0,     0,   239,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   239,     0,     1,   239,
       2,   239,     0,     0,   239,     3,     4,     5,     0,     6,
       0,     0,     7,     0,     8,     0,     0,     9,     0,    10,
      11,     0,     0,     0,     0,    12,     0,     0,    13,    14,
       0,   239,     0,     0,     0,    15,    16,     0,    17,     0,
      18,     0,     0,    19,     0,     0,     0,    20,     0,     0,
       0,    21,    22,    23,    24,     0,    25,     0,     0,    26,
      27,     0,     0,     0,    28,     0,     0,     0,     0,    29,
      30,     0,   478,     0,    32,    33,    34,    35,    36,     0,
      37,     0,     0,     0,     0,     0,     0,     0,     0,    38,
       0,    39,     0,    40,     0,     0,     0,    41,    42,     0,
      43,     0,    44,     0,     0,     0,     0,    45,     0,     0,
       0,    46,    47,     0,     0,    48,     0,     0,    49,     0,
      50,    51,    52,    53,    54,     0,    55,     0,    56,     0,
       0,     0,    57,     0,    58,     0,    59,    60,     0,     0,
      61,     0,     0,     0,    62,    63,    64,     0,    65,     0,
       0,    66,     0,     0,     0,     0,     0,     0,     0,     0,
       4,     5,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   253,
       0,   253,     0,   253,     0,     0,     0,     0,     0,     0,
     253,     0,     0,     0,     0,     3,     4,     5,     0,     0,
       0,    20,     0,     0,   446,    21,    22,    23,    24,     0,
      25,     0,     0,    26,    27,    12,     0,     0,     0,     0,
       0,     0,     0,     0,     0,    15,     0,     0,     0,     0,
      18,     0,    36,   188,    37,     0,     0,    20,     0,     0,
       0,    21,    22,    23,    24,     0,    25,     0,     0,    26,
      27,    41,     0,     0,    28,     0,     0,     0,     0,   189,
      30,    45,     0,     0,     0,     0,    34,    35,     0,     0,
       0,     0,    49,     0,    50,     0,     0,     0,   142,    38,
     142,     0,    56,     0,   142,     0,   142,    41,   142,     0,
     142,     0,   142,   142,    61,   142,     0,   142,     0,   142,
     142,     0,     0,     0,   142,    48,   142,     1,    49,     2,
      50,     0,     0,    53,     3,     4,     5,     0,     0,     0,
       0,   485,     0,     8,     0,     0,     0,     0,    10,    11,
      61,     0,     0,     0,    12,     0,    64,     0,    65,   239,
       0,   239,     0,   239,    15,    16,     0,    17,     0,    18,
     239,     0,    19,     0,     0,     0,    20,     0,     0,     0,
      21,    22,    23,    24,     0,    25,     0,     0,    26,    27,
       0,     0,     0,    28,     0,     0,     0,     0,    29,    30,
       0,     0,     0,    32,    33,    34,    35,    36,     0,    37,
       0,     0,     0,     0,     0,     0,     0,     0,    38,     0,
      39,     0,    40,     0,     0,     0,    41,    42,     0,    43,
       0,     0,     0,     0,     0,     0,    45,     0,     0,     0,
      46,     0,     0,     0,    48,     0,     0,    49,     0,    50,
      51,    52,    53,    54,     0,    55,     0,    56,     0,     0,
       0,    57,     0,    58,     0,    59,    60,     0,     0,    61,
       0,     0,     0,    62,    63,    64,     0,    65,     0,     0,
      66,     1,     0,     2,     0,     0,     0,     0,     3,     4,
       5,     0,     0,     0,     0,     0,     0,     8,     0,     0,
       0,     0,    10,    11,     0,     0,     0,     0,    12,     0,
       0,     0,     0,     0,     0,     0,     0,     0,    15,    16,
       0,    17,     0,    18,     0,     0,    19,     0,     0,     0,
      20,     0,     0,     0,    21,    22,    23,    24,     0,    25,
       0,     0,    26,    27,     0,     0,     0,    28,     0,     0,
       0,     0,    29,    30,     0,     0,     0,    32,    33,    34,
      35,    36,     0,    37,     0,     0,     0,     0,     0,     0,
       0,     0,    38,     0,    39,     0,    40,     0,     0,     0,
      41,    42,     0,    43,     0,     0,     0,     0,     0,     0,
      45,   142,     0,   142,    46,     0,     0,   142,    48,   142,
       0,    49,     0,    50,    51,    52,    53,    54,     0,    55,
       0,    56,     0,     0,     0,    57,     0,    58,     0,    59,
      60,     0,     0,    61,     0,     0,     0,    62,    63,    64,
       1,    65,     2,     0,    66,     0,     0,     3,     4,     5,
       0,     0,     0,     0,     0,     0,     8,     0,     0,     0,
       0,    10,    11,     0,     0,     0,     0,    12,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    15,    16,     0,
      17,     0,    18,     0,     0,    19,     0,     0,     0,    20,
       0,     0,     0,    21,    22,    23,    24,     0,    25,     0,
       0,    26,    27,     0,     0,     0,    28,     0,     0,     0,
       0,    29,    30,     0,     0,     0,    32,    33,    34,    35,
      36,     0,    37,     0,     0,     0,     0,     0,     0,     0,
       0,    38,     0,    39,     0,    40,     0,     0,     0,    41,
      42,     0,    43,     0,     0,     0,     0,     0,     0,    45,
       0,     0,     0,    46,     0,     0,     0,    48,     0,     0,
      49,     0,    50,    51,    52,    53,     0,     0,     0,     0,
      56,     0,     0,     0,     0,     0,     0,     0,    59,    60,
       0,     0,    61,     3,     4,     5,    62,    63,    64,     0,
      65,     0,     8,    66,     0,     0,     0,    10,    11,     0,
       0,     0,     0,    12,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    15,     0,     0,     0,     0,    18,     0,
       0,    19,     0,     0,     0,    20,     0,     0,     0,    21,
      22,    23,    24,     0,    25,     0,     0,    26,    27,     0,
       0,     0,    28,     0,     0,     0,     0,   261,    30,     0,
       0,     0,     0,     0,    34,    35,    36,     0,    37,     0,
       0,     0,     0,     0,     0,     0,     0,    38,     0,    39,
       0,    40,     0,     0,     0,    41,    42,     0,     0,     0,
       0,     0,     0,     0,     0,    45,     0,     0,     0,    46,
       3,     4,     5,    48,     0,     0,    49,     0,    50,     0,
       0,    53,     0,     0,     0,    11,    56,     0,     0,     0,
      12,     0,     0,     0,     0,     0,     0,     0,    61,     0,
      15,     0,    62,    63,    64,    18,    65,     0,    19,    66,
       0,     0,    20,     0,     0,     0,    21,    22,    23,    24,
       0,    25,     0,     0,    26,    27,     0,     0,     0,    28,
       0,     0,     0,     0,   261,    30,     0,     0,     0,     0,
       0,    34,    35,    36,     0,    37,     0,     0,     0,     0,
       0,     0,     0,     0,    38,     0,     0,     0,     0,     0,
       0,     0,    41,     0,     0,    43,     0,     0,     0,     0,
       0,     0,    45,     0,     0,     0,     0,     3,     4,     5,
      48,     0,     0,    49,     0,    50,     0,     0,    53,     0,
       0,     0,    11,    56,     0,     0,     0,    12,     0,     0,
       0,     0,     0,     0,     0,    61,     0,    15,     0,    62,
       0,    64,    18,    65,     0,    19,    66,     0,     0,    20,
       0,     0,     0,    21,    22,    23,    24,     0,    25,     0,
       0,    26,    27,     0,     0,     0,    28,     0,     0,     0,
       0,   261,    30,     0,     0,     0,     0,     0,    34,    35,
      36,     0,    37,     0,     0,     0,     0,     0,     0,     0,
       0,    38,     0,     0,     0,     0,     0,     0,     0,    41,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    45,
       0,     0,     0,     0,     3,     4,     5,    48,     0,     0,
      49,     0,    50,     8,     0,    53,     0,     0,    10,    11,
      56,     0,     0,     0,    12,     0,     0,     0,     0,     0,
       0,     0,    61,     0,    15,     0,    62,     0,    64,    18,
      65,     0,   188,    66,     0,     0,    20,     0,     0,     0,
      21,    22,    23,    24,     0,    25,     0,     0,    26,    27,
       0,     0,     0,    28,     0,     0,     0,     0,   189,    30,
       0,     0,     0,     0,     0,    34,    35,    36,     0,    37,
       0,     0,     0,     0,     0,     0,     0,     0,    38,     0,
      39,     0,    40,     0,     0,     0,    41,    42,     0,     0,
       0,     0,     0,     0,     0,     0,    45,     0,     0,     0,
      46,     3,     4,     5,    48,     0,     0,    49,     7,    50,
       8,     0,    53,     0,     0,    10,     0,    56,     0,     0,
       0,    12,     0,     0,     0,     0,     0,     0,     0,    61,
       0,    15,    16,    62,    63,    64,    18,    65,     0,   188,
       0,     0,     0,    20,     0,     0,     0,    21,    22,    23,
      24,     0,    25,     0,     0,    26,    27,     0,     0,     0,
      28,     0,     0,     0,     0,   189,    30,     0,     0,     0,
       0,    33,    34,    35,     0,     0,    37,     0,     0,     0,
       0,     0,     0,     0,     0,    38,     0,    39,     0,    40,
       0,     0,     0,    41,    42,     0,     0,     0,     0,     0,
       0,     0,     0,    45,     0,     0,     0,    46,     3,     4,
       5,    48,     0,     0,    49,     0,    50,     8,     0,    53,
       0,     0,    10,     0,     0,     0,     0,     0,    12,     0,
       0,     0,     0,     0,     0,     0,    61,     0,    15,    16,
       0,    63,    64,    18,    65,     0,   188,     0,     0,     0,
      20,     0,     0,     0,    21,    22,    23,    24,     0,    25,
       0,     0,    26,    27,     0,     0,     0,    28,     0,     0,
       0,     0,   189,    30,     0,     0,     0,     0,    33,    34,
      35,     0,     0,    37,     0,     0,     0,     0,     0,     0,
       0,     0,    38,     0,    39,     0,    40,     0,     0,     0,
      41,    42,     0,     0,     0,     0,     0,     0,     0,     0,
      45,     0,     0,     0,    46,     3,     4,     5,    48,     0,
       0,    49,     7,    50,     0,     0,    53,     0,   466,     0,
       0,     0,     0,     0,     0,    12,     0,     0,     0,     0,
       0,     0,     0,    61,     0,    15,    16,     0,    63,    64,
      18,    65,     0,   188,     0,     0,     0,    20,     0,     0,
       0,    21,    22,    23,    24,     0,    25,     0,     0,    26,
      27,     0,     0,     0,    28,     0,     0,     0,     0,   189,
      30,     0,     0,     0,     0,    33,    34,    35,     0,     0,
      37,     0,     0,     0,     0,     0,     0,     0,     0,    38,
       0,     0,     0,     0,     0,     0,     0,    41,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    45,     0,     3,
       4,     5,     0,     0,     0,    48,     0,     0,    49,   594,
      50,     0,     0,    53,    11,     0,     0,     0,    56,    12,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    15,
      61,     0,     0,     0,    18,     0,    64,   188,    65,     0,
       0,    20,     0,     0,     0,    21,    22,    23,    24,     0,
      25,     0,     0,    26,    27,     0,     0,     0,    28,     0,
       0,     0,     0,   189,    30,     0,     0,     0,     0,     0,
      34,    35,    36,     0,    37,     0,     0,     0,     0,     0,
       0,     0,     0,    38,     0,     0,     0,     0,     0,     0,
       0,    41,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    45,     0,     0,     0,     0,     3,     4,     5,    48,
       0,     0,    49,     0,    50,     0,   961,    53,     0,     0,
       0,    11,    56,     0,     0,     0,    12,     0,     0,     0,
       0,     0,     0,     0,    61,     0,    15,     0,    62,     0,
      64,    18,    65,     0,   188,     0,     0,     0,    20,     0,
       0,     0,    21,    22,    23,    24,     0,    25,     0,     0,
      26,    27,     0,     0,     0,    28,     0,     0,     0,     0,
     189,    30,     0,     0,     0,     0,     0,    34,    35,    36,
       0,    37,     0,     0,     0,     0,     0,     0,     0,     0,
      38,     0,     0,     0,     0,     0,     0,     0,    41,     0,
       0,     0,     0,     0,     0,     0,     0,     0,    45,     0,
       0,     0,     0,     3,     4,     5,    48,     0,     0,    49,
       0,    50,     0,     0,    53,     0,     0,     0,     0,    56,
       0,     0,     0,    12,     0,     0,     0,     0,     0,     0,
       0,    61,     0,    15,     0,    62,     0,    64,    18,    65,
       0,   188,     0,     0,     0,    20,     0,     0,     0,    21,
      22,    23,    24,     0,    25,     0,     0,    26,    27,     0,
       0,     0,    28,     0,     0,     0,     0,   189,    30,     0,
       0,     0,     0,     0,    34,    35,     0,     0,    37,     0,
       0,     0,     0,     4,     5,     0,     0,    38,     0,     0,
       0,     8,     0,     0,     0,    41,    10,    11,     0,     0,
       0,     0,    12,     0,     0,    45,     0,     0,     0,     0,
       0,     0,     0,    48,     0,     0,    49,     0,    50,     0,
       0,    53,     0,     0,    20,     0,    56,     0,    21,    22,
      23,    24,     0,    25,     0,     0,    26,    27,    61,     0,
       0,     0,     0,     0,    64,     0,    65,     0,     0,     0,
       0,     0,     0,     0,     0,    36,     0,    37,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,    39,     0,
      40,     0,     0,     0,    41,    42,     0,     0,     0,     0,
       0,   385,     0,     0,    45,     4,     5,     0,    46,     0,
       0,     0,     0,     8,     0,    49,     0,    50,    10,    11,
       0,     0,     0,     0,    12,    56,     0,     0,     0,     0,
       3,     0,     0,     0,     0,     0,     0,    61,     0,     8,
       0,    62,    63,     0,    10,    65,    20,     0,     0,     0,
      21,    22,    23,    24,     0,    25,     0,     0,    26,    27,
      15,     0,     0,     0,     0,    18,     0,     0,   188,     0,
       0,     0,     0,     0,     0,     0,     0,    36,     0,    37,
       0,     0,     0,     0,     4,     5,     0,     0,     0,    28,
      39,     0,    40,   388,     0,    30,    41,    42,    11,     0,
       0,    34,    35,    12,     0,     0,    45,     0,     0,     0,
      46,     0,     0,     0,    38,     0,    39,    49,    40,    50,
       0,     0,     0,    42,     0,    20,     0,    56,     0,    21,
      22,    23,    24,     0,    25,     0,    46,    26,    27,    61,
      48,     0,     0,    62,    63,     0,     0,    65,    53,     0,
       0,     0,     0,     0,     0,     0,    36,     0,    37,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
      63,    64,     0,     0,     0,    41,     0,     0,     0,     0,
       0,     0,   389,     0,     0,    45,     0,     0,     0,     0,
       4,     5,     0,     0,     0,     0,    49,   390,    50,   388,
     391,     0,     0,     0,    11,     0,    56,     0,     0,    12,
       0,     0,     0,     0,     0,     0,   392,   393,    61,     0,
       0,     0,    62,     0,     0,     0,    65,     0,     0,     0,
       0,    20,     0,     0,     0,    21,    22,    23,    24,     0,
      25,     0,     0,    26,    27,     0,     0,     4,     5,     0,
       0,     0,     0,     0,     0,     0,   388,     0,     0,     0,
       0,    11,    36,     0,    37,     0,    12,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    41,     0,     0,     0,     0,     0,     0,    20,     0,
       0,    45,    21,    22,    23,    24,     0,    25,     0,     0,
      26,    27,    49,   390,    50,     0,   391,     0,     0,     0,
       0,     0,    56,     0,     0,     0,     0,     0,     0,    36,
       0,    37,   392,   393,    61,     0,     0,     0,    62,     0,
       0,     0,    65,     0,     0,     0,     0,     0,    41,     0,
       0,     0,     0,     0,     0,     0,     4,     5,    45,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    49,
      11,    50,     0,   391,     0,    12,     0,     0,     0,    56,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   392,
     393,    61,     0,     0,     0,    62,     0,    20,     0,    65,
       0,    21,    22,    23,    24,     0,    25,     0,     0,    26,
      27,     0,     0,     0,     0,     0,     0,     0,     0,     4,
       5,     0,     0,     0,     0,     0,     0,     0,    36,     0,
      37,     0,     0,    11,     4,     5,     0,     0,    12,     0,
       0,     0,     0,     0,     0,     0,     0,    41,    11,     0,
       0,     0,     0,    12,   385,     0,     0,    45,     0,     0,
      20,     0,     0,     0,    21,    22,    23,    24,    49,    25,
      50,     0,    26,    27,     0,    20,     0,     0,    56,    21,
      22,    23,    24,     0,    25,     0,     0,    26,    27,     0,
      61,    36,     0,    37,    62,     0,     0,     0,    65,     0,
       0,     0,     0,     0,     0,     0,    36,   753,    37,     0,
      41,     0,     0,     0,     0,     0,     0,   743,     0,     0,
      45,     0,     0,     0,     0,    41,     0,     0,     0,     0,
       0,    49,     0,    50,     0,    45,     4,     5,     0,     0,
       0,    56,     0,     0,     0,     0,    49,     0,    50,     0,
      11,     0,     0,    61,     0,    12,    56,    62,     0,     0,
       0,    65,     0,     0,     0,     0,     0,     0,    61,     3,
       4,     5,    62,     0,     0,     0,    65,    20,     0,     0,
       0,    21,    22,    23,    24,     0,    25,     0,     0,    26,
      27,     0,     0,     0,     0,     0,     0,     0,     0,    15,
       0,     0,     0,     0,    18,     0,     0,   445,    36,     0,
      37,    20,     0,     0,   446,    21,    22,    23,    24,     0,
      25,     0,     0,    26,    27,     0,     0,    41,    28,     0,
       0,     0,     0,   189,    30,     0,     0,    45,     0,     0,
      34,    35,    36,     0,    37,     0,     0,     0,    49,     0,
      50,     0,     0,    38,     0,     0,     0,     0,    56,     0,
       0,    41,     0,     0,   447,     0,     0,     3,     4,     5,
      61,    45,     0,     0,    62,     0,     0,     0,    65,    48,
       0,     0,    49,     0,    50,     0,     0,    53,     0,     0,
       0,     0,    56,     0,     0,     0,     0,    15,     0,     3,
       4,     5,    18,     0,    61,   445,     0,     0,     0,    20,
      64,     0,   446,    21,    22,    23,    24,     0,    25,     0,
       0,    26,    27,     0,     0,     0,    28,     0,     0,    15,
       0,   189,    30,     0,    18,     0,     0,   188,    34,    35,
      36,    20,    37,     0,   446,    21,    22,    23,    24,     0,
      25,    38,     0,    26,    27,     0,     0,     0,    28,    41,
       0,     0,     0,   189,    30,     0,     0,     0,     0,    45,
      34,    35,    36,     0,    37,     0,     0,    48,     0,     0,
      49,     0,    50,    38,     0,    53,     4,     5,     0,     0,
      56,    41,     0,     0,     8,     0,     0,     0,     0,    10,
       0,    45,    61,     0,     0,     0,     0,   226,    64,    48,
       0,     0,    49,     0,    50,     0,     0,    53,     0,     0,
       0,   227,    56,   228,     0,     0,     0,     0,     0,     0,
       0,     0,   229,    23,    61,     0,     0,     0,     0,     0,
      64,     0,   230,     0,     0,     0,   231,     0,     0,     0,
     232,   233,     0,   234,     0,     0,     0,     0,     0,     0,
      37,     0,     0,   235,     0,     0,     0,     4,     5,   236,
       0,    39,     0,    40,     0,     8,     0,    41,    42,     0,
      10,     0,     0,     0,     0,     0,     0,    45,     0,     0,
     237,    46,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   227,    53,   228,     0,     0,     0,    56,     0,
       0,     0,     0,   229,    23,     0,     0,     0,     0,     0,
     238,     0,     0,   230,     0,    63,     0,   231,     0,     0,
       0,   232,   233,     0,   234,     0,     0,     0,     0,     0,
       0,    37,     0,     0,   235,     0,     0,     0,     0,     0,
     236,     0,    39,     0,    40,     0,     0,     0,    41,    42,
       0,     0,     4,     5,     0,     0,     0,     0,    45,     0,
       8,   237,    46,     0,     0,    10,     0,     0,     0,     0,
       0,     0,     0,     0,    53,     0,     0,     0,     0,    56,
       0,     0,    16,     0,     0,     0,     0,     0,     0,     0,
       0,   238,     0,    20,     0,     0,    63,    21,    22,    23,
      24,     0,    25,     0,     0,    26,    27,     0,     0,     0,
       0,     0,     0,     0,     0,     4,     5,     0,     0,     0,
       0,    33,     0,     8,     0,     0,    37,     0,    10,     0,
       0,     0,     0,     0,     4,     5,     0,    39,     0,    40,
       0,     0,     8,    41,    42,     0,     0,    10,     0,     0,
       0,     0,     0,    45,     0,     0,    20,    46,     0,   185,
      21,    22,    23,    24,    49,    25,    50,     0,    26,    27,
       0,     0,     0,     0,    56,    20,     0,     0,   499,    21,
      22,    23,    24,     0,    25,     0,    61,    26,    27,    37,
       0,    63,     0,     0,     0,     0,     0,     4,     5,     0,
      39,     0,    40,     0,     0,     8,    41,    42,    37,     0,
      10,     0,     0,     0,     0,     0,    45,     0,     0,    39,
      46,    40,     0,     0,     0,    41,    42,    49,     0,    50,
       0,     0,     0,     4,     5,    45,     0,    56,    20,    46,
       0,     0,    21,    22,    23,    24,    49,    25,    50,    61,
      26,    27,     0,     0,    63,     0,    56,     0,     4,     5,
       0,     0,     0,     0,     0,     0,     0,     0,    61,     0,
       0,    37,     0,    63,    20,     0,     0,     0,    21,    22,
      23,    24,    39,    25,    40,     0,    26,    27,    41,    42,
       0,     0,     0,   227,     0,   228,     0,     0,    45,     0,
       0,     0,    46,     0,   229,    23,     0,    37,     0,    49,
       0,    50,     0,     0,   230,     0,     0,   965,   231,    56,
       0,     0,   232,   233,    41,   234,     0,     0,     0,     0,
       0,    61,    37,     0,    45,   235,    63,     0,     0,     0,
       0,   236,     4,     5,     0,    49,     0,    50,     0,    41,
       0,     0,     0,     0,     0,    56,     0,     0,     0,    45,
       0,     0,   237,     0,     0,     0,     0,    61,     0,     0,
       0,     0,     0,     0,     0,    53,    54,   227,    55,   228,
      56,     0,     0,     0,    57,     0,   414,     0,   229,    23,
       0,     0,   238,     0,     0,     0,     0,     0,   230,     0,
       0,     0,   231,     0,     0,     0,   232,   233,     0,   234,
       4,     5,     0,     0,     0,     0,    37,     0,     0,   235,
       0,     0,     0,     0,     0,   236,     0,     0,     0,     0,
       0,     0,   907,    41,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    45,     0,   227,   237,   228,     4,     5,
       0,     0,   933,     0,     0,     0,   229,    23,     0,    53,
       0,     0,     0,     0,    56,     0,   230,     0,     0,     0,
     231,     0,     0,     0,   232,   233,   238,   234,     0,     0,
       0,     0,     0,   227,    37,   228,     0,   235,     0,     0,
       0,     0,     0,   236,   229,    23,     0,     0,     0,     0,
       0,    41,     0,     0,   230,     0,     0,     0,   231,     0,
       0,    45,   232,   233,   237,   234,     4,     5,     0,     0,
       0,     0,    37,     0,     0,   235,     0,    53,     0,     0,
       0,   236,    56,     0,     0,     0,     0,     0,  1268,    41,
       0,     0,     0,     0,   238,     0,     0,     0,     0,    45,
       0,   227,   237,   228,     4,     5,     0,     0,  1281,     0,
       0,     0,   229,    23,     0,    53,     0,     0,     0,     0,
      56,     0,   230,     0,     0,     0,   231,     0,     0,     0,
     232,   233,   238,   234,     0,     0,     0,     0,     0,   227,
      37,   228,     0,   235,     0,     0,  1535,     0,     0,   236,
     229,    23,     0,     0,     0,     0,     0,    41,     0,     0,
     230,     0,     0,     0,   231,     0,     0,    45,   232,   233,
     237,   234,     4,     5,     0,     0,     0,     0,    37,     0,
       0,   235,     0,    53,     0,     0,     0,   236,    56,     0,
       0,     0,     0,     0,     0,    41,     0,     0,     0,     0,
     238,     0,     0,     0,     0,    45,     0,   227,   237,   228,
       0,     4,     5,     0,     0,     0,     0,     0,   229,    23,
       0,    53,     0,     0,     0,     0,    56,     0,   230,     0,
       0,     0,   231,     0,     0,     0,   232,   233,   238,   234,
       0,     0,     0,     0,     0,     0,    37,     0,     0,     0,
       0,     0,    20,     0,     0,   236,    21,    22,    23,    24,
       0,    25,     0,    41,    26,    27,     0,     0,     0,     0,
       0,     0,     0,    45,     0,     0,   237,     0,     0,     0,
       0,     0,     0,     0,     0,    37,     0,     0,     0,    53,
       0,     0,     0,     0,    56,     0,     0,     0,     0,     0,
       0,     0,    41,     0,     0,     0,   238,     0,     0,     0,
       0,     0,    45,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    49,     0,    50,     0,     0,     0,     0,
       0,     0,     0,    56,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,    61
};

static const yytype_int16 yycheck[] =
{
       1,     2,   361,   226,   399,    19,   125,    33,   564,   421,
      11,    33,   255,   411,   422,    16,   412,    39,    19,   345,
     346,    22,   344,    82,    25,   245,    92,    28,    29,   107,
     227,   404,   405,   349,   340,   408,   388,   359,    39,    40,
     356,    33,    21,    22,    45,    24,   748,   749,   245,   282,
       1,   357,   285,    35,   382,    45,   384,    74,   356,   250,
      82,   738,   126,    11,   741,   349,     1,    19,    90,    24,
     354,    17,   356,    12,   321,   416,   417,    29,    32,   420,
      55,   337,   104,    39,    21,   340,   205,    24,    12,    90,
      12,    92,    12,   228,   572,   573,   574,    55,   353,     4,
     235,   339,    11,   104,    12,    33,   210,   242,   364,    55,
     214,     1,     2,   139,    55,    81,    12,   139,    81,    55,
     224,   359,    81,    12,    12,   175,    16,    81,    12,   151,
     180,    46,   111,   112,    17,   326,    46,    81,    55,    81,
      81,    81,    98,    81,    17,    81,   135,   139,    63,    64,
      98,   131,   153,   140,    82,    55,    81,   144,    12,   151,
      87,    17,    55,     4,    81,   166,    20,   147,   112,    81,
     136,   134,    55,    78,   188,   134,   177,   178,   179,   135,
     181,    81,    55,   158,   206,   125,   187,   166,    98,    98,
      55,    12,    11,    98,   208,   442,   197,   444,   136,    55,
     158,   157,   203,    22,   395,   142,   272,   208,   159,    28,
      11,   139,   158,   107,   206,   216,   282,   158,   157,   220,
     221,    40,   158,   151,   159,   226,   227,   418,   229,   230,
     231,   210,    11,   157,   213,   157,   133,   157,   217,   176,
     230,   158,   221,   269,   245,   139,   225,   269,   274,   157,
     232,   203,   274,   254,   236,   256,   208,    98,   158,   260,
     261,   157,   217,   285,   265,   158,   256,    48,   157,   157,
     225,   272,   273,   157,    48,   158,   226,   269,   206,   229,
     217,   282,   274,   284,   285,   158,   287,   288,   225,   179,
     104,   181,    21,   158,   295,   296,   278,    98,   457,   458,
     459,   460,   158,    55,   254,   295,   296,   197,   122,   261,
      40,    47,   133,   265,   135,   538,   539,    98,    11,    98,
     379,   387,   542,   401,    98,   568,   569,   570,   406,   576,
     577,   397,   151,   692,   153,   694,   157,   557,   585,    56,
      47,   269,   156,    23,   541,   542,   274,   166,    28,   413,
      12,    81,   369,   375,    34,   377,   250,   379,   177,   178,
     557,   594,    47,   596,   690,   691,   688,   693,   187,    55,
     567,   769,   784,   929,    25,   771,   682,   399,   786,    30,
      55,   382,   698,   384,   299,   737,   387,   388,    11,   762,
     802,   764,    79,   745,    45,   396,   397,   216,   399,   518,
     698,   220,   221,   404,   405,    98,   158,   408,    78,   544,
      11,   739,   231,   697,   698,  1117,   520,  1119,  1120,  1121,
     100,   400,   102,   558,   528,    55,   681,   107,   712,    55,
     565,   445,   326,  1110,    53,   350,   777,   166,   779,    27,
     120,   260,   171,   699,   445,   495,    11,   497,    55,   687,
     688,   379,    55,   380,   273,   711,   383,    45,   714,    55,
     145,   146,    15,    16,   942,   284,   944,    83,   287,   288,
      11,   133,   158,   135,   154,    98,    43,   157,     0,   153,
      55,   719,    55,   158,   722,   214,    51,   501,   217,  1166,
     469,   470,    47,   445,    11,   157,    84,    98,    23,    40,
     145,   395,    48,    28,   153,   146,   396,   754,   402,    62,
      51,   512,   513,   407,   133,   516,   135,   191,    19,    30,
     414,    32,   141,   148,   143,   419,   118,    12,   158,   178,
     596,    98,   158,   534,    51,    91,   537,   538,   539,    23,
     541,   542,   954,   734,    28,   546,    11,   548,    81,   550,
      27,   158,    98,   106,    17,   158,   557,    98,   548,   750,
     512,   513,   158,   564,   516,    56,   567,    30,    45,    32,
     552,   572,   573,   574,    81,    40,   227,   228,   560,   230,
     399,   582,   126,   158,   235,   158,    51,   537,   538,   539,
     264,   242,    55,    52,   245,   596,   546,    81,    81,   273,
     601,     7,    23,   136,   255,   256,   117,    84,   609,   326,
     284,   612,    71,    76,     1,     2,   100,   268,   102,   609,
      79,    80,   612,   107,   273,    12,    43,   134,    81,    16,
     582,    18,    19,    98,    21,   284,   120,    24,    81,    98,
      48,    81,    29,    40,   295,   296,    33,    40,   133,   112,
     135,   114,    39,   136,   117,    81,   141,   142,   143,   144,
     119,    78,   821,   664,     9,   824,    81,   733,   827,    18,
     154,   830,    13,    13,    11,    15,    16,    26,    33,    41,
     903,    98,   905,   136,    81,   664,    18,    81,    81,    38,
      98,   134,   935,    53,   937,   158,   136,    81,    30,    81,
      30,    53,    32,    90,   924,    92,    38,    70,   955,  1068,
     136,  1070,   909,  1072,    51,   534,   738,   104,  1420,   741,
    1422,   136,    62,   144,   145,   958,   923,   924,   961,  1124,
    1286,   550,   733,    15,    16,  1412,   737,   738,   739,   468,
     741,  1067,   136,  1069,   745,  1071,    76,   748,   749,    89,
     134,   752,   139,    35,   136,   142,  1108,    81,   759,    81,
     774,   762,   111,   764,   151,   152,   106,   902,   903,   904,
     905,    52,   121,   133,   800,   135,    81,   756,   800,   166,
      62,   141,   601,   143,   114,    59,    81,   117,    81,   176,
     804,  1075,   179,    81,   181,   930,   931,    15,    16,   528,
     801,    48,   189,   804,    81,   192,    81,    89,   800,    81,
     197,    81,   136,    11,   136,   202,   203,    79,  1074,   206,
    1076,   208,    59,   210,   106,    10,  1064,   214,  1066,   216,
     217,   136,   253,    67,  1090,   326,    81,   224,   225,    81,
     734,   136,    40,   136,    62,   664,   233,   234,   136,    12,
      32,    98,   804,    51,    72,    81,   750,   836,   837,   136,
    1098,   136,   752,   842,   136,    48,   136,   199,   289,   201,
     202,    89,   800,    12,   261,    81,    66,   298,   265,   142,
     267,   144,   269,   884,    81,   272,   887,   274,   106,   134,
     541,   542,  1304,   544,   136,   282,    40,   548,   285,    81,
      98,   902,   903,   904,   905,   906,   557,   558,   909,   330,
     136,   332,    74,   564,   565,    98,   567,   568,   569,   570,
    1597,  1598,   923,   924,    45,   926,    32,    14,   929,    23,
     136,    11,   884,    27,    28,   887,   268,    81,   939,   136,
     759,   942,    40,   944,   661,   662,   947,    40,    30,   281,
      32,    45,   902,   903,   904,   905,   906,    44,   609,    81,
      40,   612,    49,    84,    99,    52,   457,   458,   459,   460,
     133,    51,   135,   974,    81,    81,   926,    53,   141,   142,
     143,   144,   108,    81,   974,    58,    73,    11,    81,   939,
      84,    78,    79,    11,   133,   382,   135,   384,    85,    86,
     387,   388,   141,   142,   143,   144,   100,    11,   102,   396,
     397,    98,   399,   107,   136,   110,    53,   734,    98,   736,
      81,  1698,    40,   740,  1143,    94,   120,    51,  1387,   136,
    1389,  1390,   115,    51,    17,   104,    40,   124,  1039,  1040,
     757,   758,    81,    15,    16,   132,    13,    51,   765,   766,
      81,    27,    40,   122,   123,    81,   773,   133,   445,   135,
     154,  1040,  1388,   780,   781,   141,    42,   143,   155,    21,
       0,    23,    55,   134,    81,  1308,    28,    23,    81,     4,
      98,   468,    28,    12,    81,  1282,    17,   156,  1110,    81,
      62,    81,    68,    81,    98,   134,   133,    27,   135,    30,
      43,    32,  1124,   134,   141,    77,   143,  1108,    46,  1110,
     136,    94,    42,    81,    48,   502,  1117,    89,  1119,  1120,
    1121,   104,    39,  1124,    55,   512,   513,   134,  1129,   516,
    1144,    15,    16,   520,   106,  1391,    81,   134,    68,   122,
     123,   528,   125,    42,  1166,    76,   136,  1385,   100,    95,
     102,    40,    14,  1288,   100,   107,   102,   648,   649,    21,
      30,   107,    32,    17,   169,  1166,   134,   554,   120,   556,
     661,   662,    34,   156,   120,   158,   508,    81,    62,   511,
      23,   112,    44,   114,    12,    28,   117,    49,   193,   134,
      52,    81,    81,   614,    12,   582,   126,    11,    40,    59,
     587,    55,   154,    81,   133,    89,   135,   594,   154,   596,
      81,    73,   141,   142,   143,   144,    78,    79,    77,    40,
    1039,  1040,   106,    85,    86,    11,   158,   158,   158,  1588,
     134,   154,    72,   156,  1213,    81,    98,    51,   168,    81,
      94,   171,   172,   734,   134,   736,    81,    12,   158,   740,
     104,   902,   903,   904,   905,    81,   134,   100,   909,   102,
      81,    30,   124,   134,   107,    51,   757,   758,   122,   123,
     132,   125,   923,   924,   765,   766,    12,   120,   929,   930,
     931,  1282,   773,  1284,   935,  1286,   937,    81,   134,   780,
     781,    81,  1293,   155,    21,   157,    23,    40,     6,   134,
      27,    28,   156,    81,   158,   133,    81,   135,   134,    81,
    1129,   154,    23,   141,   142,   143,   144,    28,    45,    48,
    1439,    81,    13,   974,    15,    16,    40,    15,    16,   375,
     821,   377,    94,   824,  1284,   154,   827,   156,    81,   830,
     134,    40,    48,  1293,   134,    11,   733,    40,    89,    78,
     737,   738,   739,    48,   741,    76,   134,    84,   745,   134,
      32,   748,   749,  1364,    12,   752,    47,    81,   133,    98,
     135,    62,    78,   100,    62,   102,   141,   142,   143,   144,
     107,   131,    81,    78,    12,    51,  1103,  1104,    81,   100,
    1412,   102,    98,   120,    11,   325,   107,   133,    89,   135,
      47,    89,   133,    98,   135,   141,   142,   143,   144,   120,
     141,  1412,   143,   800,     6,   106,    52,   804,   106,  1420,
     130,  1422,   133,    40,   135,    17,    12,   154,     8,     9,
       0,     1,     2,     3,    51,     8,     9,   135,    30,    52,
      32,    11,    12,   154,    52,    15,    16,    17,    18,    19,
      20,    21,    22,   135,    24,    25,    26,    27,    28,    29,
      30,    54,   133,    33,    34,    35,    36,    42,    38,    39,
      40,    59,    42,    43,   133,    45,    46,   133,   135,    49,
      50,    98,   135,   413,    76,   133,    23,   135,    48,    48,
      81,    28,    27,   141,   142,   143,   144,   884,    68,    33,
     887,   133,    94,   135,     8,   133,    98,   135,    41,   141,
      48,   143,   104,   141,   142,   143,   144,    53,    78,    78,
     112,    30,   114,    32,     0,   117,    70,    59,    70,    59,
     122,   123,    52,   125,   105,    15,    16,   105,    98,    98,
      78,    70,   105,    23,    81,  1364,   476,   133,    28,   135,
     105,    27,   482,   483,   484,   141,   142,   143,   144,   489,
      98,    12,    52,   100,   156,   102,    42,    76,    67,    74,
     107,   958,    58,    99,   961,  1597,  1598,   147,   148,   149,
     150,    99,    62,   120,    30,    99,    32,   110,   115,    13,
     130,   115,    68,    81,     4,   135,  1597,  1598,   168,   139,
      81,   171,   172,   143,   174,   114,    81,    43,   117,    89,
      81,    48,  1103,  1104,    14,   185,    11,   154,   188,   189,
     100,   134,   102,    23,   194,   136,   106,   107,    28,   199,
      76,  1282,   157,   203,    34,  1286,   116,  1288,    12,   136,
     120,   133,    48,   135,    44,   112,   158,   139,   218,    49,
     126,   143,    52,   125,    76,    81,   226,   227,   228,   229,
     230,   231,   232,   233,   234,   235,   236,   237,   114,    96,
      48,   117,    76,    73,   154,   158,  1698,    53,   110,    79,
     158,    14,   158,    48,   158,    85,    86,    27,   158,    27,
       8,   261,   168,    70,   105,   171,   172,  1698,    98,    70,
     100,    34,   102,   105,   105,   275,   105,   107,    23,    99,
      99,    44,    45,    28,    99,    81,    49,   115,   115,    52,
     120,  1108,    81,  1110,   124,   134,   296,   134,   136,    40,
    1117,   136,  1119,  1120,  1121,    11,    48,  1124,   308,    11,
      73,    70,   136,   136,   136,    78,    79,   317,   134,   136,
      76,    84,    85,    86,   154,   155,    89,   157,    81,   133,
      53,   135,   158,    15,    16,    98,    81,   141,   142,   143,
     144,    23,   136,    53,   158,   158,    28,   158,   158,  1166,
      42,   134,    48,   116,    53,   100,   133,   102,   135,   158,
     158,   124,   107,   110,   141,   142,   143,   144,   158,   132,
     158,   731,   372,   158,   158,   120,   134,    48,    11,   136,
      62,   136,   382,    48,    48,   385,    27,    27,   388,   389,
     390,    27,   155,    70,   157,   395,   396,    53,    99,    99,
     400,   115,   134,   136,   404,   405,   136,    89,    40,   154,
     136,   411,   412,    40,   136,   136,   416,   417,   100,   325,
     102,   421,   422,   134,   106,   107,   426,   427,   136,   134,
     430,    40,   136,   433,   116,    70,    70,    53,   120,   136,
     158,   133,   158,   135,   157,   445,   446,   447,    53,   141,
     142,   143,   144,   136,    11,   158,   136,   457,   458,   459,
     460,   134,    23,   463,   464,   158,   157,    28,   158,   158,
     470,   158,   154,   158,   474,   475,   134,   134,    40,   134,
     480,   481,   136,   483,   484,   136,   136,   487,   488,   134,
      48,  1308,   492,    48,   136,   134,    11,    15,    16,   499,
      11,   861,    27,   503,    70,   865,   506,   413,   136,    53,
      71,   136,   512,    12,   514,   515,   516,   136,    79,    80,
      99,   521,    21,   136,   524,    24,   136,    40,   136,   529,
      29,   531,   134,   136,    40,   535,   136,    98,    56,   100,
      39,   102,    60,    61,    62,    63,   107,    65,    70,   136,
      68,    69,   158,    40,   158,   136,   157,   134,   119,   120,
     157,    14,   157,   563,    13,   565,    15,    16,   568,   569,
     476,    89,   572,   573,   157,   575,   482,   483,   484,   579,
     580,    99,   136,   489,   134,   136,    40,   136,   106,   589,
     136,    44,   134,   154,   594,  1412,    49,   134,   116,    52,
     134,   134,    40,  1420,   604,  1422,   606,   136,   136,   127,
     136,   129,   612,    62,    14,    40,   136,   136,   157,   137,
      73,    21,   136,   623,   136,   625,    79,    13,   136,    15,
      16,   149,    85,    86,    34,   136,    40,   134,   136,   639,
      89,   641,   134,   142,    44,    98,   646,   647,   157,    49,
     157,   136,    52,   152,   136,    40,   136,   106,   658,   659,
     660,   136,    40,   157,   664,   665,   157,   166,   668,   669,
     136,   124,   136,    73,   136,    72,    62,   176,    78,    79,
     157,     6,    71,   371,   252,    85,    86,   373,   801,    89,
     189,   250,    17,   192,   373,   247,   131,   947,    98,   171,
      25,   948,   155,    89,    13,    30,   349,    32,    -1,   340,
     340,   210,    -1,    -1,    -1,   214,   116,   216,   217,    -1,
     106,   344,    -1,    -1,   124,   224,   225,    -1,    -1,    -1,
      55,    23,   132,    -1,   233,   234,    28,   737,    -1,    23,
      21,    -1,    23,   743,    28,    23,    27,    28,   748,   749,
      28,    76,    -1,   753,    79,   155,    -1,   157,    -1,   759,
      -1,    -1,   261,    -1,    45,    -1,   265,    45,   267,    94,
      -1,    -1,    -1,    98,   774,    -1,    -1,    -1,    -1,   104,
    1597,  1598,    14,   282,    -1,    77,   285,   112,    -1,   114,
     790,   791,   117,   793,    -1,   795,    -1,   122,   123,    83,
     125,    -1,    34,    84,    -1,    -1,    84,    -1,   100,    -1,
     102,    -1,    44,    -1,    -1,   107,   100,    49,   102,   100,
      52,   102,   100,   107,   102,   731,   107,    -1,   120,   107,
      -1,   156,    -1,    -1,    -1,    -1,   120,   837,    -1,   120,
      -1,    73,   120,    -1,    15,    16,    78,    79,    -1,   849,
     850,    -1,    -1,    85,    86,    -1,   856,   857,    -1,   859,
     860,    -1,   154,   863,   864,    -1,    98,    -1,    -1,    -1,
     154,   871,   872,   154,   874,   875,   154,    -1,    -1,    50,
     880,  1698,   882,    -1,    -1,    -1,    -1,    -1,   888,   889,
      61,    62,   124,   893,   894,    -1,    -1,   897,   898,    -1,
     132,   901,    -1,    -1,    75,   137,    -1,   907,    14,    -1,
     910,    82,   912,    -1,   914,    -1,   916,    23,    89,   919,
      -1,   921,    28,   155,    -1,   157,   926,    -1,    34,    -1,
      -1,   931,    -1,   933,    -1,   106,    -1,    -1,    44,   939,
      -1,    -1,    -1,    49,    -1,   116,    52,    -1,    -1,   949,
      -1,   951,    14,   953,    -1,   861,    -1,   957,    52,   865,
      22,   961,    -1,    -1,    -1,    -1,   137,    73,   968,   468,
     970,    -1,    78,    79,    -1,    -1,    -1,    71,   149,    85,
      86,    -1,    44,    -1,   984,    79,    80,    49,    -1,    -1,
      52,    -1,    98,    -1,   100,    -1,   102,    -1,    -1,    -1,
      -1,   107,  1002,   502,    98,    -1,    -1,    15,    16,    -1,
      -1,    73,    -1,  1013,   120,    23,    -1,    79,   124,    -1,
      28,   520,    -1,    85,    86,   119,   132,    -1,    -1,   528,
      -1,   137,    -1,  1033,    -1,  1035,    98,  1037,   132,    -1,
      -1,    -1,    50,    -1,    -1,    -1,    -1,    -1,   154,   155,
      -1,   157,    -1,    61,    62,   554,    -1,   556,    23,    -1,
      -1,    23,   124,    28,    -1,    -1,    28,    75,    -1,    -1,
     132,    -1,    -1,    -1,    82,    -1,    -1,    -1,    -1,    -1,
      -1,    89,    -1,   582,    -1,    -1,    -1,    -1,   587,    -1,
      52,    -1,   100,   155,   102,   594,    -1,   596,   106,   107,
    1100,  1101,  1102,    -1,    -1,    -1,    -1,    -1,   116,    71,
      -1,  1111,   120,    14,    -1,    -1,    81,    79,    80,    -1,
    1120,  1121,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   137,
      -1,    -1,  1132,    34,  1134,   100,    98,   102,   100,    -1,
     102,   149,   107,    44,    -1,   107,   154,  1147,    49,  1149,
      -1,    52,    -1,    -1,    -1,   120,    -1,   119,   120,  1159,
      -1,  1161,  1162,    -1,  1164,    -1,    -1,    -1,    -1,  1169,
     132,  1171,    73,    14,    15,    16,    -1,    78,    79,    -1,
      -1,    -1,    -1,    -1,    85,    86,    -1,    -1,    29,   154,
      -1,    -1,   154,    34,    -1,    -1,    -1,    98,    -1,    -1,
      23,    -1,    -1,    44,    -1,    28,    -1,    -1,    49,    -1,
      -1,    52,    -1,    -1,    -1,    56,    -1,    -1,    -1,    60,
      61,    62,    63,   124,    65,    -1,    -1,    68,    69,    -1,
      -1,   132,    73,    -1,    -1,  1235,  1236,    78,    79,    -1,
      -1,    -1,  1242,  1243,    85,    86,    87,    -1,    89,    -1,
      -1,    -1,  1252,    23,   155,    -1,   157,    98,    28,    -1,
      -1,  1261,    85,    -1,    -1,   106,    -1,    -1,  1268,    -1,
    1270,    -1,  1272,    -1,  1274,   116,  1276,   100,  1278,   102,
    1280,  1281,    -1,   124,   107,    -1,   127,    -1,   129,    -1,
      -1,   132,   133,    -1,   135,    -1,   137,   120,    -1,    -1,
    1300,  1301,    -1,    -1,    14,    -1,    23,    -1,   149,    -1,
      27,    28,   153,    -1,   155,    85,   157,    -1,    -1,   160,
      -1,    -1,    -1,    -1,    34,    -1,    -1,    -1,    45,    -1,
     100,   154,   102,    -1,    44,    -1,    -1,   107,    -1,    49,
      -1,    -1,    52,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     120,    -1,    -1,    -1,    -1,    -1,    -1,  1357,    -1,  1359,
      -1,  1361,    -1,    73,    -1,    -1,    -1,    84,    78,    79,
      -1,    -1,    -1,    -1,    -1,    85,    86,    -1,    -1,    89,
      -1,   158,    -1,   100,   154,   102,    -1,    -1,    98,    -1,
     107,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   179,   120,   181,   182,   116,  1407,    -1,  1409,
     187,  1411,  1412,    -1,   124,   192,  1416,    -1,   195,    -1,
     197,   198,   132,    -1,  1424,   202,    -1,  1427,    -1,  1429,
      -1,   208,   209,    -1,    -1,    -1,    -1,   154,  1438,    -1,
     217,  1441,    -1,  1443,   221,   155,    -1,   157,   225,    -1,
      -1,  1451,    -1,    -1,  1454,    -1,    -1,    -1,  1458,   958,
    1460,    -1,   961,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   256,
     257,    -1,    -1,   260,    -1,    -1,    -1,    -1,   265,    -1,
      -1,   268,    -1,    -1,    -1,    -1,    -1,   274,    -1,   276,
      -1,   278,   279,    -1,   281,     7,    -1,     9,   285,    -1,
      -1,   288,    14,    15,    16,   292,    -1,    -1,   295,    -1,
      -1,    -1,   299,   300,   301,    -1,    -1,    29,    -1,    -1,
      -1,    -1,    34,    -1,    -1,  1535,  1536,    -1,    -1,  1539,
      -1,  1541,    44,    45,    -1,  1545,    -1,    49,    -1,    -1,
      52,    -1,    -1,    -1,    56,    -1,    -1,    23,    60,    61,
      62,    63,    28,    65,    -1,    -1,    68,    69,    -1,    -1,
      -1,    73,    -1,    23,  1574,  1575,    78,    79,    28,    -1,
      -1,    -1,    84,    85,    86,    87,    -1,    89,    -1,    -1,
      -1,    -1,  1592,    -1,  1594,    -1,    98,    -1,  1598,    -1,
      -1,    -1,    -1,  1603,   106,    -1,    -1,   109,    14,    -1,
      14,    -1,    -1,    -1,   116,    81,  1616,    -1,    -1,    23,
      -1,    -1,   124,    -1,    28,   127,    -1,   129,   130,   131,
     132,    81,    -1,    -1,   100,   137,   102,    -1,    44,    -1,
      44,   107,    -1,    49,    -1,    49,    52,   149,    52,    -1,
     100,   153,   102,   155,   120,   157,    -1,   107,   160,   436,
     437,    -1,   439,    23,   441,    -1,    -1,    73,    28,    73,
     120,    -1,    78,    79,  1674,    79,  1676,    -1,  1678,    85,
      86,    85,    86,    -1,   461,    -1,    -1,    -1,   154,    -1,
      -1,  1691,    98,    -1,    98,    -1,   100,    -1,   102,   476,
      -1,    -1,    -1,   107,   154,   482,    -1,    -1,    -1,    -1,
      -1,    -1,   489,    -1,   491,    -1,   120,    77,   124,    -1,
     124,   498,    -1,    -1,   501,   502,   132,    -1,   505,    -1,
      -1,   508,    -1,    -1,    -1,    -1,   513,    -1,    -1,    -1,
     100,    -1,   102,    -1,    -1,    -1,    -1,   107,    -1,   155,
     154,   155,    -1,   530,    23,    -1,    -1,    -1,    -1,    28,
     120,    -1,   539,    -1,    -1,   542,    -1,   544,    -1,   546,
      -1,   548,    -1,   550,    -1,   552,    -1,   554,    -1,   556,
      -1,   558,    -1,   560,   561,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,     0,    -1,   154,    -1,    -1,    -1,    -1,     7,
      -1,     9,    -1,    -1,    -1,   582,    14,    15,    16,  1308,
      18,    -1,    81,    21,   591,    23,    -1,    -1,    26,    -1,
      28,    29,    -1,    -1,    -1,    -1,    34,    -1,    -1,    37,
      38,   100,   609,   102,    -1,    -1,    44,    45,   107,    47,
      -1,    49,    -1,    -1,    52,    -1,    -1,   624,    56,    -1,
      -1,   120,    60,    61,    62,    63,    -1,    65,    -1,    -1,
      68,    69,    -1,   640,    -1,    73,    -1,    -1,    -1,    -1,
      78,    79,    -1,    81,    -1,    83,    84,    85,    86,    87,
      -1,    89,    -1,    43,    -1,   154,    -1,    -1,    -1,    -1,
      98,    -1,   100,    -1,   102,    -1,    -1,    -1,   106,   107,
      -1,   109,    -1,   111,    -1,    -1,    -1,    -1,   116,    23,
      -1,    -1,   120,   121,    28,    -1,   124,    -1,    -1,   127,
      -1,   129,   130,   131,   132,   133,    -1,   135,    -1,   137,
      -1,    -1,    -1,   141,    -1,   143,    -1,   145,   146,    -1,
      -1,   149,    -1,    -1,    -1,   153,   154,   155,    -1,   157,
      -1,   728,   160,    -1,    -1,    23,    -1,    -1,    -1,    -1,
      28,    -1,   739,    -1,    -1,   742,    34,    -1,   745,   746,
     747,    85,    -1,   750,    -1,   752,    -1,    -1,    -1,   756,
      -1,    -1,    -1,    -1,    52,   762,   100,   764,   102,   149,
     150,    -1,   769,   107,   771,    -1,    -1,    -1,   158,    -1,
     777,    -1,   779,    -1,    -1,    -1,   120,   784,   168,   786,
      78,   171,   172,    -1,    -1,   792,    23,   794,    -1,   796,
     797,    28,    -1,    -1,    -1,    -1,    -1,   804,   805,    -1,
     807,    -1,   100,    -1,   102,    -1,    -1,    -1,    -1,   107,
     154,    -1,    -1,    23,   821,    -1,    -1,   824,    28,    -1,
     827,    -1,   120,   830,    -1,   832,    -1,   834,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   842,    -1,    -1,   845,   137,
     847,    -1,    -1,    -1,    81,   852,    -1,   854,    -1,    -1,
      23,    -1,    -1,    -1,   861,    28,   154,    -1,   865,   157,
     867,    -1,   869,   100,    -1,   102,   873,    -1,    15,    16,
     107,   878,   879,    -1,   881,    85,    -1,   884,   885,   886,
     887,    -1,    29,   120,   891,   892,    -1,    34,   895,   896,
     100,    -1,   102,   900,    -1,    23,    -1,   107,    -1,    -1,
      28,    -1,   292,    -1,    77,    -1,    -1,    23,    -1,    56,
     120,    -1,    28,    60,    61,    62,    63,   154,    65,    -1,
     927,    68,    69,   930,    -1,    -1,    -1,   100,   935,   102,
     937,    -1,    -1,    -1,   107,   942,    -1,   944,    -1,   946,
      87,    -1,    89,   950,   154,   952,    -1,   120,    -1,   956,
      -1,   958,    -1,    81,    -1,    -1,    -1,    -1,    -1,   106,
     967,    -1,   969,    -1,    -1,    81,   113,   974,    -1,   116,
      -1,    -1,   100,    -1,   102,    -1,   983,    -1,   985,   107,
     127,   154,   129,    23,   100,    -1,   102,    -1,    28,    -1,
     137,   107,   120,    -1,  1001,    -1,  1003,    -1,    -1,    -1,
      -1,   148,   149,    -1,   120,  1012,   153,  1014,    -1,    -1,
     157,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,  1030,  1031,  1032,   154,    -1,    -1,    -1,
      -1,    -1,    -1,  1040,  1041,  1042,  1043,    77,   154,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   439,
      -1,   441,    -1,    -1,    -1,    -1,    -1,   447,    -1,    -1,
     100,    -1,   102,    -1,    -1,    -1,    -1,   107,    -1,    -1,
      -1,    -1,    -1,   463,   464,    -1,    -1,    -1,    -1,    -1,
     120,    -1,    -1,    -1,   474,   475,   476,    -1,    -1,    -1,
     480,   481,   482,   483,   484,    14,    -1,   487,   488,   489,
      -1,  1108,    -1,    -1,    23,    -1,    -1,  1114,    -1,    28,
    1117,    -1,  1119,    -1,   154,    34,  1123,    -1,    -1,    -1,
      -1,    -1,  1129,    -1,    -1,    44,    -1,    -1,    -1,    -1,
      49,    -1,    -1,    52,    -1,    -1,    -1,  1144,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,  1158,    -1,  1160,    73,    -1,  1163,    -1,  1165,    78,
      79,    -1,    -1,    -1,    -1,    -1,    85,    86,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,
      -1,   100,    -1,   102,    -1,    -1,    -1,    -1,   107,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   120,    -1,    -1,    -1,   124,  1213,    -1,    -1,    -1,
      -1,    -1,    -1,   132,  1221,    -1,  1223,    -1,   137,    -1,
    1227,    -1,  1229,    -1,  1231,    -1,  1233,    -1,    -1,    -1,
      -1,  1238,    -1,  1240,    -1,   154,   155,    -1,   157,    -1,
    1247,    -1,  1249,  1250,  1251,    14,  1253,  1254,  1255,  1256,
    1257,  1258,  1259,  1260,    -1,  1262,    -1,    -1,    -1,    14,
    1267,    -1,  1269,    -1,  1271,    -1,  1273,    -1,  1275,    -1,
    1277,    -1,  1279,    -1,    -1,    44,    -1,  1284,    -1,    -1,
      49,  1288,  1289,    52,    53,    -1,  1293,    -1,    -1,    44,
      -1,  1298,  1299,    -1,    49,  1302,    -1,    52,  1305,    -1,
      -1,  1308,    -1,    -1,    73,  1312,  1313,    -1,    -1,    -1,
      79,    -1,  1319,    -1,    -1,    -1,    85,    86,    73,    -1,
      -1,    -1,    -1,  1330,    79,    -1,    -1,    -1,    -1,    98,
      85,    86,    -1,  1340,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    98,    -1,    -1,    -1,    -1,    -1,  1356,
      -1,  1358,    25,  1360,    -1,   124,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   132,    -1,    -1,    -1,    -1,    41,   124,
      -1,    -1,    45,    46,    -1,    -1,    -1,   132,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   155,    -1,    -1,    -1,
      63,    64,    -1,    -1,    -1,    -1,    -1,  1404,  1405,  1406,
     155,    -1,    -1,    -1,    -1,    -1,    -1,    -1,  1415,    -1,
      -1,    -1,    -1,  1420,    -1,  1422,    -1,   807,    -1,  1426,
      -1,  1428,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,  1440,    -1,  1442,    -1,    -1,    -1,    -1,
      -1,    -1,   832,  1450,   834,  1452,  1453,    -1,  1455,    -1,
    1457,    -1,  1459,    -1,    -1,   845,    -1,   847,    -1,   849,
     850,    -1,   852,    -1,   854,    -1,   856,   857,    -1,   859,
     860,   861,    -1,   863,   864,   865,    -1,   867,    -1,   869,
      -1,   871,   872,    -1,    -1,    -1,    -1,     0,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    14,    -1,    -1,    -1,  1514,    21,  1516,
      -1,    24,    25,  1520,    27,  1522,    -1,    -1,  1525,  1526,
    1527,  1528,  1529,  1530,  1531,  1532,  1533,  1534,    -1,    42,
      43,    -1,    45,    44,    -1,    -1,  1543,  1544,    49,    -1,
      -1,    52,    53,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   226,   227,    68,   229,   230,    71,    -1,
      -1,    -1,    73,    -1,  1571,  1572,  1573,    -1,    79,    -1,
      -1,    -1,   245,    -1,    85,    86,    -1,    -1,    -1,    -1,
      -1,   254,    -1,   256,  1591,    -1,  1593,    98,  1595,    -1,
    1597,    -1,  1599,    -1,    -1,  1602,    -1,  1604,  1605,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,  1615,    -1,
    1617,  1618,    -1,   124,    -1,    -1,  1623,  1624,  1625,  1626,
      -1,   132,   295,   296,    -1,    -1,   299,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   149,   150,    -1,    -1,
      -1,    -1,    -1,    -1,   155,   158,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   168,    -1,    -1,   171,   172,
      -1,    -1,    -1,    -1,    -1,  1672,  1673,    -1,  1675,    -1,
    1677,    -1,  1679,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      14,    -1,  1689,  1690,    -1,    -1,    -1,  1694,  1695,    23,
      -1,  1698,  1699,    -1,    28,    -1,    -1,   210,    -1,  1706,
      34,   214,    -1,    -1,   217,    -1,    -1,    -1,    -1,    -1,
      44,   224,   225,   226,   227,    49,   229,   230,    52,    -1,
      -1,    -1,    -1,    -1,    -1,  1732,  1733,  1734,    -1,    -1,
    1737,    -1,   245,    -1,    -1,    -1,    -1,    -1,    -1,    73,
      -1,   254,    -1,   256,    78,    79,    -1,    -1,    -1,    -1,
      -1,    85,    86,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    98,    -1,   100,    -1,   102,    -1,
      -1,    -1,    -1,   107,    -1,    -1,    -1,    -1,    -1,   292,
      -1,    -1,   295,   296,    -1,    -1,   120,    -1,    -1,    -1,
     124,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   132,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     154,   155,    -1,   157,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,  1221,    -1,  1223,    -1,    -1,    -1,  1227,    -1,  1229,
      -1,  1231,    -1,  1233,    -1,  1235,  1236,    14,  1238,    -1,
    1240,    -1,  1242,  1243,    -1,    -1,    23,  1247,   371,  1249,
     373,    28,    -1,    -1,   537,   538,   539,    -1,   541,   542,
      -1,    -1,    -1,   546,    -1,   548,    -1,    44,    -1,    -1,
      -1,    -1,    49,    -1,   557,    52,    -1,    -1,    -1,    -1,
      -1,   564,    -1,    -1,   567,    -1,    -1,    -1,    -1,   572,
     573,   574,    -1,    -1,    -1,    -1,    73,    -1,    -1,    -1,
      -1,    -1,    79,    -1,    -1,    -1,    -1,    -1,    85,    86,
      -1,    -1,    -1,    -1,    -1,    -1,   439,    -1,   441,    -1,
      -1,    98,    -1,   100,   447,   102,   609,    -1,    -1,   612,
     107,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     463,   464,    -1,   120,    -1,    -1,    -1,   124,    -1,    -1,
      -1,   474,   475,   476,    -1,   132,    -1,   480,   481,   482,
     483,   484,    -1,    -1,   487,   488,   489,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   154,   155,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   520,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   528,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   537,   538,   539,    -1,   541,   542,
      -1,    -1,    -1,   546,    -1,   548,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   557,    -1,    -1,    -1,    -1,    -1,
      -1,   564,    -1,    -1,   567,    -1,    -1,    -1,    -1,   572,
     573,   574,    -1,    -1,    -1,    -1,    -1,     7,    -1,     9,
      -1,    -1,    -1,    -1,    14,    15,    16,    -1,    18,    -1,
      -1,    21,    -1,    23,    -1,    -1,    26,    -1,    28,    29,
      -1,    -1,    -1,    -1,    34,    -1,   609,    37,    38,   612,
      -1,    -1,    -1,    -1,    44,    45,    -1,    47,    -1,    49,
      -1,    -1,    52,    -1,    -1,    -1,    56,    -1,    -1,    -1,
      60,    61,    62,    63,  1514,    65,  1516,    -1,    68,    69,
    1520,    -1,  1522,    73,    -1,    -1,    -1,    -1,    78,    79,
      -1,    81,    -1,    83,    84,    85,    86,    87,    -1,    89,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,
     100,    -1,   102,    -1,    -1,    -1,   106,   107,    -1,   109,
      -1,   111,    -1,    -1,    -1,    -1,   116,    -1,    -1,    -1,
     120,   121,    -1,    -1,   124,    -1,    -1,   127,    -1,   129,
     130,   131,   132,   133,    -1,   135,    -1,   137,    -1,    -1,
      -1,   141,    -1,   143,    -1,   145,   146,    -1,    14,   149,
      -1,    -1,    -1,   153,   154,   155,    -1,   157,    -1,    -1,
     160,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   902,
     903,   904,   905,   906,    -1,    -1,   909,    -1,    44,    -1,
      -1,    -1,    -1,    49,    -1,    -1,    52,    53,    -1,    -1,
     923,   924,    -1,   926,    -1,    -1,   929,    -1,    14,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   939,    73,    -1,   942,
      -1,   944,    -1,    79,   947,    -1,    -1,    -1,    -1,    85,
      86,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    44,    -1,
      -1,    -1,    98,    49,   807,    -1,    52,    53,    -1,    -1,
      -1,   974,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    73,   124,   832,
      -1,   834,    -1,    79,    -1,    -1,   132,    -1,    -1,    85,
      86,    -1,   845,    -1,   847,    -1,   849,   850,    -1,   852,
      -1,   854,    98,   856,   857,    -1,   859,   860,   861,   155,
     863,   864,   865,    -1,   867,    -1,   869,    -1,   871,   872,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   124,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   132,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   902,
     903,   904,   905,   906,    -1,    -1,   909,    -1,    -1,   155,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     923,   924,    -1,   926,    -1,    -1,   929,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   939,    -1,     7,   942,
       9,   944,    -1,    -1,   947,    14,    15,    16,    -1,    18,
      -1,    -1,    21,    -1,    23,    -1,    -1,    26,    -1,    28,
      29,    -1,    -1,    -1,    -1,    34,    -1,    -1,    37,    38,
      -1,   974,    -1,    -1,    -1,    44,    45,    -1,    47,    -1,
      49,    -1,    -1,    52,    -1,    -1,    -1,    56,    -1,    -1,
      -1,    60,    61,    62,    63,    -1,    65,    -1,    -1,    68,
      69,    -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,    78,
      79,    -1,    81,    -1,    83,    84,    85,    86,    87,    -1,
      89,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,
      -1,   100,    -1,   102,    -1,    -1,    -1,   106,   107,    -1,
     109,    -1,   111,    -1,    -1,    -1,    -1,   116,    -1,    -1,
      -1,   120,   121,    -1,    -1,   124,    -1,    -1,   127,    -1,
     129,   130,   131,   132,   133,    -1,   135,    -1,   137,    -1,
      -1,    -1,   141,    -1,   143,    -1,   145,   146,    -1,    -1,
     149,    -1,    -1,    -1,   153,   154,   155,    -1,   157,    -1,
      -1,   160,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      15,    16,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,  1282,
      -1,  1284,    -1,  1286,    -1,    -1,    -1,    -1,    -1,    -1,
    1293,    -1,    -1,    -1,    -1,    14,    15,    16,    -1,    -1,
      -1,    56,    -1,    -1,    59,    60,    61,    62,    63,    -1,
      65,    -1,    -1,    68,    69,    34,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    44,    -1,    -1,    -1,    -1,
      49,    -1,    87,    52,    89,    -1,    -1,    56,    -1,    -1,
      -1,    60,    61,    62,    63,    -1,    65,    -1,    -1,    68,
      69,   106,    -1,    -1,    73,    -1,    -1,    -1,    -1,    78,
      79,   116,    -1,    -1,    -1,    -1,    85,    86,    -1,    -1,
      -1,    -1,   127,    -1,   129,    -1,    -1,    -1,  1221,    98,
    1223,    -1,   137,    -1,  1227,    -1,  1229,   106,  1231,    -1,
    1233,    -1,  1235,  1236,   149,  1238,    -1,  1240,    -1,  1242,
    1243,    -1,    -1,    -1,  1247,   124,  1249,     7,   127,     9,
     129,    -1,    -1,   132,    14,    15,    16,    -1,    -1,    -1,
      -1,    21,    -1,    23,    -1,    -1,    -1,    -1,    28,    29,
     149,    -1,    -1,    -1,    34,    -1,   155,    -1,   157,  1282,
      -1,  1284,    -1,  1286,    44,    45,    -1,    47,    -1,    49,
    1293,    -1,    52,    -1,    -1,    -1,    56,    -1,    -1,    -1,
      60,    61,    62,    63,    -1,    65,    -1,    -1,    68,    69,
      -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,    78,    79,
      -1,    -1,    -1,    83,    84,    85,    86,    87,    -1,    89,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,
     100,    -1,   102,    -1,    -1,    -1,   106,   107,    -1,   109,
      -1,    -1,    -1,    -1,    -1,    -1,   116,    -1,    -1,    -1,
     120,    -1,    -1,    -1,   124,    -1,    -1,   127,    -1,   129,
     130,   131,   132,   133,    -1,   135,    -1,   137,    -1,    -1,
      -1,   141,    -1,   143,    -1,   145,   146,    -1,    -1,   149,
      -1,    -1,    -1,   153,   154,   155,    -1,   157,    -1,    -1,
     160,     7,    -1,     9,    -1,    -1,    -1,    -1,    14,    15,
      16,    -1,    -1,    -1,    -1,    -1,    -1,    23,    -1,    -1,
      -1,    -1,    28,    29,    -1,    -1,    -1,    -1,    34,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    44,    45,
      -1,    47,    -1,    49,    -1,    -1,    52,    -1,    -1,    -1,
      56,    -1,    -1,    -1,    60,    61,    62,    63,    -1,    65,
      -1,    -1,    68,    69,    -1,    -1,    -1,    73,    -1,    -1,
      -1,    -1,    78,    79,    -1,    -1,    -1,    83,    84,    85,
      86,    87,    -1,    89,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    98,    -1,   100,    -1,   102,    -1,    -1,    -1,
     106,   107,    -1,   109,    -1,    -1,    -1,    -1,    -1,    -1,
     116,  1514,    -1,  1516,   120,    -1,    -1,  1520,   124,  1522,
      -1,   127,    -1,   129,   130,   131,   132,   133,    -1,   135,
      -1,   137,    -1,    -1,    -1,   141,    -1,   143,    -1,   145,
     146,    -1,    -1,   149,    -1,    -1,    -1,   153,   154,   155,
       7,   157,     9,    -1,   160,    -1,    -1,    14,    15,    16,
      -1,    -1,    -1,    -1,    -1,    -1,    23,    -1,    -1,    -1,
      -1,    28,    29,    -1,    -1,    -1,    -1,    34,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    44,    45,    -1,
      47,    -1,    49,    -1,    -1,    52,    -1,    -1,    -1,    56,
      -1,    -1,    -1,    60,    61,    62,    63,    -1,    65,    -1,
      -1,    68,    69,    -1,    -1,    -1,    73,    -1,    -1,    -1,
      -1,    78,    79,    -1,    -1,    -1,    83,    84,    85,    86,
      87,    -1,    89,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    98,    -1,   100,    -1,   102,    -1,    -1,    -1,   106,
     107,    -1,   109,    -1,    -1,    -1,    -1,    -1,    -1,   116,
      -1,    -1,    -1,   120,    -1,    -1,    -1,   124,    -1,    -1,
     127,    -1,   129,   130,   131,   132,    -1,    -1,    -1,    -1,
     137,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   145,   146,
      -1,    -1,   149,    14,    15,    16,   153,   154,   155,    -1,
     157,    -1,    23,   160,    -1,    -1,    -1,    28,    29,    -1,
      -1,    -1,    -1,    34,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    44,    -1,    -1,    -1,    -1,    49,    -1,
      -1,    52,    -1,    -1,    -1,    56,    -1,    -1,    -1,    60,
      61,    62,    63,    -1,    65,    -1,    -1,    68,    69,    -1,
      -1,    -1,    73,    -1,    -1,    -1,    -1,    78,    79,    -1,
      -1,    -1,    -1,    -1,    85,    86,    87,    -1,    89,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,   100,
      -1,   102,    -1,    -1,    -1,   106,   107,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   116,    -1,    -1,    -1,   120,
      14,    15,    16,   124,    -1,    -1,   127,    -1,   129,    -1,
      -1,   132,    -1,    -1,    -1,    29,   137,    -1,    -1,    -1,
      34,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   149,    -1,
      44,    -1,   153,   154,   155,    49,   157,    -1,    52,   160,
      -1,    -1,    56,    -1,    -1,    -1,    60,    61,    62,    63,
      -1,    65,    -1,    -1,    68,    69,    -1,    -1,    -1,    73,
      -1,    -1,    -1,    -1,    78,    79,    -1,    -1,    -1,    -1,
      -1,    85,    86,    87,    -1,    89,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    98,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   106,    -1,    -1,   109,    -1,    -1,    -1,    -1,
      -1,    -1,   116,    -1,    -1,    -1,    -1,    14,    15,    16,
     124,    -1,    -1,   127,    -1,   129,    -1,    -1,   132,    -1,
      -1,    -1,    29,   137,    -1,    -1,    -1,    34,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   149,    -1,    44,    -1,   153,
      -1,   155,    49,   157,    -1,    52,   160,    -1,    -1,    56,
      -1,    -1,    -1,    60,    61,    62,    63,    -1,    65,    -1,
      -1,    68,    69,    -1,    -1,    -1,    73,    -1,    -1,    -1,
      -1,    78,    79,    -1,    -1,    -1,    -1,    -1,    85,    86,
      87,    -1,    89,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    98,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   106,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   116,
      -1,    -1,    -1,    -1,    14,    15,    16,   124,    -1,    -1,
     127,    -1,   129,    23,    -1,   132,    -1,    -1,    28,    29,
     137,    -1,    -1,    -1,    34,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   149,    -1,    44,    -1,   153,    -1,   155,    49,
     157,    -1,    52,   160,    -1,    -1,    56,    -1,    -1,    -1,
      60,    61,    62,    63,    -1,    65,    -1,    -1,    68,    69,
      -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,    78,    79,
      -1,    -1,    -1,    -1,    -1,    85,    86,    87,    -1,    89,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,
     100,    -1,   102,    -1,    -1,    -1,   106,   107,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   116,    -1,    -1,    -1,
     120,    14,    15,    16,   124,    -1,    -1,   127,    21,   129,
      23,    -1,   132,    -1,    -1,    28,    -1,   137,    -1,    -1,
      -1,    34,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   149,
      -1,    44,    45,   153,   154,   155,    49,   157,    -1,    52,
      -1,    -1,    -1,    56,    -1,    -1,    -1,    60,    61,    62,
      63,    -1,    65,    -1,    -1,    68,    69,    -1,    -1,    -1,
      73,    -1,    -1,    -1,    -1,    78,    79,    -1,    -1,    -1,
      -1,    84,    85,    86,    -1,    -1,    89,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    98,    -1,   100,    -1,   102,
      -1,    -1,    -1,   106,   107,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   116,    -1,    -1,    -1,   120,    14,    15,
      16,   124,    -1,    -1,   127,    -1,   129,    23,    -1,   132,
      -1,    -1,    28,    -1,    -1,    -1,    -1,    -1,    34,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   149,    -1,    44,    45,
      -1,   154,   155,    49,   157,    -1,    52,    -1,    -1,    -1,
      56,    -1,    -1,    -1,    60,    61,    62,    63,    -1,    65,
      -1,    -1,    68,    69,    -1,    -1,    -1,    73,    -1,    -1,
      -1,    -1,    78,    79,    -1,    -1,    -1,    -1,    84,    85,
      86,    -1,    -1,    89,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    98,    -1,   100,    -1,   102,    -1,    -1,    -1,
     106,   107,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     116,    -1,    -1,    -1,   120,    14,    15,    16,   124,    -1,
      -1,   127,    21,   129,    -1,    -1,   132,    -1,    27,    -1,
      -1,    -1,    -1,    -1,    -1,    34,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   149,    -1,    44,    45,    -1,   154,   155,
      49,   157,    -1,    52,    -1,    -1,    -1,    56,    -1,    -1,
      -1,    60,    61,    62,    63,    -1,    65,    -1,    -1,    68,
      69,    -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,    78,
      79,    -1,    -1,    -1,    -1,    84,    85,    86,    -1,    -1,
      89,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    98,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   106,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   116,    -1,    14,
      15,    16,    -1,    -1,    -1,   124,    -1,    -1,   127,    24,
     129,    -1,    -1,   132,    29,    -1,    -1,    -1,   137,    34,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    44,
     149,    -1,    -1,    -1,    49,    -1,   155,    52,   157,    -1,
      -1,    56,    -1,    -1,    -1,    60,    61,    62,    63,    -1,
      65,    -1,    -1,    68,    69,    -1,    -1,    -1,    73,    -1,
      -1,    -1,    -1,    78,    79,    -1,    -1,    -1,    -1,    -1,
      85,    86,    87,    -1,    89,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    98,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   106,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   116,    -1,    -1,    -1,    -1,    14,    15,    16,   124,
      -1,    -1,   127,    -1,   129,    -1,    24,   132,    -1,    -1,
      -1,    29,   137,    -1,    -1,    -1,    34,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   149,    -1,    44,    -1,   153,    -1,
     155,    49,   157,    -1,    52,    -1,    -1,    -1,    56,    -1,
      -1,    -1,    60,    61,    62,    63,    -1,    65,    -1,    -1,
      68,    69,    -1,    -1,    -1,    73,    -1,    -1,    -1,    -1,
      78,    79,    -1,    -1,    -1,    -1,    -1,    85,    86,    87,
      -1,    89,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      98,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   106,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   116,    -1,
      -1,    -1,    -1,    14,    15,    16,   124,    -1,    -1,   127,
      -1,   129,    -1,    -1,   132,    -1,    -1,    -1,    -1,   137,
      -1,    -1,    -1,    34,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   149,    -1,    44,    -1,   153,    -1,   155,    49,   157,
      -1,    52,    -1,    -1,    -1,    56,    -1,    -1,    -1,    60,
      61,    62,    63,    -1,    65,    -1,    -1,    68,    69,    -1,
      -1,    -1,    73,    -1,    -1,    -1,    -1,    78,    79,    -1,
      -1,    -1,    -1,    -1,    85,    86,    -1,    -1,    89,    -1,
      -1,    -1,    -1,    15,    16,    -1,    -1,    98,    -1,    -1,
      -1,    23,    -1,    -1,    -1,   106,    28,    29,    -1,    -1,
      -1,    -1,    34,    -1,    -1,   116,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   124,    -1,    -1,   127,    -1,   129,    -1,
      -1,   132,    -1,    -1,    56,    -1,   137,    -1,    60,    61,
      62,    63,    -1,    65,    -1,    -1,    68,    69,   149,    -1,
      -1,    -1,    -1,    -1,   155,    -1,   157,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    87,    -1,    89,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   100,    -1,
     102,    -1,    -1,    -1,   106,   107,    -1,    -1,    -1,    -1,
      -1,   113,    -1,    -1,   116,    15,    16,    -1,   120,    -1,
      -1,    -1,    -1,    23,    -1,   127,    -1,   129,    28,    29,
      -1,    -1,    -1,    -1,    34,   137,    -1,    -1,    -1,    -1,
      14,    -1,    -1,    -1,    -1,    -1,    -1,   149,    -1,    23,
      -1,   153,   154,    -1,    28,   157,    56,    -1,    -1,    -1,
      60,    61,    62,    63,    -1,    65,    -1,    -1,    68,    69,
      44,    -1,    -1,    -1,    -1,    49,    -1,    -1,    52,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    87,    -1,    89,
      -1,    -1,    -1,    -1,    15,    16,    -1,    -1,    -1,    73,
     100,    -1,   102,    24,    -1,    79,   106,   107,    29,    -1,
      -1,    85,    86,    34,    -1,    -1,   116,    -1,    -1,    -1,
     120,    -1,    -1,    -1,    98,    -1,   100,   127,   102,   129,
      -1,    -1,    -1,   107,    -1,    56,    -1,   137,    -1,    60,
      61,    62,    63,    -1,    65,    -1,   120,    68,    69,   149,
     124,    -1,    -1,   153,   154,    -1,    -1,   157,   132,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    87,    -1,    89,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     154,   155,    -1,    -1,    -1,   106,    -1,    -1,    -1,    -1,
      -1,    -1,   113,    -1,    -1,   116,    -1,    -1,    -1,    -1,
      15,    16,    -1,    -1,    -1,    -1,   127,   128,   129,    24,
     131,    -1,    -1,    -1,    29,    -1,   137,    -1,    -1,    34,
      -1,    -1,    -1,    -1,    -1,    -1,   147,   148,   149,    -1,
      -1,    -1,   153,    -1,    -1,    -1,   157,    -1,    -1,    -1,
      -1,    56,    -1,    -1,    -1,    60,    61,    62,    63,    -1,
      65,    -1,    -1,    68,    69,    -1,    -1,    15,    16,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    24,    -1,    -1,    -1,
      -1,    29,    87,    -1,    89,    -1,    34,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   106,    -1,    -1,    -1,    -1,    -1,    -1,    56,    -1,
      -1,   116,    60,    61,    62,    63,    -1,    65,    -1,    -1,
      68,    69,   127,   128,   129,    -1,   131,    -1,    -1,    -1,
      -1,    -1,   137,    -1,    -1,    -1,    -1,    -1,    -1,    87,
      -1,    89,   147,   148,   149,    -1,    -1,    -1,   153,    -1,
      -1,    -1,   157,    -1,    -1,    -1,    -1,    -1,   106,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    15,    16,   116,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   127,
      29,   129,    -1,   131,    -1,    34,    -1,    -1,    -1,   137,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   147,
     148,   149,    -1,    -1,    -1,   153,    -1,    56,    -1,   157,
      -1,    60,    61,    62,    63,    -1,    65,    -1,    -1,    68,
      69,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    15,
      16,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    87,    -1,
      89,    -1,    -1,    29,    15,    16,    -1,    -1,    34,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   106,    29,    -1,
      -1,    -1,    -1,    34,   113,    -1,    -1,   116,    -1,    -1,
      56,    -1,    -1,    -1,    60,    61,    62,    63,   127,    65,
     129,    -1,    68,    69,    -1,    56,    -1,    -1,   137,    60,
      61,    62,    63,    -1,    65,    -1,    -1,    68,    69,    -1,
     149,    87,    -1,    89,   153,    -1,    -1,    -1,   157,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    87,    88,    89,    -1,
     106,    -1,    -1,    -1,    -1,    -1,    -1,   113,    -1,    -1,
     116,    -1,    -1,    -1,    -1,   106,    -1,    -1,    -1,    -1,
      -1,   127,    -1,   129,    -1,   116,    15,    16,    -1,    -1,
      -1,   137,    -1,    -1,    -1,    -1,   127,    -1,   129,    -1,
      29,    -1,    -1,   149,    -1,    34,   137,   153,    -1,    -1,
      -1,   157,    -1,    -1,    -1,    -1,    -1,    -1,   149,    14,
      15,    16,   153,    -1,    -1,    -1,   157,    56,    -1,    -1,
      -1,    60,    61,    62,    63,    -1,    65,    -1,    -1,    68,
      69,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    44,
      -1,    -1,    -1,    -1,    49,    -1,    -1,    52,    87,    -1,
      89,    56,    -1,    -1,    59,    60,    61,    62,    63,    -1,
      65,    -1,    -1,    68,    69,    -1,    -1,   106,    73,    -1,
      -1,    -1,    -1,    78,    79,    -1,    -1,   116,    -1,    -1,
      85,    86,    87,    -1,    89,    -1,    -1,    -1,   127,    -1,
     129,    -1,    -1,    98,    -1,    -1,    -1,    -1,   137,    -1,
      -1,   106,    -1,    -1,   109,    -1,    -1,    14,    15,    16,
     149,   116,    -1,    -1,   153,    -1,    -1,    -1,   157,   124,
      -1,    -1,   127,    -1,   129,    -1,    -1,   132,    -1,    -1,
      -1,    -1,   137,    -1,    -1,    -1,    -1,    44,    -1,    14,
      15,    16,    49,    -1,   149,    52,    -1,    -1,    -1,    56,
     155,    -1,    59,    60,    61,    62,    63,    -1,    65,    -1,
      -1,    68,    69,    -1,    -1,    -1,    73,    -1,    -1,    44,
      -1,    78,    79,    -1,    49,    -1,    -1,    52,    85,    86,
      87,    56,    89,    -1,    59,    60,    61,    62,    63,    -1,
      65,    98,    -1,    68,    69,    -1,    -1,    -1,    73,   106,
      -1,    -1,    -1,    78,    79,    -1,    -1,    -1,    -1,   116,
      85,    86,    87,    -1,    89,    -1,    -1,   124,    -1,    -1,
     127,    -1,   129,    98,    -1,   132,    15,    16,    -1,    -1,
     137,   106,    -1,    -1,    23,    -1,    -1,    -1,    -1,    28,
      -1,   116,   149,    -1,    -1,    -1,    -1,    36,   155,   124,
      -1,    -1,   127,    -1,   129,    -1,    -1,   132,    -1,    -1,
      -1,    50,   137,    52,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    61,    62,   149,    -1,    -1,    -1,    -1,    -1,
     155,    -1,    71,    -1,    -1,    -1,    75,    -1,    -1,    -1,
      79,    80,    -1,    82,    -1,    -1,    -1,    -1,    -1,    -1,
      89,    -1,    -1,    92,    -1,    -1,    -1,    15,    16,    98,
      -1,   100,    -1,   102,    -1,    23,    -1,   106,   107,    -1,
      28,    -1,    -1,    -1,    -1,    -1,    -1,   116,    -1,    -1,
     119,   120,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    50,   132,    52,    -1,    -1,    -1,   137,    -1,
      -1,    -1,    -1,    61,    62,    -1,    -1,    -1,    -1,    -1,
     149,    -1,    -1,    71,    -1,   154,    -1,    75,    -1,    -1,
      -1,    79,    80,    -1,    82,    -1,    -1,    -1,    -1,    -1,
      -1,    89,    -1,    -1,    92,    -1,    -1,    -1,    -1,    -1,
      98,    -1,   100,    -1,   102,    -1,    -1,    -1,   106,   107,
      -1,    -1,    15,    16,    -1,    -1,    -1,    -1,   116,    -1,
      23,   119,   120,    -1,    -1,    28,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   132,    -1,    -1,    -1,    -1,   137,
      -1,    -1,    45,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   149,    -1,    56,    -1,    -1,   154,    60,    61,    62,
      63,    -1,    65,    -1,    -1,    68,    69,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    15,    16,    -1,    -1,    -1,
      -1,    84,    -1,    23,    -1,    -1,    89,    -1,    28,    -1,
      -1,    -1,    -1,    -1,    15,    16,    -1,   100,    -1,   102,
      -1,    -1,    23,   106,   107,    -1,    -1,    28,    -1,    -1,
      -1,    -1,    -1,   116,    -1,    -1,    56,   120,    -1,    59,
      60,    61,    62,    63,   127,    65,   129,    -1,    68,    69,
      -1,    -1,    -1,    -1,   137,    56,    -1,    -1,    59,    60,
      61,    62,    63,    -1,    65,    -1,   149,    68,    69,    89,
      -1,   154,    -1,    -1,    -1,    -1,    -1,    15,    16,    -1,
     100,    -1,   102,    -1,    -1,    23,   106,   107,    89,    -1,
      28,    -1,    -1,    -1,    -1,    -1,   116,    -1,    -1,   100,
     120,   102,    -1,    -1,    -1,   106,   107,   127,    -1,   129,
      -1,    -1,    -1,    15,    16,   116,    -1,   137,    56,   120,
      -1,    -1,    60,    61,    62,    63,   127,    65,   129,   149,
      68,    69,    -1,    -1,   154,    -1,   137,    -1,    15,    16,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   149,    -1,
      -1,    89,    -1,   154,    56,    -1,    -1,    -1,    60,    61,
      62,    63,   100,    65,   102,    -1,    68,    69,   106,   107,
      -1,    -1,    -1,    50,    -1,    52,    -1,    -1,   116,    -1,
      -1,    -1,   120,    -1,    61,    62,    -1,    89,    -1,   127,
      -1,   129,    -1,    -1,    71,    -1,    -1,    99,    75,   137,
      -1,    -1,    79,    80,   106,    82,    -1,    -1,    -1,    -1,
      -1,   149,    89,    -1,   116,    92,   154,    -1,    -1,    -1,
      -1,    98,    15,    16,    -1,   127,    -1,   129,    -1,   106,
      -1,    -1,    -1,    -1,    -1,   137,    -1,    -1,    -1,   116,
      -1,    -1,   119,    -1,    -1,    -1,    -1,   149,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   132,   133,    50,   135,    52,
     137,    -1,    -1,    -1,   141,    -1,   143,    -1,    61,    62,
      -1,    -1,   149,    -1,    -1,    -1,    -1,    -1,    71,    -1,
      -1,    -1,    75,    -1,    -1,    -1,    79,    80,    -1,    82,
      15,    16,    -1,    -1,    -1,    -1,    89,    -1,    -1,    92,
      -1,    -1,    -1,    -1,    -1,    98,    -1,    -1,    -1,    -1,
      -1,    -1,   105,   106,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   116,    -1,    50,   119,    52,    15,    16,
      -1,    -1,    57,    -1,    -1,    -1,    61,    62,    -1,   132,
      -1,    -1,    -1,    -1,   137,    -1,    71,    -1,    -1,    -1,
      75,    -1,    -1,    -1,    79,    80,   149,    82,    -1,    -1,
      -1,    -1,    -1,    50,    89,    52,    -1,    92,    -1,    -1,
      -1,    -1,    -1,    98,    61,    62,    -1,    -1,    -1,    -1,
      -1,   106,    -1,    -1,    71,    -1,    -1,    -1,    75,    -1,
      -1,   116,    79,    80,   119,    82,    15,    16,    -1,    -1,
      -1,    -1,    89,    -1,    -1,    92,    -1,   132,    -1,    -1,
      -1,    98,   137,    -1,    -1,    -1,    -1,    -1,   105,   106,
      -1,    -1,    -1,    -1,   149,    -1,    -1,    -1,    -1,   116,
      -1,    50,   119,    52,    15,    16,    -1,    -1,    57,    -1,
      -1,    -1,    61,    62,    -1,   132,    -1,    -1,    -1,    -1,
     137,    -1,    71,    -1,    -1,    -1,    75,    -1,    -1,    -1,
      79,    80,   149,    82,    -1,    -1,    -1,    -1,    -1,    50,
      89,    52,    -1,    92,    -1,    -1,    57,    -1,    -1,    98,
      61,    62,    -1,    -1,    -1,    -1,    -1,   106,    -1,    -1,
      71,    -1,    -1,    -1,    75,    -1,    -1,   116,    79,    80,
     119,    82,    15,    16,    -1,    -1,    -1,    -1,    89,    -1,
      -1,    92,    -1,   132,    -1,    -1,    -1,    98,   137,    -1,
      -1,    -1,    -1,    -1,    -1,   106,    -1,    -1,    -1,    -1,
     149,    -1,    -1,    -1,    -1,   116,    -1,    50,   119,    52,
      -1,    15,    16,    -1,    -1,    -1,    -1,    -1,    61,    62,
      -1,   132,    -1,    -1,    -1,    -1,   137,    -1,    71,    -1,
      -1,    -1,    75,    -1,    -1,    -1,    79,    80,   149,    82,
      -1,    -1,    -1,    -1,    -1,    -1,    89,    -1,    -1,    -1,
      -1,    -1,    56,    -1,    -1,    98,    60,    61,    62,    63,
      -1,    65,    -1,   106,    68,    69,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   116,    -1,    -1,   119,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    89,    -1,    -1,    -1,   132,
      -1,    -1,    -1,    -1,   137,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   106,    -1,    -1,    -1,   149,    -1,    -1,    -1,
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
     128,   131,   147,   148,   195,    91,    19,   194,   207,   284,
     118,   139,   143,   210,   276,   281,   140,   144,   214,   226,
     226,   126,    22,   235,   143,   236,   279,   282,   142,   144,
     239,    12,    20,   252,   133,   184,   278,   281,   219,   231,
      13,    89,   275,    13,    89,   275,   306,   306,   165,   306,
     165,   306,   184,   208,   231,    52,    59,   109,   205,   208,
     232,   133,   135,   141,   142,   143,   144,   280,   283,   280,
     283,   306,   165,   279,   282,   307,    27,   208,   226,   231,
     321,    23,    28,   165,   279,   282,   306,   319,    81,   165,
     279,   282,   306,   317,   321,    21,   165,   279,   282,   306,
      83,   306,     8,   253,   208,   197,   253,   197,   306,    59,
     208,   306,   306,    33,   231,   306,    41,   197,   306,   243,
     243,   287,    52,   306,    53,    53,    52,   193,   234,   224,
     226,    59,   226,   224,   321,   208,   231,   223,   226,   321,
     306,    70,   208,   208,   226,    59,   223,   261,   267,   306,
     259,   260,   306,   262,   306,   267,   306,   255,   306,   208,
     306,   266,   306,   231,   306,   231,   306,   262,   306,   266,
     306,   306,    79,    67,   262,    10,   236,   260,   279,   282,
     239,   210,   278,   281,   214,    13,   267,   264,   255,    66,
      74,   208,   306,   193,   231,   231,   243,   285,   184,    58,
     184,   306,   266,   243,    24,   309,   194,   309,    99,    99,
     208,   208,    35,   108,   110,   165,   115,   255,   255,   306,
      13,    13,   116,   272,   274,    81,     4,    98,     4,    81,
      43,    98,    43,    81,   306,    46,    81,   134,    48,    98,
      48,    81,   136,    11,    98,    81,   136,    11,    51,    81,
     306,    39,    11,    40,    51,    98,    42,    42,   280,   283,
     286,    48,    78,    98,    11,    40,    51,    98,   279,   282,
      12,   278,   281,   290,    12,    59,    72,    72,    77,    77,
      55,   158,   158,    81,   112,   304,   158,   299,    17,   292,
     293,   294,   298,    81,   125,     6,    81,    76,   300,   301,
      30,   117,   302,    30,   302,    81,    94,   295,   297,   305,
     272,    55,    81,   158,    55,    81,   158,    17,    55,   158,
     298,   305,   295,   296,   305,    17,    55,   158,   294,    76,
     299,   301,    76,   303,   304,     1,   159,   170,   306,   172,
     179,    47,   176,   194,    47,   176,   277,    52,   188,   306,
     277,   188,   306,   113,   185,   306,   306,   306,   278,   281,
     306,   197,   306,    88,   207,   226,   306,   276,   281,    52,
     211,   213,   306,   213,   306,   276,   281,   213,   228,   306,
     233,   306,   135,   281,    52,   237,   238,   306,   238,   306,
     278,   281,   238,   240,   306,   242,   306,    48,    78,    98,
      54,    85,   306,    85,   306,    59,   306,   306,   165,   165,
     286,   286,   286,   193,   306,   306,   165,   306,    48,    78,
      98,    11,    40,    51,    98,   133,   133,   135,   135,   289,
     291,   306,   289,   291,   306,   289,   291,   306,   289,   291,
     306,   165,   306,   165,   306,    27,   231,   321,    27,   226,
      27,   226,   306,    81,   165,   306,   165,   306,   165,   279,
     282,   165,   306,   165,   306,   165,   279,   282,   165,   279,
     282,   306,   165,   279,   282,   306,   165,   306,   165,   306,
     165,   279,   282,   306,     8,     8,   253,   253,   306,   306,
      33,   306,    41,   243,   306,   306,   306,   306,    53,    53,
     224,   306,   306,    59,   321,   306,   306,    70,    70,   208,
     306,    59,   261,   267,   261,   267,   261,   105,   259,   260,
      53,   262,    70,   267,   105,   255,   105,   208,   266,   105,
     231,   105,   231,   260,   262,   266,    12,   306,   258,   262,
     306,    52,   263,    57,   264,   306,   264,   306,   264,    52,
     268,   270,   306,   270,   306,   270,   306,   286,   286,    67,
     306,    77,   306,    74,   286,   231,   306,    58,   306,   309,
      99,    24,   309,    99,    99,    99,   208,   306,   110,   306,
     115,   115,   255,   255,   306,    13,    13,    81,     4,    81,
      81,    43,    81,   306,    81,   306,   134,    81,   134,    48,
      81,   134,   136,    40,    81,    11,   136,    81,   136,    81,
     136,   306,    81,   306,    81,   136,    11,    98,    81,   136,
      11,    51,   306,    81,   306,   291,   291,    81,   134,    48,
      98,    48,    81,   136,    11,    98,    81,   136,    11,    51,
     306,   306,   306,    12,   290,    12,   290,    12,   208,   226,
     306,   306,   306,   306,   158,   112,    55,   158,    55,    81,
     158,    55,    81,   158,    17,    55,   158,   298,    17,    55,
     158,   294,   125,   299,    76,   301,    76,    81,   302,    30,
     302,    81,   302,    81,   305,   295,   305,    96,   158,    55,
     158,   158,    55,   158,    55,   158,   158,    17,    55,   158,
     305,    55,   158,   158,    17,    55,   158,   299,    76,   299,
     279,   282,    12,   278,   281,   290,   290,   185,   306,   192,
     188,    12,   290,   192,   306,   185,   196,   306,   196,   306,
     278,   281,   197,   306,   286,   226,   290,   290,   208,   306,
     213,   213,    12,   290,    12,   290,   228,   233,    11,    40,
      51,    98,   290,   234,   306,   238,   238,    12,   290,    12,
     290,   240,   242,    81,   134,    48,    98,    48,   306,    81,
     306,    85,    81,   306,    85,   306,   184,   215,   240,    53,
     193,   110,   165,    81,   134,    48,    98,    48,    81,   136,
      11,    98,    81,   136,    11,    51,    48,    78,    98,    48,
      78,    98,    11,    40,    51,    98,    11,    40,    51,    98,
     289,   291,   289,   291,   289,   291,   289,   165,   165,    27,
     226,    27,   226,   306,    27,    27,    27,   226,   165,   165,
     165,   306,   165,   306,   165,   165,   165,   306,   165,   306,
     165,   306,   165,   306,   165,   279,   282,   165,   306,   165,
     306,   165,   279,   282,   165,   165,   165,   306,   165,   306,
     306,   306,     8,   306,   306,   306,   306,   306,   306,   306,
     306,    70,   306,   262,   262,   262,   262,   306,   105,   306,
      53,   306,    70,   306,   105,   306,   105,   306,   105,   306,
     105,    57,   260,   267,   306,   258,   262,   262,   306,   306,
     264,   264,   267,   306,   270,   270,   271,   265,   306,   306,
      77,    77,   306,   240,   286,   306,   309,    99,   306,   309,
      99,    99,   306,   306,   115,   115,   255,    81,    81,   306,
     134,    81,   134,   134,   136,    40,    40,    81,   136,   136,
     306,   136,    40,    81,    11,   136,    81,   136,    81,   136,
     306,   134,    81,   134,    48,    81,   134,   136,    40,    81,
      11,   136,    81,   136,    81,   136,   306,    12,   306,    12,
     306,    70,   208,   208,   226,   158,   158,    55,   158,   158,
      55,   158,    55,   158,   158,    17,    55,   158,    55,   158,
     158,    17,    55,   158,   299,    76,   299,   302,    81,   302,
     302,   305,    81,   158,   158,   158,    55,   158,   158,   158,
      55,   158,   158,   299,   306,   306,   306,    12,   290,    12,
     290,    12,    53,   185,   192,   306,    12,   196,   196,   196,
     306,   196,   306,   207,    53,   208,   306,    12,   306,    12,
      81,   136,    11,    98,    81,   136,    11,    51,    53,   234,
     306,    12,   306,    12,   134,    81,   134,    48,    81,   134,
     306,    81,   306,   306,    81,   306,   192,   306,    53,   306,
     110,   134,    81,   134,    48,    81,   134,   136,    40,    81,
      11,   136,    81,   136,    81,   136,    81,   134,    48,    98,
      48,    81,   134,    48,    98,    48,    81,   136,    11,    98,
      81,   136,    11,    51,    81,   136,    11,    98,    81,   136,
      11,    51,    27,    27,    27,   226,    27,   165,   165,   165,
     165,   165,   165,   165,   306,   165,   306,   165,   165,   165,
     306,   165,   306,   165,   165,   306,   306,   306,   306,   306,
     306,   306,   306,   306,   306,    57,    70,   267,   258,    53,
     262,    53,   267,   306,   306,    77,   240,    99,   309,    99,
     115,   134,   136,   136,    40,   136,    40,    40,    81,   136,
     136,   134,    81,   134,   134,   136,    40,    40,    81,   136,
     136,   306,   306,   306,    70,    70,   208,   158,   158,   158,
      55,   158,   158,   158,    55,   158,   158,   299,   302,   158,
     158,   306,    12,   306,    12,   306,   192,   306,    53,   306,
     196,   196,   306,    53,   306,   306,   136,    40,    81,    11,
     136,    81,   136,    81,   136,   306,    53,   306,   306,   134,
      81,   134,   134,   306,   306,   306,   306,   134,    81,   134,
     134,   136,    40,    40,    81,   136,   136,   134,    81,   134,
      48,    81,   134,   134,    81,   134,    48,    81,   134,   136,
      40,    81,    11,   136,    81,   136,    81,   136,   136,    40,
      81,    11,   136,    81,   136,    81,   136,    27,   165,   165,
     165,   165,   306,   306,    70,   306,    53,   306,    53,   306,
      99,   136,   136,   136,    40,   134,   136,   136,    40,   306,
     306,    70,   158,   158,   306,   306,   192,   192,   306,   306,
     136,    40,    40,    81,   136,   136,   306,   134,   134,   136,
     136,    40,   134,    81,   134,   134,   134,    81,   134,   134,
     136,    40,    40,    81,   136,   136,   136,    40,    40,    81,
     136,   136,   306,   306,   306,   136,   136,   306,   192,   136,
     136,    40,   136,   134,   134,   136,   136,    40,   136,   136,
      40,   136,   136,   136
};

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
     178,   178,   178,   178,   178,   178,   179,   179,   179,   179,
     179,   179,   179,   179,   179,   179,   179,   179,   179,   180,
     180,   181,   181,   181,   181,   181,   181,   181,   182,   183,
     184,   184,   185,   185,   185,   185,   185,   186,   186,   187,
     187,   187,   188,   188,   189,   189,   189,   189,   190,   190,
     191,   192,   192,   192,   192,   193,   193,   193,   193,   193,
     193,   193,   193,   193,   193,   193,   194,   194,   195,   195,
     195,   195,   195,   195,   195,   195,   195,   196,   196,   196,
     197,   197,   197,   197,   197,   197,   197,   197,   198,   199,
     199,   200,   201,   202,   202,   203,   203,   204,   204,   204,
     204,   205,   205,   206,   206,   207,   207,   208,   208,   208,
     209,   209,   210,   210,   210,   210,   211,   211,   211,   211,
     212,   212,   212,   212,   212,   213,   213,   214,   214,   214,
     214,   214,   214,   214,   214,   215,   215,   216,   216,   216,
     216,   217,   217,   218,   218,   219,   219,   219,   219,   219,
     219,   219,   219,   219,   219,   219,   219,   219,   219,   219,
     219,   219,   219,   219,   219,   219,   219,   219,   219,   219,
     219,   219,   220,   220,   220,   220,   220,   220,   220,   220,
     221,   221,   221,   221,   221,   221,   221,   221,   222,   222,
     222,   222,   222,   222,   222,   222,   223,   223,   223,   223,
     224,   224,   224,   225,   225,   226,   227,   227,   227,   228,
     228,   229,   229,   229,   229,   230,   230,   230,   230,   231,
     231,   232,   232,   232,   233,   233,   233,   234,   234,   235,
     235,   235,   235,   235,   235,   236,   237,   237,   237,   237,
     238,   238,   239,   239,   239,   239,   239,   239,   239,   239,
     240,   240,   240,   240,   240,   240,   241,   241,   241,   242,
     242,   243,   243,   243,   243,   243,   243,   243,   243,   243,
     243,   243,   243,   243,   243,   243,   243,   243,   243,   243,
     243,   243,   243,   243,   243,   243,   243,   243,   243,   244,
     244,   244,   244,   245,   245,   245,   245,   246,   246,   247,
     247,   248,   248,   249,   249,   250,   250,   251,   251,   251,
     251,   251,   251,   251,   251,   251,   251,   251,   251,   251,
     251,   251,   251,   251,   251,   251,   251,   252,   252,   252,
     252,   252,   252,   252,   252,   253,   253,   253,   253,   254,
     254,   254,   254,   254,   254,   255,   255,   256,   256,   257,
     257,   258,   258,   258,   259,   259,   259,   259,   259,   259,
     259,   260,   260,   261,   261,   261,   261,   262,   262,   262,
     262,   262,   262,   263,   263,   263,   263,   264,   264,   264,
     265,   265,   265,   265,   265,   266,   266,   266,   266,   266,
     266,   266,   266,   266,   266,   266,   266,   266,   266,   267,
     267,   268,   268,   268,   268,   269,   269,   269,   269,   269,
     270,   270,   271,   271,   271,   271,   271,   271,   271,   271,
     271,   271,   271,   271,   271,   271,   271,   271,   271,   271,
     271,   271,   271,   271,   271,   271,   272,   273,   273,   273,
     274,   274,   274,   275,   275,   275,   275,   276,   276,   276,
     276,   276,   276,   276,   276,   277,   277,   277,   277,   277,
     277,   277,   277,   278,   278,   278,   278,   278,   278,   278,
     278,   279,   279,   279,   279,   279,   279,   279,   279,   279,
     279,   279,   279,   279,   279,   279,   279,   280,   280,   280,
     280,   280,   280,   280,   280,   280,   280,   280,   280,   280,
     280,   280,   280,   280,   280,   280,   280,   280,   280,   280,
     280,   281,   281,   281,   281,   281,   281,   281,   281,   281,
     281,   281,   281,   282,   282,   282,   282,   282,   282,   282,
     282,   282,   282,   282,   282,   282,   282,   282,   282,   282,
     282,   282,   282,   282,   282,   282,   282,   283,   283,   283,
     283,   283,   283,   283,   283,   283,   283,   283,   283,   283,
     283,   283,   283,   283,   283,   283,   283,   283,   283,   283,
     283,   283,   283,   283,   283,   283,   283,   283,   283,   283,
     283,   283,   283,   284,   284,   284,   284,   284,   284,   284,
     284,   284,   284,   284,   285,   285,   285,   285,   285,   285,
     285,   285,   286,   286,   286,   286,   287,   287,   288,   288,
     288,   288,   288,   288,   288,   288,   288,   288,   288,   288,
     288,   289,   289,   289,   289,   289,   290,   290,   290,   291,
     291,   291,   291,   291,   291,   291,   291,   291,   291,   291,
     291,   291,   291,   291,   291,   291,   291,   291,   291,   291,
     291,   291,   291,   291,   291,   291,   291,   291,   291,   291,
     291,   291,   291,   291,   291,   291,   291,   291,   291,   291,
     291,   291,   291,   291,   291,   291,   291,   291,   291,   291,
     291,   291,   291,   292,   293,   294,   294,   294,   294,   294,
     294,   294,   294,   294,   294,   294,   294,   294,   294,   294,
     295,   295,   295,   296,   296,   296,   296,   297,   297,   298,
     298,   298,   298,   298,   298,   298,   298,   298,   298,   298,
     298,   298,   298,   298,   299,   299,   299,   299,   300,   300,
     301,   301,   301,   301,   301,   301,   301,   301,   301,   301,
     301,   301,   301,   301,   301,   301,   301,   301,   301,   302,
     302,   303,   304,   304,   304,   304,   304,   304,   305,   305,
     306,   306,   307,   307,   307,   307,   307,   307,   308,   308,
     308,   308,   308,   308,   308,   308,   309,   310,   310,   310,
     310,   311,   311,   311,   311,   311,   311,   311,   311,   311,
     311,   311,   311,   311,   311,   312,   312,   313,   314,   314,
     314,   314,   314,   314,   314,   314,   315,   315,   315,   316,
     316,   316,   316,   317,   317,   318,   318,   319,   319,   319,
     319,   319,   319,   319,   320,   320,   321,   321,   322,   322,
     323,   323
};

  /* YYR2[YYN] -- Number of symbols on the right hand side of rule YYN.  */
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
       5,     4,     5,     4,     4,     3,     2,     1,     2,     1,
       1,     2,     1,     3,     2,     1,     1,     1,     1,     3,
       2,     4,     3,     1,     1,     2,     2,     2,     1,     1,
       1,     2,     1,     8,     7,     7,     6,     3,     2,     1,
       5,     4,     1,     4,     5,     4,     4,     3,     2,     1,
       1,     3,     2,     2,     1,     5,     6,     5,     5,     4,
       5,     4,     4,     3,     3,     2,     1,     2,     1,     6,
       5,     6,     5,     5,     4,     5,     4,     1,     4,     3,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     3,
       2,     2,     2,     3,     2,     4,     3,     4,     3,     3,
       2,     5,     2,     2,     1,     3,     2,     1,     4,     3,
       1,     3,     3,     2,     3,     2,     5,     4,     4,     3,
       1,     4,     3,     4,     3,     1,     3,     5,     4,     4,
       3,     5,     4,     4,     3,     1,     4,     2,     1,     2,
       1,     2,     1,     4,     3,     1,     1,     2,     1,     3,
       2,     5,     4,     4,     3,     5,     4,     4,     3,     1,
       5,     4,     4,     3,     2,     1,     4,     3,     2,     1,
       2,     1,     6,     5,     5,     4,     5,     4,     4,     3,
       8,     7,     7,     6,     7,     6,     6,     5,     5,     4,
       4,     3,     4,     3,     3,     2,     3,     2,     1,     2,
       2,     1,     2,     2,     1,     1,     1,     4,     3,     1,
       1,     5,     4,     4,     3,     5,     4,     4,     3,     2,
       1,     1,     3,     2,     4,     3,     1,     2,     1,     1,
       4,     3,     4,     3,     3,     3,     5,     4,     4,     3,
       1,     3,     5,     4,     4,     3,     5,     4,     4,     3,
       1,     4,     3,     6,     5,     4,     1,     4,     3,     1,
       2,     2,     1,     3,     2,     2,     1,     1,     7,     6,
       5,     6,     5,     4,     6,     5,     4,     5,     4,     3,
       1,     3,     2,     1,     1,     1,     1,     1,     1,     5,
       4,     4,     3,     4,     3,     4,     3,     3,     2,     4,
       3,     3,     2,     3,     2,     4,     3,     3,     2,     2,
       1,     6,     5,     5,     4,     5,     4,     4,     3,     6,
       5,     5,     4,     5,     4,     4,     3,     6,     5,     5,
       4,     5,     4,     4,     3,     4,     3,     3,     2,     3,
       2,     5,     4,     4,     3,     1,     1,     3,     2,     1,
       3,     1,     5,     4,     1,     6,     5,     5,     4,     4,
       3,     1,     2,     3,     3,     3,     3,     1,     4,     3,
       4,     3,     3,     5,     4,     4,     3,     1,     4,     3,
       1,     5,     4,     4,     3,     3,     2,     3,     2,     5,
       4,     4,     3,     5,     4,     4,     3,     2,     1,     1,
       3,     5,     4,     4,     3,     1,     4,     3,     4,     3,
       1,     3,     1,     3,     2,     5,     4,     4,     3,     5,
       4,     4,     3,     5,     4,     4,     3,     4,     5,     4,
       4,     3,     7,     6,     6,     5,     1,     1,     2,     2,
       1,     2,     2,     1,     1,     2,     3,     5,     4,     4,
       3,     4,     3,     3,     2,     5,     4,     4,     3,     4,
       3,     3,     2,     6,     5,     5,     4,     5,     4,     4,
       3,     6,     5,     5,     4,     5,     4,     4,     3,     7,
       6,     6,     5,     6,     5,     5,     4,     6,     5,     5,
       4,     5,     4,     4,     3,     7,     6,     6,     5,     6,
       5,     5,     4,     7,     6,     6,     5,     6,     5,     5,
       4,     5,     4,     4,     3,     5,     4,     4,     3,     7,
       6,     6,     5,     5,     4,     4,     3,     5,     4,     4,
       3,     7,     6,     6,     5,     6,     5,     5,     4,     6,
       5,     5,     4,     8,     7,     7,     6,     5,     4,     4,
       3,     5,     4,     4,     3,     7,     6,     6,     5,     6,
       5,     5,     4,     6,     5,     5,     4,     8,     7,     7,
       6,     6,     5,     5,     4,     6,     5,     5,     4,     8,
       7,     7,     6,     5,     4,     4,     3,     4,     3,     3,
       2,     4,     3,     3,     5,     4,     4,     3,     4,     3,
       3,     2,     3,     2,     2,     1,     1,     1,     1,     4,
       3,     4,     3,     4,     3,     4,     3,     4,     3,     4,
       3,     5,     4,     4,     3,     2,     1,     3,     3,     6,
       5,     5,     4,     6,     5,     5,     4,     5,     4,     4,
       3,     5,     4,     4,     3,     7,     6,     6,     5,     6,
       5,     5,     4,     6,     5,     5,     4,     5,     4,     4,
       3,     7,     6,     6,     5,     6,     5,     5,     4,     6,
       5,     5,     4,     5,     4,     4,     3,     4,     3,     5,
       4,     3,     3,     2,     1,     4,     3,     3,     2,     3,
       2,     2,     1,     3,     2,     2,     1,     2,     1,     1,
       3,     2,     1,     3,     2,     2,     1,     2,     1,     5,
       3,     4,     2,     4,     2,     3,     1,     4,     2,     3,
       1,     3,     1,     2,     3,     2,     2,     1,     2,     1,
       5,     4,     3,     4,     3,     2,     4,     3,     2,     4,
       3,     2,     3,     2,     1,     3,     2,     1,     1,     2,
       1,     2,     4,     3,     2,     1,     2,     1,     2,     1,
       2,     1,     1,     1,     1,     1,     1,     1,     7,     6,
       5,     4,     6,     5,     4,     3,     1,     5,     4,     4,
       3,     5,     4,     4,     3,     6,     5,     5,     4,     5,
       4,     4,     3,     3,     2,     3,     3,     3,     4,     3,
       4,     3,     6,     5,     5,     4,     2,     1,     1,     2,
       1,     3,     2,     2,     1,     2,     1,     2,     1,     2,
       1,     1,     1,     1,     2,     1,     2,     1,     2,     1,
       2,     1
};


#define yyerrok         (yyerrstatus = 0)
#define yyclearin       (yychar = YYEMPTY)
#define YYEMPTY         (-2)
#define YYEOF           0

#define YYACCEPT        goto yyacceptlab
#define YYABORT         goto yyabortlab
#define YYERROR         goto yyerrorlab


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
      YYERROR;                                                  \
    }                                                           \
while (0)

/* Error token number */
#define YYTERROR        1
#define YYERRCODE       256


/* YYLLOC_DEFAULT -- Set CURRENT to span from RHS[1] to RHS[N].
   If N is 0, then set CURRENT to the empty location which ends
   the previous symbol: RHS[0] (always defined).  */

#ifndef YYLLOC_DEFAULT
# define YYLLOC_DEFAULT(Current, Rhs, N)                                \
    do                                                                  \
      if (N)                                                            \
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
    while (0)
#endif

#define YYRHSLOC(Rhs, K) ((Rhs)[K])


/* Enable debugging if requested.  */
#if YYDEBUG

# ifndef YYFPRINTF
#  include <stdio.h> /* INFRINGES ON USER NAME SPACE */
#  define YYFPRINTF fprintf
# endif

# define YYDPRINTF(Args)                        \
do {                                            \
  if (yydebug)                                  \
    YYFPRINTF Args;                             \
} while (0)


/* YY_LOCATION_PRINT -- Print the location on the stream.
   This macro was not mandated originally: define only if we know
   we won't break user code: when these are the locations we know.  */

#ifndef YY_LOCATION_PRINT
# if defined YYLTYPE_IS_TRIVIAL && YYLTYPE_IS_TRIVIAL

/* Print *YYLOCP on YYO.  Private, do not rely on its existence. */

YY_ATTRIBUTE_UNUSED
static unsigned
yy_location_print_ (FILE *yyo, YYLTYPE const * const yylocp)
{
  unsigned res = 0;
  int end_col = 0 != yylocp->last_column ? yylocp->last_column - 1 : 0;
  if (0 <= yylocp->first_line)
    {
      res += YYFPRINTF (yyo, "%d", yylocp->first_line);
      if (0 <= yylocp->first_column)
        res += YYFPRINTF (yyo, ".%d", yylocp->first_column);
    }
  if (0 <= yylocp->last_line)
    {
      if (yylocp->first_line < yylocp->last_line)
        {
          res += YYFPRINTF (yyo, "-%d", yylocp->last_line);
          if (0 <= end_col)
            res += YYFPRINTF (yyo, ".%d", end_col);
        }
      else if (0 <= end_col && yylocp->first_column < end_col)
        res += YYFPRINTF (yyo, "-%d", end_col);
    }
  return res;
 }

#  define YY_LOCATION_PRINT(File, Loc)          \
  yy_location_print_ (File, &(Loc))

# else
#  define YY_LOCATION_PRINT(File, Loc) ((void) 0)
# endif
#endif


# define YY_SYMBOL_PRINT(Title, Type, Value, Location)                    \
do {                                                                      \
  if (yydebug)                                                            \
    {                                                                     \
      YYFPRINTF (stderr, "%s ", Title);                                   \
      yy_symbol_print (stderr,                                            \
                  Type, Value, Location); \
      YYFPRINTF (stderr, "\n");                                           \
    }                                                                     \
} while (0)


/*----------------------------------------.
| Print this symbol's value on YYOUTPUT.  |
`----------------------------------------*/

static void
yy_symbol_value_print (FILE *yyoutput, int yytype, YYSTYPE const * const yyvaluep, YYLTYPE const * const yylocationp)
{
  FILE *yyo = yyoutput;
  YYUSE (yyo);
  YYUSE (yylocationp);
  if (!yyvaluep)
    return;
# ifdef YYPRINT
  if (yytype < YYNTOKENS)
    YYPRINT (yyoutput, yytoknum[yytype], *yyvaluep);
# endif
  YYUSE (yytype);
}


/*--------------------------------.
| Print this symbol on YYOUTPUT.  |
`--------------------------------*/

static void
yy_symbol_print (FILE *yyoutput, int yytype, YYSTYPE const * const yyvaluep, YYLTYPE const * const yylocationp)
{
  YYFPRINTF (yyoutput, "%s %s (",
             yytype < YYNTOKENS ? "token" : "nterm", yytname[yytype]);

  YY_LOCATION_PRINT (yyoutput, *yylocationp);
  YYFPRINTF (yyoutput, ": ");
  yy_symbol_value_print (yyoutput, yytype, yyvaluep, yylocationp);
  YYFPRINTF (yyoutput, ")");
}

/*------------------------------------------------------------------.
| yy_stack_print -- Print the state stack from its BOTTOM up to its |
| TOP (included).                                                   |
`------------------------------------------------------------------*/

static void
yy_stack_print (yytype_int16 *yybottom, yytype_int16 *yytop)
{
  YYFPRINTF (stderr, "Stack now");
  for (; yybottom <= yytop; yybottom++)
    {
      int yybot = *yybottom;
      YYFPRINTF (stderr, " %d", yybot);
    }
  YYFPRINTF (stderr, "\n");
}

# define YY_STACK_PRINT(Bottom, Top)                            \
do {                                                            \
  if (yydebug)                                                  \
    yy_stack_print ((Bottom), (Top));                           \
} while (0)


/*------------------------------------------------.
| Report that the YYRULE is going to be reduced.  |
`------------------------------------------------*/

static void
yy_reduce_print (yytype_int16 *yyssp, YYSTYPE *yyvsp, YYLTYPE *yylsp, int yyrule)
{
  unsigned long int yylno = yyrline[yyrule];
  int yynrhs = yyr2[yyrule];
  int yyi;
  YYFPRINTF (stderr, "Reducing stack by rule %d (line %lu):\n",
             yyrule - 1, yylno);
  /* The symbols being reduced.  */
  for (yyi = 0; yyi < yynrhs; yyi++)
    {
      YYFPRINTF (stderr, "   $%d = ", yyi + 1);
      yy_symbol_print (stderr,
                       yystos[yyssp[yyi + 1 - yynrhs]],
                       &(yyvsp[(yyi + 1) - (yynrhs)])
                       , &(yylsp[(yyi + 1) - (yynrhs)])                       );
      YYFPRINTF (stderr, "\n");
    }
}

# define YY_REDUCE_PRINT(Rule)          \
do {                                    \
  if (yydebug)                          \
    yy_reduce_print (yyssp, yyvsp, yylsp, Rule); \
} while (0)

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
#ifndef YYINITDEPTH
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
static YYSIZE_T
yystrlen (const char *yystr)
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
static char *
yystpcpy (char *yydest, const char *yysrc)
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
  YYSIZE_T yysize0 = yytnamerr (YY_NULLPTR, yytname[yytoken]);
  YYSIZE_T yysize = yysize0;
  enum { YYERROR_VERBOSE_ARGS_MAXIMUM = 5 };
  /* Internationalized format string. */
  const char *yyformat = YY_NULLPTR;
  /* Arguments of yyformat. */
  char const *yyarg[YYERROR_VERBOSE_ARGS_MAXIMUM];
  /* Number of reported tokens (one for the "unexpected", one per
     "expected"). */
  int yycount = 0;

  /* There are many possibilities here to consider:
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
                {
                  YYSIZE_T yysize1 = yysize + yytnamerr (YY_NULLPTR, yytname[yyx]);
                  if (! (yysize <= yysize1
                         && yysize1 <= YYSTACK_ALLOC_MAXIMUM))
                    return 2;
                  yysize = yysize1;
                }
              }
        }
    }

  switch (yycount)
    {
# define YYCASE_(N, S)                      \
      case N:                               \
        yyformat = S;                       \
      break
    default: /* Avoid compiler warnings. */
      YYCASE_(0, YY_("syntax error"));
      YYCASE_(1, YY_("syntax error, unexpected %s"));
      YYCASE_(2, YY_("syntax error, unexpected %s, expecting %s"));
      YYCASE_(3, YY_("syntax error, unexpected %s, expecting %s or %s"));
      YYCASE_(4, YY_("syntax error, unexpected %s, expecting %s or %s or %s"));
      YYCASE_(5, YY_("syntax error, unexpected %s, expecting %s or %s or %s or %s"));
# undef YYCASE_
    }

  {
    YYSIZE_T yysize1 = yysize + yystrlen (yyformat);
    if (! (yysize <= yysize1 && yysize1 <= YYSTACK_ALLOC_MAXIMUM))
      return 2;
    yysize = yysize1;
  }

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

static void
yydestruct (const char *yymsg, int yytype, YYSTYPE *yyvaluep, YYLTYPE *yylocationp)
{
  YYUSE (yyvaluep);
  YYUSE (yylocationp);
  if (!yymsg)
    yymsg = "Deleting";
  YY_SYMBOL_PRINT (yymsg, yytype, yyvaluep, yylocationp);

  YY_IGNORE_MAYBE_UNINITIALIZED_BEGIN
  YYUSE (yytype);
  YY_IGNORE_MAYBE_UNINITIALIZED_END
}




/* The lookahead symbol.  */
int yychar;

/* The semantic value of the lookahead symbol.  */
YYSTYPE yylval;
/* Location data for the lookahead symbol.  */
YYLTYPE yylloc
# if defined YYLTYPE_IS_TRIVIAL && YYLTYPE_IS_TRIVIAL
  = { 1, 1, 1, 1 }
# endif
;
/* Number of syntax errors so far.  */
int yynerrs;


/*----------.
| yyparse.  |
`----------*/

int
yyparse (void)
{
    int yystate;
    /* Number of tokens to shift before error messages enabled.  */
    int yyerrstatus;

    /* The stacks and their tools:
       'yyss': related to states.
       'yyvs': related to semantic values.
       'yyls': related to locations.

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

  yyssp = yyss = yyssa;
  yyvsp = yyvs = yyvsa;
  yylsp = yyls = yylsa;
  yystacksize = YYINITDEPTH;

  YYDPRINTF ((stderr, "Starting parse\n"));

  yystate = 0;
  yyerrstatus = 0;
  yynerrs = 0;
  yychar = YYEMPTY; /* Cause a token to be read.  */
  yylsp[0] = yylloc;
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
      yychar = yylex ();
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
     '$$ = $1'.

     Otherwise, the following line sets YYVAL to garbage.
     This behavior is undocumented and Bison
     users should not rely upon it.  Assigning to YYVAL
     unconditionally makes the parser a bit smaller, and it avoids a
     GCC warning that YYVAL may be used uninitialized.  */
  yyval = yyvsp[1-yylen];

  /* Default location. */
  YYLLOC_DEFAULT (yyloc, (yylsp - yylen), yylen);
  yyerror_range[1] = yyloc;
  YY_REDUCE_PRINT (yyn);
  switch (yyn)
    {
        case 2:
#line 203 "rpc2x_full_act.y" /* yacc.c:1648  */
    { top = (yyvsp[0]); }
#line 4148 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 3:
#line 210 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(CHUNKS,(yyvsp[-1]));}
#line 4154 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 4:
#line 212 "rpc2x_full_act.y" /* yacc.c:1648  */
    { (yyval) = (yyvsp[-1]); yyclearin; }
#line 4160 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 5:
#line 214 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(CHUNKS,(yyvsp[-2]),(yyvsp[-1]));}
#line 4166 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 6:
#line 216 "rpc2x_full_act.y" /* yacc.c:1648  */
    { fprintf(stderr, "Syntax error following text ending at line %d column %d\n",
          (yylsp[-1]).last_line, (yylsp[-1]).last_column);
  yyclearin;
  (yyval) = new_node_2(CHUNKS, (yyvsp[-2]), (yyvsp[-1])); }
#line 4175 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 7:
#line 224 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(TEXT,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4181 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 8:
#line 226 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(TEXT,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4187 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 9:
#line 228 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4193 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 10:
#line 230 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4199 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 11:
#line 232 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4205 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 12:
#line 235 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4211 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 13:
#line 237 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4217 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 14:
#line 239 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4223 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 15:
#line 241 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4229 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 16:
#line 243 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4235 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 17:
#line 246 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(TEXT,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4241 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 18:
#line 248 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(TEXT,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4247 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 19:
#line 250 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4253 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 20:
#line 252 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4259 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 21:
#line 254 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4265 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 22:
#line 257 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4271 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 23:
#line 259 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4277 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 24:
#line 261 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4283 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 25:
#line 263 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4289 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 26:
#line 265 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4295 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 27:
#line 268 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4301 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 28:
#line 270 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4307 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 29:
#line 272 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4313 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 30:
#line 274 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4319 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 31:
#line 276 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4325 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 32:
#line 279 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4331 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 33:
#line 281 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4337 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 34:
#line 283 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4343 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 35:
#line 285 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4349 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 36:
#line 287 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT,(yyvsp[-1]),(yyvsp[0]));}
#line 4355 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 37:
#line 290 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4361 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 38:
#line 292 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4367 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 39:
#line 294 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4373 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 40:
#line 296 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4379 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 41:
#line 298 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4385 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 42:
#line 301 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4391 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 43:
#line 303 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4397 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 44:
#line 305 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4403 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 45:
#line 307 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4409 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 46:
#line 309 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT,(yyvsp[-1]),(yyvsp[0]));}
#line 4415 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 47:
#line 312 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4421 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 48:
#line 314 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4427 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 49:
#line 316 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4433 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 50:
#line 318 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4439 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 51:
#line 320 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4445 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 52:
#line 323 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4451 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 53:
#line 325 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4457 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 54:
#line 327 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4463 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 55:
#line 329 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4469 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 56:
#line 331 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT,(yyvsp[-1]),(yyvsp[0]));}
#line 4475 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 57:
#line 334 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4481 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 58:
#line 336 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4487 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 59:
#line 338 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4493 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 60:
#line 340 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4499 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 61:
#line 342 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT,(yyvsp[-1]),(yyvsp[0]));}
#line 4505 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 62:
#line 345 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4511 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 63:
#line 347 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4517 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 64:
#line 349 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT,(yyvsp[-1]),(yyvsp[0]));}
#line 4523 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 65:
#line 351 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT,(yyvsp[-1]),(yyvsp[0]));}
#line 4529 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 66:
#line 353 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TEXT,(yyvsp[0]));}
#line 4535 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 67:
#line 496 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT_1,(yyvsp[-1]),(yyvsp[0]));}
#line 4541 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 68:
#line 498 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TEXT_1,(yyvsp[0]));}
#line 4547 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 69:
#line 500 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TEXT_1,(yyvsp[0]));}
#line 4553 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 70:
#line 502 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_0(TEXT_1);}
#line 4559 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 71:
#line 506 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TEXT_1A,(yyvsp[0]));}
#line 4565 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 72:
#line 508 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TEXT_1A,(yyvsp[0]));}
#line 4571 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 73:
#line 512 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TEXT_1B,(yyvsp[0]));}
#line 4577 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 74:
#line 514 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT_1B,(yyvsp[-1]),(yyvsp[0]));}
#line 4583 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 75:
#line 520 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT_1C,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4589 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 76:
#line 522 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TEXT_1C,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4595 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 77:
#line 524 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT_1C,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4601 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 78:
#line 526 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT_1C,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4607 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 79:
#line 528 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT_1C,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4613 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 80:
#line 530 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4619 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 81:
#line 532 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT_1C,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4625 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 82:
#line 534 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TEXT_1C,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4631 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 83:
#line 536 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4637 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 84:
#line 538 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4643 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 85:
#line 540 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4649 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 86:
#line 542 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT_1C,(yyvsp[-1]),(yyvsp[0]));}
#line 4655 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 87:
#line 544 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4661 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 88:
#line 546 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TEXT_1C,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4667 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 89:
#line 548 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT_1C,(yyvsp[-1]),(yyvsp[0]));}
#line 4673 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 90:
#line 550 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT_1C,(yyvsp[-1]),(yyvsp[0]));}
#line 4679 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 91:
#line 552 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TEXT_1C,(yyvsp[-1]),(yyvsp[0]));}
#line 4685 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 92:
#line 554 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TEXT_1C,(yyvsp[0]));}
#line 4691 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 93:
#line 565 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(PARAGRAPHS,(yyvsp[0]));}
#line 4697 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 94:
#line 567 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(PARAGRAPHS,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4703 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 95:
#line 571 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(PARAGRAPH,(yyvsp[0]));}
#line 4709 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 96:
#line 573 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(PARAGRAPH,(yyvsp[0]));}
#line 4715 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 97:
#line 576 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(PARAGRAPH,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4721 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 98:
#line 578 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(PARAGRAPH,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4727 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 99:
#line 581 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(PARAGRAPH,(yyvsp[-1]),(yyvsp[0]));}
#line 4733 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 100:
#line 586 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(I_OPT_FREE_SEQ,(yyvsp[0]));}
#line 4739 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 101:
#line 588 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(I_OPT_FREE_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 4745 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 102:
#line 594 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(STATEMENT,(yyvsp[0]));}
#line 4751 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 103:
#line 598 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INNER_STATEMENT,(yyvsp[0]));}
#line 4757 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 104:
#line 600 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(INNER_STATEMENT,(yyvsp[-1]),(yyvsp[0]));}
#line 4763 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 105:
#line 606 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(STATEMENT_1,(yyvsp[0]));}
#line 4769 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 106:
#line 608 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(STATEMENT_1,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4775 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 107:
#line 610 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(STATEMENT_1,(yyvsp[-1]),(yyvsp[0]));}
#line 4781 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 108:
#line 614 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(I_JOIK_JEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4787 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 109:
#line 616 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(I_JOIK_JEK,(yyvsp[-1]),(yyvsp[0]));}
#line 4793 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 110:
#line 618 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(I_JOIK_JEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4799 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 111:
#line 620 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(I_JOIK_JEK,(yyvsp[-1]),(yyvsp[0]));}
#line 4805 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 112:
#line 627 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(STATEMENT_2,(yyvsp[0]));}
#line 4811 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 113:
#line 629 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(STATEMENT_2,(yyvsp[-1]),(yyvsp[0]));}
#line 4817 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 114:
#line 631 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(STATEMENT_2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4823 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 115:
#line 636 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(I_JJ_STAG_BO,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4829 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 116:
#line 638 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(I_JJ_STAG_BO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4835 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 117:
#line 640 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(I_JJ_STAG_BO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4841 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 118:
#line 642 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(I_JJ_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4847 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 119:
#line 644 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(I_JJ_STAG_BO,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4853 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 120:
#line 646 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(I_JJ_STAG_BO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4859 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 121:
#line 648 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(I_JJ_STAG_BO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4865 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 122:
#line 650 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(I_JJ_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4871 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 123:
#line 652 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(I_JJ_STAG_BO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4877 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 124:
#line 654 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(I_JJ_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4883 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 125:
#line 656 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(I_JJ_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4889 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 126:
#line 658 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(I_JJ_STAG_BO,(yyvsp[-1]),(yyvsp[0]));}
#line 4895 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 127:
#line 664 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(STATEMENT_3,(yyvsp[0]));}
#line 4901 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 128:
#line 667 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(STATEMENT_3,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4907 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 129:
#line 669 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(STATEMENT_3,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4913 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 130:
#line 672 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(STATEMENT_3,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4919 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 131:
#line 674 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(STATEMENT_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4925 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 132:
#line 677 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(STATEMENT_3,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4931 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 133:
#line 679 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(STATEMENT_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4937 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 134:
#line 682 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(STATEMENT_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4943 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 135:
#line 684 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(STATEMENT_3,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4949 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 136:
#line 690 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(FRAGMENT,(yyvsp[-1]),(yyvsp[0]));}
#line 4955 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 137:
#line 692 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[0]));}
#line 4961 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 138:
#line 694 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(FRAGMENT,(yyvsp[-1]),(yyvsp[0]));}
#line 4967 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 139:
#line 696 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[0]));}
#line 4973 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 140:
#line 698 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[0]));}
#line 4979 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 141:
#line 700 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(FRAGMENT,(yyvsp[-1]),(yyvsp[0]));}
#line 4985 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 142:
#line 702 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[0]));}
#line 4991 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 143:
#line 704 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(FRAGMENT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 4997 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 144:
#line 706 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(FRAGMENT,(yyvsp[-1]),(yyvsp[0]));}
#line 5003 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 145:
#line 708 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[0]));}
#line 5009 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 146:
#line 710 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[0]));}
#line 5015 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 147:
#line 712 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[0]));}
#line 5021 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 148:
#line 714 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FRAGMENT,(yyvsp[0]));}
#line 5027 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 149:
#line 720 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(PRENEX,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5033 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 150:
#line 722 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(PRENEX,(yyvsp[-1]),(yyvsp[0]));}
#line 5039 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 151:
#line 731 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SENTENCE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5045 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 152:
#line 733 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SENTENCE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5051 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 153:
#line 735 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SENTENCE,(yyvsp[0]));}
#line 5057 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 154:
#line 737 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SENTENCE,(yyvsp[0]));}
#line 5063 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 155:
#line 743 "rpc2x_full_act.y" /* yacc.c:1648  */
    {
 fprintf(stderr, "Missing selbri before GIhA at line %d column %d\n",
         (yylsp[0]).first_line, (yylsp[0]).first_column);
 error_advance(0);
 (yyval) = (yyvsp[-1]);
 YYERROR;
}
#line 5075 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 156:
#line 752 "rpc2x_full_act.y" /* yacc.c:1648  */
    {
 fprintf(stderr, "Missing selbri before GIhA at line %d column %d\n",
         (yylsp[0]).first_line, (yylsp[0]).first_column);
 error_advance(0);
 (yyval) = (yyvsp[-1]);
 YYERROR;
}
#line 5087 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 157:
#line 761 "rpc2x_full_act.y" /* yacc.c:1648  */
    {
 fprintf(stderr, "Missing selbri before GIhA at line %d column %d\n",
         (yylsp[0]).first_line, (yylsp[0]).first_column);
 error_advance(0);
 (yyval) = (yyvsp[-1]);
 YYERROR;
}
#line 5099 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 158:
#line 774 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(NO_CU_SENTENCE,(yyvsp[0]));}
#line 5105 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 159:
#line 779 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(OBSERVATIVE_SENTENCE,(yyvsp[0]));}
#line 5111 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 160:
#line 786 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUBSENTENCE,(yyvsp[0]));}
#line 5117 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 161:
#line 788 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUBSENTENCE,(yyvsp[-1]),(yyvsp[0]));}
#line 5123 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 162:
#line 795 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(BRIDI_TAIL,(yyvsp[0]));}
#line 5129 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 163:
#line 797 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_8(BRIDI_TAIL,(yyvsp[-7]),(yyvsp[-6]),(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5135 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 164:
#line 799 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_7(BRIDI_TAIL,(yyvsp[-6]),(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5141 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 165:
#line 802 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_7(BRIDI_TAIL,(yyvsp[-6]),(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5147 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 166:
#line 804 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(BRIDI_TAIL,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5153 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 167:
#line 808 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GIHEK_STAG_KE,(yyvsp[-1]),(yyvsp[0]));}
#line 5159 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 168:
#line 810 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(GIHEK_STAG_KE,(yyvsp[0]));}
#line 5165 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 169:
#line 816 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(BRIDI_TAIL_1,(yyvsp[0]));}
#line 5171 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 170:
#line 818 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(BRIDI_TAIL_1,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5177 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 171:
#line 820 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(BRIDI_TAIL_1,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5183 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 172:
#line 826 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(BRIDI_TAIL_2,(yyvsp[0]));}
#line 5189 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 173:
#line 828 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(BRIDI_TAIL_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5195 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 174:
#line 832 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(GIHEK_STAG_BO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5201 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 175:
#line 834 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GIHEK_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5207 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 176:
#line 836 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GIHEK_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5213 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 177:
#line 838 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GIHEK_STAG_BO,(yyvsp[-1]),(yyvsp[0]));}
#line 5219 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 178:
#line 845 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(BRIDI_TAIL_3,(yyvsp[-1]),(yyvsp[0]));}
#line 5225 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 179:
#line 847 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(BRIDI_TAIL_3,(yyvsp[0]));}
#line 5231 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 180:
#line 851 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(MAIN_SELBRI,(yyvsp[0]));}
#line 5237 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 181:
#line 857 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TAIL_TERMS,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5243 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 182:
#line 859 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TAIL_TERMS,(yyvsp[-1]),(yyvsp[0]));}
#line 5249 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 183:
#line 861 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TAIL_TERMS,(yyvsp[-1]),(yyvsp[0]));}
#line 5255 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 184:
#line 863 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TAIL_TERMS,(yyvsp[0]));}
#line 5261 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 185:
#line 869 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(GEK_SENTENCE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5267 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 186:
#line 872 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(GEK_SENTENCE,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5273 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 187:
#line 874 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(GEK_SENTENCE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5279 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 188:
#line 877 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(GEK_SENTENCE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5285 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 189:
#line 879 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(GEK_SENTENCE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5291 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 190:
#line 882 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(GEK_SENTENCE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5297 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 191:
#line 884 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(GEK_SENTENCE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5303 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 192:
#line 887 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(GEK_SENTENCE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5309 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 193:
#line 889 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GEK_SENTENCE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5315 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 194:
#line 892 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GEK_SENTENCE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5321 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 195:
#line 894 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GEK_SENTENCE,(yyvsp[-1]),(yyvsp[0]));}
#line 5327 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 196:
#line 903 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERMS,(yyvsp[0]));}
#line 5333 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 197:
#line 905 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TERMS,(yyvsp[-1]),(yyvsp[0]));}
#line 5339 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 198:
#line 911 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERMS_1,(yyvsp[0]));}
#line 5345 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 199:
#line 913 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(TERMS_1,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5351 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 200:
#line 915 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TERMS_1,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5357 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 201:
#line 917 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(TERMS_1,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5363 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 202:
#line 919 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TERMS_1,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5369 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 203:
#line 921 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TERMS_1,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5375 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 204:
#line 923 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TERMS_1,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5381 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 205:
#line 925 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TERMS_1,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5387 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 206:
#line 927 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TERMS_1,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5393 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 207:
#line 934 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERMS_2,(yyvsp[0]));}
#line 5399 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 208:
#line 936 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TERMS_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5405 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 209:
#line 938 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TERMS_2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5411 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 210:
#line 947 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERM,(yyvsp[0]));}
#line 5417 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 211:
#line 949 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERM,(yyvsp[0]));}
#line 5423 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 212:
#line 951 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERM,(yyvsp[0]));}
#line 5429 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 213:
#line 953 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERM,(yyvsp[0]));}
#line 5435 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 214:
#line 955 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERM,(yyvsp[0]));}
#line 5441 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 215:
#line 957 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERM,(yyvsp[0]));}
#line 5447 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 216:
#line 959 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERM,(yyvsp[0]));}
#line 5453 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 217:
#line 961 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERM,(yyvsp[0]));}
#line 5459 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 218:
#line 965 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERM_PLAIN_SUMTI,(yyvsp[0]));}
#line 5465 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 219:
#line 969 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TERM_PLACED_SUMTI,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5471 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 220:
#line 971 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TERM_PLACED_SUMTI,(yyvsp[-1]),(yyvsp[0]));}
#line 5477 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 221:
#line 975 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TERM_TAGGED_SUMTI,(yyvsp[-1]),(yyvsp[0]));}
#line 5483 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 222:
#line 981 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TAGGED_TERMSET,(yyvsp[-1]),(yyvsp[0]));}
#line 5489 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 223:
#line 985 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TERM_FLOATING_TENSE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5495 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 224:
#line 987 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TERM_FLOATING_TENSE,(yyvsp[-1]),(yyvsp[0]));}
#line 5501 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 225:
#line 991 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TERM_FLOATING_NEGATE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5507 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 226:
#line 993 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TERM_FLOATING_NEGATE,(yyvsp[-1]),(yyvsp[0]));}
#line 5513 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 227:
#line 998 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TERM_OTHER,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5519 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 228:
#line 1000 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TERM_OTHER,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5525 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 229:
#line 1002 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TERM_OTHER,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5531 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 230:
#line 1004 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TERM_OTHER,(yyvsp[-1]),(yyvsp[0]));}
#line 5537 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 231:
#line 1012 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TERMSET,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5543 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 232:
#line 1014 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TERMSET,(yyvsp[-1]),(yyvsp[0]));}
#line 5549 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 233:
#line 1018 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TERMSET_START,(yyvsp[-1]),(yyvsp[0]));}
#line 5555 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 234:
#line 1020 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TERMSET_START,(yyvsp[0]));}
#line 5561 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 235:
#line 1024 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TERMSET_BODY,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5567 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 236:
#line 1026 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TERMSET_BODY,(yyvsp[-1]),(yyvsp[0]));}
#line 5573 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 237:
#line 1032 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI,(yyvsp[0]));}
#line 5579 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 238:
#line 1034 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5585 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 239:
#line 1036 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5591 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 240:
#line 1043 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_1,(yyvsp[0]));}
#line 5597 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 241:
#line 1045 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI_1,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5603 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 242:
#line 1049 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_EK_KE,(yyvsp[-1]),(yyvsp[0]));}
#line 5609 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 243:
#line 1051 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_EK_KE,(yyvsp[0]));}
#line 5615 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 244:
#line 1053 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_EK_KE,(yyvsp[-1]),(yyvsp[0]));}
#line 5621 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 245:
#line 1055 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_EK_KE,(yyvsp[0]));}
#line 5627 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 246:
#line 1059 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(KE_SUMTI,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5633 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 247:
#line 1061 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(KE_SUMTI,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5639 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 248:
#line 1063 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(KE_SUMTI,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5645 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 249:
#line 1065 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(KE_SUMTI,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5651 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 250:
#line 1071 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_2,(yyvsp[0]));}
#line 5657 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 251:
#line 1073 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5663 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 252:
#line 1075 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI_2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5669 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 253:
#line 1077 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5675 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 254:
#line 1079 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI_2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5681 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 255:
#line 1087 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_3,(yyvsp[0]));}
#line 5687 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 256:
#line 1089 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI_3,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5693 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 257:
#line 1093 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_EK_STAG_BO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5699 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 258:
#line 1095 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_EK_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5705 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 259:
#line 1097 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_EK_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5711 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 260:
#line 1099 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_EK_STAG_BO,(yyvsp[-1]),(yyvsp[0]));}
#line 5717 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 261:
#line 1101 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_EK_STAG_BO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5723 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 262:
#line 1103 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_EK_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5729 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 263:
#line 1105 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_EK_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5735 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 264:
#line 1107 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_EK_STAG_BO,(yyvsp[-1]),(yyvsp[0]));}
#line 5741 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 265:
#line 1113 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_4,(yyvsp[0]));}
#line 5747 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 266:
#line 1115 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI_4,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5753 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 267:
#line 1121 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_5,(yyvsp[-1]),(yyvsp[0]));}
#line 5759 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 268:
#line 1123 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_5,(yyvsp[0]));}
#line 5765 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 269:
#line 1125 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_5,(yyvsp[-1]),(yyvsp[0]));}
#line 5771 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 270:
#line 1127 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_5,(yyvsp[0]));}
#line 5777 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 271:
#line 1131 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_5A,(yyvsp[-1]),(yyvsp[0]));}
#line 5783 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 272:
#line 1133 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_5A,(yyvsp[0]));}
#line 5789 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 273:
#line 1137 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI_5B,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5795 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 274:
#line 1139 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI_5B,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5801 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 275:
#line 1145 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[0]));}
#line 5807 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 276:
#line 1147 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[0]));}
#line 5813 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 277:
#line 1150 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_6,(yyvsp[-1]),(yyvsp[0]));}
#line 5819 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 278:
#line 1152 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[0]));}
#line 5825 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 279:
#line 1155 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5831 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 280:
#line 1157 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_6,(yyvsp[-1]),(yyvsp[0]));}
#line 5837 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 281:
#line 1160 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(SUMTI_6,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5843 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 282:
#line 1162 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5849 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 283:
#line 1165 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5855 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 284:
#line 1167 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5861 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 285:
#line 1170 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(SUMTI_6,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5867 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 286:
#line 1172 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5873 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 287:
#line 1175 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5879 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 288:
#line 1177 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5885 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 289:
#line 1180 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[0]));}
#line 5891 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 290:
#line 1183 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(SUMTI_6,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5897 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 291:
#line 1185 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5903 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 292:
#line 1188 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5909 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 293:
#line 1190 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5915 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 294:
#line 1193 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_6,(yyvsp[-1]),(yyvsp[0]));}
#line 5921 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 295:
#line 1195 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[0]));}
#line 5927 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 296:
#line 1197 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5933 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 297:
#line 1199 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI_6,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5939 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 298:
#line 1201 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_6,(yyvsp[-1]),(yyvsp[0]));}
#line 5945 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 299:
#line 1203 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[0]));}
#line 5951 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 300:
#line 1205 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_6,(yyvsp[-1]),(yyvsp[0]));}
#line 5957 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 301:
#line 1207 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_6,(yyvsp[0]));}
#line 5963 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 302:
#line 1211 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(LAHE_SUMTI_6,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5969 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 303:
#line 1213 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(LAHE_SUMTI_6,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5975 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 304:
#line 1215 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(LAHE_SUMTI_6,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5981 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 305:
#line 1217 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(LAHE_SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5987 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 306:
#line 1220 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(LAHE_SUMTI_6,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5993 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 307:
#line 1222 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(LAHE_SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 5999 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 308:
#line 1224 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(LAHE_SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6005 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 309:
#line 1226 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(LAHE_SUMTI_6,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6011 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 310:
#line 1230 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_7(NAHE_BO_SUMTI_6,(yyvsp[-6]),(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6017 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 311:
#line 1232 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(NAHE_BO_SUMTI_6,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6023 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 312:
#line 1234 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(NAHE_BO_SUMTI_6,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6029 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 313:
#line 1236 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(NAHE_BO_SUMTI_6,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6035 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 314:
#line 1239 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(NAHE_BO_SUMTI_6,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6041 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 315:
#line 1241 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(NAHE_BO_SUMTI_6,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6047 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 316:
#line 1243 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(NAHE_BO_SUMTI_6,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6053 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 317:
#line 1245 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(NAHE_BO_SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6059 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 318:
#line 1249 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(NAME_SUMTI_6,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6065 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 319:
#line 1251 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(NAME_SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6071 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 320:
#line 1253 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(NAME_SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6077 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 321:
#line 1255 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(NAME_SUMTI_6,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6083 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 322:
#line 1258 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(NAME_SUMTI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6089 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 323:
#line 1260 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(NAME_SUMTI_6,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6095 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 324:
#line 1262 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(NAME_SUMTI_6,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6101 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 325:
#line 1264 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(NAME_SUMTI_6,(yyvsp[-1]),(yyvsp[0]));}
#line 6107 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 326:
#line 1270 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUMTI_TAIL,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6113 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 327:
#line 1272 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_TAIL,(yyvsp[-1]),(yyvsp[0]));}
#line 6119 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 328:
#line 1274 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_TAIL,(yyvsp[0]));}
#line 6125 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 329:
#line 1276 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_TAIL,(yyvsp[-1]),(yyvsp[0]));}
#line 6131 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 330:
#line 1285 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_TAIL_1,(yyvsp[-1]),(yyvsp[0]));}
#line 6137 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 331:
#line 1287 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_TAIL_1,(yyvsp[0]));}
#line 6143 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 332:
#line 1289 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_TAIL_1,(yyvsp[-1]),(yyvsp[0]));}
#line 6149 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 333:
#line 1293 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SUMTI_TAIL_1A,(yyvsp[-1]),(yyvsp[0]));}
#line 6155 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 334:
#line 1295 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SUMTI_TAIL_1A,(yyvsp[0]));}
#line 6161 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 335:
#line 1301 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(RELATIVE_CLAUSES,(yyvsp[0]));}
#line 6167 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 336:
#line 1305 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(RELATIVE_CLAUSE_SEQ,(yyvsp[0]));}
#line 6173 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 337:
#line 1307 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(RELATIVE_CLAUSE_SEQ,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6179 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 338:
#line 1309 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(RELATIVE_CLAUSE_SEQ,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6185 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 339:
#line 1315 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(RELATIVE_CLAUSE,(yyvsp[0]));}
#line 6191 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 340:
#line 1317 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(RELATIVE_CLAUSE,(yyvsp[0]));}
#line 6197 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 341:
#line 1321 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TERM_RELATIVE_CLAUSE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6203 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 342:
#line 1323 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TERM_RELATIVE_CLAUSE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6209 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 343:
#line 1325 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TERM_RELATIVE_CLAUSE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6215 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 344:
#line 1327 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TERM_RELATIVE_CLAUSE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6221 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 345:
#line 1331 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(FULL_RELATIVE_CLAUSE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6227 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 346:
#line 1333 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(FULL_RELATIVE_CLAUSE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6233 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 347:
#line 1335 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(FULL_RELATIVE_CLAUSE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6239 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 348:
#line 1337 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(FULL_RELATIVE_CLAUSE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6245 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 349:
#line 1343 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SELBRI,(yyvsp[-1]),(yyvsp[0]));}
#line 6251 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 350:
#line 1345 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SELBRI,(yyvsp[0]));}
#line 6257 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 351:
#line 1351 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SELBRI_1,(yyvsp[0]));}
#line 6263 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 352:
#line 1353 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SELBRI_1,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6269 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 353:
#line 1355 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SELBRI_1,(yyvsp[-1]),(yyvsp[0]));}
#line 6275 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 354:
#line 1361 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SELBRI_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6281 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 355:
#line 1363 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SELBRI_2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6287 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 356:
#line 1365 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SELBRI_2,(yyvsp[0]));}
#line 6293 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 357:
#line 1371 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SELBRI_3,(yyvsp[-1]),(yyvsp[0]));}
#line 6299 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 358:
#line 1373 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SELBRI_3,(yyvsp[0]));}
#line 6305 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 359:
#line 1382 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SELBRI_4,(yyvsp[0]));}
#line 6311 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 360:
#line 1384 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SELBRI_4,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6317 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 361:
#line 1386 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SELBRI_4,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6323 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 362:
#line 1388 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SELBRI_4,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6329 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 363:
#line 1390 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SELBRI_4,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6335 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 364:
#line 1392 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SELBRI_4,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6341 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 365:
#line 1396 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_STAG_KE,(yyvsp[-1]),(yyvsp[0]));}
#line 6347 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 366:
#line 1400 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(KE_SELBRI_3,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6353 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 367:
#line 1402 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(KE_SELBRI_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6359 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 368:
#line 1404 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(KE_SELBRI_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6365 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 369:
#line 1406 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(KE_SELBRI_3,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6371 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 370:
#line 1414 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SELBRI_5,(yyvsp[0]));}
#line 6377 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 371:
#line 1416 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SELBRI_5,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6383 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 372:
#line 1420 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_JEK_STAG_BO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6389 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 373:
#line 1422 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_JEK_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6395 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 374:
#line 1424 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_JEK_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6401 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 375:
#line 1426 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_JEK_STAG_BO,(yyvsp[-1]),(yyvsp[0]));}
#line 6407 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 376:
#line 1428 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_JEK_STAG_BO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6413 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 377:
#line 1430 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_JEK_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6419 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 378:
#line 1432 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_JEK_STAG_BO,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6425 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 379:
#line 1434 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_JEK_STAG_BO,(yyvsp[-1]),(yyvsp[0]));}
#line 6431 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 380:
#line 1440 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SELBRI_6,(yyvsp[0]));}
#line 6437 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 381:
#line 1442 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SELBRI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6443 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 382:
#line 1444 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SELBRI_6,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6449 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 383:
#line 1447 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(SELBRI_6,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6455 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 384:
#line 1449 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(SELBRI_6,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6461 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 385:
#line 1451 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SELBRI_6,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6467 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 386:
#line 1458 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT,(yyvsp[0]));}
#line 6473 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 387:
#line 1460 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TANRU_UNIT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6479 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 388:
#line 1462 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TANRU_UNIT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6485 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 389:
#line 1469 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT_1,(yyvsp[0]));}
#line 6491 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 390:
#line 1471 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TANRU_UNIT_1,(yyvsp[-1]),(yyvsp[0]));}
#line 6497 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 391:
#line 1481 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TANRU_UNIT_2,(yyvsp[-1]),(yyvsp[0]));}
#line 6503 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 392:
#line 1483 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[0]));}
#line 6509 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 393:
#line 1486 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TANRU_UNIT_2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6515 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 394:
#line 1488 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TANRU_UNIT_2,(yyvsp[-1]),(yyvsp[0]));}
#line 6521 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 395:
#line 1490 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TANRU_UNIT_2,(yyvsp[-1]),(yyvsp[0]));}
#line 6527 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 396:
#line 1492 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[0]));}
#line 6533 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 397:
#line 1495 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[0]));}
#line 6539 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 398:
#line 1498 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_7(TANRU_UNIT_2,(yyvsp[-6]),(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6545 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 399:
#line 1500 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(TANRU_UNIT_2,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6551 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 400:
#line 1502 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TANRU_UNIT_2,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6557 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 401:
#line 1504 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(TANRU_UNIT_2,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6563 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 402:
#line 1506 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TANRU_UNIT_2,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6569 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 403:
#line 1508 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TANRU_UNIT_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6575 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 404:
#line 1511 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(TANRU_UNIT_2,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6581 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 405:
#line 1513 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TANRU_UNIT_2,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6587 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 406:
#line 1515 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TANRU_UNIT_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6593 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 407:
#line 1517 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(TANRU_UNIT_2,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6599 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 408:
#line 1519 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TANRU_UNIT_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6605 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 409:
#line 1521 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TANRU_UNIT_2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6611 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 410:
#line 1524 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[0]));}
#line 6617 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 411:
#line 1527 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TANRU_UNIT_2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6623 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 412:
#line 1529 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TANRU_UNIT_2,(yyvsp[-1]),(yyvsp[0]));}
#line 6629 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 413:
#line 1532 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[0]));}
#line 6635 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 414:
#line 1535 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[0]));}
#line 6641 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 415:
#line 1538 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[0]));}
#line 6647 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 416:
#line 1541 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[0]));}
#line 6653 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 417:
#line 1544 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[0]));}
#line 6659 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 418:
#line 1547 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TANRU_UNIT_2,(yyvsp[0]));}
#line 6665 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 419:
#line 1552 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(KE_SELBRI3_TU2,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6671 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 420:
#line 1554 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(KE_SELBRI3_TU2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6677 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 421:
#line 1556 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(KE_SELBRI3_TU2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6683 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 422:
#line 1558 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(KE_SELBRI3_TU2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6689 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 423:
#line 1562 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(NUMBER_MOI_TU2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6695 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 424:
#line 1564 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(NUMBER_MOI_TU2,(yyvsp[-1]),(yyvsp[0]));}
#line 6701 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 425:
#line 1566 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(NUMBER_MOI_TU2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6707 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 426:
#line 1568 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(NUMBER_MOI_TU2,(yyvsp[-1]),(yyvsp[0]));}
#line 6713 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 427:
#line 1572 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SE_TU2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6719 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 428:
#line 1574 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SE_TU2,(yyvsp[-1]),(yyvsp[0]));}
#line 6725 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 429:
#line 1578 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JAI_TAG_TU2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6731 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 430:
#line 1580 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JAI_TAG_TU2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6737 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 431:
#line 1584 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JAI_TU2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6743 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 432:
#line 1586 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JAI_TU2,(yyvsp[-1]),(yyvsp[0]));}
#line 6749 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 433:
#line 1590 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(NAHE_TU2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6755 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 434:
#line 1592 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(NAHE_TU2,(yyvsp[-1]),(yyvsp[0]));}
#line 6761 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 435:
#line 1598 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(ABSTRACTION,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6767 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 436:
#line 1600 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(ABSTRACTION,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6773 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 437:
#line 1604 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(NU_NAI_SEQ,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6779 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 438:
#line 1606 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(NU_NAI_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 6785 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 439:
#line 1608 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(NU_NAI_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 6791 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 440:
#line 1610 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(NU_NAI_SEQ,(yyvsp[0]));}
#line 6797 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 441:
#line 1612 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(NU_NAI_SEQ,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6803 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 442:
#line 1614 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6809 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 443:
#line 1616 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6815 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 444:
#line 1618 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6821 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 445:
#line 1620 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6827 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 446:
#line 1622 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6833 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 447:
#line 1624 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6839 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 448:
#line 1626 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(NU_NAI_SEQ,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6845 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 449:
#line 1628 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(NU_NAI_SEQ,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6851 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 450:
#line 1630 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6857 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 451:
#line 1632 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6863 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 452:
#line 1634 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6869 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 453:
#line 1636 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(NU_NAI_SEQ,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6875 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 454:
#line 1638 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6881 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 455:
#line 1640 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(NU_NAI_SEQ,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6887 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 456:
#line 1642 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(NU_NAI_SEQ,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6893 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 457:
#line 1649 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(LINKARGS,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6899 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 458:
#line 1651 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(LINKARGS,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6905 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 459:
#line 1653 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(LINKARGS,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6911 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 460:
#line 1655 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(LINKARGS,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6917 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 461:
#line 1657 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(LINKARGS,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6923 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 462:
#line 1659 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(LINKARGS,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6929 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 463:
#line 1661 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(LINKARGS,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6935 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 464:
#line 1663 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(LINKARGS,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6941 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 465:
#line 1669 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(LINKS,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6947 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 466:
#line 1671 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(LINKS,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6953 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 467:
#line 1673 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(LINKS,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6959 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 468:
#line 1675 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(LINKS,(yyvsp[-1]),(yyvsp[0]));}
#line 6965 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 469:
#line 1681 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(QUANTIFIER,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6971 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 470:
#line 1683 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(QUANTIFIER,(yyvsp[-1]),(yyvsp[0]));}
#line 6977 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 471:
#line 1685 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(QUANTIFIER,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6983 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 472:
#line 1687 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(QUANTIFIER,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6989 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 473:
#line 1689 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(QUANTIFIER,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 6995 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 474:
#line 1691 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(QUANTIFIER,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7001 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 475:
#line 1697 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(MEX,(yyvsp[0]));}
#line 7007 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 476:
#line 1699 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(MEX,(yyvsp[0]));}
#line 7013 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 477:
#line 1703 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(MEX_RP,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7019 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 478:
#line 1705 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(MEX_RP,(yyvsp[-1]),(yyvsp[0]));}
#line 7025 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 479:
#line 1709 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(MEX_INFIX,(yyvsp[0]));}
#line 7031 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 480:
#line 1711 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(MEX_INFIX,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7037 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 481:
#line 1717 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(MEX_1,(yyvsp[0]));}
#line 7043 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 482:
#line 1719 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(MEX_1,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7049 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 483:
#line 1721 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(MEX_1,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7055 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 484:
#line 1727 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(MEX_2,(yyvsp[0]));}
#line 7061 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 485:
#line 1729 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(MEX_2,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7067 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 486:
#line 1731 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(MEX_2,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7073 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 487:
#line 1734 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(MEX_2,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7079 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 488:
#line 1736 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(MEX_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7085 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 489:
#line 1739 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(MEX_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7091 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 490:
#line 1741 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(MEX_2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7097 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 491:
#line 1745 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(MEX_2_SEQ,(yyvsp[0]));}
#line 7103 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 492:
#line 1747 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(MEX_2_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 7109 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 493:
#line 1753 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(RP_EXPRESSION,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7115 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 494:
#line 1755 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(RP_EXPRESSION,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7121 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 495:
#line 1757 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(RP_EXPRESSION,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7127 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 496:
#line 1759 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(RP_EXPRESSION,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7133 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 497:
#line 1769 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(OPERATOR,(yyvsp[0]));}
#line 7139 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 498:
#line 1771 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERATOR,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7145 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 499:
#line 1773 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERATOR,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7151 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 500:
#line 1775 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERATOR,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7157 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 501:
#line 1777 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERATOR,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7163 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 502:
#line 1779 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERATOR,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7169 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 503:
#line 1783 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(KE_OPERATOR,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7175 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 504:
#line 1785 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(KE_OPERATOR,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7181 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 505:
#line 1787 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(KE_OPERATOR,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7187 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 506:
#line 1789 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(KE_OPERATOR,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7193 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 507:
#line 1796 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(OPERATOR_1,(yyvsp[0]));}
#line 7199 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 508:
#line 1798 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERATOR_1,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7205 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 509:
#line 1800 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERATOR_1,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7211 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 510:
#line 1807 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(OPERATOR_2,(yyvsp[0]));}
#line 7217 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 511:
#line 1809 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(OPERATOR_2,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7223 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 512:
#line 1811 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERATOR_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7229 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 513:
#line 1813 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERATOR_2,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7235 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 514:
#line 1815 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERATOR_2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7241 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 515:
#line 1822 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(MEX_OPERATOR,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7247 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 516:
#line 1824 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(MEX_OPERATOR,(yyvsp[-1]),(yyvsp[0]));}
#line 7253 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 517:
#line 1826 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(MEX_OPERATOR,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7259 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 518:
#line 1828 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(MEX_OPERATOR,(yyvsp[-1]),(yyvsp[0]));}
#line 7265 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 519:
#line 1830 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(MEX_OPERATOR,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7271 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 520:
#line 1832 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(MEX_OPERATOR,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7277 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 521:
#line 1834 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(MEX_OPERATOR,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7283 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 522:
#line 1836 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(MEX_OPERATOR,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7289 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 523:
#line 1838 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(MEX_OPERATOR,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7295 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 524:
#line 1840 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(MEX_OPERATOR,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7301 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 525:
#line 1842 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(MEX_OPERATOR,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7307 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 526:
#line 1844 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(MEX_OPERATOR,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7313 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 527:
#line 1846 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(MEX_OPERATOR,(yyvsp[-1]),(yyvsp[0]));}
#line 7319 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 528:
#line 1848 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(MEX_OPERATOR,(yyvsp[0]));}
#line 7325 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 529:
#line 1854 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(OPERAND,(yyvsp[0]));}
#line 7331 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 530:
#line 1856 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERAND,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7337 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 531:
#line 1860 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(KE_OPERAND,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7343 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 532:
#line 1862 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(KE_OPERAND,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7349 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 533:
#line 1864 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(KE_OPERAND,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7355 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 534:
#line 1866 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(KE_OPERAND,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7361 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 535:
#line 1873 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(OPERAND_1,(yyvsp[0]));}
#line 7367 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 536:
#line 1875 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_1,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7373 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 537:
#line 1877 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERAND_1,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7379 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 538:
#line 1879 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_1,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7385 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 539:
#line 1881 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERAND_1,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7391 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 540:
#line 1888 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(OPERAND_2,(yyvsp[0]));}
#line 7397 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 541:
#line 1890 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERAND_2,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7403 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 542:
#line 1898 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(OPERAND_3,(yyvsp[0]));}
#line 7409 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 543:
#line 1901 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7415 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 544:
#line 1903 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(OPERAND_3,(yyvsp[-1]),(yyvsp[0]));}
#line 7421 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 545:
#line 1906 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7427 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 546:
#line 1908 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7433 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 547:
#line 1910 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7439 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 548:
#line 1912 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7445 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 549:
#line 1915 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7451 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 550:
#line 1917 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7457 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 551:
#line 1919 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7463 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 552:
#line 1921 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7469 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 553:
#line 1924 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7475 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 554:
#line 1926 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7481 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 555:
#line 1928 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7487 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 556:
#line 1930 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7493 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 557:
#line 1933 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7499 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 558:
#line 1936 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7505 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 559:
#line 1938 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7511 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 560:
#line 1940 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7517 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 561:
#line 1942 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(OPERAND_3,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7523 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 562:
#line 1945 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(OPERAND_3,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7529 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 563:
#line 1947 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7535 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 564:
#line 1949 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(OPERAND_3,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7541 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 565:
#line 1951 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(OPERAND_3,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7547 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 566:
#line 1958 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(NUMBER,(yyvsp[0]));}
#line 7553 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 567:
#line 1962 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INNER_NUMBER,(yyvsp[0]));}
#line 7559 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 568:
#line 1964 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(INNER_NUMBER,(yyvsp[-1]),(yyvsp[0]));}
#line 7565 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 569:
#line 1966 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(INNER_NUMBER,(yyvsp[-1]),(yyvsp[0]));}
#line 7571 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 570:
#line 1973 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(LERFU_STRING,(yyvsp[0]));}
#line 7577 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 571:
#line 1975 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(LERFU_STRING,(yyvsp[-1]),(yyvsp[0]));}
#line 7583 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 572:
#line 1977 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(LERFU_STRING,(yyvsp[-1]),(yyvsp[0]));}
#line 7589 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 573:
#line 1984 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(LERFU_WORD,(yyvsp[0]));}
#line 7595 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 574:
#line 1986 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(LERFU_WORD,(yyvsp[0]));}
#line 7601 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 575:
#line 1988 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(LERFU_WORD,(yyvsp[-1]),(yyvsp[0]));}
#line 7607 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 576:
#line 1990 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(LERFU_WORD,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7613 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 577:
#line 1996 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(EK,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7619 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 578:
#line 1998 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(EK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7625 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 579:
#line 2000 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(EK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7631 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 580:
#line 2002 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(EK,(yyvsp[-1]),(yyvsp[0]));}
#line 7637 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 581:
#line 2004 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(EK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7643 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 582:
#line 2006 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(EK,(yyvsp[-1]),(yyvsp[0]));}
#line 7649 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 583:
#line 2008 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(EK,(yyvsp[-1]),(yyvsp[0]));}
#line 7655 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 584:
#line 2010 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(EK,(yyvsp[0]));}
#line 7661 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 585:
#line 2016 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(GIHEK,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7667 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 586:
#line 2018 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GIHEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7673 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 587:
#line 2020 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GIHEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7679 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 588:
#line 2022 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GIHEK,(yyvsp[-1]),(yyvsp[0]));}
#line 7685 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 589:
#line 2024 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GIHEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 7691 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 590:
#line 2026 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GIHEK,(yyvsp[-1]),(yyvsp[0]));}
#line 7697 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 591:
#line 2028 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GIHEK,(yyvsp[-1]),(yyvsp[0]));}
#line 7703 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 592:
#line 2030 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(GIHEK,(yyvsp[0]));}
#line 7709 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 593:
#line 2036 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JEK,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7715 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 594:
#line 2038 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7721 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 595:
#line 2040 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7727 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 596:
#line 2042 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK,(yyvsp[-2]),(yyvsp[-1]));}
#line 7733 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 597:
#line 2044 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7739 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 598:
#line 2046 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK,(yyvsp[-2]),(yyvsp[-1]));}
#line 7745 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 599:
#line 2048 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK,(yyvsp[-2]),(yyvsp[-1]));}
#line 7751 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 600:
#line 2050 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JEK,(yyvsp[-1]));}
#line 7757 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 601:
#line 2054 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JEK_OPT_KE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7763 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 602:
#line 2056 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7769 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 603:
#line 2058 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7775 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 604:
#line 2060 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 7781 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 605:
#line 2062 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7787 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 606:
#line 2064 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 7793 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 607:
#line 2066 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 7799 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 608:
#line 2068 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JEK_OPT_KE,(yyvsp[-1]));}
#line 7805 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 609:
#line 2070 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JEK_OPT_KE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7811 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 610:
#line 2072 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7817 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 611:
#line 2074 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7823 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 612:
#line 2076 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 7829 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 613:
#line 2078 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7835 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 614:
#line 2080 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 7841 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 615:
#line 2082 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 7847 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 616:
#line 2084 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JEK_OPT_KE,(yyvsp[-1]));}
#line 7853 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 617:
#line 2088 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JEK_OPT_KEBO,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7859 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 618:
#line 2090 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7865 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 619:
#line 2092 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7871 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 620:
#line 2094 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 7877 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 621:
#line 2096 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7883 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 622:
#line 2098 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 7889 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 623:
#line 2100 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 7895 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 624:
#line 2102 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JEK_OPT_KEBO,(yyvsp[-1]));}
#line 7901 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 625:
#line 2104 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JEK_OPT_KEBO,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7907 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 626:
#line 2106 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7913 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 627:
#line 2108 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7919 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 628:
#line 2110 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 7925 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 629:
#line 2112 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7931 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 630:
#line 2114 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 7937 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 631:
#line 2116 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 7943 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 632:
#line 2118 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JEK_OPT_KEBO,(yyvsp[-1]));}
#line 7949 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 633:
#line 2120 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JEK_OPT_KEBO,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7955 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 634:
#line 2122 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7961 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 635:
#line 2124 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7967 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 636:
#line 2126 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 7973 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 637:
#line 2128 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JEK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 7979 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 638:
#line 2130 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 7985 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 639:
#line 2132 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JEK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 7991 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 640:
#line 2134 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JEK_OPT_KEBO,(yyvsp[-1]));}
#line 7997 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 641:
#line 2140 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8003 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 642:
#line 2142 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK,(yyvsp[-2]),(yyvsp[-1]));}
#line 8009 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 643:
#line 2144 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK,(yyvsp[-2]),(yyvsp[-1]));}
#line 8015 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 644:
#line 2146 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK,(yyvsp[-1]));}
#line 8021 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 645:
#line 2148 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8027 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 646:
#line 2150 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK,(yyvsp[-2]),(yyvsp[-1]));}
#line 8033 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 647:
#line 2152 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK,(yyvsp[-2]),(yyvsp[-1]));}
#line 8039 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 648:
#line 2154 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK,(yyvsp[-1]));}
#line 8045 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 649:
#line 2156 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(JOIK,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8051 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 650:
#line 2158 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8057 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 651:
#line 2160 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8063 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 652:
#line 2162 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8069 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 653:
#line 2168 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8075 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 654:
#line 2170 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 8081 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 655:
#line 2172 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 8087 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 656:
#line 2174 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_OPT_KE,(yyvsp[-1]));}
#line 8093 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 657:
#line 2176 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8099 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 658:
#line 2178 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 8105 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 659:
#line 2180 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 8111 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 660:
#line 2182 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_OPT_KE,(yyvsp[-1]));}
#line 8117 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 661:
#line 2184 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(JOIK_OPT_KE,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8123 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 662:
#line 2186 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_OPT_KE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8129 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 663:
#line 2188 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_OPT_KE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8135 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 664:
#line 2190 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8141 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 665:
#line 2192 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8147 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 666:
#line 2194 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 8153 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 667:
#line 2196 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 8159 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 668:
#line 2198 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_OPT_KE,(yyvsp[-1]));}
#line 8165 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 669:
#line 2200 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8171 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 670:
#line 2202 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 8177 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 671:
#line 2204 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KE,(yyvsp[-2]),(yyvsp[-1]));}
#line 8183 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 672:
#line 2206 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_OPT_KE,(yyvsp[-1]));}
#line 8189 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 673:
#line 2208 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(JOIK_OPT_KE,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8195 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 674:
#line 2210 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_OPT_KE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8201 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 675:
#line 2212 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_OPT_KE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8207 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 676:
#line 2214 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8213 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 677:
#line 2218 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8219 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 678:
#line 2220 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8225 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 679:
#line 2222 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8231 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 680:
#line 2224 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[-1]));}
#line 8237 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 681:
#line 2226 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8243 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 682:
#line 2228 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8249 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 683:
#line 2230 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8255 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 684:
#line 2232 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[-1]));}
#line 8261 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 685:
#line 2234 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(JOIK_OPT_KEBO,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8267 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 686:
#line 2236 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8273 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 687:
#line 2238 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8279 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 688:
#line 2240 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8285 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 689:
#line 2242 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8291 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 690:
#line 2244 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8297 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 691:
#line 2246 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8303 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 692:
#line 2248 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[-1]));}
#line 8309 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 693:
#line 2250 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8315 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 694:
#line 2252 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8321 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 695:
#line 2254 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8327 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 696:
#line 2256 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[-1]));}
#line 8333 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 697:
#line 2258 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(JOIK_OPT_KEBO,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8339 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 698:
#line 2260 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8345 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 699:
#line 2262 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8351 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 700:
#line 2264 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8357 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 701:
#line 2266 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8363 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 702:
#line 2268 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8369 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 703:
#line 2270 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8375 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 704:
#line 2272 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[-1]));}
#line 8381 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 705:
#line 2274 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8387 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 706:
#line 2276 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8393 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 707:
#line 2278 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(JOIK_OPT_KEBO,(yyvsp[-2]),(yyvsp[-1]));}
#line 8399 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 708:
#line 2280 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(JOIK_OPT_KEBO,(yyvsp[-1]));}
#line 8405 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 709:
#line 2282 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(JOIK_OPT_KEBO,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8411 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 710:
#line 2284 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8417 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 711:
#line 2286 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(JOIK_OPT_KEBO,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8423 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 712:
#line 2288 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(JOIK_OPT_KEBO,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8429 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 713:
#line 2299 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(GEK,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8435 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 714:
#line 2301 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8441 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 715:
#line 2303 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8447 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 716:
#line 2305 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GEK,(yyvsp[-1]),(yyvsp[0]));}
#line 8453 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 717:
#line 2307 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8459 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 718:
#line 2309 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GEK,(yyvsp[-1]),(yyvsp[0]));}
#line 8465 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 719:
#line 2311 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GEK,(yyvsp[-1]),(yyvsp[0]));}
#line 8471 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 720:
#line 2313 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(GEK,(yyvsp[0]));}
#line 8477 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 721:
#line 2315 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8483 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 722:
#line 2317 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GEK,(yyvsp[-1]),(yyvsp[0]));}
#line 8489 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 723:
#line 2319 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GEK,(yyvsp[-1]),(yyvsp[0]));}
#line 8495 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 724:
#line 2325 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(GUHEK,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8501 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 725:
#line 2327 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GUHEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8507 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 726:
#line 2329 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GUHEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8513 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 727:
#line 2331 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GUHEK,(yyvsp[-1]),(yyvsp[0]));}
#line 8519 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 728:
#line 2333 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GUHEK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8525 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 729:
#line 2335 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GUHEK,(yyvsp[-1]),(yyvsp[0]));}
#line 8531 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 730:
#line 2337 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GUHEK,(yyvsp[-1]),(yyvsp[0]));}
#line 8537 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 731:
#line 2339 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(GUHEK,(yyvsp[0]));}
#line 8543 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 732:
#line 2345 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(GIK,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8549 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 733:
#line 2347 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GIK,(yyvsp[-1]),(yyvsp[0]));}
#line 8555 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 734:
#line 2349 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(GIK,(yyvsp[-1]),(yyvsp[0]));}
#line 8561 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 735:
#line 2351 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(GIK,(yyvsp[0]));}
#line 8567 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 736:
#line 2358 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TAG,(yyvsp[0]));}
#line 8573 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 737:
#line 2360 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TAG,(yyvsp[0]));}
#line 8579 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 738:
#line 2365 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(CTAG,(yyvsp[0]));}
#line 8585 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 739:
#line 2367 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(CTAG,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8591 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 740:
#line 2369 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(CTAG,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8597 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 741:
#line 2371 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(CTAG,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8603 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 742:
#line 2373 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(CTAG,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8609 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 743:
#line 2375 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(CTAG,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8615 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 744:
#line 2377 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(CTAG,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8621 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 745:
#line 2379 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(CTAG,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8627 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 746:
#line 2381 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(CTAG,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8633 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 747:
#line 2383 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(CTAG,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8639 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 748:
#line 2385 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(CTAG,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8645 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 749:
#line 2387 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(CTAG,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8651 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 750:
#line 2389 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(CTAG,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8657 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 751:
#line 2394 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(COMPLEX_TENSE_MODAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8663 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 752:
#line 2396 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(COMPLEX_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8669 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 753:
#line 2398 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(COMPLEX_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8675 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 754:
#line 2400 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(COMPLEX_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8681 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 755:
#line 2402 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(COMPLEX_TENSE_MODAL,(yyvsp[-1]),(yyvsp[0]));}
#line 8687 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 756:
#line 2409 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(STAG,(yyvsp[0]));}
#line 8693 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 757:
#line 2411 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(STAG,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8699 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 758:
#line 2413 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(STAG,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 8705 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 759:
#line 2422 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8711 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 760:
#line 2424 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8717 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 761:
#line 2426 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8723 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 762:
#line 2428 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8729 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 763:
#line 2430 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8735 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 764:
#line 2432 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8741 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 765:
#line 2434 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8747 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 766:
#line 2436 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8753 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 767:
#line 2438 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8759 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 768:
#line 2440 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8765 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 769:
#line 2442 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8771 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 770:
#line 2444 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[-1]));}
#line 8777 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 771:
#line 2446 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8783 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 772:
#line 2448 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8789 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 773:
#line 2450 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8795 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 774:
#line 2452 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[-1]));}
#line 8801 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 775:
#line 2455 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(SIMPLE_TENSE_MODAL,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8807 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 776:
#line 2457 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8813 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 777:
#line 2459 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8819 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 778:
#line 2461 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8825 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 779:
#line 2463 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8831 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 780:
#line 2465 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8837 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 781:
#line 2467 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8843 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 782:
#line 2469 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8849 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 783:
#line 2471 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8855 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 784:
#line 2473 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8861 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 785:
#line 2475 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8867 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 786:
#line 2477 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8873 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 787:
#line 2479 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8879 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 788:
#line 2481 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8885 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 789:
#line 2483 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8891 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 790:
#line 2485 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[-1]));}
#line 8897 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 791:
#line 2488 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(SIMPLE_TENSE_MODAL,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8903 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 792:
#line 2490 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8909 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 793:
#line 2492 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8915 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 794:
#line 2494 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8921 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 795:
#line 2496 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8927 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 796:
#line 2498 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8933 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 797:
#line 2500 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8939 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 798:
#line 2502 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8945 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 799:
#line 2504 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SIMPLE_TENSE_MODAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8951 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 800:
#line 2506 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8957 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 801:
#line 2508 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8963 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 802:
#line 2510 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8969 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 803:
#line 2512 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 8975 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 804:
#line 2514 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8981 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 805:
#line 2516 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8987 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 806:
#line 2518 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[-1]));}
#line 8993 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 807:
#line 2521 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 8999 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 808:
#line 2523 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[-1]));}
#line 9005 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 809:
#line 2526 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SIMPLE_TENSE_MODAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]));}
#line 9011 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 810:
#line 2528 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SIMPLE_TENSE_MODAL,(yyvsp[-2]),(yyvsp[-1]));}
#line 9017 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 811:
#line 2531 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[-1]));}
#line 9023 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 812:
#line 2533 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SIMPLE_TENSE_MODAL,(yyvsp[-1]));}
#line 9029 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 813:
#line 2540 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SE_BAI,(yyvsp[-1]),(yyvsp[0]));}
#line 9035 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 814:
#line 2544 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(BAI1,(yyvsp[0]));}
#line 9041 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 815:
#line 2551 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(TIME,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9047 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 816:
#line 2553 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TIME,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9053 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 817:
#line 2556 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TIME,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9059 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 818:
#line 2558 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TIME,(yyvsp[-1]),(yyvsp[0]));}
#line 9065 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 819:
#line 2561 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TIME,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9071 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 820:
#line 2563 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TIME,(yyvsp[-1]),(yyvsp[0]));}
#line 9077 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 821:
#line 2566 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TIME,(yyvsp[-1]),(yyvsp[0]));}
#line 9083 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 822:
#line 2568 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TIME,(yyvsp[0]));}
#line 9089 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 823:
#line 2571 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TIME,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9095 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 824:
#line 2573 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TIME,(yyvsp[-1]),(yyvsp[0]));}
#line 9101 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 825:
#line 2576 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TIME,(yyvsp[-1]),(yyvsp[0]));}
#line 9107 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 826:
#line 2578 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TIME,(yyvsp[0]));}
#line 9113 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 827:
#line 2581 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TIME,(yyvsp[-1]),(yyvsp[0]));}
#line 9119 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 828:
#line 2583 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TIME,(yyvsp[0]));}
#line 9125 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 829:
#line 2586 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TIME,(yyvsp[0]));}
#line 9131 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 830:
#line 2591 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(ZEHA_PU_NAI,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9137 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 831:
#line 2593 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(ZEHA_PU_NAI,(yyvsp[-1]),(yyvsp[0]));}
#line 9143 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 832:
#line 2595 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(ZEHA_PU_NAI,(yyvsp[0]));}
#line 9149 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 833:
#line 2601 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(TIME_OFFSET,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9155 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 834:
#line 2603 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TIME_OFFSET,(yyvsp[-1]),(yyvsp[0]));}
#line 9161 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 835:
#line 2605 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TIME_OFFSET,(yyvsp[-1]),(yyvsp[0]));}
#line 9167 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 836:
#line 2607 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TIME_OFFSET,(yyvsp[0]));}
#line 9173 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 837:
#line 2611 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(TIME_OFFSET_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 9179 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 838:
#line 2613 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(TIME_OFFSET_SEQ,(yyvsp[0]));}
#line 9185 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 839:
#line 2619 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(SPACE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9191 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 840:
#line 2621 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SPACE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9197 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 841:
#line 2623 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SPACE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9203 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 842:
#line 2625 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE,(yyvsp[-1]),(yyvsp[0]));}
#line 9209 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 843:
#line 2628 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SPACE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9215 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 844:
#line 2630 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE,(yyvsp[-1]),(yyvsp[0]));}
#line 9221 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 845:
#line 2632 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SPACE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9227 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 846:
#line 2634 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SPACE,(yyvsp[0]));}
#line 9233 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 847:
#line 2637 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SPACE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9239 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 848:
#line 2639 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE,(yyvsp[-1]),(yyvsp[0]));}
#line 9245 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 849:
#line 2641 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SPACE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9251 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 850:
#line 2643 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SPACE,(yyvsp[0]));}
#line 9257 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 851:
#line 2646 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SPACE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9263 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 852:
#line 2648 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SPACE,(yyvsp[0]));}
#line 9269 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 853:
#line 2650 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE,(yyvsp[-1]),(yyvsp[0]));}
#line 9275 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 854:
#line 2656 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SPACE_OFFSET,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9281 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 855:
#line 2658 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE_OFFSET,(yyvsp[-1]),(yyvsp[0]));}
#line 9287 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 856:
#line 2660 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE_OFFSET,(yyvsp[-1]),(yyvsp[0]));}
#line 9293 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 857:
#line 2662 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SPACE_OFFSET,(yyvsp[0]));}
#line 9299 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 858:
#line 2666 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE_OFFSET_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 9305 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 859:
#line 2668 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SPACE_OFFSET_SEQ,(yyvsp[0]));}
#line 9311 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 860:
#line 2674 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(SPACE_INTERVAL,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9317 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 861:
#line 2676 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SPACE_INTERVAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9323 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 862:
#line 2678 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9329 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 863:
#line 2680 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SPACE_INTERVAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9335 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 864:
#line 2682 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9341 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 865:
#line 2684 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE_INTERVAL,(yyvsp[-1]),(yyvsp[0]));}
#line 9347 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 866:
#line 2686 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SPACE_INTERVAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9353 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 867:
#line 2688 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9359 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 868:
#line 2690 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE_INTERVAL,(yyvsp[-1]),(yyvsp[0]));}
#line 9365 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 869:
#line 2693 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SPACE_INTERVAL,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9371 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 870:
#line 2695 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9377 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 871:
#line 2697 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE_INTERVAL,(yyvsp[-1]),(yyvsp[0]));}
#line 9383 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 872:
#line 2699 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9389 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 873:
#line 2701 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE_INTERVAL,(yyvsp[-1]),(yyvsp[0]));}
#line 9395 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 874:
#line 2703 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SPACE_INTERVAL,(yyvsp[0]));}
#line 9401 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 875:
#line 2705 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SPACE_INTERVAL,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9407 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 876:
#line 2707 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE_INTERVAL,(yyvsp[-1]),(yyvsp[0]));}
#line 9413 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 877:
#line 2709 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SPACE_INTERVAL,(yyvsp[0]));}
#line 9419 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 878:
#line 2712 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SPACE_INTERVAL,(yyvsp[0]));}
#line 9425 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 879:
#line 2718 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE_INT_PROPS,(yyvsp[-1]),(yyvsp[0]));}
#line 9431 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 880:
#line 2720 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(SPACE_INT_PROPS,(yyvsp[0]));}
#line 9437 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 881:
#line 2724 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(SPACE_INT_PROP,(yyvsp[-1]),(yyvsp[0]));}
#line 9443 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 882:
#line 2730 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(INTERVAL_PROPERTY,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9449 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 883:
#line 2732 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(INTERVAL_PROPERTY,(yyvsp[-1]),(yyvsp[0]));}
#line 9455 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 884:
#line 2734 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(INTERVAL_PROPERTY,(yyvsp[-1]),(yyvsp[0]));}
#line 9461 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 885:
#line 2736 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INTERVAL_PROPERTY,(yyvsp[0]));}
#line 9467 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 886:
#line 2738 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(INTERVAL_PROPERTY,(yyvsp[-1]),(yyvsp[0]));}
#line 9473 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 887:
#line 2740 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INTERVAL_PROPERTY,(yyvsp[0]));}
#line 9479 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 888:
#line 2744 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(INTERVAL_PROPERTY_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 9485 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 889:
#line 2746 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INTERVAL_PROPERTY_SEQ,(yyvsp[0]));}
#line 9491 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 890:
#line 2753 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(FREE_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 9497 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 891:
#line 2755 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FREE_SEQ,(yyvsp[0]));}
#line 9503 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 892:
#line 2759 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FREE,(yyvsp[0]));}
#line 9509 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 893:
#line 2761 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FREE,(yyvsp[0]));}
#line 9515 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 894:
#line 2763 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FREE,(yyvsp[0]));}
#line 9521 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 895:
#line 2765 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FREE,(yyvsp[0]));}
#line 9527 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 896:
#line 2767 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FREE,(yyvsp[0]));}
#line 9533 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 897:
#line 2769 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(FREE,(yyvsp[0]));}
#line 9539 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 898:
#line 2774 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_7(METALINGUISTIC,(yyvsp[-6]),(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9545 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 899:
#line 2776 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(METALINGUISTIC,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9551 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 900:
#line 2778 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(METALINGUISTIC,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9557 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 901:
#line 2780 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(METALINGUISTIC,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9563 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 902:
#line 2783 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(METALINGUISTIC,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9569 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 903:
#line 2785 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(METALINGUISTIC,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9575 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 904:
#line 2787 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(METALINGUISTIC,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9581 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 905:
#line 2789 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(METALINGUISTIC,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9587 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 906:
#line 2793 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(METALINGUISTIC_MAIN_SELBRI,(yyvsp[0]));}
#line 9593 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 907:
#line 2797 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(RECIPROCITY,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9599 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 908:
#line 2799 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(RECIPROCITY,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9605 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 909:
#line 2801 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(RECIPROCITY,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9611 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 910:
#line 2803 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(RECIPROCITY,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9617 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 911:
#line 2808 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9623 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 912:
#line 2810 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9629 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 913:
#line 2812 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9635 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 914:
#line 2814 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(FREE_VOCATIVE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9641 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 915:
#line 2817 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(FREE_VOCATIVE,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9647 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 916:
#line 2819 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9653 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 917:
#line 2822 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9659 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 918:
#line 2824 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9665 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 919:
#line 2827 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(FREE_VOCATIVE,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9671 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 920:
#line 2829 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9677 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 921:
#line 2832 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(FREE_VOCATIVE,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9683 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 922:
#line 2834 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(FREE_VOCATIVE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9689 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 923:
#line 2837 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(FREE_VOCATIVE,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9695 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 924:
#line 2839 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(FREE_VOCATIVE,(yyvsp[-1]),(yyvsp[0]));}
#line 9701 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 925:
#line 2843 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(UTTERANCE_ORDINAL,(yyvsp[-1]),(yyvsp[0]));}
#line 9707 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 926:
#line 2845 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(UTTERANCE_ORDINAL,(yyvsp[-1]),(yyvsp[0]));}
#line 9713 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 927:
#line 2849 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(PARENTHETICAL,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9719 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 928:
#line 2853 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUBSCRIPT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9725 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 929:
#line 2855 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUBSCRIPT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9731 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 930:
#line 2857 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUBSCRIPT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9737 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 931:
#line 2859 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(SUBSCRIPT,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9743 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 932:
#line 2862 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_6(SUBSCRIPT,(yyvsp[-5]),(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9749 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 933:
#line 2864 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(SUBSCRIPT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9755 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 934:
#line 2866 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_5(SUBSCRIPT,(yyvsp[-4]),(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9761 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 935:
#line 2868 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_4(SUBSCRIPT,(yyvsp[-3]),(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9767 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 936:
#line 2877 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(VOCATIVE,(yyvsp[-1]),(yyvsp[0]));}
#line 9773 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 937:
#line 2879 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(VOCATIVE,(yyvsp[0]));}
#line 9779 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 938:
#line 2881 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(VOCATIVE,(yyvsp[0]));}
#line 9785 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 939:
#line 2885 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(COI_NAI_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 9791 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 940:
#line 2887 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(COI_NAI_SEQ,(yyvsp[0]));}
#line 9797 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 941:
#line 2889 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_3(COI_NAI_SEQ,(yyvsp[-2]),(yyvsp[-1]),(yyvsp[0]));}
#line 9803 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 942:
#line 2891 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(COI_NAI_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 9809 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 943:
#line 2898 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(INDICATORS,(yyvsp[-1]),(yyvsp[0]));}
#line 9815 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 944:
#line 2900 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INDICATORS,(yyvsp[0]));}
#line 9821 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 945:
#line 2904 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(INDICATOR_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 9827 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 946:
#line 2906 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INDICATOR_SEQ,(yyvsp[0]));}
#line 9833 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 947:
#line 2912 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(INDICATOR,(yyvsp[-1]),(yyvsp[0]));}
#line 9839 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 948:
#line 2914 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INDICATOR,(yyvsp[0]));}
#line 9845 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 949:
#line 2916 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(INDICATOR,(yyvsp[-1]),(yyvsp[0]));}
#line 9851 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 950:
#line 2918 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INDICATOR,(yyvsp[0]));}
#line 9857 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 951:
#line 2920 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INDICATOR,(yyvsp[0]));}
#line 9863 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 952:
#line 2922 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INDICATOR,(yyvsp[0]));}
#line 9869 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 953:
#line 2924 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(INDICATOR,(yyvsp[0]));}
#line 9875 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 954:
#line 2928 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(NAI_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 9881 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 955:
#line 2930 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(NAI_SEQ,(yyvsp[0]));}
#line 9887 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 956:
#line 2934 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(CMENE_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 9893 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 957:
#line 2936 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(CMENE_SEQ,(yyvsp[0]));}
#line 9899 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 958:
#line 2940 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(NIHO_SEQ_FREE_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 9905 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 959:
#line 2942 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(NIHO_SEQ_FREE_SEQ,(yyvsp[0]));}
#line 9911 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 960:
#line 2946 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_2(NIHO_SEQ,(yyvsp[-1]),(yyvsp[0]));}
#line 9917 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;

  case 961:
#line 2948 "rpc2x_full_act.y" /* yacc.c:1648  */
    {(yyval) = new_node_1(NIHO_SEQ,(yyvsp[0]));}
#line 9923 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
    break;


#line 9927 "rpc2x_full_act.tab.c" /* yacc.c:1648  */
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

  /* Now 'shift' the result of the reduction.  Determine what state
     that goes to, based on the state we popped back to and the rule
     number reduced by.  */

  yyn = yyr1[yyn];

  yystate = yypgoto[yyn - YYNTOKENS] + *yyssp;
  if (0 <= yystate && yystate <= YYLAST && yycheck[yystate] == *yyssp)
    yystate = yytable[yystate];
  else
    yystate = yydefgoto[yyn - YYNTOKENS];

  goto yynewstate;


/*--------------------------------------.
| yyerrlab -- here on detecting error.  |
`--------------------------------------*/
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

  /* Do not reclaim the symbols of the rule whose action triggered
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
  yyerrstatus = 3;      /* Each real token shifted decrements this.  */

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
  /* Do not reclaim the symbols of the rule whose action triggered
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
  return yyresult;
}
