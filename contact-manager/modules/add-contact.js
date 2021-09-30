export const render = () => {
  const addContactContainer = document.createElement('form');
  addContactContainer.classList.add('add-contact');

  addContactContainer.innerHTML = `
    <h4 class="mb-2">
Add new contact.
    </h4>
    <label class="form-label mb-2" for="name">Name</label>
    <input type="text" id="name" name="name" class="form-control form-control-sm" placeholder="Name">

    <label class="form-label mb-2" for="surname">Surname</label>
    <input type="text" id="surname" name="surname" class="form-control form-control-sm" placeholder="Surname">

    <label class="form-label mb-2" for="email">Email</label>
    <input type="email" id="email" name="email" class="form-control form-control-sm" placeholder="Email">

    <label class="form-label mb-2" for="phone">Phone</label>
    <input type="tel" id="phone" name="phone" class="form-control form-control-sm" placeholder="Phone">

    <input type="hidden" name="id">

    <div class="mt-2">
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="cancel-add-contact btn btn-secondary">Cancel</button>
    </div>
  `;

  return addContactContainer;
};
