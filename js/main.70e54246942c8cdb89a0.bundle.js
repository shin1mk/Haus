(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[179],{579:(M,L,s)=>{"use strict";var w=s(211),e=(s(201),s(311),s(517)),D=document.createElement("img");D.src=e;var t=document.createElement("h1");t.textContent=(0,w.example)();var c=document.createElement("div");c.classList.add("image");var i=document.createElement("img");i.src="/assets/example.png",document.querySelector("#root").append(D,t,c,i)},311:()=>{document.querySelectorAll(".accordion__item-trigger").forEach((function(M){M.addEventListener("click",(function(){var L=M.parentNode;L.classList.contains("accordion__item-active")?L.classList.remove("accordion__item-active"):(document.querySelectorAll(".accordion__item").forEach((function(M){return M.classList.remove("accordion__item-active")})),L.classList.add("accordion__item-active"))}))}))},211:()=>{},201:()=>{var M,L,s;M=document.querySelector(".burger"),L=document.querySelector(".menu"),s=document.querySelector("body"),M.addEventListener("click",(function(){L.classList.contains("active")?(L.classList.remove("active"),M.classList.remove("active-burger"),s.classList.remove("locked")):(L.classList.add("active"),M.classList.add("active-burger"),s.classList.add("locked"))})),window.addEventListener("resize",(function(){window.innerWidth>1199.98&&(L.classList.remove("active"),M.classList.remove("active-burger"),s.classList.remove("locked"))})),window.addEventListener("scroll",(function(){var M=document.querySelector("nav");window.scrollY>=1?M.classList.add("fixed__nav"):M.classList.remove("fixed__nav")}))},517:M=>{"use strict";M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjJweCIgaGVpZ2h0PSI2MnB4IiB2aWV3Qm94PSIwIC0xMyA2MiA2MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHBhdGggaWQ9IkFtZXJpY2FuRm9vdGJhbGwiIGQ9Ik0zMTMuMDc5LDEzNC40MjVDMzA3LjY0OSwxMzAuODkyLDMwNCwxMjYuNSwzMDQsMTIzLjVjMC0xLjQzMy44NjUtMy4zMjgsMi40MzYtNS4zMzdhMzAuODM5LDMwLjgzOSwwLDAsMSw2LjY0My02LjA4OCwzNy41LDM3LjUsMCwwLDEsNDMuODQxLDAsMzAuODQ0LDMwLjg0NCwwLDAsMSw2LjY0NCw2LjA4OGMxLjU3MSwyLjAwOSwyLjQzNiwzLjksMi40MzYsNS4zMzcsMCwzLTMuNjQ5LDcuMzkyLTkuMDgsMTAuOTI1YTM5LjgyNiwzOS44MjYsMCwwLDEtNDMuODQxLDBaTTMzNSwxMzhhMzYuNTQyLDM2LjU0MiwwLDAsMCwxMy43MDktMi43NjEsMzYuODc2LDM2Ljg3NiwwLDAsMCwyLjIzMy0xMS4wMmgtMi4xMjlhMS41MiwxLjUyLDAsMCwxLS44MTIuNjhWMTI2YTEsMSwwLDAsMS0yLDB2LTFoLTJ2MWExLDEsMCwwLDEtMiwwdi0xaC0ydjFhMSwxLDAsMCwxLTIsMHYtMWgtMnYxYTEsMSwwLDEsMS0yLDB2LTFoLTJ2MWExLDEsMCwwLDEtMiwwdi0xaC0ydjFhMSwxLDAsMSwxLTIsMHYtMWgtMnYxYTEsMSwwLDEsMS0yLDB2LTEuMWExLjUyLDEuNTIsMCwwLDEtLjgxMi0uNjhoLTIuMTNhMzYuODc1LDM2Ljg3NSwwLDAsMCwyLjIzMywxMS4wMkEzNi41MzksMzYuNTM5LDAsMCwwLDMzNSwxMzhabS0xOS44LTUuODY1Yy4zOTMuMjQ2LjgzMi41MTEsMS4zMTYuNzg4YTM4LjE2OCwzOC4xNjgsMCwwLDEtMS40NTgtOC43aC03Ljg4N0MzMDcuODU3LDEyNi4xNzgsMzEwLjU4NiwxMjkuMjQxLDMxNS4yLDEzMi4xMzRabTM4LjI4My43ODdjLjQ4NC0uMjc2LjkyMy0uNTQxLDEuMzE2LS43ODcsNC42MTUtMi44OTQsNy4zNDQtNS45NTYsOC4wMjktNy45MTVoLTcuODg3QTM4LjE3MSwzOC4xNzEsMCwwLDEsMzUzLjQ4MywxMzIuOTIxWm05LjQ3My0xMC4wMTZhOC43NzUsOC43NzUsMCwwLDAtMi4xNTctMy42MTQsMzAuMDE5LDMwLjAxOSwwLDAsMC02LTUuMDg5cS0uMy0uMi0uNjMzLS40MDlBNDAuMDY0LDQwLjA2NCwwLDAsMSwzNTUsMTIycTAsLjQ1NS0uMDEuOTA1Wm0tMTEuOTY2LDBxLjAxLS40NTEuMDEtLjkwNWEzOS4wNTIsMzkuMDUyLDAsMCwwLTEuNDQ5LTEwLjcsMzMuNzMxLDMzLjczMSwwLDAsMC0yOS4xLDBBMzkuMDUyLDM5LjA1MiwwLDAsMCwzMTksMTIycTAsLjQ1NS4wMS45MDVoMi4xMTZhMS41MTEsMS41MTEsMCwwLDEsLjg3NS0uOFYxMjFhMSwxLDAsMSwxLDIsMHYxaDJ2LTFhMSwxLDAsMSwxLDIsMHYxaDJ2LTFhMSwxLDAsMCwxLDIsMHYxaDJ2LTFhMSwxLDAsMSwxLDIsMHYxaDJ2LTFhMSwxLDAsMCwxLDIsMHYxaDJ2LTFhMSwxLDAsMCwxLDIsMHYxaDJ2LTFhMSwxLDAsMCwxLDIsMHYxLjFhMS41MTEsMS41MTEsMCwwLDEsLjg3NS44Wm0tMzUuOTgsMHEtLjAxLS40NTEtLjAxLS45MDVhNDAuMDQ4LDQwLjA0OCwwLDAsMSwuODM0LTguMjA3cS0uMzM1LjIxMS0uNjM0LjQwOWEzMC4wMiwzMC4wMiwwLDAsMC02LDUuMDg5LDguNzc1LDguNzc1LDAsMCwwLTIuMTU3LDMuNjE0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwNCAtMTA1KSIvPg0KPC9zdmc+DQo="}},M=>{M(M.s=579)}]);