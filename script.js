const countEL = document.getElementById("count-el");
const changeBy = document.getElementById("changeBy");

let changevalue = 1;

changeBy.addEventListener('input', () => {
    changevalue = parseInt(changeBy.value);
    console.log(changevalue);
})


let count = 0;

function increment() {
    count += changevalue;
    countEL.textContent = count;
}

function decrement() {
    count -= changevalue;
    countEL.textContent = count;
}

function rest() {
    count = 0;
    countEL.textContent = 0;
}