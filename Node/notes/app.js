//this is th initialization file for the app
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
var titleOptions ={
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
var bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const notes = require('./notes.js');

const argv = yargs
.command('add','Add anew note',{
title:titleOptions,
body:bodyOptions
})
.command('list','List all notes')
.command('read','Read a note',{
    title:titleOptions
})
.command('remove','Removes a note',{
    title:titleOptions
})
.help()
.argv;

var command = argv._[0];  //because first two would be args of the app


if(command === 'add'){
    console.log('Adding new note');
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log('note created');
        notes.logNote(note);
    }else{
        console.log('Title already taken');
    }
}else if(command === 'list'){
   var allNotes = notes.getAll();
   console.log(`Printing ${allNotes.length} note(s)`);
   allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'remove'){
    var removed = notes.remove(argv.title);
    var message = removed ? 'note removed':'note not removed';
    console.log(message);

}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }

}else{
    console.log('command not recognized');
}







