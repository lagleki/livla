function peg$subclass(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function peg$SyntaxError(t,e,r,n){var s=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(s,peg$SyntaxError.prototype),s.expected=e,s.found=r,s.location=n,s.name="SyntaxError",s}function peg$padEnd(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,t+(r+=r.repeat(e)).slice(0,e))}function peg$parse(t,e){var r,n={},s=(e=void 0!==e?e:{}).grammarSource,o={text:ct},u=ct,f=/^[a]/,i=/^[aeo]/,l=/^[aeiou]/,c=/^[i]/,a=/^[u]/,d=/^[y]/,x=/^[i\u0269]/,v=/^[uw]/,h=/^[l]/,P=/^[m]/,p=/^[n]/,g=/^[r]/,A=/^[pfbgvkx]/,y=/^[d]/,_=/^[jz]/,m=/^[cs]/,E=/^[x]/,b=/^[t]/,$=/^[,']/,S=/^[}]/,w=/^[^a-za-z,']/,z=ot(["a"],!1,!1),j=ot(["a","e","o"],!1,!1),F=ot(["a","e","i","o","u"],!1,!1),k=ot(["i"],!1,!1),C=ot(["u"],!1,!1),O=ot(["y"],!1,!1),R=ot(["i","ɩ"],!1,!1),M=ot(["u","w"],!1,!1),U=ot(["l"],!1,!1),q=ot(["m"],!1,!1),B=ot(["n"],!1,!1),D=ot(["r"],!1,!1),G=ot(["p","f","b","g","v","k","x"],!1,!1),H=ot(["d"],!1,!1),I=ot(["j","z"],!1,!1),J=ot(["c","s"],!1,!1),K=ot(["x"],!1,!1),L=ot(["t"],!1,!1),N=ot([",","'"],!1,!1),Q=ot(["}"],!1,!1),T={type:"any"},V=ot([["a","z"],["a","z"],",","'"],!0,!1),W=(ot([" "],!0,!1),0),X=0,Y=[{line:1,column:1}],Z=0,tt=[],et=0,rt={};if("startRule"in e){if(!(e.startRule in o))throw new Error("Can't start parsing from rule \""+e.startRule+'".');u=o[e.startRule]}function nt(){return t.substring(X,W)}function st(){return ft(X,W)}function ot(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function ut(e){var r,n=Y[e];if(n)return n;for(r=e-1;!Y[r];)r--;for(n={line:(n=Y[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return Y[e]=n,n}function ft(t,e){var r=ut(t),n=ut(e);return{source:s,start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function it(t){W<Z||(W>Z&&(Z=W,tt=[]),tt.push(t))}function lt(t,e,r){return new peg$SyntaxError(peg$SyntaxError.buildMessage(t,e),t,e,r)}function ct(){var t,e,r,s=67*W+0,o=rt[s];if(o)return W=o.nextPos,o.result;for(t=W,e=[],r=at();r!==n;)e.push(r),r=at();return X=t,t=e=function(t){const e=st();return{rule:"text",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e),rt[s]={nextPos:W,result:t},t}function at(){var t,e,r=67*W+1,s=rt[r];return s?(W=s.nextPos,s.result):(t=W,(e=dt())!==n&&(X=t,e=function(t){const e=st();return{rule:"any_word",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[r]={nextPos:W,result:t},t)}function dt(){var t,e,r,s,o,u,f,i,l,c,a,d=67*W+2,x=rt[d];return x?(W=x.nextPos,x.result):(t=W,(e=pe())===n&&(e=xt())===n&&(e=At())===n&&(e=vt())===n&&(e=W,r=W,et++,s=vt(),et--,s===n?r=void 0:(W=r,r=n),r!==n?(s=W,et++,o=gt(),et--,o===n?s=void 0:(W=s,s=n),s!==n?(o=W,et++,u=At(),et--,u===n?o=void 0:(W=o,o=n),o!==n?(u=W,et++,f=W,(i=Ot())!==n&&(l=ve())!==n&&(c=Yt())!==n&&(a=Qt())!==n?f=i=[i,l,c,a]:(W=f,f=n),et--,f===n?u=void 0:(W=u,u=n),u!==n&&(f=yt())!==n?e=r=[r,s,o,u,f]:(W=e,e=n)):(W=e,e=n)):(W=e,e=n)):(W=e,e=n),e===n&&(e=gt())),e!==n&&(X=t,e=function(t){const e=st();return{rule:"jbovla",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[d]={nextPos:W,result:t},t)}function xt(){var t,e,r,s,o,u,f=67*W+3,i=rt[f];if(i)return W=i.nextPos,i.result;if(t=W,e=W,r=W,et++,s=Et(),et--,s!==n?(W=r,r=void 0):r=n,r!==n){if(s=[],(o=Jt())!==n)for(;o!==n;)s.push(o),o=Jt();else s=n;s!==n?(o=W,et++,u=Pe(),et--,u!==n?(W=o,o=void 0):o=n,o!==n?e=r=[r,s,o]:(W=e,e=n)):(W=e,e=n)}else W=e,e=n;return e===n&&(e=Et()),e!==n&&(X=t,e=function(t){const e=st();return{rule:"cmevla",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[f]={nextPos:W,result:t},t}function vt(){var t,e,r,s,o,u,f,i,l=67*W+4,c=rt[l];return c?(W=c.nextPos,c.result):(t=W,e=W,(r=Dt())!==n?(s=W,et++,o=It(),et--,o!==n?(W=s,s=void 0):s=n,s!==n?(o=W,et++,u=Ht(),et--,u!==n?(W=o,o=void 0):o=n,o!==n&&(u=Xt())!==n?(f=W,et++,i=he(),et--,i!==n?(W=f,f=void 0):f=n,f!==n?e=r=[r,s,o,u,f]:(W=e,e=n)):(W=e,e=n)):(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"gismu",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[l]={nextPos:W,result:t},t)}function ht(){var t,e,r,s,o,u,f,i,l,c=67*W+5,a=rt[c];if(a)return W=a.nextPos,a.result;if(t=W,e=W,r=W,et++,s=mt(),et--,s===n?r=void 0:(W=r,r=n),r!==n)if(s=W,et++,o=At(),et--,o===n?s=void 0:(W=s,s=n),s!==n)if(o=W,et++,u=W,f=W,et++,i=mt(),et--,i===n?f=void 0:(W=f,f=n),f!==n&&(i=ne())!==n&&(l=mt())!==n?u=f=[f,i,l]:(W=u,u=n),et--,u===n?o=void 0:(W=o,o=n),o!==n)if(u=W,et++,f=ve(),et--,f===n?u=void 0:(W=u,u=n),u!==n)if(f=W,et++,i=Qt(),et--,i!==n?(W=f,f=void 0):f=n,f!==n){for(i=[],l=Bt();l!==n;)i.push(l),l=Bt();e=r=[r,s,o,u,f,i]}else W=e,e=n;else W=e,e=n;else W=e,e=n;else W=e,e=n;else W=e,e=n;return e!==n&&(X=t,e=function(t){const e=st();return{rule:"fuhivla_head",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[c]={nextPos:W,result:t},t}function Pt(){var t,e,r,s,o,u,f,i=67*W+6,l=rt[i];if(l)return W=l.nextPos,l.result;if(t=W,e=W,(r=ht())!==n)if((s=Kt())!==n)if(o=W,et++,u=It(),et--,u!==n?(W=o,o=void 0):o=n,o!==n){for(u=[],f=Lt();f!==n;)u.push(f),f=Lt();e=r=[r,s,o,u]}else W=e,e=n;else W=e,e=n;else W=e,e=n;return e!==n&&(X=t,e=function(t){const e=st();return{rule:"fuhivla_trim",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[i]={nextPos:W,result:t},t}function pt(){var t,e,r,s,o=67*W+7,u=rt[o];return u?(W=u.nextPos,u.result):(t=W,e=W,(r=Pt())!==n&&(s=Ht())!==n?e=r=[r,s]:(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"generic_fuhivla",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[o]={nextPos:W,result:t},t)}function gt(){var t,e,r,s,o,u,f,i,l,c,a,d=67*W+8,x=rt[d];if(x)return W=x.nextPos,x.result;if(t=W,e=W,r=W,et++,s=pt(),et--,s!==n?(W=r,r=void 0):r=n,r!==n)if((s=Ot())===n&&(s=Rt())===n&&(s=kt()),s!==n)if((o=ie())===n&&(o=fe())===n&&(o=oe()),o!==n){for(u=W,f=[],i=Bt();i!==n;)f.push(i),i=Bt();if((i=Kt())!==n)if(l=W,et++,c=It(),et--,c!==n?(W=l,l=void 0):l=n,l!==n){for(c=[],a=Lt();a!==n;)c.push(a),a=Lt();(a=Ht())!==n?u=f=[f,i,l,c,a]:(W=u,u=n)}else W=u,u=n;else W=u,u=n;u!==n?e=r=[r,s,o,u]:(W=e,e=n)}else W=e,e=n;else W=e,e=n;else W=e,e=n;if(e===n){if(e=W,r=W,et++,s=pt(),et--,s!==n?(W=r,r=void 0):r=n,r!==n)if((s=Dt())!==n)if((o=ie())===n&&(o=fe())===n&&(o=oe()),o!==n){for(u=W,f=[],i=Bt();i!==n;)f.push(i),i=Bt();if((i=Kt())!==n)if(l=W,et++,c=It(),et--,c!==n?(W=l,l=void 0):l=n,l!==n){for(c=[],a=Lt();a!==n;)c.push(a),a=Lt();(a=Ht())!==n?u=f=[f,i,l,c,a]:(W=u,u=n)}else W=u,u=n;else W=u,u=n;u!==n?e=r=[r,s,o,u]:(W=e,e=n)}else W=e,e=n;else W=e,e=n;else W=e,e=n;e===n&&(e=pt())}return e!==n&&(X=t,e=function(t){const e=st();return{rule:"fuhivla",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[d]={nextPos:W,result:t},t}function At(){var t,e,r,s,o,u,f,i,l,c,a,d,x=67*W+9,v=rt[x];if(v)return W=v.nextPos,v.result;if(t=W,e=W,r=W,et++,s=xt(),et--,s===n?r=void 0:(W=r,r=n),r!==n)if(s=W,et++,o=W,(u=kt())!==n?(f=W,et++,i=It(),et--,i===n?f=void 0:(W=f,f=n),f!==n&&(i=Yt())!==n?((l=ve())===n&&(l=null),(c=yt())!==n?o=u=[u,f,i,l,c]:(W=o,o=n)):(W=o,o=n)):(W=o,o=n),o===n&&(o=W,(u=kt())!==n?(f=W,et++,i=It(),et--,i!==n?(W=f,f=void 0):f=n,f!==n&&(i=Yt())!==n&&(l=qt())!==n?o=u=[u,f,i,l]:(W=o,o=n)):(W=o,o=n)),et--,o===n?s=void 0:(W=s,s=n),s!==n){if(o=W,u=W,et++,f=ve(),et--,f===n?u=void 0:(W=u,u=n),u!==n){if(f=W,et++,i=W,(l=ne())!==n){if(c=[],(a=ne())!==n)for(;a!==n;)c.push(a),a=ne();else c=n;c!==n?i=l=[l,c]:(W=i,i=n)}else W=i,i=n;if(et--,i===n?f=void 0:(W=f,f=n),f!==n)if((i=Qt())!==n){for(l=[],c=W,(a=Tt())!==n&&(d=ve())!==n?c=a=[a,d]:(W=c,c=n);c!==n;)l.push(c),c=W,(a=Tt())!==n&&(d=ve())!==n?c=a=[a,d]:(W=c,c=n);(c=Tt())!==n?o=u=[u,f,i,l,c]:(W=o,o=n)}else W=o,o=n;else W=o,o=n}else W=o,o=n;if(o===n)if(o=[],(u=Yt())!==n)for(;u!==n;)o.push(u),u=Yt();else o=n;o!==n?(u=W,et++,f=he(),et--,f!==n?(W=u,u=void 0):u=n,u!==n?e=r=[r,s,o,u]:(W=e,e=n)):(W=e,e=n)}else W=e,e=n;else W=e,e=n;return e!==n&&(X=t,e=function(t){const e=st();return{rule:"cmavo",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[x]={nextPos:W,result:t},t}function yt(){var t,e,r,s,o,u,f,i,l=67*W+10,c=rt[l];if(c)return W=c.nextPos,c.result;for(t=W,e=W,r=[],(s=Ft())===n&&(s=$t())===n&&(s=wt())===n&&(s=W,o=W,et++,u=_t(),et--,u===n?o=void 0:(W=o,o=n),o!==n&&(u=zt())!==n?(f=W,et++,i=_t(),et--,i===n?f=void 0:(W=f,f=n),f!==n?s=o=[o,u,f]:(W=s,s=n)):(W=s,s=n));s!==n;)r.push(s),(s=Ft())===n&&(s=$t())===n&&(s=wt())===n&&(s=W,o=W,et++,u=_t(),et--,u===n?o=void 0:(W=o,o=n),o!==n&&(u=zt())!==n?(f=W,et++,i=_t(),et--,i===n?f=void 0:(W=f,f=n),f!==n?s=o=[o,u,f]:(W=s,s=n)):(W=s,s=n));return(s=gt())===n&&(s=Ut()),s===n&&(s=W,(o=jt())===n&&(o=bt())===n&&(o=St())===n&&(o=W,(u=Mt())!==n?(f=W,et++,i=It(),et--,i!==n?(W=f,f=void 0):f=n,f!==n?o=u=[u,f]:(W=o,o=n)):(W=o,o=n)),o!==n&&(u=qt())!==n?s=o=[o,u]:(W=s,s=n)),s!==n?e=r=[r,s]:(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"lujvo_core",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[l]={nextPos:W,result:t},t}function _t(){var t,e,r=67*W+11,s=rt[r];return s?(W=s.nextPos,s.result):(t=W,(e=gt())===n&&(e=$t())===n&&(e=bt()),e!==n&&(X=t,e=function(t){const e=st();return{rule:"any_fuhivla_rafsi",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[r]={nextPos:W,result:t},t)}function mt(){var t,e,r,s,o,u,f,i,l,c=67*W+12,a=rt[c];if(a)return W=a.nextPos,a.result;for(t=W,e=W,r=[],s=zt();s!==n;)r.push(s),s=zt();return(s=Ut())===n&&(s=W,(o=Mt())!==n?(u=W,et++,f=It(),et--,f!==n?(W=u,u=void 0):u=n,u!==n?(f=W,et++,i=Yt(),et--,i===n?f=void 0:(W=f,f=n),f!==n&&(i=qt())!==n?s=o=[o,u,f,i]:(W=s,s=n)):(W=s,s=n)):(W=s,s=n),s===n&&(s=wt())===n&&(s=St())===n&&(s=W,o=W,(u=Mt())!==n?(f=W,et++,i=It(),et--,i!==n?(W=f,f=void 0):f=n,f!==n?(i=W,et++,l=Yt(),et--,l===n?i=void 0:(W=i,i=n),i!==n?o=u=[u,f,i]:(W=o,o=n)):(W=o,o=n)):(W=o,o=n),o===n&&(o=null),(u=ee())!==n&&(f=Yt())!==n?s=o=[o,u,f]:(W=s,s=n),s===n&&(s=Ft())===n&&(s=jt()))),s!==n?e=r=[r,s]:(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"rafsi_string",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[c]={nextPos:W,result:t},t}function Et(){var t,e,r,s,o,u,f,i,l=67*W+13,c=rt[l];if(c)return W=c.nextPos,c.result;if(t=W,e=W,r=W,et++,s=ve(),et--,s===n?r=void 0:(W=r,r=n),r!==n){for(s=[],(o=Tt())===n&&(o=Vt())===n&&(o=ve())===n&&(o=W,(u=ne())!==n?(f=W,et++,i=Pe(),et--,i===n?f=void 0:(W=f,f=n),f!==n?o=u=[u,f]:(W=o,o=n)):(W=o,o=n));o!==n;)s.push(o),(o=Tt())===n&&(o=Vt())===n&&(o=ve())===n&&(o=W,(u=ne())!==n?(f=W,et++,i=Pe(),et--,i===n?f=void 0:(W=f,f=n),f!==n?o=u=[u,f]:(W=o,o=n)):(W=o,o=n));(o=ne())!==n?(u=W,et++,f=Pe(),et--,f!==n?(W=u,u=void 0):u=n,u!==n?e=r=[r,s,o,u]:(W=e,e=n)):(W=e,e=n)}else W=e,e=n;return e!==n&&(X=t,e=function(t){const e=st();return{rule:"zifcme",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[l]={nextPos:W,result:t},t}function bt(){var t,e,r,s,o,u,f=67*W+14,i=rt[f];return i?(W=i.nextPos,i.result):(t=W,e=W,(r=Pt())!==n?(s=W,(o=ve())!==n&&(u=Yt())!==n?s=o=[o,u]:(W=s,s=n),s!==n?e=r=[r,s]:(W=e,e=n)):(W=e,e=n),e===n&&(e=W,r=W,(s=Pt())!==n&&(o=Qt())!==n?r=s=[s,o]:(W=r,r=n),r!==n&&(s=Yt())!==n?e=r=[r,s]:(W=e,e=n)),e!==n&&(X=t,e=function(t){const e=st();return{rule:"stressed_fuhivla_rafsi",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[f]={nextPos:W,result:t},t)}function $t(){var t,e,r,s,o,u,f,i=67*W+15,l=rt[i];return l?(W=l.nextPos,l.result):(t=W,e=W,r=W,et++,s=Bt(),et--,s!==n?(W=r,r=void 0):r=n,r!==n&&(s=ht())!==n?(o=W,(u=ve())!==n&&(f=Yt())!==n?o=u=[u,f]:(W=o,o=n),o!==n?e=r=[r,s,o]:(W=e,e=n)):(W=e,e=n),e===n&&(e=W,r=W,(s=ht())!==n&&(o=Qt())!==n?r=s=[s,o]:(W=r,r=n),r!==n?(s=W,(o=Yt())!==n?((u=ve())===n&&(u=null),s=o=[o,u]):(W=s,s=n),s!==n?e=r=[r,s]:(W=e,e=n)):(W=e,e=n)),e!==n&&(X=t,e=function(t){const e=st();return{rule:"fuhivla_rafsi",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[i]={nextPos:W,result:t},t)}function St(){var t,e,r,s,o,u=67*W+16,f=rt[u];return f?(W=f.nextPos,f.result):(t=W,e=W,(r=Dt())===n&&(r=kt()),r!==n?(s=W,et++,o=It(),et--,o!==n?(W=s,s=void 0):s=n,s!==n&&(o=Yt())!==n?e=r=[r,s,o]:(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"stressed_y_rafsi",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[u]={nextPos:W,result:t},t)}function wt(){var t,e,r,s,o,u,f=67*W+17,i=rt[f];return i?(W=i.nextPos,i.result):(t=W,e=W,r=W,(s=Dt())===n&&(s=kt()),s!==n?(o=W,et++,u=It(),et--,u===n?o=void 0:(W=o,o=n),o!==n?r=s=[s,o]:(W=r,r=n)):(W=r,r=n),r!==n?(s=W,(o=Yt())!==n?((u=ve())===n&&(u=null),s=o=[o,u]):(W=s,s=n),s!==n?e=r=[r,s]:(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"y_rafsi",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[f]={nextPos:W,result:t},t)}function zt(){var t,e,r,s,o,u,f,i,l,c,a,d=67*W+18,x=rt[d];return x?(W=x.nextPos,x.result):(t=W,e=W,r=W,et++,s=wt(),et--,s===n?r=void 0:(W=r,r=n),r!==n?(s=W,et++,o=St(),et--,o===n?s=void 0:(W=s,s=n),s!==n?(o=W,et++,u=Ft(),et--,u===n?o=void 0:(W=o,o=n),o!==n?(u=W,et++,f=jt(),et--,f===n?u=void 0:(W=u,u=n),u!==n&&(f=Mt())!==n?(i=W,et++,l=It(),et--,l===n?i=void 0:(W=i,i=n),i!==n?(l=W,et++,c=Yt(),et--,c===n?l=void 0:(W=l,l=n),l!==n?(c=W,et++,a=ve(),et--,a===n?c=void 0:(W=c,c=n),c!==n?e=r=[r,s,o,u,f,i,l,c]:(W=e,e=n)):(W=e,e=n)):(W=e,e=n)):(W=e,e=n)):(W=e,e=n)):(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"y_less_rafsi",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[d]={nextPos:W,result:t},t)}function jt(){var t,e,r,s,o,u,f,i=67*W+19,l=rt[i];return l?(W=l.nextPos,l.result):(t=W,e=W,r=W,(s=Dt())!==n&&(o=Xt())!==n?r=s=[s,o]:(W=r,r=n),r===n&&(r=Mt()),r!==n?(s=W,et++,o=It(),et--,o!==n?(W=s,s=void 0):s=n,s!==n?(o=W,(u=ve())!==n&&(f=Yt())!==n?o=u=[u,f]:(W=o,o=n),o!==n?e=r=[r,s,o]:(W=e,e=n)):(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"stressed_hy_rafsi",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[i]={nextPos:W,result:t},t)}function Ft(){var t,e,r,s,o,u,f,i,l=67*W+20,c=rt[l];return c?(W=c.nextPos,c.result):(t=W,e=W,r=W,(s=Dt())!==n&&(o=Xt())!==n?r=s=[s,o]:(W=r,r=n),r===n&&(r=Mt()),r!==n?(s=W,o=W,et++,u=It(),et--,u===n?o=void 0:(W=o,o=n),o!==n&&(u=ve())!==n&&(f=Yt())!==n?((i=ve())===n&&(i=null),s=o=[o,u,f,i]):(W=s,s=n),s!==n?e=r=[r,s]:(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"hy_rafsi",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[l]={nextPos:W,result:t},t)}function kt(){var t,e,r,s,o=67*W+21,u=rt[o];return u?(W=u.nextPos,u.result):(t=W,e=W,(r=Gt())!==n&&(s=ne())!==n?e=r=[r,s]:(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"cvc",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[o]={nextPos:W,result:t},t)}function Ct(){var t,e,r=67*W+22,s=rt[r];return s?(W=s.nextPos,s.result):(t=W,(e=kt())===n&&(e=Ot()),e!==n&&(X=t,e=function(t){const e=st();return{rule:"cvc_ccv",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[r]={nextPos:W,result:t},t)}function Ot(){var t,e,r,s,o=67*W+23,u=rt[o];return u?(W=u.nextPos,u.result):(t=W,e=W,(r=ee())!==n&&(s=Xt())!==n?e=r=[r,s]:(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"ccv",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[o]={nextPos:W,result:t},t)}function Rt(){var t,e,r,s,o=67*W+24,u=rt[o];return u?(W=u.nextPos,u.result):(t=W,e=W,(r=ne())!==n&&(s=Wt())!==n?e=r=[r,s]:(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"cvv",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[o]={nextPos:W,result:t},t)}function Mt(){var t,e,r=67*W+25,s=rt[r];return s?(W=s.nextPos,s.result):(t=W,(e=Ct())===n&&(e=function(){var t,e,r,s,o,u,f,i,l=67*W+26,c=rt[l];if(c)return W=c.nextPos,c.result;t=W,e=W,r=W,(s=ne())!==n&&(o=Xt())!==n?(u=W,et++,f=It(),et--,f===n?u=void 0:(W=u,u=n),u!==n&&(f=ve())!==n&&(i=Xt())!==n?r=s=[s,o,u,f,i]:(W=r,r=n)):(W=r,r=n);r===n&&(r=Rt());r!==n?(s=W,(o=ie())!==n?(u=W,et++,f=ne(),et--,f!==n?(W=u,u=void 0):u=n,u!==n?s=o=[o,u]:(W=s,s=n)):(W=s,s=n),s===n&&(s=W,(o=fe())!==n?(u=W,et++,f=ie(),et--,f!==n?(W=u,u=void 0):u=n,u!==n?s=o=[o,u]:(W=s,s=n)):(W=s,s=n)),s===n&&(s=null),e=r=[r,s]):(W=e,e=n);e!==n&&(X=t,e=function(t){const e=st();return{rule:"cvvr",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e));return t=e,rt[l]={nextPos:W,result:t},t}()),e!==n&&(X=t,e=function(t){const e=st();return{rule:"cvc_ccv_cvv",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[r]={nextPos:W,result:t},t)}function Ut(){var t,e,r,s,o,u,f,i,l,c=67*W+27,a=rt[c];return a?(W=a.nextPos,a.result):(t=W,(e=vt())===n&&(e=W,(r=Gt())!==n?(s=W,et++,o=It(),et--,o!==n?(W=s,s=void 0):s=n,s!==n&&(o=ve())!==n?(u=W,et++,f=Ht(),et--,f!==n?(W=u,u=void 0):u=n,u!==n&&(f=Xt())!==n?(i=W,et++,l=he(),et--,l!==n?(W=i,i=void 0):i=n,i!==n?e=r=[r,s,o,u,f,i]:(W=e,e=n)):(W=e,e=n)):(W=e,e=n)):(W=e,e=n)),e!==n&&(X=t,e=function(t){const e=st();return{rule:"gismu_cvv_final_rafsi",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[c]={nextPos:W,result:t},t)}function qt(){var t,e,r,s,o,u,f=67*W+28,i=rt[f];return i?(W=i.nextPos,i.result):(t=W,e=W,r=W,et++,s=Ht(),et--,s!==n?(W=r,r=void 0):r=n,r!==n?(s=W,(o=ne())!==n&&(u=Wt())!==n?s=o=[o,u]:(W=s,s=n),s===n&&(s=Ot()),s!==n?(o=W,et++,u=he(),et--,u!==n?(W=o,o=void 0):o=n,o!==n?e=r=[r,s,o]:(W=e,e=n)):(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"short_final_rafsi",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[f]={nextPos:W,result:t},t)}function Bt(){var t,e,r,s,o,u=67*W+29,f=rt[u];return f?(W=f.nextPos,f.result):(t=W,e=W,(r=Kt())!==n?(s=W,et++,o=It(),et--,o===n?s=void 0:(W=s,s=n),s!==n?e=r=[r,s]:(W=e,e=n)):(W=e,e=n),e===n&&(e=Lt()),e!==n&&(X=t,e=function(t){const e=st();return{rule:"unstressed_syllable",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[u]={nextPos:W,result:t},t)}function Dt(){var t,e,r,s,o=67*W+30,u=rt[o];return u?(W=u.nextPos,u.result):(t=W,e=W,(r=Ct())!==n&&(s=ne())!==n?e=r=[r,s]:(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"long_rafsi",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[o]={nextPos:W,result:t},t)}function Gt(){var t,e,r,s,o=67*W+31,u=rt[o];return u?(W=u.nextPos,u.result):(t=W,e=W,(r=ne())!==n&&(s=Xt())!==n?e=r=[r,s]:(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"cv",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[o]={nextPos:W,result:t},t)}function Ht(){var t,e,r,s,o,u,f,i,l=67*W+32,c=rt[l];return c?(W=c.nextPos,c.result):(t=W,e=W,(r=Qt())!==n?(s=W,et++,o=Yt(),et--,o===n?s=void 0:(W=s,s=n),s!==n&&(o=Tt())!==n?(u=W,et++,f=xt(),et--,f===n?u=void 0:(W=u,u=n),u!==n?(f=W,et++,i=he(),et--,i!==n?(W=f,f=void 0):f=n,f!==n?e=r=[r,s,o,u,f]:(W=e,e=n)):(W=e,e=n)):(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"final_syllable",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[l]={nextPos:W,result:t},t)}function It(){var t,e,r,s,o,u,f,i=67*W+33,l=rt[i];if(l)return W=l.nextPos,l.result;for(t=W,e=W,r=[],(s=ne())===n&&(s=Vt());s!==n;)r.push(s),(s=ne())===n&&(s=Vt());return(s=ve())===n&&(s=null),(o=Yt())===n&&(o=null),(u=Kt())!==n&&(f=Pe())!==n?e=r=[r,s,o,u,f]:(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"stress",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[i]={nextPos:W,result:t},t}function Jt(){var t,e,r,s,o,u=67*W+34,f=rt[u];return f?(W=f.nextPos,f.result):(t=W,e=W,(r=Qt())!==n&&(s=Tt())!==n?((o=Nt())===n&&(o=null),e=r=[r,s,o]):(W=e,e=n),e===n&&(e=Lt()),e!==n&&(X=t,e=function(t){const e=st();return{rule:"any_syllable",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[u]={nextPos:W,result:t},t)}function Kt(){var t,e,r,s,o,u,f=67*W+35,i=rt[f];return i?(W=i.nextPos,i.result):(t=W,e=W,(r=Qt())!==n?(s=W,et++,o=Yt(),et--,o===n?s=void 0:(W=s,s=n),s!==n&&(o=Tt())!==n?((u=Nt())===n&&(u=null),e=r=[r,s,o,u]):(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"slaka",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[f]={nextPos:W,result:t},t)}function Lt(){var t,e,r,s,o,u=67*W+36,f=rt[u];return f?(W=f.nextPos,f.result):(t=W,e=W,(r=ne())!==n?(s=W,et++,o=se(),et--,o!==n?(W=s,s=void 0):s=n,s!==n&&(o=Nt())!==n?e=r=[r,s,o]:(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"consonantal_syllable",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[u]={nextPos:W,result:t},t)}function Nt(){var t,e,r,s,o,u,f=67*W+37,i=rt[f];return i?(W=i.nextPos,i.result):(t=W,e=W,r=W,et++,s=Jt(),et--,s===n?r=void 0:(W=r,r=n),r!==n&&(s=ne())!==n?(o=W,et++,u=Jt(),et--,u!==n?(W=o,o=void 0):o=n,o!==n?e=r=[r,s,o]:(W=e,e=n)):(W=e,e=n),e===n&&(e=W,(r=se())===n&&(r=null),(s=ne())===n&&(s=null),o=W,et++,u=Pe(),et--,u!==n?(W=o,o=void 0):o=n,o!==n?e=r=[r,s,o]:(W=e,e=n)),e!==n&&(X=t,e=function(t){const e=st();return{rule:"coda",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[f]={nextPos:W,result:t},t)}function Qt(){var e,r,s,o,u,f,i,l,c,a=67*W+38,d=rt[a];return d?(W=d.nextPos,d.result):(e=W,(r=ve())===n&&(r=W,(s=ne())===n&&(s=null),(o=Vt())!==n?r=s=[s,o]:(W=r,r=n),r===n&&(r=W,(s=re())===n&&(s=W,o=W,(u=de())!==n?(f=W,et++,i=function(){var e,r,s=67*W+60,o=rt[s];if(o)return W=o.nextPos,o.result;e=W,E.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(K));r!==n&&(X=e,r=function(t){const e=st();return{rule:"x",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r));return e=r,rt[s]={nextPos:W,result:e},e}(),et--,i===n?f=void 0:(W=f,f=n),f!==n?o=u=[u,f]:(W=o,o=n)):(W=o,o=n),o===n&&(o=W,(u=ae())!==n?(f=W,et++,(i=fe())===n&&(i=oe())===n&&(i=ie()),et--,i===n?f=void 0:(W=f,f=n),f!==n?o=u=[u,f]:(W=o,o=n)):(W=o,o=n)),o===n&&(o=null),(u=le())===n&&(u=W,(f=xe())===n&&(f=ce())===n&&(f=W,(i=fe())!==n?(l=W,et++,c=ie(),et--,c===n?l=void 0:(W=l,l=n),l!==n?f=i=[i,l]:(W=f,f=n)):(W=f,f=n)),f!==n?(i=W,et++,l=oe(),et--,l===n?i=void 0:(W=i,i=n),i!==n?u=f=[f,i]:(W=u,u=n)):(W=u,u=n),u===n&&(u=ue())),u===n&&(u=null),(f=oe())===n&&(f=ie()),f===n&&(f=null),s=o=[o,u,f]),s!==n?(o=W,et++,u=ne(),et--,u===n?o=void 0:(W=o,o=n),o!==n?(u=W,et++,f=Vt(),et--,f===n?u=void 0:(W=u,u=n),u!==n?r=s=[s,o,u]:(W=r,r=n)):(W=r,r=n)):(W=r,r=n))),r!==n&&(X=e,r=function(t){const e=st();return{rule:"onset",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[a]={nextPos:W,result:e},e)}function Tt(){var t,e,r,s,o,u=67*W+39,f=rt[u];return f?(W=f.nextPos,f.result):(t=W,(e=Xt())===n&&(e=Wt())===n&&(e=W,(r=Yt())!==n?(s=W,et++,o=Tt(),et--,o===n?s=void 0:(W=s,s=n),s!==n?e=r=[r,s]:(W=e,e=n)):(W=e,e=n)),e!==n&&(X=t,e=function(t){const e=st();return{rule:"nucleus",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[u]={nextPos:W,result:t},t)}function Vt(){var t,e,r,s,o,u=67*W+40,f=rt[u];return f?(W=f.nextPos,f.result):(t=W,e=W,(r=Zt())===n&&(r=te()),r!==n?(s=W,et++,o=Tt(),et--,o!==n?(W=s,s=void 0):s=n,s!==n?e=r=[r,s]:(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"glaide",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[u]={nextPos:W,result:t},t)}function Wt(){var e,r,s,o,u,l,d,x=67*W+41,v=rt[x];return v?(W=v.nextPos,v.result):(e=W,r=W,s=W,f.test(t.charAt(W))?(o=t.charAt(W),W++):(o=n,0===et&&it(z)),o!==n&&(u=te())!==n?(l=W,et++,d=function(){var e,r,s=67*W+44,o=rt[s];if(o)return W=o.nextPos,o.result;e=W,a.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(C));r!==n&&(X=e,r=function(t){const e=st();return{rule:"u",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r));return e=r,rt[s]={nextPos:W,result:e},e}(),et--,d===n?l=void 0:(W=l,l=n),l!==n?s=o=[o,u,l]:(W=s,s=n)):(W=s,s=n),s===n&&(s=W,i.test(t.charAt(W))?(o=t.charAt(W),W++):(o=n,0===et&&it(j)),o!==n&&(u=Zt())!==n?(l=W,et++,d=function(){var e,r,s=67*W+43,o=rt[s];if(o)return W=o.nextPos,o.result;e=W,c.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(k));r!==n&&(X=e,r=function(t){const e=st();return{rule:"i",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r));return e=r,rt[s]={nextPos:W,result:e},e}(),et--,d===n?l=void 0:(W=l,l=n),l!==n?s=o=[o,u,l]:(W=s,s=n)):(W=s,s=n)),s!==n?(o=W,et++,u=Tt(),et--,u===n?o=void 0:(W=o,o=n),o!==n?r=s=[s,o]:(W=r,r=n)):(W=r,r=n),r!==n&&(X=e,r=function(t){const e=st();return{rule:"re_zei_karsna",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[x]={nextPos:W,result:e},e)}function Xt(){var e,r,s,o,u,f=67*W+42,i=rt[f];return i?(W=i.nextPos,i.result):(e=W,r=W,l.test(t.charAt(W))?(s=t.charAt(W),W++):(s=n,0===et&&it(F)),s!==n?(o=W,et++,u=Tt(),et--,u===n?o=void 0:(W=o,o=n),o!==n?r=s=[s,o]:(W=r,r=n)):(W=r,r=n),r!==n&&(X=e,r=function(t){const e=st();return{rule:"pa_zei_karsna",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[f]={nextPos:W,result:e},e)}function Yt(){var e,r,s,o,u,f,i,l=67*W+45,c=rt[l];return c?(W=c.nextPos,c.result):(e=W,r=W,d.test(t.charAt(W))?(s=t.charAt(W),W++):(s=n,0===et&&it(O)),s!==n?(o=W,et++,u=W,f=W,et++,i=Yt(),et--,i===n?f=void 0:(W=f,f=n),f!==n&&(i=Tt())!==n?u=f=[f,i]:(W=u,u=n),et--,u===n?o=void 0:(W=o,o=n),o!==n?r=s=[s,o]:(W=r,r=n)):(W=r,r=n),r!==n&&(X=e,r=function(t){const e=st();return{rule:"y",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[l]={nextPos:W,result:e},e)}function Zt(){var e,r,s=67*W+46,o=rt[s];return o?(W=o.nextPos,o.result):(e=W,x.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(R)),r!==n&&(X=e,r=function(t){const e=st();return{rule:"ɩ",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[s]={nextPos:W,result:e},e)}function te(){var e,r,s=67*W+47,o=rt[s];return o?(W=o.nextPos,o.result):(e=W,v.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(M)),r!==n&&(X=e,r=function(t){const e=st();return{rule:"w",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[s]={nextPos:W,result:e},e)}function ee(){var t,e,r,s,o,u,f,i=67*W+48,l=rt[i];return l?(W=l.nextPos,l.result):(t=W,e=W,r=W,et++,s=Qt(),et--,s!==n?(W=r,r=void 0):r=n,r!==n&&(s=ne())!==n&&(o=ne())!==n?(u=W,et++,f=ne(),et--,f===n?u=void 0:(W=u,u=n),u!==n?e=r=[r,s,o,u]:(W=e,e=n)):(W=e,e=n),e!==n&&(X=t,e=function(t){const e=st();return{rule:"initial_pair",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[i]={nextPos:W,result:t},t)}function re(){var t,e,r,s,o=67*W+49,u=rt[o];return u?(W=u.nextPos,u.result):(t=W,e=W,(r=xe())!==n&&(s=de())!==n?e=r=[r,s]:(W=e,e=n),e===n&&(e=W,(r=ce())!==n&&(s=ae())!==n?e=r=[r,s]:(W=e,e=n)),e!==n&&(X=t,e=function(t){const e=st();return{rule:"affricate",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[o]={nextPos:W,result:t},t)}function ne(){var t,e,r=67*W+50,s=rt[r];return s?(W=s.nextPos,s.result):(t=W,(e=le())===n&&(e=ce())===n&&(e=ae())===n&&(e=de())===n&&(e=xe())===n&&(e=se()),e!==n&&(X=t,e=function(t){const e=st();return{rule:"zunsna",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[r]={nextPos:W,result:t},t)}function se(){var t,e,r=67*W+51,s=rt[r];return s?(W=s.nextPos,s.result):(t=W,(e=oe())===n&&(e=ue())===n&&(e=fe())===n&&(e=ie()),e!==n&&(X=t,e=function(t){const e=st();return{rule:"syllabic",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(e)),t=e,rt[r]={nextPos:W,result:t},t)}function oe(){var e,r,s=67*W+52,o=rt[s];return o?(W=o.nextPos,o.result):(e=W,h.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(U)),r!==n&&(X=e,r=function(t){const e=st();return{rule:"l",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[s]={nextPos:W,result:e},e)}function ue(){var e,r,s=67*W+53,o=rt[s];return o?(W=o.nextPos,o.result):(e=W,P.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(q)),r!==n&&(X=e,r=function(t){const e=st();return{rule:"m",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[s]={nextPos:W,result:e},e)}function fe(){var e,r,s,o,u,f=67*W+54,i=rt[f];return i?(W=i.nextPos,i.result):(e=W,r=W,p.test(t.charAt(W))?(s=t.charAt(W),W++):(s=n,0===et&&it(B)),s!==n?(o=W,et++,u=re(),et--,u===n?o=void 0:(W=o,o=n),o!==n?r=s=[s,o]:(W=r,r=n)):(W=r,r=n),r!==n&&(X=e,r=function(t){const e=st();return{rule:"n",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[f]={nextPos:W,result:e},e)}function ie(){var e,r,s=67*W+55,o=rt[s];return o?(W=o.nextPos,o.result):(e=W,g.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(D)),r!==n&&(X=e,r=function(t){const e=st();return{rule:"r",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[s]={nextPos:W,result:e},e)}function le(){var e,r,s=67*W+56,o=rt[s];return o?(W=o.nextPos,o.result):(e=W,A.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(G)),r!==n&&(X=e,r=function(t){const e=st();return{rule:"pfbgvkx",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[s]={nextPos:W,result:e},e)}function ce(){var e,r,s=67*W+57,o=rt[s];return o?(W=o.nextPos,o.result):(e=W,y.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(H)),r!==n&&(X=e,r=function(t){const e=st();return{rule:"d",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[s]={nextPos:W,result:e},e)}function ae(){var e,r,s=67*W+58,o=rt[s];return o?(W=o.nextPos,o.result):(e=W,_.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(I)),r!==n&&(X=e,r=function(t){const e=st();return{rule:"jz",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[s]={nextPos:W,result:e},e)}function de(){var e,r,s=67*W+59,o=rt[s];return o?(W=o.nextPos,o.result):(e=W,m.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(J)),r!==n&&(X=e,r=function(t){const e=st();return{rule:"cs",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[s]={nextPos:W,result:e},e)}function xe(){var e,r,s=67*W+61,o=rt[s];return o?(W=o.nextPos,o.result):(e=W,b.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(L)),r!==n&&(X=e,r=function(t){const e=st();return{rule:"t",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[s]={nextPos:W,result:e},e)}function ve(){var e,r,s,o,u,f=67*W+62,i=rt[f];return i?(W=i.nextPos,i.result):(e=W,r=W,$.test(t.charAt(W))?(s=t.charAt(W),W++):(s=n,0===et&&it(N)),s!==n?(o=W,et++,u=Tt(),et--,u!==n?(W=o,o=void 0):o=n,o!==n?r=s=[s,o]:(W=r,r=n)):(W=r,r=n),r!==n&&(X=e,r=function(t){const e=st();return{rule:"h",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[f]={nextPos:W,result:e},e)}function he(){var e,r,s,o,u=67*W+63,f=rt[u];return f?(W=f.nextPos,f.result):(e=W,(r=Pe())===n&&(r=W,s=W,et++,o=Tt(),et--,o===n?s=void 0:(W=s,s=n),s!==n&&(o=dt())!==n?r=s=[s,o]:(W=r,r=n),r===n&&(S.test(t.charAt(W))?(r=t.charAt(W),W++):(r=n,0===et&&it(Q)))),r!==n&&(X=e,r=function(t){const e=st();return{rule:"post_word",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[u]={nextPos:W,result:e},e)}function Pe(){var e,r,s,o=67*W+64,u=rt[o];return u?(W=u.nextPos,u.result):(e=W,(r=pe())===n&&(r=W,et++,t.length>W?(s=t.charAt(W),W++):(s=n,0===et&&it(T)),et--,s===n?r=void 0:(W=r,r=n)),r!==n&&(X=e,r=function(t){const e=st();return{rule:"pause",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[o]={nextPos:W,result:e},e)}function pe(){var e,r,s,o=67*W+65,u=rt[o];if(u)return W=u.nextPos,u.result;if(e=W,r=[],w.test(t.charAt(W))?(s=t.charAt(W),W++):(s=n,0===et&&it(V)),s!==n)for(;s!==n;)r.push(s),w.test(t.charAt(W))?(s=t.charAt(W),W++):(s=n,0===et&&it(V));else r=n;return r!==n&&(X=e,r=function(t){const e=st();return{rule:"pause_0",text:nt(),start:e.start.offset,end:e.end.offset,children:t}}(r)),e=r,rt[o]={nextPos:W,result:e},e}if((r=u())!==n&&W===t.length)return r;throw r!==n&&W<t.length&&it({type:"end"}),lt(tt,Z<t.length?t.charAt(Z):null,Z<t.length?ft(Z,Z+1):ft(Z,Z))}peg$subclass(peg$SyntaxError,Error),peg$SyntaxError.prototype.format=function(t){var e="Error: "+this.message;if(this.location){var r,n=null;for(r=0;r<t.length;r++)if(t[r].source===this.location.source){n=t[r].text.split(/\r\n|\n|\r/g);break}var s=this.location.start,o=this.location.source+":"+s.line+":"+s.column;if(n){var u=this.location.end,f=peg$padEnd("",s.line.toString().length),i=n[s.line-1],l=s.line===u.line?u.column:i.length+1;e+="\n --\x3e "+o+"\n"+f+" |\n"+s.line+" | "+i+"\n"+f+" | "+peg$padEnd("",s.column-1)+peg$padEnd("",l-s.column,"^")}else e+="\n at "+o}return e},peg$SyntaxError.buildMessage=function(t,e){var r={literal:function(t){return'"'+s(t.text)+'"'},class:function(t){var e=t.parts.map((function(t){return Array.isArray(t)?o(t[0])+"-"+o(t[1]):o(t)}));return"["+(t.inverted?"^":"")+e+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function s(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function o(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function u(t){return r[t.type](t)}return"Expected "+function(t){var e,r,n=t.map(u);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+function(t){return t?'"'+s(t)+'"':"end of input"}(e)+" found."};export{peg$SyntaxError as SyntaxError,peg$parse as parse};