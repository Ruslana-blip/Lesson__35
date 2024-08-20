'use strict';
/* 1. Є HTML-форма:
<form name="form">
  <input type="text" name="input1">
  <input type="text" name="input2">
  <button name="btn">Swap</button>
</form>
Після натискання на кнопку, виконайте обмін вмістом між двома інпутами. 
Під час повторного натискання знову змінити вміст інпутів */
/* const form = document.forms.form;
const input1 = form.input1;
const input2 = form.input2;
const changeInfo = e => {
	[input1.value, input2.value] = [input2.value, input1.value];
	e.preventDefault();
};
form.addEventListener('submit', changeInfo); */

/* 2. Є HTML-форма:
<form name="form">
  <input type="text" name="input">
  <button name="lock">Lock</button>
  <button name="unlock">Unlock</button>
</form>
При натисканні Заблокувати кнопка блокує інпут за допомогою атрибута disabled, а інша розблоковує.  */
/* const form = document.forms.form;
const input = form.input;
const inputDisabled = e => {
	if (e.target.closest('button[name="lock"]')) {
		input.setAttribute('disabled', 'true');
	}
	if (
		e.target.closest('button[name="unlock"]') &&
		input.hasAttribute('disabled')
	) {
		input.removeAttribute('disabled');
	}
	e.preventDefault();
};
form.lock.addEventListener('click', inputDisabled);
form.unlock.addEventListener('click', inputDisabled); */

/* 3. Є HTML-форма:
<form name="form">
  <input type="text" name="input">
  <a href="https://www.youtube.com/watch?v=OtJkXuqyjkk&list=PLRD56Ql8zouzzCQWIwysCdq8UvC6LmCYh&index=16">Click here</a>
</form>
Напишіть код, який під час натискання на лінк заповнюватиме інпут значенням з атрибута href.
! Розмітку не можна. */
/* const form = document.forms.form;
const valueHref = document.querySelector('a');
const clickOnLick = e => {
	form.input.value = valueHref.href;
	e.preventDefault();
};
valueHref.addEventListener('click', clickOnLick); */

/* 4. Є HTML-форма:
<form name="form">
  <textarea name="textarea"></textarea>
  <button name="btn">Statistics</button>
</form>
<div>
  Spaces: 10
  Consonants: 5
  Vowels: 4
</div>
Напишіть скрипт, який під час натискання на кнопку отримуватиме текст із багаторядкового 
текстового поля, підраховуватиме статистику (приклад вище) і результат виводитиме в div  */
/* const form = document.forms.form;
const textArea = form.elements.textarea;
const result = document.querySelector('.result');
const calculateChar = e => {
	let spaces = 0;
	let consonants = 0;
	let vowels = 0;
	const userInput = textArea.value;
	for (let i = 0; i < userInput.length; i++) {
		if (userInput[i] === ' ') {
			spaces++;
		} else if ('aeiou'.includes(userInput[i].toLowerCase())) {
			vowels++;
		} else if (/[b-df-hj-np-tv-z]/i.test(userInput[i].toLowerCase())) {
			consonants++;
		}
	}
	updateResult(spaces, consonants, vowels);
	e.preventDefault();
};
const updateResult = (spaces, consonants, vowels) =>
	(result.innerHTML = `Spaces: ${spaces} <br> Consonants: ${consonants} <br> Vowels: ${vowels}`);
form.btn.addEventListener('click', calculateChar); */

/* 5. Є HTML-форма:
<form name="form">
  <input type="file" name="file">
  <button name="btn">Upload image</button>
</form>
Ваше завдання - завантажити картинку і по кліку на кнопку вивести її в HTML.
 Якщо картинка не вибрана - вивести повідомлення: "You should upload an image". 
 Також має бути кнопка видалення картинки. Гарно стилізувати (згадаєте, що таке css)
const fileUrl = URL.createObjectURL(file) */

// *****
/* const save = () => {
	const file = fileInput.files[0];
	if (file) {
		img.src = URL.createObjectURL(file);
		localStorage.setItem('myImage', img.src);
	}
};
img.src = localStorage.getItem('myImage');
fileInput.addEventListener('change', save); */

/* const form = document.forms.form;
const btn = form.btn;
const fileInput = form.file;

const img = document.createElement('img');
const imgContainer = document.createElement('div');
imgContainer.className = 'img__container';
imgContainer.appendChild(img);
fileInput.insertAdjacentElement('beforebegin', imgContainer);

const savePhoto = e => {
	const notification = document.getElementById('notification');
	const file = fileInput.files[0];
	if (file) {
		img.setAttribute('src', URL.createObjectURL(file));
		if (notification) {
			notification.remove();
		}
	} else {
		if (!notification) {
			form.insertAdjacentHTML(
				'beforeend',
				'<div id="notification"><span>You should upload an image</span></div>'
			);
		}
	}
	e.preventDefault();
};

form.insertAdjacentHTML(
	'beforeend',
	'<button name="delete" class="btnDelete">Delete image</button>'
);
const btnDelete = document.querySelector('.btnDelete');
const deleteButton = () => {
	if (img.hasAttribute('src')) {
		img.removeAttribute('src');
	}
};

form.btn.addEventListener('click', savePhoto);
btnDelete.addEventListener('click', deleteButton); */

// 6. Завдання зі статті: https://uk.javascript.info/form-elements
// Додайте нову опцію до елемента `<select>`
// Використовуючи JavaScript:
// Виведіть значення та текст обраної опції.
// Додайте опцію: <option value="classic">Класика</option>.
// Зробіть її обраною.
/* const selectCollection = genres.options;
const newOption = new Option('Класика', 'classic');
genres.append(newOption);
newOption.selected = true; */

// 7. Завдання зі статті: https://uk.javascript.info/focus-blur
//7.1 div, який можна відредагувати
/* Створіть <div>, який при кліканні на ньому, перетворюється на <textarea>.
Текстова область дозволяє редагувати HTML всередині <div>.
Коли користувач натискає Enter або <textarea> втрачає фокус, тоді знову з’являється <div>, 
який містить в собі HTML введений в <textarea>. */

/* let activeDiv = document.querySelector('.view');

activeDiv.addEventListener('focus', e => {
	const textArea = document.createElement('textarea');
	textArea.textContent = activeDiv.textContent;
	activeDiv.replaceWith(textArea);
	textArea.focus();

	textArea.addEventListener('keydown', event => {
		if (event.key === 'Enter') {
			textArea.blur();
		}
	});

	textArea.addEventListener('blur', () => {
		textArea.replaceWith(activeDiv);
		activeDiv.textContent = textArea.value;
	});
});
 */

/* 7.2Редагувати TD по кліку
Створіть таблицю, клітини якої можна було б редагувати клікнувши на них.
По кліку – в клітині з’являється <textarea>, в якій можна редагувати вміст в форматі HTML.
Висота та ширина клітини при цьому не змінюється.
Кнопки ЗГОДА та ВІДМІНА з’являються внизу клітини щоб підтвердити/відмінити зміни.
Одночасно можна редагувати лише одну клітину. Поки <td> в “режимі редагування”, кліки на інших клітинах ігноруються.
В талиці може бути багато клітин. Використовуйте делегування поді */
/* const table = document.querySelector('table');

const changeInTable = e => {
	const textarea = document.createElement('textarea');
	let activeColumn = e.target.closest('td');
	const currentActiveColumn = document.querySelector('.td-active');
	if (currentActiveColumn && !activeColumn.classList.contains('td-active')) {
		return;
	}
	if (activeColumn) {
		if (activeColumn.classList.contains('td-active')) {
			return;
		}

		textarea.textContent = activeColumn.innerHTML;
		activeColumn.innerHTML = '';
		activeColumn.append(textarea);

		activeColumn.insertAdjacentHTML(
			'beforeend',
			'<div class="td-btns"><button class="btn-true btn">ЗГОДА</button><button class="btn-false btn">ВІДМІНА</button></div>'
		);
		activeColumn.style.padding = '0px';
		textarea.focus();

		textarea.parentElement.classList.add('td-active');

		activeColumn.querySelector('.btn-true').addEventListener('click', () => {
			activeColumn.innerHTML = textarea.value;
			activeColumn.classList.remove('td-active');
			activeColumn.style.padding = '';
		});
		activeColumn.querySelector('.btn-false').addEventListener('click', () => {
			activeColumn.innerHTML = textarea.textContent;
			activeColumn.classList.remove('td-active');
			activeColumn.style.padding = '';
		});
	}
};
table.addEventListener('click', changeInTable); */

/* 7. 3 Миша, керована з клавіатури
Встановіть фокус на мишу. Використовуйте стрілки на клавіатурі, щоб рухати нею:
P.S. Не додавайте обробники подій нікуди окрім елементу #mouse.
P.P.S. Не змінюйте HTML/CSS, рішення повинно бути універсальним і працювати з будь-яким елементом. */
/* const mouse = document.querySelector('#mouse');
const moveMouse = e => {
	let a = mouse.getBoundingClientRect();
	if (e.code === 'ArrowDown') {
		mouse.style.top = a.top + window.scrollY + a.height + 'px';
	} else if (e.code === 'ArrowRight') {
		mouse.style.left = a.left + window.scrollX + a.width + 'px';
	} else if (e.code === 'ArrowUp') {
		mouse.style.top = a.top + window.scrollY - a.height + 'px';
	} else if (e.code === 'ArrowLeft') {
		mouse.style.left = a.left + window.scrollX - a.width + 'px';
	}
};
mouse.addEventListener('keydown', moveMouse);
mouse.addEventListener('focusin', () => mouse.classList.add('focused'));
mouse.addEventListener('focusout', () => mouse.classList.remove('focused')); */

// 8. Калькулятор депозиту
// initial: початкова грошова сума
// interest: напр. 0,05 означає 5% на рік
// years: скільки років чекати
// let result = Math.round(initial * (1 + interest) ** years);
/* const calculator = document.forms.calculator;
const greenDiv = document.querySelector('#height-after');
const select = document.querySelector('#months');
const depositCalculate = () => {
	const depositValue = calculator.money.value;
	const yearValue = select.options[select.selectedIndex].value / 12;
	const persentValue = calculator.interest.value / 100;
	let heightGreenDiagram = depositValue * (1 + persentValue) ** yearValue;

	greenDiv.style.height = heightGreenDiagram / 100 + 'px';
};
calculator.addEventListener('click', depositCalculate); */

/* 9.
Форма повинна знаходитися в центрі вікна.
Форма – це модальне вікно. Іншими словами, жодна взаємодія з іншою частиною сторінки неможлива, 
поки користувач не закриє її.
Коли відображається форма, фокус має бути всередині <input> для користувача.
Клавіші Tab/Shift+Tab повинні зміщувати фокус між полями форми, не дозволяючи йому залишати форму і переходити 
на інші елементи сторінки. */
/* const form = document.forms;
form[1];
const input = document.querySelector('input[name="text"]');
form[1].addEventListener('focusin', () => form[1].classList.add('focused'));
form[1].addEventListener('focusout', () => form[1].classList.remove('focused')); */
