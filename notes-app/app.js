const chalk = require('chalk');
const notes = require('./notes.js');

// const colorLog = chalk.green.bold('Success!');
// console.log(colorLog);

const yargs = require('yargs');
yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List a Note',
    handler() {
        notes.listNotes();
    }
});

console.log(yargs.argv);