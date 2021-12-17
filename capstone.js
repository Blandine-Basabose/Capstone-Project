
//ADD ARTICLE
const form = document.querySelector('.form');

const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', ()=>{
  form.classList.add('active');
  // form.style.display = 'block';
  console.log(form);
});
//DELETE ARTICLE
var btns = document.querySelectorAll(".delete");
Array.from(btns).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const del = e.target.parentElement;
    del.parentNode.removeChild(del);
  });
});
// //UPDATE ARTICLE
// const blogLists= document.querySelector('.blog');

// var updateBtn= document.querySelector('.update');
// updateBtn.addEventListener('click', () =>{
//   blogLists.classList.toggle('active');
// });
