function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form");function s(o,n){const t=Math.random()>.3;new Promise(((e,i)=>{setTimeout((()=>{t?e({position:o,delay:n}):i({position:o,delay:n})}),n)})).then((({position:o,delay:n})=>{console.log(`✅ Fulfilled promise ${o} in ${n}ms`),e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{console.log(`❌ Rejected promise ${o} in ${n}ms`),e(r).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}))}l.addEventListener("input",(function(e){d[e.target.name]=e.target.value})),l.addEventListener("submit",(function(e){e.preventDefault();const{delay:o,step:n,amount:t}=d;for(let e=0;e<t;e+=1){let t=e+1,i=Number(o)+e*Number(n);s(t,i)}}));const d={};
//# sourceMappingURL=03-promises.1e9adfbf.js.map
