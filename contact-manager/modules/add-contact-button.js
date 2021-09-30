import { clearMessages } from './notification-bar.js';
import stage, { clearStage } from './stage.js';
import { render as renderAddContact } from './add-contact.js';
// dif de sintaxa: stage e export default

const addContactButton = document.querySelector('.add-contact-button');

addContactButton.addEventListener('click', () => {
  clearStage();
  clearMessages();

  stage.append(renderAddContact());
});

export default addContactButton;
