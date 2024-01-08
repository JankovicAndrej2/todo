export function VisualizeArray(){
    
    let lists = document.querySelector(".lists");
    
    lists.textContent = "";

    let array = JSON.parse(localStorage.getItem("key"));

    if(array != null)
    {
        for(let i = 0; i<array.length; i++)
        {
            let LGroup = document.createElement("div");
            LGroup.classList.add("left-group");
            console.log("aa");
            let GName = document.createElement("div");
            GName.classList.add("group-name");
            GName.textContent = array[i].name;
    
            let img1 = document.createElement("img");
            img1.src = "../img/editIcon.png";
            img1.alt = "edit";
    
            let img2 = document.createElement("img");
            img2.src = "../img/deleteIcon.png";
            img2.alt = "delete";
    
    
            LGroup.appendChild(GName);
            LGroup.appendChild(img1);
            LGroup.appendChild(img2);
            lists.appendChild(LGroup);
    
        }
    }
    

}