/*
var log = console.log.bind(console);
p = function (object) {
  return JSON.stringify(object);
};
*/
var searchIdCounter = 0;

var cmaxes=function(){"use strict";function t(t,r){function e(){this.constructor=t}e.prototype=r.prototype,t.prototype=new e}function r(t,e,n,u){this.message=t,this.expected=e,this.found=n,this.location=u,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}function e(t,e){function n(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function u(){return{type:"any"}}function o(){return{type:"end"}}function s(t){return{type:"other",description:t}}function i(r){var e,n=Rr[r];if(n)return n;for(e=r-1;!Rr[e];)e--;for(n=Rr[e],n={line:n.line,column:n.column};e<r;)10===t.charCodeAt(e)?(n.line++,n.column=1):n.column++,e++;return Rr[r]=n,n}function l(t,r){var e=i(t),n=i(r);return{start:{offset:t,line:e.line,column:e.column},end:{offset:r,line:n.line,column:n.column}}}function c(t){kr<Mr||(kr>Mr&&(Mr=kr,Or=[]),Or.push(t))}function a(t,e,n){return new r(r.buildMessage(t,e),t,e,n)}function f(){var t,r,e,n=64*kr+0,u=Zr[n];if(u)return kr=u.nextPos,u.result;for(t=kr,r=[],e=v();e!==Ft;)r.push(e),e=v();return r!==Ft&&(zr=t,r=bt(r)),t=r,Zr[n]={nextPos:kr,result:t},t}function v(){var t,r,e=64*kr+1,n=Zr[e];return n?(kr=n.nextPos,n.result):(t=kr,r=x(),r!==Ft&&(zr=t,r=Ct(r)),t=r,Zr[e]={nextPos:kr,result:t},t)}function x(){var t,r,e,n,u,o,s,i,l,c,a,f=64*kr+2,v=Zr[f];return v?(kr=v.nextPos,v.result):(t=gt(),t===Ft&&(t=P(),t===Ft&&(t=kr,r=A(),r!==Ft&&(zr=t,r=jt(r)),t=r,t===Ft&&(t=kr,r=d(),r!==Ft&&(zr=t,r=kt(r)),t=r,t===Ft&&(t=kr,r=kr,e=kr,Tr++,n=d(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=kr,Tr++,u=p(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(u=kr,Tr++,o=A(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=kr,Tr++,s=kr,i=O(),i!==Ft?(l=ht(),l!==Ft?(c=_(),c!==Ft?(a=L(),a!==Ft?(i=[i,l,c,a],s=i):(kr=s,s=Ft)):(kr=s,s=Ft)):(kr=s,s=Ft)):(kr=s,s=Ft),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(s=g(),s!==Ft?(e=[e,n,u,o,s],r=e):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft),r!==Ft&&(zr=t,r=zt(r)),t=r,t===Ft&&(t=kr,r=p(),r!==Ft&&(zr=t,r=Rt(r)),t=r))))),Zr[f]={nextPos:kr,result:t},t)}function P(){var t,r,e,n,u,o,s=64*kr+3,i=Zr[s];if(i)return kr=i.nextPos,i.result;if(t=kr,r=kr,e=kr,Tr++,n=F(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft){if(n=[],u=G(),u!==Ft)for(;u!==Ft;)n.push(u),u=G();else n=Ft;n!==Ft?(u=kr,Tr++,o=At(),Tr--,o!==Ft?(kr=u,u=void 0):u=Ft,u!==Ft?(e=[e,n,u],r=e):(kr=r,r=Ft)):(kr=r,r=Ft)}else kr=r,r=Ft;return r===Ft&&(r=F()),r!==Ft&&(zr=t,r=Mt(r)),t=r,Zr[s]={nextPos:kr,result:t},t}function d(){var t,r,e,n,u,o,s,i=64*kr+4,l=Zr[i];return l?(kr=l.nextPos,l.result):(t=kr,r=U(),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=kr,Tr++,u=B(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft?(u=X(),u!==Ft?(o=kr,Tr++,s=pt(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(r=[r,e,n,u,o],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[i]={nextPos:kr,result:t},t)}function h(){var t,r,e,n,u,o,s=64*kr+5,i=Zr[s];if(i)return kr=i.nextPos,i.result;if(t=kr,r=w(),r!==Ft)if(e=H(),e!==Ft)if(n=kr,Tr++,u=D(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft){for(u=[],o=I();o!==Ft;)u.push(o),o=I();u!==Ft?(r=[r,e,n,u],t=r):(kr=t,t=Ft)}else kr=t,t=Ft;else kr=t,t=Ft;else kr=t,t=Ft;return Zr[s]={nextPos:kr,result:t},t}function p(){var t,r,e,n=64*kr+6,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=h(),r!==Ft?(e=B(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[n]={nextPos:kr,result:t},t)}function A(){var t,r,e,n,u,o,s,i,l,c,a,f=64*kr+7,v=Zr[f];if(v)return kr=v.nextPos,v.result;if(t=kr,r=kr,Tr++,e=P(),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft)if(e=kr,Tr++,n=kr,u=R(),u!==Ft?(o=kr,Tr++,s=D(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(s=_(),s!==Ft?(i=ht(),i===Ft&&(i=null),i!==Ft?(l=g(),l!==Ft?(u=[u,o,s,i,l],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft),n===Ft&&(n=kr,u=R(),u!==Ft?(o=kr,Tr++,s=D(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(s=_(),s!==Ft?(i=J(),i!==Ft?(u=[u,o,s,i],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft){if(n=kr,u=kr,Tr++,o=ht(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft){if(o=kr,Tr++,s=kr,i=ut(),i!==Ft){if(l=[],c=ut(),c!==Ft)for(;c!==Ft;)l.push(c),c=ut();else l=Ft;l!==Ft?(i=[i,l],s=i):(kr=s,s=Ft)}else kr=s,s=Ft;if(Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft)if(s=L(),s!==Ft){for(i=[],l=kr,c=Q(),c!==Ft?(a=ht(),a!==Ft?(c=[c,a],l=c):(kr=l,l=Ft)):(kr=l,l=Ft);l!==Ft;)i.push(l),l=kr,c=Q(),c!==Ft?(a=ht(),a!==Ft?(c=[c,a],l=c):(kr=l,l=Ft)):(kr=l,l=Ft);i!==Ft?(l=Q(),l!==Ft?(u=[u,o,s,i,l],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)}else kr=n,n=Ft;else kr=n,n=Ft}else kr=n,n=Ft;if(n===Ft)if(n=[],u=_(),u!==Ft)for(;u!==Ft;)n.push(u),u=_();else n=Ft;n!==Ft?(u=kr,Tr++,o=pt(),Tr--,o!==Ft?(kr=u,u=void 0):u=Ft,u!==Ft?(r=[r,e,n,u],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)}else kr=t,t=Ft;else kr=t,t=Ft;return Zr[f]={nextPos:kr,result:t},t}function g(){var t,r,e,n,u,o,s,i,l=64*kr+8,c=Zr[l];if(c)return kr=c.nextPos,c.result;for(t=kr,r=[],e=kr,n=z(),n===Ft&&(n=S(),n===Ft&&(n=C(),n===Ft&&(n=kr,u=kr,Tr++,o=m(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=j(),o!==Ft?(s=kr,Tr++,i=m(),Tr--,i===Ft?s=void 0:(kr=s,s=Ft),s!==Ft?(u=[u,o,s],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)))),n!==Ft&&(zr=e,n=Ot(n)),e=n;e!==Ft;)r.push(e),e=kr,n=z(),n===Ft&&(n=S(),n===Ft&&(n=C(),n===Ft&&(n=kr,u=kr,Tr++,o=m(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=j(),o!==Ft?(s=kr,Tr++,i=m(),Tr--,i===Ft?s=void 0:(kr=s,s=Ft),s!==Ft?(u=[u,o,s],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)))),n!==Ft&&(zr=e,n=Ot(n)),e=n;return r!==Ft?(e=kr,n=p(),n===Ft&&(n=Z()),n!==Ft&&(zr=e,n=Tt(n)),e=n,e===Ft&&(e=kr,n=k(),n===Ft&&(n=E(),n===Ft&&(n=b(),n===Ft&&(n=kr,u=T(),u!==Ft?(o=kr,Tr++,s=D(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)))),n!==Ft?(u=J(),u!==Ft?(zr=e,n=Zt(n,u),e=n):(kr=e,e=Ft)):(kr=e,e=Ft)),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[l]={nextPos:kr,result:t},t}function m(){var t,r=64*kr+9,e=Zr[r];return e?(kr=e.nextPos,e.result):(t=p(),t===Ft&&(t=S(),t===Ft&&(t=E())),Zr[r]={nextPos:kr,result:t},t)}function y(){var t,r,e,n,u,o,s,i,l=64*kr+10,c=Zr[l];if(c)return kr=c.nextPos,c.result;for(t=kr,r=[],e=j();e!==Ft;)r.push(e),e=j();return r!==Ft?(e=Z(),e===Ft&&(e=kr,n=T(),n!==Ft?(u=kr,Tr++,o=D(),Tr--,o!==Ft?(kr=u,u=void 0):u=Ft,u!==Ft?(o=kr,Tr++,s=_(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(s=J(),s!==Ft?(n=[n,u,o,s],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=C(),e===Ft&&(e=b(),e===Ft&&(e=kr,n=kr,u=T(),u!==Ft?(o=kr,Tr++,s=D(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(s=kr,Tr++,i=_(),Tr--,i===Ft?s=void 0:(kr=s,s=Ft),s!==Ft?(u=[u,o,s],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft),n===Ft&&(n=null),n!==Ft?(u=et(),u!==Ft?(o=_(),o!==Ft?(n=[n,u,o],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=z(),e===Ft&&(e=k())))))),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[l]={nextPos:kr,result:t},t}function w(){var t,r,e,n,u,o,s,i,l=64*kr+11,c=Zr[l];if(c)return kr=c.nextPos,c.result;if(t=kr,r=kr,Tr++,e=y(),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft)if(e=kr,Tr++,n=A(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft)if(n=kr,Tr++,u=kr,o=kr,Tr++,s=y(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(s=ut(),s!==Ft?(i=y(),i!==Ft?(o=[o,s,i],u=o):(kr=u,u=Ft)):(kr=u,u=Ft)):(kr=u,u=Ft),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft)if(u=kr,Tr++,o=ht(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft)if(o=kr,Tr++,s=L(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft){for(s=[],i=N();i!==Ft;)s.push(i),i=N();s!==Ft?(r=[r,e,n,u,o,s],t=r):(kr=t,t=Ft)}else kr=t,t=Ft;else kr=t,t=Ft;else kr=t,t=Ft;else kr=t,t=Ft;else kr=t,t=Ft;return Zr[l]={nextPos:kr,result:t},t}function F(){var t,r,e,n,u,o,s,i=64*kr+12,l=Zr[i];if(l)return kr=l.nextPos,l.result;if(t=kr,r=kr,Tr++,e=ht(),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft){for(e=[],n=Q(),n===Ft&&(n=V(),n===Ft&&(n=ht(),n===Ft&&(n=kr,u=ut(),u!==Ft?(o=kr,Tr++,s=At(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft))));n!==Ft;)e.push(n),n=Q(),n===Ft&&(n=V(),n===Ft&&(n=ht(),n===Ft&&(n=kr,u=ut(),u!==Ft?(o=kr,Tr++,s=At(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft))));e!==Ft?(n=ut(),n!==Ft?(u=kr,Tr++,o=At(),Tr--,o!==Ft?(kr=u,u=void 0):u=Ft,u!==Ft?(r=[r,e,n,u],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)}else kr=t,t=Ft;return Zr[i]={nextPos:kr,result:t},t}function E(){var t,r,e,n,u=64*kr+13,o=Zr[u];return o?(kr=o.nextPos,o.result):(t=kr,r=h(),r!==Ft?(e=ht(),e!==Ft?(n=_(),n!==Ft?(zr=t,r=Jt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),t===Ft&&(t=kr,r=kr,e=h(),e!==Ft?(n=L(),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),r!==Ft?(e=_(),e!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)),Zr[u]={nextPos:kr,result:t},t)}function S(){var t,r,e,n,u,o=64*kr+14,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=kr,e=kr,Tr++,n=N(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=w(),n!==Ft?(u=L(),u!==Ft?(e=[e,n,u],r=e):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft),r!==Ft?(e=_(),e!==Ft?(n=ht(),n===Ft&&(n=null),n!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function b(){var t,r,e,n,u=64*kr+15,o=Zr[u];return o?(kr=o.nextPos,o.result):(t=kr,r=U(),r===Ft&&(r=R()),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=_(),n!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[u]={nextPos:kr,result:t},t)}function C(){var t,r,e,n,u,o=64*kr+16,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=U(),r===Ft&&(r=R()),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=_(),n!==Ft?(u=ht(),u===Ft&&(u=null),u!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function j(){var t,r,e,n,u,o,s,i,l,c,a=64*kr+17,f=Zr[a];return f?(kr=f.nextPos,f.result):(t=kr,r=kr,Tr++,e=C(),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft?(e=kr,Tr++,n=b(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=kr,Tr++,u=z(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(u=kr,Tr++,o=k(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=T(),o!==Ft?(s=kr,Tr++,i=D(),Tr--,i===Ft?s=void 0:(kr=s,s=Ft),s!==Ft?(i=kr,Tr++,l=_(),Tr--,l===Ft?i=void 0:(kr=i,i=Ft),i!==Ft?(l=kr,Tr++,c=ht(),Tr--,c===Ft?l=void 0:(kr=l,l=Ft),l!==Ft?(r=[r,e,n,u,o,s,i,l],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[a]={nextPos:kr,result:t},t)}function k(){var t,r,e,n,u,o=64*kr+18,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=kr,e=U(),e!==Ft?(n=X(),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),r===Ft&&(r=T()),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=ht(),n!==Ft?(u=_(),u!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function z(){var t,r,e,n,u,o,s=64*kr+19,i=Zr[s];return i?(kr=i.nextPos,i.result):(t=kr,r=kr,e=U(),e!==Ft?(n=X(),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),r===Ft&&(r=T()),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=ht(),n!==Ft?(u=_(),u!==Ft?(o=ht(),o===Ft&&(o=null),o!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[s]={nextPos:kr,result:t},t)}function R(){var t,r,e,n=64*kr+20,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=q(),r!==Ft?(e=ut(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[n]={nextPos:kr,result:t},t)}function M(){var t,r=64*kr+21,e=Zr[r];return e?(kr=e.nextPos,e.result):(t=R(),t===Ft&&(t=O()),Zr[r]={nextPos:kr,result:t},t)}function O(){var t,r,e,n=64*kr+22,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=et(),r!==Ft?(e=X(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[n]={nextPos:kr,result:t},t)}function T(){var t,r,e,n,u,o,s,i=64*kr+23,l=Zr[i];return l?(kr=l.nextPos,l.result):(t=M(),t===Ft&&(t=kr,r=ut(),r!==Ft?(e=kr,n=X(),n!==Ft?(u=kr,Tr++,o=D(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=ht(),o!==Ft?(s=X(),s!==Ft?(n=[n,u,o,s],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=W()),e!==Ft?(n=kr,u=ct(),u!==Ft?(o=kr,Tr++,s=ut(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft),n===Ft&&(n=kr,u=lt(),u!==Ft?(o=kr,Tr++,s=ct(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)),n===Ft&&(n=null),n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)),Zr[i]={nextPos:kr,result:t},t)}function Z(){var t,r,e,n,u,o,s,i,l=64*kr+24,c=Zr[l];return c?(kr=c.nextPos,c.result):(t=d(),t===Ft&&(t=kr,r=q(),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=ht(),n!==Ft?(u=kr,Tr++,o=B(),Tr--,o!==Ft?(kr=u,u=void 0):u=Ft,u!==Ft?(o=X(),o!==Ft?(s=kr,Tr++,i=pt(),Tr--,i!==Ft?(kr=s,s=void 0):s=Ft,s!==Ft?(r=[r,e,n,u,o,s],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)),Zr[l]={nextPos:kr,result:t},t)}function J(){var t,r,e,n,u,o=64*kr+25,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=kr,Tr++,e=B(),Tr--,e!==Ft?(kr=r,r=void 0):r=Ft,r!==Ft?(e=kr,n=ut(),n!==Ft?(u=W(),u!==Ft?(n=[n,u],e=n):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=O()),e!==Ft?(n=kr,Tr++,u=pt(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function N(){var t,r,e,n,u=64*kr+26,o=Zr[u];return o?(kr=o.nextPos,o.result):(t=kr,r=H(),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),t===Ft&&(t=I()),Zr[u]={nextPos:kr,result:t},t)}function U(){var t,r,e,n=64*kr+27,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=M(),r!==Ft?(e=ut(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[n]={nextPos:kr,result:t},t)}function q(){var t,r,e,n=64*kr+28,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=ut(),r!==Ft?(e=X(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[n]={nextPos:kr,result:t},t)}function B(){var t,r,e,n,u,o,s,i=64*kr+29,l=Zr[i];return l?(kr=l.nextPos,l.result):(t=kr,r=L(),r!==Ft?(e=kr,Tr++,n=_(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=Q(),n!==Ft?(u=kr,Tr++,o=P(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=kr,Tr++,s=pt(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(r=[r,e,n,u,o],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[i]={nextPos:kr,result:t},t)}function D(){var t,r,e,n,u,o,s=64*kr+30,i=Zr[s];if(i)return kr=i.nextPos,i.result;for(t=kr,r=[],e=ut(),e===Ft&&(e=V());e!==Ft;)r.push(e),e=ut(),e===Ft&&(e=V());return r!==Ft?(e=ht(),e===Ft&&(e=null),e!==Ft?(n=_(),n===Ft&&(n=null),n!==Ft?(u=H(),u!==Ft?(o=At(),o!==Ft?(r=[r,e,n,u,o],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[s]={nextPos:kr,result:t},t}function G(){var t,r,e,n,u,o=64*kr+31,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=kr,Tr++,e=kr,n=L(),n!==Ft?(u=_(),u!==Ft?(n=[n,u],e=n):(kr=e,e=Ft)):(kr=e,e=Ft),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft?(e=H(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),t===Ft&&(t=I()),Zr[o]={nextPos:kr,result:t},t)}function H(){var t,r,e,n,u,o=64*kr+32,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=L(),r!==Ft?(e=kr,Tr++,n=_(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=Q(),n!==Ft?(u=K(),u===Ft&&(u=null),u!==Ft?(r=[r,e,n,u],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function I(){var t,r,e,n,u=64*kr+33,o=Zr[u];return o?(kr=o.nextPos,o.result):(t=kr,r=ut(),r!==Ft?(e=kr,Tr++,n=ot(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=K(),n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[u]={nextPos:kr,result:t},t)}function K(){var t,r,e,n,u,o=64*kr+34,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=kr,Tr++,e=G(),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft?(e=ut(),e!==Ft?(n=kr,Tr++,u=G(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),t===Ft&&(t=kr,r=ot(),r===Ft&&(r=null),r!==Ft?(e=ut(),e===Ft&&(e=null),e!==Ft?(n=kr,Tr++,u=At(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)),Zr[o]={nextPos:kr,result:t},t)}function L(){var t,r,e,n,u,o,s,i,l=64*kr+35,c=Zr[l];return c?(kr=c.nextPos,c.result):(t=ht(),t===Ft&&(t=V(),t===Ft&&(t=kr,r=nt(),r===Ft&&(r=kr,e=kr,n=xt(),n!==Ft?(u=kr,Tr++,o=Pt(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(n=[n,u],e=n):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=kr,n=vt(),n!==Ft?(u=kr,Tr++,o=lt(),o===Ft&&(o=st(),o===Ft&&(o=ct())),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(n=[n,u],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)),e===Ft&&(e=null),e!==Ft?(n=at(),n===Ft&&(n=kr,u=dt(),u===Ft&&(u=ft(),u===Ft&&(u=kr,o=lt(),o!==Ft?(s=kr,Tr++,i=ct(),Tr--,i===Ft?s=void 0:(kr=s,s=Ft),s!==Ft?(o=[o,s],u=o):(kr=u,u=Ft)):(kr=u,u=Ft))),u!==Ft?(o=kr,Tr++,s=st(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft),n===Ft&&(n=it())),n===Ft&&(n=null),n!==Ft?(u=st(),u===Ft&&(u=ct()),u===Ft&&(u=null),u!==Ft?(e=[e,n,u],r=e):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft)),r!==Ft?(e=kr,Tr++,n=ut(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft))),Zr[l]={nextPos:kr,result:t},t)}function Q(){var t,r,e,n,u=64*kr+36,o=Zr[u];return o?(kr=o.nextPos,o.result):(t=X(),t===Ft&&(t=W(),t===Ft&&(t=kr,r=_(),r!==Ft?(e=kr,Tr++,n=Q(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft))),Zr[u]={nextPos:kr,result:t},t)}function V(){var t,r,e,n,u,o=64*kr+37,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=tt(),r===Ft&&(r=rt()),r!==Ft?(e=kr,Tr++,n=Q(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function W(){var r,e,n,u,o,s,i=64*kr+38,l=Zr[i];return l?(kr=l.nextPos,l.result):(r=kr,e=kr,Ut.test(t.charAt(kr))?(n=t.charAt(kr),kr++):(n=Ft,0===Tr&&c(qt)),n!==Ft?(u=rt(),u!==Ft?(o=kr,Tr++,s=$(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(n=[n,u,o],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=kr,Bt.test(t.charAt(kr))?(n=t.charAt(kr),kr++):(n=Ft,0===Tr&&c(Dt)),n!==Ft?(u=tt(),u!==Ft?(o=kr,Tr++,s=Y(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(n=[n,u,o],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft)),e!==Ft?(n=kr,Tr++,u=Q(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[i]={nextPos:kr,result:r},r)}function X(){var r,e,n,u,o=64*kr+39,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,Gt.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(Ht)),e!==Ft?(n=kr,Tr++,u=Q(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function Y(){var r,e=64*kr+40,n=Zr[e];return n?(kr=n.nextPos,n.result):(It.test(t.charAt(kr))?(r=t.charAt(kr),kr++):(r=Ft,0===Tr&&c(Kt)),Zr[e]={nextPos:kr,result:r},r)}function $(){var r,e=64*kr+41,n=Zr[e];return n?(kr=n.nextPos,n.result):(Lt.test(t.charAt(kr))?(r=t.charAt(kr),kr++):(r=Ft,0===Tr&&c(Qt)),Zr[e]={nextPos:kr,result:r},r)}function _(){var r,e,n,u,o,s,i=64*kr+42,l=Zr[i];return l?(kr=l.nextPos,l.result):(r=kr,Vt.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(Wt)),e!==Ft?(n=kr,Tr++,u=kr,o=kr,Tr++,s=_(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(s=Q(),s!==Ft?(o=[o,s],u=o):(kr=u,u=Ft)):(kr=u,u=Ft),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[i]={nextPos:kr,result:r},r)}function tt(){var r,e=64*kr+43,n=Zr[e];return n?(kr=n.nextPos,n.result):(Xt.test(t.charAt(kr))?(r=t.charAt(kr),kr++):(r=Ft,0===Tr&&c(Yt)),Zr[e]={nextPos:kr,result:r},r)}function rt(){var r,e,n=64*kr+44,u=Zr[n];return u?(kr=u.nextPos,u.result):(r=kr,$t.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(_t)),e!==Ft&&(zr=r,e=tr()),r=e,Zr[n]={nextPos:kr,result:r},r)}function et(){var t,r,e,n,u,o,s=64*kr+45,i=Zr[s];return i?(kr=i.nextPos,i.result):(t=kr,r=kr,Tr++,e=L(),Tr--,e!==Ft?(kr=r,r=void 0):r=Ft,r!==Ft?(e=ut(),e!==Ft?(n=ut(),n!==Ft?(u=kr,Tr++,o=ut(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(r=[r,e,n,u],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[s]={nextPos:kr,result:t},t)}function nt(){var t,r,e,n=64*kr+46,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=dt(),r!==Ft?(e=xt(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),t===Ft&&(t=kr,r=ft(),r!==Ft?(e=vt(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)),Zr[n]={nextPos:kr,result:t},t)}function ut(){var t,r=64*kr+47,e=Zr[r];return e?(kr=e.nextPos,e.result):(t=at(),t===Ft&&(t=ft(),t===Ft&&(t=vt(),t===Ft&&(t=xt(),t===Ft&&(t=dt(),t===Ft&&(t=ot()))))),Zr[r]={nextPos:kr,result:t},t)}function ot(){var t,r=64*kr+48,e=Zr[r];return e?(kr=e.nextPos,e.result):(t=st(),t===Ft&&(t=it(),t===Ft&&(t=lt(),t===Ft&&(t=ct()))),Zr[r]={nextPos:kr,result:t},t)}function st(){var r,e,n,u,o=64*kr+49,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,rr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(er)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function it(){var r,e,n,u,o=64*kr+50,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,nr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(ur)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function lt(){var r,e,n,u,o,s=64*kr+51,i=Zr[s];return i?(kr=i.nextPos,i.result):(r=kr,or.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(sr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(u=kr,Tr++,o=nt(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(e=[e,n,u],r=e):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[s]={nextPos:kr,result:r},r)}function ct(){var r,e,n,u,o=64*kr+52,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,ir.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(lr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function at(){var r,e,n,u,o=64*kr+53,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,cr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(ar)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function ft(){var r,e,n,u,o=64*kr+54,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,fr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(vr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function vt(){var r,e,n,u,o=64*kr+55,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,xr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(Pr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function xt(){var r,e,n,u,o=64*kr+56,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,dr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(hr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function Pt(){var r,e,n,u,o=64*kr+57,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,pr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(Ar)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function dt(){var r,e,n,u,o=64*kr+58,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,gr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(mr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function ht(){var r,e,n,u,o=64*kr+59,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,yr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(wr)),e!==Ft?(n=kr,Tr++,u=Q(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function pt(){var r,e,n,u=64*kr+60,o=Zr[u];return o?(kr=o.nextPos,o.result):(r=At(),r===Ft&&(r=kr,e=kr,Tr++,n=Q(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=x(),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),r===Ft&&(Fr.test(t.charAt(kr))?(r=t.charAt(kr),kr++):(r=Ft,0===Tr&&c(Er)))),Zr[u]={nextPos:kr,result:r},r)}function At(){var r,e,n=64*kr+61,u=Zr[n];return u?(kr=u.nextPos,u.result):(r=gt(),r===Ft&&(r=kr,Tr++,t.length>kr?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(Sr)),Tr--,e===Ft?r=void 0:(kr=r,r=Ft)),Zr[n]={nextPos:kr,result:r},r)}function gt(){var r,e,n,u=64*kr+62,o=Zr[u];if(o)return kr=o.nextPos,o.result;if(r=kr,e=[],br.test(t.charAt(kr))?(n=t.charAt(kr),kr++):(n=Ft,0===Tr&&c(Cr)),n!==Ft)for(;n!==Ft;)e.push(n),br.test(t.charAt(kr))?(n=t.charAt(kr),kr++):(n=Ft,0===Tr&&c(Cr));else e=Ft;return e!==Ft&&(zr=r,e=jr(e)),r=e,Zr[u]={nextPos:kr,result:r},r}function mt(t){if("string"==typeof t)return t;var r="";for(var e in t)r+=mt(t[e]);return r}function yt(t){if("string"==typeof t)return t;var r=[];for(var e in t)r.push(yt(t[e]));return r}e=void 0!==e?e:{};var wt,Ft={},Et={text:f},St=f,bt=function(t){return yt(t)},Ct=function(t){return t},jt=function(t){return["cmavo",mt(t)]},kt=function(t){return["gismu",mt(t)]},zt=function(t){return["lujvo",mt(t)]},Rt=function(t){return["fu'ivla",mt(t)]},Mt=function(t){return["cmevla",mt(t)]},Ot=function(t){return[mt(t),"-"]},Tt=function(t){return[mt(t)]},Zt=function(t,r){return[mt(t),"-",mt(r)]},Jt=function(t){return[mt(t),""]},Nt=function(t){return[mt(t),""]},Ut=/^[a]/,qt=n(["a"],!1,!1),Bt=/^[aeo]/,Dt=n(["a","e","o"],!1,!1),Gt=/^[aeiou]/,Ht=n(["a","e","i","o","u"],!1,!1),It=/^[i]/,Kt=n(["i"],!1,!1),Lt=/^[u]/,Qt=n(["u"],!1,!1),Vt=/^[y]/,Wt=n(["y"],!1,!1),Xt=/^[i\u0269]/,Yt=n(["i","ɩ"],!1,!1),$t=/^[uw]/,_t=n(["u","w"],!1,!1),tr=function(){return["u",""]},rr=/^[l]/,er=n(["l"],!1,!1),nr=/^[m]/,ur=n(["m"],!1,!1),or=/^[n]/,sr=n(["n"],!1,!1),ir=/^[r]/,lr=n(["r"],!1,!1),cr=/^[pfbgvkx]/,ar=n(["p","f","b","g","v","k","x"],!1,!1),fr=/^[d]/,vr=n(["d"],!1,!1),xr=/^[jz]/,Pr=n(["j","z"],!1,!1),dr=/^[cs]/,hr=n(["c","s"],!1,!1),pr=/^[x]/,Ar=n(["x"],!1,!1),gr=/^[t]/,mr=n(["t"],!1,!1),yr=/^[,']/,wr=n([",","'"],!1,!1),Fr=/^[}]/,Er=n(["}"],!1,!1),Sr=u(),br=/^[^a-zA-Z,']/,Cr=n([["a","z"],["A","Z"],",","'"],!0,!1),jr=function(t){return["space",mt(t)]},kr=(n([" "],!0,!1),0),zr=0,Rr=[{line:1,column:1}],Mr=0,Or=[],Tr=0,Zr={};if("startRule"in e){if(!(e.startRule in Et))throw new Error("Can't start parsing from rule \""+e.startRule+'".');St=Et[e.startRule]}if(wt=St(),wt!==Ft&&kr===t.length)return wt;throw wt!==Ft&&kr<t.length&&c(o()),a(Or,Mr<t.length?t.charAt(Mr):null,Mr<t.length?l(Mr,Mr+1):l(Mr,Mr))}return t(r,Error),r.buildMessage=function(t,r){function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}function n(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+e(t)})}function u(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+e(t)})}function o(t){return l[t.type](t)}function s(t){var r,e,n=new Array(t.length);for(r=0;r<t.length;r++)n[r]=o(t[r]);if(n.sort(),n.length>0){for(r=1,e=1;r<n.length;r++)n[r-1]!==n[r]&&(n[e]=n[r],e++);n.length=e}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function i(t){return t?'"'+n(t)+'"':"end of input"}var l={literal:function(t){return'"'+n(t.text)+'"'},"class":function(t){var r,e="";for(r=0;r<t.parts.length;r++)e+=t.parts[r]instanceof Array?u(t.parts[r][0])+"-"+u(t.parts[r][1]):u(t.parts[r]);return"["+(t.inverted?"^":"")+e+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};return"Expected "+s(t)+" but "+i(r)+" found."},{SyntaxError:r,parse:e}}();

var ma_klesi_lo_valsi = function(str){
  if (!window.xuzganalojudri||str.search(/[^aeiouyAEIOY]'/)>-1) return ['',''];
  var j;var re;
  try {
    j = cmaxes.parse(str.toLowerCase().replace(/,/g,'')).toString().split(",");
    if (str.indexOf(' zei ')>-1) return ['zei-lujvo',str];
  }
  catch(e) {
    j='';
  }
  if (j.length===2) {
    return [j[0],''];
  }
  else if (j.length>2 && j.filter(function(el, index) {return index % 2 === 0;}).toString().match(/^cmavo(,cmavo)+$/)){
    return ['cmavo compound',j.filter(function(el, index) {return index % 2 === 1;}).join(" ")];
  }
  else return ['',''];
};

function ma_ve_lujvo(a) {
  if (!window.xuzganalojudri) return;
  if (a.indexOf(' zei ')>-1) return ["@"].concat(a.split(" "));
  var t;
  try{t=cmaxes.parse(a).toString().split(",");}catch(err){return;}
  if (t[0]!=='lujvo'||t.length!==2) return;
  t = t[1].split("-").map(
    function(a){
      var k = a.substring(0, 4);
      if(a.length===5 && k==='brod'){k=a;}
      return k;
    });
  return t;
}

var rafsi = {};
var cmima = documentStore.length;
while (cmima--) {
var def = documentStore[cmima];
  var i=(def.r||[]).length;
  while (i--) {
    rafsi[(def.r[i]||'')] = def;
  }
}

function jmina_lo_se_claxu(doc){
  if (!doc.t||doc.t===''){
    if (window.muplis||!window.xuzganalojudri){
      doc.t='';
    } else {
      var ye=ma_klesi_lo_valsi(doc.w);
      doc.t=ye[0];
    }
  }
  return doc;
}

window.storecache=documentStore.map(function(a){
  return Object.keys(a).map(function (cmima) {return a[cmima];}).join(";").toLowerCase();
});

function sisku(query, callback) {
  if (query.length === 0) return;
  var searchId = ++searchIdCounter;
  var preciseMatches = [];
  var queryP=query.replace(/h/g,"'").toLowerCase();
  var queryDecomposition = window.xuzganalojudri? queryP.replace(/ zei /g,'-zei-').split(" ").map(function(a){return a.replace(/-zei-/g,' zei ');}) : [ queryP ];
  var kij=[];
  var ki=[];
  //var ff;
  var lo_matra_cu_cupra=[];
  function julne(a){
    
    return a.filter(function(n){ return n !== undefined; }).map(function(a){return jmina_lo_se_claxu(a);});
  }
  function sohivalsi(queryDecomposition,e,lu){
    var kd=[];
    var o;
    for (var s=0;s<queryDecomposition.length;s++){
      for (var c=queryDecomposition.length-1;c>=s;c--){
        o=queryDecomposition.slice(s,c+1).join(" ");
        if(!e||(e===1 && o!==lu)){kd=shortget(o,kd);}
      }
    }
    return kd;
  }
  function be(kil,lu,e){
    var luj=ma_ve_lujvo(lu);
    if (luj){
      var kim=[];
      if(luj[0]==="@"){
        luj.shift();
        kim=luj.slice();
        for (var w=0;w<documentStore.length;w++){
          var def = documentStore[w];
          for (var j=0;j<luj.length;j++){
            if(def.w === luj[j]){
              kim[j] = documentStore[w];
            }
          }
        }
      }
      else {
        for (var ji in luj){
          var rf = rafsi[luj[ji]];
          if (rf){kim.push(rf);}else{kim=kim.concat({t: "",d:"not found",w: "-"+luj[ji]+"-",r:[luj[ji]]});}
        }
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
  function sortthem(lo_matra_cu_cupra,multi){
    var exactMatches = [];
    var greatMatches = [];
    var selmahoMatches = [];
    var goodMatches = [];
    var normalMatches = [];
    var defMatches = [];
    var lastMatches = [];
    for (var i=0;i<lo_matra_cu_cupra.length;i++) {
      var doc = jmina_lo_se_claxu(lo_matra_cu_cupra[i]);//todo: optimize for phrases
      if (doc) {
        if ((doc.w === query)||(doc.w === queryP)){
          exactMatches.push(doc);
          exactMatches=be(exactMatches,query,1);
        } else if ((doc.r||[''])[0].search("\\b"+query+"\\b") >=0) {
          normalMatches.push(doc);
        } else if (doc.w.search("(^| )"+queryP+"( |$)")>=0||(doc.g||'')===query||((doc.g||'').search("(^|;)"+queryP+"(;|$)")>=0)){
          greatMatches.push(doc);
        } else if ((doc.s||'') === query){
          selmahoMatches.push(doc);//selmaho
        } else if ((doc.g||'').search("\\b"+query+"\\b")>=0) {
          goodMatches.push(doc);
        } else if (((doc.d||'').toLowerCase().search("\\b"+query+"\\b")>=0)){
          defMatches.push(doc);
        } else {
          lastMatches.push(doc);
        }
      }
    }
    //var fg = new Date().getTime();
    if (exactMatches.length===0 && !multi) {preciseMatches=be([],query)||[];}
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
      return gism.sort(sortMultiDimensional)
      .concat(cmav.sort(sortMultiDimensional))
      .concat(ar.sort(sortMultiDimensional));
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
    preciseMatches=preciseMatches
    .concat(exactMatches)
    .concat(normalMatches)
    .concat(greatMatches)
    .concat(selmahoMatches)
    .concat(goodMatches)
    .concat(defMatches)
    .concat(lastMatches);
    try{
      if(preciseMatches[0].w===queryP){
        for (var tyt=1;tyt<preciseMatches.length;tyt++){
          if(preciseMatches[tyt].l && (preciseMatches[tyt].d==="{"+queryP+"}")){
            preciseMatches.splice(tyt,1);
            tyt=tyt-1;
          }
        }
      }
    }catch(err){}
    return preciseMatches;
  }
  function shortget(a,ki,shi){
    a = a.replace(/([cfkpstx])([bdgjvz])/igm,"$1y$2");
    a = a.replace(/([bdgjvz])([cfkpstx])/igm,"$1y$2");
    a = a.replace(/([bcdfgjklmnprstvxz])\1/igm,"$1y$2");
    a = a.replace(/([aeiouy])\1/igm,"$1'$2");
    var isdef = documentStore.filter(function (o){
      return (o.w.toLowerCase()===a.toLowerCase())||(o.d.toLowerCase()==="{"+a.toLowerCase()+"}");
    });
      if (isdef && isdef.length>0){ki=ki.concat(isdef);}
      else {
        if (!shi){
          if (a.replace(/ zei /g,'-zei-').split(" ").length===1){
            var ye=ma_klesi_lo_valsi(a);
            if(ye[0]==='cmavo compound'||ye[0]==='zei-lujvo'){
              ye=ye[1].split(" ");
              for (var jj in ye){
                ki=shortget(ye[jj],ki,2);
              }
            }
            else if (ye[0]!==''){ki=ki.concat({t: "",d:"not found",w: a});}
          } else{
            var luj=ma_ve_lujvo(a);
            if(((luj||[])[0]||'')==="@"){
              luj.shift();
              var kim=[];
              kim=luj.slice();
              for (var w=0;w<documentStore.length;w++){
                var def = documentStore[w];
                for (var j=0;j<luj.length;j++){
                  if(def.w === luj[j]){
                    kim[j] = documentStore[w];
                  }
                }
              }
              ki.concat(kim);
            }
            else if(luj){for (var ji in luj){ki.push(rafsi[luj[ji]]);}}
          }
        } else{ki=ki.concat({t: "",d:"not found",w: a});}
      }
    return ki;
  }
  function cnanosisku(lo_matra_cu_cupra,multi){
    if (searchId !== searchIdCounter) return;
    var preciseMatches=[];
    for (var w=0;w<documentStore.length;w++){
      var m = window.storecache[w];
      if(m.indexOf(query.toLowerCase())>=0||m.indexOf(query.toLowerCase().replace(/h/g,"'"))>=0){
        lo_matra_cu_cupra.push(documentStore[w]);
      }
    }
    try{preciseMatches = sortthem(lo_matra_cu_cupra,multi);}catch(e){}
    if (multi) return preciseMatches;
    try{
      if (preciseMatches.length===0) {
        preciseMatches=be([],query)||[];
      }
    }catch(err){}
    try{
      if (preciseMatches.length===0||preciseMatches[0].w!==queryP){
        var ty = julne(shortget(queryP,[]));
        if (ty.length<=1){
          preciseMatches=ty.concat(preciseMatches);
        }
        else{
          preciseMatches=[{t: "decomposing ...",w: query,rafsiDocuments: ty}].concat(preciseMatches);
        }
      }
    }catch(err){}
    return preciseMatches;
  }
  
  if ((query.indexOf('^')===0||query.slice(-1)==='$'))
  {
    preciseMatches = julne(sortthem(documentStore.filter(function(val){return (val.w.match(query.toLowerCase())||[]).length > 0;}).splice(0,100)));
  }
  else if ((query.indexOf('@')===0||query.slice(-1)==='@'))
  {
    preciseMatches = siskurimni(query.replace(/^@+/,'').replace(/@+$/,''));
  }
  else if (!window.muplis && queryDecomposition.length>1){
    preciseMatches=cnanosisku(lo_matra_cu_cupra,true);
    preciseMatches.push({t: "decomposing ...",w: query,rafsiDocuments: julne(sohivalsi(queryDecomposition))});
  }
  else {
    //normal search
    preciseMatches=cnanosisku(lo_matra_cu_cupra);
  }
  callback(preciseMatches);
}

function siskurimni(query) {
  if (query.length === 0) return;
  var searchId = ++searchIdCounter;
  var traji_rimni=[];
  var _10_moi_lo_traji_rimni = [];
  var _20_moi_lo_traji_rimni = [];
  var _30_moi_lo_traji_rimni = [];
  var _40_moi_lo_traji_rimni = [];
  var _60_moi_lo_traji_rimni = [];
  var _50_moi_lo_traji_rimni = [];
  var _70_moi_lo_traji_rimni = [];
  var _80_moi_lo_traji_rimni = [];
  var _90_moi_lo_traji_rimni = [];
  var queryP,queryF,queryR;
  Array.prototype.cupra_lo_porsi = function (){
    for (var i=0;i<this.length;i++) {
      var doc = jmina_lo_se_claxu(this[i]);//todo: optimize for phrases
      if (!doc) continue;
      var docw = krulermorna(doc.w).replace(/([aeiouǎąęǫ])/g,'$1-').split("-").slice(-3);
      if (queryR && (docw[0].slice(-1) !== queryR[0].slice(-1))) continue;
      var right = docw[1].slice(-1);
      var reversal = (docw[1].slice(-3,-1)===queryF[1].slice(-3,-1).split('').reverse().join(''));
      var left = queryF[1].slice(-1);
      var sli=false;
      if ((left==='a' && right.search('[eao]')>=0)||
        (left==='e' && right.search('[iea]')>=0)||
        (left==='i' && right.search('[ie]')>=0)||
        (left==='o' && right.search('[aou]')>=0)||
        (left==='u' && right.search('[aou]')>=0)) sli=true;
      if (krulermorna(doc.w) === query){
        _10_moi_lo_traji_rimni.push(doc);
        continue;
      }
      else if((typeof queryR[2]!=='undefined') &&
          (docw[0].match(queryR[0])||[]).length>0 &&
          (docw[1].match(queryR[1])||[]).length>0 &&
          (left === right) &&
          docw[2]===queryR[2]
          ){
        _20_moi_lo_traji_rimni.push(doc);
      }
      else if((typeof queryR[2]!=='undefined') &&
          (docw[0].match(queryR[0])||[]).length>0 &&
          (docw[1].match(queryR[1])||[]).length>0 &&
          sli &&
          docw[2]===queryR[2]
          ){
        _30_moi_lo_traji_rimni.push(doc);
      }      
      else if((typeof queryR[2]!=='undefined') &&
          (docw[1].match(regexify(queryR[2]))||[]).length>0 &&
          (left === right) &&
          docw[2]===queryR[2]
          ){
        _40_moi_lo_traji_rimni.push(doc);
      }
      else if((typeof queryR[2]!=='undefined') &&
          (docw[1].match(regexify(queryR[2]))||[]).length>0 &&
          sli &&
          docw[2]===queryR[2]
          ){
        _50_moi_lo_traji_rimni.push(doc);
      }
      else if((typeof queryR[2]!=='undefined') &&
          (docw[0].match(queryR[0])||[]).length>0 &&
          sli &&
          reversal &&
          docw[2]===queryR[2]
          ){
        _60_moi_lo_traji_rimni.push(doc);
      }

      else if((typeof queryR[2]!=='undefined') &&
          (docw[0].match(queryR[0])||[]).length>0 &&
          (docw[1].match(queryR[1])||[]).length>0 &&
          docw[2]===queryR[2]
          ){
        _70_moi_lo_traji_rimni.push(doc);
      }
      else if((typeof queryR[1]!=='undefined') &&
          (docw[0].match(queryR[0])||[]).length>0 &&
          (docw[1].match(queryR[1])||[]).length>0
          ){
        _80_moi_lo_traji_rimni.push(doc);
      }      
      else {
        _90_moi_lo_traji_rimni.push(doc);
      }
    }
    var sortMultiDimensional = function (a,b)
    {
      return (((a.d||'').length < (b.d||'').length) ? -1 : (((a.d||'').length > (b.d||'').length) ? 1 : 0));
    };
    var sor = function (ar){
      if (ar.length===0) return ar;
      var gism=[];
      var expgism=[];
      var cmav=[];
      var expcmav=[];
      var elses=[];
      //ar.filter(function(a){return a.t==='gismu';})
      for (c=0;c<ar.length;c++){
        if (ar[c].t==='gismu'){
          gism.push(ar[c]);
        }
        else if (ar[c].t==='experimental gismu'){
          expgism.push(ar[c]);
        }
        else if (ar[c].t==='cmavo'){
          cmav.push(ar[c]);
        }
        else if (ar[c].t==='experimental cmavo'){
          expcmav.push(ar[c]);
        }
        else{
          elses.push(ar[c]);
        }
      }
      return gism.sort(sortMultiDimensional)
      .concat(expgism.sort(sortMultiDimensional))
      .concat(cmav.sort(sortMultiDimensional))
      .concat(expcmav.sort(sortMultiDimensional))
      .concat(elses.sort(sortMultiDimensional));
    };

    //_10_moi_lo_traji_rimni=sor(_10_moi_lo_traji_rimni);
    _20_moi_lo_traji_rimni=sor(_20_moi_lo_traji_rimni);
    _30_moi_lo_traji_rimni=sor(_30_moi_lo_traji_rimni);
    _60_moi_lo_traji_rimni=sor(_60_moi_lo_traji_rimni);
    _40_moi_lo_traji_rimni=sor(_40_moi_lo_traji_rimni);
    _50_moi_lo_traji_rimni=sor(_50_moi_lo_traji_rimni);
    _70_moi_lo_traji_rimni=sor(_70_moi_lo_traji_rimni);
    _80_moi_lo_traji_rimni=sor(_80_moi_lo_traji_rimni);
    _90_moi_lo_traji_rimni=sor(_90_moi_lo_traji_rimni);
    var traji_rimni=
    _10_moi_lo_traji_rimni
    .concat(_20_moi_lo_traji_rimni)
    .concat(_30_moi_lo_traji_rimni)
    .concat(_40_moi_lo_traji_rimni)
    .concat(_50_moi_lo_traji_rimni)
    .concat(_60_moi_lo_traji_rimni)
    .concat(_70_moi_lo_traji_rimni)
    .concat(_80_moi_lo_traji_rimni)
    .concat(_90_moi_lo_traji_rimni);
    return traji_rimni;
  };

  var krulermorna = function (t) {
    t = "."+t.replace(/\./g,"").replace(/h/g,"'").toLowerCase();
    t=t.replace(/([aeiou\.])u([aeiou])/g,'$1w$2');
    t=t.replace(/([aeiou\.])i([aeiou])/g,'$1ɩ$2');
    t=t.replace(/au/g,'ǎ');
    t=t.replace(/ai/g,'ą');
    t=t.replace(/ei/g,'ę');
    t=t.replace(/oi/g,'ǫ');
    t=t.replace(/\./g,'');
    return t;
  };

  var regexify = function (t) {
    t=t.replace(/[sz]/g,'[sz]');
    t=t.replace(/[pb]/g,'[pb]');
    t=t.replace(/[td]/g,'[td]');
    t=t.replace(/[cj]/g,'[cj]');
    t=t.replace(/[kg]/g,'[kg]');
    t=t.replace(/[pb]/g,'[pb]');
    t=t.replace(/[lmnr]/g,'[lmnr]');
    t=t.replace(/[ɩw]/g,'[ɩw]');
    return t;
  };
  
  query=krulermorna(query);
  
  queryR=query.replace(/([aeiouǎąęǫ])/g,'$1-').split("-").slice(-3);
  queryF=queryR.slice();
  if(queryR.length>=2){queryR[1]=queryR[1].replace(/[aeiouǎąęǫ]/,'[aeiouǎąęǫ]');}
  queryR[0]=/.*([aeiouǎąęǫ])/.exec(queryR[0])[1];
  if(queryR.length===2){
    traji_rimni = documentStore
    .filter(
      function(val){
        var queryRn=krulermorna(val.w).replace(/([aeiouǎąęǫ])/g,'$1-').split("-").slice(-3);
        return queryRn.length===2 ? (queryRn[0].split('').slice(-1)[0] === queryR[0].split('').slice(-1)[0]) : false;
      })
    .filter(function(n){n=jmina_lo_se_claxu(n); return n !== undefined; }).cupra_lo_porsi();
  }
  else{
    queryP=regexify(queryR.join(""));
    traji_rimni = documentStore
    .filter(
      function(val){
        return (krulermorna(val.w)
        .match(queryP.toLowerCase()+"$")||[]).length > 0;
      })
    .filter(function(n){return n !== undefined; })
    .cupra_lo_porsi();
  }
  return traji_rimni;
}
