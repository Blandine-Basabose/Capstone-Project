// const link = document.querySelector('#home a');
// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('The navigation is:',e.target.textContent,'prevented');

// })
// const hamburger = document.querySelector("#check");
// const navBar = document.querySelector("nav");
// hamburger.addEventListener("click", ()=>{
//    hamburger.classList.toggle("active");
//    navBar.classList.toggle("active");
// })


// const userName = document.querySelector('.username');
// const passWord = document.querySelector('.password');
// const button = document.querySelector('.loginbtn');

// button.addEventListener('click', ()=>{
//  if(document.querySelector('.username').value==''){
//      alert("Username and password required")
//  }else{
//     console.log(userName.value)
//     console.log(passWord.value)
//  }

//     });
  //.............................  
//Learning purporses...
  //......................
   //const wrap = document.querySelector('.blog-lists');
//wrap.innerHTML= '<h2>Blogs and more blogs...</h2>';
//wrap.innerHTML +='<p>Blandi you will once be proud of yourself</p>';
// Array.from(wrap).forEach(function(e){
// e.textContent +='(Blandine)';
// e.style.color = 'yellow';
// });

// const banner = document.querySelector('.left');

// const cloneBarner = banner.cloneNode(true);
// console.log(cloneBarner);
//.....................
//PREVENT DEFAULTS behavior

const link =document.querySelectorAll('.icons a');
console.log(link);
Array.from(link).forEach(function(links){
  links.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Navigation to', e.target.textContent,'was prevented');
  });
});

// function validateForm() {
//   let x = document.forms["myLogin"]["email"].value;
//   if (x == "") {
//     alert("email must be filled out");
//     return false;
//   }
// }