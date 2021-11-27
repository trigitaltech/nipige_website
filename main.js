// let modal = document.getElementById('contact-modal'),
let modal = document.getElementsByClassName("modal")[0];
let openModal = document.querySelector('.collapse > div');
let closeModal = document.querySelector('#modal-header > span');

let closebtn = document.querySelector(".closeit");

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