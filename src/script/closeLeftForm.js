export function closeButtonEventLisener(){
    let leftForm = document.querySelector(".left-form");
    let closeButton = document.querySelector(".close-left-form");
    
    closeButton.addEventListener("click", ()=>{
        leftForm.style.display = "none";
    });
}

