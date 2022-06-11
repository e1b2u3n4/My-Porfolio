button = document.querySelector('button');

button.addEventListener('click', ()=> {
  alert('Wow! Thank you for hiring me  ')
  button.disabled="true";
  button.innerText = "Hired";
  
});