console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has successfully been submited!');
}
const catPic = document.querySelector('#picture')

function compliment(evt) {
	evt.preventDefault()


	alert("You're so nice!")
}

catPic.addEventListener('mouseover', compliment)
//come back to make a mouseover for the cat picture(part 2)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
