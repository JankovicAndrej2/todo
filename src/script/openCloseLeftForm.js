let leftPlus = document.querySelector(".left-plus-img");

let leftForm = document.querySelector(".left-form");

let body = document.querySelector("body");

let closeButton = document.querySelector(".close-left-form");


leftPlus.addEventListener("click", ()=>{
    leftForm.style.display = "block";
});

closeButton.addEventListener("click", ()=>{
    leftForm.style.display = "none";
})

