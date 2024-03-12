/*
a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container. 
*/

const para1 = document.createElement('p');
para1.textContent = "Hey I'm red!";
para1.style.color = 'red';
container.appendChild(para1);

const heading1 = document.createElement('h3');
heading1.textContent = "I'm a blue h3";
heading1.style.color = 'blue';
container.appendChild(heading1);

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.border = '1px solid black';
div.style.width = '500px';
div.style.height = '500px';
container.appendChild(div)

const heading2 = document.createElement('h1');
heading2.textContent = "I'm a div";
div.appendChild(heading2);

const para2 = document.createElement('p');
para2.textContent = "ME TOO!";
div.appendChild(para2);

/* creating a button */
const btn = document.querySelector('#btn'); /* 2nd method */
btn.onclick = () => alert("Hello World!");

const btn = document.querySelector('#btn'); /* 3thd method (the best one) */
btn.addEventListener('click', () => {
    alert("Hello World!");
});


/* the 3 methods with functions */
function alertFunction() {       
    alert("YAY! YOU DID IT!");
} /* 1st method */

function alertFunction() {
    alert ("YAY! YOU DID IT!");
}
const btn = document.querySelector('#btn'); /* 2nd and 3thd method */

btn.onclick = alertFunction; /* 2nd method */

btn.addEventListener('click', alertFunction); /* 3thd method */

btn.addEventListener('click', function (e) {
    console.log(e);
}); /* we can access all three methods */

/* function(e) callback drom addEventListener */

btn.addEventListener('click', function (e) {
    console.log(e.target);

    e.target.style.background = 'blue';
});
n