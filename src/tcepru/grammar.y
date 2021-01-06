/*          LOJBAN MACHINE GRAMMAR, 3RD BASELINE AS OF 10 JANUARY 1997
   WHICH IS ORIGINAL BASELINE 20 JULY 1990 INCORPORATING JC'S TECH FIXES 1-28
     THIS DRAFT ALSO INCORPORATES CHANGE PROPOSALS 1-47 DATED 29 DECEMBER 1996

          THIS DOCUMENT IS EXPLICITLY DEDICATED TO THE PUBLIC DOMAIN
                BY ITS AUTHOR, THE LOGICAL LANGUAGE GROUP INC.
       CONTACT THAT ORGANIZATION AT 2904 BEAU LANE, FAIRFAX VA 22031 USA
                          U.S. PHONE: 703-385-0273
                        INTL PHONE: +1 703 385-0273

  grammar.300

*/

   /* The Lojban machine parsing algorithm is a multi-step process.  The
   YACC machine grammar presented here is an amalgam of those steps,
   concatenated so as to allow YACC to verify the syntactic ambiguity of
   the grammar.  YACC is used to generate a parser for a portion of the
   grammar, which is LALR1 (the type of grammar that YACC is designed to
   identify and process successfully), but most of the rest of the grammar
   must be parsed using some language-coded processing.


   Step 1 - Lexing

   From phonemes, stress, and pause, it is possible to resolve Lojban
   unambiguously into a stream of words.  Any machine processing of speech
   will have to have some way to deal with 'non-Lojban' failures of fluent
   speech, of course.  The resolved words can be expressed as a text file,
   using Lojban's phonetic spelling rules.

   The following steps, assume that there is the possibility of non-Lojban
   text within the Lojban text (delimited appropriately).  Such non-Lojban
   text may not be reducible from speech phonetically.  However, step 2
   allows the filtering of a phonetically transcribed text stream, to
   recognize such portions of non-Lojban text where properly delimited,
   without interference with the parsing algorithm.


   Step 2 - Filtering

   From start to end, performing the following filtering and lexing tasks
   using the given order of precedence in case of conflict:

   a. If the Lojban word "zoi" (selma'o ZOI) is identified, take the
   following Lojban word (which should be end delimited with a pause for
   separation from the following non-Lojban text) as an opening delimiter.
   Treat all text following that delimiter, until that delimiter recurs
   *after a pause*, as grammatically a single token (labelled 'anything_699 699'
   in this grammar).  There is no need for processing within this text
   except as necessary to find the closing delimiter.

   b. If the Lojban word "zo" (selma'o ZO) is identified, treat the
   following Lojban word as a token labelled 'any_word_698 698', instead of lexing
   it by its normal grammatical function.

   c. If the Lojban word "lo'u" (selma'o LOhU) is identified, search for
   the closing delimiter "le'u" (selma'o LEhU), ignoring any such closing
   delimiters absorbed by the previous two steps.  The text between the
   delimiters should be treated as the single token 'any_words_697 697'.

   d. Categorize all remaining words into their Lojban selma'o category,
   including the various delimiters mentioned in the previous steps.  In
   all steps after step 2 2, only the selma'o token type is significant for
   each word.

   e. If the word "si" (selma'o SI) is identified, erase it and the
   previous word (or token, if the previous text has been condensed into a
   single token by one of the above rules).

   f. If the word "sa" (selma'o SA) is identified, erase it and all
   preceding text as far back as necessary to make what follows attach to
   what precedes.  (This rule is hard to formalize and may receive further
   definition later.)

   g. If the word 'su' (selma'o SU) is identified, erase it and all
   preceding text back to and including the first preceding token word
   which is in one of the selma'o:  NIhO, LU, TUhE, and TO.  However, if
   speaker identification is available, a SU shall only erase to the
   beginning of a speaker's discourse, unless it occurs at the beginning of
   a speaker's discourse.  (Thus, if the speaker has said something, two
   "su"'s are required to erase the entire conversation.


   Step 3 - Termination

   If the text contains a FAhO, treat that as the end-of-text and ignore
   everything that follows it.


   Step 4 - Absorption of Grammar-Free Tokens

   In a new pass, perform the following absorptions (absorption means that
   the token is removed from the grammar for processing in following steps,
   and optionally reinserted, grouped with the absorbing token after
   parsing is completed).

   a. Token sequences of the form any - (ZEI - any) ..., where there may be
   any number of ZEIs, are merged into a single token of selma'o BRIVLA.

   b. Absorb all selma'o BAhE tokens into the following token.  If
   they occur at the end of text, leave them alone (they are errors).

   c. Absorb all selma'o BU tokens into the previous token.  Relabel the
   previous token as selma'o BY.

   d. If selma'o NAI occurs immediately following any of tokens UI or CAI,
   absorb the NAI into the previous token.

   e. Absorb all members of selma'o DAhO, FUhO, FUhE, UI, Y, and CAI
   into the previous token.  All of these null grammar tokens are permitted
   following any word of the grammar, without interfering with that word's
   grammatical function, or causing any effect on the grammatical
   interpretation of any other token in the text.  Indicators at the
   beginning of text are explicitly handled by the grammar.


   Step 5 - Insertion of Lexer Lexemes

   Lojban is not in itself LALR1.  There are words whose grammatical
   function is determined by following tokens.  As a result, parsing of the
   YACC grammar must take place in two steps.  In the first step, certain
   strings of tokens with defined grammars are identified, and either

   a. are replaced by a single specified 'lexer token' for step 6 6, or

   b. the lexer token is inserted in front of the token string to identify
   it uniquely.

   The YACC grammar included herein is written to make YACC generation of a
   step 6 parser easy regardless of whether a. or b. is used.  The strings
   of tokens to be labelled with lexer tokens are found in rule terminals
   labelled with numbers between 900 and 1099.  These rules are defined
   with the lexer tokens inserted, with the result that it can be verified
   that the language is LALR1 under option b. after steps 1 through 4 have
   been performed.  Alternatively, if option a. is to be used, these rules
   are commented out, and the rule terminals labelled from 800 to 900 refer
   to the lexer tokens *without* the strings of defining tokens.  Two sets
   of lexer tokens are defined in the token set so as to be compatible with
   either option.

   In this step, the strings must be labelled with the appropriate lexer
   tokens.  Order of inserting lexer tokens *IS* significant, since some
   shorter strings that would be marked with a lexer token may be found
   inside longer strings.  If the tokens are inserted before or in place of
   the shorter strings, the longer strings cannot be identified.

   If option a. is chosen, the following order of insertion works correctly
   (it is not the only possible order): A, C, D, B, U, E, H, I,
   J, K, M ,N, G, O, V, W, F, P, R, T, S, Y, L, Q. This ensures that the longest
   rules will be processed first; a PA+MAI will not be seen as a PA
   with a dangling MAI at the end, for example.


   Step 6 - YACC Parsing

   YACC should now be able to parse the Lojban text in accordance with the
   rule terminals labelled from 1 to 899 under option 5a, or 1 to 1099
   under option 5b.  Comment out the rules beyond 900 if option 5a is used,
   and comment out the 700 700-series of lexer-tokens, while restoring the
   series of lexer tokens numbered from 900 900 up.

   */


/* In the following token definitions, selma'o names in the comments are
the equivalent "lexemes" from earlier Institute versions of Loglan, to aid
those familiar with the older grammar.  Names are correct as of TLI NB3.  */

%token A_501 501            /*        eks; basic afterthought logical connectives */
%token BAI_502 502          /*        modal operators */
%token BAhE_503 503         /*        next word intensifier */
%token BE_504 504           /*        sumti link to attach sumti to a selbri */
%token BEI_505 505          /*        multiple sumti separator between BE, BEI */
%token BEhO_506 506         /*        terminates BE/BEI specified descriptors */
%token BIhI_507 507         /*        interval component of JOI */
%token BO_508 508           /*        joins two units with shortest scope */
%token BRIVLA_509 509       /*        any brivla */
%token BU_511 511           /*        turns any word into a BY lerfu word */
%token BY_513 513           /*        individual lerfu words */
%token CAhA_514 514         /*        specifies actuality/potentiality of tense */
%token CAI_515 515          /*        afterthought intensity marker */
%token CEI_516 516          /*        pro-bridi assignment operator */
%token CEhE_517 517         /*        afterthought term list connective */
%token CMENE_518 518        /*        names; require consonant end, then pause no
                                   LA or DOI selma'o embedded, pause before if
                                   vowel initial and preceded by a vowel */
%token CO_519 519           /*        tanru inversion  */
%token COI_520 520          /*        vocative marker permitted inside names; must
                                   always be followed by pause or DOI */
%token CU_521 521           /*        separator between head sumti and selbri */
%token CUhE_522 522         /*        tense/modal question */
%token DAhO_524 524         /*        cancel anaphora/cataphora assignments */
%token DOI_525 525          /*        vocative marker */
%token DOhU_526 526         /*        terminator for DOI-marked vocatives */
%token FA_527 527           /*        modifier head generic case tag */
%token FAhA_528 528         /*        superdirections in space */
%token FAhO_529 529         /*        normally elided 'done pause' to indicate end
                                   of utterance string */
%token FEhE_530 530         /*        space interval mod flag */
%token FEhU_531 531         /*        ends bridi to modal conversion */
%token FIhO_532 532         /*        marks bridi to modal conversion */
%token FOI_533 533          /*        end compound lerfu */
%token FUhE_535 535         /*        open long scope for indicator */
%token FUhO_536 536         /*        close long scope for indicator */
%token GA_537 537           /*        geks; forethought logical connectives */
%token GEhU_538 538         /*        marker ending GOI relative clauses */
%token GI_539 539           /*        forethought medial marker */
%token GIhA_541 541         /*        logical connectives for bridi-tails */
%token GOI_542 542          /*        attaches a sumti modifier to a sumti */
%token GOhA_543 543         /*        pro-bridi */
%token GUhA_544 544         /*        GEK for tanru units, corresponds to JEKs */
%token I_545 545            /*        sentence link */
%token JA_546 546           /*        jeks; logical connectives within tanru */
%token JAI_547 547          /*        modal conversion flag */
%token JOI_548 548          /*        non-logical connectives */
%token KEhE_550 550         /*        right terminator for KE groups */
%token KE_551 551           /*        left long scope marker */
%token KEI_552 552          /*        right terminator, NU abstractions */
%token KI_554 554           /*        multiple utterance scope for tenses */
%token KOhA_555 555         /*        sumti anaphora */
%token KU_556 556           /*        right terminator for descriptions, etc. */
%token KUhO_557 557         /*        right terminator, NOI relative clauses */
%token LA_558 558           /*        name descriptors */
%token LAU_559 559          /*        lerfu prefixes */
%token LAhE_561 561         /*        sumti qualifiers */
%token LE_562 562           /*        sumti descriptors */
%token LEhU_565 565         /*        possibly ungrammatical text right quote */
%token LI_566 566           /*        convert number to sumti */
%token LIhU_567 567         /*        grammatical text right quote */
%token LOhO_568 568         /*        elidable terminator for LI */
%token LOhU_569 569         /*        possibly ungrammatical text left quote */
%token LU_571 571           /*        grammatical text left quote */
%token LUhU_573 573         /*        LAhE close delimiter */
%token ME_574 574           /*        converts a sumti into a tanru_unit */
%token MEhU_575 575         /*        terminator for ME */
%token MOhI_577 577         /*        motion tense marker */
%token NA_578 578           /*        bridi negation  */
%token NAI_581 581          /*        attached to words to negate them */
%token NAhE_583 583         /*        scalar negation  */
%token NIhO_584 584         /*        new paragraph; change of subject */
%token NOI_585 585          /*        attaches a subordinate clause to a sumti */
%token NU_586 586           /*        abstraction  */
%token NUhI_587 587         /*        marks the start of a termset */
%token NUhU_588 588         /*        marks the middle and end of a termset */
%token PEhE_591 591         /*        afterthought termset connective prefix */
%token PU_592 592           /*        directions in time */
%token RAhO_593 593         /*        flag for modified interpretation of GOhI */
%token ROI_594 594          /*        converts number to extensional tense */
%token SA_595 595           /*        metalinguistic eraser to the beginning of
                                   the current utterance */
%token SE_596 596           /*        conversions */
%token SEI_597 597          /*        metalinguistic bridi insert marker */
%token SEhU_598 598         /*        metalinguistic bridi end marker */
%token SI_601 601           /*        metalinguistic single word eraser */
%token SOI_602 602          /*        reciprocal sumti marker */
%token SU_603 603           /*        metalinguistic eraser of the entire text */
%token TAhE_604 604         /*        tense interval properties */
%token TEI_605 605          /*        start compound lerfu */
%token TO_606 606           /*        left discursive parenthesis */
%token TOI_607 607          /*        right discursive parenthesis */
%token TUhE_610 610         /*        multiple utterance scope mark */
%token TUhU_611 611         /*        multiple utterance end scope mark */
%token UI_612 612           /*        attitudinals, observationals, discursives */
%token VA_613 613           /*        distance in space-time */
%token VAU_614 614          /*        end simple bridi or bridi-tail */
%token VEhA_615 615         /*        space-time interval size */
%token VIhA_616 616         /*        space-time dimensionality marker */
%token VUhO_617 617         /*        glue between logically connected sumti
                                    and relative clauses */
%token XI_618 618           /*        subscripting operator */
%token Y_619 619            /*        hesitation */
%token ZAhO_621 621         /*        event properties - inchoative, etc. */
%token ZEhA_622 622         /*        time interval size tense */
%token ZEI_623 623          /*        lujvo glue */
%token ZI_624 624           /*        time distance tense */
%token ZIhE_625 625         /*        conjoins relative clauses */
%token ZO_626 626           /*        single word metalinguistic quote marker */
%token ZOI_627 627          /*        delimited quote marker */
%token ZOhU_628 628         /*        prenex terminator (not elidable) */

%token BIhE_650 650         /*        prefix for high-priority MEX operator */
%token BOI_651 651          /*        number or lerfu-string terminator */
%token FUhA_655 655         /*        reverse Polish flag */
%token GAhO_656 656         /*        open/closed interval markers for BIhI */
%token JOhI_657 657         /*        flags an array operand */
%token KUhE_658 658         /*        MEX forethought delimiter */
%token MAI_661 661          /*        change numbers to utterance ordinals */
%token MAhO_662 662         /*        change MEX expressions to MEX operators */
%token MOI_663 663          /*        change number to selbri */
%token MOhE_664 664         /*        change sumti to operand, inverse of LI */
%token NAhU_665 665         /*        change a selbri into an operator */
%token NIhE_666 666         /*        change selbri to operand; inverse of MOI */
%token NUhA_667 667         /*        change operator to selbri; inverse of MOhE */
%token PA_672 672           /*        numbers and numeric punctuation */
%token PEhO_673 673         /*        forethought (Polish) flag */
%token TEhU_675 675         /*        closing gap for MEX constructs */
%token VEI_677 677          /*        left MEX bracket */
%token VEhO_678 678         /*        right MEX bracket */
%token VUhU_679 679         /*        MEX operator */

%token any_words_697 697    /*        a string of lexable Lojban words */
%token any_word_698 698     /*        any single lexable Lojban words */
%token anything_699 699     /*        a possibly unlexable phoneme string */


/* The following tokens are the actual lexer tokens.  The _900 900 series
tokens are duplicates that allow limited testing of lexer rules in the
context of the total grammar.  They are used in the actual parser, where
the 900 series rules are found in the lexer.  */

/*%token lexer_A_701 701      /*        flags a MAI utterance ordinal */
/*%token lexer_B_702 702      /*        flags an EK unless EK_BO, EK_KE */
/*%token lexer_C_703 703      /*        flags an EK_BO */
/*%token lexer_D_704 704      /*        flags an EK_KE */
/*%token lexer_E_705 705      /*        flags a JEK */
/*%token lexer_F_706 706      /*        flags a JOIK */
/*%token lexer_G_707 707      /*        flags a GEK */
/*%token lexer_H_708 708      /*        flags a GUhEK */
/*%token lexer_I_709 709      /*        flags a NAhE_BO */
/*%token lexer_J_710 710      /*        flags a NA_KU */
/*%token lexer_K_711 711      /*        flags an I_BO (option. JOIK/JEK lexer tags)*/
/*%token lexer_L_712 712      /*        flags a PA, unless MAI (then lexer A) */
/*%token lexer_M_713 713      /*        flags a GIhEK_BO */
/*%token lexer_N_714 714      /*        flags a GIhEK_KE */
/*%token lexer_O_715 715      /*        flags a modal operator BAI or compound */
/*%token lexer_P_716 716      /*        flags a GIK */
/*%token lexer_Q_717 717      /*        flags a lerfu_string unless MAI (then lexer_A)*/
/*%token lexer_R_718 718      /*        flags a GIhEK, not BO or KE */
/*%token lexer_S_719 719      /*        flags simple I */
/*%token lexer_T_720 720      /*        flags I_JEK */
/*%token lexer_U_721 721      /*        flags a JEK_BO */
/*%token lexer_V_722 722      /*        flags a JOIK_BO */
/*%token lexer_W_723 723      /*        flags a JOIK_KE */
/* %token lexer_X_724 724   /* null */
/*%token lexer_Y_725 725      /*        flags a PA_MOI */


%token lexer_A_905 905    /*        :  lexer_A_701  utt_ordinal_root_906 */
%token lexer_B_910 910    /*        :  lexer_B_702  EK_root_911 */
%token lexer_C_915 915    /*        :  lexer_C_703  EK_root_911  BO_508 */
%token lexer_D_916 916    /*        :  lexer_D_704  EK_root_911  KE_551 */
%token lexer_E_925 925    /*        :  lexer_E_705  JEK_root_926 */
%token lexer_F_930 930    /*        :  lexer_F_706  JOIK_root_931 */
%token lexer_G_935 935    /*        :  lexer_G_707  GA_537 */
%token lexer_H_940 940    /*        :  lexer_H_708  GUhA_544 */
%token lexer_I_945 945    /*        :  lexer_I_709  NAhE_583  BO_508 */
%token lexer_J_950 950    /*        :  lexer_J_710  NA_578  KU_556 */
%token lexer_K_955 955    /*        :  lexer_K_711  I_432  BO_508 */
%token lexer_L_960 960    /*        :  lexer_L_712  number_root_961 */
%token lexer_M_965 965    /*        :  lexer_M_713  GIhEK_root_991  BO_508 */
%token lexer_N_966 966    /*        :  lexer_N_714  GIhEK_root_991  KE_551 */
%token lexer_O_970 970    /*        :  lexer_O_715  simple_tense_modal_972 */
%token lexer_P_980 980    /*        :  lexer_P_716  GIK_root_981 */
%token lexer_Q_985 985    /*        :  lexer_Q_717  lerfu_string_root_986 */
%token lexer_R_990 990    /*        :  lexer_R_718  GIhEK_root_991 */
%token lexer_S_995 995    /*        :  lexer_S_719  I_545 */
%token lexer_T_1000 1000  /*        :  lexer_T_720  I_545  simple_JOIK_JEK_957 */
%token lexer_U_1005 1005   /*        :  lexer_U_721  JEK_root_926  BO_508 */
%token lexer_V_1010 1010   /*        :  lexer_V_722  JOIK_root_931  BO_508 */
%token lexer_W_1015 1015   /*        :  lexer_W_723  JOIK_root_931  KE_551 */
%token lexer_X_1020 1020   /* null */
%token lexer_Y_1025 1025   /*        :  lexer_Y_725  number_root_961  MOI_663 */


%start toplevel

%{
# include "token.h"
# include "node.h"
%}

%%

toplevel                :  text_0  FAhO_529
                           { $$ = toplevel($1); }
                        ;
text_0 : text_A_1
                           { $$ = node1(10000, $1); }
                        | indicators_411 text_A_1
                           { $$ = node2(10000, $1, $2); }
                        | free_modifier_32 text_A_1
                           { $$ = node2(10000, $1, $2); }
                        | cmene_404 text_A_1
                           { $$ = node2(10000, $1, $2); }
                        | indicators_411 free_modifier_32 text_A_1
                           { $$ = node3(10000, $1, $2, $3); }
                        | NAI_581 text_0
                           { $$ = node2(10000, $1, $2); }
                        ;
text_A_1 : JOIK_JEK_422 text_B_2
                           { $$ = node2(1, $1, $2); }
                        | text_B_2
                           { $$ = node1(1, $1); }
                        ;
text_B_2 : I_819 text_B_2
                           { $$ = node2(2, $1, $2); }
                        | I_JEK_820 text_B_2
                           { $$ = node2(2, $1, $2); }
                        | I_BO_811 text_B_2
                           { $$ = node2(2, $1, $2); }
                        | para_mark_410 text_C_3
                           { $$ = node2(2, $1, $2); }
                        | text_C_3
                           { $$ = node1(2, $1); }
                        ;
text_C_3 : paragraphs_4
                           { $$ = node1(3, $1); }
                        |
                           { $$ = elidable(FAhO_529); }
                        ;
paragraphs_4 : paragraph_10
                           { $$ = node1(4, $1); }
                        | paragraph_10 para_mark_410 paragraphs_4
                           { $$ = node3(4, $1, $2, $3); }
                        ;
paragraph_10 : statement_11
                           { $$ = node1(10, $1); }
                        | fragment_20
                           { $$ = node1(10, $1); }
                        | paragraph_10 I_819 statement_11
                           { $$ = node3(10, $1, $2, $3); }
                        | paragraph_10 I_819 fragment_20
                           { $$ = node3(10, $1, $2, $3); }
                        | paragraph_10 I_819
                           { $$ = node2(10, $1, $2); }
                        ;
statement_11 : statement_A_12
                           { $$ = node1(11, $1); }
                        | prenex_30 statement_11
                           { $$ = node2(11, $1, $2); }
                        ;
statement_A_12 : statement_B_13
                           { $$ = node1(12, $1); }
                        | statement_A_12 I_JEK_820 statement_B_13
                           { $$ = node3(12, $1, $2, $3); }
                        | statement_A_12 I_JEK_820
                           { $$ = node2(12, $1, $2); }
                        ;
statement_B_13 : statement_C_14
                           { $$ = node1(13, $1); }
                        | statement_C_14 I_BO_811 statement_B_13
                           { $$ = node3(13, $1, $2, $3); }
                        | statement_C_14 I_BO_811
                           { $$ = node2(13, $1, $2); }
                        ;
statement_C_14 : sentence_40
                           { $$ = node1(14, $1); }
                        | TUhE_447 text_B_2 TUhU_gap_454
                           { $$ = node3(14, $1, $2, $3); }
                        | tag_491 TUhE_447 text_B_2 TUhU_gap_454
                           { $$ = node4(14, $1, $2, $3, $4); }
                        ;
fragment_20 : EK_802
                           { $$ = node1(20, $1); }
                        | NA_445
                           { $$ = node1(20, $1); }
                        | GIhEK_818
                           { $$ = node1(20, $1); }
                        | quantifier_300
                           { $$ = node1(20, $1); }
                        | terms_80 VAU_gap_456
                           { $$ = node2(20, $1, $2); }
                        | relative_clauses_121
                           { $$ = node1(20, $1); }
                        | links_161
                           { $$ = node1(20, $1); }
                        | linkargs_160
                           { $$ = node1(20, $1); }
                        | prenex_30
                           { $$ = node1(20, $1); }
                        ;
prenex_30 : terms_80 ZOhU_492
                           { $$ = node2(30, $1, $2); }
                        ;
free_modifier_32 : free_modifier_A_33
                           { $$ = node1(32, $1); }
                        | free_modifier_A_33 free_modifier_32
                           { $$ = node2(32, $1, $2); }
                        ;
free_modifier_A_33 : vocative_35
                           { $$ = node1(33, $1); }
                        | parenthetical_36
                           { $$ = node1(33, $1); }
                        | discursive_bridi_34
                           { $$ = node1(33, $1); }
                        | subscript_486
                           { $$ = node1(33, $1); }
                        | utterance_ordinal_801
                           { $$ = node1(33, $1); }
                        ;
discursive_bridi_34 : SEI_440 selbri_130 SEhU_gap_459
                           { $$ = node3(34, $1, $2, $3); }
                        | SOI_498 sumti_90 SEhU_gap_459
                           { $$ = node3(34, $1, $2, $3); }
                        | SOI_498 sumti_90 sumti_90 SEhU_gap_459
                           { $$ = node4(34, $1, $2, $3, $4); }
                        | SEI_440 terms_80 front_gap_451                                  selbri_130 SEhU_gap_459
                           { $$ = node5(34, $1, $2, $3, $4, $5); }
                        | SEI_440 terms_80 selbri_130 SEhU_gap_459
                           { $$ = node4(34, $1, $2, $3, $4); }
                        ;
vocative_35 : DOI_415 selbri_130 DOhU_gap_457
                           { $$ = node3(35, $1, $2, $3); }
                        | DOI_415 selbri_130                                  relative_clauses_121 DOhU_gap_457
                           { $$ = node4(35, $1, $2, $3, $4); }
                        | DOI_415 relative_clauses_121                                  selbri_130 DOhU_gap_457
                           { $$ = node4(35, $1, $2, $3, $4); }
                        | DOI_415 relative_clauses_121                                  selbri_130 relative_clauses_121 DOhU_gap_457
                           { $$ = node5(35, $1, $2, $3, $4, $5); }
                        | DOI_415 cmene_404 DOhU_gap_457
                           { $$ = node3(35, $1, $2, $3); }
                        | DOI_415 cmene_404                                  relative_clauses_121 DOhU_gap_457
                           { $$ = node4(35, $1, $2, $3, $4); }
                        | DOI_415 relative_clauses_121 cmene_404                                 DOhU_gap_457
                           { $$ = node4(35, $1, $2, $3, $4); }
                        | DOI_415 relative_clauses_121 cmene_404                                  relative_clauses_121 DOhU_gap_457
                           { $$ = node5(35, $1, $2, $3, $4, $5); }
                        | DOI_415 sumti_90 DOhU_gap_457
                           { $$ = node3(35, $1, $2, $3); }
                        | DOI_415 DOhU_gap_457
                           { $$ = node2(35, $1, $2); }
                        ;
parenthetical_36 : TO_606 text_0 TOI_gap_468
                           { $$ = node3(36, $1, $2, $3); }
                        ;
sentence_40 : bridi_tail_50
                           { $$ = node1(40, $1); }
                        | terms_80 front_gap_451 bridi_tail_50
                           { $$ = node3(40, $1, $2, $3); }
                        | terms_80 bridi_tail_50
                           { $$ = node2(40, $1, $2); }
                        ;
subsentence_41 : sentence_40
                           { $$ = node1(41, $1); }
                        | prenex_30 subsentence_41
                           { $$ = node2(41, $1, $2); }
                        ;
bridi_tail_50 : bridi_tail_A_51
                           { $$ = node1(50, $1); }
                        | bridi_tail_A_51 GIhEK_KE_814 bridi_tail_50                                  KEhE_gap_466 tail_terms_71
                           { $$ = node5(50, $1, $2, $3, $4, $5); }
                        ;
bridi_tail_A_51 : bridi_tail_B_52
                           { $$ = node1(51, $1); }
                        | bridi_tail_A_51 GIhEK_818 bridi_tail_B_52                           tail_terms_71
                           { $$ = node4(51, $1, $2, $3, $4); }
                        ;
bridi_tail_B_52 : bridi_tail_C_53
                           { $$ = node1(52, $1); }
                        | bridi_tail_C_53 GIhEK_BO_813 bridi_tail_B_52                           tail_terms_71
                           { $$ = node4(52, $1, $2, $3, $4); }
                        ;
bridi_tail_C_53 : gek_sentence_54
                           { $$ = node1(53, $1); }
                        | selbri_130 tail_terms_71
                           { $$ = node2(53, $1, $2); }
                        ;
gek_sentence_54 : GEK_807 subsentence_41                                GIK_816 subsentence_41 tail_terms_71
                           { $$ = node5(54, $1, $2, $3, $4, $5); }
                        | tag_491 KE_493 gek_sentence_54 KEhE_gap_466
                           { $$ = node4(54, $1, $2, $3, $4); }
                        | NA_445 gek_sentence_54
                           { $$ = node2(54, $1, $2); }
                        ;
tail_terms_71 : terms_80 VAU_gap_456
                           { $$ = node2(71, $1, $2); }
                        | VAU_gap_456
                           { $$ = node1(71, $1); }
                        ;
terms_80 : terms_A_81
                           { $$ = node1(80, $1); }
                        | terms_80 terms_A_81
                           { $$ = node2(80, $1, $2); }
                        ;
terms_A_81 : terms_B_82
                           { $$ = node1(81, $1); }
                        | terms_A_81 PEhE_494 JOIK_JEK_422 terms_B_82
                           { $$ = node4(81, $1, $2, $3, $4); }
                        ;
terms_B_82 : term_83
                           { $$ = node1(82, $1); }
                        | terms_B_82 CEhE_495 term_83
                           { $$ = node3(82, $1, $2, $3); }
                        ;
term_83 : sumti_90
                           { $$ = node1(83, $1); }
                        | modifier_84
                           { $$ = node1(83, $1); }
                        | term_set_85
                           { $$ = node1(83, $1); }
                        | NA_KU_810
                           { $$ = node1(83, $1); }
                        ;
modifier_84 : mod_head_490 gap_450
                           { $$ = node2(84, $1, $2); }
                        | mod_head_490 sumti_90
                           { $$ = node2(84, $1, $2); }
                        ;
term_set_85 : NUhI_496 terms_80 NUhU_gap_460
                           { $$ = node3(85, $1, $2, $3); }
                        | NUhI_496 GEK_807 terms_80 NUhU_gap_460                                GIK_816 terms_80 NUhU_gap_460
                           { $$ = node7(85, $1, $2, $3, $4, $5, $6, $7); }
                        ;
sumti_90 : sumti_A_91
                           { $$ = node1(90, $1); }
                        | sumti_A_91 VUhO_497 relative_clauses_121
                           { $$ = node3(90, $1, $2, $3); }
                        ;
sumti_A_91 : sumti_B_92
                           { $$ = node1(91, $1); }
                        | sumti_B_92 EK_KE_804 sumti_90 KEhE_gap_466
                           { $$ = node4(91, $1, $2, $3, $4); }
                        | sumti_B_92 JOIK_KE_823 sumti_90 KEhE_gap_466
                           { $$ = node4(91, $1, $2, $3, $4); }
                        ;
sumti_B_92 : sumti_C_93
                           { $$ = node1(92, $1); }
                        | sumti_B_92 JOIK_EK_421 sumti_C_93
                           { $$ = node3(92, $1, $2, $3); }
                        ;
sumti_C_93 : sumti_D_94
                           { $$ = node1(93, $1); }
                        | sumti_D_94 EK_BO_803 sumti_C_93
                           { $$ = node3(93, $1, $2, $3); }
                        | sumti_D_94 JOIK_BO_822 sumti_C_93
                           { $$ = node3(93, $1, $2, $3); }
                        ;
sumti_D_94 : sumti_E_95
                           { $$ = node1(94, $1); }
                        | GEK_807 sumti_90 GIK_816 sumti_D_94
                           { $$ = node4(94, $1, $2, $3, $4); }
                        ;
sumti_E_95 : sumti_F_96
                           { $$ = node1(95, $1); }
                        | sumti_F_96 relative_clauses_121
                           { $$ = node2(95, $1, $2); }
                        | quantifier_300 selbri_130 gap_450
                           { $$ = node3(95, $1, $2, $3); }
                        | quantifier_300 selbri_130                                gap_450 relative_clauses_121
                           { $$ = node4(95, $1, $2, $3, $4); }
                        ;
sumti_F_96 : sumti_G_97
                           { $$ = node1(96, $1); }
                        | quantifier_300 sumti_G_97
                           { $$ = node2(96, $1, $2); }
                        ;
sumti_G_97 : qualifier_483 sumti_90 LUhU_gap_463
                           { $$ = node3(97, $1, $2, $3); }
                        | qualifier_483 relative_clauses_121                                sumti_90 LUhU_gap_463
                           { $$ = node4(97, $1, $2, $3, $4); }
                        | anaphora_400
                           { $$ = node1(97, $1); }
                        | LA_499 cmene_404
                           { $$ = node2(97, $1, $2); }
                        | LA_499 relative_clauses_121 cmene_404
                           { $$ = node3(97, $1, $2, $3); }
                        | LI_489 MEX_310 LOhO_gap_472
                           { $$ = node3(97, $1, $2, $3); }
                        | description_110
                           { $$ = node1(97, $1); }
                        | quote_arg_432
                           { $$ = node1(97, $1); }
                        ;
description_110 : LA_499 sumti_tail_111 gap_450
                           { $$ = node3(110, $1, $2, $3); }
                        | LE_488 sumti_tail_111 gap_450
                           { $$ = node3(110, $1, $2, $3); }
                        ;
sumti_tail_111 : sumti_tail_A_112
                           { $$ = node1(111, $1); }
                        | relative_clauses_121 sumti_tail_A_112
                           { $$ = node2(111, $1, $2); }
                        | sumti_G_97 sumti_tail_A_112
                           { $$ = node2(111, $1, $2); }
                        | sumti_G_97 relative_clauses_121 sumti_tail_A_112
                           { $$ = node3(111, $1, $2, $3); }
                        ;
sumti_tail_A_112 : selbri_130
                           { $$ = node1(112, $1); }
                        | selbri_130 relative_clauses_121
                           { $$ = node2(112, $1, $2); }
                        | quantifier_300 selbri_130
                           { $$ = node2(112, $1, $2); }
                        | quantifier_300 selbri_130 relative_clauses_121
                           { $$ = node3(112, $1, $2, $3); }
                        | quantifier_300 sumti_90
                           { $$ = node2(112, $1, $2); }
                        ;
relative_clauses_121 : relative_clause_122
                           { $$ = node1(121, $1); }
                        | relative_clauses_121 ZIhE_487 relative_clause_122
                           { $$ = node3(121, $1, $2, $3); }
                        ;
relative_clause_122 : GOI_485 term_83 GEhU_gap_464
                           { $$ = node3(122, $1, $2, $3); }
                        | NOI_484 subsentence_41 KUhO_gap_469
                           { $$ = node3(122, $1, $2, $3); }
                        ;
selbri_130 : tag_491 selbri_A_131
                           { $$ = node2(130, $1, $2); }
                        | selbri_A_131
                           { $$ = node1(130, $1); }
                        ;
selbri_A_131 : selbri_B_132
                           { $$ = node1(131, $1); }
                        | NA_445 selbri_130
                           { $$ = node2(131, $1, $2); }
                        ;
selbri_B_132 : selbri_C_133
                           { $$ = node1(132, $1); }
                        | selbri_C_133 CO_443 selbri_B_132
                           { $$ = node3(132, $1, $2, $3); }
                        ;
selbri_C_133 : selbri_D_134
                           { $$ = node1(133, $1); }
                        | selbri_C_133 selbri_D_134
                           { $$ = node2(133, $1, $2); }
                        ;
selbri_D_134 : selbri_E_135
                           { $$ = node1(134, $1); }
                        | selbri_D_134 JOIK_JEK_422 selbri_E_135
                           { $$ = node3(134, $1, $2, $3); }
                        | selbri_D_134 JOIK_KE_823 selbri_C_133                                KEhE_gap_466
                           { $$ = node4(134, $1, $2, $3, $4); }
                        ;
selbri_E_135 : selbri_F_136
                           { $$ = node1(135, $1); }
                        | selbri_F_136 JEK_BO_821 selbri_E_135
                           { $$ = node3(135, $1, $2, $3); }
                        | selbri_F_136 JOIK_BO_822 selbri_E_135
                           { $$ = node3(135, $1, $2, $3); }
                        ;
selbri_F_136 : tanru_unit_150
                           { $$ = node1(136, $1); }
                        | tanru_unit_150 BO_479 selbri_F_136
                           { $$ = node3(136, $1, $2, $3); }
                        | GUhEK_selbri_137
                           { $$ = node1(136, $1); }
                        | NAhE_482 GUhEK_selbri_137
                           { $$ = node2(136, $1, $2); }
                        ;
GUhEK_selbri_137 : GUhEK_808 selbri_130 GIK_816 selbri_F_136
                           { $$ = node4(137, $1, $2, $3, $4); }
                        ;
tanru_unit_150 : tanru_unit_A_151
                           { $$ = node1(150, $1); }
                        | tanru_unit_150 CEI_444 tanru_unit_A_151
                           { $$ = node3(150, $1, $2, $3); }
                        ;
tanru_unit_A_151 : tanru_unit_B_152
                           { $$ = node1(151, $1); }
                        | tanru_unit_B_152 linkargs_160
                           { $$ = node2(151, $1, $2); }
                        ;
tanru_unit_B_152 : bridi_valsi_407
                           { $$ = node1(152, $1); }
                        | KE_493 selbri_C_133 KEhE_gap_466
                           { $$ = node3(152, $1, $2, $3); }
                        | SE_480 tanru_unit_B_152
                           { $$ = node2(152, $1, $2); }
                        | JAI_478 tag_491 tanru_unit_B_152
                           { $$ = node3(152, $1, $2, $3); }
                        | JAI_478 tanru_unit_B_152
                           { $$ = node2(152, $1, $2); }
                        | ME_477 sumti_90 MEhU_gap_465
                           { $$ = node3(152, $1, $2, $3); }
                        | ME_477 sumti_90 MEhU_gap_465 MOI_476
                           { $$ = node4(152, $1, $2, $3, $4); }
                        | NUhA_475 MEX_operator_374
                           { $$ = node2(152, $1, $2); }
                        | NAhE_482 tanru_unit_B_152
                           { $$ = node2(152, $1, $2); }
                        | NU_425 subsentence_41 KEI_gap_453
                           { $$ = node3(152, $1, $2, $3); }
                        ;
linkargs_160 : BE_446 term_83 BEhO_gap_467
                           { $$ = node3(160, $1, $2, $3); }
                        | BE_446 term_83 links_161 BEhO_gap_467
                           { $$ = node4(160, $1, $2, $3, $4); }
                        ;
links_161 : BEI_442 term_83
                           { $$ = node2(161, $1, $2); }
                        | BEI_442 term_83 links_161
                           { $$ = node3(161, $1, $2, $3); }
                        ;
quantifier_300 : number_812 BOI_gap_461
                           { $$ = node2(300, $1, $2); }
                        | left_bracket_470 MEX_310 right_bracket_gap_471
                           { $$ = node3(300, $1, $2, $3); }
                        ;
MEX_310 : MEX_A_311
                           { $$ = node1(310, $1); }
                        | MEX_310 operator_370 MEX_A_311
                           { $$ = node3(310, $1, $2, $3); }
                        | FUhA_441 rp_expression_330
                           { $$ = node2(310, $1, $2); }
                        ;
MEX_A_311 : MEX_B_312
                           { $$ = node1(311, $1); }
                        | MEX_B_312 BIhE_439 operator_370 MEX_A_311
                           { $$ = node4(311, $1, $2, $3, $4); }
                        ;
MEX_B_312 : operand_381
                           { $$ = node1(312, $1); }
                        | operator_370 MEX_C_313 MEX_gap_452
                           { $$ = node3(312, $1, $2, $3); }
                        | PEhO_438 operator_370 MEX_C_313 MEX_gap_452
                           { $$ = node4(312, $1, $2, $3, $4); }
                        ;
MEX_C_313 : MEX_B_312
                           { $$ = node1(313, $1); }
                        | MEX_C_313 MEX_B_312
                           { $$ = node2(313, $1, $2); }
                        ;
rp_expression_330 : rp_operand_332 rp_operand_332 operator_370
                           { $$ = node3(330, $1, $2, $3); }
                        ;
rp_operand_332 : operand_381
                           { $$ = node1(332, $1); }
                        | rp_expression_330
                           { $$ = node1(332, $1); }
                        ;
operator_370 : operator_A_371
                           { $$ = node1(370, $1); }
                        | operator_370 JOIK_JEK_422 operator_A_371
                           { $$ = node3(370, $1, $2, $3); }
                        | operator_370 JOIK_KE_823 operator_370                                KEhE_gap_466
                           { $$ = node4(370, $1, $2, $3, $4); }
                        ;
operator_A_371 : operator_B_372
                           { $$ = node1(371, $1); }
                        | GUhEK_808 operator_A_371 GIK_816 operator_B_372
                           { $$ = node4(371, $1, $2, $3, $4); }
                        | operator_B_372 JOIK_BO_822 operator_A_371
                           { $$ = node3(371, $1, $2, $3); }
                        | operator_B_372 JEK_BO_821 operator_A_371
                           { $$ = node3(371, $1, $2, $3); }
                        ;
operator_B_372 : MEX_operator_374
                           { $$ = node1(372, $1); }
                        | KE_493 operator_370 KEhE_gap_466
                           { $$ = node3(372, $1, $2, $3); }
                        ;
MEX_operator_374 : VUhU_679
                           { $$ = node1(374, $1); }
                        | VUhU_679 free_modifier_32
                           { $$ = node2(374, $1, $2); }
                        | SE_480 MEX_operator_374
                           { $$ = node2(374, $1, $2); }
                        | NAhE_482 MEX_operator_374
                           { $$ = node2(374, $1, $2); }
                        | MAhO_430 MEX_310 TEhU_gap_473
                           { $$ = node3(374, $1, $2, $3); }
                        | NAhU_429 selbri_130 TEhU_gap_473
                           { $$ = node3(374, $1, $2, $3); }
                        ;
operand_381 : operand_A_382
                           { $$ = node1(381, $1); }
                        | operand_A_382 EK_KE_804 operand_381 KEhE_gap_466
                           { $$ = node4(381, $1, $2, $3, $4); }
                        | operand_A_382 JOIK_KE_823 operand_381 KEhE_gap_466
                           { $$ = node4(381, $1, $2, $3, $4); }
                        ;
operand_A_382 : operand_B_383
                           { $$ = node1(382, $1); }
                        | operand_A_382 JOIK_EK_421 operand_B_383
                           { $$ = node3(382, $1, $2, $3); }
                        ;
operand_B_383 : operand_C_385
                           { $$ = node1(383, $1); }
                        | operand_C_385 EK_BO_803 operand_B_383
                           { $$ = node3(383, $1, $2, $3); }
                        | operand_C_385 JOIK_BO_822 operand_B_383
                           { $$ = node3(383, $1, $2, $3); }
                        ;
operand_C_385 : quantifier_300
                           { $$ = node1(385, $1); }
                        | lerfu_string_817 BOI_gap_461
                           { $$ = node2(385, $1, $2); }
                        | NIhE_428 selbri_130 TEhU_gap_473
                           { $$ = node3(385, $1, $2, $3); }
                        | MOhE_427 sumti_90 TEhU_gap_473
                           { $$ = node3(385, $1, $2, $3); }
                        | JOhI_431 MEX_C_313 TEhU_gap_473
                           { $$ = node3(385, $1, $2, $3); }
                        | GEK_807 operand_381 GIK_816 operand_C_385
                           { $$ = node4(385, $1, $2, $3, $4); }
                        | qualifier_483 operand_381 LUhU_gap_463
                           { $$ = node3(385, $1, $2, $3); }
                        ;
anaphora_400 : KOhA_555
                           { $$ = node1(400, $1); }
                        | KOhA_555 free_modifier_32
                           { $$ = node2(400, $1, $2); }
                        | lerfu_string_817 BOI_gap_461
                           { $$ = node2(400, $1, $2); }
                        ;
cmene_404 : cmene_A_405
                           { $$ = node1(404, $1); }
                        | cmene_A_405 free_modifier_32
                           { $$ = node2(404, $1, $2); }
                        ;
cmene_A_405 : CMENE_518
                           { $$ = node1(405, $1); }
                        | cmene_A_405 CMENE_518
                           { $$ = node2(405, $1, $2); }
                        ;
bridi_valsi_407 : bridi_valsi_A_408
                           { $$ = node1(407, $1); }
                        | bridi_valsi_A_408 free_modifier_32
                           { $$ = node2(407, $1, $2); }
                        ;
bridi_valsi_A_408 : BRIVLA_509
                           { $$ = node1(408, $1); }
                        | PA_MOI_824
                           { $$ = node1(408, $1); }
                        | GOhA_543
                           { $$ = node1(408, $1); }
                        | GOhA_543 RAhO_593
                           { $$ = node2(408, $1, $2); }
                        ;
para_mark_410 : NIhO_584
                           { $$ = node1(410, $1); }
                        | NIhO_584 free_modifier_32
                           { $$ = node2(410, $1, $2); }
                        | NIhO_584 para_mark_410
                           { $$ = node2(410, $1, $2); }
                        ;
indicators_411 : indicators_A_412
                           { $$ = node1(411, $1); }
                        | FUhE_535 indicators_A_412
                           { $$ = node2(411, $1, $2); }
                        ;
indicators_A_412 : indicator_413
                           { $$ = node1(412, $1); }
                        | indicators_A_412 indicator_413
                           { $$ = node2(412, $1, $2); }
                        ;
indicator_413 : UI_612
                           { $$ = node1(413, $1); }
                        | CAI_515
                           { $$ = node1(413, $1); }
                        | UI_612 NAI_581
                           { $$ = node2(413, $1, $2); }
                        | CAI_515 NAI_581
                           { $$ = node2(413, $1, $2); }
                        | Y_619
                           { $$ = node1(413, $1); }
                        | DAhO_524
                           { $$ = node1(413, $1); }
                        | FUhO_536
                           { $$ = node1(413, $1); }
                        ;
DOI_415 : DOI_525
                           { $$ = node1(415, $1); }
                        | COI_416
                           { $$ = node1(415, $1); }
                        | COI_416 DOI_525
                           { $$ = node2(415, $1, $2); }
                        ;
COI_416 : COI_A_417
                           { $$ = node1(416, $1); }
                        | COI_416 COI_A_417
                           { $$ = node2(416, $1, $2); }
                        ;
COI_A_417 : COI_520
                           { $$ = node1(417, $1); }
                        | COI_520 NAI_581
                           { $$ = node2(417, $1, $2); }
                        ;
JOIK_EK_421 : EK_802
                           { $$ = node1(421, $1); }
                        | JOIK_806
                           { $$ = node1(421, $1); }
                        | JOIK_806 free_modifier_32
                           { $$ = node2(421, $1, $2); }
                        ;
JOIK_JEK_422 : JOIK_806
                           { $$ = node1(422, $1); }
                        | JOIK_806 free_modifier_32
                           { $$ = node2(422, $1, $2); }
                        | JEK_805
                           { $$ = node1(422, $1); }
                        | JEK_805 free_modifier_32
                           { $$ = node2(422, $1, $2); }
                        ;
XI_424 : XI_618
                           { $$ = node1(424, $1); }
                        | XI_618 free_modifier_32
                           { $$ = node2(424, $1, $2); }
                        ;
NU_425 : NU_A_426
                           { $$ = node1(425, $1); }
                        | NU_425 JOIK_JEK_422 NU_A_426
                           { $$ = node3(425, $1, $2, $3); }
                        ;
NU_A_426 : NU_586
                           { $$ = node1(426, $1); }
                        | NU_586 NAI_581
                           { $$ = node2(426, $1, $2); }
                        | NU_586 free_modifier_32
                           { $$ = node2(426, $1, $2); }
                        | NU_586 NAI_581 free_modifier_32
                           { $$ = node3(426, $1, $2, $3); }
                        ;
MOhE_427 : MOhE_664
                           { $$ = node1(427, $1); }
                        | MOhE_664 free_modifier_32
                           { $$ = node2(427, $1, $2); }
                        ;
NIhE_428 : NIhE_666
                           { $$ = node1(428, $1); }
                        | NIhE_666 free_modifier_32
                           { $$ = node2(428, $1, $2); }
                        ;
NAhU_429 : NAhU_665
                           { $$ = node1(429, $1); }
                        | NAhU_665 free_modifier_32
                           { $$ = node2(429, $1, $2); }
                        ;
MAhO_430 : MAhO_662
                           { $$ = node1(430, $1); }
                        | MAhO_662 free_modifier_32
                           { $$ = node2(430, $1, $2); }
                        ;
JOhI_431 : JOhI_657
                           { $$ = node1(431, $1); }
                        | JOhI_657 free_modifier_32
                           { $$ = node2(431, $1, $2); }
                        ;
quote_arg_432 : quote_arg_A_433
                           { $$ = node1(432, $1); }
                        | quote_arg_A_433 free_modifier_32
                           { $$ = node2(432, $1, $2); }
                        ;
quote_arg_A_433 : ZOI_quote_434
                           { $$ = node1(433, $1); }
                        | ZO_quote_435
                           { $$ = node1(433, $1); }
                        | LOhU_quote_436
                           { $$ = node1(433, $1); }
                        | LU_571 text_0 LIhU_gap_448
                           { $$ = node3(433, $1, $2, $3); }
                        ;
ZOI_quote_434 : ZOI_627 any_word_698                                             anything_699 any_word_698
                           { $$ = node4(434, $1, $2, $3, $4); }
                        ;
ZO_quote_435 : ZO_626 any_word_698
                           { $$ = node2(435, $1, $2); }
                        ;
LOhU_quote_436 : LOhU_569 any_words_697 LEhU_565
                           { $$ = node3(436, $1, $2, $3); }
                        ;
FIhO_437 : FIhO_532
                           { $$ = node1(437, $1); }
                        | FIhO_532 free_modifier_32
                           { $$ = node2(437, $1, $2); }
                        ;
PEhO_438 : PEhO_673
                           { $$ = node1(438, $1); }
                        | PEhO_673 free_modifier_32
                           { $$ = node2(438, $1, $2); }
                        ;
BIhE_439 : BIhE_650
                           { $$ = node1(439, $1); }
                        | BIhE_650 free_modifier_32
                           { $$ = node2(439, $1, $2); }
                        ;
SEI_440 : SEI_597
                           { $$ = node1(440, $1); }
                        | SEI_597 free_modifier_32
                           { $$ = node2(440, $1, $2); }
                        ;
FUhA_441 : FUhA_655
                           { $$ = node1(441, $1); }
                        | FUhA_655 free_modifier_32
                           { $$ = node2(441, $1, $2); }
                        ;
BEI_442 : BEI_505
                           { $$ = node1(442, $1); }
                        | BEI_505 free_modifier_32
                           { $$ = node2(442, $1, $2); }
                        ;
CO_443 : CO_519
                           { $$ = node1(443, $1); }
                        | CO_519 free_modifier_32
                           { $$ = node2(443, $1, $2); }
                        ;
CEI_444 : CEI_516
                           { $$ = node1(444, $1); }
                        | CEI_516 free_modifier_32
                           { $$ = node2(444, $1, $2); }
                        ;
NA_445 : NA_578
                           { $$ = node1(445, $1); }
                        | NA_578 free_modifier_32
                           { $$ = node2(445, $1, $2); }
                        ;
BE_446 : BE_504
                           { $$ = node1(446, $1); }
                        | BE_504 free_modifier_32
                           { $$ = node2(446, $1, $2); }
                        ;
TUhE_447 : TUhE_610
                           { $$ = node1(447, $1); }
                        | TUhE_610 free_modifier_32
                           { $$ = node2(447, $1, $2); }
                        ;
LIhU_gap_448 : LIhU_567
                           { $$ = node1(448, $1); }
                        | error
                           { $$ = elidable(LIhU_567); yyerrok; }
                        ;
gap_450 : KU_556
                           { $$ = node1(450, $1); }
                        | KU_556 free_modifier_32
                           { $$ = node2(450, $1, $2); }
                        | error
                           { $$ = elidable(KU_556); yyerrok; }
                        ;
front_gap_451 : CU_521
                           { $$ = node1(451, $1); }
                        | CU_521 free_modifier_32
                           { $$ = node2(451, $1, $2); }
                        ;
MEX_gap_452 : KUhE_658
                           { $$ = node1(452, $1); }
                        | KUhE_658 free_modifier_32
                           { $$ = node2(452, $1, $2); }
                        | error
                           { $$ = elidable(KUhE_658); yyerrok; }
                        ;
KEI_gap_453 : KEI_552
                           { $$ = node1(453, $1); }
                        | KEI_552 free_modifier_32
                           { $$ = node2(453, $1, $2); }
                        | error
                           { $$ = elidable(KEI_552); yyerrok; }
                        ;
TUhU_gap_454 : TUhU_611
                           { $$ = node1(454, $1); }
                        | TUhU_611 free_modifier_32
                           { $$ = node2(454, $1, $2); }
                        | error
                           { $$ = elidable(TUhU_611); yyerrok; }
                        ;
VAU_gap_456 : VAU_614
                           { $$ = node1(456, $1); }
                        | VAU_614 free_modifier_32
                           { $$ = node2(456, $1, $2); }
                        | error
                           { $$ = elidable(VAU_614); yyerrok; }
                        ;
DOhU_gap_457 : DOhU_526
                           { $$ = node1(457, $1); }
                        | error
                           { $$ = elidable(DOhU_526); yyerrok; }
                        ;
FEhU_gap_458 : FEhU_531
                           { $$ = node1(458, $1); }
                        | FEhU_531 free_modifier_32
                           { $$ = node2(458, $1, $2); }
                        | error
                           { $$ = elidable(FEhU_531); yyerrok; }
                        ;
SEhU_gap_459 : SEhU_598
                           { $$ = node1(459, $1); }
                        | error
                           { $$ = elidable(SEhU_598); yyerrok; }
                        ;
NUhU_gap_460 : NUhU_588
                           { $$ = node1(460, $1); }
                        | NUhU_588 free_modifier_32
                           { $$ = node2(460, $1, $2); }
                        | error
                           { $$ = elidable(NUhU_588); yyerrok; }
                        ;
BOI_gap_461 : BOI_651
                           { $$ = node1(461, $1); }
                        | BOI_651 free_modifier_32
                           { $$ = node2(461, $1, $2); }
                        | error
                           { $$ = elidable(BOI_651); yyerrok; }
                        ;
sub_gap_462 : BOI_651
                           { $$ = node1(462, $1); }
                        | error
                           { $$ = elidable(BOI_651); yyerrok; }
                        ;
LUhU_gap_463 : LUhU_573
                           { $$ = node1(463, $1); }
                        | LUhU_573 free_modifier_32
                           { $$ = node2(463, $1, $2); }
                        | error
                           { $$ = elidable(LUhU_573); yyerrok; }
                        ;
GEhU_gap_464 : GEhU_538
                           { $$ = node1(464, $1); }
                        | GEhU_538 free_modifier_32
                           { $$ = node2(464, $1, $2); }
                        | error
                           { $$ = elidable(GEhU_538); yyerrok; }
                        ;
MEhU_gap_465 : MEhU_575
                           { $$ = node1(465, $1); }
                        | MEhU_575 free_modifier_32
                           { $$ = node2(465, $1, $2); }
                        | error
                           { $$ = elidable(MEhU_575); yyerrok; }
                        ;
KEhE_gap_466 : KEhE_550
                           { $$ = node1(466, $1); }
                        | KEhE_550 free_modifier_32
                           { $$ = node2(466, $1, $2); }
                        | error
                           { $$ = elidable(KEhE_550); yyerrok; }
                        ;
BEhO_gap_467 : BEhO_506
                           { $$ = node1(467, $1); }
                        | BEhO_506 free_modifier_32
                           { $$ = node2(467, $1, $2); }
                        | error
                           { $$ = elidable(BEhO_506); yyerrok; }
                        ;
TOI_gap_468 : TOI_607
                           { $$ = node1(468, $1); }
                        | error
                           { $$ = elidable(TOI_607); yyerrok; }
                        ;
KUhO_gap_469 : KUhO_557
                           { $$ = node1(469, $1); }
                        | KUhO_557 free_modifier_32
                           { $$ = node2(469, $1, $2); }
                        | error
                           { $$ = elidable(KUhO_557); yyerrok; }
                        ;
left_bracket_470 : VEI_677
                           { $$ = node1(470, $1); }
                        | VEI_677 free_modifier_32
                           { $$ = node2(470, $1, $2); }
                        ;
right_bracket_gap_471 : VEhO_678
                           { $$ = node1(471, $1); }
                        | VEhO_678 free_modifier_32
                           { $$ = node2(471, $1, $2); }
                        | error
                           { $$ = elidable(VEhO_678); yyerrok; }
                        ;
LOhO_gap_472 : LOhO_568
                           { $$ = node1(472, $1); }
                        | LOhO_568 free_modifier_32
                           { $$ = node2(472, $1, $2); }
                        | error
                           { $$ = elidable(LOhO_568); yyerrok; }
                        ;
TEhU_gap_473 : TEhU_675
                           { $$ = node1(473, $1); }
                        | TEhU_675 free_modifier_32
                           { $$ = node2(473, $1, $2); }
                        | error
                           { $$ = elidable(TEhU_675); yyerrok; }
                        ;
right_br_no_free_474 : VEhO_678
                           { $$ = node1(474, $1); }
                        | error
                           { $$ = elidable(VEhO_678); yyerrok; }
                        ;
NUhA_475 : NUhA_667
                           { $$ = node1(475, $1); }
                        | NUhA_667 free_modifier_32
                           { $$ = node2(475, $1, $2); }
                        ;
MOI_476 : MOI_663
                           { $$ = node1(476, $1); }
                        | MOI_663 free_modifier_32
                           { $$ = node2(476, $1, $2); }
                        ;
ME_477 : ME_574
                           { $$ = node1(477, $1); }
                        | ME_574 free_modifier_32
                           { $$ = node2(477, $1, $2); }
                        ;
JAI_478 : JAI_547
                           { $$ = node1(478, $1); }
                        | JAI_547 free_modifier_32
                           { $$ = node2(478, $1, $2); }
                        ;
BO_479 : BO_508
                           { $$ = node1(479, $1); }
                        | BO_508 free_modifier_32
                           { $$ = node2(479, $1, $2); }
                        ;
SE_480 : SE_596
                           { $$ = node1(480, $1); }
                        | SE_596 free_modifier_32
                           { $$ = node2(480, $1, $2); }
                        ;
FA_481 : FA_527
                           { $$ = node1(481, $1); }
                        | FA_527 free_modifier_32
                           { $$ = node2(481, $1, $2); }
                        ;
NAhE_482 : NAhE_583
                           { $$ = node1(482, $1); }
                        | NAhE_583 free_modifier_32
                           { $$ = node2(482, $1, $2); }
                        ;
qualifier_483 : LAhE_561
                           { $$ = node1(483, $1); }
                        | LAhE_561 free_modifier_32
                           { $$ = node2(483, $1, $2); }
                        | NAhE_BO_809
                           { $$ = node1(483, $1); }
                        ;
NOI_484 : NOI_585
                           { $$ = node1(484, $1); }
                        | NOI_585 free_modifier_32
                           { $$ = node2(484, $1, $2); }
                        ;
GOI_485 : GOI_542
                           { $$ = node1(485, $1); }
                        | GOI_542 free_modifier_32
                           { $$ = node2(485, $1, $2); }
                        ;
subscript_486 : XI_424 number_812 sub_gap_462
                           { $$ = node3(486, $1, $2, $3); }
                        | XI_424 left_bracket_470 MEX_310                                right_br_no_free_474
                           { $$ = node4(486, $1, $2, $3, $4); }
                        | XI_424 lerfu_string_817 sub_gap_462
                           { $$ = node3(486, $1, $2, $3); }
                        ;
ZIhE_487 : ZIhE_625
                           { $$ = node1(487, $1); }
                        | ZIhE_625 free_modifier_32
                           { $$ = node2(487, $1, $2); }
                        ;
LE_488 : LE_562
                           { $$ = node1(488, $1); }
                        | LE_562 free_modifier_32
                           { $$ = node2(488, $1, $2); }
                        ;
LI_489 : LI_566
                           { $$ = node1(489, $1); }
                        | LI_566 free_modifier_32
                           { $$ = node2(489, $1, $2); }
                        ;
mod_head_490 : tag_491
                           { $$ = node1(490, $1); }
                        | FA_481
                           { $$ = node1(490, $1); }
                        ;
tag_491 : tense_modal_815
                           { $$ = node1(491, $1); }
                        | tag_491 JOIK_JEK_422 tense_modal_815
                           { $$ = node3(491, $1, $2, $3); }
                        ;
ZOhU_492 : ZOhU_628
                           { $$ = node1(492, $1); }
                        | ZOhU_628 free_modifier_32
                           { $$ = node2(492, $1, $2); }
                        ;
KE_493 : KE_551
                           { $$ = node1(493, $1); }
                        | KE_551 free_modifier_32
                           { $$ = node2(493, $1, $2); }
                        ;
PEhE_494 : PEhE_591
                           { $$ = node1(494, $1); }
                        | PEhE_591 free_modifier_32
                           { $$ = node2(494, $1, $2); }
                        ;
CEhE_495 : CEhE_517
                           { $$ = node1(495, $1); }
                        | CEhE_517 free_modifier_32
                           { $$ = node2(495, $1, $2); }
                        ;
NUhI_496 : NUhI_587
                           { $$ = node1(496, $1); }
                        | NUhI_587 free_modifier_32
                           { $$ = node2(496, $1, $2); }
                        ;
VUhO_497 : VUhO_617
                           { $$ = node1(497, $1); }
                        | VUhO_617 free_modifier_32
                           { $$ = node2(497, $1, $2); }
                        ;
SOI_498 : SOI_602
                           { $$ = node1(498, $1); }
                        | SOI_602 free_modifier_32
                           { $$ = node2(498, $1, $2); }
                        ;
LA_499 : LA_558
                           { $$ = node1(499, $1); }
                        | LA_558 free_modifier_32
                           { $$ = node2(499, $1, $2); }
                        ;
utterance_ordinal_801 : lexer_A_905
                           { $$ = node1(801, $1); }
                        ;
EK_802 : lexer_B_910
                           { $$ = node1(802, $1); }
                        | lexer_B_910 free_modifier_32
                           { $$ = node2(802, $1, $2); }
                        ;
EK_BO_803 : lexer_C_915
                           { $$ = node1(803, $1); }
                        | lexer_C_915 free_modifier_32
                           { $$ = node2(803, $1, $2); }
                        ;
EK_KE_804 : lexer_D_916
                           { $$ = node1(804, $1); }
                        | lexer_D_916 free_modifier_32
                           { $$ = node2(804, $1, $2); }
                        ;
JEK_805 : lexer_E_925
                           { $$ = node1(805, $1); }
                        ;
JOIK_806 : lexer_F_930
                           { $$ = node1(806, $1); }
                        ;
GEK_807 : lexer_G_935
                           { $$ = node1(807, $1); }
                        | lexer_G_935 free_modifier_32
                           { $$ = node2(807, $1, $2); }
                        ;
GUhEK_808 : lexer_H_940
                           { $$ = node1(808, $1); }
                        | lexer_H_940 free_modifier_32
                           { $$ = node2(808, $1, $2); }
                        ;
NAhE_BO_809 : lexer_I_945
                           { $$ = node1(809, $1); }
                        | lexer_I_945 free_modifier_32
                           { $$ = node2(809, $1, $2); }
                        ;
NA_KU_810 : lexer_J_950
                           { $$ = node1(810, $1); }
                        | lexer_J_950 free_modifier_32
                           { $$ = node2(810, $1, $2); }
                        ;
I_BO_811 : lexer_K_955
                           { $$ = node1(811, $1); }
                        | lexer_K_955 free_modifier_32
                           { $$ = node2(811, $1, $2); }
                        ;
number_812 : lexer_L_960
                           { $$ = node1(812, $1); }
                        ;
GIhEK_BO_813 : lexer_M_965
                           { $$ = node1(813, $1); }
                        | lexer_M_965 free_modifier_32
                           { $$ = node2(813, $1, $2); }
                        ;
GIhEK_KE_814 : lexer_N_966
                           { $$ = node1(814, $1); }
                        | lexer_N_966 free_modifier_32
                           { $$ = node2(814, $1, $2); }
                        ;
tense_modal_815 : lexer_O_970
                           { $$ = node1(815, $1); }
                        | lexer_O_970 free_modifier_32
                           { $$ = node2(815, $1, $2); }
                        | FIhO_437 selbri_130 FEhU_gap_458
                           { $$ = node3(815, $1, $2, $3); }
                        ;
GIK_816 : lexer_P_980
                           { $$ = node1(816, $1); }
                        | lexer_P_980 free_modifier_32
                           { $$ = node2(816, $1, $2); }
                        ;
lerfu_string_817 : lexer_Q_985
                           { $$ = node1(817, $1); }
                        ;
GIhEK_818 : lexer_R_990
                           { $$ = node1(818, $1); }
                        | lexer_R_990 free_modifier_32
                           { $$ = node2(818, $1, $2); }
                        ;
I_819 : lexer_S_995
                           { $$ = node1(819, $1); }
                        | lexer_S_995 free_modifier_32
                           { $$ = node2(819, $1, $2); }
                        ;
I_JEK_820 : lexer_T_1000
                           { $$ = node1(820, $1); }
                        | lexer_T_1000 free_modifier_32
                           { $$ = node2(820, $1, $2); }
                        ;
JEK_BO_821 : lexer_U_1005
                           { $$ = node1(821, $1); }
                        | lexer_U_1005 free_modifier_32
                           { $$ = node2(821, $1, $2); }
                        ;
JOIK_BO_822 : lexer_V_1010
                           { $$ = node1(822, $1); }
                        | lexer_V_1010 free_modifier_32
                           { $$ = node2(822, $1, $2); }
                        ;
JOIK_KE_823 : lexer_W_1015
                           { $$ = node1(823, $1); }
                        | lexer_W_1015 free_modifier_32
                           { $$ = node2(823, $1, $2); }
                        ;
PA_MOI_824 : lexer_Y_1025
                           { $$ = node1(824, $1); }
                        ;
