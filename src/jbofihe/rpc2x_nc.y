



%token GARBAGE

%token A
%token BAhE
%token BAI
%token BE
%token BEhO
%token BEI
%token BIhE
%token BIhI
%token BO
%token BOI
%token BRIVLA
%token BU
%token BY
%token CAhA
%token CAI
%token CEhE
%token CEI
%token CMENE
%token CO
%token COI
%token CU
%token CUhE
%token DAhO
%token DOhU
%token DOI
%token FA
%token FAhA
%token FAhO
%token FEhE
%token FEhU
%token FIhO
%token FOI
%token FUhA
%token FUhE
%token FUhO
%token GA
%token GAhO
%token GEhU
%token GI
%token GIhA
%token GOhA
%token GOI
%token GUhA
%token I
%token JA
%token JAI
%token JOhI
%token JOI
%token KE
%token KEhE
%token KEI
%token KI
%token KOhA
%token KUhE
%token KUhO
%token KU
%token LA
%token LAhE
%token LAU
%token LE
%token LEhU
%token LI
%token LIhU
%token LOhO
%token LOhU
%token LU
%token LUhU
%token MAhO
%token MAI
%token ME
%token MEhU
%token MOhE
%token MOhI
%token MOI
%token NA
%token NAhE
%token NAhU
%token NAI
%token NIhE
%token NIhO
%token NOI
%token NU
%token NUhA
%token NUhI
%token NUhU
%token PA
%token PEhA
%token PEhE
%token PEhO
%token POhA
%token PU
%token RAhO
%token ROI
%token SA
%token SE
%token SEhU
%token SEI
%token SI
%token SOI
%token SU
%token TAhE
%token TEhU
%token TEI
%token TO
%token TOI
%token TUhE
%token TUhU
%token UI
%token VA
%token VAU
%token VEhA
%token VEhO
%token VEI
%token VIhA
%token VUhO
%token VUhU
%token XI
%token Y
%token ZAhO
%token ZEhA
%token ZEI
%token ZI
%token ZIhE
%token ZO
%token ZOhU
%token ZOI


%token PRIVATE_START_EK
%token PRIVATE_START_GIHEK
%token PRIVATE_START_GUHEK
%token PRIVATE_START_JEK
%token PRIVATE_END_JEK
%token PRIVATE_START_JOIK
%token PRIVATE_END_JOIK
%token PRIVATE_START_GEK

%token PRIVATE_START_BAI

%token PRIVATE_EK_KE
%token PRIVATE_EK_BO

%token PRIVATE_JEK_KE
%token PRIVATE_JEK_BO

%token PRIVATE_JOIK_KE
%token PRIVATE_JOIK_BO

%token PRIVATE_I_JEKJOIK
%token PRIVATE_I_BO

%token PRIVATE_GIHEK_KE
%token PRIVATE_GIHEK_BO

%token PRIVATE_NAhE_BO
%token PRIVATE_NAhE_time
%token PRIVATE_NAhE_space
%token PRIVATE_NAhE_CAhA

%token PRIVATE_NA_KU

%token PRIVATE_NUMBER_MAI
%token PRIVATE_NUMBER_MOI
%token PRIVATE_NUMBER_ROI

%token PRIVATE_START_TENSE
%token PRIVATE_END_TENSE

%token PRIVATE_EOF_MARK
%token IMPOSSIBLE_TOKEN

%{
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

%}

%%



all : chunks
    ;




chunks : text PRIVATE_EOF_MARK
       | text error
{ $$ = $1; yyclearin; }
       | chunks text PRIVATE_EOF_MARK
       | chunks text error
{ fprintf(stderr, "Syntax error following text ending at line %d column %d\n",
          @2.last_line, @2.last_column);
  yyclearin;
  $$ = new_node_2(CHUNKS, $1, $2); }
       ;


text : NAI_seq CMENE_seq free_seq joik_opt_ke free_seq text_1
     | NAI_seq CMENE_seq free_seq jek_opt_ke  free_seq text_1
     | NAI_seq CMENE_seq free_seq joik_opt_ke          text_1
     | NAI_seq CMENE_seq free_seq jek_opt_ke           text_1
     | NAI_seq CMENE_seq free_seq                      text_1

     | NAI_seq CMENE_seq          joik_opt_ke free_seq text_1
     | NAI_seq CMENE_seq          jek_opt_ke  free_seq text_1
     | NAI_seq CMENE_seq          joik_opt_ke          text_1
     | NAI_seq CMENE_seq          jek_opt_ke           text_1
     | NAI_seq CMENE_seq                               text_1

     | NAI_seq indicators free_seq joik_opt_ke free_seq text_1
     | NAI_seq indicators free_seq jek_opt_ke  free_seq text_1
     | NAI_seq indicators free_seq joik_opt_ke          text_1
     | NAI_seq indicators free_seq jek_opt_ke           text_1
     | NAI_seq indicators free_seq                      text_1

     | NAI_seq indicators          joik_opt_ke free_seq text_1
     | NAI_seq indicators          jek_opt_ke  free_seq text_1
     | NAI_seq indicators          joik_opt_ke          text_1
     | NAI_seq indicators          jek_opt_ke           text_1
     | NAI_seq indicators                               text_1

     | NAI_seq            free_seq joik_opt_ke free_seq text_1
     | NAI_seq            free_seq jek_opt_ke  free_seq text_1
     | NAI_seq            free_seq joik_opt_ke          text_1
     | NAI_seq            free_seq jek_opt_ke           text_1
     | NAI_seq            free_seq                      text_1

     | NAI_seq                     joik_opt_ke free_seq text_1
     | NAI_seq                     jek_opt_ke  free_seq text_1
     | NAI_seq                     joik_opt_ke          text_1
     | NAI_seq                     jek_opt_ke           text_1
     | NAI_seq                                          text_1

     |         CMENE_seq free_seq joik_opt_ke free_seq text_1
     |         CMENE_seq free_seq jek_opt_ke  free_seq text_1
     |         CMENE_seq free_seq joik_opt_ke          text_1
     |         CMENE_seq free_seq jek_opt_ke           text_1
     |         CMENE_seq free_seq                      text_1

     |         CMENE_seq          joik_opt_ke free_seq text_1
     |         CMENE_seq          jek_opt_ke  free_seq text_1
     |         CMENE_seq          joik_opt_ke          text_1
     |         CMENE_seq          jek_opt_ke           text_1
     |         CMENE_seq                               text_1

     |         indicators free_seq joik_opt_ke free_seq text_1
     |         indicators free_seq jek_opt_ke  free_seq text_1
     |         indicators free_seq joik_opt_ke          text_1
     |         indicators free_seq jek_opt_ke           text_1
     |         indicators free_seq                      text_1

     |         indicators          joik_opt_ke free_seq text_1
     |         indicators          jek_opt_ke  free_seq text_1
     |         indicators          joik_opt_ke          text_1
     |         indicators          jek_opt_ke           text_1
     |         indicators                               text_1

     |                    free_seq joik_opt_ke free_seq text_1
     |                    free_seq jek_opt_ke  free_seq text_1
     |                    free_seq joik_opt_ke          text_1
     |                    free_seq jek_opt_ke           text_1
     |                    free_seq                      text_1

     |                             joik_opt_ke free_seq text_1
     |                             jek_opt_ke  free_seq text_1
     |                             joik_opt_ke          text_1
     |                             jek_opt_ke           text_1
     |                                                  text_1

     

     
     ;

text_no_text_1 : NAI_seq CMENE_seq free_seq joik_opt_ke free_seq
     | NAI_seq CMENE_seq free_seq jek_opt_ke  free_seq
     | NAI_seq CMENE_seq free_seq joik_opt_ke
     | NAI_seq CMENE_seq free_seq jek_opt_ke
     | NAI_seq CMENE_seq free_seq

     | NAI_seq CMENE_seq          joik_opt_ke free_seq
     | NAI_seq CMENE_seq          jek_opt_ke  free_seq
     | NAI_seq CMENE_seq          joik_opt_ke
     | NAI_seq CMENE_seq          jek_opt_ke
     | NAI_seq CMENE_seq

     | NAI_seq indicators free_seq joik_opt_ke free_seq
     | NAI_seq indicators free_seq jek_opt_ke free_seq
     | NAI_seq indicators free_seq joik_opt_ke
     | NAI_seq indicators free_seq jek_opt_ke
     | NAI_seq indicators free_seq

     | NAI_seq indicators          joik_opt_ke free_seq
     | NAI_seq indicators          jek_opt_ke  free_seq
     | NAI_seq indicators          joik_opt_ke
     | NAI_seq indicators          jek_opt_ke
     | NAI_seq indicators

     | NAI_seq            free_seq joik_opt_ke free_seq
     | NAI_seq            free_seq jek_opt_ke  free_seq
     | NAI_seq            free_seq joik_opt_ke
     | NAI_seq            free_seq jek_opt_ke
     | NAI_seq            free_seq

     | NAI_seq                     joik_opt_ke free_seq
     | NAI_seq                     jek_opt_ke  free_seq
     | NAI_seq                     joik_opt_ke
     | NAI_seq                     jek_opt_ke
     | NAI_seq

     |         CMENE_seq free_seq joik_opt_ke free_seq
     |         CMENE_seq free_seq jek_opt_ke free_seq
     |         CMENE_seq free_seq joik_opt_ke
     |         CMENE_seq free_seq jek_opt_ke
     |         CMENE_seq free_seq

     |         CMENE_seq          joik_opt_ke free_seq
     |         CMENE_seq          jek_opt_ke  free_seq
     |         CMENE_seq          joik_opt_ke
     |         CMENE_seq          jek_opt_ke
     |         CMENE_seq

     |         indicators free_seq joik_opt_ke free_seq
     |         indicators free_seq jek_opt_ke  free_seq
     |         indicators free_seq joik_opt_ke
     |         indicators free_seq jek_opt_ke
     |         indicators free_seq

     |         indicators          joik_opt_ke free_seq
     |         indicators          jek_opt_ke  free_seq
     |         indicators          joik_opt_ke
     |         indicators          jek_opt_ke
     |         indicators

     |                    free_seq joik_opt_ke free_seq
     |                    free_seq jek_opt_ke  free_seq
     |                    free_seq joik_opt_ke
     |                    free_seq jek_opt_ke
     |                    free_seq

     |                             joik_opt_ke free_seq
     |                             jek_opt_ke  free_seq
     |                             joik_opt_ke
     |                             jek_opt_ke

     ;




text_1 : text_1A paragraphs
       | text_1A
       |         paragraphs
       | 
       ;

text_1A : text_1B
        | NIhO_seq_free_seq
        ;

text_1B : text_1C
        | text_1B text_1C
        ;



text_1C :         PRIVATE_I_BO I joik stag BO free_seq
        |         PRIVATE_I_BO I jek  stag BO free_seq
        |         PRIVATE_I_BO I      stag BO free_seq
        |         PRIVATE_I_BO I joik stag BO
        |         PRIVATE_I_BO I jek  stag BO
        |         PRIVATE_I_BO I      stag BO
        |         PRIVATE_I_BO I joik      BO free_seq
        |         PRIVATE_I_BO I jek       BO free_seq
        |         PRIVATE_I_BO I           BO free_seq
        |         PRIVATE_I_BO I joik      BO
        |         PRIVATE_I_BO I jek       BO
        |         PRIVATE_I_BO I           BO
        |         PRIVATE_I_JEKJOIK I joik_opt_ke         free_seq
        |         PRIVATE_I_JEKJOIK I jek_opt_ke          free_seq
        |         I              free_seq
        |         PRIVATE_I_JEKJOIK I joik_opt_ke
        |         PRIVATE_I_JEKJOIK I jek_opt_ke
        |         I    
        ;








paragraphs :                              paragraph
           | paragraphs NIhO_seq_free_seq paragraph
           ;

paragraph : statement
          | fragment

          | paragraph i_opt_free_seq statement
          | paragraph i_opt_free_seq fragment

          | paragraph i_opt_free_seq

          ;

i_opt_free_seq : I
               | I free_seq
               ;



statement : inner_statement
          ;

inner_statement : statement_1
                | prenex inner_statement
                ;



statement_1 : statement_2
            | statement_1 i_joik_jek statement_2
            | statement_1 i_joik_jek
            ;

i_joik_jek : PRIVATE_I_JEKJOIK I joik_opt_ke free_seq
           | PRIVATE_I_JEKJOIK I joik_opt_ke
           | PRIVATE_I_JEKJOIK I jek_opt_ke free_seq
           | PRIVATE_I_JEKJOIK I jek_opt_ke
           ;




statement_2 : statement_3
            | statement_3 i_jj_stag_bo
            | statement_3 i_jj_stag_bo statement_2
            ;


i_jj_stag_bo : PRIVATE_I_BO I joik stag BO free_seq
             | PRIVATE_I_BO I joik stag BO
             | PRIVATE_I_BO I joik      BO free_seq
             | PRIVATE_I_BO I joik      BO
             | PRIVATE_I_BO I jek  stag BO free_seq
             | PRIVATE_I_BO I jek  stag BO
             | PRIVATE_I_BO I jek       BO free_seq
             | PRIVATE_I_BO I jek       BO
             | PRIVATE_I_BO I      stag BO free_seq
             | PRIVATE_I_BO I      stag BO
             | PRIVATE_I_BO I           BO free_seq
             | PRIVATE_I_BO I           BO
             ;



statement_3 : sentence

            | tag TUhE free_seq text_1 TUhU free_seq
            | tag TUhE free_seq text_1 TUhU
            | tag TUhE free_seq text_1 /* ET TUhU */

            | tag TUhE          text_1 TUhU free_seq
            | tag TUhE          text_1 TUhU
            | tag TUhE          text_1 /* ET TUhU */

            |     TUhE free_seq text_1 TUhU free_seq
            |     TUhE free_seq text_1 TUhU
            |     TUhE free_seq text_1 /* ET TUhU */

            |     TUhE          text_1 TUhU free_seq
            |     TUhE          text_1 TUhU
            |     TUhE          text_1 /* ET TUhU */
            ;



fragment : ek free_seq
         | ek
         | gihek free_seq
         | gihek
         | quantifier
         | NA free_seq
         | NA
         | terms VAU free_seq
         | terms VAU
         | terms /* ET VAU */
         | prenex
         | relative_clauses
         | links
         | linkargs
         ;



prenex : terms ZOhU free_seq
       | terms ZOhU
       ;






sentence : terms CU free_seq bridi_tail
         | terms CU          bridi_tail
         | no_cu_sentence
         | observative_sentence




         | terms PRIVATE_START_GIHEK /* error */
{
 fprintf(stderr, "Missing selbri before GIhA at line %d column %d\n",
         @2.first_line, @2.first_column);
 error_advance(0);
 $$ = $1;
 YYERROR;
}

         | terms PRIVATE_GIHEK_KE /* error */
{
 fprintf(stderr, "Missing selbri before GIhA at line %d column %d\n",
         @2.first_line, @2.first_column);
 error_advance(0);
 $$ = $1;
 YYERROR;
}

         | terms PRIVATE_GIHEK_BO /* error */
{
 fprintf(stderr, "Missing selbri before GIhA at line %d column %d\n",
         @2.first_line, @2.first_column);
 error_advance(0);
 $$ = $1;
 YYERROR;
}

         ;



no_cu_sentence : IMPOSSIBLE_TOKEN
               | terms /* ET CU */ bridi_tail
               ;


observative_sentence : bridi_tail
                     ;




subsentence : sentence
            | prenex subsentence
            ;




bridi_tail : bridi_tail_1
           | bridi_tail_1 gihek_stag_ke KE free_seq bridi_tail KEhE free_seq tail_terms
           | bridi_tail_1 gihek_stag_ke KE free_seq bridi_tail KEhE free_seq /* ET VAU */
           | bridi_tail_1 gihek_stag_ke KE free_seq bridi_tail KEhE          tail_terms
           | bridi_tail_1 gihek_stag_ke KE free_seq bridi_tail KEhE          /* ET VAU */
           | bridi_tail_1 gihek_stag_ke KE free_seq bridi_tail /* ET KEhE */ tail_terms
           | bridi_tail_1 gihek_stag_ke KE free_seq bridi_tail /* ET KEhE */ /* ET VAU */

           | bridi_tail_1 gihek_stag_ke KE          bridi_tail KEhE free_seq tail_terms
           | bridi_tail_1 gihek_stag_ke KE          bridi_tail KEhE free_seq /* ET VAU */
           | bridi_tail_1 gihek_stag_ke KE          bridi_tail KEhE          tail_terms
           | bridi_tail_1 gihek_stag_ke KE          bridi_tail KEhE          /* ET VAU */
           | bridi_tail_1 gihek_stag_ke KE          bridi_tail /* ET KEhE */ tail_terms
           | bridi_tail_1 gihek_stag_ke KE          bridi_tail               /* ET VAU */
           ;

gihek_stag_ke : PRIVATE_GIHEK_KE gihek stag
              | PRIVATE_GIHEK_KE gihek
              ;



bridi_tail_1 : bridi_tail_2
             | bridi_tail_1 gihek free_seq bridi_tail_2 tail_terms
             | bridi_tail_1 gihek free_seq bridi_tail_2 /* ET VAU */
             | bridi_tail_1 gihek          bridi_tail_2 tail_terms
             | bridi_tail_1 gihek          bridi_tail_2 /* ET VAU */
             ;



bridi_tail_2 : bridi_tail_3
             | bridi_tail_2 gihek_stag_bo bridi_tail_2 tail_terms
             | bridi_tail_2 gihek_stag_bo bridi_tail_2 /* ET VAU */
             ;

gihek_stag_bo : PRIVATE_GIHEK_BO gihek stag BO free_seq
              | PRIVATE_GIHEK_BO gihek stag BO
              | PRIVATE_GIHEK_BO gihek      BO free_seq
              | PRIVATE_GIHEK_BO gihek      BO
              ;




bridi_tail_3 : main_selbri tail_terms
             | main_selbri /* ET VAU */
             | gek_sentence
             ;

main_selbri : selbri
            ;



tail_terms : terms VAU free_seq
           | terms VAU
           | terms /* ET VAU */
           |       VAU free_seq
           |       VAU
           ;



gek_sentence : gek subsentence gik subsentence tail_terms
             | gek subsentence gik subsentence /* ET VAU */

             | tag KE free_seq gek_sentence KEhE free_seq
             | tag KE free_seq gek_sentence KEhE
             | tag KE free_seq gek_sentence /* ET KEhE */

             | tag KE          gek_sentence KEhE free_seq
             | tag KE          gek_sentence KEhE
             | tag KE          gek_sentence /* ET KEhE */

             |     KE free_seq gek_sentence KEhE free_seq
             |     KE free_seq gek_sentence KEhE
             |     KE free_seq gek_sentence /* ET KEhE */

             |     KE          gek_sentence KEhE free_seq
             |     KE          gek_sentence KEhE
             |     KE          gek_sentence /* ET KEhE */

             | NA free_seq gek_sentence
             | NA          gek_sentence
             ;






terms : terms_1
      | terms terms_1
      ;



terms_1 : terms_2
        | terms_1 PEhE free_seq joik free_seq terms_2
        | terms_1 PEhE free_seq joik          terms_2
        | terms_1 PEhE free_seq jek  free_seq terms_2
        | terms_1 PEhE free_seq jek           terms_2
        | terms_1 PEhE          joik free_seq terms_2
        | terms_1 PEhE          joik          terms_2
        | terms_1 PEhE          jek  free_seq terms_2
        | terms_1 PEhE          jek           terms_2
        ;




terms_2 : term
        | terms_2 CEhE free_seq term
        | terms_2 CEhE          term
        ;






term : term_plain_sumti
     | term_tagged_sumti 
     | term_placed_sumti
     | term_floating_tense
     | termset
     | tagged_termset
     | term_floating_negate
     | term_other
     ;

term_plain_sumti : sumti
                 ;

term_placed_sumti : FA free_seq sumti
                  | FA          sumti
                  ;

term_tagged_sumti : tag sumti
                  ;



tagged_termset : tag termset
               ;

term_floating_tense : tag KU free_seq
                    | tag KU
                    | tag /* ET KU */
                    ;

term_floating_negate : PRIVATE_NA_KU NA KU free_seq
                     | PRIVATE_NA_KU NA KU
                     ;


term_other : FA free_seq KU free_seq
           | FA free_seq KU
           | FA free_seq /* ET KU */
           | FA          KU free_seq
           | FA          KU 
           | FA /* ET KU */
           ;





termset : termset_start gek termset_body gik termset_body
        | termset_start termset_body
        ;

termset_start : NUhI free_seq
              | NUhI
              ;

termset_body : terms NUhU free_seq
             | terms NUhU
             | terms /* ET NUhU */
             ;



sumti : sumti_1
      | sumti_1 VUhO free_seq relative_clauses
      | sumti_1 VUhO          relative_clauses
      ;




sumti_1 : sumti_2
        | sumti_2 joik_ek_ke ke_sumti
        ;

joik_ek_ke : PRIVATE_JOIK_KE joik stag
           | PRIVATE_JOIK_KE joik
           | PRIVATE_EK_KE   ek   stag
           | PRIVATE_EK_KE   ek
           ;

ke_sumti : KE free_seq sumti KEhE free_seq
         | KE free_seq sumti KEhE
         | KE free_seq sumti /* ET KEhE */
         | KE          sumti KEhE free_seq
         | KE          sumti KEhE
         | KE          sumti /* ET KEhE */
         ;



sumti_2 : sumti_3
        | sumti_2 joik free_seq sumti_3
        | sumti_2 joik          sumti_3
        | sumti_2 ek   free_seq sumti_3
        | sumti_2 ek            sumti_3
        ;





sumti_3 : sumti_4
        | sumti_4 joik_ek_stag_bo sumti_3
        ;

joik_ek_stag_bo : PRIVATE_JOIK_BO joik stag BO free_seq
                | PRIVATE_JOIK_BO joik stag BO
                | PRIVATE_JOIK_BO joik      BO free_seq
                | PRIVATE_JOIK_BO joik      BO
                | PRIVATE_EK_BO   ek   stag BO free_seq
                | PRIVATE_EK_BO   ek   stag BO
                | PRIVATE_EK_BO   ek        BO free_seq
                | PRIVATE_EK_BO   ek        BO
                ;



sumti_4 : sumti_5
        | gek sumti gik sumti_4
        ;



sumti_5 : sumti_5a relative_clauses
        | sumti_5a
        | sumti_5b relative_clauses
        | sumti_5b
        ;

sumti_5a : quantifier sumti_6
         |            sumti_6
         ;

sumti_5b : quantifier selbri KU free_seq
         | quantifier selbri KU
         | quantifier selbri /* ET KU */
         ;



sumti_6 : lahe_sumti_6
        | nahe_bo_sumti_6

        | KOhA    free_seq
        | KOhA

        | lerfu_string BOI free_seq
        | lerfu_string BOI
        | lerfu_string /* ET BOI */

        | LE      free_seq sumti_tail KU free_seq
        | LE      free_seq sumti_tail KU
        | LE      free_seq sumti_tail /* ET KU */

        | LE               sumti_tail KU free_seq
        | LE               sumti_tail KU
        | LE               sumti_tail /* ET KU */

        | LA      free_seq sumti_tail KU free_seq
        | LA      free_seq sumti_tail KU
        | LA      free_seq sumti_tail /* ET KU */

        | LA               sumti_tail KU free_seq
        | LA               sumti_tail KU
        | LA               sumti_tail /* ET KU */

        | name_sumti_6

        | LI      free_seq mex LOhO free_seq
        | LI      free_seq mex LOhO
        | LI      free_seq mex /* ET LOhO */

        | LI               mex LOhO free_seq
        | LI               mex LOhO
        | LI               mex /* ET LOhO */

        | ZO free_seq 
        | ZO          
        | LU text LIhU free_seq
        | LU text LIhU
        | LU text  /* ET LIhU */
        | LOhU free_seq 
        | LOhU          
        | ZOI  free_seq 
        | ZOI           
        ;

lahe_sumti_6 : LAhE    free_seq relative_clauses sumti LUhU free_seq
             | LAhE    free_seq relative_clauses sumti LUhU
             | LAhE    free_seq relative_clauses sumti /* ET LUhU */
             | LAhE    free_seq                  sumti LUhU free_seq
             | LAhE    free_seq                  sumti LUhU
             | LAhE    free_seq                  sumti /* ET LUhU */

             | LAhE             relative_clauses sumti LUhU free_seq
             | LAhE             relative_clauses sumti LUhU
             | LAhE             relative_clauses sumti /* ET LUhU */
             | LAhE                              sumti LUhU free_seq
             | LAhE                              sumti LUhU
             | LAhE                              sumti /* ET LUhU */
             ;

nahe_bo_sumti_6 : PRIVATE_NAhE_BO NAhE BO free_seq relative_clauses sumti LUhU free_seq
                | PRIVATE_NAhE_BO NAhE BO free_seq relative_clauses sumti LUhU
                | PRIVATE_NAhE_BO NAhE BO free_seq relative_clauses sumti /* ET LUhU */
                | PRIVATE_NAhE_BO NAhE BO free_seq                  sumti LUhU free_seq
                | PRIVATE_NAhE_BO NAhE BO free_seq                  sumti LUhU
                | PRIVATE_NAhE_BO NAhE BO free_seq                  sumti /* ET LUhU */

                | PRIVATE_NAhE_BO NAhE BO          relative_clauses sumti LUhU free_seq
                | PRIVATE_NAhE_BO NAhE BO          relative_clauses sumti LUhU
                | PRIVATE_NAhE_BO NAhE BO          relative_clauses sumti /* ET LUhU */
                | PRIVATE_NAhE_BO NAhE BO                           sumti LUhU free_seq
                | PRIVATE_NAhE_BO NAhE BO                           sumti LUhU
                | PRIVATE_NAhE_BO NAhE BO                           sumti /* ET LUhU */
                ;

name_sumti_6 : LA      free_seq relative_clauses CMENE_seq  free_seq
             | LA      free_seq relative_clauses CMENE_seq
             | LA      free_seq                  CMENE_seq  free_seq
             | LA      free_seq                  CMENE_seq

             | LA               relative_clauses CMENE_seq  free_seq
             | LA               relative_clauses CMENE_seq
             | LA                                CMENE_seq  free_seq
             | LA                                CMENE_seq
             ;



sumti_tail : sumti_6 relative_clauses sumti_tail_1
           | sumti_6                  sumti_tail_1
           |                          sumti_tail_1
           |         relative_clauses sumti_tail_1
           ;






sumti_tail_1 : sumti_tail_1A relative_clauses
             | sumti_tail_1A
             | quantifier sumti
             ;

sumti_tail_1A : quantifier selbri
              |            selbri
              ;



relative_clauses : relative_clause_seq
                 ;

relative_clause_seq : relative_clause
                    | relative_clause_seq ZIhE free_seq relative_clause
                    | relative_clause_seq ZIhE          relative_clause
                    ;



relative_clause : term_relative_clause
                | full_relative_clause
                ;

term_relative_clause : GOI free_seq term GEhU free_seq
                     | GOI free_seq term GEhU
                     | GOI free_seq term /* ET GEhU */
                     | GOI          term GEhU free_seq
                     | GOI          term GEhU
                     | GOI          term /* ET GEhU */
                     ;

full_relative_clause : NOI free_seq subsentence KUhO free_seq
                     | NOI free_seq subsentence KUhO
                     | NOI free_seq subsentence /* ET KUhO */
                     | NOI          subsentence KUhO free_seq
                     | NOI          subsentence KUhO
                     | NOI          subsentence /* ET KUhO */
                     ;



selbri : tag selbri_1
       |     selbri_1
       ;

 

selbri_1 : selbri_2
         | NA free_seq selbri
         | NA          selbri
         ;



selbri_2 : selbri_3 CO free_seq selbri_2
         | selbri_3 CO          selbri_2
         | selbri_3
         ;



selbri_3 : selbri_3 selbri_4
         |          selbri_4
         ;






selbri_4 : selbri_5
         | selbri_4 joik_opt_ke free_seq selbri_5
         | selbri_4 joik_opt_ke          selbri_5
         | selbri_4 jek_opt_ke  free_seq selbri_5
         | selbri_4 jek_opt_ke           selbri_5
         | selbri_4 joik_stag_ke ke_selbri_3
         ;

joik_stag_ke : PRIVATE_JOIK_KE joik stag
             ;

ke_selbri_3 : KE free_seq selbri_3 KEhE free_seq
            | KE free_seq selbri_3 KEhE
            | KE free_seq selbri_3 /* ET KEhE */
            | KE          selbri_3 KEhE free_seq
            | KE          selbri_3 KEhE
            | KE          selbri_3 /* ET KEhE */
            ;





selbri_5 : selbri_6
         | selbri_6 joik_jek_stag_bo selbri_5
         ;

joik_jek_stag_bo : PRIVATE_JOIK_BO joik stag BO free_seq
                 | PRIVATE_JOIK_BO joik stag BO
                 | PRIVATE_JOIK_BO joik      BO free_seq
                 | PRIVATE_JOIK_BO joik      BO
                 | PRIVATE_JEK_BO  jek  stag BO free_seq
                 | PRIVATE_JEK_BO  jek  stag BO
                 | PRIVATE_JEK_BO  jek       BO free_seq
                 | PRIVATE_JEK_BO  jek       BO
                 ;



selbri_6 : tanru_unit
         | tanru_unit BO free_seq selbri_6
         | tanru_unit BO          selbri_6

         | NAhE free_seq guhek selbri gik selbri_6
         | NAhE          guhek selbri gik selbri_6
         |               guhek selbri gik selbri_6
         ;




tanru_unit : tanru_unit_1
           | tanru_unit CEI free_seq tanru_unit_1
           | tanru_unit CEI          tanru_unit_1
           ;




tanru_unit_1 : tanru_unit_2
             | tanru_unit_2 linkargs
             ;







tanru_unit_2      : BRIVLA free_seq
                  | BRIVLA

                  | GOhA RAhO free_seq
                  | GOhA RAhO
                  | GOhA      free_seq
                  | GOhA

                  | ke_selbri3_tu2

                  | ME free_seq sumti    MEhU free_seq MOI free_seq
                  | ME free_seq sumti    MEhU free_seq MOI
                  | ME free_seq sumti    MEhU free_seq
                  | ME free_seq sumti    MEhU          MOI free_seq
                  | ME free_seq sumti    MEhU          MOI
                  | ME free_seq sumti    MEhU
                  | ME free_seq sumti    /* ET MEhU */ MOI free_seq
                  | ME free_seq sumti    /* ET MEhU */ MOI
                  | ME free_seq sumti    /* ET MEhU */

                  | ME          sumti    MEhU free_seq MOI free_seq
                  | ME          sumti    MEhU free_seq MOI
                  | ME          sumti    MEhU free_seq
                  | ME          sumti    MEhU          MOI free_seq
                  | ME          sumti    MEhU          MOI
                  | ME          sumti    MEhU
                  | ME          sumti    /* ET MEhU */ MOI free_seq
                  | ME          sumti    /* ET MEhU */ MOI
                  | ME          sumti    /* ET MEhU */

                  | number_moi_tu2

                  | NUhA free_seq mex_operator
                  | NUhA          mex_operator

                  | se_tu2

                  | jai_tag_tu2

                  | jai_tu2

                  | ZEI 

                  | nahe_tu2

                  | abstraction

                  ;

ke_selbri3_tu2 : KE free_seq selbri_3 KEhE free_seq
               | KE free_seq selbri_3 KEhE
               | KE free_seq selbri_3 /* ET KEhE */
               | KE          selbri_3 KEhE free_seq
               | KE          selbri_3 KEhE
               | KE          selbri_3 /* ET KEhE */
               ;

number_moi_tu2 : PRIVATE_NUMBER_MOI number       MOI free_seq
               | PRIVATE_NUMBER_MOI number       MOI
               | PRIVATE_NUMBER_MOI lerfu_string MOI free_seq
               | PRIVATE_NUMBER_MOI lerfu_string MOI
               ;

se_tu2 : SE free_seq tanru_unit_2
       | SE          tanru_unit_2
       ;

jai_tag_tu2 : JAI free_seq tag tanru_unit_2
            | JAI          tag tanru_unit_2
            ;

jai_tu2 : JAI free_seq     tanru_unit_2
        | JAI              tanru_unit_2
        ;

nahe_tu2 : NAhE free_seq tanru_unit_2
         | NAhE          tanru_unit_2
         ;



abstraction : nu_nai_seq subsentence KEI free_seq
            | nu_nai_seq subsentence KEI
            | nu_nai_seq subsentence /* ET KEI */
            ;

nu_nai_seq : NU NAI free_seq
           | NU     free_seq
           | NU NAI
           | NU
           | nu_nai_seq joik free_seq NU NAI free_seq
           | nu_nai_seq joik free_seq NU NAI
           | nu_nai_seq joik free_seq NU     free_seq
           | nu_nai_seq joik free_seq NU
           | nu_nai_seq joik          NU NAI free_seq
           | nu_nai_seq joik          NU NAI
           | nu_nai_seq joik          NU     free_seq
           | nu_nai_seq joik          NU
           | nu_nai_seq jek  free_seq NU NAI free_seq
           | nu_nai_seq jek  free_seq NU NAI
           | nu_nai_seq jek  free_seq NU     free_seq
           | nu_nai_seq jek  free_seq NU
           | nu_nai_seq jek           NU NAI free_seq
           | nu_nai_seq jek           NU NAI
           | nu_nai_seq jek           NU     free_seq
           | nu_nai_seq jek           NU
           ;




linkargs : BE free_seq term links BEhO free_seq
         | BE free_seq term links BEhO
         | BE free_seq term links /* ET BEhO */
         | BE          term links BEhO free_seq
         | BE          term links BEhO
         | BE          term links /* ET BEhO */
         | BE free_seq term       BEhO free_seq
         | BE free_seq term       BEhO
         | BE free_seq term       /* ET BEhO */
         | BE          term       BEhO free_seq
         | BE          term       BEhO
         | BE          term       /* ET BEhO */
         ;



links : BEI free_seq term links
      | BEI          term links
      | BEI free_seq term
      | BEI          term
      ;



quantifier : number BOI free_seq
           | number BOI
           | number /* ET BOI */
           | VEI free_seq mex VEhO free_seq
           | VEI free_seq mex VEhO
           | VEI free_seq mex /* ET VEhO */
           | VEI          mex VEhO free_seq
           | VEI          mex VEhO
           | VEI          mex /* ET VEhO */
           ;



mex : mex_infix
    | mex_rp
    ;

mex_rp : FUhA free_seq rp_expression
       | FUhA          rp_expression
       ;

mex_infix : mex_1
          | mex_infix operator mex_1
          ;



mex_1 : mex_2
      | mex_2 BIhE free_seq operator mex_1
      | mex_2 BIhE          operator mex_1
      ;



mex_2 : operand
      | PEhO free_seq operator mex_2_seq KUhE free_seq
      | PEhO free_seq operator mex_2_seq KUhE
      | PEhO free_seq operator mex_2_seq /* ET KUhE */

      | PEhO          operator mex_2_seq KUhE free_seq
      | PEhO          operator mex_2_seq KUhE
      | PEhO          operator mex_2_seq /* ET KUhE */

      |               operator mex_2_seq KUhE free_seq
      |               operator mex_2_seq KUhE
      |               operator mex_2_seq /* ET KUhE */
      ;

mex_2_seq :           mex_2
          | mex_2_seq mex_2
          ;



rp_expression : rp_expression rp_expression operator
              | operand       rp_expression operator
              | rp_expression operand       operator
              | operand       operand       operator
              ;







operator : operator_1
         | operator joik_opt_ke free_seq operator_1
         | operator joik_opt_ke          operator_1
         | operator jek_opt_ke  free_seq operator_1
         | operator jek_opt_ke           operator_1
         | operator joik_stag_ke ke_operator
         ;

ke_operator : KE free_seq operator KEhE free_seq
            | KE free_seq operator KEhE
            | KE free_seq operator /* ET KEhE */
            | KE          operator KEhE free_seq
            | KE          operator KEhE
            | KE          operator /* ET KEhE */
            ;




operator_1 : operator_2
           | guhek operator_1 gik operator_2
           | operator_2 joik_jek_stag_bo operator_1
           ;




operator_2 : mex_operator
           | KE free_seq operator KEhE free_seq
           | KE free_seq operator KEhE
           | KE free_seq operator /* ET KEhE */
           | KE          operator KEhE free_seq
           | KE          operator KEhE
           | KE          operator /* ET KEhE */
           ;




mex_operator : SE free_seq mex_operator
             | SE          mex_operator
             | NAhE free_seq mex_operator
             | NAhE          mex_operator
             | MAhO free_seq mex TEhU free_seq
             | MAhO free_seq mex TEhU
             | MAhO free_seq mex /* ET TEhU */
             | MAhO          mex TEhU free_seq
             | MAhO          mex TEhU
             | MAhO          mex /* ET TEhU */
             | NAhU free_seq selbri TEhU free_seq
             | NAhU free_seq selbri TEhU
             | NAhU free_seq selbri /* ET TEhU */
             | NAhU          selbri TEhU free_seq
             | NAhU          selbri TEhU
             | NAhU          selbri /* ET TEhU */
             | VUhU free_seq
             | VUhU
             ;



operand : operand_1
        | operand_1 joik_ek_ke ke_operand
        ;

ke_operand : KE free_seq operand KEhE free_seq
           | KE free_seq operand KEhE
           | KE free_seq operand /* ET KEhE */
           | KE          operand KEhE free_seq
           | KE          operand KEhE
           | KE          operand /* ET KEhE */
           ;




operand_1 : operand_2
          | operand_1 joik free_seq operand_2
          | operand_1 joik          operand_2
          | operand_1 jek  free_seq operand_2
          | operand_1 jek           operand_2
          ;




operand_2 : operand_3
          | operand_3 joik_ek_stag_bo operand_2
          ;





operand_3 : quantifier

          | lerfu_string BOI free_seq
          | lerfu_string BOI
          | lerfu_string /* ET BOI */

          | NIhE free_seq selbri TEhU free_seq
          | NIhE free_seq selbri TEhU
          | NIhE free_seq selbri /* ET TEhU */
          | NIhE          selbri TEhU free_seq
          | NIhE          selbri TEhU
          | NIhE          selbri /* ET TEhU */

          | MOhE free_seq sumti  TEhU free_seq
          | MOhE free_seq sumti  TEhU
          | MOhE free_seq sumti /* ET TEhU */
          | MOhE          sumti  TEhU free_seq
          | MOhE          sumti  TEhU
          | MOhE          sumti /* ET TEhU */

          | JOhI free_seq mex_2_seq TEhU free_seq
          | JOhI free_seq mex_2_seq TEhU
          | JOhI free_seq mex_2_seq /* ET TEhU */
          | JOhI          mex_2_seq TEhU free_seq
          | JOhI          mex_2_seq TEhU
          | JOhI          mex_2_seq /* ET TEhU */

          | gek operand gik operand_3

          | LAhE free_seq operand LUhU free_seq
          | LAhE free_seq operand LUhU
          | LAhE free_seq operand /* ET LUhU */
          | LAhE          operand LUhU free_seq
          | LAhE          operand LUhU
          | LAhE          operand /* ET LUhU */

          | PRIVATE_NAhE_BO NAhE BO free_seq operand LUhU free_seq
          | PRIVATE_NAhE_BO NAhE BO free_seq operand LUhU
          | PRIVATE_NAhE_BO NAhE BO free_seq operand /* ET LUhU */
          | PRIVATE_NAhE_BO NAhE BO          operand LUhU free_seq
          | PRIVATE_NAhE_BO NAhE BO          operand LUhU
          | PRIVATE_NAhE_BO NAhE BO          operand /* ET LUhU */
          ;




number : inner_number
       ;

inner_number : PA
             | inner_number PA
             | inner_number lerfu_word
             ;




lerfu_string : lerfu_word
             | lerfu_string PA
             | lerfu_string lerfu_word
             ;




lerfu_word : BY
           | BU 
           | LAU lerfu_word
           | TEI lerfu_string FOI
           ;



ek : PRIVATE_START_EK NA SE A NAI
   | PRIVATE_START_EK NA SE A
   | PRIVATE_START_EK NA    A NAI
   | PRIVATE_START_EK NA    A
   | PRIVATE_START_EK    SE A NAI
   | PRIVATE_START_EK    SE A
   | PRIVATE_START_EK       A NAI
   | PRIVATE_START_EK       A
   ;



gihek : PRIVATE_START_GIHEK NA SE GIhA NAI
      | PRIVATE_START_GIHEK NA SE GIhA
      | PRIVATE_START_GIHEK NA    GIhA NAI
      | PRIVATE_START_GIHEK NA    GIhA
      | PRIVATE_START_GIHEK    SE GIhA NAI
      | PRIVATE_START_GIHEK    SE GIhA
      | PRIVATE_START_GIHEK       GIhA NAI
      | PRIVATE_START_GIHEK       GIhA
      ;



jek : PRIVATE_START_JEK NA SE JA NAI PRIVATE_END_JEK
    | PRIVATE_START_JEK NA SE JA     PRIVATE_END_JEK
    | PRIVATE_START_JEK NA    JA NAI PRIVATE_END_JEK
    | PRIVATE_START_JEK NA    JA     PRIVATE_END_JEK
    | PRIVATE_START_JEK    SE JA NAI PRIVATE_END_JEK
    | PRIVATE_START_JEK    SE JA     PRIVATE_END_JEK
    | PRIVATE_START_JEK       JA NAI PRIVATE_END_JEK
    | PRIVATE_START_JEK       JA     PRIVATE_END_JEK
    ;

jek_opt_ke :                PRIVATE_START_JEK NA SE JA NAI PRIVATE_END_JEK
           |                PRIVATE_START_JEK NA SE JA     PRIVATE_END_JEK
           |                PRIVATE_START_JEK NA    JA NAI PRIVATE_END_JEK
           |                PRIVATE_START_JEK NA    JA     PRIVATE_END_JEK
           |                PRIVATE_START_JEK    SE JA NAI PRIVATE_END_JEK
           |                PRIVATE_START_JEK    SE JA     PRIVATE_END_JEK
           |                PRIVATE_START_JEK       JA NAI PRIVATE_END_JEK
           |                PRIVATE_START_JEK       JA     PRIVATE_END_JEK
           | PRIVATE_JEK_KE PRIVATE_START_JEK NA SE JA NAI PRIVATE_END_JEK
           | PRIVATE_JEK_KE PRIVATE_START_JEK NA SE JA     PRIVATE_END_JEK
           | PRIVATE_JEK_KE PRIVATE_START_JEK NA    JA NAI PRIVATE_END_JEK
           | PRIVATE_JEK_KE PRIVATE_START_JEK NA    JA     PRIVATE_END_JEK
           | PRIVATE_JEK_KE PRIVATE_START_JEK    SE JA NAI PRIVATE_END_JEK
           | PRIVATE_JEK_KE PRIVATE_START_JEK    SE JA     PRIVATE_END_JEK
           | PRIVATE_JEK_KE PRIVATE_START_JEK       JA NAI PRIVATE_END_JEK
           | PRIVATE_JEK_KE PRIVATE_START_JEK       JA     PRIVATE_END_JEK
           ;

jek_opt_kebo :                PRIVATE_START_JEK NA SE JA NAI PRIVATE_END_JEK
             |                PRIVATE_START_JEK NA SE JA     PRIVATE_END_JEK
             |                PRIVATE_START_JEK NA    JA NAI PRIVATE_END_JEK
             |                PRIVATE_START_JEK NA    JA     PRIVATE_END_JEK
             |                PRIVATE_START_JEK    SE JA NAI PRIVATE_END_JEK
             |                PRIVATE_START_JEK    SE JA     PRIVATE_END_JEK
             |                PRIVATE_START_JEK       JA NAI PRIVATE_END_JEK
             |                PRIVATE_START_JEK       JA     PRIVATE_END_JEK
             | PRIVATE_JEK_KE PRIVATE_START_JEK NA SE JA NAI PRIVATE_END_JEK
             | PRIVATE_JEK_KE PRIVATE_START_JEK NA SE JA     PRIVATE_END_JEK
             | PRIVATE_JEK_KE PRIVATE_START_JEK NA    JA NAI PRIVATE_END_JEK
             | PRIVATE_JEK_KE PRIVATE_START_JEK NA    JA     PRIVATE_END_JEK
             | PRIVATE_JEK_KE PRIVATE_START_JEK    SE JA NAI PRIVATE_END_JEK
             | PRIVATE_JEK_KE PRIVATE_START_JEK    SE JA     PRIVATE_END_JEK
             | PRIVATE_JEK_KE PRIVATE_START_JEK       JA NAI PRIVATE_END_JEK
             | PRIVATE_JEK_KE PRIVATE_START_JEK       JA     PRIVATE_END_JEK
             | PRIVATE_JEK_BO PRIVATE_START_JEK NA SE JA NAI PRIVATE_END_JEK
             | PRIVATE_JEK_BO PRIVATE_START_JEK NA SE JA     PRIVATE_END_JEK
             | PRIVATE_JEK_BO PRIVATE_START_JEK NA    JA NAI PRIVATE_END_JEK
             | PRIVATE_JEK_BO PRIVATE_START_JEK NA    JA     PRIVATE_END_JEK
             | PRIVATE_JEK_BO PRIVATE_START_JEK    SE JA NAI PRIVATE_END_JEK
             | PRIVATE_JEK_BO PRIVATE_START_JEK    SE JA     PRIVATE_END_JEK
             | PRIVATE_JEK_BO PRIVATE_START_JEK       JA NAI PRIVATE_END_JEK
             | PRIVATE_JEK_BO PRIVATE_START_JEK       JA     PRIVATE_END_JEK
             ;



joik : PRIVATE_START_JOIK      SE JOI  NAI      PRIVATE_END_JOIK
     | PRIVATE_START_JOIK      SE JOI           PRIVATE_END_JOIK
     | PRIVATE_START_JOIK         JOI  NAI      PRIVATE_END_JOIK
     | PRIVATE_START_JOIK         JOI           PRIVATE_END_JOIK
     | PRIVATE_START_JOIK      SE BIhI NAI      PRIVATE_END_JOIK
     | PRIVATE_START_JOIK      SE BIhI          PRIVATE_END_JOIK
     | PRIVATE_START_JOIK         BIhI NAI      PRIVATE_END_JOIK
     | PRIVATE_START_JOIK         BIhI          PRIVATE_END_JOIK
     | PRIVATE_START_JOIK GAhO SE BIhI NAI GAhO PRIVATE_END_JOIK
     | PRIVATE_START_JOIK GAhO SE BIhI     GAhO PRIVATE_END_JOIK
     | PRIVATE_START_JOIK GAhO    BIhI NAI GAhO PRIVATE_END_JOIK
     | PRIVATE_START_JOIK GAhO    BIhI     GAhO PRIVATE_END_JOIK
     ;



joik_opt_ke :                 PRIVATE_START_JOIK      SE JOI  NAI      PRIVATE_END_JOIK
            |                 PRIVATE_START_JOIK      SE JOI           PRIVATE_END_JOIK
            |                 PRIVATE_START_JOIK         JOI  NAI      PRIVATE_END_JOIK
            |                 PRIVATE_START_JOIK         JOI           PRIVATE_END_JOIK
            |                 PRIVATE_START_JOIK      SE BIhI NAI      PRIVATE_END_JOIK
            |                 PRIVATE_START_JOIK      SE BIhI          PRIVATE_END_JOIK
            |                 PRIVATE_START_JOIK         BIhI NAI      PRIVATE_END_JOIK
            |                 PRIVATE_START_JOIK         BIhI          PRIVATE_END_JOIK
            |                 PRIVATE_START_JOIK GAhO SE BIhI NAI GAhO PRIVATE_END_JOIK
            |                 PRIVATE_START_JOIK GAhO SE BIhI     GAhO PRIVATE_END_JOIK
            |                 PRIVATE_START_JOIK GAhO    BIhI NAI GAhO PRIVATE_END_JOIK
            |                 PRIVATE_START_JOIK GAhO    BIhI     GAhO PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK      SE JOI  NAI      PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK      SE JOI           PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK         JOI  NAI      PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK         JOI           PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK      SE BIhI NAI      PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK      SE BIhI          PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK         BIhI NAI      PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK         BIhI          PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK GAhO SE BIhI NAI GAhO PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK GAhO SE BIhI     GAhO PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK GAhO    BIhI NAI GAhO PRIVATE_END_JOIK
            | PRIVATE_JOIK_KE PRIVATE_START_JOIK GAhO    BIhI     GAhO PRIVATE_END_JOIK
            ;

joik_opt_kebo :                 PRIVATE_START_JOIK      SE JOI  NAI      PRIVATE_END_JOIK
              |                 PRIVATE_START_JOIK      SE JOI           PRIVATE_END_JOIK
              |                 PRIVATE_START_JOIK         JOI  NAI      PRIVATE_END_JOIK
              |                 PRIVATE_START_JOIK         JOI           PRIVATE_END_JOIK
              |                 PRIVATE_START_JOIK      SE BIhI NAI      PRIVATE_END_JOIK
              |                 PRIVATE_START_JOIK      SE BIhI          PRIVATE_END_JOIK
              |                 PRIVATE_START_JOIK         BIhI NAI      PRIVATE_END_JOIK
              |                 PRIVATE_START_JOIK         BIhI          PRIVATE_END_JOIK
              |                 PRIVATE_START_JOIK GAhO SE BIhI NAI GAhO PRIVATE_END_JOIK
              |                 PRIVATE_START_JOIK GAhO SE BIhI     GAhO PRIVATE_END_JOIK
              |                 PRIVATE_START_JOIK GAhO    BIhI NAI GAhO PRIVATE_END_JOIK
              |                 PRIVATE_START_JOIK GAhO    BIhI     GAhO PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK      SE JOI  NAI      PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK      SE JOI           PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK         JOI  NAI      PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK         JOI           PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK      SE BIhI NAI      PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK      SE BIhI          PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK         BIhI NAI      PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK         BIhI          PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK GAhO SE BIhI NAI GAhO PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK GAhO SE BIhI     GAhO PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK GAhO    BIhI NAI GAhO PRIVATE_END_JOIK
              | PRIVATE_JOIK_KE PRIVATE_START_JOIK GAhO    BIhI     GAhO PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK      SE JOI  NAI      PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK      SE JOI           PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK         JOI  NAI      PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK         JOI           PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK      SE BIhI NAI      PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK      SE BIhI          PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK         BIhI NAI      PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK         BIhI          PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK GAhO SE BIhI NAI GAhO PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK GAhO SE BIhI     GAhO PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK GAhO    BIhI NAI GAhO PRIVATE_END_JOIK
              | PRIVATE_JOIK_BO PRIVATE_START_JOIK GAhO    BIhI     GAhO PRIVATE_END_JOIK
              ;

       






gek : PRIVATE_START_GEK SE GA NAI free_seq
    | PRIVATE_START_GEK SE GA NAI
    | PRIVATE_START_GEK SE GA     free_seq
    | PRIVATE_START_GEK SE GA    
    | PRIVATE_START_GEK    GA NAI free_seq
    | PRIVATE_START_GEK    GA NAI
    | PRIVATE_START_GEK    GA     free_seq
    | PRIVATE_START_GEK    GA    
    | PRIVATE_START_GEK joik GI free_seq
    | PRIVATE_START_GEK joik GI
    | PRIVATE_START_GEK stag gik
    ;



guhek : PRIVATE_START_GUHEK SE GUhA NAI free_seq
      | PRIVATE_START_GUHEK SE GUhA NAI
      | PRIVATE_START_GUHEK SE GUhA     free_seq
      | PRIVATE_START_GUHEK SE GUhA    
      | PRIVATE_START_GUHEK    GUhA NAI free_seq
      | PRIVATE_START_GUHEK    GUhA NAI
      | PRIVATE_START_GUHEK    GUhA     free_seq
      | PRIVATE_START_GUHEK    GUhA    
      ;



gik : GI NAI free_seq
    | GI NAI
    | GI     free_seq
    | GI
    ;




tag : ctag
    | stag
    ;


ctag :                             complex_tense_modal
     | ctag joik_opt_kebo free_seq complex_tense_modal
     | ctag joik_opt_kebo          complex_tense_modal
     | ctag jek_opt_kebo  free_seq complex_tense_modal
     | ctag jek_opt_kebo           complex_tense_modal
     | ctag joik_opt_kebo free_seq simple_tense_modal
     | ctag joik_opt_kebo          simple_tense_modal
     | ctag jek_opt_kebo  free_seq simple_tense_modal
     | ctag jek_opt_kebo           simple_tense_modal
     | stag joik_opt_kebo free_seq complex_tense_modal
     | stag joik_opt_kebo          complex_tense_modal
     | stag jek_opt_kebo  free_seq complex_tense_modal
     | stag jek_opt_kebo           complex_tense_modal
     ;


complex_tense_modal : FIhO free_seq selbri FEhU free_seq
                    | FIhO free_seq selbri FEhU
                    | FIhO free_seq selbri /* ET FEhU */
                    | FIhO          selbri FEhU free_seq
                    | FIhO          selbri FEhU
                    | FIhO          selbri /* ET FEhU */
                    | simple_tense_modal free_seq
                    ;




stag :                    simple_tense_modal
     | stag jek_opt_kebo  simple_tense_modal
     | stag joik_opt_kebo simple_tense_modal
     ;






simple_tense_modal : PRIVATE_START_TENSE NAhE se_bai  NAI KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE se_bai  NAI    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE se_bai      KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE se_bai         PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE    bai1 NAI KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE    bai1 NAI    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE    bai1     KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE    bai1        PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      se_bai  NAI KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      se_bai  NAI    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      se_bai      KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      se_bai         PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE         bai1 NAI KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE         bai1 NAI    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE         bai1     KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE         bai1        PRIVATE_END_TENSE

                   | PRIVATE_START_TENSE NAhE time  space CAhA KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE time  space CAhA    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE time  space      KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE time  space         PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE time        CAhA KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE time        CAhA    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE time             KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE time                PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      time  space CAhA KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      time  space CAhA    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      time  space      KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      time  space         PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      time        CAhA KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      time        CAhA    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      time             KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      time                PRIVATE_END_TENSE

                   | PRIVATE_START_TENSE NAhE space time  CAhA KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE space time  CAhA    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE space time       KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE space time          PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE space       CAhA KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE space       CAhA    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE space            KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE space               PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      space time  CAhA KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      space time  CAhA    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      space time       KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      space time          PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      space       CAhA KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      space       CAhA    PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      space            KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE      space               PRIVATE_END_TENSE

                   | PRIVATE_START_TENSE                  CAhA KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE                  CAhA    PRIVATE_END_TENSE

                   | PRIVATE_START_TENSE NAhE             CAhA KI PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE NAhE             CAhA    PRIVATE_END_TENSE

                   | PRIVATE_START_TENSE KI   PRIVATE_END_TENSE
                   | PRIVATE_START_TENSE CUhE PRIVATE_END_TENSE
                   ;




se_bai : SE BAI
       ;

bai1 : BAI
     ;




time : ZI time_offset_seq zeha_pu_nai interval_property_seq
     | ZI time_offset_seq             interval_property_seq

     | ZI time_offset_seq zeha_pu_nai
     | ZI time_offset_seq

     | ZI                 zeha_pu_nai interval_property_seq
     | ZI                             interval_property_seq

     | ZI                 zeha_pu_nai
     | ZI                

     |    time_offset_seq zeha_pu_nai interval_property_seq
     |    time_offset_seq             interval_property_seq

     |    time_offset_seq zeha_pu_nai
     |    time_offset_seq

     |                    zeha_pu_nai interval_property_seq
     |                                interval_property_seq

     |                    zeha_pu_nai

     ;

zeha_pu_nai : ZEhA PU NAI
            | ZEhA PU
            | ZEhA
            ;



time_offset : PU NAI ZI
            | PU NAI
            | PU     ZI
            | PU
            ;

time_offset_seq : time_offset_seq time_offset
                |                 time_offset
                ;



space : VA space_offset_seq space_interval MOhI space_offset
      | VA space_offset_seq space_interval
      | VA space_offset_seq                MOhI space_offset
      | VA space_offset_seq

      | VA                  space_interval MOhI space_offset
      | VA                  space_interval
      | VA                                 MOhI space_offset
      | VA                 

      |    space_offset_seq space_interval MOhI space_offset
      |    space_offset_seq space_interval
      |    space_offset_seq                MOhI space_offset
      |    space_offset_seq

      |                     space_interval MOhI space_offset
      |                     space_interval
      |                                    MOhI space_offset
      ;



space_offset : FAhA NAI VA
             | FAhA NAI
             | FAhA     VA
             | FAhA
             ;

space_offset_seq : space_offset_seq space_offset
                 |                  space_offset
                 ;



space_interval : VEhA VIhA FAhA NAI space_int_props
               | VEhA VIhA FAhA     space_int_props
               | VEhA VIhA          space_int_props
               | VEhA      FAhA NAI space_int_props
               | VEhA      FAhA     space_int_props
               | VEhA               space_int_props
               |      VIhA FAhA NAI space_int_props
               |      VIhA FAhA     space_int_props
               |      VIhA          space_int_props

               | VEhA VIhA FAhA NAI
               | VEhA VIhA FAhA
               | VEhA VIhA
               | VEhA      FAhA NAI
               | VEhA      FAhA
               | VEhA
               |      VIhA FAhA NAI
               |      VIhA FAhA
               |      VIhA

               |                    space_int_props
               ;



space_int_props : space_int_props space_int_prop
                |                 space_int_prop
                ;

space_int_prop : FEhE interval_property
               ;



interval_property : PRIVATE_NUMBER_ROI number ROI NAI
                  | PRIVATE_NUMBER_ROI number ROI
                  | TAhE NAI
                  | TAhE
                  | ZAhO NAI
                  | ZAhO
                  ;

interval_property_seq : interval_property_seq interval_property
                      |                       interval_property
                      ;




free_seq : free_seq free
         |          free
         ;

free : metalinguistic
     | reciprocity
     | free_vocative
     | utterance_ordinal
     | parenthetical
     | subscript
     ;


metalinguistic : SEI free_seq terms CU free_seq metalinguistic_main_selbri SEhU
               | SEI free_seq terms CU free_seq metalinguistic_main_selbri /* ET SEhU */
               | SEI free_seq terms CU          metalinguistic_main_selbri SEhU
               | SEI free_seq terms CU          metalinguistic_main_selbri /* ET SEhU */
               | SEI free_seq terms             metalinguistic_main_selbri SEhU
               | SEI free_seq terms             metalinguistic_main_selbri /* ET SEhU */
               | SEI free_seq                   metalinguistic_main_selbri SEhU
               | SEI free_seq                   metalinguistic_main_selbri /* ET SEhU */

               | SEI          terms CU free_seq metalinguistic_main_selbri SEhU
               | SEI          terms CU free_seq metalinguistic_main_selbri /* ET SEhU */
               | SEI          terms CU          metalinguistic_main_selbri SEhU
               | SEI          terms CU          metalinguistic_main_selbri /* ET SEhU */
               | SEI          terms             metalinguistic_main_selbri SEhU
               | SEI          terms             metalinguistic_main_selbri /* ET SEhU */
               | SEI                            metalinguistic_main_selbri SEhU
               | SEI                            metalinguistic_main_selbri /* ET SEhU */
               ;

metalinguistic_main_selbri : selbri
                           ;

reciprocity : SOI free_seq sumti sumti SEhU
            | SOI free_seq sumti sumti /* ET SEhU */
            | SOI free_seq sumti       SEhU
            | SOI free_seq sumti /* ET SEhU */
            | SOI          sumti sumti SEhU
            | SOI          sumti sumti /* ET SEhU */
            | SOI          sumti       SEhU
            | SOI          sumti /* ET SEhU */
            ;


free_vocative : vocative relative_clauses selbri relative_clauses DOhU
              | vocative relative_clauses selbri relative_clauses /* ET DOhU */
              | vocative relative_clauses selbri                  DOhU
              | vocative relative_clauses selbri /* ET DOhU */
              | vocative                  selbri relative_clauses DOhU
              | vocative                  selbri relative_clauses /* ET DOhU */
              | vocative                  selbri                  DOhU
              | vocative                  selbri /* ET DOhU */

              | vocative relative_clauses CMENE_seq free_seq relative_clauses DOhU
              | vocative relative_clauses CMENE_seq free_seq relative_clauses /* ET DOhU */
              | vocative relative_clauses CMENE_seq free_seq                  DOhU
              | vocative relative_clauses CMENE_seq free_seq /* ET DOhU */

              | vocative                  CMENE_seq free_seq relative_clauses DOhU
              | vocative                  CMENE_seq free_seq relative_clauses /* ET DOhU */
              | vocative                  CMENE_seq free_seq                  DOhU
              | vocative                  CMENE_seq free_seq /* ET DOhU */

              | vocative relative_clauses CMENE_seq          relative_clauses DOhU
              | vocative relative_clauses CMENE_seq          relative_clauses /* ET DOhU */
              | vocative relative_clauses CMENE_seq                           DOhU
              | vocative relative_clauses CMENE_seq          /* ET DOhU */

              | vocative                  CMENE_seq          relative_clauses DOhU
              | vocative                  CMENE_seq          relative_clauses /* ET DOhU */
              | vocative                  CMENE_seq                           DOhU
              | vocative                  CMENE_seq          /* ET DOhU */

              | vocative sumti DOhU
              | vocative sumti /* ET DOhU */
              | vocative       DOhU
              | vocative /* ET DOhU */
              ;

utterance_ordinal : PRIVATE_NUMBER_MAI number       MAI
                  | PRIVATE_NUMBER_MAI lerfu_string MAI
                  ;

parenthetical : TO text TOI
              | TO text /* ET TOI */
              ;

subscript : XI free_seq number       BOI
          | XI free_seq number /* ET BOI */
          | XI          number       BOI
          | XI          number /* ET BOI */
          | XI free_seq lerfu_string BOI
          | XI free_seq lerfu_string /* ET BOI */
          | XI          lerfu_string BOI
          | XI          lerfu_string /* ET BOI */

          | XI free_seq VEI free_seq mex VEhO
          | XI free_seq VEI free_seq mex /* ET VEhO */
          | XI free_seq VEI          mex VEhO
          | XI free_seq VEI          mex /* ET VEhO */
          | XI          VEI free_seq mex VEhO
          | XI          VEI free_seq mex /* ET VEhO */
          | XI          VEI          mex VEhO
          | XI          VEI          mex /* ET VEhO */
          ;






vocative : coi_nai_seq DOI
         | coi_nai_seq
         |             DOI
         ;

coi_nai_seq : COI NAI
            | COI
            | coi_nai_seq COI NAI
            | coi_nai_seq COI
            ;




indicators : FUhE indicator_seq
           |      indicator_seq
           ;

indicator_seq : indicator_seq indicator
              |               indicator
              ;



indicator : UI  NAI
          | UI
          | CAI NAI
          | CAI
          | Y
          | DAhO
          | FUhO
          ;

NAI_seq : NAI_seq NAI
        |         NAI
        ;

CMENE_seq : CMENE_seq CMENE
          |           CMENE
          ;

NIhO_seq_free_seq : NIhO_seq free_seq
                  | NIhO_seq
                  ;

NIhO_seq : NIhO_seq NIhO
         |          NIhO
         ;
