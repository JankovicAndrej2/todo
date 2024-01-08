import "./styles/style.css";
import "./styles/normalize.css";



import { openForm } from "./script/openForm.js";
import { VisualizeArray } from "./script/vizualizeArray.js";

let LeftPlus = document.querySelector(".left-plus-img");

VisualizeArray();
LeftPlus.addEventListener("click", openForm);
