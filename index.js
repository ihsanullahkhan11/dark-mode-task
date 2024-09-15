var bgColorChange = document.getElementsByClassName("body")[0];
var button = document.getElementById("button")
function colreChange (){
    if (bgColorChange.classList.contains("Day")) {
        bgColorChange.classList.remove("Day");
        bgColorChange.classList.add("Night");
        button.textContent = "Day";
    } else {
        bgColorChange.classList.remove("Night");
        bgColorChange.classList.add("Day");
        button.textContent = "Night";
    }

} 
button.addEventListener('click', colreChange);