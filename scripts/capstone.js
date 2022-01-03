//ADD ARTICLE
// const addArticle = document.querySelector(".form");
// const addBtn = document.querySelector("#add-btn");
// const updateBtn = document.querySelector(".update");
// addBtn.addEventListener("click", () => {
//   addArticle.classList.toggle("form-display");
//   console.log('success')
// });

//Humberger

const menuItems= document.querySelector('.navbar-items');
const humberger = document.querySelector('.navbar-menu');
humberger.addEventListener('click', () => {
menuItems.classList.toggle('navbar-active');
});


