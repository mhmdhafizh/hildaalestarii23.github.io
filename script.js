window.addEventListener("scroll", () => {

const nav = document.querySelector("nav");

if(window.scrollY > 50){
nav.style.boxShadow =
"0 10px 25px rgba(0,0,0,.08)";
}else{
nav.style.boxShadow =
"0 2px 20px rgba(0,0,0,.05)";
}

});