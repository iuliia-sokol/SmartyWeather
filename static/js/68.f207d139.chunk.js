(self.webpackChunksmarty_weather=self.webpackChunksmarty_weather||[]).push([[68],{77:function(e){var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var u,f,s,c;if(Array.isArray(e)){if((u=e.length)!=i.length)return!1;for(f=u;0!==f--;)if(!a(e[f],i[f]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(c=e.entries();!(f=c.next()).done;)if(!i.has(f.value[0]))return!1;for(c=e.entries();!(f=c.next()).done;)if(!a(f.value[1],i.get(f.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(c=e.entries();!(f=c.next()).done;)if(!i.has(f.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((u=e.length)!=i.length)return!1;for(f=u;0!==f--;)if(e[f]!==i[f])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(f=u;0!==f--;)if(!Object.prototype.hasOwnProperty.call(i,s[f]))return!1;if(t&&e instanceof Element)return!1;for(f=u;0!==f--;)if(("_owner"!==s[f]&&"__v"!==s[f]&&"__o"!==s[f]||!e.$$typeof)&&!a(e[s[f]],i[s[f]]))return!1;return!0}return e!==e&&i!==i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},391:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(2791));t.default=function(e){var t=e.dropletsAmount,r=e.amplitude,n=+t,a=Math.floor(n/2),i=[],u=[];function f(e,t){return Math.floor(Math.random()*(t-e+1))+e}for(var s=0;s<a;s++){var c=f(0,2*document.body.clientWidth),l=f(document.body.clientHeight-1e3,document.body.clientHeight);u.push([c,l]),i.push(o.default.createElement("div",{key:s,className:"droplet",style:{left:c+"px",top:l+"px"}}))}for(var d=0;d<a;d++)i.push(o.default.createElement("div",{key:"".concat(d+a," "),className:"droplet",style:{left:u[d][0]+ +r+"px",top:u[d][1]-1e3+"px"}}));return o.default.createElement(o.default.Fragment,null,i)}},975:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(2791));t.default=function(e){var t=+e.dropletsAmount,r=Math.floor(t/2),n=[],a=[];function i(e,t){return Math.floor(Math.random()*(t-e+1))+e}for(var u=0;u<r;u++){var f=i(0,document.body.clientWidth),s=i(document.body.clientHeight-1e3,document.body.clientHeight);a.push([f,s]),n.push(o.default.createElement("div",{key:u,className:"drop",style:{left:f+"px",top:s+"px"}}))}for(var c=0;c<r;c++)n.push(o.default.createElement("div",{key:"".concat(c+r," "),className:"drop",style:{left:a[c][0]+"px",top:a[c][1]-1e3+"px"}}));return o.default.createElement(o.default.Fragment,null,n)}},5198:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}o.default=e,r&&r.set(e,o);return o}(r(2791)),a=r(5338),i=r(7625),u=r(3143);function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.color,r=void 0===t?u.defaultConfig.color:t,n=e.changeFrequency,f=void 0===n?u.defaultConfig.changeFrequency:n,s=e.radius,c=void 0===s?u.defaultConfig.radius:s,l=e.speed,d=void 0===l?u.defaultConfig.speed:l,p=e.wind,h=void 0===p?u.defaultConfig.wind:p,m=e.rotationSpeed,y=void 0===m?u.defaultConfig.rotationSpeed:m,v=e.snowflakeCount,g=void 0===v?150:v,b=e.images,w=e.style,S=(0,i.useSnowfallStyle)(w),O=(0,o.useRef)(null),j=(0,i.useComponentSize)(O),M=(0,o.useRef)(0),P=(0,o.useRef)(Date.now()),C=(0,i.useDeepMemo)({color:r,changeFrequency:f,radius:c,speed:d,wind:h,rotationSpeed:y,images:b}),E=(0,i.useSnowflakes)(O,g,C),_=(0,o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=O.current;if(t){E.forEach((function(r){return r.update(t,e)}));var r=t.getContext("2d");r&&(r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,t.offsetWidth,t.offsetHeight),E.forEach((function(e){return e.draw(r)})))}}),[E]),k=(0,o.useCallback)((function(){var e=Date.now(),t=Date.now()-P.current;P.current=e;var r=t/a.targetFrameTime;_(r),M.current=requestAnimationFrame(k)}),[_]);return(0,o.useEffect)((function(){return k(),function(){return cancelAnimationFrame(M.current)}}),[k]),o.default.createElement("canvas",{ref:O,height:j.height,width:j.width,style:S,"data-testid":"SnowfallCanvas"})};t.Z=s},3143:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultConfig=t.default=void 0;var n,o=(n=r(77))&&n.__esModule?n:{default:n},a=r(2696);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={color:"#dee4fd",radius:[.5,3],speed:[1,3],wind:[-.5,2],changeFrequency:200,rotationSpeed:[-1,1]};t.defaultConfig=p;var h=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,e),d(this,"config",void 0),d(this,"params",void 0),d(this,"framesSinceLastUpdate",void 0),d(this,"image",void 0),this.updateConfig(r);var n=this.config,o=n.radius,i=n.wind,u=n.speed,s=n.rotationSpeed;this.params={x:(0,a.random)(0,t.offsetWidth),y:(0,a.random)(-t.offsetHeight,0),rotation:(0,a.random)(0,360),radius:a.random.apply(void 0,f(o)),speed:a.random.apply(void 0,f(u)),wind:a.random.apply(void 0,f(i)),rotationSpeed:a.random.apply(void 0,f(s)),nextSpeed:a.random.apply(void 0,f(i)),nextWind:a.random.apply(void 0,f(u)),nextRotationSpeed:a.random.apply(void 0,f(s))},this.framesSinceLastUpdate=0}var t,r,n;return t=e,r=[{key:"selectImage",value:function(){this.config.images&&this.config.images.length>0?this.image=(0,a.randomElement)(this.config.images):this.image=void 0}},{key:"updateConfig",value:function(e){var t=this.config;this.config=u(u({},p),e),this.config.changeFrequency=(0,a.random)(this.config.changeFrequency,1.5*this.config.changeFrequency),this.params&&!(0,o.default)(this.config.radius,null===t||void 0===t?void 0:t.radius)&&(this.params.radius=a.random.apply(void 0,f(this.config.radius))),(0,o.default)(this.config.images,null===t||void 0===t?void 0:t.images)||this.selectImage()}},{key:"updateTargetParams",value:function(){this.params.nextSpeed=a.random.apply(void 0,f(this.config.speed)),this.params.nextWind=a.random.apply(void 0,f(this.config.wind)),this.image&&(this.params.nextRotationSpeed=a.random.apply(void 0,f(this.config.rotationSpeed)))}},{key:"update",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.params,n=r.x,o=r.y,i=r.rotation,u=r.rotationSpeed,f=r.nextRotationSpeed,s=r.wind,c=r.speed,l=r.nextWind,d=r.nextSpeed,p=r.radius;this.params.x=(n+s*t)%(e.offsetWidth+2*p),this.params.x>e.offsetWidth+p&&(this.params.x=-p),this.params.y=(o+c*t)%(e.offsetHeight+2*p),this.params.y>e.offsetHeight+p&&(this.params.y=-p),this.image&&(this.params.rotation=(i+u)%360),this.params.speed=(0,a.lerp)(c,d,.01),this.params.wind=(0,a.lerp)(s,l,.01),this.params.rotationSpeed=(0,a.lerp)(u,f,.01),this.framesSinceLastUpdate++>this.config.changeFrequency&&(this.updateTargetParams(),this.framesSinceLastUpdate=0)}},{key:"getImageOffscreenCanvas",value:function(t,r){var n;if(t instanceof HTMLImageElement&&t.loading)return t;var o=e.offscreenCanvases.get(t);if(o||(o={},e.offscreenCanvases.set(t,o)),!(r in o)){var a,i=document.createElement("canvas");i.width=r,i.height=r,null===(a=i.getContext("2d"))||void 0===a||a.drawImage(t,0,0,r,r),o[r]=i}return null!==(n=o[r])&&void 0!==n?n:t}},{key:"draw",value:function(e){if(this.image){e.setTransform(1,0,0,1,this.params.x,this.params.y);var t=Math.ceil(this.params.radius);e.rotate(this.params.rotation*Math.PI/180),e.drawImage(this.getImageOffscreenCanvas(this.image,t),-Math.ceil(t/2),-Math.ceil(t/2),t,t)}else e.beginPath(),e.arc(this.params.x,this.params.y,this.params.radius,0,2*Math.PI),e.fillStyle=this.config.color,e.closePath(),e.fill()}}],r&&l(t.prototype,r),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();d(h,"offscreenCanvases",new WeakMap);var m=h;t.default=m},5338:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.targetFrameTime=t.snowfallBaseStyle=void 0;t.snowfallBaseStyle={pointerEvents:"none",backgroundColor:"transparent",position:"absolute",top:0,left:0,width:"100%",height:"100%"};t.targetFrameTime=1e3/60},7625:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useComponentSize=void 0,t.useDeepCompareEffect=y,t.useDeepMemo=function(e){var t=p((0,n.useState)(e),2),r=t[0],o=t[1];return y((function(){return o(e)}),[e]),r},t.useSnowflakes=t.useSnowfallStyle=void 0;var n=r(2791),o=f(r(77)),a=f(r(3143)),i=r(5338),u=r(2696);function f(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(f){u=!0,o=f}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"===typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.useSnowflakes=function(e,t,r){var o=p((0,n.useState)([]),2),i=o[0],u=o[1];return(0,n.useEffect)((function(){u((function(n){var o=t-n.length;return o>0?[].concat(d(n),d(function(e,t,r){if(!e.current)return[];for(var n=[],o=0;o<t;o++)n.push(new a.default(e.current,r));return n}(e,o,r))):o<0?n.slice(0,t):n}))}),[t,e,r]),(0,n.useEffect)((function(){u((function(e){return e.map((function(e){return e.updateConfig(r),e}))}))}),[r]),i};t.useComponentSize=function(e){var t=p((0,n.useState)((0,u.getSize)(e.current)),2),r=t[0],o=t[1],a=(0,n.useCallback)((function(){e.current&&o((0,u.getSize)(e.current))}),[e]);return(0,n.useLayoutEffect)((function(){var t=window.ResizeObserver;if(e.current){if(a(),"function"===typeof t){var r=new t(a);return r.observe(e.current),function(){return r.disconnect()}}return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}}),[e,a]),r};function y(e,t){var r=(0,n.useRef)(t);return(0,o.default)(t,r.current)||(r.current=t),(0,n.useEffect)(e,r.current)}t.useSnowfallStyle=function(e){return(0,n.useMemo)((function(){return c(c({},i.snowfallBaseStyle),e||{})}),[e])}},2696:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSize=function(e){return e?{height:e.offsetHeight,width:e.offsetWidth}:{height:0,width:0}},t.lerp=function(e,t,r){return(1-r)*e+r*t},t.random=function(e,t){var r=Math.random()*(t-e+1)+e;return Number.isInteger(e)&&Number.isInteger(t)?Math.floor(r):r},t.randomElement=function(e){var t=Math.floor(Math.random()*e.length);return e[t]}}}]);
//# sourceMappingURL=68.f207d139.chunk.js.map