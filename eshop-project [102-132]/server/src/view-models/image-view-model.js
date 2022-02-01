class ImageViewModel {
  constructor({ _id, src, createdAt, updatedAt }) {
    this.id = _id;
    this.src = src;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = ImageViewModel;
