export function addNewTask(x){
    let a = [];
    if(localStorage.getItem("key") != undefined)
    {
        a = JSON.parse(localStorage.getItem("key"));
    }

    a.push(x);
    localStorage.setItem("key", JSON.stringify(a));
}