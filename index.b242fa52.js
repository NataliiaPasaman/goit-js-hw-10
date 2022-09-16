document.querySelector("#search-box").addEventListener("input",(function(e){t=e.currentTarget.value,fetch(`https://restcountries.com/v3.1/name/${t}`).then((e=>e.json())).then((e=>console.log(e))).catch((e=>console.log(e)));var t}));
//# sourceMappingURL=index.b242fa52.js.map
