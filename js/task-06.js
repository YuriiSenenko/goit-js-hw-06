const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
	const inpValue = event.currentTarget;
	const dataLength = Number(inpValue.dataset.length);

	if (inpValue.value.length === dataLength) {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid');
	} else {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid');
	}

	// console.log(event.currentTarget.value);
	// console.log(event.currentTarget.value.length);
}
