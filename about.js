console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('alert');
}


let form = document.querySelector('form#contact');

form.addEventListener('alert', handleSubmit);
document.querySelector('evt').addEventListener('mouseover',alert)