export function colorIsSelected() {
    let array = JSON.parse(localStorage.getItem("key"));
    let groupName = document.querySelectorAll(".group-name");

    array.forEach((element,index) => {
        if(element.isSelected){
            groupName[index].style.backgroundColor = "var(--1-green)";

        }
        else{
            groupName[index].style.backgroundColor = "var(--4-green)";
    
        }
        
    });
}