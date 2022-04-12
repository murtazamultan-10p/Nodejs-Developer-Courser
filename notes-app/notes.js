const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => "This is a note from node.js file";

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json');
        const notesString = notesBuffer.toString();
        const notesJSON = JSON.parse(notesString);
        return notesJSON;
    } catch(e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(
        (note) => note.title === title
    );

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        console.log(chalk.green.bold(`Title "${title}" added to the Note!`));
        saveNotes(notes);
    } else {
        console.log(chalk.red.bold(`Title "${title}" already taken!`));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const updatedNotes = notes.filter(
        (note) => note.title !== title
    );

    if (notes.length === updatedNotes.length) {
        console.log(chalk.red.bold(`Note with title "${title}" not found`));
    }
    else{
        console.log(chalk.green.bold(`Note "${title}" deleted!`));
        saveNotes(updatedNotes);
    }
    
}

const readNote = (title) => {
    const notes = loadNotes();
    const requestedNotes = notes.filter(
        (note) => note.title === title
    );

    if (requestedNotes.length > 0) {
        console.log(requestedNotes[0]);
    } else {
        console.log(chalk.red.bold(`No Note with title "${title}" found`));
    }

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(notes);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}