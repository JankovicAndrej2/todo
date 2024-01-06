
//function is used to check if user wants to edit or add new item on list, so submit button is save or change
let leftPlus = document.querySelector(".left-plus-img");
let submitLeftForm = document.querySelector(".submit-left-form");

leftPlus.addEventListener("click",()=>{
    submitLeftForm.textContent = "Save";
    submitLeftForm.classList.add("submit-left-form");
    submitLeftForm.classList.remove("change-left-form");
});



