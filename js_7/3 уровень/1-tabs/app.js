'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

let links = document.querySelectorAll('.nav-link');
let linkActive = document.querySelector('.active');
let text = document.querySelector('.text');
links.forEach(function(link){
	clickHandler(link);
});


/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например 
с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, 
    и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/


/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(link) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
   link.addEventListener('click', function(event) {
		changeActiveClass(link);
   		changeText(link);
	});   
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(link) {
		linkActive.classList.remove('active');
		link.classList.add('active');
		linkActive = link;  
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(link) {
	if (link.textContent == "Link 1") {
		text.innerHTML = texts.text1;
	}
    if (link.textContent == "Link 2") {
		text.innerHTML = texts.text2;
	}
	if (link.textContent == "Link 3") {
		text.innerHTML = texts.text3;
	}
}