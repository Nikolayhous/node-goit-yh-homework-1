const argv = require("yargs").argv;

const { listContacts, addContacts } = require("./contacts.js");

console.log("contacts:", listContacts());

console.log("contacts:", addContacts());
