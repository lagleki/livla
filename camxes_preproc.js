function camxes_preprocessing(input) {
	if (!(typeof input.valueOf() === 'string'))
		return "ERROR: Wrong input type.";
	input = input.replace(/’/gm,"'");
	input = input.replace(/([0-9])\.([0-9])/gm,"$1 pi $2");
	input = input.replace(/0/gm,"no");
	input = input.replace(/1/gm,"pa");
	input = input.replace(/2/gm,"re");
	input = input.replace(/3/gm,"ci");
	input = input.replace(/4/gm,"vo");
	input = input.replace(/5/gm,"mu");
	input = input.replace(/6/gm,"xa");
	input = input.replace(/7/gm,"ze");
	input = input.replace(/8/gm,"bi");
	input = input.replace(/9/gm,"so");
	// --- //
	input = input.replace(/[áàâä]/g,"A");
	input = input.replace(/[éèêë]/g,"E");
	input = input.replace(/[íìîïĭị]/g,"I");
	input = input.replace(/[óòôö]/g,"O");
	input = input.replace(/[úùûüŭụ]/g,"U");
	// --- //
	input = input.replace(/sh/igm,"c");
	input = input.replace(/zh/igm,"j");
	input = input.replace(/ch/igm,"tc");
	input = input.replace(/kh/igm,"x");
	// --- //
	input = input.replace(/\(|\)|«|»|—|:/gm,"");
	return input;
}

module.exports.preprocessing = camxes_preprocessing;

