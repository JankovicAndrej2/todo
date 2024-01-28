import "./styles/style.css";
import "./styles/normalize.css";
import { openLeftPlus } from "./script/openLeftPlus";

let leftPLusImage = document.querySelector(".left-plus-img");
leftPLusImage.addEventListener("click", ()=>{openLeftPlus()})