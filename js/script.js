const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"]

const arrowUpEl = document.getElementById("arrow-up");
const arrowDownEl = document.getElementById("arrow-down");
const activeImgEl = document.getElementById("active-img")
const dotsWrapperEl = document.getElementById("dots-wrapper")

for (let i = 0; i < images.length; i++) {

  let dotEl = document.createElement("div");
  dotEl.classList.add("circle");
  dotsWrapperEl.append(dotEl);

  dotEl.style.cssText = `background-color: white; width: 13px; 
  height: 13px; border: 1px solid white;
  border-radius: 50%; opacity: .5;`;

}

let index = 0;
activeImgEl.src = images[index];


let circleEl = document.querySelectorAll(".circle")
circleEl[index].classList.add("active");


arrowUpEl.addEventListener("click", function() {

  /*--------soluzione 1
  index++;
  activeImgEl.src = images[index];
  */

  /*--------soluzione 2 da testare
  index++;
  if (index >= images.length) {
   index = 0; 
  }
  activeImgEl.src = images[index];
  */


  if (index < images.length - 1) {

    index++;

    activeImgEl.src = images[index];

    circleEl[index].classList.add("active");
    circleEl[index -1].classList.remove("active");


  } else {

    index = 0;

    activeImgEl.src = images[index]

  }

});

arrowDownEl.addEventListener("click", function() {


  /* ------sempre parte della soluzione 2 da testare
  index--;
  if (index < 0) {
    index = images.length - 1; // per ciclare imgs
  }
  activeImgEl.src = images[index];
  */


    if (index > 0) {

        index--;

        activeImgEl.src = images[index];

        circleEl[index].classList.add("active");
        circleEl[index +1].classList.remove("active");

      } else {

        index = 4;
        
        activeImgEl.src = images[index]
      }

});