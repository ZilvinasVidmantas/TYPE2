class ImageViewModel {
  constructor({ _id, src, createdAt, updatedAt }) {
    const { SERVER_PORT, SERVER_DOMAIN, IMG_FOLDER_NAME} = process.env;
    this.id = _id;
    this.src = `${SERVER_DOMAIN}:${SERVER_PORT}/${IMG_FOLDER_NAME}/${src}`;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = ImageViewModel;
