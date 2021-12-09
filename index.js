const argv = require("yargs").argv;
const { listContacts, addContacts } = require("./contacts.js");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "add":
      addContacts(name, email, phone);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
