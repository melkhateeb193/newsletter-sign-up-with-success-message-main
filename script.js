let Button = document.getElementById('Button');
let validation = document.getElementById('validation');
let input = document.getElementById('input_One');
let targetEmail =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(targetEmail)
let main = document.getElementById('Main');
let box = document.getElementById('Box');
let span = document.getElementById('spanTwo');
let buttonTwo = document.getElementById('buttonTwo');

Button.addEventListener('click', (e)=>{
e.preventDefault();
const inputValue = input.value;
if (targetEmail.test(inputValue)) {
main.classList.add('d-none');
box.classList.replace('d-none','d-block');
span.innerHTML = inputValue;
}
else {
    input.style.backgroundColor="rosybrown";
    validation.classList.replace('d-none', 'd-block') 
setTimeout(() => {
    input.style.backgroundColor="";
    validation.classList.replace('d-block','d-none') 

}, 2000);
}

})

buttonTwo.addEventListener('click', ()=>{
box.classList.replace('d-block','d-none');
main.classList.remove('d-none');

})