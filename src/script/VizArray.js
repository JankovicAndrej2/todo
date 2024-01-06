let lists = document.querySelector(".lists");

let leftForm = document.querySelector(".left-form");
let name = document.querySelector("#name"); 
let submitLeftForm = document.querySelector(".submit-left-form");
let changeIndex = -1;


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
        
        //EditIcon event lisener
        img1.addEventListener("click", ()=>{
            changeIndex = i;
            name.value = array[i].name;
            leftForm.style.display = "block";
            submitLeftForm.textContent = "Change";
            submitLeftForm.classList.remove("submit-left-form");
            submitLeftForm.classList.add("change-left-form");
        })

        //delete button event lisener
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

export {changeIndex};