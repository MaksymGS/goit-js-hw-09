!function(){var t=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");t.addEventListener("click",d),a.addEventListener("click",d),a.disabled=!0;var e=null;function d(d){switch(d.target.dataset){case t.dataset:t.disabled=!0,a.disabled=!1,e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3);break;case a.dataset:t.disabled=!1,a.disabled=!0,clearInterval(e)}}}();
//# sourceMappingURL=01-color-switcher.58d9913e.js.map