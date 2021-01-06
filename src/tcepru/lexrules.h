/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "setjmp.h"

# define START(t) \
	token *tok; \
	int type; \
	type = t;

# define TRY(x) \
	tok = x(); \
	if (tok) return cpd_reduce(tok, type)

# define END \
	return NULL

# define INIT \
	token *result; \
	token *tok; \
	result = newtoken()

# define CALL(x) \
	tok = x(); \
	if (!tok) return fail(result); \
	add (result, tok)

# define IS(x) \
	tok = is(x, result); \
	if (!tok) return fail(result);

# define RETURN \
	return result

token *lexer_A_905_driver();
token *utt_ordinal_root_906();
token *utt_ordinal_root_906_1();
token *utt_ordinal_root_906_2();
token *lexer_B_910_driver();
token *EK_root_911();
token *EK_root_911_1();
token *EK_root_911_2();
token *EK_root_911_3();
token *EK_root_911_4();
token *EK_root_911_5();
token *EK_root_911_6();
token *EK_root_911_7();
token *EK_root_911_8();
token *lexer_C_915_driver();
token *lexer_C_915_1();
token *lexer_C_915_2();
token *lexer_D_916_driver();
token *lexer_D_916_1();
token *lexer_D_916_2();
token *lexer_E_925_driver();
token *JEK_root_926();
token *JEK_root_926_1();
token *JEK_root_926_2();
token *JEK_root_926_3();
token *JEK_root_926_4();
token *JEK_root_926_5();
token *JEK_root_926_6();
token *JEK_root_926_7();
token *JEK_root_926_8();
token *lexer_F_930_driver();
token *JOIK_root_931();
token *JOIK_root_931_1();
token *JOIK_root_931_2();
token *JOIK_root_931_3();
token *JOIK_root_931_4();
token *JOIK_root_931_5();
token *JOIK_root_931_6();
token *BIhI_root_932();
token *BIhI_root_932_1();
token *BIhI_root_932_2();
token *BIhI_root_932_3();
token *BIhI_root_932_4();
token *lexer_G_935_driver();
token *lexer_G_935_1();
token *lexer_G_935_2();
token *lexer_G_935_3();
token *lexer_G_935_4();
token *lexer_G_935_5();
token *lexer_G_935_6();
token *lexer_G_935_7();
token *lexer_G_935_8();
token *lexer_G_935_9();
token *lexer_H_940_driver();
token *lexer_H_940_1();
token *lexer_H_940_2();
token *lexer_H_940_3();
token *lexer_H_940_4();
token *lexer_I_945_driver();
token *lexer_I_945_1();
token *lexer_J_950_driver();
token *lexer_J_950_1();
token *lexer_K_955_driver();
token *lexer_K_955_1();
token *lexer_K_955_2();
token *I_root_956();
token *I_root_956_1();
token *I_root_956_2();
token *simple_JOIK_JEK_957();
token *lexer_L_960_driver();
token *number_root_961();
token *lexer_M_965_driver();
token *lexer_M_965_1();
token *lexer_M_965_2();
token *lexer_N_966_driver();
token *lexer_N_966_1();
token *lexer_N_966_2();
token *lexer_O_970_driver();
token *simple_tag_971();
token *simple_tag_971_12();
token *simple_tag_971_3();
token *simple_tense_modal_972();
token *simple_tense_modal_972_1();
token *simple_tense_modal_972_2();
token *simple_tense_modal_972_3();
token *simple_tense_modal_972_4();
token *simple_tense_modal_A_973();
token *simple_tense_modal_A_973_1();
token *simple_tense_modal_A_973_2();
token *simple_tense_modal_A_973_3();
token *simple_tense_modal_A_973_4();
token *modal_974();
token *modal_974_1();
token *modal_974_2();
token *modal_A_975();
token *modal_A_975_1();
token *modal_A_975_2();
token *tense_A_977();
token *tense_A_977_1();
token *tense_A_977_2();
token *tense_A_977_3();
token *tense_B_978();
token *tense_B_978_1();
token *tense_B_978_2();
token *tense_B_978_3();
token *tense_C_979();
token *tense_C_979_1();
token *tense_C_979_2();
token *tense_C_979_3();
token *lexer_P_980_driver();
token *GIK_root_981();
token *GIK_root_981_1();
token *GIK_root_981_2();
token *lexer_Q_985_driver();
token *lerfu_string_root_986();
token *lerfu_word_987();
token *lerfu_word_987_1();
token *lerfu_word_987_2();
token *lerfu_word_987_3();
token *lexer_R_990_driver();
token *GIhEK_root_991();
token *GIhEK_root_991_1();
token *GIhEK_root_991_2();
token *GIhEK_root_991_3();
token *GIhEK_root_991_4();
token *GIhEK_root_991_5();
token *GIhEK_root_991_6();
token *GIhEK_root_991_7();
token *GIhEK_root_991_8();
token *lexer_S_995_driver();
token *lexer_U_1005_driver();
token *lexer_U_1005_1();
token *lexer_U_1005_2();
token *lexer_V_1010_driver();
token *lexer_V_1010_1();
token *lexer_V_1010_2();
token *lexer_W_1015_driver();
token *lexer_W_1015_1();
token *lexer_W_1015_2();
token *lexer_Y_1025_driver();
token *lexer_Y_1025_1();
token *lexer_Y_1025_2();
token *time_1030();
token *time_1030_1();
token *time_1030_2();
token *time_1030_3();
token *time_A_1031();
token *time_A_1031_1();
token *time_A_1031_2();
token *time_A_1031_3();
token *time_B_1032();
token *time_offset_1033();
token *time_offset_1033_1();
token *time_offset_1033_2();
token *time_interval_1034();
token *time_interval_1034_1();
token *time_interval_1034_2();
token *time_interval_1034_3();
token *time_interval_1034_4();
token *time_interval_1034_5();
token *time_direction_1035();
token *time_direction_1035_1();
token *time_direction_1035_2();
token *space_1040();
token *space_1040_1();
token *space_1040_2();
token *space_1040_3();
token *space_motion_1041();
token *space_A_1042();
token *space_A_1042_1();
token *space_A_1042_2();
token *space_A_1042_3();
token *space_B_1043();
token *space_B_1043_1();
token *space_B_1043_2();
token *space_B_1043_3();
token *space_C_1044();
token *space_offset_1045();
token *space_offset_1045_1();
token *space_offset_1045_2();
token *space_intval_1046();
token *space_intval_1046_1();
token *space_intval_1046_2();
token *space_intval_1046_3();
token *space_intval_1046_4();
token *space_intval_1046_5();
token *space_intval_A_1047();
token *space_intval_A_1047_1();
token *space_intval_A_1047_2();
token *space_intval_A_1047_3();
token *space_direction_1048();
token *space_direction_1048_1();
token *space_direction_1048_2();
token *interval_modifier_1050();
token *interval_modifier_1050_1();
token *interval_modifier_1050_2();
token *interval_modifier_1050_3();
token *interval_property_1051();
token *interval_property_1051_1();
token *interval_property_1051_2();
token *interval_property_1051_3();
token *interval_property_1051_4();
token *event_mod_1052();
token *event_mod_1052_1();
token *event_mod_1052_2();
token *event_mod_A_1053();
token *event_mod_A_1053_1();
token *event_mod_A_1053_2();
token *event_mod_A_1053_3();
token *event_mod_A_1053_4();
