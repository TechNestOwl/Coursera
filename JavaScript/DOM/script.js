
// using prompt to capture user input and storing it in 'answer'
let answer = prompt("What is your name?");



// while quick, this is not the most efficient approach of displaying user input
// especially in more complex scenarios.
if( typeof (answer) === 'string'){
    let h1 = document.createElement('h1');

    h1.innerText = answer;

    document.body.innerText = '';

    document.body.appendChild(h1);
};



// Forms

let h2 = document.createElement('h2');
h2.innerText = 'User input goes here';

let input = document.createElement('input');

input.setAttribute('type','text');

document.body.innerText = '';

document.body.appendChild(h2);
document.body.appendChild(input)

input.addEventListener('change', ()=> {
    h2.innerText = input.value;
});