import{p as l}from"./index.2a86e40d.js";import{R as Ot}from"./index.2b326f7a.js";/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function j(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?j=function(n){return typeof n}:j=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},j(t)}function Vt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function ct(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function Jt(t,n,r){return n&&ct(t.prototype,n),r&&ct(t,r),t}function Kt(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function u(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{},e=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),e.forEach(function(a){Kt(t,a,r[a])})}return t}function It(t,n){return Qt(t)||Zt(t,n)||tn()}function Qt(t){if(Array.isArray(t))return t}function Zt(t,n){var r=[],e=!0,a=!1,i=void 0;try{for(var o=t[Symbol.iterator](),s;!(e=(s=o.next()).done)&&(r.push(s.value),!(n&&r.length===n));e=!0);}catch(f){a=!0,i=f}finally{try{!e&&o.return!=null&&o.return()}finally{if(a)throw i}}return r}function tn(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var ut=function(){},at={},At={},nn=null,_t={mark:ut,measure:ut};try{typeof window<"u"&&(at=window),typeof document<"u"&&(At=document),typeof MutationObserver<"u"&&(nn=MutationObserver),typeof performance<"u"&&(_t=performance)}catch{}var en=at.navigator||{},dt=en.userAgent,mt=dt===void 0?"":dt,H=at,h=At,D=_t;H.document;var it=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function";~mt.indexOf("MSIE")||~mt.indexOf("Trident/");var P="___FONT_AWESOME___",Pt="fa",Et="svg-inline--fa",rn="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var G={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ct=H.FontAwesomeConfig||{};function an(t){var n=h.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function on(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var sn=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];sn.forEach(function(t){var n=It(t,2),r=n[0],e=n[1],a=on(an(r));a!=null&&(Ct[e]=a)})}var fn={familyPrefix:Pt,replacementClass:Et,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},K=u({},fn,Ct);K.autoReplaceSvg||(K.observeMutations=!1);var v=u({},K);H.FontAwesomeConfig=v;var E=H||{};E[P]||(E[P]={});E[P].styles||(E[P].styles={});E[P].hooks||(E[P].hooks={});E[P].shims||(E[P].shims=[]);var I=E[P],ln=[],cn=function t(){h.removeEventListener("DOMContentLoaded",t),Q=1,ln.map(function(n){return n()})},Q=!1;it&&(Q=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),Q||h.addEventListener("DOMContentLoaded",cn));var ot="pending",St="settled",F="fulfilled",W="rejected",un=function(){},zt=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",dn=typeof setImmediate>"u"?setTimeout:setImmediate,N=[],Z;function mn(){for(var t=0;t<N.length;t++)N[t][0](N[t][1]);N=[],Z=!1}function $(t,n){N.push([t,n]),Z||(Z=!0,dn(mn,0))}function pn(t,n){function r(a){st(n,a)}function e(a){L(n,a)}try{t(r,e)}catch(a){e(a)}}function Mt(t){var n=t.owner,r=n._state,e=n._data,a=t[r],i=t.then;if(typeof a=="function"){r=F;try{e=a(e)}catch(o){L(i,o)}}Tt(i,e)||(r===F&&st(i,e),r===W&&L(i,e))}function Tt(t,n){var r;try{if(t===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&(typeof n=="function"||j(n)==="object")){var e=n.then;if(typeof e=="function")return e.call(n,function(a){r||(r=!0,n===a?Nt(t,a):st(t,a))},function(a){r||(r=!0,L(t,a))}),!0}}catch(a){return r||L(t,a),!0}return!1}function st(t,n){(t===n||!Tt(t,n))&&Nt(t,n)}function Nt(t,n){t._state===ot&&(t._state=St,t._data=n,$(hn,t))}function L(t,n){t._state===ot&&(t._state=St,t._data=n,$(gn,t))}function jt(t){t._then=t._then.forEach(Mt)}function hn(t){t._state=F,jt(t)}function gn(t){t._state=W,jt(t),!t._handled&&zt&&global.process.emit("unhandledRejection",t._data,t)}function vn(t){global.process.emit("rejectionHandled",t)}function y(t){if(typeof t!="function")throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof y))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],pn(t,this)}y.prototype={constructor:y,_state:ot,_then:null,_data:void 0,_handled:!1,then:function(n,r){var e={owner:this,then:new this.constructor(un),fulfilled:n,rejected:r};return(r||n)&&!this._handled&&(this._handled=!0,this._state===W&&zt&&$(vn,this)),this._state===F||this._state===W?$(Mt,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}};y.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new y(function(n,r){var e=[],a=0;function i(f){return a++,function(c){e[f]=c,--a||n(e)}}for(var o=0,s;o<t.length;o++)s=t[o],s&&typeof s.then=="function"?s.then(i(o),r):e[o]=s;a||n(e)})};y.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new y(function(n,r){for(var e=0,a;e<t.length;e++)a=t[e],a&&typeof a.then=="function"?a.then(n,r):n(a)})};y.resolve=function(t){return t&&j(t)==="object"&&t.constructor===y?t:new y(function(n){n(t)})};y.reject=function(t){return new y(function(n,r){r(t)})};var M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bn(t){if(!(!t||!it)){var n=h.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var r=h.head.childNodes,e=null,a=r.length-1;a>-1;a--){var i=r[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return h.head.insertBefore(n,e),t}}var yn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U(){for(var t=12,n="";t-- >0;)n+=yn[Math.random()*62|0];return n}function Lt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wn(t){return Object.keys(t||{}).reduce(function(n,r){return n+"".concat(r,'="').concat(Lt(t[r]),'" ')},"").trim()}function Rt(t){return Object.keys(t||{}).reduce(function(n,r){return n+"".concat(r,": ").concat(t[r],";")},"")}function Dt(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function Ft(t){var n=t.transform,r=t.containerWidth,e=t.iconWidth,a={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:f,path:c}}var q={x:0,y:0,width:"100%",height:"100%"};function pt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function xn(t){return t.tag==="g"?t.children:[t]}function kn(t){var n=t.children,r=t.attributes,e=t.main,a=t.mask,i=t.maskId,o=t.transform,s=e.width,f=e.icon,c=a.width,d=a.icon,p=Ft({transform:o,containerWidth:c,iconWidth:s}),w={tag:"rect",attributes:u({},q,{fill:"white"})},x=f.children?{children:f.children.map(pt)}:{},k={tag:"g",attributes:u({},p.inner),children:[pt(u({tag:f.tag,attributes:u({},f.attributes,p.path)},x))]},b={tag:"g",attributes:u({},p.outer),children:[k]},m="mask-".concat(i||U()),g="clip-".concat(i||U()),O={tag:"mask",attributes:u({},q,{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,b]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:xn(d)},O]};return n.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(m,")")},q)}),{children:n,attributes:r}}function On(t){var n=t.children,r=t.attributes,e=t.main,a=t.transform,i=t.styles,o=Rt(i);if(o.length>0&&(r.style=o),Dt(a)){var s=Ft({transform:a,containerWidth:e.width,iconWidth:e.width});n.push({tag:"g",attributes:u({},s.outer),children:[{tag:"g",attributes:u({},s.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u({},e.icon.attributes,s.path)}]}]})}else n.push(e.icon);return{children:n,attributes:r}}function In(t){var n=t.children,r=t.main,e=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(Dt(o)&&r.found&&!e.found){var s=r.width,f=r.height,c={x:s/f/2,y:.5};a.style=Rt(u({},i,{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:n}]}function An(t){var n=t.prefix,r=t.iconName,e=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(v.familyPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u({},a,{id:o}),children:e}]}]}function _n(t){var n=t.icons,r=n.main,e=n.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,d=t.titleId,p=t.extra,w=t.watchable,x=w===void 0?!1:w,k=e.found?e:r,b=k.width,m=k.height,g=a==="fak",O=g?"":"fa-w-".concat(Math.ceil(b/m*16)),A=[v.replacementClass,i?"".concat(v.familyPrefix,"-").concat(i):"",O].filter(function(R){return p.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(p.classes).join(" "),_={children:[],attributes:u({},p.attributes,{"data-prefix":a,"data-icon":i,class:A,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(m)})},C=g&&!~p.classes.indexOf("fa-fw")?{width:"".concat(b/m*16*.0625,"em")}:{};x&&(_.attributes[rn]=""),f&&_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(d||U())},children:[f]});var S=u({},_,{prefix:a,iconName:i,main:r,mask:e,maskId:c,transform:o,symbol:s,styles:u({},C,p.styles)}),lt=e.found&&r.found?kn(S):On(S),Gt=lt.children,qt=lt.attributes;return S.children=Gt,S.attributes=qt,s?An(S):In(S)}var ht=function(){};v.measurePerformance&&D&&D.mark&&D.measure;var Pn=function(n,r){return function(e,a,i,o){return n.call(r,e,a,i,o)}},V=function(n,r,e,a){var i=Object.keys(n),o=i.length,s=a!==void 0?Pn(r,a):r,f,c,d;for(e===void 0?(f=1,d=n[i[0]]):(f=0,d=e);f<o;f++)c=i[f],d=s(d,n[c],c,n);return d};function Wt(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,a=e===void 0?!1:e,i=Object.keys(n).reduce(function(o,s){var f=n[s],c=!!f.icon;return c?o[f.iconName]=f.icon:o[s]=f,o},{});typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,i):I.styles[t]=u({},I.styles[t]||{},i),t==="fas"&&Wt("fa",n)}var gt=I.styles,En=I.shims,$t=function(){var n=function(a){return V(gt,function(i,o,s){return i[s]=V(o,a,{}),i},{})};n(function(e,a,i){return a[3]&&(e[a[3]]=i),e}),n(function(e,a,i){var o=a[2];return e[i]=i,o.forEach(function(s){e[s]=i}),e});var r="far"in gt;V(En,function(e,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!r&&(o="fas"),e[i]={prefix:o,iconName:s},e},{})};$t();I.styles;function vt(t,n,r){if(t&&t[n]&&t[n][r])return{prefix:n,iconName:r,icon:t[n][r]}}function Ut(t){var n=t.tag,r=t.attributes,e=r===void 0?{}:r,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Lt(t):"<".concat(n," ").concat(wn(e),">").concat(i.map(Ut).join(""),"</").concat(n,">")}var Cn=function(n){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce(function(e,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},r):r};function tt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}tt.prototype=Object.create(Error.prototype);tt.prototype.constructor=tt;var X={fill:"currentColor"},Yt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};u({},X,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var ft=u({},Yt,{attributeName:"opacity"});u({},X,{cx:"256",cy:"364",r:"28"}),u({},Yt,{attributeName:"r",values:"28;14;28;28;14;28;"}),u({},ft,{values:"1;0;1;1;0;1;"});u({},X,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),u({},ft,{values:"1;0;0;0;0;1;"});u({},X,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),u({},ft,{values:"0;0;1;1;0;0;"});I.styles;function bt(t){var n=t[0],r=t[1],e=t.slice(4),a=It(e,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.familyPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:r,icon:o}}I.styles;var Sn=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function zn(){var t=Pt,n=Et,r=v.familyPrefix,e=v.replacementClass,a=Sn;if(r!==t||e!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");a=a.replace(i,".".concat(r,"-")).replace(o,"--".concat(r,"-")).replace(s,".".concat(e))}return a}var Mn=function(){function t(){Vt(this,t),this.definitions={}}return Jt(t,[{key:"add",value:function(){for(var r=this,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){r.definitions[s]=u({},r.definitions[s]||{},o[s]),Wt(s,o[s]),$t()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var a=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,f=o.iconName,c=o.icon;r[s]||(r[s]={}),r[s][f]=c}),r}}]),t}();function Tn(){v.autoAddCss&&!wt&&(bn(zn()),wt=!0)}function Nn(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return Ut(e)})}}),Object.defineProperty(t,"node",{get:function(){if(!!it){var e=h.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function yt(t){var n=t.prefix,r=n===void 0?"fa":n,e=t.iconName;if(!!e)return vt(Ln.definitions,r,e)||vt(I.styles,r,e)}function jn(t){return function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:yt(n||{}),a=r.mask;return a&&(a=(a||{}).icon?a:yt(a||{})),t(e,u({},r,{mask:a}))}}var Ln=new Mn,wt=!1,nt={transform:function(n){return Cn(n)}},Rn=jn(function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,e=r===void 0?M:r,a=n.symbol,i=a===void 0?!1:a,o=n.mask,s=o===void 0?null:o,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,w=n.titleId,x=w===void 0?null:w,k=n.classes,b=k===void 0?[]:k,m=n.attributes,g=m===void 0?{}:m,O=n.styles,A=O===void 0?{}:O;if(!!t){var _=t.prefix,C=t.iconName,S=t.icon;return Nn(u({type:"icon"},t),function(){return Tn(),v.autoA11y&&(p?g["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(x||U()):(g["aria-hidden"]="true",g.focusable="false")),_n({icons:{main:bt(S),mask:s?bt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:C,transform:u({},M,e),symbol:i,title:p,maskId:c,titleId:x,extra:{attributes:g,styles:A,classes:b}})})}});function xt(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,e)}return r}function z(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?xt(Object(r),!0).forEach(function(e){T(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):xt(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function Y(t){return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Y(t)}function T(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function Dn(t,n){if(t==null)return{};var r={},e=Object.keys(t),a,i;for(i=0;i<e.length;i++)a=e[i],!(n.indexOf(a)>=0)&&(r[a]=t[a]);return r}function Fn(t,n){if(t==null)return{};var r=Dn(t,n),e,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],!(n.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,e)||(r[e]=t[e]))}return r}function et(t){return Wn(t)||$n(t)||Un(t)||Yn()}function Wn(t){if(Array.isArray(t))return rt(t)}function $n(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Un(t,n){if(!!t){if(typeof t=="string")return rt(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return rt(t,n)}}function rt(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function Yn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hn(t){var n,r=t.beat,e=t.fade,a=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,d=t.spinReverse,p=t.pulse,w=t.fixedWidth,x=t.inverse,k=t.border,b=t.listItem,m=t.flip,g=t.size,O=t.rotation,A=t.pull,_=(n={"fa-beat":r,"fa-fade":e,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":w,"fa-inverse":x,"fa-border":k,"fa-li":b,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},T(n,"fa-".concat(g),typeof g<"u"&&g!==null),T(n,"fa-rotate-".concat(O),typeof O<"u"&&O!==null&&O!==0),T(n,"fa-pull-".concat(A),typeof A<"u"&&A!==null),T(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(_).map(function(C){return _[C]?C:null}).filter(function(C){return C})}function Xn(t){return t=t-0,t===t}function Ht(t){return Xn(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,r){return r?r.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Bn=["style"];function Gn(t){return t.charAt(0).toUpperCase()+t.slice(1)}function qn(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,r){var e=r.indexOf(":"),a=Ht(r.slice(0,e)),i=r.slice(e+1).trim();return a.startsWith("webkit")?n[Gn(a)]=i:n[a]=i,n},{})}function Xt(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var e=(n.children||[]).map(function(f){return Xt(t,f)}),a=Object.keys(n.attributes||{}).reduce(function(f,c){var d=n.attributes[c];switch(c){case"class":f.attrs.className=d,delete n.attributes.class;break;case"style":f.attrs.style=qn(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=d:f.attrs[Ht(c)]=d}return f},{attrs:{}}),i=r.style,o=i===void 0?{}:i,s=Fn(r,Bn);return a.attrs.style=z(z({},a.attrs.style),o),t.apply(void 0,[n.tag,z(z({},a.attrs),s)].concat(et(e)))}var Bt=!1;try{Bt=!0}catch{}function Vn(){if(!Bt&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function kt(t){if(t&&Y(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(nt.icon)return nt.icon(t);if(t===null)return null;if(t&&Y(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function J(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?T({},t,n):{}}var B=Ot.forwardRef(function(t,n){var r=t.icon,e=t.mask,a=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,c=kt(r),d=J("classes",[].concat(et(Hn(t)),et(i.split(" ")))),p=J("transform",typeof t.transform=="string"?nt.transform(t.transform):t.transform),w=J("mask",kt(e)),x=Rn(c,z(z(z(z({},d),p),w),{},{symbol:a,title:o,titleId:s,maskId:f}));if(!x)return Vn("Could not find icon",c),null;var k=x.abstract,b={ref:n};return Object.keys(t).forEach(function(m){B.defaultProps.hasOwnProperty(m)||(b[m]=t[m])}),Jn(k[0],b)});B.displayName="FontAwesomeIcon";B.propTypes={beat:l.exports.bool,border:l.exports.bool,beatFade:l.exports.bool,bounce:l.exports.bool,className:l.exports.string,fade:l.exports.bool,flash:l.exports.bool,mask:l.exports.oneOfType([l.exports.object,l.exports.array,l.exports.string]),maskId:l.exports.string,fixedWidth:l.exports.bool,inverse:l.exports.bool,flip:l.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:l.exports.oneOfType([l.exports.object,l.exports.array,l.exports.string]),listItem:l.exports.bool,pull:l.exports.oneOf(["right","left"]),pulse:l.exports.bool,rotation:l.exports.oneOf([0,90,180,270]),shake:l.exports.bool,size:l.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l.exports.bool,spinPulse:l.exports.bool,spinReverse:l.exports.bool,symbol:l.exports.oneOfType([l.exports.bool,l.exports.string]),title:l.exports.string,titleId:l.exports.string,transform:l.exports.oneOfType([l.exports.string,l.exports.object]),swapOpacity:l.exports.bool};B.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Jn=Xt.bind(null,Ot.createElement);export{B as F};
