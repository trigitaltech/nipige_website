// p tags
const options = document.querySelectorAll(".left-bar > p");
const elements = document.querySelectorAll(".right-tab > div.card");

options.forEach(element => {
    element.addEventListener("click", e => {
        classname = e.target.className.split("-");
        classname.pop();

        // Make all hidden
        
        hide();

        elem = document.querySelector(`.right-tab > div.${classname}-card`);
        console.log("Matchin ", elem);
        elem.classList.remove("hidden");
    })
})


const hide = () => {
    elements.forEach(e => e.classList.add("hidden"));
}