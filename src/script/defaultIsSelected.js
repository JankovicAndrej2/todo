export function defaultIsSelected(){
    let array = JSON.parse(localStorage.getItem("key"));
    array.forEach(element => {
        element.isSelected = false;
    });
    localStorage.setItem("key", JSON.stringify(array));
}