class UserViewModel {
  constructor({ _id, email, name, surname, createdAt, updatedAt }) {
    this.id = _id;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
