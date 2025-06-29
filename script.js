function fun1(){
    let tog = document.getElementById("toggle");
    tog.classList.toggle("show");
}

let f = document.querySelector(".fix");

window.onscroll = function(){
    let h = document.documentElement.scrollTop;
    if(h>90){
        f.style.display = "block";
    } else {
        f.style.display = "none";
    }
}

function scrollup(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let bookBox = document.querySelector(".book");
let inputs = document.querySelectorAll(".book input");

inputs.forEach(input => {
    input.addEventListener("focus", () => {
      bookBox.classList.add("boxshadow");
    });

    input.addEventListener("blur", () => {
      bookBox.classList.remove("boxshadow");
    });
});

let success = document.getElementById("greet");
let inp1 = document.getElementById("input1");
let inp2 = document.getElementById("input2");
let inp3 = document.getElementById("input3");
let inp4 = document.getElementById("input4");
let btn1 = document.getElementById("button1");

function bookapp(){
    success.style.opacity = "1";
    success.style.zIndex = "5";
    count();

    if(inp1.value.trim()==="" || inp2.value.trim()==="" || inp3.value.trim()==="" || inp4.value.trim()===""){
        inp1.style.border = "3px solid red";
        success.style.opacity = "0";
    }

    inp1.value = "";
    inp2.value = "";
    inp3.value = "";
    inp4.value = "";
}

function back(){
    window.location.href = "home.html";
}

async function count(){
    setTimeout(() => {
        success.style.opacity = "0";
        success.style.zIndex = "-1";
    }, 2000);
}


