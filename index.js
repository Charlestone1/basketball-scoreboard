let count = 0; 
let homeScoreEl = document.getElementById("home-score");


function addOne() {
    count += 1; 
    homeScoreEl.textContent = count; 
}
function addTwo() {
    count += 2;  
    homeScoreEl.textContent = count; 
}
function addThree() {
    count += 3; 
    homeScoreEl.textContent = count; 
}


let countGuest = 0; 
let guestScoreEl = document.getElementById("guest-score");


function addGOne() {
    countGuest += 1; 
    guestScoreEl.textContent = countGuest; 
}
function addGTwo() {
    countGuest += 2;  
    guestScoreEl.textContent = countGuest; 
}
function addGThree() {
    countGuest += 3; 
    guestScoreEl.textContent = countGuest; 
}