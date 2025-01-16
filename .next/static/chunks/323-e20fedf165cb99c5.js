"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[323],{7401:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:l,className:s="",children:c,iconNode:f,...d}=e;return(0,n.createElement)("svg",{ref:t,...i,width:o,height:o,stroke:r,strokeWidth:l?24*Number(u)/Number(o):u,className:a("lucide",s),...d},[...f.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),l=(e,t)=>{let r=(0,n.forwardRef)((r,i)=>{let{className:l,...s}=r;return(0,n.createElement)(u,{ref:i,iconNode:t,className:a("lucide-".concat(o(e)),l),...s})});return r.displayName="".concat(e),r}},7396:(e,t,r)=>{r.d(t,{default:()=>o.a});var n=r(4839),o=r.n(n)},5483:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(6573);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8929:(e,t,r)=>{function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(6573),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4839:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(306),o=r(5155),a=n._(r(2115)),i=r(2745),u=r(9821),l=r(180),s=r(2170),c=r(5483),f=r(3576),d=r(1394),p=r(4116),h=r(8929),_=r(9544),g=r(4445),m=r(5353),E=new Set;function R(e,t,r,n,o,a){if("undefined"!=typeof window&&(a||(0,u.isLocalURL)(t))){if(!n.bypassPrefetchedCheck&&!a){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(E.has(o))return;E.add(o)}(async()=>a?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let b=a.default.forwardRef(function(e,t){let r,n;let{href:l,as:E,children:b,prefetch:S=null,passHref:v,replace:P,shallow:A,scroll:O,locale:T,onClick:w,onMouseEnter:N,onTouchStart:I,legacyBehavior:C=!1,...x}=e;r=b,C&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let j=a.default.useContext(f.RouterContext),M=a.default.useContext(d.AppRouterContext),L=null!=j?j:M,D=!j,k=!1!==S,U=null===S?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:F,as:X}=a.default.useMemo(()=>{if(!j){let e=y(l);return{href:e,as:E?y(E):e}}let[e,t]=(0,i.resolveHref)(j,l,!0);return{href:e,as:E?(0,i.resolveHref)(j,E):t||e}},[j,l,E]),W=a.default.useRef(F),G=a.default.useRef(X);C&&(n=a.default.Children.only(r));let B=C?n&&"object"==typeof n&&n.ref:t,[H,Y,V]=(0,p.useIntersection)({rootMargin:"200px"}),z=a.default.useCallback(e=>{(G.current!==X||W.current!==F)&&(V(),G.current=X,W.current=F),H(e)},[X,F,V,H]),K=(0,m.useMergedRef)(z,B);a.default.useEffect(()=>{L&&Y&&k&&R(L,F,X,{locale:T},{kind:U},D)},[X,F,Y,T,k,null==j?void 0:j.locale,L,D,U]);let $={ref:K,onClick(e){C||"function"!=typeof w||w(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,o,i,l,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?a.default.startTransition(d):d()}(e,L,F,X,P,A,O,T,D)},onMouseEnter(e){C||"function"!=typeof N||N(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(k||!D)&&R(L,F,X,{locale:T,priority:!0,bypassPrefetchedCheck:!0},{kind:U},D)},onTouchStart:function(e){C||"function"!=typeof I||I(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(k||!D)&&R(L,F,X,{locale:T,priority:!0,bypassPrefetchedCheck:!0},{kind:U},D)}};if((0,s.isAbsoluteUrl)(X))$.href=X;else if(!C||v||"a"===n.type&&!("href"in n.props)){let e=void 0!==T?T:null==j?void 0:j.locale,t=(null==j?void 0:j.isLocaleDomain)&&(0,h.getDomainLocale)(X,e,null==j?void 0:j.locales,null==j?void 0:j.domainLocales);$.href=t||(0,_.addBasePath)((0,c.addLocale)(X,e,null==j?void 0:j.defaultLocale))}return C?a.default.cloneElement(n,$):(0,o.jsx)("a",{...x,...$,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2745:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(4156),o=r(180),a=r(1673),i=r(2170),u=r(6573),l=r(9821),s=r(1885),c=r(1605);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,u.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:i,params:u}=(0,c.interpolateAs)(e.pathname,e.pathname,r);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,a.omit)(r,u)}))}let i=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[i,t||i]:i}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(2115),o=r(8571),a="function"==typeof IntersectionObserver,i=new Map,u=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,s=l||!a,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),i.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=a(e,n),o.current=a(t,n))}:e||t,[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},918:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_SUFFIX:function(){return f},APP_DIR_ALIAS:function(){return x},CACHE_ONE_YEAR:function(){return P},DOT_NEXT_ALIAS:function(){return I},ESLINT_DEFAULT_DIRS:function(){return Q},GSP_NO_RETURNED_VALUE:function(){return Y},GSSP_COMPONENT_MEMBER_ERROR:function(){return K},GSSP_NO_RETURNED_VALUE:function(){return V},INFINITE_CACHE:function(){return A},INSTRUMENTATION_HOOK_FILENAME:function(){return w},MATCHED_PATH_HEADER:function(){return o},MIDDLEWARE_FILENAME:function(){return O},MIDDLEWARE_LOCATION_REGEXP:function(){return T},NEXT_BODY_SUFFIX:function(){return h},NEXT_CACHE_IMPLICIT_TAG_ID:function(){return v},NEXT_CACHE_REVALIDATED_TAGS_HEADER:function(){return m},NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER:function(){return E},NEXT_CACHE_SOFT_TAGS_HEADER:function(){return g},NEXT_CACHE_SOFT_TAG_MAX_LENGTH:function(){return S},NEXT_CACHE_TAGS_HEADER:function(){return _},NEXT_CACHE_TAG_MAX_ITEMS:function(){return y},NEXT_CACHE_TAG_MAX_LENGTH:function(){return b},NEXT_DATA_SUFFIX:function(){return d},NEXT_INTERCEPTION_MARKER_PREFIX:function(){return n},NEXT_META_SUFFIX:function(){return p},NEXT_QUERY_PARAM_PREFIX:function(){return r},NEXT_RESUME_HEADER:function(){return R},NON_STANDARD_NODE_ENV:function(){return $},PAGES_DIR_ALIAS:function(){return N},PRERENDER_REVALIDATE_HEADER:function(){return a},PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER:function(){return i},PUBLIC_DIR_MIDDLEWARE_CONFLICT:function(){return F},ROOT_DIR_ALIAS:function(){return C},RSC_ACTION_CLIENT_WRAPPER_ALIAS:function(){return U},RSC_ACTION_ENCRYPTION_ALIAS:function(){return k},RSC_ACTION_PROXY_ALIAS:function(){return L},RSC_ACTION_VALIDATE_ALIAS:function(){return M},RSC_CACHE_WRAPPER_ALIAS:function(){return D},RSC_MOD_REF_PROXY_ALIAS:function(){return j},RSC_PREFETCH_SUFFIX:function(){return u},RSC_SEGMENTS_DIR_SUFFIX:function(){return l},RSC_SEGMENT_SUFFIX:function(){return s},RSC_SUFFIX:function(){return c},SERVER_PROPS_EXPORT_ERROR:function(){return H},SERVER_PROPS_GET_INIT_PROPS_CONFLICT:function(){return W},SERVER_PROPS_SSG_CONFLICT:function(){return G},SERVER_RUNTIME:function(){return J},SSG_FALLBACK_EXPORT_ERROR:function(){return q},SSG_GET_INITIAL_PROPS_CONFLICT:function(){return X},STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR:function(){return B},UNSTABLE_REVALIDATE_RENAME_ERROR:function(){return z},WEBPACK_LAYERS:function(){return ee},WEBPACK_RESOURCE_QUERIES:function(){return et}});let r="nxtP",n="nxtI",o="x-matched-path",a="x-prerender-revalidate",i="x-prerender-revalidate-if-generated",u=".prefetch.rsc",l=".segments",s=".segment.rsc",c=".rsc",f=".action",d=".json",p=".meta",h=".body",_="x-next-cache-tags",g="x-next-cache-soft-tags",m="x-next-revalidated-tags",E="x-next-revalidate-tag-token",R="next-resume",y=64,b=256,S=1024,v="_N_T_",P=31536e3,A=0xfffffffe,O="middleware",T=`(?:src/)?${O}`,w="instrumentation",N="private-next-pages",I="private-dot-next",C="private-next-root-dir",x="private-next-app-dir",j="private-next-rsc-mod-ref-proxy",M="private-next-rsc-action-validate",L="private-next-rsc-server-reference",D="private-next-rsc-cache-wrapper",k="private-next-rsc-action-encryption",U="private-next-rsc-action-client-wrapper",F="You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",X="You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",W="You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",G="You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",B="can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",H="pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",Y="Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",V="Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",z="The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",K="can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",$='You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',q="Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",Q=["app","pages","components","lib","src"],J={edge:"edge",experimentalEdge:"experimental-edge",nodejs:"nodejs"},Z={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"action-browser",api:"api",middleware:"middleware",instrument:"instrument",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser"},ee={...Z,GROUP:{builtinReact:[Z.reactServerComponents,Z.actionBrowser],serverOnly:[Z.reactServerComponents,Z.actionBrowser,Z.instrument,Z.middleware],neutralTarget:[Z.api],clientOnly:[Z.serverSideRendering,Z.appPagesBrowser],bundled:[Z.reactServerComponents,Z.actionBrowser,Z.serverSideRendering,Z.appPagesBrowser,Z.shared,Z.instrument],appPages:[Z.reactServerComponents,Z.serverSideRendering,Z.appPagesBrowser,Z.actionBrowser]}},et={edgeSSREntry:"__next_edge_ssr_entry__",metadata:"__next_metadata__",metadataRoute:"__next_metadata_route__",metadataImageMeta:"__next_metadata_image_meta__"}},6832:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},3576:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext(null)},180:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return u},urlObjectKeys:function(){return i}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",i=e.pathname||"",u=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+a+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return a(e)}},1885:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRouteObjects:function(){return n.getSortedRouteObjects},getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let n=r(8931),o=r(4895)},1605:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});let n=r(8827),o=r(2630);function a(e,t,r){let a="",i=(0,o.getRouteRegex)(e),u=i.groups,l=(t!==e?(0,n.getRouteMatcher)(i)(t):"")||r;a=e;let s=Object.keys(u);return s.every(e=>{let t=l[e]||"",{repeat:r,optional:n}=u[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in l)&&(a=a.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:s,result:a}}},4895:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return a}});let n=r(8456),o=/\/\[[^/]+?\](?=\/|$)/;function a(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},9821:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=r(2170),o=r(6003);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},1673:(e,t)=>{function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},4156:(e,t)=>{function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},8827:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(2170);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},i={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(i[e]=~n.indexOf("/")?n.split("/").map(e=>a(e)):t.repeat?[a(n)]:a(n))}),i}}},2630:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return _},getNamedRouteRegex:function(){return h},getRouteRegex:function(){return f},parseParameter:function(){return l}});let n=r(918),o=r(8456),a=r(6832),i=r(1246),u=/\[((?:\[.*\])|.+)\]/;function l(e){let t=e.match(u);return t?s(t[1]):s(e)}function s(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function c(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),r={},n=1;return{parameterizedRoute:t.map(e=>{let t=o.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(u);if(t&&i){let{key:e,optional:o,repeat:u}=s(i[1]);return r[e]={pos:n++,repeat:u,optional:o},"/"+(0,a.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,a.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:o}=s(i[1]);return r[e]={pos:n++,repeat:t,optional:o},t?o?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function f(e){let{parameterizedRoute:t,groups:r}=c(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function d(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:o,keyPrefix:i}=e,{key:u,optional:l,repeat:c}=s(n),f=u.replace(/\W/g,"");i&&(f=""+i+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=r()),i?o[f]=""+i+u:o[f]=u;let p=t?(0,a.escapeStringRegexp)(t):"";return c?l?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function p(e,t){let r;let u=(0,i.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),s={};return{namedParameterizedRoute:u.map(e=>{let r=o.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&i){let[r]=e.split(i[0]);return d({getSafeRouteKey:l,interceptionMarker:r,segment:i[1],routeKeys:s,keyPrefix:t?n.NEXT_INTERCEPTION_MARKER_PREFIX:void 0})}return i?d({getSafeRouteKey:l,segment:i[1],routeKeys:s,keyPrefix:t?n.NEXT_QUERY_PARAM_PREFIX:void 0}):"/"+(0,a.escapeStringRegexp)(e)}).join(""),routeKeys:s}}function h(e,t){let r=p(e,t);return{...f(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function _(e,t){let{parameterizedRoute:r}=c(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=p(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},8931:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRouteObjects:function(){return o},getSortedRoutes:function(){return n}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let r=o.slice(1,-1),i=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),i=!0),r.startsWith("…"))throw Error("Detected a three-dot character ('…') at ('"+r+"'). Did you mean ('...')?");if(r.startsWith("...")&&(r=r.substring(3),n=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function a(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(n){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');a(this.optionalRestSlugName,r),this.optionalRestSlugName=r,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');a(this.restSlugName,r),this.restSlugName=r,o="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');a(this.slugName,r),this.slugName=r,o="[]"}}this.children.has(o)||this.children.set(o,new r),this.children.get(o)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function n(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}function o(e,t){let r={},o=[];for(let n=0;n<e.length;n++){let a=t(e[n]);r[a]=n,o[n]=a}return n(o).map(t=>e[r[t]])}},2170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return E},MissingStaticPage:function(){return m},NormalizeError:function(){return _},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return l},getLocationOrigin:function(){return i},getURL:function(){return u},isAbsoluteUrl:function(){return a},isResSent:function(){return s},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return R}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function u(){let{href:e}=window.location,t=i();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class _ extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class E extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function R(e){return JSON.stringify({message:e.message,stack:e.stack})}},4928:(e,t,r)=>{r.d(t,{fp:()=>d});var n=r(2115),o=r(1416);let a=(0,n.createContext)(void 0),i=e=>{let t=(0,n.useContext)(a);return(null==e?void 0:e.store)||t||(0,o.zp)()},u=e=>"function"==typeof(null==e?void 0:e.then),l=e=>{e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t})},s=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw l(e),e}),c=new WeakMap,f=e=>{let t=c.get(e);return t||(t=new Promise((r,n)=>{let o=e,a=e=>t=>{o===e&&r(t)},i=e=>t=>{o===e&&n(t)},l=e=>{"onCancel"in e&&"function"==typeof e.onCancel&&e.onCancel(n=>{if(n===e)throw Error("[Bug] p is not updated even after cancelation");u(n)?(c.set(n,t),o=n,n.then(a(n),i(n)),l(n)):r(n)})};e.then(a(e),i(e)),l(e)}),c.set(e,t)),t};function d(e,t){return[function(e,t){let r=i(t),[[o,a,c],d]=(0,n.useReducer)(t=>{let n=r.get(e);return Object.is(t[0],n)&&t[1]===r&&t[2]===e?t:[n,r,e]},void 0,()=>[r.get(e),r,e]),p=o;(a!==r||c!==e)&&(d(),p=r.get(e));let h=null==t?void 0:t.delay;return((0,n.useEffect)(()=>{let t=r.sub(e,()=>{if("number"==typeof h){let t=r.get(e);u(t)&&l(f(t)),setTimeout(d,h);return}d()});return d(),t},[r,e,h]),(0,n.useDebugValue)(p),u(p))?s(f(p)):p}(e,t),function(e,t){let r=i(t);return(0,n.useCallback)(function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];if(!("write"in e))throw Error("not writable atom");return r.set(e,...n)},[r,e])}(e,t)]}},1416:(e,t,r)=>{let n;r.d(t,{eU:()=>a,zp:()=>w});let o=0;function a(e,t){let r=`atom${++o}`,n={toString(){return this.debugLabel?r+":"+this.debugLabel:r}};return"function"==typeof e?n.read=e:(n.init=e,n.read=i,n.write=u),t&&(n.write=t),n}function i(e){return e(this)}function u(e,t,r){return t(this,"function"==typeof r?r(e(this)):r)}let l=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,s=e=>"init"in e,c=e=>!!e.write,f=new WeakMap,d=e=>{var t;return _(e)&&!(null==(t=f.get(e))?void 0:t[1])},p=(e,t)=>{let r=f.get(e);if(r)r[1]=!0,r[0].forEach(e=>e(t));else throw Error("[Bug] cancelable promise not found")},h=e=>{if(f.has(e))return;let t=[new Set,!1];f.set(e,t);let r=()=>{t[1]=!0};e.then(r,r),e.onCancel=e=>{t[0].add(e)}},_=e=>"function"==typeof(null==e?void 0:e.then),g=e=>"v"in e||"e"in e,m=e=>{if("e"in e)throw e.e;if(!("v"in e))throw Error("[Bug] atom state is not initialized");return e.v},E=(e,t,r)=>{r.p.has(e)||(r.p.add(e),t.then(()=>{r.p.delete(e)},()=>{r.p.delete(e)}))},R=(e,t,r,n,o)=>{var a;if(n===t)throw Error("[Bug] atom cannot depend on itself");r.d.set(n,o.n),d(r.v)&&E(t,r.v,o),null==(a=o.m)||a.t.add(t),e&&S(e,n,t)},y=()=>[new Map,new Map,new Set],b=(e,t,r)=>{e[0].has(t)||e[0].set(t,new Set),e[1].set(t,r)},S=(e,t,r)=>{let n=e[0].get(t);n&&n.add(r)},v=(e,t)=>e[0].get(t),P=(e,t)=>{e[2].add(t)},A=e=>{let t;let r=!1,n=e=>{try{e()}catch(e){r||(t=e,r=!0)}};for(;e[1].size||e[2].size;){e[0].clear();let t=new Set(e[1].values());e[1].clear();let r=new Set(e[2]);e[2].clear(),t.forEach(e=>{var t;return null==(t=e.m)?void 0:t.l.forEach(n)}),r.forEach(n)}if(r)throw t},O=(...[e,t,r,n])=>{let o;o=new Set;let a=(t,r,n)=>{let o="v"in r,a=r.v,i=d(r.v)?r.v:null;if(_(n)){for(let o of(h(n),r.d.keys()))E(t,n,e(o));r.v=n,delete r.e}else r.v=n,delete r.e;o&&Object.is(a,r.v)||(++r.n,i&&p(i,n))},i=(r,n,o)=>{var u;let f,d;let p=e(n);if(g(p)&&(p.m&&!(null==o?void 0:o.has(n))||Array.from(p.d).every(([e,t])=>i(r,e,o).n===t)))return p;p.d.clear();let h=!0;try{let E=t(n,t=>{if(l(n,t)){let r=e(t);if(!g(r)){if(s(t))a(t,r,t.init);else throw Error("no atom init")}return m(r)}let u=i(r,t,o);try{return m(u)}finally{if(h)R(r,n,p,t,u);else{let e=y();R(e,n,p,t,u),w(e,n,p),A(e)}}},{get signal(){return f||(f=new AbortController),f.signal},get setSelf(){return c(n)||console.warn("setSelf function cannot be used with read-only atom"),!d&&c(n)&&(d=(...e)=>{if(h&&console.warn("setSelf function cannot be called in sync"),!h)return T(n,...e)}),d}});if(a(n,p,E),_(E)){null==(u=E.onCancel)||u.call(E,()=>null==f?void 0:f.abort());let e=()=>{if(p.m){let e=y();w(e,n,p),A(e)}};E.then(e,e)}return p}catch(e){return delete p.v,p.e=e,++p.n,p}finally{h=!1}},u=(t,r,n)=>{var o,a;let i=new Map;for(let t of(null==(o=n.m)?void 0:o.t)||[]){let r=e(t);r.m&&i.set(t,r)}for(let t of n.p)i.set(t,e(t));return null==(a=v(t,r))||a.forEach(t=>{i.set(t,e(t))}),i},f=(e,t,r)=>{let[n,o]=function(e,t,r){let n=[],o=new Set,a=new Set,i=[[t,r]];for(;i.length>0;){let[t,r]=i[i.length-1];if(a.has(t)){i.pop();continue}if(o.has(t)){n.push([t,r,r.n]),a.add(t),i.pop();continue}for(let[n,a]of(o.add(t),u(e,t,r)))t===n||o.has(n)||i.push([n,a])}return[n,a]}(e,t,r),a=new Set([t]);for(let t=n.length-1;t>=0;--t){let[r,u,l]=n[t],s=!1;for(let e of u.d.keys())if(e!==r&&a.has(e)){s=!0;break}s&&(i(e,r,o),w(e,r,u),l!==u.n&&(b(e,r,u),a.add(r))),o.delete(r)}},S=(t,n,...o)=>{let u=!0;try{return r(n,e=>m(i(t,e)),(r,...o)=>{let i=e(r);try{if(!l(n,r))return S(t,r,...o);{if(!s(r))throw Error("atom not writable");let e=i.n,n=o[0];a(r,i,n),w(t,r,i),e!==i.n&&(b(t,r,i),f(t,r,i));return}}finally{u||A(t)}},...o)}finally{u=!1}},T=(e,...t)=>{let r=y();try{return S(r,e,...t)}finally{A(r)}},w=(t,r,n)=>{if(n.m&&!d(n.v)){for(let o of n.d.keys())n.m.d.has(o)||(N(t,o,e(o)).t.add(r),n.m.d.add(o));for(let o of n.m.d||[])if(!n.d.has(o)){n.m.d.delete(o);let a=I(t,o,e(o));null==a||a.t.delete(r)}}},N=(t,r,a)=>{if(!a.m){for(let n of(i(t,r),a.d.keys()))N(t,n,e(n)).t.add(r);if(a.m={l:new Set,d:new Set(a.d.keys()),t:new Set},o.add(r),c(r)){let e;let o=a.m,i=(t,n)=>{let o=!0;e=(...e)=>{try{return S(t,r,...e)}finally{o||A(t)}};try{return n()}finally{o=!1}};P(t,()=>{let a=i(t,()=>n(r,(...t)=>e(...t)));a&&(o.u=e=>i(e,a))})}}return a.m},I=(t,r,n)=>{if(n.m&&!n.m.l.size&&!Array.from(n.m.t).some(t=>{var n;return null==(n=e(t).m)?void 0:n.d.has(r)})){let a=n.m.u;for(let i of(a&&P(t,()=>a(t)),delete n.m,o.delete(r),n.d.keys())){let n=I(t,i,e(i));null==n||n.t.delete(r)}return}return n.m},C={get:e=>m(i(void 0,e)),set:T,sub:(t,r)=>{let n=y(),o=e(t),a=N(n,t,o).l;return a.add(r),A(n),()=>{a.delete(r);let e=y();I(e,t,o),A(e)}},unstable_derive:o=>O(...o(e,t,r,n))};return Object.assign(C,{dev4_get_internal_weak_map:()=>({get:t=>{let r=e(t);if(0!==r.n)return r}}),dev4_get_mounted_atoms:()=>o,dev4_restore_atoms:t=>{let r=y();for(let[n,o]of t)if(s(n)){let t=e(n),i=t.n;a(n,t,o),w(r,n,t),i!==t.n&&(b(r,n,t),f(r,n,t))}A(r)}}),C},T=()=>{let e=new WeakMap;return O(t=>{if(!t)throw Error("Atom is undefined or null");let r=e.get(t);return r||(r={d:new Map,p:new Set,n:0},e.set(t,r)),r},(e,...t)=>e.read(...t),(e,...t)=>e.write(...t),(e,...t)=>{var r;return null==(r=e.onMount)?void 0:r.call(e,...t)})},w=()=>(n||(n=T(),globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=n),globalThis.__JOTAI_DEFAULT_STORE__!==n&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")),n)}}]);