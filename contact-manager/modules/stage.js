import { render as renderEditForm } from './edit-contact.js';
import { render as renderMessage } from './message.js';
import { addMessage, clearMessages } from './notification-bar.js';
import { deleteContact, getContact } from './query.js';

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
    button.classList.contains('cancel-edit-contact')
  ) {
    clearStage();
    clearMessages();
  }
});

export const clearStage = () => {
  stage.innerHTML = '';
};

export default stage;
