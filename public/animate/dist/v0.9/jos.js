!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";!function(t,s){void 0===s&&(s={});var o=s.insertAt;if(t&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===o&&a.firstChild?a.insertBefore(e,a.firstChild):a.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}}(".jos{display:block}.jos,.jos-anchor{transition:all .4s ease-in-out}.jos-anchor{opacity:0;transition-timing-function:ease-in-out}.jos-static{opacity:1;transform:translate(0)}.jos-no-transition{transition-duration:0s;transition-timing-function:linear}.jos-fade,.jos-stagger-fade *{opacity:0}.jos-fade-right{opacity:0;transform:translateX(-100px)}.jos-fade-left{opacity:0;transform:translateX(100px)}.jos-fade-up{opacity:0;transform:translateY(50px)}.jos-fade-down{opacity:0;transform:translateY(-50px)}.jos-fade-right-up{opacity:0;transform:translateX(-100px) translateY(50px)}.jos-fade-right-down{opacity:0;transform:translateX(-100px) translateY(-50px)}.jos-fade-left-up{opacity:0;transform:translateX(100px) translateY(50px)}.jos-fade-left-down{opacity:0;transform:translateX(100px) translateY(-50px)}.jos-slide,.jos-slide-right{transform:translateX(-100px)}.jos-slide-left{transform:translateX(100px)}.jos-slide-up{transform:translateY(100px)}.jos-slide-down{transform:translateY(-100px)}.jos-slide-right-up{transform:translateX(-100px) translateY(100px)}.jos-slide-right-down{transform:translateX(-100px) translateY(-100px)}.jos-slide-left-up{transform:translateX(100px) translateY(100px)}.jos-slide-left-down{transform:translateX(100px) translateY(-100px)}.jos-zoom,.jos-zoom-out{opacity:0;transform:scale(.8)}.jos-zoom-out-right,.jos-zoom-right{opacity:0;transform:scale(.8) translate3d(-100px,0,-100px)}.jos-zoom-left,.jos-zoom-out-left{opacity:0;transform:scale(.8) translate3d(100px,0,-100px)}.jos-zoom-down,.jos-zoom-out-down{opacity:0;transform:scale(.8) translate3d(0,-100px,0)}.jos-zoom-out-up,.jos-zoom-up{opacity:0;transform:scale(.8) translate3d(0,100px,0)}.jos-grow{transform:scale(0)}.jos-grow-right{transform:scale(0) translate3d(-100px,0,-100px)}.jos-grow-left{transform:scale(0) translate3d(100px,0,-100px)}.jos-grow-down{transform:scale(0) translate3d(0,-100px,0)}.jos-grow-up{transform:scale(0) translate3d(0,100px,0)}.jos-zoom-in{opacity:0;transform:scale(1.1)}.jos-zoom-in-down{opacity:0;transform:scale(1.1) translate3d(0,-100px,0)}.jos-zoom-in-up{opacity:0;transform:scale(1.1) translate3d(0,100px,0)}.jos-zoom-in-right{opacity:0;transform:scale(1.1) translate3d(-100px,0,-100px)}.jos-zoom-in-left{opacity:0;transform:scale(1.1) translate3d(100px,0,-100px)}.jos-shrink{transform:scale(1.4)}.jos-shrink-right{transform:scale(1.4) translate3d(-100px,0,-100px)}.jos-shrink-left{transform:scale(1.4) translate3d(100px,0,-100px)}.jos-shrink-down{transform:scale(1.4) translate3d(0,-100px,0)}.jos-shrink-up{transform:scale(1.4) translate3d(0,100px,0)}.jos-flip,.jos-flip-right{opacity:0;transform:perspective(2500px) rotateY(-100deg)}.jos-flip-left{opacity:0;transform:perspective(2500px) rotateY(100deg)}.jos-flip-up{opacity:0;transform:perspective(2500px) rotateX(-100deg)}.jos-flip-down{opacity:0;transform:perspective(2500px) rotateX(100deg)}.jos-rotate,.jos-rotate-right{opacity:0;transform:rotate(-180deg)}.jos-rotate-left{opacity:0;transform:rotate(180deg)}.jos-spin,.jos-spin-right{opacity:0;transform:rotate(-180deg) scale(0)}.jos-spin-left{opacity:0;transform:rotate(180deg) scale(0)}.jos-revolve,.jos-revolve-right{opacity:0;transform:rotate(-1turn) scale(0)}.jos-revolve-left{opacity:0;transform:rotate(1turn) scale(0)}.jos-stretch{opacity:0;transform:scaleX(0)}.jos-stretch-vertical{opacity:0;transform:scaleY(0)}[data-jos_timing_function=ease]{transition-timing-function:ease!important}[data-jos_timing_function=ease-in]{transition-timing-function:ease-in!important}[data-jos_timing_function=ease-out]{transition-timing-function:ease-out!important}[data-jos_timing_function=ease-in-out]{transition-timing-function:ease-in-out!important}[data-jos_timing_function=linear]{transition-timing-function:linear!important}[data-jos_timing_function=step-start]{transition-timing-function:step-start!important}[data-jos_timing_function=step-end]{transition-timing-function:step-end!important}[data-jos_timing_function=steps]{transition-timing-function:steps(5)!important}[data-jos_timing_function=frames]{transition-timing-function:frames(5)!important}.jos-slide-horizontal-play,.jos-slide-play{animation:jos-slide-play .7s ease-in-out infinite;animation-direction:alternate-reverse;transition:1s}@keyframes jos-slide-play{0%{transform:translateX(-100px)}to{transform:translateX(100px)}}.jos-slide-vertical-play{animation:jos-slide-vertical-play .7s ease-in-out infinite;animation-direction:alternate-reverse}@keyframes jos-slide-vertical-play{0%{transform:translateY(-100px)}to{transform:translateY(100px)}}.jos-pulse-play,.jos-zoom-in-play{animation:jos-zoom-in-play 1s infinite;animation-direction:alternate}@keyframes jos-zoom-in-play{0%{opacity:0;transform:scale(1)}to{opacity:1;transform:scale(.8)}}.jos-pulse-out-play,.jos-zoom-out-play,.jos-zoom-play{animation:jos-zoom-play .5s linear infinite;animation-direction:alternate}@keyframes jos-zoom-play{0%{opacity:0;transform:scale(1)}to{opacity:1;transform:scale(1.1)}}.jos-flip-play{animation:jos-flip-play .7s infinite;animation-direction:alternate}@keyframes jos-flip-play{0%{transform:rotateY(0deg)}to{transform:rotateY(180deg)}}.jos-rotate-play{animation:jos-rotate-play 1s linear infinite forwards;animation-direction:alternate-reverse;border-radius:0}@keyframes jos-rotate-play{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.jos-spin-play{animation:jos-spin-play 1.5s infinite;animation-direction:alternate}@keyframes jos-spin-play{0%{opacity:0;transform:rotate(0deg)}to{opacity:1;transform:rotate(1turn)}}.jos-revolve-play{animation:jos-revolve-play 1.5s infinite;animation-direction:alternate}@keyframes jos-revolve-play{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.jos-grow-play,.jos-shrink-play{animation:jos-grow-play 1s infinite;animation-direction:alternate}@keyframes jos-grow-play{0%{transform:scale(0)}to{transform:scale(1)}}.jos-shrink-play{animation-direction:alternate-reverse}.jos-stretch-play{animation:jos-stretch-play .7s infinite;animation-direction:alternate}@keyframes jos-stretch-play{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.jos-stretch-vertical-play{animation:jos-stretch-vertical-play .7s infinite;animation-direction:alternate-reverse}@keyframes jos-stretch-vertical-play{0%{transform:scaleY(1)}to{transform:scaleY(0)}}.jos-fade-play{animation:jos-fade-play .8s infinite;animation-direction:alternate}@keyframes jos-fade-play{0%{opacity:0}to{opacity:1}}.jos-fade-horizontal-play{animation:jos-fade-horizontal-play 1s infinite;animation-direction:alternate-reverse}@keyframes jos-fade-horizontal-play{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(-100px)}}.jos-fade-vertical-play{animation:jos-fade-vertical-play 1s infinite;animation-direction:alternate-reverse}@keyframes jos-fade-vertical-play{0%{opacity:0;transform:translateY(100px)}to{opacity:1;transform:translateY(-100px)}}.jos-blink-play{animation:jos-blink-play 1s step-end infinite}@keyframes jos-blink-play{0%{opacity:1}50%{opacity:0}}");class jos{default_once=!1;default_animation="fade";default_animationinverse=void 0;default_timingFunction="ease-in-out";default_threshold=0;default_duration=.4;default_delay=0;default_intersectionRatio=0;default_rootMargin="-10% 0% -40% 0%";default_startVisible=void 0;default_scrolldirection=void 0;default_passive=!0;default_mirror=void 0;setRange=new Set;debug=!1;scrollProgressDisable=void 0;disable=!1;static version="0.9.0";static author="Jesvi Jonathan";static github="https://github.com/jesvijonathan/JOS-Animation-Library";options={};jos_stylesheet=void 0;boxes=void 0;observers=[];scrollEnter=[];constructor(){}version(){console.log(`JOS: Javascript On Scroll Animation Library\n    - Version: ${jos.version}\n    - Author: ${jos.author}\n    - Github: ${jos.github}\n`)}debugger(t=0){0==t&&this.debugMode&&(this.version(),console.log(`JOS Settings:\n    - animation: ${this.default_animation}\n    - once: ${this.default_once}\n    - animationinverse: ${this.default_animationinverse}\n    - timingFunction: ${this.default_timingFunction}\n    - duration: ${this.default_duration}\n    - delay: ${this.default_delay}\n    - threshold: ${this.default_threshold}\n    - startVisible: ${this.default_startVisible}\n    - scrolldirection: ${this.default_scrolldirection}\n    - intersectionRatio: ${this.default_intersectionRatio}\n    - rootMargin: ${this.default_rootMargin}\n    - disable: ${this.disable}\n    - debugMode: ${this.debugMode}\n`)),console.log("JOS Initialized:\n\n"),1!=t&&0!=t||!this.debugMode||console.log(this.boxes||"No Elements Found")}callbackRouter_anchor=(t,s)=>{if(this.disable)return;let o=t[0],a=o.target;document.querySelectorAll("[data-jos_anchor='#"+a.id+"']").forEach((t=>{let a=t.dataset.jos_animation,e=t.dataset.jos_animationinverse;if(o.isIntersecting){if(null!=t.dataset.jos_counter){let s=parseInt(t.dataset.jos_counter);s++,t.dataset.jos_counter=s}a&&(t.classList.remove("jos-"+a),null!=t.dataset.jos_invoke&&window[t.dataset.jos_invoke](t),null==t.dataset.jos_once&&"false"==t.dataset.jos_once||("true"==t.dataset.jos_once||t.dataset.jos_counter>=t.dataset.jos_once)&&s.unobserve(t),null!=e&&t.classList.add("jos-"+e))}else void 0!==t.dataset.jos_scrolldirection&&"down"!==t.dataset.jos_scrolldirection&&"none"!==t.dataset.jos_scrolldirection||(t.classList.add("jos-"+a),void 0!==t.dataset.jos_invoke_out&&window[t.dataset.jos_invoke_out](t))}))};callbackScroller=t=>{if(this.disable||this.scrollProgressDisable)return;const s=this.default_rootMargin;let o=window.innerHeight;const a=t=>{const a=t.dataset.jos_rootmargin||s,e=a.split(" ").map(parseFloat),i=o*e[0]/100,n=o*e[2]/100;t.jos={rootMargin:a,rootMarginValues:e,topMargin:i,bottomMargin:n};const r=t.getBoundingClientRect(),l=r.top-t.jos.topMargin,d=r.bottom-t.jos.bottomMargin,c=r.top/o,f=l/(o-t.jos.topMargin-t.jos.bottomMargin);let m=0;m=f<0?0:f>100?1:f,t.jos={elementRect:r,elementTop:l,elementBottom:d,windowScrollProgress:c,rootScrollProgress:f,scrollProgress:m},window[t.dataset.jos_scroll](t)};document.onscroll=s=>{this.disable||this.scrollProgressDisable||t.forEach(a)}};callbackRouter=(t,s,o=1)=>{if(this.disable)return;let a=t[0],e=a.target,i=e.dataset.jos_animation,n=e.dataset.jos_animationinverse,r=1;if(r=a.boundingClientRect.top<0?0:1,a.isIntersecting){if("false"!=e.dataset.jos_scroll&&null!=e.dataset.jos_scroll&&(this.scrollEnter.push(e),this.callbackScroller(this.scrollEnter)),null!=e.dataset.jos_counter){let t=parseInt(e.dataset.jos_counter);t++,e.dataset.jos_counter=t}"false"==e.dataset.jos_mirror&&e.classList.remove("jos-no-mirror"),i&&(e.classList.remove("jos-"+i),null!=e.dataset.jos_invoke&&window[e.dataset.jos_invoke](e),null==e.dataset.jos_once&&"false"==e.dataset.jos_once||("true"==e.dataset.jos_once||e.dataset.jos_counter>=e.dataset.jos_once)&&s.unobserve(e)),null!=n&&e.classList.add("jos-"+n)}else(void 0===e.dataset.jos_scrolldirection||1===r&&"down"===e.dataset.jos_scrolldirection||0===r&&"up"===e.dataset.jos_scrolldirection||"none"===e.dataset.jos_scrolldirection)&&(e.classList.toggle("jos-no-mirror","false"==e.dataset.jos_mirror),e.classList.add("jos-"+i),null!=n&&e.classList.remove("jos-"+n),void 0!==e.dataset.jos_invoke_out&&window[e.dataset.jos_invoke_out](e)),"false"!=e.dataset.jos_scroll&&null!=e.dataset.jos_scroll&&(this.scrollEnter=this.scrollEnter.filter((t=>t.id!==e.id)),this.callbackScroller(this.scrollEnter))};animationInit(){let t=[];this.boxes.forEach((s=>{let o=s.dataset.jos_once,a=s.dataset.jos_animation||this.default_animation,e=s.dataset.jos_animationinverse,i=s.dataset.jos_timingFunction,n=s.dataset.jos_duration,r=s.dataset.jos_delay,l=s.dataset.jos_mirror||this.default_mirror;s.classList.contains("jos_disabled")&&(s.classList.remove("jos_disabled"),s.classList.add("jos")),o&&("true"==o||/^\d+$/.test(o))?s.setAttribute("data-jos_once",o):s.setAttribute("data-jos_once",this.default_once?"1":"false"),s.setAttribute("data-jos_animation",a),e&&s.setAttribute("data-jos_animationinverse",e),i&&s.setAttribute("data-jos_timingFunction",i),"false"==l&&s.setAttribute("data-jos_mirror",l),n&&(s.setAttribute("data-jos_duration",n),this.setRange.add(parseFloat(n))),r&&(s.setAttribute("data-jos_delay",r),this.setRange.add(parseFloat(r))),s.setAttribute("data-jos_counter","0"),s.classList.add("jos-"+a),(s.dataset.jos_startvisible||this.default_startVisible)&&t.push(s),this.default_scrolldirection&&s.setAttribute("data-jos_scrolldirection",this.default_scrolldirection);let d={rootMargin:[s.dataset.jos_rootmargin_top||this.default_rootMargin.split(" ")[0],s.dataset.jos_rootmargin_right||this.default_rootMargin.split(" ")[1],s.dataset.jos_rootmargin_bottom||this.default_rootMargin.split(" ")[2],s.dataset.jos_rootmargin_left||this.default_rootMargin.split(" ")[3]].map((t=>t.startsWith("-")?t.substring(1):`-${t}`)).join(" "),threshold:this.default_threshold,passive:this.default_passive};if(s.dataset.jos_anchor){const t=new IntersectionObserver(this.callbackRouter_anchor,d);this.observers.push(t),t.observe(document.getElementById(s.dataset.jos_anchor.substring(1)))}else{const t=new IntersectionObserver(this.callbackRouter,d);this.observers.push(t),t.observe(s)}})),setTimeout((()=>{t.forEach((t=>{let s=t.dataset.jos_startvisible;setTimeout((()=>{"true"==s&&(s=0),t.classList.remove("jos-"+t.dataset.jos_animation)}),s||this.default_startVisible)}))}),100),console.log(this.setRange)}animationUnset(t=0){-1!=t&&this.boxes?.forEach((s=>{s.classList.remove("jos"),s.classList.add("jos_disabled"),0==t?s.classList.add("jos-"+s.dataset.jos_animation):s.classList.remove("jos-"+s.dataset.jos_animation)})),this.observers?.forEach((t=>t.disconnect()))}getStylesheet(){const t=document.createElement("style");document.head.appendChild(t);const s=t.sheet;s.insertRule(".jos-no-mirror {    transition: 0s forwards !important;}");let o="all "+this.default_duration+"s "+this.default_timingFunction+" "+this.default_delay+"s ;";s.insertRule(".jos {transition: "+o+";}");for(const t of this.setRange)s.insertRule(`[data-jos_duration="${t}"] {\n    transition-duration: ${t}s !important;\n  }`),s.insertRule(`[data-jos_delay="${t}"] {\n    transition-delay: ${t}s !important;\n  }`);this.jos_stylesheet=s}getBoxes(){return this.boxes=void 0,this.boxes||(this.boxes=document.querySelectorAll(".jos")),this.boxes}getDefault(t={}){let{once:s,animation:o,animationinverse:a,timingFunction:e,threshold:i,startVisible:n,scrollDirection:r,intersectionRatio:l,duration:d,mirror:c,delay:f,debugMode:m,disable:p,scrollProgressDisable:u,rootMargin:j,rootMarginTop:h,rootMarginBottom:_}=t;this.default_once=s||this.default_once,this.default_animation=o||this.default_animation,this.default_animationinverse=a||this.default_animation,this.default_timingFunction=e||this.default_timingFunction,this.default_threshold=i||this.default_threshold,this.default_startVisible=n||this.default_startVisible,this.default_scrolldirection=r||this.default_scrolldirection,this.default_intersectionRatio=l||this.default_threshold,this.default_duration=d||this.default_duration,this.default_delay=f||this.default_delay,this.debugMode=m||this.debugMode,null!=p&&(this.disable=p),this.scrollProgressDisable=u||this.scrollProgressDisable,this.default_rootMargin=j||`${h||"-10%"} 0% ${_||"-40%"} 0%`,this.default_mirror=c||this.default_mirror}init(t=this.options){this.options=t,this.getDefault(t),this.disable||(this.getBoxes(),this.debugMode&&this.debugger(),this.start(),this.getStylesheet())}start(t=0){return-1!=t&&(this.stop(),this.animationInit()),this.disable=!1,"Started"}stop(t=0){return 1==t?t=0:0==t&&(t=1),this.disable=!0,-1!=t&&this.animationUnset(t),"Stopped"}refresh(){return this.animationUnset(-1),this.boxes=void 0,this.getBoxes(),this.animationInit(),this.debugger(1),"Refreshed"}destroy(t=0){this.animationUnset(-1),this.boxes=void 0,this.observers=[],1==t&&(this.jos_stylesheet.disabled=!0),this.jos_stylesheet=void 0;for(let t in this)this.hasOwnProperty(t)&&"function"!=typeof this[t]&&(this[t]=void 0);return Object.setPrototypeOf(this,null),"JOS Instance Nuked"}}const t=new jos;"undefined"!=typeof module&&void 0!==module.exports&&(module.exports=t)}));