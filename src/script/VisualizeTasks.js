export function VisualizeTasks(){
    let parent = document.querySelector(".lists");
    let array = [];
    if(localStorage.getItem("key") != undefined)
    {
        array = JSON.parse(localStorage.getItem("key"));
    }
    let list = document.querySelector(".lists");
    list.textContent = "";
    array.forEach((element,index) => {
        let leftgroup = document.createElement("div");
        let groupName = document.createElement("div");
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");

        leftgroup.classList.add("left-group");
        groupName.classList.add("group-name");
        groupName.textContent = element.name;

        img1.classList.add("img1");
        img2.classList.add("img2");
        img1.src = "./img/editIcon.png";
        img2.src = "./img/deleteIcon.png";

        leftgroup.appendChild(groupName);
        leftgroup.appendChild(img1);
        leftgroup.appendChild(img2);
        
        list.appendChild(leftgroup);

    });

}