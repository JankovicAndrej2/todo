import { changeIsSelected } from "./ChangeSelected";
import { colorIsSelected } from "./colorIsSelected";
import { Task } from "./task_class";


export function VisualizeTasks(){
    let parent = document.querySelector(".lists");
    let array = [];
    if(localStorage.getItem("key") != undefined)
    {
        array = JSON.parse(localStorage.getItem("key"));
    }
    let list = document.querySelector(".lists");
    list.textContent = "";
    //creatin
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
        //edit form button
        img1.addEventListener("click", ()=>{
            let editForm = document.querySelector(".edit-left-form");
            editForm.style.display = "block";
            let closeedit = document.querySelector(".edit-close-left-form");
            let editformbutton = document.querySelector(".edit-submit-left-form");
            let editname = document.querySelector("#edit-name");
            let editform = document.querySelector(".edit-left-form");

            editname.value = element.name;
            //close edit form
            closeedit.addEventListener("click", ()=>{
                editform.style.display = "none";
                editname.value = "";
            }, {once:true});

            //submit edit form
            editformbutton.addEventListener("click", ()=>{
                let items = JSON.parse(localStorage.getItem("key"));
                items[index] = new Task(editname.value);
                editname.value = "";
                localStorage.setItem("key", JSON.stringify(items));
                editForm.style.display = "none";
                VisualizeTasks();
            }, {once: true});

        })

        //delete task button
        img2.addEventListener("click", ()=>{
            let z = JSON.parse(localStorage.getItem("key"));
            z.splice(index, 1);
            localStorage.setItem("key", JSON.stringify(z));
            VisualizeTasks();
        });

        leftgroup.appendChild(groupName);
        leftgroup.appendChild(img1);
        leftgroup.appendChild(img2);
        
        list.appendChild(leftgroup);
    });


    //changin isSelected property of task_class and colors it accordingly
    let groupName = document.querySelectorAll(".group-name");
    groupName.forEach((element,index) => {
        element.addEventListener("click", ()=>{
            changeIsSelected(index);
            colorIsSelected();
        });
    });

}