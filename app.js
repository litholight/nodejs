const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");

// const command = process.argv[2];

// customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      description: "",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "title to be removed",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

//create list command
yargs.command({
  command: "list",
  describe: "list the notes",
  handler(argv) {
    console.log("Listing the notes.");
    notes.listNotes();
  }
});

//create remove command

// add, remove, read, list

yargs.parse();
