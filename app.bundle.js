!function(){"use strict";class t{constructor(t){this.props=[],this.sortedProps=[];for(const s in t[0])this.sortedProps.push({value:s,asc:!0}),this.sortedProps.push({value:s,asc:!1}),this.props.push(s)}}const s=document.querySelector(".table"),e=new class{constructor(s,e){this.tableElem=s;const r=new t(e);this.sortedProps=r.sortedProps,this.props=r.props,this.sortedIdx=0;for(let t=0;t<e.length;t++){const r=document.createElement("tr");r.className="tr-regular";let o="";for(const s in e[t])r.dataset[s]=e[t][s],o+="imdb"===s?`<td>imdb: ${e[t][s].toFixed(2)}</td>`:"year"===s?`<td>(${e[t][s]})</td>`:`<td>${e[t][s]}</td>`;r.innerHTML=o,s.insertBefore(r,null)}}sort(t,s){const e=Array.from(document.querySelectorAll(".tr-regular"));Number.isNaN(Number(e[0].dataset[t]))?"string"==typeof e[0].dataset[t]&&(s?e.sort(((s,e)=>s.dataset[t]>e.dataset[t]?1:-1)):e.sort(((s,e)=>s.dataset[t]<e.dataset[t]?1:-1))):s?e.sort(((s,e)=>s.dataset[t]-e.dataset[t])):e.sort(((s,e)=>e.dataset[t]-s.dataset[t]));let r="<tr>";for(const e of this.props)r+=e===t&&s?`<th>${t} &uarr;</th>`:e===t?`<th>${t} &darr;</th>`:`<th>${e}</th>`;r+="</tr>";for(let t=0;t<e.length;t++)r+=e[t].outerHTML;this.tableElem.innerHTML=r}newSort(){this.sort(this.sortedProps[this.sortedIdx].value,this.sortedProps[this.sortedIdx].asc),this.sortedIdx<this.sortedProps.length-1?this.sortedIdx++:this.sortedIdx=0}}(s,[{id:26,title:"Побег из Шоушенка",imdb:9.3,year:1994},{id:25,title:"Крёстный отец",imdb:9.2,year:1972},{id:27,title:"Крёстный отец 2",imdb:9,year:1974},{id:1047,title:"Тёмный рыцарь",imdb:9,year:2008},{id:223,title:"Криминальное чтиво",imdb:8.9,year:1994}]);setInterval((()=>{e.newSort()}),2e3)}();