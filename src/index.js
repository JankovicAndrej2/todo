import "./styles/style.css";
import "./styles/normalize.css";
import { openLeftPlus } from "./script/openLeftPlus";
import { VisualizeTasks } from "./script/VisualizeTasks";
import { defaultIsSelected } from "./script/defaultIsSelected";

defaultIsSelected();
VisualizeTasks();

let leftPLusImage = document.querySelector(".left-plus-img");
leftPLusImage.addEventListener("click", ()=>{openLeftPlus()});