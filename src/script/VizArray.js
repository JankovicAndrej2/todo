let lists = document.querySelector(".lists");

let leftForm = document.querySelector(".left-form");
let name = document.querySelector("#name"); 
let submitLeftForm = document.querySelector(".submit-left-form");
let closeLeftForm = document.querySelector(".close-left-form");

export function VizArray(){
    lists.textContent= "";
    let array = [];
    if(localStorage.getItem("key") === null)
    {
        array = [];
    }
    else{
        array = JSON.parse(localStorage.getItem("key"));
    }
    for(let i = 0; i<array.length; i++)
    {
        let LGroup = document.createElement("div");
        LGroup.classList.add("left-group");

        let GName = document.createElement("div");
        GName.classList.add("group-name");
        GName.textContent = array[i].name;

        let img1 = document.createElement("img");
        img1.src = "../img/editIcon.png";
        img1.alt = "edit";

        let img2 = document.createElement("img");
        img2.src = "../img/deleteIcon.png";
        img2.alt = "delete";

        
        img2.addEventListener("click", ()=>{
            let x = JSON.parse(localStorage.getItem("key"));
            x.splice(i,1);
            localStorage.setItem("key", JSON.stringify(x));
            VizArray();
        })
        
        
        




        LGroup.appendChild(GName);
        LGroup.appendChild(img1);
        LGroup.appendChild(img2);
        lists.appendChild(LGroup);
    }

}