const refs = {
	input: document.querySelector('#name-input'),
	textLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
	refs.textLabel.textContent = event.currentTarget.value;
}
