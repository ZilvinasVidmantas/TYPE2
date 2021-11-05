const urlBase = 'http://localhost:3000';

const getUsers = (success, failure) => {
  fetch(urlBase + '/users')
    .then(response => response.json())
    .then(success)
    .catch(failure);
}

const deleteUser = (success, failure, id) => {
  fetch(urlBase + '/users/' + id , { method: 'DELETE' })
  .then(success)
  .catch(failure);
}

const API = {
  getUsers,
  deleteUser
};