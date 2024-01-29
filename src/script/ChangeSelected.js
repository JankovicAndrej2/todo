export function changeIsSelected(i){
    let array = JSON.parse(localStorage.getItem("key"));

    array.forEach(element => {
        element.isSelected = false;
    });
    array[i].isSelected = true;
    localStorage.setItem("key", JSON.stringify(array));
}