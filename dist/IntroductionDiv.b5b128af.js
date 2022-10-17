import{r}from"./chunks/index.2b326f7a.js";import{C as U,H as Z,S as G}from"./chunks/Welcome.5256e9d1.js";import{F as A}from"./chunks/index.es.6a8a3409.js";/* empty css                              */import{j as i}from"./chunks/jsx-runtime.89dffe07.js";import{u as k,_ as j,s as X,a as z,b as D,c as W,P as Y,L as q,d as J,e as B,f as Q,g as $,h as _,i as ee,m as C}from"./chunks/motion.165d38ba.js";import"./chunks/client.58dd3da9.js";import"./chunks/index.95f87dd5.js";import"./chunks/index.2a86e40d.js";function F(){var e=r.exports.useRef(!1);return k(function(){return e.current=!0,function(){e.current=!1}},[]),e}function te(){var e=F(),n=j(r.exports.useState(0),2),o=n[0],s=n[1],t=r.exports.useCallback(function(){e.current&&s(o+1)},[o]),a=r.exports.useCallback(function(){return X.postRender(t)},[t]);return[a,o]}var I=function(e){var n=e.children,o=e.initial,s=e.isPresent,t=e.onExitComplete,a=e.custom,f=e.presenceAffectsLayout,c=z(re),y=D(),b=r.exports.useMemo(function(){return{id:y,initial:o,isPresent:s,custom:a,onExitComplete:function(x){var m,E;c.set(x,!0);try{for(var d=W(c.values()),u=d.next();!u.done;u=d.next()){var p=u.value;if(!p)return}}catch(v){m={error:v}}finally{try{u&&!u.done&&(E=d.return)&&E.call(d)}finally{if(m)throw m.error}}t?.()},register:function(x){return c.set(x,!1),function(){return c.delete(x)}}}},f?void 0:[s]);return r.exports.useMemo(function(){c.forEach(function(x,m){return c.set(m,!1)})},[s]),r.exports.useEffect(function(){!s&&!c.size&&t?.()},[s]),r.exports.createElement(Y.Provider,{value:b},n)};function re(){return new Map}var h=function(e){return e.key||""};function ne(e,n){e.forEach(function(o){var s=h(o);n.set(s,o)})}function oe(e){var n=[];return r.exports.Children.forEach(e,function(o){r.exports.isValidElement(o)&&n.push(o)}),n}var se=function(e){var n=e.children,o=e.custom,s=e.initial,t=s===void 0?!0:s,a=e.onExitComplete,f=e.exitBeforeEnter,c=e.presenceAffectsLayout,y=c===void 0?!0:c,b=j(te(),1),x=b[0],m=r.exports.useContext(q).forceRender;m&&(x=m);var E=F(),d=oe(n),u=d,p=new Set,v=r.exports.useRef(u),w=r.exports.useRef(new Map).current,M=r.exports.useRef(!0);if(k(function(){M.current=!1,ne(d,w),v.current=u}),J(function(){M.current=!0,w.clear(),p.clear()}),M.current)return r.exports.createElement(r.exports.Fragment,null,u.map(function(l){return r.exports.createElement(I,{key:h(l),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:y},l)}));u=B([],j(u),!1);for(var P=v.current.map(h),R=d.map(h),O=P.length,S=0;S<O;S++){var N=P[S];R.indexOf(N)===-1&&p.add(N)}return f&&p.size&&(u=[]),p.forEach(function(l){if(R.indexOf(l)===-1){var g=w.get(l);if(!!g){var V=P.indexOf(l),H=function(){w.delete(l),p.delete(l);var T=v.current.findIndex(function(K){return K.key===l});if(v.current.splice(T,1),!p.size){if(v.current=d,E.current===!1)return;x(),a&&a()}};u.splice(V,0,r.exports.createElement(I,{key:h(g),isPresent:!1,onExitComplete:H,custom:o,presenceAffectsLayout:y},g))}}}),u=u.map(function(l){var g=l.key;return p.has(g)?l:r.exports.createElement(I,{key:h(l),isPresent:!0,presenceAffectsLayout:y},l)}),Q!=="production"&&f&&u.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),r.exports.createElement(r.exports.Fragment,null,p.size?u:u.map(function(l){return r.exports.cloneElement(l)}))};function ie(){var e=!1,n=[],o=new Set,s={subscribe:function(t){return o.add(t),function(){return void o.delete(t)}},start:function(t,a){if(e){var f=[];return o.forEach(function(c){f.push(ee(c,t,{transitionOverride:a}))}),Promise.all(f)}else return new Promise(function(c){n.push({animation:[t,a],resolve:c})})},set:function(t){return o.forEach(function(a){$(a,t)})},stop:function(){o.forEach(function(t){_(t)})},mount:function(){return e=!0,n.forEach(function(t){var a=t.animation,f=t.resolve;s.start.apply(s,B([],j(a),!1)).then(f)}),function(){e=!1,s.stop()}}};return s}function L(){var e=z(ie);return r.exports.useEffect(e.mount,[]),e}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var ae={prefix:"fas",iconName:"play",icon:[448,512,[],"f04b","M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"]},ue={prefix:"fas",iconName:"stop",icon:[448,512,[],"f04d","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"]};const ce="/yoda-pointing.png";function le(e){return i.exports.jsx("section",{className:"star-wars",children:i.exports.jsx(C.div,{animate:e.startScroll,className:"crawl",initial:{y:"-100px",translateZ:"0px",rotateX:"20deg"},children:i.exports.jsxs(C.div,{className:"flex flex-col",children:[i.exports.jsx("div",{className:"h-8"}),e.text.split(`
`).map(n=>n==""?i.exports.jsx("div",{className:"h-48"}):i.exports.jsx("p",{className:"justify-center",children:n},n))]})})})}const Ce=()=>{const e=L(),n=L(),[o,s]=r.exports.useState("start"),[t,a]=r.exports.useState("white"),f=`Hi, my name is Minh Bui
	I'm currently a student studying 
	Computer Engineering at UCSB
	Some of my hobbies include
	coding, gaming, and playing 
	sports with my friends.

	I also enjoy scifi movies 
	(such as Star Wars very much)
	because I think that they are
	an excellent catalyst for growth
	of imagination.

	I chose Computer Engineering
	because of my love for 
	robotics, and both the hardware and
	software side that it
	includes.

	I endeavor to be a great 
	engineer that will leave impressionable 
	results that will inspire the 
	young generation, as I 
	was inspired when I was younger.

	Note: Because the nature of the
	framer-motion framework, and since
	I created this effect in almost
	vanilla CSS, you need to 
	reload the page in order to reset the text
	to the original position
	`,c=r.exports.useRef(null);return i.exports.jsx(se,{children:i.exports.jsx(C.div,{className:"introduction flex flex-col h-screen transform-gpu",ref:c,children:i.exports.jsxs(U,{shadows:!0,camera:{position:[0,0,5],fov:70},children:[i.exports.jsx("ambientLight",{intensity:1}),i.exports.jsxs(r.exports.Suspense,{fallback:null,children:[i.exports.jsxs(Z,{fullscreen:!0,children:[i.exports.jsxs("div",{className:"fade flex flex-col",children:[i.exports.jsx("div",{className:"relative m-2 top-24 z-10 h-16 w-16",children:o=="start"?i.exports.jsx(A,{size:"3x",className:"icons",icon:ae,color:t,onMouseOver:()=>a("#feda4a"),onMouseOut:()=>a("white"),onClick:()=>{s("stop"),n.start({opacity:0,transition:{duration:2}}),e.start({y:"-18000px",translateZ:"-7000px",rotateX:"25deg",transition:{ease:"linear",duration:60}})}}):i.exports.jsx(A,{size:"3x",className:"icons",onMouseOver:()=>a("#feda4a"),onMouseOut:()=>a("white"),icon:ue,color:t,onClick:()=>{s("start"),e.stop()}})}),i.exports.jsx(C.div,{animate:n,initial:{x:100,y:10,rotateZ:"-45deg"},className:"h-16 w-16",children:i.exports.jsx(C.img,{initial:{scale:1.5},src:ce})})]}),i.exports.jsx(le,{startScroll:e,text:f})]}),i.exports.jsx(G,{position:[0,-5,0]})]})]})})})};export{Ce as default};
