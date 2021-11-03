const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
var audio = document.getElementById("audio");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var last_btn = document.getElementById('image');



document.addEventListener("click", function(e){
    if( e.target === btn1 ){
        audio.src = "audio/crash.wav";
        audio.play();
    }else if (e.target === btn2){
        audio.src = "audio/bombo.wav";
        audio.play();
    }else if (e.target === btn3){
        audio.src = "audio/hit-hat.wav";
        audio.play();
    }else if (e.target === btn4){
        audio.src = "audio/redoblante.wav";
        audio.play();
    }else if (e.target === btn5){
        audio.src = "audio/tom1.wav";
        audio.play();
    }
    else if (e.target === btn6){
        audio.src = "audio/tom2.wav";
        audio.play();
    }
    else if (e.target === btn7){
        audio.src = "audio/tom3.wav";
        audio.play();
    }
    else if (e.target === btn8){
        audio.src = "audio/tom4.wav";
        audio.play();
    }
    else if (e.target === last_btn){
        audio.src = "audio/crash.wav";
        audio.play();
    }

},false);