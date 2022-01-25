const ImageViewModel = require('./image-view-model');

class UserViewModel {
  constructor({ _id, email, role, name, surname, mainImg, images, createdAt, updatedAt }) {
    console.log({
      mainImg, images
    })
    this.id = _id;
    this.email = email;
    this.role = role;
    this.name = name;
    if (mainImg) {
      this.mainImg = new ImageViewModel(mainImg);
    }
    if (images.length > 0) {
      this.images = images.map(x => new ImageViewModel(x));
    }
    this.surname = surname;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
