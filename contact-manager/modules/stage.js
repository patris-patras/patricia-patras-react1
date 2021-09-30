import { contacts } from './data.js';
import { render as renderEditForm } from './edit-contact.js';
import { render, render as renderMessage } from './message.js';
import { addMessage, clearMessages } from './notification-bar.js';
import { addContact, deleteContact, editContact, getContact } from './query.js';

const stage = document.querySelector('.stage');

// delete contact button
stage.addEventListener('click', (event) => {
  const button = event.target; // event delegation. currentTarget era stage

  if (
    button.nodeName === 'BUTTON' &&
    button.classList.contains('delete-contact')
  ) {
    const contactId = button.dataset.contactId;
    // console.log(`Delete contact ${contactId}`);

    deleteContact(contactId);

    const contactContainer = button.closest('.contact'); // .closest() = cauta in sus pana ajunge la un anumit element
    contactContainer.remove();

    // ca sa scot msj cu "Found 1 contact.", schimba in "Contact removed.":
    const messageContainer = renderMessage('Contact removed.', 'success');
    addMessage(messageContainer);
  }
});

// edit contact button
stage.addEventListener('click', (event) => {
  const button = event.target;

  if (
    button.nodeName === 'BUTTON' &&
    button.classList.contains('edit-contact')
  ) {
    const contactId = button.dataset.contactId;
    const contact = getContact(contactId);

    if (!contact) {
      return;
    }

    clearStage();
    stage.append(renderEditForm(contact));
  }
});

// cancel edit contact
stage.addEventListener('click', (event) => {
  const button = event.target;

  if (
    button.nodeName === 'BUTTON' &&
    (button.classList.contains('cancel-edit-contact') ||
      button.classList.contains('cancel-add-contact'))
  ) {
    clearStage();
    clearMessages();
  }
}); // || button.classList.contains('cancel-add-contact') => ca sa nu fac inca o data totul ptr cancel si ptr add-cancel

// execute edit contact
stage.addEventListener('submit', (event) => {
  const form = event.target; // Kind reminder: target = evenimentul de pe care a plecat eventul

  if (form.nodeName === 'FORM' && form.classList.contains('edit-contact')) {
    event.preventDefault();

    const formData = new FormData(form);
    const contact = {};
    const entries = formData.entries();
    let currentEntry = entries.next();

    while (currentEntry.done === false) {
      const [inputName, inputValue] = currentEntry.value;

      contact[inputName] = inputValue;

      currentEntry = entries.next();
    } // acum contine toata info din formular

    editContact(contact.id, contact);

    const successMessage = renderMessage(
      `Contact ${contact.name} ${contact.surname} saved.`,
      'success',
    );
    addMessage(successMessage);

    clearStage();

    setTimeout(() => {
      clearMessages();
    }, 1500);
  }
});

// execute add contact
stage.addEventListener('submit', (event) => {
  const form = event.target;

  if (form.nodeName === 'FORM' && form.classList.contains('add-contact')) {
    event.preventDefault();

    const formData = new FormData(form);
    const contact = {};
    const entries = formData.entries();
    let currentEntry = entries.next();

    while (currentEntry.done === false) {
      const [a, b] = currentEntry.value; // value e proprietate
      contact[a] = b;

      currentEntry = entries.next();
    }

    contact.id = contacts.length + 1;

    addContact(contact);

    const successMessage = renderMessage(
      `Contact ${contact.name} ${contact.surname} added.`,
      'success',
    );
    addMessage(successMessage);

    clearStage();
  }
});

export const clearStage = () => {
  stage.innerHTML = '';
};

export default stage;

// debugger; kw care pune un breakpoint
