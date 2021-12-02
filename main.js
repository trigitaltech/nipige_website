// let modal = document.getElementById('contact-modal'),
let modal = document.getElementsByClassName("modal")[0];
let openModal = document.querySelector('#contactus > button');
let closeModal = document.querySelector('.close');

openModal.addEventListener('click', function (event) {
    event.preventDefault();

    modal.style.display = 'block';
})

closeModal.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = "none";
})

window.addEventListener('click', function (e) {
    if (e.target == modal) {
        //  modal.style.display = 'none';
    }

})


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


 function clickClickHandler(){
     console.log("clicked");
     document.getElementById("#toggleMobileMenu").style.display="block";
     }

   function responsive_menu(){
 var e = document.getElementById('menu_small');
 if(e.className === 'menu-item'){
    e.className += " responsive";
 }else{
     e.className === 'menu-item';
 }
   }  


    //  For second page
    const optionsList = document.querySelectorAll(".options-list > div.list");
    const rightOptions = document.querySelectorAll(".option");
    // console.log(rightOptions[0].firstElementChild.getAttribute("src"))
    const hideOptions = () => {
        rightOptions.forEach(e => e.classList.add("hidden"));
        optionsList.forEach(e => e.firstElementChild.classList.remove("activeOption"));
    }
    optionsList.forEach(element => {
        element.addEventListener("click", (e) => {
            const name = e.target.innerHTML.split(" ").join("-").toLowerCase();
            hideOptions();

            document.querySelector(`.${name}`).classList.toggle("hidden");
            e.target.classList.add("activeOption");
        })
    });

    