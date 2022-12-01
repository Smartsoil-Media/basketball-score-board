let homeScore = document.getElementById("homeScore");
console.log(homeScore)

homeCount = 0

function plusOne() {
    homeScore.textContent = homeCount += 1
}

function plusTwo() {
    homeScore.textContent = homeCount += 2
}

function plusThree() {
    homeScore.textContent = homeCount += 3
}

let guestScore = document.getElementById("guestScore");

guestCount = 0

function plusOneG() {
    guestScore.textContent = guestCount += 1
}

function plusTwoG() {
    guestScore.textContent = guestCount += 2
}

function plusThreeG() {
    guestScore.textContent = guestCount += 3
}


