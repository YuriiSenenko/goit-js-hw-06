const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector('#value');

let counterValue = 0;

plusBtn.addEventListener('click', () => {
	counterValue += 1;
	counterEl.textContent = counterValue;
});

minusBtn.addEventListener('click', () => {
	counterValue -= 1;
	counterEl.textContent = counterValue;
});
