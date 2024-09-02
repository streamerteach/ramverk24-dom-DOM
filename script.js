window.onload = function() {
    // Lyssna efter händelser
    effectOn();
    effectOff();
}
var editTitle = function(e) {
    // Ändra "team-title"
};
function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?
    const images = document.querySelectorAll('.team-member');

    images.forEach(function (image) {
        image.addEventListener('mouseover', function() {
            image.style.border = '3px solid black';
            image.style.filter = 'drop-shadow(6px 6px 2px gray)';
            image.style.cursor = 'pointer';
        });
    });
}


function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    const images = document.querySelectorAll('.team-member');

    images.forEach(function (image) {
        image.addEventListener('mouseout', function() {
            image.style.border = '';
            image.style.filter = '';
         });
    });
}
