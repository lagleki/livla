/*
var log = console.log.bind(console);
p = function (object) {
  return JSON.stringify(object);
};
*/
var searchIdCounter = 0;

var cmaxes=function(){"use strict";function t(t,r){function e(){this.constructor=t}e.prototype=r.prototype,t.prototype=new e}function r(t,e,n,o){this.message=t,this.expected=e,this.found=n,this.location=o,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}function e(t,e){function n(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function o(){return{type:"any"}}function u(){return{type:"end"}}function s(t){return{type:"other",description:t}}function i(r){var e,n=Fr[r];if(n)return n;for(e=r-1;!Fr[e];)e--;for(n=Fr[e],n={line:n.line,column:n.column};e<r;)10===t.charCodeAt(e)?(n.line++,n.column=1):n.column++,e++;return Fr[r]=n,n}function l(t,r){var e=i(t),n=i(r);return{start:{offset:t,line:e.line,column:e.column},end:{offset:r,line:n.line,column:n.column}}}function c(t){mr<wr||(mr>wr&&(wr=mr,Er=[]),Er.push(t))}function a(t,e,n){return new r(r.buildMessage(t,e),t,e,n)}function f(){var t,r,e,n,o=60*mr+0,u=br[o];if(u)return mr=u.nextPos,u.result;if(t=mr,r=ht(),r===mt&&(r=null),r!==mt){for(e=[],n=v();n!==mt;)e.push(n),n=v();e!==mt?(yr=t,r=wt(e),t=r):(mr=t,t=mt)}else mr=t,t=mt;return br[o]={nextPos:mr,result:t},t}function v(){var t,r,e,n=60*mr+1,o=br[n];return o?(mr=o.nextPos,o.result):(t=mr,r=x(),r!==mt?(e=ht(),e===mt&&(e=null),e!==mt?(yr=t,r=Et(r),t=r):(mr=t,t=mt)):(mr=t,t=mt),br[n]={nextPos:mr,result:t},t)}function x(){var t,r,e,n,o,u,s,i,l,c,a,f=60*mr+2,v=br[f];return v?(mr=v.nextPos,v.result):(t=d(),t===mt&&(t=mr,r=g(),r!==mt&&(yr=t,r=St(r)),t=r,t===mt&&(t=mr,r=P(),r!==mt&&(yr=t,r=bt(r)),t=r,t===mt&&(t=mr,r=mr,e=mr,Sr++,n=P(),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt?(n=mr,Sr++,o=p(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(o=mr,Sr++,u=g(),Sr--,u===mt?o=void 0:(mr=o,o=mt),o!==mt?(u=mr,Sr++,s=mr,i=O(),i!==mt?(l=dt(),l!==mt?(c=_(),c!==mt?(a=Q(),a!==mt?(i=[i,l,c,a],s=i):(mr=s,s=mt)):(mr=s,s=mt)):(mr=s,s=mt)):(mr=s,s=mt),Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt?(s=A(),s!==mt?(e=[e,n,o,u,s],r=e):(mr=r,r=mt)):(mr=r,r=mt)):(mr=r,r=mt)):(mr=r,r=mt)):(mr=r,r=mt),r!==mt&&(yr=t,r=Ct(r)),t=r,t===mt&&(t=mr,r=p(),r!==mt&&(yr=t,r=jt(r)),t=r)))),br[f]={nextPos:mr,result:t},t)}function d(){var t,r,e,n,o,u,s=60*mr+3,i=br[s];if(i)return mr=i.nextPos,i.result;if(t=mr,r=mr,e=mr,Sr++,n=w(),Sr--,n!==mt?(mr=e,e=void 0):e=mt,e!==mt){if(n=[],o=H(),o!==mt)for(;o!==mt;)n.push(o),o=H();else n=mt;n!==mt?(o=mr,Sr++,u=ht(),Sr--,u!==mt?(mr=o,o=void 0):o=mt,o!==mt?(e=[e,n,o],r=e):(mr=r,r=mt)):(mr=r,r=mt)}else mr=r,r=mt;return r===mt&&(r=w()),r!==mt&&(yr=t,r=kt(r)),t=r,br[s]={nextPos:mr,result:t},t}function P(){var t,r,e,n,o,u,s,i=60*mr+4,l=br[i];return l?(mr=l.nextPos,l.result):(t=mr,r=q(),r!==mt?(e=mr,Sr++,n=G(),Sr--,n!==mt?(mr=e,e=void 0):e=mt,e!==mt?(n=mr,Sr++,o=D(),Sr--,o!==mt?(mr=n,n=void 0):n=mt,n!==mt?(o=Y(),o!==mt?(u=mr,Sr++,s=Pt(),Sr--,s!==mt?(mr=u,u=void 0):u=mt,u!==mt?(r=[r,e,n,o,u],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[i]={nextPos:mr,result:t},t)}function h(){var t,r,e,n,o,u,s=60*mr+5,i=br[s];if(i)return mr=i.nextPos,i.result;if(t=mr,r=F(),r!==mt)if(e=I(),e!==mt)if(n=mr,Sr++,o=G(),Sr--,o!==mt?(mr=n,n=void 0):n=mt,n!==mt){for(o=[],u=K();u!==mt;)o.push(u),u=K();o!==mt?(r=[r,e,n,o],t=r):(mr=t,t=mt)}else mr=t,t=mt;else mr=t,t=mt;else mr=t,t=mt;return br[s]={nextPos:mr,result:t},t}function p(){var t,r,e,n=60*mr+6,o=br[n];return o?(mr=o.nextPos,o.result):(t=mr,r=h(),r!==mt?(e=D(),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt),br[n]={nextPos:mr,result:t},t)}function g(){var t,r,e,n,o,u,s,i,l,c,a,f=60*mr+7,v=br[f];if(v)return mr=v.nextPos,v.result;if(t=mr,r=mr,Sr++,e=d(),Sr--,e===mt?r=void 0:(mr=r,r=mt),r!==mt)if(e=mr,Sr++,n=mr,o=z(),o!==mt?(u=mr,Sr++,s=G(),Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt?(s=_(),s!==mt?(i=dt(),i===mt&&(i=null),i!==mt?(l=A(),l!==mt?(o=[o,u,s,i,l],n=o):(mr=n,n=mt)):(mr=n,n=mt)):(mr=n,n=mt)):(mr=n,n=mt)):(mr=n,n=mt),n===mt&&(n=mr,o=z(),o!==mt?(u=mr,Sr++,s=G(),Sr--,s!==mt?(mr=u,u=void 0):u=mt,u!==mt?(s=_(),s!==mt?(i=N(),i!==mt?(o=[o,u,s,i],n=o):(mr=n,n=mt)):(mr=n,n=mt)):(mr=n,n=mt)):(mr=n,n=mt)),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt){if(n=mr,o=mr,Sr++,u=dt(),Sr--,u===mt?o=void 0:(mr=o,o=mt),o!==mt){if(u=mr,Sr++,s=mr,i=et(),i!==mt){if(l=[],c=et(),c!==mt)for(;c!==mt;)l.push(c),c=et();else l=mt;l!==mt?(i=[i,l],s=i):(mr=s,s=mt)}else mr=s,s=mt;if(Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt)if(s=Q(),s!==mt){for(i=[],l=mr,c=V(),c!==mt?(a=dt(),a!==mt?(c=[c,a],l=c):(mr=l,l=mt)):(mr=l,l=mt);l!==mt;)i.push(l),l=mr,c=V(),c!==mt?(a=dt(),a!==mt?(c=[c,a],l=c):(mr=l,l=mt)):(mr=l,l=mt);i!==mt?(l=V(),l!==mt?(o=[o,u,s,i,l],n=o):(mr=n,n=mt)):(mr=n,n=mt)}else mr=n,n=mt;else mr=n,n=mt}else mr=n,n=mt;if(n===mt)if(n=[],o=_(),o!==mt)for(;o!==mt;)n.push(o),o=_();else n=mt;n!==mt?(o=mr,Sr++,u=Pt(),Sr--,u!==mt?(mr=o,o=void 0):o=mt,o!==mt?(r=[r,e,n,o],t=r):(mr=t,t=mt)):(mr=t,t=mt)}else mr=t,t=mt;else mr=t,t=mt;return br[f]={nextPos:mr,result:t},t}function A(){var t,r,e,n,o,u,s,i,l=60*mr+8,c=br[l];if(c)return mr=c.nextPos,c.result;for(t=mr,r=[],e=mr,n=R(),n===mt&&(n=S(),n===mt&&(n=C(),n===mt&&(n=mr,o=mr,Sr++,u=m(),Sr--,u===mt?o=void 0:(mr=o,o=mt),o!==mt?(u=j(),u!==mt?(s=mr,Sr++,i=m(),Sr--,i===mt?s=void 0:(mr=s,s=mt),s!==mt?(o=[o,u,s],n=o):(mr=n,n=mt)):(mr=n,n=mt)):(mr=n,n=mt)))),n!==mt&&(yr=e,n=Rt(n)),e=n;e!==mt;)r.push(e),e=mr,n=R(),n===mt&&(n=S(),n===mt&&(n=C(),n===mt&&(n=mr,o=mr,Sr++,u=m(),Sr--,u===mt?o=void 0:(mr=o,o=mt),o!==mt?(u=j(),u!==mt?(s=mr,Sr++,i=m(),Sr--,i===mt?s=void 0:(mr=s,s=mt),s!==mt?(o=[o,u,s],n=o):(mr=n,n=mt)):(mr=n,n=mt)):(mr=n,n=mt)))),n!==mt&&(yr=e,n=Rt(n)),e=n;return r!==mt?(e=mr,n=p(),n===mt&&(n=J()),n!==mt&&(yr=e,n=zt(n)),e=n,e===mt&&(e=mr,n=k(),n===mt&&(n=E(),n===mt&&(n=b(),n===mt&&(n=mr,o=T(),o!==mt?(u=mr,Sr++,s=G(),Sr--,s!==mt?(mr=u,u=void 0):u=mt,u!==mt?(o=[o,u],n=o):(mr=n,n=mt)):(mr=n,n=mt)))),n!==mt?(o=N(),o!==mt?(yr=e,n=Mt(n,o),e=n):(mr=e,e=mt)):(mr=e,e=mt)),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt),br[l]={nextPos:mr,result:t},t}function m(){var t,r=60*mr+9,e=br[r];return e?(mr=e.nextPos,e.result):(t=p(),t===mt&&(t=S(),t===mt&&(t=E())),br[r]={nextPos:mr,result:t},t)}function y(){var t,r,e,n,o,u,s,i,l=60*mr+10,c=br[l];if(c)return mr=c.nextPos,c.result;for(t=mr,r=[],e=j();e!==mt;)r.push(e),e=j();return r!==mt?(e=J(),e===mt&&(e=mr,n=T(),n!==mt?(o=mr,Sr++,u=G(),Sr--,u!==mt?(mr=o,o=void 0):o=mt,o!==mt?(u=mr,Sr++,s=_(),Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt?(s=N(),s!==mt?(n=[n,o,u,s],e=n):(mr=e,e=mt)):(mr=e,e=mt)):(mr=e,e=mt)):(mr=e,e=mt),e===mt&&(e=C(),e===mt&&(e=b(),e===mt&&(e=mr,n=mr,o=T(),o!==mt?(u=mr,Sr++,s=G(),Sr--,s!==mt?(mr=u,u=void 0):u=mt,u!==mt?(s=mr,Sr++,i=_(),Sr--,i===mt?s=void 0:(mr=s,s=mt),s!==mt?(o=[o,u,s],n=o):(mr=n,n=mt)):(mr=n,n=mt)):(mr=n,n=mt),n===mt&&(n=null),n!==mt?(o=tt(),o!==mt?(u=_(),u!==mt?(n=[n,o,u],e=n):(mr=e,e=mt)):(mr=e,e=mt)):(mr=e,e=mt),e===mt&&(e=R(),e===mt&&(e=k())))))),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt),br[l]={nextPos:mr,result:t},t}function F(){var t,r,e,n,o,u,s,i,l=60*mr+11,c=br[l];if(c)return mr=c.nextPos,c.result;if(t=mr,r=mr,Sr++,e=y(),Sr--,e===mt?r=void 0:(mr=r,r=mt),r!==mt)if(e=mr,Sr++,n=g(),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt)if(n=mr,Sr++,o=mr,u=mr,Sr++,s=y(),Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt?(s=et(),s!==mt?(i=y(),i!==mt?(u=[u,s,i],o=u):(mr=o,o=mt)):(mr=o,o=mt)):(mr=o,o=mt),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt)if(o=mr,Sr++,u=dt(),Sr--,u===mt?o=void 0:(mr=o,o=mt),o!==mt)if(u=mr,Sr++,s=Q(),Sr--,s!==mt?(mr=u,u=void 0):u=mt,u!==mt){for(s=[],i=U();i!==mt;)s.push(i),i=U();s!==mt?(r=[r,e,n,o,u,s],t=r):(mr=t,t=mt)}else mr=t,t=mt;else mr=t,t=mt;else mr=t,t=mt;else mr=t,t=mt;else mr=t,t=mt;return br[l]={nextPos:mr,result:t},t}function w(){var t,r,e,n,o,u,s,i=60*mr+12,l=br[i];if(l)return mr=l.nextPos,l.result;if(t=mr,r=mr,Sr++,e=dt(),Sr--,e===mt?r=void 0:(mr=r,r=mt),r!==mt){for(e=[],n=V(),n===mt&&(n=W(),n===mt&&(n=dt(),n===mt&&(n=mr,o=et(),o!==mt?(u=mr,Sr++,s=ht(),Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt?(o=[o,u],n=o):(mr=n,n=mt)):(mr=n,n=mt))));n!==mt;)e.push(n),n=V(),n===mt&&(n=W(),n===mt&&(n=dt(),n===mt&&(n=mr,o=et(),o!==mt?(u=mr,Sr++,s=ht(),Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt?(o=[o,u],n=o):(mr=n,n=mt)):(mr=n,n=mt))));e!==mt?(n=et(),n!==mt?(o=mr,Sr++,u=ht(),Sr--,u!==mt?(mr=o,o=void 0):o=mt,o!==mt?(r=[r,e,n,o],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)}else mr=t,t=mt;return br[i]={nextPos:mr,result:t},t}function E(){var t,r,e,n,o=60*mr+13,u=br[o];return u?(mr=u.nextPos,u.result):(t=mr,r=h(),r!==mt?(e=dt(),e!==mt?(n=_(),n!==mt?(yr=t,r=Ot(r),t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),t===mt&&(t=mr,r=mr,e=h(),e!==mt?(n=Q(),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),r!==mt?(e=_(),e!==mt?(yr=t,r=Tt(r),t=r):(mr=t,t=mt)):(mr=t,t=mt)),br[o]={nextPos:mr,result:t},t)}function S(){var t,r,e,n,o,u=60*mr+14,s=br[u];return s?(mr=s.nextPos,s.result):(t=mr,r=mr,e=mr,Sr++,n=U(),Sr--,n!==mt?(mr=e,e=void 0):e=mt,e!==mt?(n=F(),n!==mt?(o=Q(),o!==mt?(e=[e,n,o],r=e):(mr=r,r=mt)):(mr=r,r=mt)):(mr=r,r=mt),r!==mt?(e=_(),e!==mt?(n=dt(),n===mt&&(n=null),n!==mt?(yr=t,r=Tt(r),t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[u]={nextPos:mr,result:t},t)}function b(){var t,r,e,n,o=60*mr+15,u=br[o];return u?(mr=u.nextPos,u.result):(t=mr,r=q(),r===mt&&(r=z()),r!==mt?(e=mr,Sr++,n=G(),Sr--,n!==mt?(mr=e,e=void 0):e=mt,e!==mt?(n=_(),n!==mt?(yr=t,r=Tt(r),t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[o]={nextPos:mr,result:t},t)}function C(){var t,r,e,n,o,u=60*mr+16,s=br[u];return s?(mr=s.nextPos,s.result):(t=mr,r=q(),r===mt&&(r=z()),r!==mt?(e=mr,Sr++,n=G(),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt?(n=_(),n!==mt?(o=dt(),o===mt&&(o=null),o!==mt?(yr=t,r=Tt(r),t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[u]={nextPos:mr,result:t},t)}function j(){var t,r,e,n,o,u,s,i,l,c,a=60*mr+17,f=br[a];return f?(mr=f.nextPos,f.result):(t=mr,r=mr,Sr++,e=C(),Sr--,e===mt?r=void 0:(mr=r,r=mt),r!==mt?(e=mr,Sr++,n=b(),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt?(n=mr,Sr++,o=R(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(o=mr,Sr++,u=k(),Sr--,u===mt?o=void 0:(mr=o,o=mt),o!==mt?(u=T(),u!==mt?(s=mr,Sr++,i=G(),Sr--,i===mt?s=void 0:(mr=s,s=mt),s!==mt?(i=mr,Sr++,l=_(),Sr--,l===mt?i=void 0:(mr=i,i=mt),i!==mt?(l=mr,Sr++,c=dt(),Sr--,c===mt?l=void 0:(mr=l,l=mt),l!==mt?(r=[r,e,n,o,u,s,i,l],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[a]={nextPos:mr,result:t},t)}function k(){var t,r,e,n,o,u=60*mr+18,s=br[u];return s?(mr=s.nextPos,s.result):(t=mr,r=mr,e=q(),e!==mt?(n=Y(),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),r===mt&&(r=T()),r!==mt?(e=mr,Sr++,n=G(),Sr--,n!==mt?(mr=e,e=void 0):e=mt,e!==mt?(n=dt(),n!==mt?(o=_(),o!==mt?(yr=t,r=Tt(r),t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[u]={nextPos:mr,result:t},t)}function R(){var t,r,e,n,o,u,s=60*mr+19,i=br[s];return i?(mr=i.nextPos,i.result):(t=mr,r=mr,e=q(),e!==mt?(n=Y(),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),r===mt&&(r=T()),r!==mt?(e=mr,Sr++,n=G(),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt?(n=dt(),n!==mt?(o=_(),o!==mt?(u=dt(),u===mt&&(u=null),u!==mt?(yr=t,r=Tt(r),t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[s]={nextPos:mr,result:t},t)}function z(){var t,r,e,n=60*mr+20,o=br[n];return o?(mr=o.nextPos,o.result):(t=mr,r=B(),r!==mt?(e=et(),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt),br[n]={nextPos:mr,result:t},t)}function M(){var t,r=60*mr+21,e=br[r];return e?(mr=e.nextPos,e.result):(t=z(),t===mt&&(t=O()),br[r]={nextPos:mr,result:t},t)}function O(){var t,r,e,n=60*mr+22,o=br[n];return o?(mr=o.nextPos,o.result):(t=mr,r=tt(),r!==mt?(e=Y(),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt),br[n]={nextPos:mr,result:t},t)}function T(){var t,r,e,n,o,u,s,i,l=60*mr+23,c=br[l];return c?(mr=c.nextPos,c.result):(t=mr,r=M(),r===mt&&(r=mr,e=et(),e!==mt?(n=mr,o=Y(),o!==mt?(u=mr,Sr++,s=G(),Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt?(s=dt(),s!==mt?(i=Y(),i!==mt?(o=[o,u,s,i],n=o):(mr=n,n=mt)):(mr=n,n=mt)):(mr=n,n=mt)):(mr=n,n=mt),n===mt&&(n=X()),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt)),r!==mt?(e=mr,n=it(),n!==mt?(o=mr,Sr++,u=et(),Sr--,u!==mt?(mr=o,o=void 0):o=mt,o!==mt?(n=[n,o],e=n):(mr=e,e=mt)):(mr=e,e=mt),e===mt&&(e=mr,n=st(),n!==mt?(o=mr,Sr++,u=it(),Sr--,u!==mt?(mr=o,o=void 0):o=mt,o!==mt?(n=[n,o],e=n):(mr=e,e=mt)):(mr=e,e=mt)),e===mt&&(e=null),e!==mt?(yr=t,r=Tt(r),t=r):(mr=t,t=mt)):(mr=t,t=mt),br[l]={nextPos:mr,result:t},t)}function J(){var t,r,e,n,o,u,s,i,l=60*mr+24,c=br[l];return c?(mr=c.nextPos,c.result):(t=P(),t===mt&&(t=mr,r=B(),r!==mt?(e=mr,Sr++,n=G(),Sr--,n!==mt?(mr=e,e=void 0):e=mt,e!==mt?(n=dt(),n!==mt?(o=mr,Sr++,u=D(),Sr--,u!==mt?(mr=o,o=void 0):o=mt,o!==mt?(u=Y(),u!==mt?(s=mr,Sr++,i=Pt(),Sr--,i!==mt?(mr=s,s=void 0):s=mt,s!==mt?(r=[r,e,n,o,u,s],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)),br[l]={nextPos:mr,result:t},t)}function N(){var t,r,e,n,o,u=60*mr+25,s=br[u];return s?(mr=s.nextPos,s.result):(t=mr,r=mr,Sr++,e=D(),Sr--,e!==mt?(mr=r,r=void 0):r=mt,r!==mt?(e=mr,n=et(),n!==mt?(o=X(),o!==mt?(n=[n,o],e=n):(mr=e,e=mt)):(mr=e,e=mt),e===mt&&(e=O()),e!==mt?(n=mr,Sr++,o=Pt(),Sr--,o!==mt?(mr=n,n=void 0):n=mt,n!==mt?(r=[r,e,n],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[u]={nextPos:mr,result:t},t)}function U(){var t,r,e,n,o=60*mr+26,u=br[o];return u?(mr=u.nextPos,u.result):(t=mr,r=I(),r!==mt?(e=mr,Sr++,n=G(),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt),t===mt&&(t=K()),br[o]={nextPos:mr,result:t},t)}function q(){var t,r,e,n=60*mr+27,o=br[n];return o?(mr=o.nextPos,o.result):(t=mr,r=M(),r!==mt?(e=et(),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt),br[n]={nextPos:mr,result:t},t)}function B(){var t,r,e,n=60*mr+28,o=br[n];return o?(mr=o.nextPos,o.result):(t=mr,r=et(),r!==mt?(e=Y(),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt),br[n]={nextPos:mr,result:t},t)}function D(){var t,r,e,n,o,u,s,i=60*mr+29,l=br[i];return l?(mr=l.nextPos,l.result):(t=mr,r=Q(),r!==mt?(e=mr,Sr++,n=_(),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt?(n=V(),n!==mt?(o=mr,Sr++,u=d(),Sr--,u===mt?o=void 0:(mr=o,o=mt),o!==mt?(u=mr,Sr++,s=Pt(),Sr--,s!==mt?(mr=u,u=void 0):u=mt,u!==mt?(r=[r,e,n,o,u],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[i]={nextPos:mr,result:t},t)}function G(){var t,r,e,n,o,u,s=60*mr+30,i=br[s];if(i)return mr=i.nextPos,i.result;for(t=mr,r=[],e=et(),e===mt&&(e=W());e!==mt;)r.push(e),e=et(),e===mt&&(e=W());return r!==mt?(e=dt(),e===mt&&(e=null),e!==mt?(n=_(),n===mt&&(n=null),n!==mt?(o=I(),o!==mt?(u=ht(),u!==mt?(r=[r,e,n,o,u],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[s]={nextPos:mr,result:t},t}function H(){var t,r,e,n,o,u=60*mr+31,s=br[u];return s?(mr=s.nextPos,s.result):(t=mr,r=mr,Sr++,e=mr,n=Q(),n!==mt?(o=_(),o!==mt?(n=[n,o],e=n):(mr=e,e=mt)):(mr=e,e=mt),Sr--,e===mt?r=void 0:(mr=r,r=mt),r!==mt?(e=I(),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt),t===mt&&(t=K()),br[u]={nextPos:mr,result:t},t)}function I(){var t,r,e,n,o,u=60*mr+32,s=br[u];return s?(mr=s.nextPos,s.result):(t=mr,r=Q(),r!==mt?(e=mr,Sr++,n=_(),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt?(n=V(),n!==mt?(o=L(),o===mt&&(o=null),o!==mt?(r=[r,e,n,o],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[u]={nextPos:mr,result:t},t)}function K(){var t,r,e,n,o=60*mr+33,u=br[o];return u?(mr=u.nextPos,u.result):(t=mr,r=et(),r!==mt?(e=mr,Sr++,n=nt(),Sr--,n!==mt?(mr=e,e=void 0):e=mt,e!==mt?(n=L(),n!==mt?(r=[r,e,n],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[o]={nextPos:mr,result:t},t)}function L(){var t,r,e,n,o,u=60*mr+34,s=br[u];return s?(mr=s.nextPos,s.result):(t=mr,r=mr,Sr++,e=H(),Sr--,e===mt?r=void 0:(mr=r,r=mt),r!==mt?(e=et(),e!==mt?(n=mr,Sr++,o=H(),Sr--,o!==mt?(mr=n,n=void 0):n=mt,n!==mt?(r=[r,e,n],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),t===mt&&(t=mr,r=nt(),r===mt&&(r=null),r!==mt?(e=et(),e===mt&&(e=null),e!==mt?(n=mr,Sr++,o=ht(),Sr--,o!==mt?(mr=n,n=void 0):n=mt,n!==mt?(r=[r,e,n],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)),br[u]={nextPos:mr,result:t},t)}function Q(){var t,r,e,n,o,u,s,i,l=60*mr+35,c=br[l];return c?(mr=c.nextPos,c.result):(t=dt(),t===mt&&(t=W(),t===mt&&(t=mr,r=rt(),r===mt&&(r=mr,e=mr,n=ft(),n!==mt?(o=mr,Sr++,u=vt(),Sr--,u===mt?o=void 0:(mr=o,o=mt),o!==mt?(n=[n,o],e=n):(mr=e,e=mt)):(mr=e,e=mt),e===mt&&(e=mr,n=at(),n!==mt?(o=mr,Sr++,u=st(),u===mt&&(u=ot(),u===mt&&(u=it())),Sr--,u===mt?o=void 0:(mr=o,o=mt),o!==mt?(n=[n,o],e=n):(mr=e,e=mt)):(mr=e,e=mt)),e===mt&&(e=null),e!==mt?(n=lt(),n===mt&&(n=mr,o=xt(),o===mt&&(o=ct(),o===mt&&(o=mr,u=st(),u!==mt?(s=mr,Sr++,i=it(),Sr--,i===mt?s=void 0:(mr=s,s=mt),s!==mt?(u=[u,s],o=u):(mr=o,o=mt)):(mr=o,o=mt))),o!==mt?(u=mr,Sr++,s=ot(),Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt?(o=[o,u],n=o):(mr=n,n=mt)):(mr=n,n=mt),n===mt&&(n=ut())),n===mt&&(n=null),n!==mt?(o=ot(),o===mt&&(o=it()),o===mt&&(o=null),o!==mt?(e=[e,n,o],r=e):(mr=r,r=mt)):(mr=r,r=mt)):(mr=r,r=mt)),r!==mt?(e=mr,Sr++,n=et(),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(r=[r,e,n],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt))),br[l]={nextPos:mr,result:t},t)}function V(){var t,r,e,n,o=60*mr+36,u=br[o];return u?(mr=u.nextPos,u.result):(t=Y(),t===mt&&(t=X(),t===mt&&(t=mr,r=_(),r!==mt?(e=mr,Sr++,n=V(),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt))),br[o]={nextPos:mr,result:t},t)}function W(){var t,r,e,n,o,u=60*mr+37,s=br[u];return s?(mr=s.nextPos,s.result):(t=mr,r=Z(),r===mt&&(r=$()),r!==mt?(e=mr,Sr++,n=V(),Sr--,n!==mt?(mr=e,e=void 0):e=mt,e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(r=[r,e,n],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[u]={nextPos:mr,result:t},t)}function X(){var r,e,n,o,u,s,i=60*mr+38,l=br[i];return l?(mr=l.nextPos,l.result):(r=mr,e=mr,Jt.test(t.charAt(mr))?(n=t.charAt(mr),mr++):(n=mt,0===Sr&&c(Nt)),n!==mt?(o=$(),o!==mt?(u=mr,Sr++,s=$(),Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt?(n=[n,o,u],e=n):(mr=e,e=mt)):(mr=e,e=mt)):(mr=e,e=mt),e===mt&&(e=mr,Ut.test(t.charAt(mr))?(n=t.charAt(mr),mr++):(n=mt,0===Sr&&c(qt)),n!==mt?(o=Z(),o!==mt?(u=mr,Sr++,s=Z(),Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt?(n=[n,o,u],e=n):(mr=e,e=mt)):(mr=e,e=mt)):(mr=e,e=mt)),e!==mt?(n=mr,Sr++,o=V(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[i]={nextPos:mr,result:r},r)}function Y(){var r,e,n,o,u=60*mr+39,s=br[u];return s?(mr=s.nextPos,s.result):(r=mr,Bt.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(Dt)),e!==mt?(n=mr,Sr++,o=V(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[u]={nextPos:mr,result:r},r)}function Z(){var r,e=60*mr+40,n=br[e];return n?(mr=n.nextPos,n.result):(Gt.test(t.charAt(mr))?(r=t.charAt(mr),mr++):(r=mt,0===Sr&&c(Ht)),br[e]={nextPos:mr,result:r},r)}function $(){var r,e=60*mr+41,n=br[e];return n?(mr=n.nextPos,n.result):(It.test(t.charAt(mr))?(r=t.charAt(mr),mr++):(r=mt,0===Sr&&c(Kt)),br[e]={nextPos:mr,result:r},r)}function _(){var r,e,n,o,u,s,i=60*mr+42,l=br[i];return l?(mr=l.nextPos,l.result):(r=mr,Lt.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(Qt)),e!==mt?(n=mr,Sr++,o=mr,u=mr,Sr++,s=_(),Sr--,s===mt?u=void 0:(mr=u,u=mt),u!==mt?(s=V(),s!==mt?(u=[u,s],o=u):(mr=o,o=mt)):(mr=o,o=mt),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[i]={nextPos:mr,result:r},r)}function tt(){var t,r,e,n,o,u,s=60*mr+43,i=br[s];return i?(mr=i.nextPos,i.result):(t=mr,r=mr,Sr++,e=Q(),Sr--,e!==mt?(mr=r,r=void 0):r=mt,r!==mt?(e=et(),e!==mt?(n=et(),n!==mt?(o=mr,Sr++,u=et(),Sr--,u===mt?o=void 0:(mr=o,o=mt),o!==mt?(r=[r,e,n,o],t=r):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt)):(mr=t,t=mt),br[s]={nextPos:mr,result:t},t)}function rt(){var t,r,e,n=60*mr+44,o=br[n];return o?(mr=o.nextPos,o.result):(t=mr,r=xt(),r!==mt?(e=ft(),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt),t===mt&&(t=mr,r=ct(),r!==mt?(e=at(),e!==mt?(r=[r,e],t=r):(mr=t,t=mt)):(mr=t,t=mt)),br[n]={nextPos:mr,result:t},t)}function et(){var t,r=60*mr+45,e=br[r];return e?(mr=e.nextPos,e.result):(t=lt(),t===mt&&(t=ct(),t===mt&&(t=at(),t===mt&&(t=ft(),t===mt&&(t=xt(),t===mt&&(t=nt()))))),br[r]={nextPos:mr,result:t},t)}function nt(){var t,r=60*mr+46,e=br[r];return e?(mr=e.nextPos,e.result):(t=ot(),t===mt&&(t=ut(),t===mt&&(t=st(),t===mt&&(t=it()))),br[r]={nextPos:mr,result:t},t)}function ot(){var r,e,n,o,u=60*mr+47,s=br[u];return s?(mr=s.nextPos,s.result):(r=mr,Vt.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(Wt)),e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[u]={nextPos:mr,result:r},r)}function ut(){var r,e,n,o,u=60*mr+48,s=br[u];return s?(mr=s.nextPos,s.result):(r=mr,Xt.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(Yt)),e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[u]={nextPos:mr,result:r},r)}function st(){var r,e,n,o,u,s=60*mr+49,i=br[s];return i?(mr=i.nextPos,i.result):(r=mr,Zt.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c($t)),e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(o=mr,Sr++,u=rt(),Sr--,u===mt?o=void 0:(mr=o,o=mt),o!==mt?(e=[e,n,o],r=e):(mr=r,r=mt)):(mr=r,r=mt)):(mr=r,r=mt),br[s]={nextPos:mr,result:r},r)}function it(){var r,e,n,o,u=60*mr+50,s=br[u];return s?(mr=s.nextPos,s.result):(r=mr,_t.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(tr)),e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[u]={nextPos:mr,result:r},r)}function lt(){var r,e,n,o,u=60*mr+51,s=br[u];return s?(mr=s.nextPos,s.result):(r=mr,rr.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(er)),e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[u]={nextPos:mr,result:r},r)}function ct(){var r,e,n,o,u=60*mr+52,s=br[u];return s?(mr=s.nextPos,s.result):(r=mr,nr.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(or)),e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[u]={nextPos:mr,result:r},r)}function at(){var r,e,n,o,u=60*mr+53,s=br[u];return s?(mr=s.nextPos,s.result):(r=mr,ur.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(sr)),e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[u]={nextPos:mr,result:r},r)}function ft(){var r,e,n,o,u=60*mr+54,s=br[u];return s?(mr=s.nextPos,s.result):(r=mr,ir.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(lr)),e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[u]={nextPos:mr,result:r},r)}function vt(){var r,e,n,o,u=60*mr+55,s=br[u];return s?(mr=s.nextPos,s.result):(r=mr,cr.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(ar)),e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[u]={nextPos:mr,result:r},r)}function xt(){var r,e,n,o,u=60*mr+56,s=br[u];return s?(mr=s.nextPos,s.result):(r=mr,fr.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(vr)),e!==mt?(n=mr,Sr++,o=W(),Sr--,o===mt?n=void 0:(mr=n,n=mt),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[u]={nextPos:mr,result:r},r)}function dt(){var r,e,n,o,u=60*mr+57,s=br[u];return s?(mr=s.nextPos,s.result):(r=mr,xr.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(dr)),e!==mt?(n=mr,Sr++,o=V(),Sr--,o!==mt?(mr=n,n=void 0):n=mt,n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),br[u]={nextPos:mr,result:r},r)}function Pt(){var r,e,n,o=60*mr+58,u=br[o];return u?(mr=u.nextPos,u.result):(r=ht(),r===mt&&(r=mr,e=mr,Sr++,n=V(),Sr--,n===mt?e=void 0:(mr=e,e=mt),e!==mt?(n=x(),n!==mt?(e=[e,n],r=e):(mr=r,r=mt)):(mr=r,r=mt),r===mt&&(Pr.test(t.charAt(mr))?(r=t.charAt(mr),mr++):(r=mt,0===Sr&&c(hr)))),br[o]={nextPos:mr,result:r},r)}function ht(){var r,e,n=60*mr+59,o=br[n];if(o)return mr=o.nextPos,o.result;if(r=[],pr.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(gr)),e!==mt)for(;e!==mt;)r.push(e),pr.test(t.charAt(mr))?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(gr));else r=mt;return r===mt&&(r=mr,Sr++,t.length>mr?(e=t.charAt(mr),mr++):(e=mt,0===Sr&&c(Ar)),Sr--,e===mt?r=void 0:(mr=r,r=mt)),br[n]={nextPos:mr,result:r},r}function pt(t){if("string"==typeof t)return t;var r="";for(var e in t)r+=pt(t[e]);return r}function gt(t){if("string"==typeof t)return t;var r=[];for(var e in t)r.push(gt(t[e]));return r}e=void 0!==e?e:{};var At,mt={},yt={text:f},Ft=f,wt=function(t){return gt(t)},Et=function(t){return t},St=function(t){return["cmavo",pt(t)]},bt=function(t){return["gismu",pt(t)]},Ct=function(t){return["lujvo",pt(t)]},jt=function(t){return["fu'ivla",pt(t)]},kt=function(t){return["cmevla",pt(t)]},Rt=function(t){return[pt(t),"-"]},zt=function(t){return[pt(t)]},Mt=function(t,r){return[pt(t),"-",pt(r)]},Ot=function(t){return[pt(t),""]},Tt=function(t){return[pt(t),""]},Jt=/^[a]/,Nt=n(["a"],!1,!1),Ut=/^[aeo]/,qt=n(["a","e","o"],!1,!1),Bt=/^[aeiou]/,Dt=n(["a","e","i","o","u"],!1,!1),Gt=/^[i]/,Ht=n(["i"],!1,!1),It=/^[u]/,Kt=n(["u"],!1,!1),Lt=/^[y]/,Qt=n(["y"],!1,!1),Vt=/^[l]/,Wt=n(["l"],!1,!1),Xt=/^[m]/,Yt=n(["m"],!1,!1),Zt=/^[n]/,$t=n(["n"],!1,!1),_t=/^[r]/,tr=n(["r"],!1,!1),rr=/^[pfbgvkx]/,er=n(["p","f","b","g","v","k","x"],!1,!1),nr=/^[d]/,or=n(["d"],!1,!1),ur=/^[jz]/,sr=n(["j","z"],!1,!1),ir=/^[cs]/,lr=n(["c","s"],!1,!1),cr=/^[x]/,ar=n(["x"],!1,!1),fr=/^[t]/,vr=n(["t"],!1,!1),xr=/^[']/,dr=n(["'"],!1,!1),Pr=/^[}]/,hr=n(["}"],!1,!1),pr=/^[.\t\n\r?! ]/,gr=n([".","\t","\n","\r","?","!"," "],!1,!1),Ar=o(),mr=0,yr=0,Fr=[{line:1,column:1}],wr=0,Er=[],Sr=0,br={};if("startRule"in e){if(!(e.startRule in yt))throw new Error("");Ft=yt[e.startRule]}if(At=Ft(),At!==mt&&mr===t.length)return At;throw At!==mt&&mr<t.length&&c(u()),a(Er,wr<t.length?t.charAt(wr):null,wr<t.length?l(wr,wr+1):l(wr,wr))}return t(r,Error),r.buildMessage=function(t,r){function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}function n(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+e(t)})}function o(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+e(t)})}function u(t){return l[t.type](t)}function s(t){var r,e,n=new Array(t.length);for(r=0;r<t.length;r++)n[r]=u(t[r]);if(n.sort(),n.length>0){for(r=1,e=1;r<n.length;r++)n[r-1]!==n[r]&&(n[e]=n[r],e++);n.length=e}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function i(t){return t?'"'+n(t)+'"':"end of input"}var l={literal:function(t){return'"'+n(t.text)+'"'},"class":function(t){var r,e="";for(r=0;r<t.parts.length;r++)e+=t.parts[r]instanceof Array?o(t.parts[r][0])+"-"+o(t.parts[r][1]):o(t.parts[r]);return"["+(t.inverted?"^":"")+e+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};return"Expected "+s(t)+" but "+i(r)+" found."},{SyntaxError:r,parse:e}}();

var ma_klesi_lo_valsi = function(str){
  if (!window.xuzganalojudri||str.search(/[^aeiouyAEIOY]'/)>-1) return ['',''];
  var j;var re;
  try {
    j = cmaxes.parse(str.toLowerCase().replace(/,/g,'')).toString().split(",");
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
  else {
    return ['',''];
  }
};

function ma_ve_lujvo(a) {
  if (!window.xuzganalojudri) return;
  var t;
  if (a.indexOf(' zei ')>-1){return a.split(" zei ");}
  try{t= cmaxes.parse(a).toString().split(",");}catch(err){return;}
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
  function be(kil,lu){
    var luj=ma_ve_lujvo(lu);
    if (luj){
      var kim=[];
      for (var ji in luj){
        var rf = rafsi[luj[ji]];
        if (rf){kim.push(rf);}else{kim=kim.concat({t: "",d:"not found",w: "-"+luj[ji]+"-",r:[luj[ji]]});}
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
  function sortthem(lo_matra_cu_cupra){
    //ff = new Date().getTime();
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
        if (doc.w === query||doc.w === queryP){
          exactMatches.push(doc);
          exactMatches=be(exactMatches,query);
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
      return gism.sort(sortMultiDimensional)
      .concat(cmav.sort(sortMultiDimensional))
      .concat(ar.sort(sortMultiDimensional));
    };
    var sortMultiDimensional = function (a,b)
    {
      return (((a.d||'').length < (b.d||'').length) ? -1 : (((a.d||'').length > (b.d||'').length) ? 1 : 0));
    };
    /*var allMatches = [];
    for (x in [preciseMatches,exactMatches,normalMatches,greatMatches,selmahoMatches,goodMatches,defMatches,lastMatches]){
      allMatches = allMatches.concat(sor(x));
    }*/
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
            if(ye[0]==='cmavo compound'){
              ye=ye[1].split(" ");
              for (var jj in ye){
                ki=shortget(ye[jj],ki,2);
              }
            }
            else if (ye[0]!==''){ki=ki.concat({t: "",d:"not found",w: a});}
          } else{
            var luj=ma_ve_lujvo(a);
            if(luj){for (var ji in luj){ki.push(rafsi[luj[ji]]);}}
          }
        } else{ki=ki.concat({t: "",d:"not found",w: a});}
      }
    return ki;
  }
  function cnanosisku(lo_matra_cu_cupra){
    if (searchId !== searchIdCounter) return;
    var preciseMatches=[];
    for (var w=0;w<documentStore.length;w++){
      var m = window.storecache[w];
      if(m.indexOf(query.toLowerCase())>=0||m.indexOf(query.toLowerCase().replace(/h/g,"'"))>=0){
        lo_matra_cu_cupra.push(documentStore[w]);
      }
    }
    preciseMatches = sortthem(lo_matra_cu_cupra);
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
    preciseMatches=cnanosisku(lo_matra_cu_cupra);
    //if (preciseMatches.length===0){
      preciseMatches.push({t: "decomposing ...",w: query,rafsiDocuments: julne(sohivalsi(queryDecomposition))});
    //}
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
      var mahorpoi=[];
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
        else if (ar[c].t==='cmavo compound'){
          mahorpoi.push(ar[c]);
        }
        else{
          elses.push(ar[c]);
        }
      }
      return gism.sort(sortMultiDimensional)
      .concat(expgism.sort(sortMultiDimensional))
      .concat(cmav.sort(sortMultiDimensional))
      .concat(expcmav.sort(sortMultiDimensional))
      .concat(mahorpoi.sort(sortMultiDimensional))
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
