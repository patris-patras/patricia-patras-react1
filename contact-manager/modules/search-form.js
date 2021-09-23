import { contacts } from './data.js';

// scot form din DOM
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const searchString = formData.get('q');

  if (searchString.trim().length < 1) {
    return;
  }

  // refactor:
  const tempContacts = contacts.filter((contact) => {
    const values = Object.values(contact); // in values o sa am un array cu proprietatile din fiec obj-contact

    // punem .reduce() pe array-ul de values => imi iese un string cu toate elem insiruite (ca sa pot cauta prin ele apoi):
    const haystack = values.reduce((string, value) => {
      if (typeof value === 'string') {
        string += value.toLowerCase();
      }

      return string;
    }, '');

    // haystack: 'larrylarrysonlarry@yahoo.4141'
    if (haystack.includes(searchString)) {
      return true;
    }

    return false;
  });

  console.log(tempContacts);
});

export default searchForm; // bestP: exports la final doc
