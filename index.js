
var button = document.querySelector("button")
button.style.backgroundColor="black";
button.style.color="white";
var color = "white";


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