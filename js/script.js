'use strict';

// const constantVariable = 100;
// let  letVariable = 100;

// console.log(letVariable = 200);
// console.log(letVariable);

// //ternary operator
// if(letVariable >=300){
//     console.log(true);
// } else {
//     console.log(false);
// }

// //logical operator
// /* 
// AND &&
// OR ||
// NOT !
// */

// // comparison operators
// /* 
// >= Greater than or equal to
// == equality operator
// .. 
// */

// //condition ? truthy value : falsy value
// const variableOne = letVariable >= 100 ? console.log('true') : console.log('false');

// if(true) console.log('hi');

// //a function declaration
// function myFunction (){
//     return true;
// }

// // a function expression
// let functionExpresion = function myFunctionTwo() {
//     return true;
// }

// //arrow function 
// const arrowFunction = parameterOne => { return true };

// document.getElementById('header').innerHTML = 'hello'

// //ES6 methods of query selection and changing content
// document.querySelector('#header').textContent = 'hey';

// // let randomNumber = Math.random () * 100
// // console.log(randomNumber);

// let randomNumber = Math.trunc(Math.random () * 100)
// console.log(randomNumber);

// //object methods

// // let objectMethods = {
// //     firstName: 'Natalia',
// //     lastName: 'Ramirez',
// //     pets: ['hera','jess']
// //     gretting: function (){
// //         console.log('hello there');
        
// //     }
// // }
// // console.log(objectMethods.greeting());

//gather our references
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);


//create open and close function 
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log('test');
    
}

//loop through the button and add an event listener to each
for (let i=0;i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

//create triggers
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e)  {
    if(e.key === 'Escape' && !modal.classList.contains('hidden') ) {
        closeModal();
    }

});