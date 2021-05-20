const util = require('util');
const fs = require('fs');

//this package will be used to generate a unique id 
const uuidv1 = require('uuid');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//create out class

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }

    //create a function to getNotes
    getNotes() {
        console.log("get notes")
        return this.read()
            .then((notes) => {
                let parsedNotes = JSON.parse(notes);
                // console.log(parsedNotes);
                return parsedNotes;
            })
    }
    addNotes(note) {
        const { title, text } = note;
        const userNote = { title, text, id: uuidv1.v1() }
        return this.getNotes()
            .then(notes => [...notes, userNote])
            .then(newNotes => this.write(newNotes))
            .then(() => userNote)
    }
    removeNote(id) {
        // console.log("remove notes");
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== (id)))
            .then(updatedNotes => this.write(updatedNotes))
    }

}


module.exports = new Store();