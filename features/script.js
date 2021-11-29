// p tags
const options = document.querySelectorAll(".left-bar > p");
const elements = document.querySelectorAll(".right-tab > div.card");

options.forEach(element => {
    element.addEventListener("click", e => {
        classname = e.target.className.split("-");
        classname.pop();

        // Make all hidden
        hide();
        e.target.classList.add("active");
        elem = document.querySelector(`.right-tab > div.${classname}-card`);
        elem.classList.toggle("hidden");
        
    })
})


const hide = () => {
    elements.forEach(e => {
        e.classList.add("hidden");
    });

    options.forEach(e => {
        e.classList.remove("active");
    })
}