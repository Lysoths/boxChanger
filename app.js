const xside = document.querySelector("h1");
const yside = document.querySelector("h2");
const box = document.querySelector(".box");

document.addEventListener('mousemove', function(e) {
 
    let left = e.offsetX;
    let top = e.offsetY;
    xside.innerText = `Widht : ${top} px`
    yside.innerText = `Height : ${left} px`
    box.style.width = `${left}px` 
    box.style.height = `${top}px`
    console.log(left , top)
  });