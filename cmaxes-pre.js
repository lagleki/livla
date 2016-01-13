function camxes_preprocessing(a) {
	a = a.replace(/[^a-zA-Z', \.]/gm,"");
	a = a.replace(/([cfkpstx'])([bdgjvz'])/igm,"$1y$2");
	a = a.replace(/([bdgjvz'])([cfkpstx'])/igm,"$1y$2");
	a = a.replace(/cx/igm,"sx");
	a = a.replace(/xс/igm,"xs");
	a = a.replace(/([kx]{2,2}|[sc]{2,2})\1/igm,"$1y$1");
	a = a.replace(/mz/igm,"nz");
	a = a.replace(/([^aeiouy])\1/igm,"$1y$1");
	return a;
}

module.exports.preprocessing = camxes_preprocessing;

