// console.log(document.title);
// document.title = 'I got changed'

// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('classone'));

// const element = document.querySelector('p')
// console.log(element);

// const element = document.querySelectorAll('p')
// console.log(element[0]);

// const element = document.querySelectorAll('#idone')
// console.log(element[0]);

// const element = document.querySelectorAll('.classone')
// console.log(element[0]);

// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am being changed by JS'

const myPElements = document.querySelectorAll('p')
myPElements.forEach((p) => p.textContent = 'I am being changed using loop in JS'
)

// adding new element
const myNewPara = document.createElement('p')
myNewPara.textContent = 'i am being added via js'
document.querySelector('body').appendChild(myNewPara)
//or
// var myh = document.createElement('h1')
// var tx = document.createTextNode('Hello')
// myh.appendChild(tx)
// document.querySelector('h1').appendChild(myh)


// button listener
document.querySelector('button').addEventListener('click', (event) => {
    console.log(event);
    event.target.textContent = 'I was clicked'
})


// track input form
document.querySelector('#myform').addEventListener('input', (event) => {
    console.log(event.target.value);
})


