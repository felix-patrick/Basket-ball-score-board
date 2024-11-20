let addOneEl = 0
let addTwoEl = 0
let addThreeEl = 0
let guestAddOneEl = 0

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

function guestPlusOne() {
    guestAddOneEl += 1 
    document.querySelector(".score-guest").textContent = guestAddOneEl
}
function guestPlusTwo() {
    guestAddOneEl += 2 
    document.querySelector(".score-guest").textContent = guestAddOneEl
}
function guestPlusThree() {
    guestAddOneEl += 3 
    document.querySelector(".score-guest").textContent = guestAddOneEl
}