import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const d=document.querySelectorAll(".number"),t=document.querySelector(".result p"),L=document.querySelectorAll(".sign"),g=document.querySelector(".equal"),p=document.querySelector(".ac"),H=document.querySelector(".plus-minus"),M=document.querySelector(".percent"),S=document.querySelector(".dot");let n="",c=!1,l="",u=!1,s="",i=0;for(let e=0;e<d.length;e++)d[e].addEventListener("click",r=>{let f=r.target.getAttribute("value");c?c&&!u&&v(f):T(f)});function T(e){t.innerHTML="",!(e==="0"&&n==="0")&&(e==="."&&n.includes(".")||(n==="0"&&e!=="."?n=e:n+=e,t.innerHTML=parseFloat(n),a()))}function v(e){if(!(e==="0"&&l==="0")&&n!=""&&s!=""){if(t.innerHTML="",e==="."&&l.includes("."))return;l+=e,t.innerHTML=parseFloat(l),a()}}function y(){for(let e=0;e<L.length;e++)L[e].addEventListener("click",r=>{c&&l!==""&&o(),s=r.target.getAttribute("value"),c=!0})}y();g.addEventListener("click",o);let m="";function o(){const e=parseFloat(n),r=parseFloat(l);if(n!==""&&l===""&&(i=e),s==="+")i=e+r;else if(s==="-")i=e-r;else if(s==="x")i=e*r;else if(s==="/"){if(r===0||e===0){t.innerHTML='<p class="message">На 0 ділити не можна!</p>';return}i=e/r}m=i,t.innerHTML=i,n=i.toString(),l="",F(),a(),n="",l="",s=""}g.addEventListener("click",()=>{o(),n=m});function F(){i=parseFloat(i.toFixed(5)),t.innerHTML=i}H.addEventListener("click",h);function h(){t.innerHTML="",n!==""&&(i=-parseFloat(n),n=i.toString(),t.innerHTML=i),n!==""&&l!==""&&s!==""&&(i=-i,t.innerHTML=i)}M.addEventListener("click",k);function k(){t.innerHTML="";let e=parseFloat(n);e!==""&&(i=e/100,n=i),n!==""&&l!==""&&s!==""&&(i=i/100),t.innerHTML=i}p.addEventListener("click",q);function q(){t.innerHTML=0,n="",c=!1,l="",u=!1,s="",i=0,t.style.fontSize="4em"}S.addEventListener("click",e=>{let r=e.target.getAttribute("value");c||(n+=n===""?"0":"",n.includes(".")||(n+=r,t.innerHTML=n)),c&&!u&&(l+=l===""?"0":"",l.includes(".")||(l+=r,t.innerHTML=l))});function a(){t.innerHTML.length>30?t.innerHTML='<p class="massage lol">---- ⊙_⊙ ----</p>':t.innerHTML.length>14?t.style.fontSize="1em":t.innerHTML.length>11?t.style.fontSize="2em":t.innerHTML.length>8?t.style.fontSize="3em":t.style.fontSize="4em"}
//# sourceMappingURL=commonHelpers2.js.map
