// var obj = {
// name: 'PS'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);

// var personString = '{"name":"PS","age":25}';
// var personObj = JSON.parse(personString);
// console.log(personObj);

const fs = require('fs');

var originalNote = {
    title: 'Secret tile',
    body: 'Secret body'
};

var noteStr = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',noteStr);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);