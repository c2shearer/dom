/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

// can either use innerHTML or textContent

function replaceText(elem, str) {
    elem.innerHTML = str;
}

function addTextTo(elem, str) {
    elem.innerHTML += str;
}

function moreBears() {
    let a = document.querySelector('#animals');
    a.src = "http://placebear.com/400/200";
    a.alt = 'A bear.';
    a.title = 'A BEAR!';
}

function setId(elem, str) {
    elem.id = str;
    return elem;
}

function setClass(elem, str) {
    elem.className = str;
    return elem;
}

function addAClass(elem, str) {
    elem.className += ` ${str}`;
    return elem;
}

function removeAClass(elem, str) {
    elem.classList.remove(str);
    return elem;
}

function newElement(name) {
    return document.createElement(name);
}

function findElementById(id) {
    return document.getElementById(id);
}

function findElementsByQuery(query) {
    return document.querySelectorAll(query);
}

function reverseList(query) {
    //some stuff here 
}