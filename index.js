let scoreAway = document.getElementById("score-away")
let scoreHome = document.getElementById("score-home")
let count = 0 

function plus1PointsAway() {
    count += 1 
    scoreAway.textContent = count
}
function plus2PointsAway() {
    count += 2
    scoreAway.textContent = count
}
function plus3PointsAway() {
    count += 3
    scoreAway.textContent = count
}

function plus1PointsHome() {
    count += 1 
    scoreHome.textContent = count
}

function plus2PointsHome() {
    count += 2
    scoreHome.textContent = count
}

function plus3PointsHome() {
    count += 3
    scoreHome.textContent = count
}