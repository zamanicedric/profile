document.getElementById("lefteye").style.border = "white";
document.getElementById("head").style.background = "lightgrey";
document.getElementById("righteye").style.background = "black";
document.getElementById("mouth").style.background = "white";
document.getElementById("nose").style.border = "white";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "5px black solid";
document.getElementById("mouth").style.borderRadius = "4px"
var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}