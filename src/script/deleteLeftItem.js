import { VisualizeArray } from "./vizualizeArray.js";

export function deleteLeftItem(i){
    let array = JSON.parse(localStorage.getItem("key"));

    array.splice(i,1);

    localStorage.setItem("key", JSON.stringify(array));

    VisualizeArray();
}