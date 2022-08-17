const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const vegetablesListEl = document.querySelector('#ingredients');

let el = [];

const createElements = ingredients.map((ingredient) => {
	const newElement = document.createElement('li');
	newElement.textContent = ingredient;
	newElement.classList.add('item');
	el.push(newElement);
});
// console.log(el);
vegetablesListEl.append(...el);
