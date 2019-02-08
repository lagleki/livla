/* A Bison parser, made by GNU Bison 3.0.5.  */

/* Bison interface for Yacc-like parsers in C

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

#ifndef YY_YY_RPC2X_ACT_TAB_H_INCLUDED
# define YY_YY_RPC2X_ACT_TAB_H_INCLUDED
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
extern YYLTYPE yylloc;
int yyparse (void);

#endif /* !YY_YY_RPC2X_ACT_TAB_H_INCLUDED  */
