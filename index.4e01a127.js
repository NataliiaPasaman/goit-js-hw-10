function e(e){const n=new URLSearchParams({fields:"name,capital,population,flags,languages"});return fetch(`https://restcountries.com/v3.1/name/${e}?${n}`).then((e=>e.json())).then((e=>(console.log(e),e))).catch((e=>console.log(e)))}document.querySelector("#search-box").addEventListener("input",(function(n){e(n.currentTarget.value)}));
//# sourceMappingURL=index.4e01a127.js.map
