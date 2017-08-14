console.log('Loaded!');



// Changing html element values using javascript

var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

// Move madi

var img = document.getElementById('madi');



img.onclick = function () {
    img.style.marginLeft = '200px';
};