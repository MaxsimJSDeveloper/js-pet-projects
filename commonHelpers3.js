import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-a40df528.js";const i=document.querySelector(".start-btn"),s=document.querySelector(".playing-field");i.addEventListener("click",()=>{const n=[];for(let t=0;t<3;t+=1){s.children[t].textContent="";const o=c((t+1)*100);o.then(e=>{s.children[t].textContent=e}).catch(e=>{s.children[t].textContent=e}),n.push(o)}Promise.allSettled(n).then(t=>{const o=t.map(e=>e.reason||e.value);o.every(e=>e==="🤑")||o.every(e=>e==="😍")?r.success({message:"Win",position:"topRight"}):r.error({message:"Lose",position:"topRight"})})});function c(n){return new Promise((o,e)=>{setTimeout(()=>{Math.random()>.3?o("🤑"):e("😍")},n)})}
//# sourceMappingURL=commonHelpers3.js.map