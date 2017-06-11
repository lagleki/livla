var searchIdCounter = 0;
var cmaxes=function(){"use strict";function t(t,r){function e(){this.constructor=t}e.prototype=r.prototype,t.prototype=new e}function r(t,e,n,u){this.message=t,this.expected=e,this.found=n,this.location=u,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}function e(t,e){function n(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function u(){return{type:"any"}}function o(){return{type:"end"}}function s(t){return{type:"other",description:t}}function i(r){var e,n=Mr[r];if(n)return n;for(e=r-1;!Mr[e];)e--;for(n=Mr[e],n={line:n.line,column:n.column};e<r;)10===t.charCodeAt(e)?(n.line++,n.column=1):n.column++,e++;return Mr[r]=n,n}function l(t,r){var e=i(t),n=i(r);return{start:{offset:t,line:e.line,column:e.column},end:{offset:r,line:n.line,column:n.column}}}function c(t){zr<Or||(zr>Or&&(Or=zr,Tr=[]),Tr.push(t))}function a(t,e,n){return new r(r.buildMessage(t,e),t,e,n)}function f(){var t,r,e,n=65*zr+0,u=Jr[n];if(u)return zr=u.nextPos,u.result;for(t=zr,r=[],e=v();e!==Et;)r.push(e),e=v();return r!==Et&&(Rr=t,r=Ct(r)),t=r,Jr[n]={nextPos:zr,result:t},t}function v(){var t,r,e=65*zr+1,n=Jr[e];return n?(zr=n.nextPos,n.result):(t=zr,r=x(),r!==Et&&(Rr=t,r=jt(r)),t=r,Jr[e]={nextPos:zr,result:t},t)}function x(){var t,r,e,n,u,o,s,i,l,c,a,f=65*zr+2,v=Jr[f];return v?(zr=v.nextPos,v.result):(t=mt(),t===Et&&(t=P(),t===Et&&(t=zr,r=A(),r!==Et&&(Rr=t,r=kt(r)),t=r,t===Et&&(t=zr,r=d(),r!==Et&&(Rr=t,r=zt(r)),t=r,t===Et&&(t=zr,r=zr,e=zr,Zr++,n=d(),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et?(n=zr,Zr++,u=p(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(u=zr,Zr++,o=A(),Zr--,o===Et?u=void 0:(zr=u,u=Et),u!==Et?(o=zr,Zr++,s=zr,i=O(),i!==Et?(l=pt(),l!==Et?(c=tt(),c!==Et?(a=Q(),a!==Et?(i=[i,l,c,a],s=i):(zr=s,s=Et)):(zr=s,s=Et)):(zr=s,s=Et)):(zr=s,s=Et),Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et?(s=g(),s!==Et?(e=[e,n,u,o,s],r=e):(zr=r,r=Et)):(zr=r,r=Et)):(zr=r,r=Et)):(zr=r,r=Et)):(zr=r,r=Et),r!==Et&&(Rr=t,r=Rt(r)),t=r,t===Et&&(t=zr,r=p(),r!==Et&&(Rr=t,r=Mt(r)),t=r))))),Jr[f]={nextPos:zr,result:t},t)}function P(){var t,r,e,n,u,o,s=65*zr+3,i=Jr[s];if(i)return zr=i.nextPos,i.result;if(t=zr,r=zr,e=zr,Zr++,n=F(),Zr--,n!==Et?(zr=e,e=void 0):e=Et,e!==Et){if(n=[],u=H(),u!==Et)for(;u!==Et;)n.push(u),u=H();else n=Et;n!==Et?(u=zr,Zr++,o=gt(),Zr--,o!==Et?(zr=u,u=void 0):u=Et,u!==Et?(e=[e,n,u],r=e):(zr=r,r=Et)):(zr=r,r=Et)}else zr=r,r=Et;return r===Et&&(r=F()),r!==Et&&(Rr=t,r=Ot(r)),t=r,Jr[s]={nextPos:zr,result:t},t}function d(){var t,r,e,n,u,o,s,i=65*zr+4,l=Jr[i];return l?(zr=l.nextPos,l.result):(t=zr,r=q(),r!==Et?(e=zr,Zr++,n=G(),Zr--,n!==Et?(zr=e,e=void 0):e=Et,e!==Et?(n=zr,Zr++,u=D(),Zr--,u!==Et?(zr=n,n=void 0):n=Et,n!==Et?(u=Y(),u!==Et?(o=zr,Zr++,s=At(),Zr--,s!==Et?(zr=o,o=void 0):o=Et,o!==Et?(r=[r,e,n,u,o],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[i]={nextPos:zr,result:t},t)}function h(){var t,r,e,n,u,o,s=65*zr+5,i=Jr[s];if(i)return zr=i.nextPos,i.result;if(t=zr,r=w(),r!==Et)if(e=I(),e!==Et)if(n=zr,Zr++,u=G(),Zr--,u!==Et?(zr=n,n=void 0):n=Et,n!==Et){for(u=[],o=K();o!==Et;)u.push(o),o=K();u!==Et?(r=[r,e,n,u],t=r):(zr=t,t=Et)}else zr=t,t=Et;else zr=t,t=Et;else zr=t,t=Et;return Jr[s]={nextPos:zr,result:t},t}function p(){var t,r,e,n=65*zr+6,u=Jr[n];return u?(zr=u.nextPos,u.result):(t=zr,r=h(),r!==Et?(e=D(),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et),Jr[n]={nextPos:zr,result:t},t)}function A(){var t,r,e,n,u,o,s,i,l,c,a,f=65*zr+7,v=Jr[f];if(v)return zr=v.nextPos,v.result;if(t=zr,r=zr,Zr++,e=P(),Zr--,e===Et?r=void 0:(zr=r,r=Et),r!==Et)if(e=zr,Zr++,n=zr,u=R(),u!==Et?(o=zr,Zr++,s=G(),Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et?(s=tt(),s!==Et?(i=pt(),i===Et&&(i=null),i!==Et?(l=g(),l!==Et?(u=[u,o,s,i,l],n=u):(zr=n,n=Et)):(zr=n,n=Et)):(zr=n,n=Et)):(zr=n,n=Et)):(zr=n,n=Et),n===Et&&(n=zr,u=R(),u!==Et?(o=zr,Zr++,s=G(),Zr--,s!==Et?(zr=o,o=void 0):o=Et,o!==Et?(s=tt(),s!==Et?(i=N(),i!==Et?(u=[u,o,s,i],n=u):(zr=n,n=Et)):(zr=n,n=Et)):(zr=n,n=Et)):(zr=n,n=Et)),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et){if(n=zr,u=zr,Zr++,o=pt(),Zr--,o===Et?u=void 0:(zr=u,u=Et),u!==Et){if(o=zr,Zr++,s=zr,i=ot(),i!==Et){if(l=[],c=ot(),c!==Et)for(;c!==Et;)l.push(c),c=ot();else l=Et;l!==Et?(i=[i,l],s=i):(zr=s,s=Et)}else zr=s,s=Et;if(Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et)if(s=Q(),s!==Et){for(i=[],l=zr,c=V(),c!==Et?(a=pt(),a!==Et?(c=[c,a],l=c):(zr=l,l=Et)):(zr=l,l=Et);l!==Et;)i.push(l),l=zr,c=V(),c!==Et?(a=pt(),a!==Et?(c=[c,a],l=c):(zr=l,l=Et)):(zr=l,l=Et);i!==Et?(l=V(),l!==Et?(u=[u,o,s,i,l],n=u):(zr=n,n=Et)):(zr=n,n=Et)}else zr=n,n=Et;else zr=n,n=Et}else zr=n,n=Et;if(n===Et)if(n=[],u=tt(),u!==Et)for(;u!==Et;)n.push(u),u=tt();else n=Et;n!==Et?(u=zr,Zr++,o=At(),Zr--,o!==Et?(zr=u,u=void 0):u=Et,u!==Et?(r=[r,e,n,u],t=r):(zr=t,t=Et)):(zr=t,t=Et)}else zr=t,t=Et;else zr=t,t=Et;return Jr[f]={nextPos:zr,result:t},t}function g(){var t,r,e,n,u,o,s,i,l=65*zr+8,c=Jr[l];if(c)return zr=c.nextPos,c.result;for(t=zr,r=[],e=zr,n=z(),n===Et&&(n=S(),n===Et&&(n=C(),n===Et&&(n=zr,u=zr,Zr++,o=m(),Zr--,o===Et?u=void 0:(zr=u,u=Et),u!==Et?(o=j(),o!==Et?(s=zr,Zr++,i=m(),Zr--,i===Et?s=void 0:(zr=s,s=Et),s!==Et?(u=[u,o,s],n=u):(zr=n,n=Et)):(zr=n,n=Et)):(zr=n,n=Et)))),n!==Et&&(Rr=e,n=Tt(n)),e=n;e!==Et;)r.push(e),e=zr,n=z(),n===Et&&(n=S(),n===Et&&(n=C(),n===Et&&(n=zr,u=zr,Zr++,o=m(),Zr--,o===Et?u=void 0:(zr=u,u=Et),u!==Et?(o=j(),o!==Et?(s=zr,Zr++,i=m(),Zr--,i===Et?s=void 0:(zr=s,s=Et),s!==Et?(u=[u,o,s],n=u):(zr=n,n=Et)):(zr=n,n=Et)):(zr=n,n=Et)))),n!==Et&&(Rr=e,n=Tt(n)),e=n;return r!==Et?(e=zr,n=p(),n===Et&&(n=J()),n!==Et&&(Rr=e,n=Zt(n)),e=n,e===Et&&(e=zr,n=k(),n===Et&&(n=E(),n===Et&&(n=b(),n===Et&&(n=zr,u=T(),u!==Et?(o=zr,Zr++,s=G(),Zr--,s!==Et?(zr=o,o=void 0):o=Et,o!==Et?(u=[u,o],n=u):(zr=n,n=Et)):(zr=n,n=Et)))),n!==Et?(u=N(),u!==Et?(Rr=e,n=Jt(n,u),e=n):(zr=e,e=Et)):(zr=e,e=Et)),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et),Jr[l]={nextPos:zr,result:t},t}function m(){var t,r=65*zr+9,e=Jr[r];return e?(zr=e.nextPos,e.result):(t=p(),t===Et&&(t=S(),t===Et&&(t=E())),Jr[r]={nextPos:zr,result:t},t)}function y(){var t,r,e,n,u,o,s,i,l=65*zr+10,c=Jr[l];if(c)return zr=c.nextPos,c.result;for(t=zr,r=[],e=j();e!==Et;)r.push(e),e=j();return r!==Et?(e=J(),e===Et&&(e=zr,n=T(),n!==Et?(u=zr,Zr++,o=G(),Zr--,o!==Et?(zr=u,u=void 0):u=Et,u!==Et?(o=zr,Zr++,s=tt(),Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et?(s=N(),s!==Et?(n=[n,u,o,s],e=n):(zr=e,e=Et)):(zr=e,e=Et)):(zr=e,e=Et)):(zr=e,e=Et),e===Et&&(e=C(),e===Et&&(e=b(),e===Et&&(e=zr,n=zr,u=T(),u!==Et?(o=zr,Zr++,s=G(),Zr--,s!==Et?(zr=o,o=void 0):o=Et,o!==Et?(s=zr,Zr++,i=tt(),Zr--,i===Et?s=void 0:(zr=s,s=Et),s!==Et?(u=[u,o,s],n=u):(zr=n,n=Et)):(zr=n,n=Et)):(zr=n,n=Et),n===Et&&(n=null),n!==Et?(u=nt(),u!==Et?(o=tt(),o!==Et?(n=[n,u,o],e=n):(zr=e,e=Et)):(zr=e,e=Et)):(zr=e,e=Et),e===Et&&(e=z(),e===Et&&(e=k())))))),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et),Jr[l]={nextPos:zr,result:t},t}function w(){var t,r,e,n,u,o,s,i,l=65*zr+11,c=Jr[l];if(c)return zr=c.nextPos,c.result;if(t=zr,r=zr,Zr++,e=y(),Zr--,e===Et?r=void 0:(zr=r,r=Et),r!==Et)if(e=zr,Zr++,n=A(),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et)if(n=zr,Zr++,u=zr,o=zr,Zr++,s=y(),Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et?(s=ot(),s!==Et?(i=y(),i!==Et?(o=[o,s,i],u=o):(zr=u,u=Et)):(zr=u,u=Et)):(zr=u,u=Et),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et)if(u=zr,Zr++,o=pt(),Zr--,o===Et?u=void 0:(zr=u,u=Et),u!==Et)if(o=zr,Zr++,s=Q(),Zr--,s!==Et?(zr=o,o=void 0):o=Et,o!==Et){for(s=[],i=U();i!==Et;)s.push(i),i=U();s!==Et?(r=[r,e,n,u,o,s],t=r):(zr=t,t=Et)}else zr=t,t=Et;else zr=t,t=Et;else zr=t,t=Et;else zr=t,t=Et;else zr=t,t=Et;return Jr[l]={nextPos:zr,result:t},t}function F(){var t,r,e,n,u,o,s,i=65*zr+12,l=Jr[i];if(l)return zr=l.nextPos,l.result;if(t=zr,r=zr,Zr++,e=pt(),Zr--,e===Et?r=void 0:(zr=r,r=Et),r!==Et){for(e=[],n=V(),n===Et&&(n=W(),n===Et&&(n=pt(),n===Et&&(n=zr,u=ot(),u!==Et?(o=zr,Zr++,s=gt(),Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et?(u=[u,o],n=u):(zr=n,n=Et)):(zr=n,n=Et))));n!==Et;)e.push(n),n=V(),n===Et&&(n=W(),n===Et&&(n=pt(),n===Et&&(n=zr,u=ot(),u!==Et?(o=zr,Zr++,s=gt(),Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et?(u=[u,o],n=u):(zr=n,n=Et)):(zr=n,n=Et))));e!==Et?(n=ot(),n!==Et?(u=zr,Zr++,o=gt(),Zr--,o!==Et?(zr=u,u=void 0):u=Et,u!==Et?(r=[r,e,n,u],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)}else zr=t,t=Et;return Jr[i]={nextPos:zr,result:t},t}function E(){var t,r,e,n,u=65*zr+13,o=Jr[u];return o?(zr=o.nextPos,o.result):(t=zr,r=h(),r!==Et?(e=pt(),e!==Et?(n=tt(),n!==Et?(Rr=t,r=Nt(r),t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),t===Et&&(t=zr,r=zr,e=h(),e!==Et?(n=Q(),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),r!==Et?(e=tt(),e!==Et?(Rr=t,r=Ut(r),t=r):(zr=t,t=Et)):(zr=t,t=Et)),Jr[u]={nextPos:zr,result:t},t)}function S(){var t,r,e,n,u,o=65*zr+14,s=Jr[o];return s?(zr=s.nextPos,s.result):(t=zr,r=zr,e=zr,Zr++,n=U(),Zr--,n!==Et?(zr=e,e=void 0):e=Et,e!==Et?(n=w(),n!==Et?(u=Q(),u!==Et?(e=[e,n,u],r=e):(zr=r,r=Et)):(zr=r,r=Et)):(zr=r,r=Et),r!==Et?(e=tt(),e!==Et?(n=pt(),n===Et&&(n=null),n!==Et?(Rr=t,r=Ut(r),t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[o]={nextPos:zr,result:t},t)}function b(){var t,r,e,n,u=65*zr+15,o=Jr[u];return o?(zr=o.nextPos,o.result):(t=zr,r=q(),r===Et&&(r=R()),r!==Et?(e=zr,Zr++,n=G(),Zr--,n!==Et?(zr=e,e=void 0):e=Et,e!==Et?(n=tt(),n!==Et?(Rr=t,r=Ut(r),t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[u]={nextPos:zr,result:t},t)}function C(){var t,r,e,n,u,o=65*zr+16,s=Jr[o];return s?(zr=s.nextPos,s.result):(t=zr,r=q(),r===Et&&(r=R()),r!==Et?(e=zr,Zr++,n=G(),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et?(n=tt(),n!==Et?(u=pt(),u===Et&&(u=null),u!==Et?(Rr=t,r=Ut(r),t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[o]={nextPos:zr,result:t},t)}function j(){var t,r,e,n,u,o,s,i,l,c,a=65*zr+17,f=Jr[a];return f?(zr=f.nextPos,f.result):(t=zr,r=zr,Zr++,e=C(),Zr--,e===Et?r=void 0:(zr=r,r=Et),r!==Et?(e=zr,Zr++,n=b(),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et?(n=zr,Zr++,u=z(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(u=zr,Zr++,o=k(),Zr--,o===Et?u=void 0:(zr=u,u=Et),u!==Et?(o=T(),o!==Et?(s=zr,Zr++,i=G(),Zr--,i===Et?s=void 0:(zr=s,s=Et),s!==Et?(i=zr,Zr++,l=tt(),Zr--,l===Et?i=void 0:(zr=i,i=Et),i!==Et?(l=zr,Zr++,c=pt(),Zr--,c===Et?l=void 0:(zr=l,l=Et),l!==Et?(r=[r,e,n,u,o,s,i,l],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[a]={nextPos:zr,result:t},t)}function k(){var t,r,e,n,u,o=65*zr+18,s=Jr[o];return s?(zr=s.nextPos,s.result):(t=zr,r=zr,e=q(),e!==Et?(n=Y(),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),r===Et&&(r=T()),r!==Et?(e=zr,Zr++,n=G(),Zr--,n!==Et?(zr=e,e=void 0):e=Et,e!==Et?(n=pt(),n!==Et?(u=tt(),u!==Et?(Rr=t,r=Ut(r),t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[o]={nextPos:zr,result:t},t)}function z(){var t,r,e,n,u,o,s=65*zr+19,i=Jr[s];return i?(zr=i.nextPos,i.result):(t=zr,r=zr,e=q(),e!==Et?(n=Y(),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),r===Et&&(r=T()),r!==Et?(e=zr,Zr++,n=G(),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et?(n=pt(),n!==Et?(u=tt(),u!==Et?(o=pt(),o===Et&&(o=null),o!==Et?(Rr=t,r=Ut(r),t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[s]={nextPos:zr,result:t},t)}function R(){var t,r,e,n=65*zr+20,u=Jr[n];return u?(zr=u.nextPos,u.result):(t=zr,r=B(),r!==Et?(e=ot(),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et),Jr[n]={nextPos:zr,result:t},t)}function M(){var t,r=65*zr+21,e=Jr[r];return e?(zr=e.nextPos,e.result):(t=R(),t===Et&&(t=O()),Jr[r]={nextPos:zr,result:t},t)}function O(){var t,r,e,n=65*zr+22,u=Jr[n];return u?(zr=u.nextPos,u.result):(t=zr,r=nt(),r!==Et?(e=Y(),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et),Jr[n]={nextPos:zr,result:t},t)}function T(){var t,r=65*zr+23,e=Jr[r];return e?(zr=e.nextPos,e.result):(t=M(),t===Et&&(t=Z()),Jr[r]={nextPos:zr,result:t},t)}function Z(){var t,r,e,n,u,o,s,i,l=65*zr+24,c=Jr[l];return c?(zr=c.nextPos,c.result):(t=zr,r=zr,e=ot(),e!==Et?(n=zr,u=Y(),u!==Et?(o=zr,Zr++,s=G(),Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et?(s=pt(),s!==Et?(i=Y(),i!==Et?(u=[u,o,s,i],n=u):(zr=n,n=Et)):(zr=n,n=Et)):(zr=n,n=Et)):(zr=n,n=Et),n===Et&&(n=X()),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),r!==Et?(e=zr,n=at(),n!==Et?(u=zr,Zr++,o=ot(),Zr--,o!==Et?(zr=u,u=void 0):u=Et,u!==Et?(n=[n,u],e=n):(zr=e,e=Et)):(zr=e,e=Et),e===Et&&(e=zr,n=ct(),n!==Et?(u=zr,Zr++,o=at(),Zr--,o!==Et?(zr=u,u=void 0):u=Et,u!==Et?(n=[n,u],e=n):(zr=e,e=Et)):(zr=e,e=Et)),e===Et&&(e=null),e!==Et?(Rr=t,r=Nt(r),t=r):(zr=t,t=Et)):(zr=t,t=Et),Jr[l]={nextPos:zr,result:t},t)}function J(){var t,r,e,n,u,o,s,i,l=65*zr+25,c=Jr[l];return c?(zr=c.nextPos,c.result):(t=d(),t===Et&&(t=zr,r=B(),r!==Et?(e=zr,Zr++,n=G(),Zr--,n!==Et?(zr=e,e=void 0):e=Et,e!==Et?(n=pt(),n!==Et?(u=zr,Zr++,o=D(),Zr--,o!==Et?(zr=u,u=void 0):u=Et,u!==Et?(o=Y(),o!==Et?(s=zr,Zr++,i=At(),Zr--,i!==Et?(zr=s,s=void 0):s=Et,s!==Et?(r=[r,e,n,u,o,s],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)),Jr[l]={nextPos:zr,result:t},t)}function N(){var t,r,e,n,u,o=65*zr+26,s=Jr[o];return s?(zr=s.nextPos,s.result):(t=zr,r=zr,Zr++,e=D(),Zr--,e!==Et?(zr=r,r=void 0):r=Et,r!==Et?(e=zr,n=ot(),n!==Et?(u=X(),u!==Et?(n=[n,u],e=n):(zr=e,e=Et)):(zr=e,e=Et),e===Et&&(e=O()),e!==Et?(n=zr,Zr++,u=At(),Zr--,u!==Et?(zr=n,n=void 0):n=Et,n!==Et?(r=[r,e,n],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[o]={nextPos:zr,result:t},t)}function U(){var t,r,e,n,u=65*zr+27,o=Jr[u];return o?(zr=o.nextPos,o.result):(t=zr,r=I(),r!==Et?(e=zr,Zr++,n=G(),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et),t===Et&&(t=K()),Jr[u]={nextPos:zr,result:t},t)}function q(){var t,r,e,n=65*zr+28,u=Jr[n];return u?(zr=u.nextPos,u.result):(t=zr,r=M(),r!==Et?(e=ot(),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et),Jr[n]={nextPos:zr,result:t},t)}function B(){var t,r,e,n=65*zr+29,u=Jr[n];return u?(zr=u.nextPos,u.result):(t=zr,r=ot(),r!==Et?(e=Y(),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et),Jr[n]={nextPos:zr,result:t},t)}function D(){var t,r,e,n,u,o,s,i=65*zr+30,l=Jr[i];return l?(zr=l.nextPos,l.result):(t=zr,r=Q(),r!==Et?(e=zr,Zr++,n=tt(),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et?(n=V(),n!==Et?(u=zr,Zr++,o=P(),Zr--,o===Et?u=void 0:(zr=u,u=Et),u!==Et?(o=zr,Zr++,s=At(),Zr--,s!==Et?(zr=o,o=void 0):o=Et,o!==Et?(r=[r,e,n,u,o],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[i]={nextPos:zr,result:t},t)}function G(){var t,r,e,n,u,o,s=65*zr+31,i=Jr[s];if(i)return zr=i.nextPos,i.result;for(t=zr,r=[],e=ot(),e===Et&&(e=W());e!==Et;)r.push(e),e=ot(),e===Et&&(e=W());return r!==Et?(e=pt(),e===Et&&(e=null),e!==Et?(n=tt(),n===Et&&(n=null),n!==Et?(u=I(),u!==Et?(o=gt(),o!==Et?(r=[r,e,n,u,o],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[s]={nextPos:zr,result:t},t}function H(){var t,r,e,n,u,o=65*zr+32,s=Jr[o];return s?(zr=s.nextPos,s.result):(t=zr,r=zr,Zr++,e=zr,n=Q(),n!==Et?(u=tt(),u!==Et?(n=[n,u],e=n):(zr=e,e=Et)):(zr=e,e=Et),Zr--,e===Et?r=void 0:(zr=r,r=Et),r!==Et?(e=I(),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et),t===Et&&(t=K()),Jr[o]={nextPos:zr,result:t},t)}function I(){var t,r,e,n,u,o=65*zr+33,s=Jr[o];return s?(zr=s.nextPos,s.result):(t=zr,r=Q(),r!==Et?(e=zr,Zr++,n=tt(),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et?(n=V(),n!==Et?(u=L(),u===Et&&(u=null),u!==Et?(r=[r,e,n,u],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[o]={nextPos:zr,result:t},t)}function K(){var t,r,e,n,u=65*zr+34,o=Jr[u];return o?(zr=o.nextPos,o.result):(t=zr,r=ot(),r!==Et?(e=zr,Zr++,n=st(),Zr--,n!==Et?(zr=e,e=void 0):e=Et,e!==Et?(n=L(),n!==Et?(r=[r,e,n],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[u]={nextPos:zr,result:t},t)}function L(){var t,r,e,n,u,o=65*zr+35,s=Jr[o];return s?(zr=s.nextPos,s.result):(t=zr,r=zr,Zr++,e=H(),Zr--,e===Et?r=void 0:(zr=r,r=Et),r!==Et?(e=ot(),e!==Et?(n=zr,Zr++,u=H(),Zr--,u!==Et?(zr=n,n=void 0):n=Et,n!==Et?(r=[r,e,n],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),t===Et&&(t=zr,r=st(),r===Et&&(r=null),r!==Et?(e=ot(),e===Et&&(e=null),e!==Et?(n=zr,Zr++,u=gt(),Zr--,u!==Et?(zr=n,n=void 0):n=Et,n!==Et?(r=[r,e,n],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)),Jr[o]={nextPos:zr,result:t},t)}function Q(){var t,r,e,n,u,o,s,i,l=65*zr+36,c=Jr[l];return c?(zr=c.nextPos,c.result):(t=pt(),t===Et&&(t=W(),t===Et&&(t=zr,r=ut(),r===Et&&(r=zr,e=zr,n=Pt(),n!==Et?(u=zr,Zr++,o=dt(),Zr--,o===Et?u=void 0:(zr=u,u=Et),u!==Et?(n=[n,u],e=n):(zr=e,e=Et)):(zr=e,e=Et),e===Et&&(e=zr,n=xt(),n!==Et?(u=zr,Zr++,o=ct(),o===Et&&(o=it(),o===Et&&(o=at())),Zr--,o===Et?u=void 0:(zr=u,u=Et),u!==Et?(n=[n,u],e=n):(zr=e,e=Et)):(zr=e,e=Et)),e===Et&&(e=null),e!==Et?(n=ft(),n===Et&&(n=zr,u=ht(),u===Et&&(u=vt(),u===Et&&(u=zr,o=ct(),o!==Et?(s=zr,Zr++,i=at(),Zr--,i===Et?s=void 0:(zr=s,s=Et),s!==Et?(o=[o,s],u=o):(zr=u,u=Et)):(zr=u,u=Et))),u!==Et?(o=zr,Zr++,s=it(),Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et?(u=[u,o],n=u):(zr=n,n=Et)):(zr=n,n=Et),n===Et&&(n=lt())),n===Et&&(n=null),n!==Et?(u=it(),u===Et&&(u=at()),u===Et&&(u=null),u!==Et?(e=[e,n,u],r=e):(zr=r,r=Et)):(zr=r,r=Et)):(zr=r,r=Et)),r!==Et?(e=zr,Zr++,n=ot(),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(r=[r,e,n],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et))),Jr[l]={nextPos:zr,result:t},t)}function V(){var t,r,e,n,u=65*zr+37,o=Jr[u];return o?(zr=o.nextPos,o.result):(t=Y(),t===Et&&(t=X(),t===Et&&(t=zr,r=tt(),r!==Et?(e=zr,Zr++,n=V(),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et))),Jr[u]={nextPos:zr,result:t},t)}function W(){var t,r,e,n,u,o=65*zr+38,s=Jr[o];return s?(zr=s.nextPos,s.result):(t=zr,r=rt(),r===Et&&(r=et()),r!==Et?(e=zr,Zr++,n=V(),Zr--,n!==Et?(zr=e,e=void 0):e=Et,e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(r=[r,e,n],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[o]={nextPos:zr,result:t},t)}function X(){var r,e,n,u,o,s,i=65*zr+39,l=Jr[i];return l?(zr=l.nextPos,l.result):(r=zr,e=zr,qt.test(t.charAt(zr))?(n=t.charAt(zr),zr++):(n=Et,0===Zr&&c(Bt)),n!==Et?(u=et(),u!==Et?(o=zr,Zr++,s=_(),Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et?(n=[n,u,o],e=n):(zr=e,e=Et)):(zr=e,e=Et)):(zr=e,e=Et),e===Et&&(e=zr,Dt.test(t.charAt(zr))?(n=t.charAt(zr),zr++):(n=Et,0===Zr&&c(Gt)),n!==Et?(u=rt(),u!==Et?(o=zr,Zr++,s=$(),Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et?(n=[n,u,o],e=n):(zr=e,e=Et)):(zr=e,e=Et)):(zr=e,e=Et)),e!==Et?(n=zr,Zr++,u=V(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[i]={nextPos:zr,result:r},r)}function Y(){var r,e,n,u,o=65*zr+40,s=Jr[o];return s?(zr=s.nextPos,s.result):(r=zr,Ht.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(It)),e!==Et?(n=zr,Zr++,u=V(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[o]={nextPos:zr,result:r},r)}function $(){var r,e=65*zr+41,n=Jr[e];return n?(zr=n.nextPos,n.result):(Kt.test(t.charAt(zr))?(r=t.charAt(zr),zr++):(r=Et,0===Zr&&c(Lt)),Jr[e]={nextPos:zr,result:r},r)}function _(){var r,e=65*zr+42,n=Jr[e];return n?(zr=n.nextPos,n.result):(Qt.test(t.charAt(zr))?(r=t.charAt(zr),zr++):(r=Et,0===Zr&&c(Vt)),Jr[e]={nextPos:zr,result:r},r)}function tt(){var r,e,n,u,o,s,i=65*zr+43,l=Jr[i];return l?(zr=l.nextPos,l.result):(r=zr,Wt.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(Xt)),e!==Et?(n=zr,Zr++,u=zr,o=zr,Zr++,s=tt(),Zr--,s===Et?o=void 0:(zr=o,o=Et),o!==Et?(s=V(),s!==Et?(o=[o,s],u=o):(zr=u,u=Et)):(zr=u,u=Et),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[i]={nextPos:zr,result:r},r)}function rt(){var r,e=65*zr+44,n=Jr[e];return n?(zr=n.nextPos,n.result):(Yt.test(t.charAt(zr))?(r=t.charAt(zr),zr++):(r=Et,0===Zr&&c($t)),Jr[e]={nextPos:zr,result:r},r)}function et(){var r,e,n=65*zr+45,u=Jr[n];return u?(zr=u.nextPos,u.result):(r=zr,_t.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(tr)),e!==Et&&(Rr=r,e=rr()),r=e,Jr[n]={nextPos:zr,result:r},r)}function nt(){var t,r,e,n,u,o,s=65*zr+46,i=Jr[s];return i?(zr=i.nextPos,i.result):(t=zr,r=zr,Zr++,e=Q(),Zr--,e!==Et?(zr=r,r=void 0):r=Et,r!==Et?(e=ot(),e!==Et?(n=ot(),n!==Et?(u=zr,Zr++,o=ot(),Zr--,o===Et?u=void 0:(zr=u,u=Et),u!==Et?(r=[r,e,n,u],t=r):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et)):(zr=t,t=Et),Jr[s]={nextPos:zr,result:t},t)}function ut(){var t,r,e,n=65*zr+47,u=Jr[n];return u?(zr=u.nextPos,u.result):(t=zr,r=ht(),r!==Et?(e=Pt(),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et),t===Et&&(t=zr,r=vt(),r!==Et?(e=xt(),e!==Et?(r=[r,e],t=r):(zr=t,t=Et)):(zr=t,t=Et)),Jr[n]={nextPos:zr,result:t},t)}function ot(){var t,r=65*zr+48,e=Jr[r];return e?(zr=e.nextPos,e.result):(t=ft(),t===Et&&(t=vt(),t===Et&&(t=xt(),t===Et&&(t=Pt(),t===Et&&(t=ht(),t===Et&&(t=st()))))),Jr[r]={nextPos:zr,result:t},t)}function st(){var t,r=65*zr+49,e=Jr[r];return e?(zr=e.nextPos,e.result):(t=it(),t===Et&&(t=lt(),t===Et&&(t=ct(),t===Et&&(t=at()))),Jr[r]={nextPos:zr,result:t},t)}function it(){var r,e,n,u,o=65*zr+50,s=Jr[o];return s?(zr=s.nextPos,s.result):(r=zr,er.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(nr)),e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[o]={nextPos:zr,result:r},r)}function lt(){var r,e,n,u,o=65*zr+51,s=Jr[o];return s?(zr=s.nextPos,s.result):(r=zr,ur.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(or)),e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[o]={nextPos:zr,result:r},r)}function ct(){var r,e,n,u,o,s=65*zr+52,i=Jr[s];return i?(zr=i.nextPos,i.result):(r=zr,sr.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(ir)),e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(u=zr,Zr++,o=ut(),Zr--,o===Et?u=void 0:(zr=u,u=Et),u!==Et?(e=[e,n,u],r=e):(zr=r,r=Et)):(zr=r,r=Et)):(zr=r,r=Et),Jr[s]={nextPos:zr,result:r},r)}function at(){var r,e,n,u,o=65*zr+53,s=Jr[o];return s?(zr=s.nextPos,s.result):(r=zr,lr.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(cr)),e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[o]={nextPos:zr,result:r},r)}function ft(){var r,e,n,u,o=65*zr+54,s=Jr[o];return s?(zr=s.nextPos,s.result):(r=zr,ar.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(fr)),e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[o]={nextPos:zr,result:r},r)}function vt(){var r,e,n,u,o=65*zr+55,s=Jr[o];return s?(zr=s.nextPos,s.result):(r=zr,vr.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(xr)),e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[o]={nextPos:zr,result:r},r)}function xt(){var r,e,n,u,o=65*zr+56,s=Jr[o];return s?(zr=s.nextPos,s.result):(r=zr,Pr.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(dr)),e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[o]={nextPos:zr,result:r},r)}function Pt(){var r,e,n,u,o=65*zr+57,s=Jr[o];return s?(zr=s.nextPos,s.result):(r=zr,hr.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(pr)),e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[o]={nextPos:zr,result:r},r)}function dt(){var r,e,n,u,o=65*zr+58,s=Jr[o];return s?(zr=s.nextPos,s.result):(r=zr,Ar.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(gr)),e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[o]={nextPos:zr,result:r},r)}function ht(){var r,e,n,u,o=65*zr+59,s=Jr[o];return s?(zr=s.nextPos,s.result):(r=zr,mr.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(yr)),e!==Et?(n=zr,Zr++,u=W(),Zr--,u===Et?n=void 0:(zr=n,n=Et),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[o]={nextPos:zr,result:r},r)}function pt(){var r,e,n,u,o=65*zr+60,s=Jr[o];return s?(zr=s.nextPos,s.result):(r=zr,wr.test(t.charAt(zr))?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(Fr)),e!==Et?(n=zr,Zr++,u=V(),Zr--,u!==Et?(zr=n,n=void 0):n=Et,n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),Jr[o]={nextPos:zr,result:r},r)}function At(){var r,e,n,u=65*zr+61,o=Jr[u];return o?(zr=o.nextPos,o.result):(r=gt(),r===Et&&(r=zr,e=zr,Zr++,n=V(),Zr--,n===Et?e=void 0:(zr=e,e=Et),e!==Et?(n=x(),n!==Et?(e=[e,n],r=e):(zr=r,r=Et)):(zr=r,r=Et),r===Et&&(Er.test(t.charAt(zr))?(r=t.charAt(zr),zr++):(r=Et,0===Zr&&c(Sr)))),Jr[u]={nextPos:zr,result:r},r)}function gt(){var r,e,n=65*zr+62,u=Jr[n];return u?(zr=u.nextPos,u.result):(r=mt(),r===Et&&(r=zr,Zr++,t.length>zr?(e=t.charAt(zr),zr++):(e=Et,0===Zr&&c(br)),Zr--,e===Et?r=void 0:(zr=r,r=Et)),Jr[n]={nextPos:zr,result:r},r)}function mt(){var r,e,n,u=65*zr+63,o=Jr[u];if(o)return zr=o.nextPos,o.result;if(r=zr,e=[],Cr.test(t.charAt(zr))?(n=t.charAt(zr),zr++):(n=Et,0===Zr&&c(jr)),n!==Et)for(;n!==Et;)e.push(n),Cr.test(t.charAt(zr))?(n=t.charAt(zr),zr++):(n=Et,0===Zr&&c(jr));else e=Et;return e!==Et&&(Rr=r,e=kr(e)),r=e,Jr[u]={nextPos:zr,result:r},r}function yt(t){if("string"==typeof t)return t;var r="";for(var e in t)r+=yt(t[e]);return r}function wt(t){if("string"==typeof t)return t;var r=[];for(var e in t)r.push(wt(t[e]));return r}e=void 0!==e?e:{};var Ft,Et={},St={text:f},bt=f,Ct=function(t){return wt(t)},jt=function(t){return t},kt=function(t){return["cmavo",yt(t)]},zt=function(t){return["gismu",yt(t)]},Rt=function(t){return["lujvo",yt(t)]},Mt=function(t){return["fu'ivla",yt(t)]},Ot=function(t){return["cmevla",yt(t)]},Tt=function(t){return[yt(t),"-"]},Zt=function(t){return[yt(t)]},Jt=function(t,r){return[yt(t),"-",yt(r)]},Nt=function(t){return[yt(t),""]},Ut=function(t){return[yt(t),""]},qt=/^[a]/,Bt=n(["a"],!1,!1),Dt=/^[aeo]/,Gt=n(["a","e","o"],!1,!1),Ht=/^[aeiou]/,It=n(["a","e","i","o","u"],!1,!1),Kt=/^[i]/,Lt=n(["i"],!1,!1),Qt=/^[u]/,Vt=n(["u"],!1,!1),Wt=/^[y]/,Xt=n(["y"],!1,!1),Yt=/^[i\u0269]/,$t=n(["i","ɩ"],!1,!1),_t=/^[uw]/,tr=n(["u","w"],!1,!1),rr=function(){return["u",""]},er=/^[l]/,nr=n(["l"],!1,!1),ur=/^[m]/,or=n(["m"],!1,!1),sr=/^[n]/,ir=n(["n"],!1,!1),lr=/^[r]/,cr=n(["r"],!1,!1),ar=/^[pfbgvkx]/,fr=n(["p","f","b","g","v","k","x"],!1,!1),vr=/^[d]/,xr=n(["d"],!1,!1),Pr=/^[jz]/,dr=n(["j","z"],!1,!1),hr=/^[cs]/,pr=n(["c","s"],!1,!1),Ar=/^[x]/,gr=n(["x"],!1,!1),mr=/^[t]/,yr=n(["t"],!1,!1),wr=/^[,']/,Fr=n([",","'"],!1,!1),Er=/^[}]/,Sr=n(["}"],!1,!1),br=u(),Cr=/^[^a-zA-Z,']/,jr=n([["a","z"],["A","Z"],",","'"],!0,!1),kr=function(t){return["space",yt(t)]},zr=(n([" "],!0,!1),0),Rr=0,Mr=[{line:1,column:1}],Or=0,Tr=[],Zr=0,Jr={};if("startRule"in e){if(!(e.startRule in St))throw new Error("Can't start parsing from rule \""+e.startRule+'".');bt=St[e.startRule]}if(Ft=bt(),Ft!==Et&&zr===t.length)return Ft;throw Ft!==Et&&zr<t.length&&c(o()),a(Tr,Or<t.length?t.charAt(Or):null,Or<t.length?l(Or,Or+1):l(Or,Or))}return t(r,Error),r.buildMessage=function(t,r){function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}function n(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+e(t)})}function u(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+e(t)})}function o(t){return l[t.type](t)}function s(t){var r,e,n=new Array(t.length);for(r=0;r<t.length;r++)n[r]=o(t[r]);if(n.sort(),n.length>0){for(r=1,e=1;r<n.length;r++)n[r-1]!==n[r]&&(n[e]=n[r],e++);n.length=e}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function i(t){return t?'"'+n(t)+'"':"end of input"}var l={literal:function(t){return'"'+n(t.text)+'"'},"class":function(t){var r,e="";for(r=0;r<t.parts.length;r++)e+=t.parts[r]instanceof Array?u(t.parts[r][0])+"-"+u(t.parts[r][1]):u(t.parts[r]);return"["+(t.inverted?"^":"")+e+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};return"Expected "+s(t)+" but "+i(r)+" found."},{SyntaxError:r,parse:e}}();

var ma_klesi_lo_valsi = function(str) {
  var j = ['', ''];
  if (!window.xuzganalojudri || str.search(/[^aeiouyAEIOY]'/) > -1) return j;
  try {
    j = cmaxes.parse(str.toLowerCase().replace(/,/g, '')).toString().split(",");
    if (str.indexOf(' zei ') > -1) return ['zei-lujvo', str];
  } catch (e) {}
  if (j.length === 2) return [j[0], ''];
  if (j.length > 2 && j.filter(function(el, index) {
      return index % 2 === 0;
    }).toString().match(/^cmavo(,cmavo)+$/)) {
    return ['cmavo compound', j.filter(function(el, index) {
      return index % 2 === 1;
    }).join(" ")];
  }
  return j;
};

function ma_ve_lujvo(a) {
  if (!window.xuzganalojudri) return;
  if (a.indexOf(' zei ') > -1) return ["@"].concat(a.split(" "));
  var t;
  try {
    t = cmaxes.parse(a).toString().split(",");
  } catch (err) {
    return;
  }
  if (t[0] !== 'lujvo' || t.length !== 2) return;
  return t[1].split("-");
}

var rafsi = {};
var cmima = sorcu[bau].length;
for (var cmima in sorcu[bau]) {
  var i = (sorcu[bau][cmima]["r"] || []).length;
  while (i--) {
    rafsi[(sorcu[bau][cmima]["r"][i])] = sorcu[bau][cmima];
    rafsi[(sorcu[bau][cmima]["r"][i])]["w"] = cmima;
  }
  if (cmima.length > 4 || (cmima.length === 4 && !~cmima.indexOf("'"))) {
    rafsi[cmima] = sorcu[bau][cmima];
    rafsi[cmima]["w"] = cmima;
  }
}

function jmina_lo_se_claxu(doc) {
  if (!doc.t || doc.t === '') {
    if (window.muplis || !window.xuzganalojudri) {
      doc.t = '';
    } else {
      var ye = ma_klesi_lo_valsi(doc.w);
      doc.t = ye[0];
    }
  }
  return doc;
}

window.storecache = {};
for (var i in sorcu[bau]) {
  window.storecache[i] = i + ";" + Object.keys(sorcu[bau][i]).map(function(b) {
    return sorcu[bau][i][b];
  }).join(";").toLowerCase();
  window.storecache[i] += ";" + window.storecache[i].replace(/h/g, "'");
}

function sisku(query, callback) {
  if (query.length === 0) return;
  var searchId = ++searchIdCounter;
  var preciseMatches = [];
  var query_apos = query.replace(/h/g, "'").toLowerCase();
  var queryDecomposition = window.xuzganalojudri ? query_apos.replace(/ zei /g, '-zei-').split(" ").map(function(a) {
    return a.replace(/-zei-/g, ' zei ');
  }) : [query_apos];
  var kij = [];
  var ki = [];
  var lo_matra_cu_cupra = [];

  function julne(a) {
    return a.reduce(function(b, n) {
      if (n !== undefined) {
        b.push(jmina_lo_se_claxu(n));
      }
      return b;
    }, []);
  }

  function sohivalsi(queryDecomposition, e, lu) {
    var kd = [];
    var o;
    for (var s = 0; s < queryDecomposition.length; s++) {
      for (var c = queryDecomposition.length - 1; c >= s; c--) {
        o = queryDecomposition.slice(s, c + 1).join(" ");
        if (!e || (e === 1 && o !== lu)) {
          kd = shortget(o, kd);
        }
      }
    }
    return kd;
  }

  function be(kil, lu, e) {
    var luj = ma_ve_lujvo(lu);
    if (luj) {
      var kim = [];
      if (luj[0] === "@") {
        luj.shift();
        kim = luj.slice();
        for (var def in sorcu[bau]) {
          for (var j = 0; j < luj.length; j++) {
            if (def === luj[j]) {
              kim[j] = sorcu[bau][def];
              kim[j]["w"] = def;
            }
          }
        }
      } else {
        for (var ji in luj) {
          var rf = rafsi[luj[ji]];
          if (rf) {
            kim.push(rf);
          } else {
            kim = kim.concat({
              t: "",
              d: window.nasezvafahi,
              w: "-" + luj[ji] + "-",
              r: [luj[ji]]
            });
          }
        }
      }
      if (kil.length === 1 && kil[0].w === lu) {
        kil[0].rafsiDocuments = julne(kim);
      } else {
        kil.push({
          t: window.bangudecomp,
          w: query,
          rafsiDocuments: julne(kim)
        });
      }
    }
    return kil;
  }

  function sortthem(lo_matra_cu_cupra, multi) {
    var exactMatches = [];
    var greatMatches = [];
    var selmahoMatches = [];
    var goodMatches = [];
    var normalMatches = [];
    var defMatches = [];
    var lastMatches = [];
    for (var i = 0; i < lo_matra_cu_cupra.length; i++) {
      var doc = jmina_lo_se_claxu(lo_matra_cu_cupra[i]); //todo: optimize for phrases
      if (doc) {
        if ((doc.w === query) || (doc.w === query_apos)) {
          exactMatches.push(doc);
          exactMatches = be(exactMatches, query, 1);
        } else if ((doc.r || [''])[0].search("\\b" + query + "\\b") >= 0) {
          normalMatches.push(doc);
        } else if (doc.w.search("(^| )(" + query_apos + "|" + query + ")( |$)") >= 0 || (doc.g || '') === query) {
          greatMatches.push(doc);
        } else if ((doc.s || '') === query) {
          selmahoMatches.push(doc);
        } else if ((doc.g || '').search("\\b" + query + "\\b") >= 0 || doc.w.search("\\b(" + query_apos + "|" + query + ")") >= 0 || doc.w.search("(" + query_apos + "|" + query + ")\\b") >= 0) {
          goodMatches.push(doc);
        } else if ((doc.d || '').toLowerCase().search("\\b" + query + "\\b") >= 0) {
          defMatches.push(doc);
        } else {
          lastMatches.push(doc);
        }
      }
    }
    if (exactMatches.length === 0 && !multi) {
      preciseMatches = be([], query) || [];
    }
    var sor = function(ar) {
      if (ar.length === 0) return ar;
      var gism = [];
      var cmav = [];
      for (c = 0; c < ar.length; c++) {
        if (ar[c].t === 'gismu') {
          gism.push(ar.splice(c, 1)[0]);
        }
      }
      for (c = 0; c < ar.length; c++) {
        if (ar[c].t === 'cmavo') {
          cmav.push(ar.splice(c, 1)[0]);
        }
      }
      return gism.sort(sortMultiDimensional)
        .concat(cmav.sort(sortMultiDimensional))
        .concat(ar.sort(sortMultiDimensional));
    };
    var sortMultiDimensional = function(a, b) {
      return (((a.d || '').length < (b.d || '').length) ? -1 : (((a.d || '').length > (b.d || '').length) ? 1 : 0));
    };
    greatMatches = sor(greatMatches);
    selmahoMatches = sor(selmahoMatches);
    goodMatches = sor(goodMatches);
    normalMatches = sor(normalMatches);
    defMatches = sor(defMatches);
    lastMatches = sor(lastMatches);
    preciseMatches = sor(preciseMatches);
    preciseMatches = preciseMatches
      .concat(exactMatches)
      .concat(normalMatches)
      .concat(greatMatches)
      .concat(selmahoMatches)
      .concat(goodMatches)
      .concat(defMatches)
      .concat(lastMatches);
    if (preciseMatches[0] && (preciseMatches[0].w === query_apos)) {
      for (var tyt = 1; tyt < preciseMatches.length; tyt++) {
        if (preciseMatches[tyt].l && (preciseMatches[tyt].d === "{" + query_apos + "}")) {
          preciseMatches.splice(tyt, 1);
          tyt = tyt - 1;
        }
      }
    }
    return preciseMatches;
  }

  function shortget(a, ki, shi) {
    a = a.replace(/([cfkpstx])([bdgjvz])/igm, "$1y$2");
    a = a.replace(/([bdgjvz])([cfkpstx])/igm, "$1y$2");
    a = a.replace(/([bcdfgjklmnprstvxz])\1/igm, "$1y$1");
    a = a.replace(/([aeiouy])\1/igm, "$1'$1");

    var isdef = Object.keys(sorcu[bau]).reduce(function(b, n) {
      if ((n.toLowerCase() === a.toLowerCase()) || (sorcu[bau][n]["d"].toLowerCase() === "{" + a.toLowerCase() + "}")) {
        var c = sorcu[bau][n];
        c["w"] = n;
        b.push(c);
      }
      return b;
    }, []);

    if (isdef && isdef.length > 0) {
      ki = ki.concat(isdef);
    } else {
      if (!shi) {
        if (a.replace(/ zei /g, '-zei-').split(" ").length === 1) {
          var ye = ma_klesi_lo_valsi(a);
          if (ye[0] === 'cmavo compound' || ye[0] === 'zei-lujvo') {
            ye = ye[1].split(" ");
            for (var jj in ye) {
              ki = shortget(ye[jj], ki, 2);
            }
          } else if (ye[0] !== '') {
            ki = ki.concat({
              t: "",
              d: window.nasezvafahi,
              w: a
            });
          }
        } else {
          var luj = ma_ve_lujvo(a);
          if (((luj || [])[0] || '') === "@") {
            luj.shift();
            var kim = [];
            kim = luj.slice();
            for (var def in sorcu[bau]) {
              for (var j = 0; j < luj.length; j++) {
                if (def === luj[j]) {
                  kim[j] = sorcu[bau][def];
                  kim[j]["w"] = def;
                }
              }
            }
            ki.concat(kim);
          } else if (luj) {
            for (var ji in luj) {
              ki.push(rafsi[luj[ji]]);
            }
          }
        }
      } else {
        ki = ki.concat({
          t: "",
          d: window.nasezvafahi,
          w: a
        });
      }
    }
    return ki;
  }

  function cnanosisku(lo_matra_cu_cupra, multi) {
    if (searchId !== searchIdCounter) return;
    var preciseMatches = [];
    for (var w in sorcu[bau]) {
      if (window.storecache[w].indexOf(query.toLowerCase()) >= 0) {
        var i = sorcu[bau][w];
        i["w"] = w;
        lo_matra_cu_cupra.push(i);
      }
    }
    preciseMatches = sortthem(lo_matra_cu_cupra, multi);
    if (multi) return preciseMatches;
    if (preciseMatches.length === 0) preciseMatches = be([], query) || [];
    if (preciseMatches.length === 0 || preciseMatches[0].w !== query_apos) {
      var ty = julne(shortget(query_apos, []));
      if (ty.length <= 1) {
        preciseMatches = ty.concat(preciseMatches);
      } else {
        preciseMatches = [{
          t: window.bangudecomp,
          w: query,
          rafsiDocuments: ty
        }].concat(preciseMatches);
      }
    }
    return preciseMatches;
  }

  if ((query.indexOf('^') === 0 || query.slice(-1) === '$')) {
    preciseMatches = julne(sortthem(
      Object.keys(sorcu[bau]).reduce(function(b, n) {
        if ((n.match(query.toLowerCase()) || []).length > 0) {
          var c = sorcu[bau][n];
          c["w"] = n;
          b.push(c);
        }
        return b;
      }, [])
    .splice(0, 100)
  ));
  } else if ((query.indexOf('@') === 0 || query.slice(-1) === '@')) {
    preciseMatches = siskurimni(query.replace(/^@+/, '').replace(/@+$/, ''));
  } else if (!window.muplis && queryDecomposition.length > 1) {
    preciseMatches = cnanosisku(lo_matra_cu_cupra, true);
    preciseMatches.push({
      t: window.bangudecomp,
      w: query,
      rafsiDocuments: julne(sohivalsi(queryDecomposition))
    });
  } else {
    preciseMatches = cnanosisku(lo_matra_cu_cupra);
  }
  callback(preciseMatches);
}

function siskurimni(query) {
  if (query.length === 0) return;
  var searchId = ++searchIdCounter;
  var traji_rimni = [];
  var _10_moi_lo_traji_rimni = [];
  var _20_moi_lo_traji_rimni = [];
  var _30_moi_lo_traji_rimni = [];
  var _40_moi_lo_traji_rimni = [];
  var _60_moi_lo_traji_rimni = [];
  var _50_moi_lo_traji_rimni = [];
  var _70_moi_lo_traji_rimni = [];
  var _80_moi_lo_traji_rimni = [];
  var _90_moi_lo_traji_rimni = [];
  var query_apos, queryF, queryR;
  Array.prototype.cupra_lo_porsi = function() {
    for (var i = 0; i < this.length; i++) {
      var doc = jmina_lo_se_claxu(this[i]); //todo: optimize for phrases
      if (!doc) continue;
      var docw = krulermorna(doc.w).replace(/([aeiouǎąęǫ])/g, '$1-').split("-").slice(-3);
      if (queryR && (docw[0].slice(-1) !== queryR[0].slice(-1))) continue;
      var right = docw[1].slice(-1);
      var reversal = (docw[1].slice(-3, -1) === queryF[1].slice(-3, -1).split('').reverse().join(''));
      var left = queryF[1].slice(-1);
      var sli = false;
      if ((left === 'a' && right.search('[eao]') >= 0) ||
        (left === 'e' && right.search('[iea]') >= 0) ||
        (left === 'i' && right.search('[ie]') >= 0) ||
        (left === 'o' && right.search('[aou]') >= 0) ||
        (left === 'u' && right.search('[aou]') >= 0)) sli = true;
      if (krulermorna(doc.w) === query) {
        _10_moi_lo_traji_rimni.push(doc);
        continue;
      } else if (queryR[2] &&
        (docw[0].match(queryR[0]) || []).length > 0 &&
        (docw[1].match(queryR[1]) || []).length > 0 &&
        (left === right) &&
        docw[2] === queryR[2]
      ) {
        _20_moi_lo_traji_rimni.push(doc);
      } else if (queryR[2] &&
        (docw[0].match(queryR[0]) || []).length > 0 &&
        (docw[1].match(queryR[1]) || []).length > 0 &&
        sli &&
        docw[2] === queryR[2]
      ) {
        _30_moi_lo_traji_rimni.push(doc);
      } else if (queryR[2] &&
        (docw[1].match(regexify(queryR[2])) || []).length > 0 &&
        (left === right) &&
        docw[2] === queryR[2]
      ) {
        _40_moi_lo_traji_rimni.push(doc);
      } else if (queryR[2] &&
        (docw[1].match(regexify(queryR[2])) || []).length > 0 &&
        sli &&
        docw[2] === queryR[2]
      ) {
        _50_moi_lo_traji_rimni.push(doc);
      } else if (queryR[2] &&
        (docw[0].match(queryR[0]) || []).length > 0 &&
        sli &&
        reversal &&
        docw[2] === queryR[2]
      ) {
        _60_moi_lo_traji_rimni.push(doc);
      } else if (queryR[2] &&
        (docw[0].match(queryR[0]) || []).length > 0 &&
        (docw[1].match(queryR[1]) || []).length > 0 &&
        docw[2] === queryR[2]
      ) {
        _70_moi_lo_traji_rimni.push(doc);
      } else if (queryR[1] &&
        (docw[0].match(queryR[0]) || []).length > 0 &&
        (docw[1].match(queryR[1]) || []).length > 0
      ) {
        _80_moi_lo_traji_rimni.push(doc);
      } else {
        _90_moi_lo_traji_rimni.push(doc);
      }
    }
    var sortMultiDimensional = function(a, b) {
      return (((a.d || '').length < (b.d || '').length) ? -1 : (((a.d || '').length > (b.d || '').length) ? 1 : 0));
    };
    var sor = function(ar) {
      if (ar.length === 0) return ar;
      var gism = [];
      var expgism = [];
      var cmav = [];
      var expcmav = [];
      var elses = [];
      for (c = 0; c < ar.length; c++) {
        if (ar[c].t === 'gismu') {
          gism.push(ar[c]);
        } else if (ar[c].t === 'experimental gismu') {
          expgism.push(ar[c]);
        } else if (ar[c].t === 'cmavo') {
          cmav.push(ar[c]);
        } else if (ar[c].t === 'experimental cmavo') {
          expcmav.push(ar[c]);
        } else {
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
    _20_moi_lo_traji_rimni = sor(_20_moi_lo_traji_rimni);
    _30_moi_lo_traji_rimni = sor(_30_moi_lo_traji_rimni);
    _60_moi_lo_traji_rimni = sor(_60_moi_lo_traji_rimni);
    _40_moi_lo_traji_rimni = sor(_40_moi_lo_traji_rimni);
    _50_moi_lo_traji_rimni = sor(_50_moi_lo_traji_rimni);
    _70_moi_lo_traji_rimni = sor(_70_moi_lo_traji_rimni);
    _80_moi_lo_traji_rimni = sor(_80_moi_lo_traji_rimni);
    _90_moi_lo_traji_rimni = sor(_90_moi_lo_traji_rimni);
    var traji_rimni =
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

  var krulermorna = function(t) {
    t = "." + t.replace(/\./g, "").replace(/h/g, "'").toLowerCase();
    t = t.replace(/([aeiou\.])u([aeiou])/g, '$1w$2');
    t = t.replace(/([aeiou\.])i([aeiou])/g, '$1ɩ$2');
    t = t.replace(/au/g, 'ǎ');
    t = t.replace(/ai/g, 'ą');
    t = t.replace(/ei/g, 'ę');
    t = t.replace(/oi/g, 'ǫ');
    t = t.replace(/\./g, '');
    return t;
  };

  var regexify = function(t) {
    t = t.replace(/[lmnr]/g, '[lmnr]');
    t = t.replace(/[ɩw]/g, '[ɩw]');
    t = t.replace(/[pb]/g, '[pb]');
    t = t.replace(/[fv]/g, '[fv]');
    t = t.replace(/[td]/g, '[td]');
    t = t.replace(/[sz]/g, '[sz]');
    t = t.replace(/[cj]/g, '[cj]');
    t = t.replace(/[kg]/g, '[kg]');
    t = t.replace(/x/g, '[xk]');
    return t;
  };

  query = krulermorna(query);
  queryR = query.replace(/([aeiouǎąęǫ])/g, '$1-').split("-").slice(-3);
  queryF = queryR.slice();
  if (queryR.length >= 2) {
    queryR[1] = queryR[1].replace(/[aeiouǎąęǫ]/, '[aeiouǎąęǫ]');
  }
  var r = /.*([aeiouǎąęǫ])/.exec(queryR[0]);
  if (r === null) return traji_rimni;
  queryR[0] = r[1];
  if (queryR.length === 2) {
    traji_rimni = Object.keys(sorcu[bau])
    .reduce(function(b, n) {
      var queryRn = krulermorna(n).replace(/([aeiouǎąęǫ])/g, '$1-').split("-").slice(-3);
      var Is = queryRn.length === 2 ? (queryRn[0].split('').slice(-1)[0] === queryR[0].split('').slice(-1)[0]) : false;
      if (Is) {
        var c = sorcu[bau][n];
        c["w"] = n;
        c = jmina_lo_se_claxu(c);
        if (c) b.push(c);
      }
      return b;
    }, [])
    .cupra_lo_porsi();
  } else {
    query_apos = regexify(queryR.join(""));
    traji_rimni = Object.keys(sorcu[bau])
    .reduce(function(b, n) {
      var Is = (krulermorna(n)
        .match(query_apos.toLowerCase() + "$") || []).length > 0;
      if (Is) {
        var c = sorcu[bau][n];
        c["w"] = n;
        b.push(c);
      }
      return b;
    }, [])
      .cupra_lo_porsi();
  }
  return traji_rimni;
}
