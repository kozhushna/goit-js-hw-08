function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function O(){var e=m();if(j(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?v(n,i-(e-c)):n}(e))}function w(e){return f=void 0,p&&r?y(e):(r=o=void 0,a)}function S(){var e=m(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},S.flush=function(){return void 0===f?a:w(m())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form");(()=>{let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{y.elements[e].value=t})))})(),y.addEventListener("submit",(e=>{e.preventDefault();const{currentTarget:t}=e;new FormData(t).forEach(((e,t)=>console.log(t,e))),t.reset()})),y.addEventListener("input",e(t)((e=>{let t=localStorage.getItem("feedback-form-state");t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),y.addEventListener("reset",(e=>{localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.48e8cc0f.js.map
