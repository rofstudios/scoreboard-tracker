let homeWinning = false;
let guestWinning = false;

let homeScore = 0;
let guestScore = 0;

let homeDisplay = document.getElementById("score-el-home");
let guestDisplay = document.getElementById("score-el-guest");

let homePlusOne = document.getElementById("home-plus1");
let homePlusTwo = document.getElementById("home-plus2");
let homePlusThree = document.getElementById("home-plus3");

let guestPlusOne = document.getElementById("home-plus1");
let guestPlusTwo = document.getElementById("home-plus2");
let guestPlusThree = document.getElementById("home-plus3");

let scoreContainerHome = document.getElementById("score-cont-home");
let scoreContainerGuest = document.getElementById("score-cont-guest");

// increases home score

let homePlus = (num) => {
    homeScore += num;
    homeDisplay.textContent = homeScore;
    
    if (homeScore == guestScore ) {
        scoreContainerHome.style.backgroundColor = null        
        scoreContainerGuest.style.backgroundColor = null            
    } else if (homeScore > guestScore) {
        scoreContainerHome.style.backgroundColor = "#9F1239"        
        scoreContainerGuest.style.backgroundColor = null        
    } 
}

// increases guest score

let guestPlus = (num) => {
    guestScore += num;
    guestDisplay.textContent = guestScore;
    
    if (guestScore == homeScore ) {
        scoreContainerGuest.style.backgroundColor = null       
        scoreContainerHome.style.backgroundColor = null                 
    } else if ( guestScore > homeScore ) {
        scoreContainerGuest.style.backgroundColor = "#9F1239"        
        scoreContainerHome.style.backgroundColor = null        
    }
}

// refreshes game score

function refresh() {
    // reset score counter
    homeScore = 0;
    guestScore = 0;
    
    // reset display score & clear winning color 
    
    homeDisplay.textContent = homeScore;    
    guestDisplay.textContent = guestScore;
        
    scoreContainerHome.style.backgroundColor = null       
    scoreContainerGuest.style.backgroundColor = null
}

// audio clicks

let audio1 = new Audio();
audio1.src = "wooden_organic3.mp3";

let audio2 = new Audio();
audio2.src = "wooden_organic4.mp3";

let audio3 = new Audio();
audio3.src = "wooden_organic5.mp3";

let audio4 = new Audio();
audio4.src = "arcade_notification.mp3";