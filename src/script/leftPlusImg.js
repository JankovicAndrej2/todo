import { VizArray, changeIndex } from "./VizArray.js";

let leftPlus = document.querySelector(".left-plus-img");
let submitLeftForm = document.querySelector(".submit-left-form");
let name = document.querySelector("#name");

leftPlus.addEventListener("click",()=>{
    submitLeftForm.textContent = "Save";
    submitLeftForm.classList.add("submit-left-form");
    submitLeftForm.classList.remove("change-left-form");
});



