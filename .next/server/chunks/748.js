"use strict";exports.id=748,exports.ids=[748],exports.modules={9952:(e,r,t)=>{t.d(r,{s:()=>l,t:()=>o});var n=t(8009);function o(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function l(...e){return n.useCallback(o(...e),e)}},5748:(e,r,t)=>{t.d(r,{OK:()=>K,bL:()=>B,VM:()=>x,lr:()=>O,LM:()=>q});var n=t(8009);t(5740);var o=t(2705),l=t(5512),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=n.forwardRef((e,t)=>{let{asChild:n,...i}=e,a=n?o.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(a,{...i,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),a=t(9952),s=globalThis?.document?n.useLayoutEffect:()=>{},u=e=>{let{present:r,children:t}=e,o=function(e){var r,t;let[o,l]=n.useState(),i=n.useRef({}),a=n.useRef(e),u=n.useRef("none"),[d,f]=(r=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,r)=>t[e][r]??e,r));return n.useEffect(()=>{let e=c(i.current);u.current="mounted"===d?e:"none"},[d]),s(()=>{let r=i.current,t=a.current;if(t!==e){let n=u.current,o=c(r);e?f("MOUNT"):"none"===o||r?.display==="none"?f("UNMOUNT"):t&&n!==o?f("ANIMATION_OUT"):f("UNMOUNT"),a.current=e}},[e,f]),s(()=>{if(o){let e;let r=o.ownerDocument.defaultView??window,t=t=>{let n=c(i.current).includes(t.animationName);if(t.target===o&&n&&(f("ANIMATION_END"),!a.current)){let t=o.style.animationFillMode;o.style.animationFillMode="forwards",e=r.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=t)})}},n=e=>{e.target===o&&(u.current=c(i.current))};return o.addEventListener("animationstart",n),o.addEventListener("animationcancel",t),o.addEventListener("animationend",t),()=>{r.clearTimeout(e),o.removeEventListener("animationstart",n),o.removeEventListener("animationcancel",t),o.removeEventListener("animationend",t)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:n.useCallback(e=>{e&&(i.current=getComputedStyle(e)),l(e)},[])}}(r),l="function"==typeof t?t({present:o.isPresent}):n.Children.only(t),i=(0,a.s)(o.ref,function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(l));return"function"==typeof t||o.isPresent?n.cloneElement(l,{ref:i}):null};function c(e){return e?.animationName||"none"}function d(e){let r=n.useRef(e);return n.useEffect(()=>{r.current=e}),n.useMemo(()=>(...e)=>r.current?.(...e),[])}u.displayName="Presence";var f=n.createContext(void 0);function p(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(e?.(n),!1===t||!n.defaultPrevented)return r?.(n)}}var h="ScrollArea",[v,m]=function(e,r=[]){let t=[],o=()=>{let r=t.map(e=>n.createContext(e));return function(t){let o=t?.[e]||r;return n.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return o.scopeName=e,[function(r,o){let i=n.createContext(o),a=t.length;t=[...t,o];let s=r=>{let{scope:t,children:o,...s}=r,u=t?.[e]?.[a]||i,c=n.useMemo(()=>s,Object.values(s));return(0,l.jsx)(u.Provider,{value:c,children:o})};return s.displayName=r+"Provider",[s,function(t,l){let s=l?.[e]?.[a]||i,u=n.useContext(s);if(u)return u;if(void 0!==o)return o;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e)[`__scope${n}`];return{...r,...o}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(o,...r)]}(h),[w,g]=v(h),b=n.forwardRef((e,r)=>{let{__scopeScrollArea:t,type:o="hover",dir:s,scrollHideDelay:u=600,...c}=e,[d,p]=n.useState(null),[h,v]=n.useState(null),[m,g]=n.useState(null),[b,S]=n.useState(null),[y,E]=n.useState(null),[x,T]=n.useState(0),[R,C]=n.useState(0),[N,P]=n.useState(!1),[L,j]=n.useState(!1),_=(0,a.s)(r,e=>p(e)),D=function(e){let r=n.useContext(f);return e||r||"ltr"}(s);return(0,l.jsx)(w,{scope:t,type:o,dir:D,scrollHideDelay:u,scrollArea:d,viewport:h,onViewportChange:v,content:m,onContentChange:g,scrollbarX:b,onScrollbarXChange:S,scrollbarXEnabled:N,onScrollbarXEnabledChange:P,scrollbarY:y,onScrollbarYChange:E,scrollbarYEnabled:L,onScrollbarYEnabledChange:j,onCornerWidthChange:T,onCornerHeightChange:C,children:(0,l.jsx)(i.div,{dir:D,...c,ref:_,style:{position:"relative","--radix-scroll-area-corner-width":x+"px","--radix-scroll-area-corner-height":R+"px",...e.style}})})});b.displayName=h;var S="ScrollAreaViewport",y=n.forwardRef((e,r)=>{let{__scopeScrollArea:t,children:o,nonce:s,...u}=e,c=g(S,t),d=n.useRef(null),f=(0,a.s)(r,d,c.onViewportChange);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:s}),(0,l.jsx)(i.div,{"data-radix-scroll-area-viewport":"",...u,ref:f,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,l.jsx)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:o})})]})});y.displayName=S;var E="ScrollAreaScrollbar",x=n.forwardRef((e,r)=>{let{forceMount:t,...o}=e,i=g(E,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:s}=i,u="horizontal"===e.orientation;return n.useEffect(()=>(u?a(!0):s(!0),()=>{u?a(!1):s(!1)}),[u,a,s]),"hover"===i.type?(0,l.jsx)(T,{...o,ref:r,forceMount:t}):"scroll"===i.type?(0,l.jsx)(R,{...o,ref:r,forceMount:t}):"auto"===i.type?(0,l.jsx)(C,{...o,ref:r,forceMount:t}):"always"===i.type?(0,l.jsx)(N,{...o,ref:r}):null});x.displayName=E;var T=n.forwardRef((e,r)=>{let{forceMount:t,...o}=e,i=g(E,e.__scopeScrollArea),[a,s]=n.useState(!1);return n.useEffect(()=>{let e=i.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),s(!0)},n=()=>{r=window.setTimeout(()=>s(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",n)}}},[i.scrollArea,i.scrollHideDelay]),(0,l.jsx)(u,{present:t||a,children:(0,l.jsx)(C,{"data-state":a?"visible":"hidden",...o,ref:r})})}),R=n.forwardRef((e,r)=>{var t,o;let{forceMount:i,...a}=e,s=g(E,e.__scopeScrollArea),c="horizontal"===e.orientation,d=k(()=>h("SCROLL_END"),100),[f,h]=(t="hidden",o={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},n.useReducer((e,r)=>o[e][r]??e,t));return n.useEffect(()=>{if("idle"===f){let e=window.setTimeout(()=>h("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(e)}},[f,s.scrollHideDelay,h]),n.useEffect(()=>{let e=s.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],n=()=>{let n=e[r];t!==n&&(h("SCROLL"),d()),t=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[s.viewport,c,h,d]),(0,l.jsx)(u,{present:i||"hidden"!==f,children:(0,l.jsx)(N,{"data-state":"hidden"===f?"hidden":"visible",...a,ref:r,onPointerEnter:p(e.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:p(e.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),C=n.forwardRef((e,r)=>{let t=g(E,e.__scopeScrollArea),{forceMount:o,...i}=e,[a,s]=n.useState(!1),c="horizontal"===e.orientation,d=k(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;s(c?e:r)}},10);return $(t.viewport,d),$(t.content,d),(0,l.jsx)(u,{present:o||a,children:(0,l.jsx)(N,{"data-state":a?"visible":"hidden",...i,ref:r})})}),N=n.forwardRef((e,r)=>{let{orientation:t="vertical",...o}=e,i=g(E,e.__scopeScrollArea),a=n.useRef(null),s=n.useRef(0),[u,c]=n.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=H(u.viewport,u.content),f={...o,sizes:u,onSizesChange:c,hasThumb:!!(d>0&&d<1),onThumbChange:e=>a.current=e,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:e=>s.current=e};function p(e,r){return function(e,r,t,n="ltr"){let o=X(t),l=r||o/2,i=t.scrollbar.paddingStart+l,a=t.scrollbar.size-t.scrollbar.paddingEnd-(o-l),s=t.content-t.viewport;return V([i,a],"ltr"===n?[0,s]:[-1*s,0])(e)}(e,s.current,u,r)}return"horizontal"===t?(0,l.jsx)(P,{...f,ref:r,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=F(i.viewport.scrollLeft,u,i.dir);a.current.style.transform=`translate3d(${e}px, 0, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=p(e,i.dir))}}):"vertical"===t?(0,l.jsx)(L,{...f,ref:r,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=F(i.viewport.scrollTop,u);a.current.style.transform=`translate3d(0, ${e}px, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=p(e))}}):null}),P=n.forwardRef((e,r)=>{let{sizes:t,onSizesChange:o,...i}=e,s=g(E,e.__scopeScrollArea),[u,c]=n.useState(),d=n.useRef(null),f=(0,a.s)(r,d,s.onScrollbarXChange);return n.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,l.jsx)(D,{"data-orientation":"horizontal",...i,ref:f,sizes:t,style:{bottom:0,left:"rtl"===s.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===s.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":X(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(s.viewport){let n=s.viewport.scrollLeft+r.deltaX;e.onWheelScroll(n),function(e,r){return e>0&&e<r}(n,t)&&r.preventDefault()}},onResize:()=>{d.current&&s.viewport&&u&&o({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:z(u.paddingLeft),paddingEnd:z(u.paddingRight)}})}})}),L=n.forwardRef((e,r)=>{let{sizes:t,onSizesChange:o,...i}=e,s=g(E,e.__scopeScrollArea),[u,c]=n.useState(),d=n.useRef(null),f=(0,a.s)(r,d,s.onScrollbarYChange);return n.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,l.jsx)(D,{"data-orientation":"vertical",...i,ref:f,sizes:t,style:{top:0,right:"ltr"===s.dir?0:void 0,left:"rtl"===s.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":X(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(s.viewport){let n=s.viewport.scrollTop+r.deltaY;e.onWheelScroll(n),function(e,r){return e>0&&e<r}(n,t)&&r.preventDefault()}},onResize:()=>{d.current&&s.viewport&&u&&o({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:z(u.paddingTop),paddingEnd:z(u.paddingBottom)}})}})}),[j,_]=v(E),D=n.forwardRef((e,r)=>{let{__scopeScrollArea:t,sizes:o,hasThumb:s,onThumbChange:u,onThumbPointerUp:c,onThumbPointerDown:f,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:m,onResize:w,...b}=e,S=g(E,t),[y,x]=n.useState(null),T=(0,a.s)(r,e=>x(e)),R=n.useRef(null),C=n.useRef(""),N=S.viewport,P=o.content-o.viewport,L=d(m),_=d(h),D=k(w,10);function A(e){R.current&&v({x:e.clientX-R.current.left,y:e.clientY-R.current.top})}return n.useEffect(()=>{let e=e=>{let r=e.target;y?.contains(r)&&L(e,P)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[N,y,P,L]),n.useEffect(_,[o,_]),$(y,D),$(S.content,D),(0,l.jsx)(j,{scope:t,scrollbar:y,hasThumb:s,onThumbChange:d(u),onThumbPointerUp:d(c),onThumbPositionChange:_,onThumbPointerDown:d(f),children:(0,l.jsx)(i.div,{...b,ref:T,style:{position:"absolute",...b.style},onPointerDown:p(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),R.current=y.getBoundingClientRect(),C.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),A(e))}),onPointerMove:p(e.onPointerMove,A),onPointerUp:p(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=C.current,S.viewport&&(S.viewport.style.scrollBehavior=""),R.current=null})})})}),A="ScrollAreaThumb",O=n.forwardRef((e,r)=>{let{forceMount:t,...n}=e,o=_(A,e.__scopeScrollArea);return(0,l.jsx)(u,{present:t||o.hasThumb,children:(0,l.jsx)(M,{ref:r,...n})})}),M=n.forwardRef((e,r)=>{let{__scopeScrollArea:t,style:o,...s}=e,u=g(A,t),c=_(A,t),{onThumbPositionChange:d}=c,f=(0,a.s)(r,e=>c.onThumbChange(e)),h=n.useRef(),v=k(()=>{h.current&&(h.current(),h.current=void 0)},100);return n.useEffect(()=>{let e=u.viewport;if(e){let r=()=>{if(v(),!h.current){let r=Y(e,d);h.current=r,d()}};return d(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[u.viewport,v,d]),(0,l.jsx)(i.div,{"data-state":c.hasThumb?"visible":"hidden",...s,ref:f,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...o},onPointerDownCapture:p(e.onPointerDownCapture,e=>{let r=e.target.getBoundingClientRect(),t=e.clientX-r.left,n=e.clientY-r.top;c.onThumbPointerDown({x:t,y:n})}),onPointerUp:p(e.onPointerUp,c.onThumbPointerUp)})});O.displayName=A;var W="ScrollAreaCorner",I=n.forwardRef((e,r)=>{let t=g(W,e.__scopeScrollArea),n=!!(t.scrollbarX&&t.scrollbarY);return"scroll"!==t.type&&n?(0,l.jsx)(U,{...e,ref:r}):null});I.displayName=W;var U=n.forwardRef((e,r)=>{let{__scopeScrollArea:t,...o}=e,a=g(W,t),[s,u]=n.useState(0),[c,d]=n.useState(0),f=!!(s&&c);return $(a.scrollbarX,()=>{let e=a.scrollbarX?.offsetHeight||0;a.onCornerHeightChange(e),d(e)}),$(a.scrollbarY,()=>{let e=a.scrollbarY?.offsetWidth||0;a.onCornerWidthChange(e),u(e)}),f?(0,l.jsx)(i.div,{...o,ref:r,style:{width:s,height:c,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}}):null});function z(e){return e?parseInt(e,10):0}function H(e,r){let t=e/r;return isNaN(t)?0:t}function X(e){let r=H(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-t)*r,18)}function F(e,r,t="ltr"){let n=X(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-o,i=r.content-r.viewport,a=function(e,[r,t]){return Math.min(t,Math.max(r,e))}(e,"ltr"===t?[0,i]:[-1*i,0]);return V([0,i],[0,l-n])(a)}function V(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let n=(r[1]-r[0])/(e[1]-e[0]);return r[0]+n*(t-e[0])}}var Y=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},n=0;return function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=t.left!==l.left,a=t.top!==l.top;(i||a)&&r(),t=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function k(e,r){let t=d(e),o=n.useRef(0);return n.useEffect(()=>()=>window.clearTimeout(o.current),[]),n.useCallback(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(t,r)},[t,r])}function $(e,r){let t=d(r);s(()=>{let r=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,t])}var B=b,q=y,K=I},2705:(e,r,t)=>{t.d(r,{DX:()=>i});var n=t(8009),o=t(9952),l=t(5512),i=n.forwardRef((e,r)=>{let{children:t,...o}=e,i=n.Children.toArray(t),s=i.find(u);if(s){let e=s.props.children,t=i.map(r=>r!==s?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(a,{...o,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,l.jsx)(a,{...o,ref:r,children:t})});i.displayName="Slot";var a=n.forwardRef((e,r)=>{let{children:t,...l}=e;if(n.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t);return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],l=r[n];/^on[A-Z]/.test(n)?o&&l?t[n]=(...e)=>{l(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...l}:"className"===n&&(t[n]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?(0,o.t)(r,e):e})}return n.Children.count(t)>1?n.Children.only(null):null});a.displayName="SlotClone";var s=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function u(e){return n.isValidElement(e)&&e.type===s}}};