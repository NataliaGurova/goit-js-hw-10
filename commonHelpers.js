import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as x,i as b}from"./assets/vendor-77e16229.js";const n=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]");e.disabled=!0;let m;e.addEventListener("click",w);const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]>Date.now()?(m=t[0],e.disabled=!1,h()):(e.disabled=!0,b.show({position:"topRight",color:"red",message:"Please choose a date in the future"}))}};x(n,q);let f;function w(){f=setInterval(h,1e3),e.disabled=!0,n.disabled=!0}function D(){clearInterval(f),d.textContent="00",u.textContent="00",i.textContent="00",l.textContent="00",n.disabled=!1}function h(){const t=m-Date.now(),{days:a,hours:r,minutes:s,seconds:c}=v(t);d.textContent=o(a),u.textContent=o(r),i.textContent=o(s),l.textContent=o(c),t<=0&&D()}function o(t){return t.toString().padStart(2,"0")}function v(t){const y=Math.floor(t/864e5),p=Math.floor(t%864e5/36e5),S=Math.floor(t%864e5%36e5/6e4),C=Math.floor(t%864e5%36e5%6e4/1e3);return{days:y,hours:p,minutes:S,seconds:C}}
//# sourceMappingURL=commonHelpers.js.map
