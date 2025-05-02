

const mymenu = document.querySelector('.menu');
const vemenu = document.querySelector('.vertical-menu');

mymenu.addEventListener('click', () => {
    vemenu.classList.toggle('active');
}
);

function chang(x) {
    x.classList.toggle("change");
  }







  


  const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});






// const animation = document.querySelectorAll('.fill');

// const observer = new IntersectionObserver( (entries) => {

//     entries.forEach((entry) => {

//         if(entry.isIntersecting){
//           entry.target.classList.add('fillin');
//         }else{
//             entry.target.classList.remove('fillin');
//         }
//     })
// },{
//     threshold: 0.5
// });

// for(let i = 0; i < animation.length; i++){
//     const element = animation[i];
//     observer.observe(element);
// }
