let addOneEl = 0

let awayAddOneEl = 0

document.querySelector(".score-home").textContent = 0
document.querySelector(".score-guest").textContent = 0

console.log(addOneEl)

function homePlusOne() {
    addOneEl += 1   
    document.querySelector(".score-home").textContent = addOneEl
}

function homePlusTwo() {
    addOneEl += 2   
    document.querySelector(".score-home").textContent = addOneEl
}
function homePlusThree() {
    addOneEl += 3   
    document.querySelector(".score-home").textContent = addOneEl
}

function awayPlusOne() {
    awayAddOneEl += 1 
    document.querySelector(".score-guest").textContent = awayAddOneEl
}
function awayPlusTwo() {
    awayAddOneEl += 2 
    document.querySelector(".score-guest").textContent = awayAddOneEl
}
function awayPlusThree() {
    awayAddOneEl += 3 
    document.querySelector(".score-guest").textContent = awayAddOneEl
}