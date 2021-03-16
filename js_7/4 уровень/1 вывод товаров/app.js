"use strict";

const products = {
    phones: [
        {
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [
        {
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [
        {
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

let btn = document.querySelectorAll('button');
let product = null;
let catalog = document.querySelector('.products');
let productMark = null;
btn.forEach(function(element) {
    element.addEventListener('click', function() {
        clickHandler(element);
    });
});

/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function clickHandler(element) {
    //вам нужно очищать содержимое .products
    //в showCategory надо передать строку с типом категории, тип берите
    //из атрибута data-type у кнопки, по которой кликнули.
    catalog.innerHTML = '';
    let category = element.getAttribute('data-type');
    showCategory(category);
}

/**
 * Функция берет товары (объекты) из соответствующего массива phones,
 * tablets или tv. Генерирует разметку, используя getProductMarkup
 * и вставляет в .products
 * @param {string} category сюда должно прилетать значение атрибута data-type у кнопки,
 * по которой кликнули.
 */
function showCategory(category) {
    if (category == "phones") {
        for (let i = 0; i < 3; i++) {
            product = products.phones[i];
            getProductMarkup(product);
            catalog.insertAdjacentHTML('beforeend', productMark);
        }       
    }
    if (category == "tablets") {
        for (let i = 0; i < 2; i++) {
            product = products.tablets[i];
            getProductMarkup(product);
            catalog.insertAdjacentHTML('beforeend', productMark);
        }        
    }
    if (category == "tv") {        
        for (let i = 0; i < 4; i++) {
            product = products.tv[i];
            getProductMarkup(product);
            catalog.insertAdjacentHTML('beforeend', productMark);
        }
    }
}

/**
 * @param {Object} product объект из массива phones, tablets или tv.
 * @param {number} product.id id продукта
 * @param {string} product.name название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.imageUrl путь до картинки товара
 * @returns {string} html-разметка для товара по аналогии из комментария
 * в верху этого файла.
 */
function getProductMarkup(product) {
productMark = `
<div class="product" id="${product.id}">
    <div>${product.name}</div>
    <img src="${product.imageUrl}" alt="">
    <div>${product.price}</div>
    <a href="https://example.com/producs/${product.id}">Подробнее</a>
</div>
`

/* 
Разметка товара:
*/
}
