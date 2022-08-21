function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
console.log(body.style);

changeColorButton.addEventListener('click', () => {
	spanEl.textContent = getRandomHexColor();
	console.log(spanEl.textContent);
	body.setAttribute('style', 'background-color:' + spanEl.textContent);
});
