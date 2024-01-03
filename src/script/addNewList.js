import { List } from "./class.js";

let form = document.querySelector(".left-form");
let submit = document.querySelector(".submit-left-form");
let nameInput = document.querySelector("#name");

submit.addEventListener("click", ()=>{
    form.style.display = "none";
    let localSave = [];
    if(localStorage.getItem("key") === null)
    {
        let localSave = [];
    }else{
        localSave = JSON.parse(localStorage.getItem("key"));
    }
    localSave.push(new List(nameInput.value));
    localStorage.setItem("key", JSON.stringify(localSave));
    nameInput.value = "";

})