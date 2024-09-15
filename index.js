// var bgColorChange = document.getElementsByClassName("body")[0];
var button = document.querySelector("button")
button.style.backgroundColor="black";
button.style.color="white";
var color = "white";
// function colreChange (){
//     if (bgColorChange.classList.contains("Day")) {
//         bgColorChange.classList.remove("Day");
//         bgColorChange.classList.add("Night");
//         button.classList.add("Night")
//         button.classList.remove("Night")
//         button.classList.add("Day")
//         button.textContent = "Day";
//     } else {
//         bgColorChange.classList.remove("Night");
//         bgColorChange.classList.add("Day");
//         button.classList.remove("Day")
//         button.classList.add("Night")
//         button.textContent = "Night";
//     }

// } 


function colreChange(){
    if(color === "white"){
        document.body.style.backgroundColor = "black";
        button.style.backgroundColor ="white";
        button.style.color = "black";
        color = "black";

    }else{
        document.body.style.backgroundColor ="white"
        button.style.backgroundColor = "black";
        button.style.color = "white";
        color = "white";
        

    }
}
button.addEventListener('click', colreChange);