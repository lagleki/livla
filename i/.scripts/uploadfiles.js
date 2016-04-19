var log = console.log.bind(console);
p = function (object) {
  return JSON.stringify(object);
};


var request = require("request");
var libxmljs = require("libxmljs");
var path = require("path-extra");
var fs = require("fs");
var si = require("serve-index");

//MediaWiki editing
function readConfig(filename) {
	var configDirectory = path.join(path.homedir(),".livla");
	ensureDirExistence(configDirectory);
	file = path.join(configDirectory, filename);
	try {
		return fs.readFileSync(file,{encoding: 'utf8'});
	} catch (e) {
		// If we get an “ENOENT” error, we return an empty string.
		// Other errors are still thrown.
		if (typeof(e.code) === "undefined" || e.code !== 'ENOENT') {
			throw e;
		}
		return "";
	}
}

function downloadurlis (input){
	var request = require("request");
	for (var i=0;i<input.length;i++){
		var zoo=input[i];
		var uri = "https://commons.wikimedia.org/w/api.php?action=query&titles=File:"+escape(zoo)+"&prop=imageinfo&&iiprop=url&format=json";
		request.get(uri, zoo, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var myRegexp = /\"url\":\"(.*?)\"/;
				var out;
				var match = myRegexp.exec(body.replace(/\n/g,""));
				try{
					out = match[1];
					mw_edit(out);
					//return callback(out);
				}catch(err){
					//return;
				}
			}
		});
	}
}

downloadurlis([":Región_Huasteca.png",":Rosetta_Stone.jpg","040517-A-0259W-061a.jpg","050607 M 5900L 044.jpg","06-10-06rightcentralincisor.jpg","11-crust balled.jpg","20050501 1315 2558-Bimetall-Zeigerthermometer.jpg","2005-09-02-hochzeit-51-korrigiert.jpg","2005-Penny-Uncirculated-Obverse-cropped.png","2006 0220Huechulaufquen0037.JPG","20060513_toolbox.jpg","24 September 2005 protest in Washington DC.jpg","24_hour_analog_clock_rua_24_horas_curitiba_brasil.jpg","2503 - KZ Dachau - Trench.JPG","2Beach batumi.jpg","2xgalopp.JPG","3 4 fraction.svg","5aday_salad.jpg","95_year_old_woman.JPG","9-Week Human Embryo from Ectopic Pregnancy.jpg","A small cup of coffee.JPG","A_romantic_message_in_reverse,_1908.JPG","A_single_white_feather_closeup.jpg","Abfalleimer P6300134a.JPG","Actress-fear-and-panic.jpg","Africa satellite plane.jpg","African American worker Richmond Shipyards.jpg","African Lion Panthera leo Male Pittsburgh 2800px.jpg","Afrikanischer Elefant, Miami.jpg","Agiospavlos DM 2004 IMG003 Felsenformation nahe.JPG","Ag-TableImage.svg","Ahimelech Giving the Sword of Goliath to David.jpg","Air traffic controller schiphol tower.jpg","Aircraft wing flaps small dsc06830.jpg","Aitutaki sunset 1.jpg","Albion.svg","Alice's Adventures Under Ground, by Lewis Carroll - facsimile page - Project Gutenberg eText 19002.jpg","Alpheratz.gif","Alpine Butterfly Bend Final.jpg","Ambersweet oranges.jpg","Amish_-_On_the_way_to_school_by_Gadjoboy.jpg","Amsterdam tramlijn 10.svg","Anal bleaching.jpg","Animalia diversity.jpg","Animated flower.GIF","Animation binaire eclipses 1.gif","Annie_Get_Your_Gun_1.jpg","Ann-Margret35.JPG","Ant (Jacob Eckert).svg","Antarctica_6400px_from_Blue_Marble.jpg","Apis_mellifera_bi.jpg","Apollo 15 launch.jpg","Apple seeds - variety Regia (aka).jpg","Arab world.png","Archeologists taking measurement for a new dig 0103.jpg","Arctic.svg","Argue.gif‎","Arm muscles front superficial.png","arm.agr.jpg","Army.afnews.jpg","Asia satellite orthographic.jpg","Assiette hannong2.JPG","Assorted grains.jpg","Ath (alphabet).png","Australian cart.jpg","Au-TableImage.png","Auto Mechanic.jpg","Axle (PSF).png","Azurite with malachite and others.jpg","Babasteve-three boys.jpg","Balance beam GMM.jpg","Balkong, Nordisk familjebok.png","ball.agr.jpg","Ballroom dance exhibition.jpg","Banana.png","Bar-91 burger, curly fries and salad.jpg","Baskets four styles.jpg","Battle_of_Langensalza.jpg","Bayer pattern.svg","B-Disappear.gif‎","bed.agr.jpg","Begging (8406156835).jpg","Belle robe avec paillettes.jpg","Belly button.jpg","Béryl_var._émeraude_sur_gangue_(Muzo_Mine_Boyaca_-_Colombie)_15.jpg","Beyonce sings Listen.jpg","Biandintz eta zaldiak - modified2.jpg","Bikini Model Jassi 3.jpg","Billets_de_5000.jpg","Billy goat.jpg","Bimetal_coil_reacts_to_lighter.gif","Black bold spiral.svg","Blade steak.jpg","blade.agr.jpg","Blades of grass.jpg","Blank-man-face.jpg","Blank-woman-face.jpg","Bleeding finger.jpg","Blue Tit aka.jpg","board.agr.jpg","Boelge stor.jpg","Boiling_water_(Heat_Engines,_1913).jpg","Bomb.svg","Bombo.JPG","Bono U2 with Horst Köhler at Prague 2000 IMF.jpeg","Book of Hours detail.jpg","boot.agr.jpg","Bottle.agr.jpg","box.agr.jpg","Boxing_competition_at_the_1984_Summer_Olympics.jpg","brake.agr.jpg","branch.agr.jpg","Brass.jpg","brick.agr.jpg","Bright light lamp.jpg","Brillanten.jpg","Broken glass.jpg","Brown bear (Ursus arctos arctos) running.jpg","Brown Hare444.jpg","Buchmann.jpg","bucket.agr.jpg","Buddhism symbol.PNG","bulb.jpg","Business class meal - appetizer.jpg","Butter with a butter knife.jpg","Buttons.jpg","Canal du midi toulouse.jpg","Canlu.png","Cannabis 01 bgiu.jpg","Canon Digital Ixus 430.jpg","Captain Kidd hanging.jpg","Caricatura_de_Darwin.jpg‎","CBGB closed.JPG","Cello study.jpg","Central Obesity 011.jpg","Ceramic planter from the Ming Dynasty.jpg","Cercopithecus.cephus.behind.bars.jpg","CH Rooster 1.jpg","Chaine.jpg","Chair.png","Chalk.jpg","Champagne cork.jpg","chapeauclaque.jpg","Characteristic_rock_drum_pattern.png","Charles, Prince of Wales.jpg","Cheeseburger.jpg","Cheval en érection.jpg","Chevrolet Captiva rear door open.jpg","Chicago Union Station 1943.jpg","Children in Namibia(1 cropped).jpg","Chocolate en Rama.jpg","Christmas Ornament.jpg","Christopher Columbus whaleback tintedPostcard ebay back.jpg","Church nove zvolani 2.jpg","Circaetus gallicus claw.jpg","Circle - black simple.svg","Citrus fruits.jpg","Classroom_at_a_seconday_school_in_Pendembu_Sierra_Leone.jpg","Claude Moliterni Torino Comics 2006 explain Little Nemo.jpg","Clawfoot bathtub.jpg","Clock in Kings Cross.jpg","Cloth 800.jpg","Cl-TableImage.png","Clubbing foot.jpg","Coal.jpg","Coca-Cola_in_Israel.jpg","Coccidioidomycosis_granulomas_on_forehead.png","Cockroachcloseup.jpg","collar.agr.jpg","Comb.png","CompassRose16 E.png","CompassRose16 N.png","CompassRose16 S.png","CompassRose16 W.png","Computer-aj_aj_ashton_01.svg","Cone.png","Config-date.png","Conifer forest.jpg","Cooks 050918 154402.jpg","Coordonnees polaires plan.png","Copenhagen H 1.jpg","Cophites.jpg","Copper object.JPG","cord.agr.jpg","CottonPlant.JPG","Counting Hands 3.png","Cow and patty.jpg","Cow_female_black_white.jpg","Coyotekilling.jpg","Craigievar_Castle_in_Autumn.jpg","Crazy football catch.jpg","Credit-cards.jpg","Crveni karton.jpg","Crying-girl.jpg","C-TableImage.png","Cube.svg","Cuboid sugar.jpg","curtain.agr.jpg","cushion.agr.jpg","Cu-TableImage.png","Cyan-square.png","Dallas skyline and suburbs.jpg","Dalmatian and Dobermann fight.jpg","DANA 2004 ubt.jpeg","Danger.png","Dead Opossum.jpg","Dead_End_at_Icknield_Street_-_geograph.org.uk_-_175668.jpg","Deep_water_wave.gif","Definition-of-tan.svg","Desclot1.jpg","Dessert Spoon.jpg","Different.PNG","Digestive system whitout labels.svg","Digging in permafrost.jpg","Digicel_volunteers_deliver_aid_in_Port-au-Prince_2010-02-03.JPG","Dios.jpg","Disposable nitrile glove.jpg","Distant_farm_-_geograph.org.uk_-_28826.jpg","Distribution cinema 1.jpg","Divemaster-ready-to-go.jpg","Dog wearing shades.jpg","Domestic cat cropped.jpg","Don Sak Wat Khao Suwan Pradit.jpg","Donkey.jpg","Dourtenga dry lake.JPG","Down-small.svg","Dr Ariyaratne in discussion.jpg","drain.agr.jpg","drawer.agr.jpg","Drinking horse.jpg","Drop of water 2003 03.jpg","Droste Haus.jpg","Droste Haus.jpg","Drunk woman vomits.jpg","Ducks_in_plymouth, _massachusetts.jpg","DundurnStreetStairway.JPG","Dyed wool - Salinas.jpg","Dzwon z Jasnej Góry.jpg","EAN-Obst.jpg","Ear.jpg","Eating an oyster.jpg","Edouard Manet 004.jpg","Édouard-Henri Avril (16).jpg","egg.jpg","Egypte louvre 284.jpg","Eis-3.jpg","EisriesenweltRockLayer.jpg","EJ Smith.jpg","ELAL 747-200 4X-AHQ EPWA 24 08 2004.jpg","Elastico-animacao.gif","Elfo red.jpg","Emmentaler.jpg","Empty tin can2009-01-19.jpg","Enfants et télé au Mali.jpg","Epithelial-cells.jpg","Equal.svg","Et baal.jpg","Europe satellite orthographic.jpg","Exploding landmine (16958280).jpg","Exponentials.png","Face of SpooSpa.jpg","Family67.JPG","Farmer plowing.jpg","Farming near Klingerstown, Pennsylvania.jpg","Faroe stamp 011 east coast of vagar 300 oyru.jpg","Female_genitalia.JPG","FemalePink.png","Fe-TableImage.png","Fetzer Field.jpg","Feuerreiben.gif","Field-with-snow-champ-enneige.jpg","Fig.jpg","finger.agr.jpg","Finland military band singing.jpg","Fire ants.jpg","Fishing_boat_ORL-3_Gdynia_Poland_2003_ubt.JPG","Flag of Australia.svg","Flag of Bangladesh.svg","Flag of Brazil.svg","Flag of Canada.svg","Flag of Egypt.svg","Flag of France.svg","Flag of Germany.svg","Flag of Greece.svg","Flag of India.svg","Flag of Indonesia.svg","Flag of Iraq.svg","Flag of Israel.svg","Flag of Japan.svg","Flag of Jordan.svg","Flag of Lebanon.svg","Flag of Libya.svg","Flag of Malaysia.svg","Flag of Mexico.svg","Flag of Morocco.svg","Flag of Pakistan.svg","Flag of Portugal.svg","Flag of Russia.svg","Flag of Saudi Arabia.svg","Flag of Spain.svg","Flag of Syria.svg","Flag of the People's Republic of China.svg","Flag of the Soviet Union.svg","Flag of the United Kingdom.svg","Flag of the United States.svg","Flag of Ukraine.svg","Flag_of_Argentina.svg","Flag_of_England.svg","Flag_of_Palestine.svg","Flag_of_Scotland.svg","Flamingos flying.jpg","Flock_of_sheep.jpg","floor.agr.jpg","Floración_del_melocotonero.jpg","Flushing toilet.jpg","foot-outside.jpg","Ford_Motor_Company_assembly_line.jpg","foreskin2.jpg","Forgive,_and_ye_shall_be_forgiven.jpg","fork.agr.jpg","Fork_in_the_road._-_geograph.org.uk_-_16333.jpg","Fortnum&amp;Mason Fruit and Flowers2.jpg","Foucault pendulum animated.gif","Four seasons.jpg","Four temperament b.PNG","Fourcolor buttock.gif","frame.agr.jpg","Freezing_rain.jpg","French bread DSC00865.JPG","French horn front.png","Frog žába.gif","Fruit seller.jpg","Fruits Luc Viatour.jpg","Fun socks.png","Fuzzy_Freddy.jpg","Garlic.jpg","Geometrie_carre.png","GeorgianischeTuer.JPG","GeorgianischeTuer.JPG","German Pinscher.JPG","Geschweisster schienenstoss.jpeg","GGrandKiss.jpg","Giant Haasts eagle attacking New Zealand moa.jpg","Glass with liquid.jpg","Glasstopfen BMK.jpg","Gnome-face-angry.svg","Gnome-face-embarrassed.svg","Gnome-face-sad.svg","Gnome-face-smile.svg","Gordie_want_birthday_cake_stereographic_parallel.png","Goya9.jpg","Grand Canyon NP-Arizona-USA.jpg","Green square.svg","Grilling-tongs.png","Grosswulkow Pumpe.jpg","Groundhogpetting.jpg","Gymnasta.jpg","Hail Hagel.jpg","Hair wax.jpg","Hair.jpg","hairbrush.jpg","hairbrush.jpg","hammer.jpg","Han clothing Hanfu movement.jpg","Hand held phone in car.JPG","Handkerchief.jpg","Hangmans Noose.jpg","Hanzomon line jp.gif","Hapci-fr.gif","Haverkorrels Avena sativa.jpg","Hazelnuts.jpg","Headphones Piercing.jpg","Heart diastole.png","Heavy Rain.jpg","Helpers carrying loads on their heads on Mt Kilimanjaro.JPG","Henri dunant 3 restaurant.jpg","Henry IV of france by pourbous younger.jpg","Hg-TableImage.png","Highway_A4_Poland_05.jpg","Hispanoamerica.PNG","HN049Du-sAB DistTownVu.jpg","HN999sRamon~Father+son.jpg","Honda CBX Engine Detail.jpg","hook.agr.jpg","Hordeum-barley.jpg","Hospital room ubt.jpeg","Hot_Sauce-Pain_100_percent.jpg","House mouse.jpg","House Number Peru Cusco.jpg","Housefly_mating.jpg","Howlsnow.jpg","H-TableImage.png","Huge door.jpg","Human 2.jpg","Human brain NIH.jpg","Human-nose.jpg","Humerus ant.jpg","Hutchens-baby.jpg","Hutterer-Crystal Schule2.jpg","Hydra1.gif","Iberian wolf.jpg","Identification_card_JAPAN.jpg","Img20050526 0007 at tannheim cumulus.jpg","Indonesian Passport.JPG","Infancia 2.jpg","Infinite.svg","Injuredicon.svg","Inkscape-Latex-output.svg","Inktpotjes.JPG","Insects Plate 2 (Discoveries in Australia).jpg","Iraqi doctor.jpg","Islamic symbol.PNG","Jars.jpg","Jasmine_gets_a_hug.jpg","Jean-Bernard Restout - Diogenes Asking for Alms.jpg","Jeans.jpg","Jenga.gif","JRticket.jpg","Justice_and_law.svg","Kalabrien Ricadi Mond 2533.jpg","Kalabrien Ricadi Sandwellen 2129.jpg","Kante berlin05 1.JPG","Karvionkoski rapids.jpg","kettle.agr.jpg","key.agr.jpg","Kheops-Pyramid.jpg","Khrenovina-sauce.jpg","Kidney beans.jpg","Kiefer_Holz.JPG","klama.jpg","Klavier_Tastatur.jpg","knee.female.jpg","Kob horns.jpg","Konferencja Wikimedia 2007 - zagubieni w akcji - Nemo5576 śpiący w pociągu.jpg","Kopfsprung.JPG","Ladybird-animation.gif","LastSupper-GardenOfFineArtKyoto.jpg","Leaders welcoming boy into Mexico Scouting.jpg","Leaf 1 web.jpg","Lego mess.jpg","legs.jpg","Lethwei-Hight-kick.jpg","Letter.jpg","Library book shelves.jpg","Liegestuetz02 ani fcm.gif","Lightmatter Hsi Lai Temple Arhat Garden.jpg","Lightning3.jpg","Liku3.jpg","Lincoln memorial columns.jpg","Line_Segment_jaredwf.svg‎","lip.agr.jpg","Liqueur cointreau.jpg","Logan Rock Treen closeup.jpg","Logarithms.png","Lojbanlogo.svg","Lomito1.jpg","London.bankofengland.arp.jpg","Louse (PSF).png","Love message.jpg","Luidspreker kef.jpg","Lycaena virgaureae.JPG","Macro Biro tip.jpg","Mad_scientist.svg","Maersk Elba.JPG","Mag glass request.jpg","Magenta-square.gif","MagnetEZ.jpg","Maisonettes_getting_knocked_down_-_geograph.org.uk_-_234764.jpg","Malachite bead necklace.jpg","Male Chest by David Shankbone.jpg","Male model D 05.JPG","Male north american turkey supersaturated.jpg","Mamíferos.jpg","Man making a grimace.jpg","Man sitting under beach umbrella.JPG","Manchas.png","Manual harvest in Tirumayam.jpg","Mars Opportunity May 2007 Berries Crack.JPG","Marte revisitado.jpg","Martinet.jpg","Matches.jpg","Meanwood Park Picnic.jpg","MemoryFoam-fast.jpg","Mens clothes lilac.JPG","Menschliches_auge.jpg","Merida-street.jpg","Metal whistle.jpg","Middle Age-road.JPG","Miles Ehrlich, judge.jpg","Military dog attack.JPG","Milk glass.jpg","Millikan’s oil-drop apparatus 1.jpg","MiniSkirt.jpg","Mirror.jpg","Miss World 07 ZiLin Zhang.jpg","Missione del Guaricano-discarica di Duquesa.jpg","Modern telephone.jpg","Modulation On.jpg","Mogadishu UNOSOM classroom.jpg","Monitor.jpg","Monty open door chances.svg","moon.jpg","Moos.jpg","Mouche verte.jpg","MousseRivièreSaguenay.JPG","Mouth.jpg","MovableBridge table.gif","Moving Penny.gif","Mr Muscle.jpg","Music cover.png","Music-eighthnote.png","Muybridge horse jumping animated.gif","Muybridge race horse animated 184px.gif","MyCattle880.JPG","Nacionales W.jpg","nail.agr.jpg","Narr_haustuer.jpg","Narrow street corfu.jpg","Na-TableImage.png","Natalie Portman laughing.jpg","Nati061115.jpg","Native American Flute by Chief Arthur Two Crows.jpg","neck.agr.jpg","Needles (for sewing).jpg","nerve.nida.jpg","net.gsfc.jpg","Ne-TableImage.png","Newspapers of Japan 20090831.jpg","Newtons cradle animation new.gif","Ni-TableImage.png","North America satellite orthographic.jpg","Northwestern Arch.jpg","N-TableImage.png","Numbers.svg","Nymphaea lotus1XMATT.jpg","Oak.jpg","Oceania satellite.jpg","Oceanplanet_lucianomendez.JPG","Ognisko ubt 0126.jpeg","Oklahoma state soil.JPG","Olive baboon.jpg","Onion white background.jpg","Operator at microscope.JPG","Orange juice 1 edit1.jpg","Organ Harvesting Press Conference-David Kilgour-Belgium.jpg","O-TableImage.png","OvalOffice.whitehouse.jpg","oven.agr.jpg","P S Krøyer 1897 - Døtrene Benzon.jpg","Panicum_miliaceum0.jpg","Panorama_clip3.jpg","Panthera tigris6.jpg","Paper sheet.jpg","Parallel Lines.svg","parcel.fbi.jpg","Paring Knife.jpg","Parka1.JPG","Pb-TableImage.png","Pears.jpg","Pedestal 2 (PSF).png","Pelikan Radiergummi.jpg","pencil.jpg","Percival_Lowell_observing_Venus_from_the_Lowell_Observatory_in_1914.jpg","Periodic function illustration.svg","Petroleum.JPG","Pfeifentabak-front.jpg","Pico Yordas. Agosto 2005 (editada).jpg","Pictogram_voting_divide.svg","Pile of asphalt.jpg","Pillowtop-mattress.jpg","pin.agr.jpg","Pink knitting in front of pink sweatshirt.JPG","Pinkhart.gif","Pinus silvestris roots001xx.jpg","pipe.agr.jpg","Pistol Browning SFS.jpg","Pit bull restrained.jpg","Plants.jpg","Plastic household items.jpg","Playing with mobile.jpg","Plouézec Moulin vent Craca 9587.jpg","Poa Pan-milk.JPG","Pocket watch with chain.jpg","pocket.agr.jpg","PolicistaCeskyTesin.jpg","PolishedHooves.jpg","Polo 6N (Green).jpg","PortoCovoWinter.jpg","PortraitGirl2005-1a.jpg","pot.agr.jpg","Potatoes.jpg","PowderedMilk.jpg","Princes.jpg","Pro patria ring.jpg","Psilocybe.zapotecorum.1.jpg","PSM V04 D076 Infant shark jaw.jpg","PulleyShip.JPG","Pushing van together.jpg","Puzzled.svg","Quasiconvex function.png","Queen Beatrix cropped.JPG","Raczka4.jpg","Radian measure-def1.svg","Rainbow-Jello-Full-2004-July-30.jpg","Raspberries05.jpg","Rastkogel ski slope.jpg","Rattus norvegicus 1.jpg","receipt.agr.jpg","Reczniki papierowe.jpg","Red Apple.jpg","Red cylinder.png","Red Ribbon.svg","Red Wine Glas.jpg","RedYellowFlag.jpg","Reef.jpg","Regenwurm1.jpg","Regno d'Italia - 40 lire 1812.jpg","Reptile003d.jpg","Rice grains.jpg","Richard Hatton (boxer) training 1y2006.jpg","Road sign in Friulian.jpg","Rock wall.JPG","Rockhopper-Colony.jpg","rod.agr.jpg","Romaine.jpg","Romanian potato soup.jpg","Romantikken.JPG‎","Roofes.JPG","Rooster02.jpg","Rosa Gold Glow 2.jpg","Rotting apple.jpg","Roulette wheel.jpg","Rural Toscana.jpg","Rye bread.JPG","Rye field.jpg","Sabre bayonette carabine.jpg","Sacred cow2.jpg","Sacs of spices.JPG","SafrikaIMG 8414.JPG","Sarayi Album 10a.jpg","Sausage making-H-1.jpg","Saxophone alto.jpg","Schimmelmandarijn.jpg","Schwerer Gustav projectile 1.jpg","Scissors.jpg","screw.agr.jpg","Scrum.JPG","Senate budget committee.JPG","Sequoiadendron giganteum at Kenilworth Castle.jpg","Shadow 2752.jpg","Shallots-Whole.jpg","Shallow_water_wave.gif‎","shelf.agr.jpg","Shells Vacation.jpg","Shelter by presa (closer).jpg","shirt.jpg","Shopping bag.svg","Silkair A320-200 Economy Class cabin.JPG","SilverMorgan.jpg","Sin.svg","SI-Sky.JPG","Ski.jpg","skin.agr.jpg","Skogskyrkogarden CementeryWall1.jpg","Slavic europe.png","Smallpox vaccine.jpg","Smiley_green_alien_depresive.svg","Snake.usuhs.jpg","Sn-TableImage.png","Soccer throw in nch.jpg","Solar sys.jpg","Solid black.svg","Solid blue.svg","Solid brown.svg","Solid grey.svg","Solid orange.svg","Solid purple.png","Solid white.svg","Solid yellow.svg","Solomin_field.JPG","Sommerblumen01.JPG","South America satellite plane.jpg","Sow with piglet.jpg","spade.jpg","Spark_from_4KVA_Tesla_Coil.JPG","Spider coorg-2.jpg","sponge.noaa.jpg","Spreadsheet.png","St Agnes tending the sick.jpg","S-TableImage.png","Steenfabriek, Tolkamer, Netherlands.jpg","stem.agr.jpg","Steradian.svg","Stick.jpg","Stilles Mineralwasser.jpg","stockings.agr.jpg","Stop_sign_light_red.svg","Streptococcus pyogenes 01.jpg","STS-114_Steve_Robinson_on_Canadarm2.jpg","Stubbly face.jpg","Stylised Lithium Atom.png","Summit view.jpg","Sun spot naked eye.jpg","Sunburnt neck and shoulders.jpg","Sunrise_in_Helsinki.jpg","Sweater.gif","Synthese+.svg","table_and_chairs.jpg","Tablesalt2.jpg","TachikawaKeirin.jpg","tail.emily.jpg","Taiwanese_students_studying_English.jpg","Taro root CDC.jpg","Tasse_Gr_99.jpg","Tea leaves steeping in a zhong čaj 05.jpg","Teatro Real (Madrid) 05.jpg","Tenen.jpg","Tent@kuroyuri.jp.jpg","Testicles2.jpg","The Earth seen from Apollo 17.jpg","The Immortal Soul of the Taoist Adept.PNG","The North Wind and the Sun - Wind - Project Gutenberg etext 19994.jpg","Thin_Girl_in_black_panties,_one_hand_over_her_breasts,_the_other_arm_raised_behind_her_head.jpg","Thorax Lung 3d from ct scans.jpg","Three-pens-six-nibs.jpg","throat.agr.jpg","Thumbs up.jpg","Tick-green.png","Tiles 3.jpg","Tiny Snapping Turtle in hand.JPG","Toasting-Wedding_celebration.jpg","Tomato.jpg","tongue.agr.jpg","Tour05072304.jpg","Touwtrekken.jpg","Tower bridge 01.jpg","Traditional grip detail.jpg","Transmitlies.jpeg‎","tray.agr.jpg","TreesInTheFog.jpg","Triangular cupola.png","Tualetsapo.jpg","Tulip - floriade canberra.jpg","Tux Linux crystal award nevit.gif","Tying friendship bracelet.jpg","Uhr-morning.png","Umbrella.png","US_Navy_090327-N-9268E-023_Vice_Adm._Jeffrey_L._Fowler_presents_a_lifetime_achievement_award_to_retired_Lt._Cmdr._Wesley_Brown_at_the_National_Society_of_Black_Engineers_conference_in_Las_Vegas.jpg","Usdaemmer1.jpg","User-trash-full.svg‎","Various_sweetwater_fish_with_Finnish_text.jpg","VegCorn.jpg","Vegetables.jpg","Vladimir Palace furniture.jpg","Volkswagen Invoice.jpg","Volume under surface.png","VshSenateSofa.JPG","Warrior_leaving.JPG","Waschvollautomat Constructa 1950er.jpg","Washingdishes.jpg","Water_surface_tension_1.jpg","WCML freight train.jpg","Weaving profile.jpg","Wedge-1.jpg","Weibliche-brust.jpg","Weizenbier.jpg","Well 2006 03.jpg","West Side Highway support.jpg","Wet Leaf.jpg","Wheel Iran.jpg","Wheel_of_Fortune_1974pilotr1.svg","White deer.jpg","White mocha ice cream.jpg","White primer bucket.jpg","White_cattle_at_rest.jpg‎","Wien_Hotel_Sacher_Am_Abend.jpg","Wikimania 2007 dungodung 22.jpg","Wikimania2007 Mako thinker.jpg","William-Adolphe Bouguereau (1825-1905) - Sewing (1898).jpg","Windbuchencom.jpg","window.jpg","Wipe_up.jpg","wire.agr.jpg","Witlof Cichorium intybus var. foliosum seeds.jpg","Wolfgang Heimbach 001.jpg","World-behrmann.png","WPKiW - ZOO - Wielbłądy 02.jpg","Wroclaw rynek kon 2005.jpg","WSMR trial route map.png","Yanira.png","Yin_yang.svg","Zaglowiec1MSlup250.jpg","Zapato.jpg","Zatar.jpg","Zigarre.jpg","Zn-TableImage.png","平埔族2.jpg"]);

var mw_edit = function(wher){
	var mw = readConfig("mw-settings.json"); // Ensure existance
	var mwSettings = JSON.parse(mw);
	var user = mwSettings.ralju.user;
	var pass = mwSettings.ralju.password;
	var bot = require('nodemw');
	var client = new bot(
		{
			"protocol": "https",
			"server": "mw.lojban.org",  // host name of MediaWiki-powered site
			"path": "",                  // path to api.php script
			"debug": false,                // is more verbose when set to true
			"username": user,             // account to be used when logIn is called (optional)
			"password": pass,             // password to be used when logIn is called (optional)
			"userAgent": "Custom UA",      // define custom bot's user agent
			"concurrency": 5               // how many API requests can be run in parallel (defaults to 3)
		}
	);
	
	client.logIn(function(err) {
		if (err) {
			console.log(err);
			return;
		}
		//for (var ki in arr){
			var myRegexp = /\/([^\/]+)$/;
			var match = myRegexp.exec(wher.replace(/\n/g,""));
			var ins = unescape(match[1]);
			client.uploadByUrl(ins,wher,"testa",function(err, data) {
				if (err) {
					//console.log(err);
					return;
				}
				console.log(ins+" - " + wher);
			}
			);
		//}
	});
};

function ensureDirExistence(path) {
	// We first try to make a dir. If it was missing, now, it is not
	// anymore.
	try {
		fs.mkdirSync(path);
	} catch (e) {
		// If creation of the dir failed, there can be many reasons.
		// However, if the reason is not “there was already a file
		// there!”, we don't want to ignore the error, so we throw it
		// again.
		if (typeof(e.code) === "undefined" || e.code !== 'EEXIST') {
			throw e;
		}
		// In the case where the path was taken, we want to be sure it
		// is a directory. If the path existed *and* it is a directory,
		// all is good.  Otherwise, we would be asking for trouble by
		// trying to use a file, socket, or whatever as a directory.
		if (!fs.statSync(path).isDirectory()) {
			throw new Error("“" + path + "” is not a directory.");
		}
	}
}

function readConfig(filename) {
	var configDirectory = path.join(path.homedir(),".livla");
	ensureDirExistence(configDirectory);
	file = path.join(configDirectory, filename);
	try {
		return fs.readFileSync(file,{encoding: 'utf8'});
	} catch (e) {
		// If we get an “ENOENT” error, we return an empty string.
		// Other errors are still thrown.
		if (typeof(e.code) === "undefined" || e.code !== 'ENOENT') {
			throw e;
		}
		return "";
	}
}
