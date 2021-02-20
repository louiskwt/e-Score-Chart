// Rotate UI
const rotateBtn = document.querySelector('#rotate_btn');
const teamOneCard = document.querySelector('#team-one')
// a condition to check if the element is rotated
let isRotated = false;

// a function for displaying the rotateBtn
function rotateBtnDisplay() {
    console.log(window.innerWidth);
    if(window.innerWidth <= 575) {
        console.log(window.innerWidth)
        rotateBtn.classList.remove("d-none");
    } else {
        rotateBtn.classList.add("d-none");
    }
}
// Call it first
rotateBtnDisplay();

// Rotate function
function rotate() {
    if(!isRotated) {
        isRotated = true;
        teamOneCard.classList.add("rotate");
        teamOneCard.classList.remove("rotateBack");
    } else {
        isRotated = false;
        teamOneCard.classList.remove("rotate");
        teamOneCard.classList.add("rotateBack");
    }
}
// Check if the screen width has changed
window.addEventListener('resize', rotateBtnDisplay);
// add event listener to the rotateBtn
rotateBtn.addEventListener('click', rotate);
