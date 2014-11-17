var rafsi = {};
function onUpdateDocumentStore() {
  for (var key in documentStore) {
    var def = documentStore[key];
    if (def.type.match(/lujvo/)) {
      continue;
    }
    for (var i = 0; i < (def.rafsi||[]).length; i++) {
      rafsi[(def.rafsi[i]||'')] = def;
    }
  }
}
onUpdateDocumentStore();

function parseLujvo(lujvo) {
  if (lujvo === "blasmela") {
    // debugger
  }
  var m = lujvo.match("([a-z']+) zei ([a-z']+)");
  if (m) {
    return [[m[1],m[2]]];
  }
  var decompositions = decomposeIntoCandidateRafsi(lujvo);
  var validDecompositions = [];
  for (var i = 0; i < decompositions.length; i++) {
    var decomposition = decompositions[i];
    var valid = true;
    for (var j = 0; j < decomposition.length; j++) {
      var raf = decomposition[j];
      if (!(raf in rafsi)) {
        valid = false;
      }
      var nextraf = decomposition[j+1];
      if (nextraf) {
        var consonantPair = raf.charAt(raf.length-1) + nextraf.charAt(nextraf.length-1);
        if (consonantPair in impermissibleConsonentPairs) {
          // valid = false;
        }
      }
    }
    if (valid) {
      validDecompositions.push(decomposition);
    }
  }
  return validDecompositions;
}

// non-validating
function decomposeIntoCandidateRafsi(lujvo, someTaken) {
  var lujvoLength = lujvo.replace(/'/g, "").length;
  if (lujvoLength < 3) {
    // invalid
    return [];
  }
  if (someTaken && (lujvoLength === 3 || lujvoLength === 5)) {
    return [lujvo];
  }

  var candidates = [splitAt(lujvo, 3), splitAt(lujvo, 4)];
  var newCandidates = [];
  for (var i = 0; i < candidates.length; i++) {
    if (candidates[i][1].charAt(0) in {'y':true, 'n':true, 'r':true}) {
      newCandidates.push([candidates[i][0], candidates[i][1].substring(1)]);
    }
    newCandidates.push(candidates[i]);
  }
  candidates = newCandidates;

  var results = [];
  for (i = 0; i < candidates.length; i++) {
    var head = candidates[i][0], tail = candidates[i][1];
    var decomposedTail = decomposeIntoCandidateRafsi(tail, true);
    if (decomposedTail === []) {
      continue;
    }
    for (var j = 0; j < decomposedTail.length; j++) {
      results.push([head].concat(decomposedTail[j]));
    }
  }

  return results;
}
function splitAt(s, i) {
  return [s.substring(0, i), s.substring(i)];
}


/*
In brief, any consonant pair is permissible unless it: contains two identical letters, contains both a voiced (excluding “r”, “l”, “m”, “n”) and an unvoiced consonant, or is one of certain specified forbidden pairs.
 */
impermissibleConsonentPairs = {};

/*
1)
It is forbidden for both consonants to be the same, as this would violate the rule against double consonants.
*/
[
    'b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'r',
    's', 't', 'v', 'w', 'x', 'z'
].map(function(consonant) {
  impermissibleConsonentPairs[consonant + consonant] = true;
});

/*
2)
It is forbidden for one consonant to be voiced and the other unvoiced. The consonants “l”, “m”, “n”, and “r” are exempt from this restriction. As a result, “bf” is forbidden, and so is “sd”, but both “fl” and “vl”, and both “ls” and “lz”, are permitted.
*/
var unvoicedConsonants = ['p', 't', 'k', 'f', 'c', 's', 'x'];
var voicedConsonants = ['b', 'd', 'g', 'v', 'j', 'z'];
unvoicedConsonants.map(function(unvoiced) {
  voicedConsonants.map(function(voiced) {
    impermissibleConsonentPairs[unvoiced + voiced] = true;
    impermissibleConsonentPairs[voiced + unvoiced] = true;
  });
});

/*
3)
It is forbidden for both consonants to be drawn from the set “c”, “j”, “s”, “z”.
*/
var impermissibleWhenPaired = ['c', 'j', 's', 'x'];
impermissibleWhenPaired.map(function(impOne) {
  impermissibleWhenPaired.map(function(impTwo) {
    impermissibleConsonentPairs[impOne + impTwo] = true;
    impermissibleConsonentPairs[impTwo + impOne] = true;
  });
});

/*
4)
The specific pairs “cx”, “kx”, “xc”, “xk”, and “mz” are forbidden.
*/
["cx", "kx", "xc", "xk", "mz"].map(function(imp) {
  impermissibleConsonentPairs[imp] = true;
});