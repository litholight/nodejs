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
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing the note.");
  }
});

//create list command
yargs.command({
  command: "list",
  describe: "list the notes",
  handler: function() {
    console.log("Listing the notes.");
  }
});

//create remove command

// add, remove, read, list

yargs.parse();