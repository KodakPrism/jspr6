'use strict'

// зд1

console.log(document.getElementById('USERS'));

console.log(document.querySelector('ul'));

console.log(document.querySelector('ul > li:last-child'));

// зд2

const liElements = document.querySelectorAll('li');
liElements.forEach(li => {
  li.classList.add('list-item');
});

// зд3

let number = prompt('Введите число', 10);
for(let i = 0; i < number; i++){
    document.body.innerHTML += `<div>Блок ${i +1}</div>`
}

// зд4

let body = document.querySelector('body');
let form = document.createElement('form');
let InputName = document.createElement('input');
InputName.placeholder = 'Имя';
let InputMail = document.createElement('input');
InputMail.placeholder = 'Email';
let btn = document.createElement('button');
btn.innerHTML = 'Отправить email'
body.append(form);
form.append(InputMail, InputName, btn);
