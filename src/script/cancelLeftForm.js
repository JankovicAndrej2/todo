export function cancelLeftForm(){
    let name = document.querySelector("#name");
    let leftForm = document.querySelector(".left-form");

    name.value = "";
    leftForm.style.display = "none";
}