const fs = require("fs"),
  path = require("path-extra");

//regular expressions for gismu forms
const C = "(" + "[bcdfgjklmnprstvxz]" + ")";
const V = "(" + "[aeiou]" + ")";
const Vy = "(" + "[aeiouy]" + ")";
const CC =
  "(" + "[bcfgkmpsvx][lr]|[td]r|[cs][pftkmn]|[jz][bvdgm]|t[cs]|d[jz]" + ")";
const C_C =
  "(" +
  "[bdgjvzcfkpstx][lrmn]|[lrn][bdgjvzcfkpstx]|b[dgjvz]|d[bgjvz]|g[bdjvz]|j[bdgv]|v[bdgjz]|z[bdgv]|c[fkpt]|f[ckpstx]|k[cfpst]|p[cfkstx]|s[fkptx]|t[cfkpsx]|x[fpst]|l[rmn]|r[lmn]|m[lrnbdgjvcfkpstx]|n[lrm]" +
  ")";
const CxC =
  "(" +
  "[lmnr][bcdfgjkpstvx]|l[mnrz]|mn|n[lmrz]|r[lmnz]|b[dgjmnvz]|d[bglmnv]|g[bdjmnvz]|[jz][lnr]|v[bdgjmnz]|f[ckmnpstx]|k[cfmnpst]|p[cfkmnstx]|sx|t[fklmnpx]|x[fmnpst]" +
  ")";
const CyC =
  "(" +
  "(" +
  C +
  ")\\2|[bdgjvz][cfkpstx]|[cfkpstx][bdgjvz]|[cjsz]{2,2}|[ck]x|x[ck]|mz" +
  ")";
const CCV = "(" + CC + V + ")";
const CVV = "(" + C + "(?:ai|au|ei|oi|" + V + "'" + V + ")" + ")";
const CVC = "(" + C + V + C + ")";
//this is the complete regular expression matching any possible gismu and only them
const gismu = "^(" + CC + V + C + "|" + C + V + C_C + ")" + V + "$";
//Regular expression pattern
const pat = new RegExp(gismu);

//Lojban alphabet
const alphabet = "abcdefgijklmnoprstuvxz".split("");

//just create an array of 5-letter sequences from "aaaaa" to "zzzzz"
const allArrays = [alphabet, alphabet, alphabet, alphabet, alphabet];
function allPossibleCases(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    let result = [];
    const allCasesOfRest = allPossibleCases(arr.slice(1));
    for (let c in allCasesOfRest) {
      for (let i = 0; i < arr[0].length; i++) {
        result.push(arr[0][i] + allCasesOfRest[c]);
      }
    }
    return result;
  }
}
//Now filter those sequences that are match our regular expression. We get the array of all possible gismu
const all_possible_gismu = allPossibleCases(allArrays).filter(candidate =>
  pat.test(candidate)
);

//Here are the rules for clashes between official gismu. The first letter is for the candidate gismu, the second is for an already existing gismu. Taken from http://lojban.org/publications/cll/cll_v1.1_xhtml-section-chunks/section-gismu-making.html
const clashing_letters = [
  ["b", "p"],
  ["b", "v"],
  ["c", "j"],
  ["c", "s"],
  ["d", "t"],
  ["f", "p"],
  ["f", "v"],
  ["g", "k"],
  ["g", "x"],
  ["j", "c"],
  ["j", "z"],
  ["k", "g"],
  ["k", "x"],
  ["l", "r"],
  ["m", "n"],
  ["n", "m"],
  ["p", "b"],
  ["p", "f"],
  ["r", "l"],
  ["s", "c"],
  ["s", "z"],
  ["t", "d"],
  ["v", "b"],
  ["v", "f"],
  ["x", "g"],
  ["x", "k"],
  ["z", "j"],
  ["z", "s"]
];

//check if a given candidate word is blocked by any of the existing gismu. arr_existing is the array of existing gismu including experimental ones created by this program
function WhichIsInConflict(candidate, arr_existing) {
  const brod = candidate.slice(0, 4);
  const brods = arr_existing.filter(i => i.slice(0, 4) === brod);
  let acc = [];
  if (brods.length > 0) acc = acc.concat(brods);
  const c_arr = candidate.split("");
  //we need to check every letter of the candidate separately
  for (let i = 0; i < c_arr.length; i++) {
    //we need to check every rule
    for (let j = 0; j < clashing_letters.length; j++) {
      let c_arr_new = c_arr.slice();
      c_arr_new[i] = c_arr_new[i].replace(
        clashing_letters[j][0],
        clashing_letters[j][1]
      );
      const c_arr_new_joined = c_arr_new.join("");
      const hasConflict = arr_existing.filter(i => i === c_arr_new_joined);
      if (hasConflict.length > 0) acc = acc.concat(hasConflict);
    }
  }
  acc = [...new Set(acc)];
  return acc.join(", ");
}

function WhichIsInConflictAll(word, jsonDocEn) {
  let all_jvs_off_gismu = [];
  let all_jvs_exp_gismu = [];
  const valsi = jsonDocEn.dictionary.direction[0].valsi;
  for (const v of valsi) {
    if (v.type === "gismu") all_jvs_off_gismu.push(v.word);
    if (v.type === "experimental gismu") all_jvs_exp_gismu.push(v.word);
  }
  const official = WhichIsInConflict(word, all_jvs_off_gismu);
  const experimental = WhichIsInConflict(word, all_jvs_exp_gismu);
  return { official, experimental };
}

// console.log(WhichIsInConflictAll('klama'));
module.exports.WhichIsInConflictAll = WhichIsInConflictAll;
