import { VizArray } from "./VizArray.js";
import { List } from "./class.js";
import { changeIndex } from "./VizArray.js";

export function submitLeftFormEventLisener(){
    let form = document.querySelector(".left-form");
    let submit = document.querySelector(".submit-left-form");
    let nameInput = document.querySelector("#name");
    
    submit.addEventListener("click", ()=>{
        if(submit.textContent === "Save")
        {
            form.style.display = "none";
            let localSave = [];
            if(localStorage.getItem("key") === null)
            {
                localSave = [];
            }else{
                localSave = JSON.parse(localStorage.getItem("key"));
            }
            localSave.push(new List(nameInput.value));
            localStorage.setItem("key", JSON.stringify(localSave));
            nameInput.value = "";
            
        }else{
            
            
                let a = JSON.parse(localStorage.getItem("key"));
                a[changeIndex].name = nameInput.value;
                localStorage.setItem("key", JSON.stringify(a));
                form.style.display = "none";
                nameInput.value = "";
        }
        VizArray();
    
    
    
    
    })
}