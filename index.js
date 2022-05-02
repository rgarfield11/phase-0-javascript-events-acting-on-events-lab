// Your code here

// grab dodger
const dodger = document.getElementById("dodger");
// change dodger color
dodger.style.backgroundColor = "#FF69B4";
// move dodger start position up/down
dodger.style.bottom = "0px";
// move dodger start position left/right
dodger.style.left = "180px"

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
   const rightNumbers = dodger.style.left.replace("px", "");
   const right = parseInt(rightNumbers, 10);
   if (right < 360) {
       dodger.style.left = `${right + 10}px`;
   }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});