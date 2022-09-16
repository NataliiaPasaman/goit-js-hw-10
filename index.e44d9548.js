document.querySelector("#search-box").addEventListener("input",(function(n){var t,e;t=n.currentTarget.value,e="https://restcountries.com/v3.1/name/".concat(t),fetch(e).then((function(n){return n.json()})).then((function(n){return console.log(n)})).catch((function(n){return console.log(n)}))}));
//# sourceMappingURL=index.e44d9548.js.map
