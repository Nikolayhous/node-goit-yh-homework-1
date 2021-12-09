const argv = require("yargs").argv;
const {
  listContacts,
  addContact,
  getContactById,
  removeContact,
} = require("./contacts.js");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "get":
      getContactById(id);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
