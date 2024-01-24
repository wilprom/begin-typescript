"use strict";
let count = 0;
const btnIncrement = document.querySelector(".btn-increment");
const viewScore = document.querySelector(".view");
const handleIncrement = (e) => {
    count++;
    const span = viewScore.querySelector("span");
    span.innerText = count.toString();
};
btnIncrement.addEventListener("click", handleIncrement);
