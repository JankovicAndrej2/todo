import { VisualizeTasks } from "./VisualizeTasks";
import { addNewTask } from "./addNewTask";
import { Task } from "./task_class";

export function openLeftPlus(){
    let form = document.querySelector(".left-form");
    form.style.display = "block";


    let closeLeftForm = document.querySelector(".close-left-form");
    let name = document.querySelector("#name");
    closeLeftForm.addEventListener("click", ()=>{
        form.style.display = "none";
        name.value = "";
    }, {once: true});

    let submitLeftForm = document.querySelector(".submit-left-form");
    submitLeftForm.addEventListener("click", ()=>{
        addNewTask(new Task(name.value));
        name.value = "";
        form.style.display = "none";
        VisualizeTasks();
    }, {once: true});



}