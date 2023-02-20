let home = 0
let guest = 0
function plusOneh(){
    home++
    document.getElementById("home-score").textContent=home
}

function plusTwoh(){
    home+=2
    document.getElementById("home-score").textContent=home
}

function plusThreeh(){
   home+=3
    document.getElementById("home-score").textContent=home
}
function plusOneg(){
     guest++
    document.getElementById("guest-score").textContent=guest
}

function plusTwog(){
    guest+= 2
    document.getElementById("guest-score").textContent=guest
}

function plusThreeg(){
    guest+= 3
    document.getElementById("guest-score").textContent=guest
}
function reset(){
    home =0
    guest =0
    document.getElementById("home-score").textContent=home
    document.getElementById("guest-score").textContent=guest
}