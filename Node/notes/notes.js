const fs = require('fs');

 var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
        
        }catch(e){
            console.log(e);
            return []; //fetching empty array 
        };

   
 };

 var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
var addNote = (title,body) => {
   var notes = fetchNotes();
   var note = {
       title: title, //can do it this way
       body // or this
   } 
  
    var duplicateNotes = notes.filter((note)=> note.title === title); //returns the array if there is a note wiht the title
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
}
var remove = (title) =>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length != filteredNotes.length;
}
var getNote = (title) =>{
    var notes = fetchNotes();
    var FilteredNotes =  notes.filter((note) => note.title === title);
    return FilteredNotes[0];

}
var logNote = (note) =>{
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
module.exports= {
addNote,   // if you are setting the variable to the attribute and they are identical you can just specify 
getAll,
remove,
getNote,
logNote
};

