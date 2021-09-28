export const render = (contact) => {
  const editContactContainer = document.createElement('form');
  editContactContainer.classList.add('edit-contact');
  const { name, surname, email, phone, id } = contact;

  editContactContainer.innerHTML = `
    <h4 class="mb-2">
      Editing contact ${name} ${surname} (id: ${id}).
    </h4>
    <label class="form-label mb-2" for="name">Name</label>
    <input type="text" id="name" name="name" class="form-control form-control-sm" value="${name}">

    <label class="form-label mb-2" for="surname">Surname</label>
    <input type="text" id="surname" name="surname" class="form-control form-control-sm" value="${surname}">

    <label class="form-label mb-2" for="email">Email</label>
    <input type="email" id="email" name="email" class="form-control form-control-sm" value="${email}">

    <label class="form-label mb-2" for="phone">Phone</label>
    <input type="tel" id="phone" name="phone" class="form-control form-control-sm" value="${phone}">

    <input type="hidden" name="id" value="${id}">

    <div class="mt-2">
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="cancel-edit-contact btn btn-secondary">Cancel</button>
    </div>
  `;

  return editContactContainer;
};
