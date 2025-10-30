

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


const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const closePopup = document.getElementById('close-popup');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    popupMessage.textContent = "✅ Message sent successfully!";
    popup.classList.add('show');
    form.reset();
  } else {
    popupMessage.textContent = "❌ Oops! Something went wrong. Please try again.";
    popup.classList.add('show');
  }
});

closePopup.addEventListener('click', () => {
  popup.classList.remove('show');
});




