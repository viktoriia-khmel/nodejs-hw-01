import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
