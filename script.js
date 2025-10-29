

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


const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                alert('Message sent successfully!');
                form.reset(); 
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    });
