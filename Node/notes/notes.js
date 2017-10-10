console.log('Starting notes.js');
const fs = require('fs');
var addNote = (title,body) => {
   var notes = [];
   var note = {
       title: title, //can do it this way
       body // or this
   } 
   try{
   var notesString = fs.readFileSync('notes-data.json');
   notes = JSON.parse(notesString);
   
   }catch(e){
       console.log(e);
   }
    var duplicateNotes = notes.filter((note)=> note.title === title); //returns the array if there is a note wiht the title
    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    }

   
   console.log('Adding note',title,body);
};

var getAll = () => {
    console.log('Getting all notes');
}
var remove = (title) =>{
    console.log('removing note', title);
}
var getNote = (title) =>{
    console.log('getting note ',title);
}
module.exports= {
addNote,   // if you are setting the variable to the attribute and they are identical you can just specify 
getAll,
remove,
getNote
};