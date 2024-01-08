import { cancelLeftForm } from "./cancelLeftForm.js";
import {submitLeftForm} from "./submitLeftForm.js";
export function openForm()
{
    let leftForm = document.querySelector(".left-form");
    leftForm.style.display = "block";

    let cancelButton = document.querySelector(".close-left-form");
    cancelButton.addEventListener("click", cancelLeftForm);

    let submitButton = document.querySelector(".submit-left-form");
    submitButton.addEventListener("click", submitLeftForm);



}
