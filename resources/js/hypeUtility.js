

// console.log(Document.prototype); show all document properties and method
/*
& Purple Comment
! Red Comment
^ Yellow Comment
? Blue Comment
* Green Comment
~ Violet Comment
TODO Orange Comment
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isaN(value) {
    return !isNaN(value)
}

function addClass(element, value) {
    value = String(value);
    if (Array.isArray(element)) {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.add(value)
        }
    } else {
        element.classList.add(value)
    }
}

function hypeCreateElement({ type = 'div', id = '', class: classInput = '', innerHTML = '', disabled = false } = {}) {
    let element = document.createElement(`${type}`);
    element.id = id;
    element.className = Array.isArray(classInput) ? classInput.join(' ') : classInput;
    element.innerHTML = innerHTML;
    element.disabled = disabled;
}