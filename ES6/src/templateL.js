"use strict"
let name = 'ps';
let template =
    `<h1>Hello, $(name)</h1>
<p>This is a simple template</p>`;    //back tick not apostrophe

document.getElementById('template').innerHTML = template;