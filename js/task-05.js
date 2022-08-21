const refs = {
	input: document.querySelector('#name-input'),
	textLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
	event.currentTarget.value !== ''
		? (refs.textLabel.textContent = event.currentTarget.value)
		: (refs.textLabel.textContent = 'Anonymous');
}
