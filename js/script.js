const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"]

const arrowUpEl = document.getElementById("arrow-up");
const arrowDownEl = document.getElementById("arrow-down");
const activeImgEl = document.getElementById("active-img")
const dotWrapperEl = document.getElementById("dots-wrapper")

let index = 0;

activeImgEl.src = images[index];

arrowUpEl.addEventListener("click", function() {

    index++;

    activeImgEl.src = images[index];

});

arrowDownEl.addEventListener("click", function() {

    index--;

    activeImgEl.src = images[index];

});