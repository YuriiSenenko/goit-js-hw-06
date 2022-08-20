const refs = {
	formEl: document.querySelector('.login-form'),
	inputEmailEl: document.querySelector('input[type=email]'),
	inputPasswordEl: document.querySelector('input[type=password]'),
	buttonSubmitEl: document.querySelector('button[type=submit]'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const formElements = event.currentTarget.elements;

	const email = formElements.email.value;
	const password = formElements.password.value;

	if (email === '' || password === '') {
		return alert('Всі поля повинні бути заповнені!');
	}
	console.log({ email: email, password: password });
	refs.formEl.reset();
}
