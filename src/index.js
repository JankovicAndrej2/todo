import "./styles/style.css";
import "./styles/normalize.css";

import "./script/closeLeftForm.js";
import "./script/class.js";
import "./script/submitLeftForm.js";
import "./script/VizArray.js";
import "./script/leftPlusImg.js";

import { VizArray } from "./script/VizArray.js";
import { closeButtonEventLisener } from "./script/closeLeftForm.js";
import { submitLeftFormEventLisener } from "./script/submitLeftForm.js";



//Visualisation of left form for every refresh
addEventListener("load", ()=>{
    VizArray();
});


//Event lisener for opening left form and then adding event lisener for close and submit
let leftPlus = document.querySelector(".left-plus-img");
let leftForm = document.querySelector(".left-form");

leftPlus.addEventListener("click", ()=>{
    leftForm.style.display = "block";
    closeButtonEventLisener();
    submitLeftFormEventLisener();
});





