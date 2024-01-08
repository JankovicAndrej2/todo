import { List } from "./class.js";

export function submitLeftForm(){
    let name = document.querySelector("#name");
    let LeftForm = document.querySelector(".left-form");
    LeftForm.style.display = "none";
    let array = [];
    if(localStorage.getItem("key") != undefined)
    {
        array = JSON.parse(localStorage.getItem("key"));
    }
    array.push(new List(name.value));
    localStorage.setItem("key", JSON.stringify(array));

    name.value = "";
}