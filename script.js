

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


