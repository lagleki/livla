var searchIdCounter = 0;
function search(query, callback) {
	if (query.length === 0) return;
	var searchId = ++searchIdCounter;
	var preciseMatches = [];
	var queryDecomposition = query.replace(/ zei /g,'-zei-').split(" ").map(function(a){return a.replace(/-zei-/g,' zei ');});
	var kij=[];
	var ki=[];
	var lo_matra_cu_cupra;
	function julne(a){
		return a.filter(function(n){ return n !== undefined }).map(function(a){return restore(a);});
	}
	function be(kil,lu){
		var luj=decomposeLujvo(lu);
		if (luj){
			var kim=[];
			for (var ji in luj){
				kim.push(rafsi[luj[ji]]);
			}
			if (kil.length===1 && kil[0].w===lu){
				kil[0].rafsiDocuments = julne(kim);
			}
			else{
			kil.push({
				t: "decomposing ...",w: query,rafsiDocuments: julne(kim)
			});
			}
		}
		return kil;
	}
	function shortget(a,ki){
		var isdef = documentStore.filter(function (o){
			return (o.w==a.toLowerCase())||(o.d=="{"+a.toLowerCase()+"}");
		})[0];//doesnt work with words with capital letters
			if (isdef)
				{ki.push(isdef);}
			else{
				var luj=decomposeLujvo(a);
				if(luj){
					for (var ji in luj){
						ki.push(rafsi[luj[ji]]);
					}
				}
			}
		return ki;
	}
	if (!window.muplis && queryDecomposition.length>1){//multiple words are in the query
		for (var s=0;s<queryDecomposition.length;s++){
			for (var c=queryDecomposition.length-1;c>=s;c--){
				ki=shortget(queryDecomposition.slice(s,c+1).join(" "),ki);
			}
		}
		preciseMatches.push({
			t: "decomposing ...",w: query,rafsiDocuments: julne(ki)
		});
	}
	else{
		if ((query.indexOf('^')===0||query.slice(-1)==='$'))
		{
			lo_matra_cu_cupra=documentStore.filter(function(val){return (val.w.match(query.toLowerCase())||[]).length > 0;}).splice(0,100).filter(function(n){n=restore(n); return n !== undefined });
		}
		else {
			lo_matra_cu_cupra=documentStore.filter(function(a){
				var m = Object.keys(a).map(function (key) {return a[key];}).join(";");
				return m.indexOf(query)>=0||m.indexOf(query.replace(/h/g,"'"))>=0;
			});
			if (!lo_matra_cu_cupra) {
				preciseMatches=be([],query)||[];
			}
			else if (searchId !== searchIdCounter) {
				return;
			}
		}
		console.log((new Date()).getTime());
		var exactMatches = [];
		var greatMatches = [];
		var selmahoMatches = [];
		var goodMatches = [];
		var normalMatches = [];
		var defMatches = [];
		var lastMatches = [];
		for (var i=0;i<lo_matra_cu_cupra.length;i++) {
			var doc = restore(lo_matra_cu_cupra[i]);//todo: optimize for phrases
			if (!doc) {
				continue;
			}
				if (doc.w === query){
					exactMatches.push(doc);
					console.log(JSON.stringify(doc));
					exactMatches=be(exactMatches,query);
					continue;
				}
				else if ((doc.g||'')===query||((doc.g||'').search("(^|;)"+query+"(;|$)")>=0)){
					greatMatches.push(doc);
					continue;
				}
				else if ((doc.s||'') === query){
					selmahoMatches.push(doc);//selmaho
					continue;
				}
				else if ((doc.g||'').search("\\b"+query+"\\b")>=0) {
					goodMatches.push(doc);
					continue;
				}
				else if ((doc.t == 'gismu' && ((doc.r || []).indexOf(query) != -1))) {
					normalMatches.push(doc);
					continue;
				}
				else if (((doc.d||'').toLowerCase().search("\\b"+query+"\\b")>=0)){
					defMatches.push(doc);
					continue;
				}
				else {lastMatches.push(doc);}
		}
		if (exactMatches.length===0) {preciseMatches=be([],query)||[];}
		var sor = function (ar){
			if (ar.length===0) return ar;
			var gism=[];
			var cmav=[];
			for (c=0;c<ar.length;c++){
				if (ar[c].t==='gismu'){gism.push(ar.splice(c,1)[0]);}
			}
			for (c=0;c<ar.length;c++){
				if (ar[c].t==='cmavo'){cmav.push(ar.splice(c,1)[0]);}
			}
			return gism.sort(sortMultiDimensional).concat(cmav.sort(sortMultiDimensional)).concat(ar.sort(sortMultiDimensional));
		};
		var sortMultiDimensional = function (a,b)
		{
			return (((a.d||'').length < (b.d||'').length) ? -1 : (((a.d||'').length > (b.d||'').length) ? 1 : 0));
		};
		greatMatches=sor(greatMatches);
		selmahoMatches=sor(selmahoMatches);
		goodMatches=sor(goodMatches);
		normalMatches=sor(normalMatches);
		defMatches=sor(defMatches);
		lastMatches=sor(lastMatches);
		preciseMatches=sor(preciseMatches);
		preciseMatches = preciseMatches
		.concat(exactMatches)
		.concat(greatMatches)
		.concat(selmahoMatches)
		.concat(goodMatches)
		.concat(normalMatches)
		.concat(defMatches)
		.concat(lastMatches);
	}
	console.log((new Date()).getTime());
	callback(preciseMatches);
}
