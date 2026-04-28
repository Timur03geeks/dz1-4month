const input = document.getElementById("gmail_input");
const button = document.getElementById("gmail_button");
const result = document.getElementById("gmail_result");

button.addEventListener("click", () => {
    const value = input.value;

    const regExp =  /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (regExp.test(value)) {
      result.innerHTML = "Valid gmail"
      result.style.color = "green"
    } else {
      result.innerHTML = "invalid gmail";
      result.style.color = "red";   
    }
});


const child = document.querySelector(".child_block");

let position = 0;
function move() {
    if (position < 448) {
        position++;
        child.style.left = position + "px";
        requestAnimationFrame(move);
    }
}
move();