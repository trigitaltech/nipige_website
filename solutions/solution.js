let optionsList = document.querySelectorAll(".options-list > .list");
let leftOption = document.querySelectorAll(".option");

const hideOptions = () =>{
    leftOption.forEach(e => e.classList.add("hidden"));
    optionsList.forEach(e => e.firstElementChild.classList.remove("activeOption"));

}

optionsList.forEach(element => {
    element.addEventListener("click", (e) => {
        // get the target element name, split and make it lowerCase
        const name = e.target.innerHTML.split(" ").join("-").toLowerCase(); 
        // hide all the right-side options
        hideOptions(); 

        // toggle the corret option
        document.querySelector(`.${name}`).classList.toggle("hidden"); 
        e.target.classList.add("activeOption"); // activate current button.
    })
});