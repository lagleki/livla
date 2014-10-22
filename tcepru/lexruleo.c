/* Copyright 1992-2003 Logical Language Group Inc.
   Licensed under the Academic Free License version 2.0 */

# include "lojban.h"
# include "lexrules.h"

/* Module for lexer rule O: tenses */

/*
lexer_O_970             :  lexer_O_715  simple_tense_modal_972
                        ;

simple_tag_971          :  simple_tense_modal_972
                        |  simple_tag_971  simple_JOIK_JEK_957  simple_tense_modal_972
                        ;


simple_tense_modal_972 :  simple_tense_modal_A_973
                        |  NAhE_583  simple_tense_modal_A_973
                        |  CUhE_522
                        |  KI_554
                        ;

simple_tense_modal_A_973:  modal_974
                        |  modal_974  KI_554
                        |  tense_A_977
                        ;

modal_974               :  modal_A_975
                        |  modal_A_975  NAI_581
                        ;

modal_A_975             :  BAI_502
                        |  SE_596  BAI_502
                        ;

tense_A_977             :  tense_B_978
                        |  tense_B_978  KI_554
                        ;

tense_B_978             :  tense_C_979
                        |  CAhA_514
                        |  tense_C_979  CAhA_514
                        ;

tense_C_979             :  time_1030
                        |  space_1040
                        |  time_1030  space_1040
                        ;


time_1030               :  ZI_624
                        |  ZI_624  time_A_1031
                        |  time_A_1031
                        ;

time_A_1031             :  time_B_1032
                        |  time_interval_1034
                        |  time_B_1032  time_interval_1034
                        ;

time_B_1032             :  time_offset_1033
                        |  time_B_1032  time_offset_1033
                        ;


time_offset_1033        :  time_direction_1035
                        |  time_direction_1035  ZI_624
                        ;


time_interval_1034      :  ZEhA_622
                        |  ZEhA_622  time_direction_1035
                        |  interval_modifier_1050
                        |  ZEhA_622  interval_modifier_1050
                        |  ZEhA_622  time_direction_1035  interval_modifier_1050
                        ;


time_direction_1035     :  PU_592
                        |  PU_592  NAI_581
                        ;


space_1040              :  space_A_1042
                        |  space_motion_1041
                        |  space_A_1042  space_motion_1041
                        ;


space_motion_1041       :  MOhI_577  space_offset_1045
                        ;

space_A_1042            :  VA_613
                        |  VA_613  space_B_1043
                        |  space_B_1043
                        ;

space_B_1043            :  space_C_1044
                        |  space_intval_1046
                        |  space_C_1044  space_intval_1046
                        ;

space_C_1044            :  space_offset_1045
                        |  space_C_1044  space_offset_1045
                        ;


space_offset_1045       :  space_direction_1048
                        |  space_direction_1048  VA_613
                        ;


space_intval_1046       :  space_intval_A_1047
                        |  space_intval_A_1047  space_direction_1048
                        |  FEhE_530  interval_modifier_1050
                        |  space_intval_A_1047  FEhE_530  interval_modifier_1050
                        |  space_intval_A_1047  space_direction_1048
                                  FEhE_530  interval_modifier_1050
                        ;


space_intval_A_1047     :  VEhA_615
                        |  VIhA_616
                        |  VEhA_615  VIhA_616
                        ;

space_direction_1048    :  FAhA_528
                        |  FAhA_528  NAI_581
                        ;



interval_modifier_1050  :  interval_property_1051
                        |  interval_property_1051  event_mod_1052
                        |  event_mod_1052
                        ;

interval_property_1051  :  number_root_961  ROI_594
                        |  number_root_961  ROI_594  NAI_581
                        |  TAhE_604
                        |  TAhE_604  NAI_581
                        ;

event_mod_1052          :  event_mod_A_1053
                        |  event_mod_1052  event_mod_A_1053
                        ;

event_mod_A_1053        :  ZAhO_621
                        |  ZAhO_621  NAI_581
                        |  ZAhO_621  interval_property_1051
                        |  ZAhO_621  NAI_581  interval_property_1051
                        ;
*/

token *lexer_O_970_driver()
	{
	return cpd_reduce(simple_tense_modal_972(), 970);
	}

token *simple_tag_971()
	{
	int nexttype;
	START(971);
	tok = gettoken();
	nexttype = tok->type;
	fail(tok);
	switch (nexttype) {
	case BAI_502:
	case CAhA_514:
	case CUhE_522:
	case FAhA_528:
	case FEhE_530:
	case KI_554:
	case MOhI_577:
	case NAhE_583:
	case PU_592:
	case SE_596:
	case TAhE_604:
	case VA_613:
	case VEhA_615:
	case VIhA_616:
	case ZAhO_621:
	case ZEhA_622:
	case ZI_624:
		TRY(simple_tag_971_12); break;
		}
	END;
	}

token *simple_tag_971_12()
	{
	token *joikjek;
	INIT;

	CALL(simple_tense_modal_972);
	for (;;) {
		joikjek = simple_JOIK_JEK_957();
		if (!joikjek) {
			RETURN;
			}
		tok = simple_tense_modal_972();
		if (!tok) {
			fail(joikjek);
			RETURN;
			}
		add(result, joikjek);
		add(result, tok);
		result->type = 971;
		tok = newtoken();
		add(tok, result);
		result = tok;
		}
	}

token *simple_tense_modal_972()
	{
	START(972);
	TRY(simple_tense_modal_972_1);
	TRY(simple_tense_modal_972_2);
        TRY(simple_tense_modal_972_3);
        TRY(simple_tense_modal_972_4);
	END;
	}

token *simple_tense_modal_972_1()
	{
	INIT;
	CALL(simple_tense_modal_A_973);
	RETURN;
	}

token *simple_tense_modal_972_2()
	{
	INIT;
	IS(NAhE_583);
	CALL(simple_tense_modal_A_973);
	RETURN;
	}

token *simple_tense_modal_972_3()
	{
	INIT;
	IS(CUhE_522);
	RETURN;
	}

token *simple_tense_modal_972_4()
	{
	INIT;
	IS(KI_554);
	RETURN;
	}

token *simple_tense_modal_A_973()
	{
	START(973);
	TRY(simple_tense_modal_A_973_2);
	TRY(simple_tense_modal_A_973_1);
	TRY(simple_tense_modal_A_973_3);
	END;
	}

token *simple_tense_modal_A_973_1()
	{
	INIT;
	CALL(modal_974);
	RETURN;
	}

token *simple_tense_modal_A_973_2()
	{
	INIT;
	CALL(modal_974);
	IS(KI_554);
	RETURN;
	}

token *simple_tense_modal_A_973_3()
	{
	INIT;
	CALL(tense_A_977);
	RETURN;
	}

token *modal_974()
	{
	START(974);
	TRY(modal_974_2);
	TRY(modal_974_1);
	END;
	}

token *modal_974_1()
	{
	INIT;
	CALL(modal_A_975);
	RETURN;
	}

token *modal_974_2()
	{
	INIT;
	CALL(modal_A_975);
	IS(NAI_581);
	RETURN;
	}

token *modal_A_975()
	{
	START(973);
	TRY(modal_A_975_1);
	TRY(modal_A_975_2);
	END;
	}

token *modal_A_975_1()
	{
	INIT;
	IS(BAI_502);
	RETURN;
	}

token *modal_A_975_2()
	{
	INIT;
	IS(SE_596);
	IS(BAI_502);
	RETURN;
	}

token *tense_A_977()
	{
	START(977);
	TRY(tense_A_977_2);
	TRY(tense_A_977_1);
	END;
	}

token *tense_A_977_1()
	{
	INIT;
	CALL(tense_B_978);
	RETURN;
	}

token *tense_A_977_2()
	{
	INIT;
	CALL(tense_B_978);
	IS(KI_554);
	RETURN;
	}

token *tense_B_978()
	{
	START(978);
	TRY(tense_B_978_3);
	TRY(tense_B_978_1);
	TRY(tense_B_978_2);
	END;
	}

token *tense_B_978_1()
	{
	INIT;
	CALL(tense_C_979);
	RETURN;
	}

token *tense_B_978_2()
	{
	INIT;
	IS(CAhA_514);
	RETURN;
	}

token *tense_B_978_3()
	{
	INIT;
	CALL(tense_C_979);
	IS(CAhA_514);
	RETURN;
	}

token *tense_C_979()
	{
	START(979);
	TRY(tense_C_979_3);
	TRY(tense_C_979_1);
	TRY(tense_C_979_2);
	END;
	}

token *tense_C_979_1()
	{
	INIT;
	CALL(time_1030);
	RETURN;
	}

token *tense_C_979_2()
	{
	INIT;
	CALL(space_1040);
	RETURN;
	}

token *tense_C_979_3()
	{
	INIT;
	CALL(time_1030);
	CALL(space_1040);
	RETURN;
	}

token *time_1030()
	{
	START(1030);
	TRY(time_1030_2);
	TRY(time_1030_1);
	TRY(time_1030_3);
	END;
	}

token *time_1030_1()
	{
	INIT;
	IS(ZI_624);
	RETURN;
	}

token *time_1030_2()
	{
	INIT;
	IS(ZI_624);
	CALL(time_A_1031);
	RETURN;
	}

token *time_1030_3()
	{
	INIT;
	CALL(time_A_1031);
	RETURN;
	}

token *time_A_1031()
	{
	START(1031);
	TRY(time_A_1031_3);
	TRY(time_A_1031_1);
	TRY(time_A_1031_2);
	END;
	}

token *time_A_1031_1()
	{
	INIT;
	CALL(time_B_1032);
	RETURN;
	}

token *time_A_1031_2()
	{
	INIT;
	CALL(time_interval_1034);
	RETURN;
	}

token *time_A_1031_3()
	{
	INIT;
	CALL(time_B_1032);
	CALL(time_interval_1034);
	RETURN;
	}

token *time_B_1032()
	{
	INIT;
	CALL(time_offset_1033);
	for (;;) {
		tok = time_offset_1033();
		if (!tok) {
			RETURN;
			}
		add(result, tok);
		}
	}

token *time_offset_1033()
	{
	START(1033);
	TRY(time_offset_1033_2);
	TRY(time_offset_1033_1);
	END;
	}

token *time_offset_1033_1()
	{
	INIT;
	CALL(time_direction_1035);
	RETURN;
	}

token *time_offset_1033_2()
	{
	INIT;
	CALL(time_direction_1035);
	IS(ZI_624);
	RETURN;
	}

token *time_interval_1034()
	{
	START(1034);
	TRY(time_interval_1034_5);
	TRY(time_interval_1034_4);
	TRY(time_interval_1034_3);
	TRY(time_interval_1034_2);
	TRY(time_interval_1034_1);
	END;
	}

token *time_interval_1034_1()
	{
	INIT;
	IS(ZEhA_622);
	RETURN;
	}

token *time_interval_1034_2()
	{
	INIT;
	IS(ZEhA_622);
	CALL(time_direction_1035);
	RETURN;
	}

token *time_interval_1034_3()
	{
	INIT;
	CALL(interval_modifier_1050);
	RETURN;
	}

token *time_interval_1034_4()
	{
	INIT;
	IS(ZEhA_622);
	CALL(interval_modifier_1050);
	RETURN;
	}

token *time_interval_1034_5()
	{
	INIT;
	IS(ZEhA_622);
	CALL(time_direction_1035);
	CALL(interval_modifier_1050);
	RETURN;
	}

token *time_direction_1035()
	{
	START(1035);
	TRY(time_direction_1035_2);
	TRY(time_direction_1035_1);
	END;
	}

token *time_direction_1035_1()
	{
	INIT;
	IS(PU_592);
	RETURN;
	}

token *time_direction_1035_2()
	{
	INIT;
	IS(PU_592);
	IS(NAI_581);
	RETURN;
	}

token *space_1040()
	{
	START(1040);
	TRY(space_1040_3);
	TRY(space_1040_1);
	TRY(space_1040_2);
	END;
	}

token *space_1040_1()
	{
	INIT;
	CALL(space_A_1042);
	RETURN;
	}

token *space_1040_2()
	{
	INIT;
	CALL(space_motion_1041);
	RETURN;
	}

token *space_1040_3()
	{
	INIT;
	CALL(space_A_1042);
	CALL(space_motion_1041);
	RETURN;
	}

token *space_motion_1041()
	{
	INIT;
	IS(MOhI_577);
	CALL(space_offset_1045);
	RETURN;
	}

token *space_A_1042()
	{
	START(1042);
	TRY(space_A_1042_2);
	TRY(space_A_1042_1);
	TRY(space_A_1042_3);
	END;
	}

token *space_A_1042_1()
	{
	INIT;
	IS(VA_613);
	RETURN;
	}

token *space_A_1042_2()
	{
	INIT;
	IS(VA_613);
	CALL(space_B_1043);
	RETURN;
	}

token *space_A_1042_3()
	{
	INIT;
	CALL(space_B_1043);
	RETURN;
	}

token *space_B_1043()
	{
	START(1043);
	TRY(space_B_1043_3);
	TRY(space_B_1043_1);
	TRY(space_B_1043_2);
	END;
	}

token *space_B_1043_1()
	{
	INIT;
	CALL(space_C_1044);
	RETURN;
	}

token *space_B_1043_2()
	{
	INIT;
	CALL(space_intval_1046);
	RETURN;
	}

token *space_B_1043_3()
	{
	INIT;
	CALL(space_C_1044);
	CALL(space_intval_1046);
	RETURN;
	}

token *space_C_1044()
	{
	INIT;
	CALL(space_offset_1045);
	for (;;) {
		tok = space_offset_1045();
		if (!tok) {
			RETURN;
			}
		add(result, tok);
		}
	}

token *space_offset_1045()
	{
	START(1045);
	TRY(space_offset_1045_2);
	TRY(space_offset_1045_1);
	END;
	}

token *space_offset_1045_1()
	{
	INIT;
	CALL(space_direction_1048);
	RETURN;
	}

token *space_offset_1045_2()
	{
	INIT;
	CALL(space_direction_1048);
	IS(VA_613);
	RETURN;
	}

token *space_intval_1046()
	{
	START(1046);
	TRY(space_intval_1046_5);
	TRY(space_intval_1046_4);
	TRY(space_intval_1046_3);
	TRY(space_intval_1046_2);
	TRY(space_intval_1046_1);
	END;
	}

token *space_intval_1046_1()
	{
	INIT;
	CALL(space_intval_A_1047);
	RETURN;
	}

token *space_intval_1046_2()
	{
	INIT;
	CALL(space_intval_A_1047);
	CALL(space_direction_1048);
	RETURN;
	}

token *space_intval_1046_3()
	{
	INIT;
	IS(FEhE_530);
	CALL(interval_modifier_1050);
	RETURN;
	}

token *space_intval_1046_4()
	{
	INIT;
	CALL(space_intval_A_1047);
	IS(FEhE_530);
	CALL(interval_modifier_1050);
	RETURN;
	}

token *space_intval_1046_5()
	{
	INIT;
	CALL(space_intval_A_1047);
	CALL(space_direction_1048);
	IS(FEhE_530);
	CALL(interval_modifier_1050);
	RETURN;
	}

token *space_intval_A_1047()
	{
	START(1047);
	TRY(space_intval_A_1047_3);
	TRY(space_intval_A_1047_1);
	TRY(space_intval_A_1047_2);
	END;
	}

token *space_intval_A_1047_1()
	{
	INIT;
	IS(VEhA_615);
	RETURN;
	}

token *space_intval_A_1047_2()
	{
	INIT;
	IS(VIhA_616);
	RETURN;
	}

token *space_intval_A_1047_3()
	{
	INIT;
	IS(VEhA_615);
	IS(VIhA_616);
	RETURN;
	}

token *space_direction_1048()
	{
	START(1048);
	TRY(space_direction_1048_2);
	TRY(space_direction_1048_1);
	END;
	}

token *space_direction_1048_1()
	{
	INIT;
	IS(FAhA_528);
	RETURN;
	}

token *space_direction_1048_2()
	{
	INIT;
	IS(FAhA_528);
	IS(NAI_581);
	RETURN;
	}

token *interval_modifier_1050()
	{
	START(1050);
	TRY(interval_modifier_1050_2);
	TRY(interval_modifier_1050_1);
	TRY(interval_modifier_1050_3);
	END;
	}

token *interval_modifier_1050_1()
	{
	INIT;
	CALL(interval_property_1051);
	RETURN;
	}

token *interval_modifier_1050_2()
	{
	INIT;
	CALL(interval_property_1051);
	CALL(event_mod_1052);
	RETURN;
	}

token *interval_modifier_1050_3()
	{
	INIT;
	CALL(event_mod_1052);
	RETURN;
	}

token *interval_property_1051()
	{
	START(1051);
	TRY(interval_property_1051_2);
	TRY(interval_property_1051_1);
	TRY(interval_property_1051_4);
	TRY(interval_property_1051_3);
	END;
	}

token *interval_property_1051_1()
	{
	INIT;
	CALL(number_root_961);
	IS(ROI_594);
	RETURN;
	}

token *interval_property_1051_2()
	{
	INIT;
	CALL(number_root_961);
	IS(ROI_594);
	IS(NAI_581);
	RETURN;
	}

token *interval_property_1051_3()
	{
	INIT;
	IS(TAhE_604);
	RETURN;
	}

token *interval_property_1051_4()
	{
	INIT;
	IS(TAhE_604);
	IS(NAI_581);
	RETURN;
	}

token *event_mod_1052()
	{
	START(1052);
	TRY(event_mod_1052_2);
	TRY(event_mod_1052_1);
	END;
	}

token *event_mod_1052_1()
	{
	INIT;
	CALL(event_mod_A_1053);
	RETURN;
	}

token *event_mod_1052_2()
	{
	INIT;
	CALL(event_mod_A_1053);
	CALL(event_mod_1052);
	RETURN;
	}

token *event_mod_A_1053()
	{
	START(1053);
	TRY(event_mod_A_1053_4);
	TRY(event_mod_A_1053_3);
	TRY(event_mod_A_1053_2);
	TRY(event_mod_A_1053_1);
	END;
	}

token *event_mod_A_1053_1()
	{
	INIT;
	IS(ZAhO_621);
	RETURN;
	}

token *event_mod_A_1053_2()
	{
	INIT;
	IS(ZAhO_621);
	IS(NAI_581);
	RETURN;
	}

token *event_mod_A_1053_3()
	{
	INIT;
	IS(ZAhO_621);
	CALL(interval_property_1051);
	RETURN;
	}

token *event_mod_A_1053_4()
	{
	INIT;
	IS(ZAhO_621);
	IS(NAI_581);
	CALL(interval_property_1051);
	RETURN;
	}

