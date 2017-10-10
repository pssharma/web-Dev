//this is th initialization file for the app

console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];  //because first two would be args of the app
console.log('Command: ', command);
//console.log(process.argv);
//console.log(argv);

if(command === 'add'){
    console.log('Adding new note');
    notes.addNote(argv.title,argv.body);
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'remove'){
    notes.remove(argv.title);
}else if(command === 'read'){
    notes.getNote(argv.title);
}else{
    console.log('command not recognized');
}







