let p = document.querySelector("p");
let increaseBtn = document.querySelector(".btn-2");
let decreaseBtn = document.querySelector(".btn-1");
let resetBtn = document.querySelector(".btn-0");

increaseBtn.addEventListener("click", increase);
function increase() {
  p.innerText = +p.innerText + 1;
  if (p.innerText>0) {
    p.style.color='black'
    
  }
}

decreaseBtn.addEventListener("click", decrease);
function decrease() {
  p.innerText = +p.innerText - 1;
  if (p.innerText<0) {
    p.style.color='red'
    
  }
}

resetBtn.addEventListener("click", reset);
function reset() {
  p.innerText = 0;
}
