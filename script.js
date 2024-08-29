window.onload = function() {
    // Lyssna efter händelser
    let teamMember = document.getElementsByClassName("team-member")

    let mouseover = function(event) {
        this.style.border = "3px solid";
    }

    let mouseoff = function(event) {
        this.style.border = "none";
    }

    for (let i = 0; i < teamMember.length; i++) {
        teamMember[i].addEventListener("mouseover", mouseover)
        teamMember[i].addEventListener("mouseoff", mouseoff)
    }
}
var editTitle = function(e) {
    // Ändra "team-title"
};

function effectOn(id) {
    // Rita en ram runt personen, kanske lite drop shadow?
    
    teamMember.onmouseover 
        this.style.border
    
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
}
