const fs = require("node:fs/promises");
const path = require("node:path");

const contactsPath = path.join(__dirname, "contacts.json");
console.log(contactsPath);