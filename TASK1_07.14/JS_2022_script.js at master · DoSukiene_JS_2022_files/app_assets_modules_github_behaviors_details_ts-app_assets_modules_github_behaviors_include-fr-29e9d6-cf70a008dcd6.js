"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_behaviors_include-fr-29e9d6"],{70763(a,b,c){c.d(b,{O4:()=>m,jo:()=>l,Qp:()=>k});var d=c(81574),e=c(59753);let f="ontransitionend"in window;function g(a){return"height"===getComputedStyle(a).transitionProperty}function h(a,b){a.style.transition="none",b(),a.offsetHeight,a.style.transition=""}var i=c(96776);function j(a,b){var c;for(let d of(a.classList.toggle("open",b),a.classList.toggle("Details--on",b),[...(c=a).querySelectorAll(".js-details-target")].filter(a=>a.closest(".js-details-container")===c)))d.setAttribute("aria-expanded",b.toString())}function k(a,b){let c=a.getAttribute("data-details-container")||".js-details-container",d=a.closest(c),e=b?.force?? !d.classList.contains("open"),k=b?.withGroup?? !1;!function(a,b){if(!f){b();return}let c=Array.from(a.querySelectorAll(".js-transitionable"));for(let d of(a.classList.contains("js-transitionable")&&c.push(a),c)){let e=g(d);d instanceof HTMLElement&&(d.addEventListener("transitionend",()=>{d.style.display="",d.style.visibility="",e&&h(d,function(){d.style.height=""})},{once:!0}),d.style.boxSizing="content-box",d.style.display="block",d.style.visibility="visible",e&&h(d,function(){d.style.height=getComputedStyle(d).height}),d.offsetHeight)}for(let i of(b(),c))if(i instanceof HTMLElement&&g(i)){let j=getComputedStyle(i).height;i.style.boxSizing="","0px"===j?i.style.height=`${i.scrollHeight}px`:i.style.height="0px"}}(d,()=>{j(d,e);let b=k?function(a,b){let c=a.getAttribute("data-details-container-group");return c?((0,i.uQ)(a,()=>{var d;for(let e of(d=c,[...document.querySelectorAll(".js-details-container")].filter(a=>a.getAttribute("data-details-container-group")===d)))e!==a&&j(e,b)}),c):null}(d,e):null;Promise.resolve().then(()=>{var c,f;(function(a,b){b.find(b=>{let c=a.querySelectorAll(b),d=c[c.length-1];if(d&&document.activeElement!==d)return d.focus(),!0})})(c=d,[".js-focus-on-dismiss","input[autofocus], textarea[autofocus]"]),(f=a).classList.contains("tooltipped")&&(f.classList.remove("tooltipped"),f.addEventListener("mouseleave",()=>{f.classList.add("tooltipped"),f.blur()},{once:!0})),d.dispatchEvent(new CustomEvent("details:toggled",{bubbles:!0,cancelable:!1,detail:{open:e}})),b&&d.dispatchEvent(new CustomEvent("details:toggled-group",{bubbles:!0,cancelable:!1,detail:{open:e,group:b}}))})})}function l(a){let b=a.getAttribute("data-details-container")||".js-details-container",c=a.closest(b),d=c.classList;return d.contains("Details--on")||d.contains("open")}function m(a){let b=!1,c=a.parentElement;for(;c;)c.classList.contains("Details-content--shown")&&(b=!0),c.classList.contains("js-details-container")&&(c.classList.toggle("open",!b),c.classList.toggle("Details--on",!b),b=!1),c=c.parentElement}(0,e.on)("click",".js-details-target",function(a){let b=a.altKey,c=a.currentTarget;k(c,{withGroup:b}),a.preventDefault()}),(0,d.Z)(function({target:a}){a&&m(a)})},20332(a,b,c){function d(){let a=!1,b=document.getElementById("start-of-content");if(b){let c=b.nextElementSibling;if(c instanceof HTMLElement)return(a="1"===c.getAttribute("data-skipped-to-content"))&&c.removeAttribute("data-skipped-to-content"),a}}c.d(b,{h:()=>d}),(0,c(59753).on)("click",".js-skip-to-content",function(a){let b=document.getElementById("start-of-content");if(b){let c=b.nextElementSibling;c instanceof HTMLElement&&(c.setAttribute("tabindex","-1"),c.setAttribute("data-skipped-to-content","1"),c.focus())}a.preventDefault()});let e="ontouchstart"in document;for(let f of document.querySelectorAll(".HeaderMenu-details"))f.addEventListener("toggle",h),e||(f.addEventListener("mouseover",i),f.addEventListener("mouseleave",i));let g=!1;function h(a){if(!g){for(let b of(g=!0,document.querySelectorAll(".HeaderMenu-details")))b!==a.currentTarget&&b.removeAttribute("open");setTimeout(()=>g=!1)}}function i(a){let{currentTarget:b}=a;b instanceof HTMLElement&&window.innerWidth>1012&&("mouseover"===a.type&&a instanceof MouseEvent?a.target instanceof Node&&a.relatedTarget instanceof Node&&b.contains(a.target)&&!b.contains(a.relatedTarget)&&b.setAttribute("open",""):b.removeAttribute("open"))}},52191(a,b,c){c.d(b,{"$":()=>k,G:()=>j});var d=c(76932),e=c(64463),f=c(59753);function g(a,b){let c=a.currentTarget;if(c instanceof Element){for(let d of c.querySelectorAll("[data-show-on-error]"))d instanceof HTMLElement&&(d.hidden=!b);for(let e of c.querySelectorAll("[data-hide-on-error]"))e instanceof HTMLElement&&(e.hidden=b)}}function h(a){g(a,!1)}function i(a){g(a,!0)}function j({currentTarget:a}){a instanceof Element&&k(a)}function k(a){let b=a.closest("details");b&&l(b)}function l(a){let b=a.getAttribute("data-deferred-details-content-url");if(b){a.removeAttribute("data-deferred-details-content-url");let c=a.querySelector("include-fragment, poll-include-fragment");c&&(c.src=b)}}(0,e.N7)("include-fragment, poll-include-fragment",{subscribe:a=>(0,d.qC)((0,d.RB)(a,"error",i),(0,d.RB)(a,"loadstart",h))}),(0,f.on)("click","include-fragment button[data-retry-button]",({currentTarget:a})=>{let b=a.closest("include-fragment"),c=b.src;b.src="",b.src=c})},35002(a,b,c){c.d(b,{O3:()=>j,SX:()=>g,"_g":()=>h,a8:()=>f,lB:()=>i});let d=0,e=new Set;function f(a){e.add(a)}function g(a){e.delete(a)}function h(){return d}function i(a){for(let b of(d=a,a?document.body.style.setProperty("--base-sticky-header-height",`${a}px`):document.body.style.removeProperty("--base-sticky-header-height"),e))b(a)}let j="var(--base-sticky-header-height, 0px)"},21935(a,b,c){c.d(b,{H:()=>m});var d=c(20332),e=c(80721),f=c(64463),g=c(35002);let h=!1,i=[];function j(){i.length?k():l()}function k(){h||(window.addEventListener("resize",n),document.addEventListener("scroll",n),h=!0)}function l(){window.removeEventListener("resize",n),document.removeEventListener("scroll",n),h=!1}function m(){o(!0)}function n(){o()}function o(a=!1){for(let b of i)if(b.element.offsetHeight>0){let{element:c,placeholder:d,top:e}=b,f=c.getBoundingClientRect();if(d){let g=d.getBoundingClientRect();c.classList.contains("is-stuck")?g.top>x(c,e)?q(b):r(b):f.top<=x(c,e)?p(b):a&&r(b)}else{let h=.1;f.top-x(c,e)<h?p(b):q(b)}}}function p({element:a,placeholder:b,top:c}){if(b){let d=a.getBoundingClientRect();y(a,x(a,c)),a.style.left=`${d.left}px`,a.style.width=`${d.width}px`,a.style.marginTop="0",a.style.position="fixed",b.style.display="block"}a.classList.add("is-stuck")}function q({element:a,placeholder:b}){b&&(a.style.position="static",a.style.marginTop=b.style.marginTop,b.style.display="none"),a.classList.remove("is-stuck")}function r({element:a,placeholder:b,offsetParent:c,top:e}){if(b&&!(0,d.h)()){let f=a.getBoundingClientRect(),g=b.getBoundingClientRect();if(y(a,x(a,e)),a.style.left=`${g.left}px`,a.style.width=`${g.width}px`,c){let h=c.getBoundingClientRect();h.bottom<f.height+parseInt(String(e))&&(a.style.top=`${h.bottom-f.height}px`)}}}async function s(a){await e.C,function(a){let b=function(a){if(function(a){let{position:b}=window.getComputedStyle(a);return/sticky/.test(b)}(a))return null;let b=a.previousElementSibling;if(b&&b.classList.contains("is-placeholder"))return b;let c=document.createElement("div");return c.style.visibility="hidden",c.style.display="none",c.style.height=window.getComputedStyle(a).height,c.className=a.className,c.classList.remove("js-sticky"),c.classList.add("is-placeholder"),a.parentNode.insertBefore(c,a)}(a),c=window.getComputedStyle(a).position;a.style.position="static";let d=a.offsetParent;a.style.position="fixed";let e=w(a),f={element:a,placeholder:b,offsetParent:d,top:"auto"===e?0:parseInt(e||"0")};a.style.position=c,i.push(f)}(a),o(),j()}async function t(a){if(null===a.offsetParent)return;await e.C;let b=Math.floor(a.getBoundingClientRect().height);b>0&&((0,g.lB)(b),u(),m())}function u(){for(let a of document.querySelectorAll(".js-position-sticky, .js-notification-shelf-offset-top"))v(a)}function v(a){if(a.classList.contains("js-notification-top-shelf"))return;let b=parseInt(w(a))||0;y(a,b+(0,g._g)())}function w(a){let b=a.getAttribute("data-original-top");if(null!=b)return b;let c=window.getComputedStyle(a).top;return a.setAttribute("data-original-top",c),c}function x(a,b){return a.classList.contains("js-notification-top-shelf")?b:b+(0,g._g)()}function y(a,b){a.style.setProperty("top",`${b}px`,"important")}(0,f.N7)(".js-sticky",{constructor:HTMLElement,add(a){a.isConnected&&s(a)},remove(a){(function(a){let b=i.map(a=>a.element).indexOf(a);i.splice(b,1)})(a),j()}}),(0,f.N7)(".js-notification-top-shelf",{constructor:HTMLElement,add(a){t(a)},remove(){(0,g._g)()>0&&((0,g.lB)(0),u(),m())}}),(0,f.N7)(".js-notification-shelf-offset-top, .js-position-sticky",{constructor:HTMLElement,add:v})},25811(a,b,c){c.d(b,{LS:()=>f,cl:()=>g,rV:()=>e});var d=c(86702);let{getItem:e,setItem:f,removeItem:g}=(0,d.Z)("sessionStorage")},55065(a,b,c){c.d(b,{"$g":()=>SoftNavSuccessEvent,OV:()=>SoftNavStartEvent,QW:()=>SoftNavErrorEvent,Xr:()=>SoftNavEndEvent});var d=c(45586);class SoftNavEvent extends Event{constructor(a,b){super(b),this.mechanism=a}}class SoftNavStartEvent extends SoftNavEvent{constructor(a){super(a,d.QE.START)}}class SoftNavSuccessEvent extends SoftNavEvent{constructor(a,b){super(a,d.QE.SUCCESS),this.visitCount=b}}class SoftNavErrorEvent extends SoftNavEvent{constructor(a,b){super(a,d.QE.ERROR),this.error=b}}class SoftNavEndEvent extends SoftNavEvent{constructor(a){super(a,d.QE.END)}}},45586(a,b,c){c.d(b,{jN:()=>j,QE:()=>i,R6:()=>t,FP:()=>p,r_:()=>o,Yl:()=>l,TL:()=>q,dw:()=>s,LD:()=>m,BT:()=>n,u5:()=>r});var d=c(55065),e=c(34855),f=c(58843);let g="stats:soft-nav-duration",h={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME"},i=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),j="reload",k=0;function l(){k=0,document.dispatchEvent(new Event(i.INITIAL)),(0,f.XL)()}function m(a){(0,f.sj)()||(document.dispatchEvent(new d.OV(a)),(0,f.U6)(a),(0,f.J$)(),(0,f.Nt)(),performance.mark(g))}function n(a={}){u(a)&&(k+=1,document.dispatchEvent(new d.$g((0,f.Gj)(),k)),p(a))}function o(a={}){var b;if(!u(a))return;k=0;let c=(0,f.Wl)()||j;document.dispatchEvent(new d.QW((0,f.Gj)(),c)),b=c,(0,e.b)({turboFailureReason:b,turboStartUrl:(0,f.wP)(),turboEndUrl:window.location.href}),(0,f.XL)(),p(a)}function p(a={}){u(a)&&(document.dispatchEvent(new d.Xr((0,f.Gj)())),(0,f.pS)())}function q(a={}){u(a)&&(!function(){let a=function(){if(0===performance.getEntriesByName(g).length)return null;performance.measure(g,g);let a=performance.getEntriesByName(g),b=a.pop();return b?b.duration:null}();a&&(0,e.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:h[(0,f.Gj)()],destination:(0,f.Nb)()||"rails",duration:Math.round(a),initiator:(0,f.CI)()||"rails"}})}(),document.dispatchEvent(new Event(i.RENDER)))}function r(){document.dispatchEvent(new Event(i.FRAME_UPDATE))}function s(){document.dispatchEvent(new Event(i.PROGRESS_BAR.START))}function t(){document.dispatchEvent(new Event(i.PROGRESS_BAR.END))}function u({skipIfGoingToReactApp:a,allowedMechanisms:b=[]}={}){return(0,f.sj)()&&(0===b.length||b.includes((0,f.Gj)()))&&(!a||!(0,f.Nb)())}},58843(a,b,c){c.d(b,{Ak:()=>r,CI:()=>v,Gj:()=>o,"J$":()=>u,Nb:()=>w,Nt:()=>s,OE:()=>p,U6:()=>l,Wl:()=>q,XL:()=>k,pS:()=>m,sj:()=>n,wP:()=>t});var d=c(25811),e=c(45586);let f="soft-nav:fail",g="soft-nav:fail-referrer",h="soft-nav:referrer",i="soft-nav:marker",j="soft-nav:react-app-name";function k(){(0,d.LS)(i,"0"),(0,d.cl)(h),(0,d.cl)(f),(0,d.cl)(g),(0,d.cl)(j)}function l(a){(0,d.LS)(i,a)}function m(){(0,d.LS)(i,"0")}function n(){let a=(0,d.rV)(i);return a&&"0"!==a}function o(){return(0,d.rV)(i)}function p(){return Boolean(q())}function q(){return(0,d.rV)(f)}function r(a){(0,d.LS)(f,a||e.jN),(0,d.LS)(g,window.location.href)}function s(){(0,d.LS)(h,window.location.href)}function t(){return(0,d.rV)(h)||document.referrer}function u(){let a=w();a?(0,d.LS)(j,a):(0,d.cl)(j)}function v(){return(0,d.rV)(j)}function w(){return document.querySelector("react-app")?.getAttribute("app-name")}},3126(a,b,c){c.d(b,{kc:()=>g,lA:()=>h,zT:()=>f});var d=c(87098),e=c(21935);function f(a){if(a.hasAttribute("data-ignore-sticky-scroll"))return;let b=a.ownerDocument;setTimeout(()=>{b&&b.defaultView&&(a.scrollIntoView(),b.defaultView.scrollBy(0,-h(b)))},0)}function g(a){let b=(0,d.Kt)(a);b&&f(b)}function h(a){(0,e.H)();let b=a.querySelectorAll(".js-sticky-offset-scroll"),c=a.querySelectorAll(".js-position-sticky"),d=Math.max(0,...Array.from(b).map(a=>{let{top:b,height:c}=a.getBoundingClientRect();return 0===b?c:0}))+Math.max(0,...Array.from(c).map(a=>{let{top:b,height:c}=a.getBoundingClientRect(),d=parseInt(getComputedStyle(a).top);if(!a.parentElement)return 0;let e=a.parentElement.getBoundingClientRect().top;return b===d&&e<0?c:0})),f=a.querySelectorAll(".js-position-sticky-stacked"),g=Array.from(f).reduce((a,b)=>{let{height:c,top:d}=b.getBoundingClientRect(),e=b.classList.contains("is-stuck");return a+(!(d<0)&&e?c:0)},0);return d+g}},22971(a,b,c){c.d(b,{H5:()=>k,Of:()=>n,x0:()=>m,z8:()=>l});var d=c(64611),e=c(64463),f=c(75662),g=c(96776),h=c(9302);let i=new WeakMap,j={};function k(){for(let a of Object.keys(j))delete j[a];let b=history.state||{};b.staleRecords=j,(0,h.lO)(b,"",location.href),window.location.reload()}function l(){if(Object.keys(j).length>0){let a=history.state||{};a.staleRecords=j,(0,h.lO)(a,"",location.href)}}async function m(a){if(i.get(a))return;let b=a.hasAttribute("data-retain-focus"),c=a.getAttribute("data-url");if(!c)throw Error("could not get url");let e=new AbortController;i.set(a,e);try{let f=await fetch(c,{signal:e.signal,headers:{Accept:"text/html","X-Requested-With":"XMLHttpRequest"}});if(!f.ok)return;let g=await f.text();if((0,d.M)(a,b)){console.warn("Failed to update content with interactions",a);return}return j[c]=g,o(a,g,b)}catch{}finally{i.delete(a)}}async function n(a,b,c=!1){let d=i.get(a);d?.abort();let e=a.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");return!c&&e&&e===a&&(j[e.getAttribute("data-url")||""]=b),o(a,b)}function o(a,b,c=!1){return(0,g._8)(document,()=>{let d=(0,f.r)(document,b.trim()),e=c&&a.ownerDocument&&a===a.ownerDocument.activeElement?d.querySelector("*"):null,g=Array.from(a.querySelectorAll("details[open][id]")).map(a=>a.id);for(let h of("DETAILS"===a.tagName&&a.id&&a.hasAttribute("open")&&g.push(a.id),a.querySelectorAll(".js-updatable-content-preserve-scroll-position"))){let i=h.getAttribute("data-updatable-content-scroll-position-id")||"";p.set(i,h.scrollTop)}for(let j of g){let k=d.querySelector(`#${j}`);k&&k.setAttribute("open","")}a.replaceWith(d),e instanceof HTMLElement&&e.focus()})}let p=new Map;(0,e.N7)(".js-updatable-content-preserve-scroll-position",{constructor:HTMLElement,add(a){let b=a.getAttribute("data-updatable-content-scroll-position-id");if(!b)return;let c=p.get(b);null!=c&&(a.scrollTop=c)}})}}])
//# sourceMappingURL=app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_behaviors_include-fr-29e9d6-6b514456bc4d.js.map