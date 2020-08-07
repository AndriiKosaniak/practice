let input = document.getElementById("input");
let button = document.getElementById("button");
let p = document.getElementById("p");

button.onclick = () => {
  let value = input.value;
  let i = 0;
  function printer () {
    if (i < value.length) {
      p.innerHTML += value[i];
      setTimeout(printer, Math.floor(Math.random() * 500));
      i++
    }
  }
  printer()
};
