const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"]

const arrowUpEl = document.getElementById("arrow-up");
const arrowDownEl = document.getElementById("arrow-down");
const activeImgEl = document.getElementById("active-img")
const dotsWrapperEl = document.getElementById("dots-wrapper")

for (let i = 0; i < images.length; i++) {

    let dotEl = document.createElement("div");

    dotsWrapperEl.append(dotEl)

    dotEl.style.backgroundColor = "white"
    
}

let index = 0;
activeImgEl.src = images[index];

arrowUpEl.addEventListener("click", function() {

    //index++;
    //activeImgEl.src = images[index];

    if (index < images.length - 1) {

        index++;

        activeImgEl.src = images[index];

      }

});

arrowDownEl.addEventListener("click", function() {

    if (index > 0) {

        index--;

        activeImgEl.src = images[index];

      }

});