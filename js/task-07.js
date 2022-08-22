const refs = {
	inputEl: document.querySelector('#font-size-control'),
	spanEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('mousemove', onInputChange);

refs.spanEl.style.fontSize = '56px';
function onInputChange(event) {
	refs.spanEl.style.fontSize = event.currentTarget.value + 'px';
}
