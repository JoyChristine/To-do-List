let addbtn = document.querySelector(".add-project");
let addtask = document.querySelector(".add-task");
let modal = document.querySelector(".modal");
let modal2 = document.querySelector(".modal2");
let closeButton = document.querySelector(".form-close");
let closetask = document.querySelector(".task-close");


addbtn.addEventListener("click", showModal);
addtask.addEventListener("click", showModal2);
closeButton.addEventListener("click", hideModal);
closetask.addEventListener("click", hideModal2);

function showModal() {
    modal.style.display = "block";
}

function showModal2() {
    modal2.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}

function hideModal2() {
    modal2.style.display = "none";
}