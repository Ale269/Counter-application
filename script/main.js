//variable list
let counter = document.getElementById('counter-number');
let incrementBtn = document.getElementById('botton-increment');
let decrementBtn = document.getElementById('botton-decrement');

//function that increment number by one
function increment() {
    console.log('entrata');
    let numberCount = Number(counter.textContent);
    numberCount += 1; 
    counter.textContent = numberCount;
}

//function that decrement number by one
function decrement() {
    console.log('entrata');
    let numberCount = Number(counter.textContent);
    numberCount -= 1; 
    counter.textContent = numberCount;
}

//Function call
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);