let addbtn = document.querySelector(".add-project");
let addtask = document.querySelector(".add-task");
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".form-close");


addbtn.addEventListener("click", showModal);
closeButton.addEventListener("click", hideModal);

function showModal() {
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}