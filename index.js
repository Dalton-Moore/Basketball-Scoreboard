let homeScoreCount = document.getElementById("home-score")
// console.log(homeScoreCount)

let guestScoreCount = document.getElementById("guest-score")
// console.log(guestScoreCount)

let homeScore = 0
let guestScore = 0 

//home score 
function homeScoreOne() {
    homeScore += 1 
    homeScoreCount.textContent = homeScore
}

function homeScoreTwo() {
    homeScore += 2 
    homeScoreCount.textContent = homeScore
}

function homeScoreThree() {
    homeScore += 3 
    homeScoreCount.textContent = homeScore
}

// neg home score 
function homeScoreOneNeg() {
    homeScore -= 1 
    homeScoreCount.textContent = homeScore
}


//guest score
function guestScoreOne() {
    guestScore += 1 
    guestScoreCount.textContent = guestScore
}

function guestScoreTwo() {
    guestScore += 2 
    guestScoreCount.textContent = guestScore
}

function guestScoreThree() {
    guestScore += 3 
    guestScoreCount.textContent = guestScore
}

// neg guest score 
function guestScoreOneNeg() {
    guestScore -= 1 
    guestScoreCount.textContent = guestScore
}

// reset button
function resetButton() {
    homeScoreCount.textContent = 0
    guestScoreCount.textContent = 0
    homeScore = 0
    guestScore = 0 
}