function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,b=function(){return c.Date.now()};function v(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,u=setTimeout(j,t),c?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function j(){var e=b();if(h(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function w(e){return u=void 0,v&&r?y(e):(r=i=void 0,a)}function x(){var e=b(),n=h(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(p(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},x.flush=function(){return void 0===u?a:w(b())},x}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector("form.feedback-form"),S={};function h(){y.querySelector('input[name="email"]').value&&y.querySelector('textarea[name="message"]').value?y.querySelector("button").hasAttribute("disabled")&&y.querySelector("button").removeAttribute("disabled"):y.querySelector("button").setAttribute("disabled","true")}!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(e.email&&(y.querySelector('input[name="email"]').value=e.email,S.email=e.email),e.message&&(y.querySelector('textarea[name="message"]').value=e.message,S.message=e.message));h()}(),y.addEventListener("input",e(t)((function(e){h(),S[e.target.getAttribute("name")]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),y.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.8171b8eb.js.map
