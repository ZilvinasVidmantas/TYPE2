const CityViewModel = require('../view-models/city-view-model')
const UserViewModel = require('../view-models/user-view-model')
const CategoryViewModel = require('../view-models/category-view-model')
class ServiceViewModel {
  static refs = ['cities', 'creator', 'category'];
  static refViewModels = {
    cities: CityViewModel,
    creator: UserViewModel,
    category: CategoryViewModel
  };
  document;

  constructor(serviceModelDoc) {
    const { SERVER_DOMAIN, SERVER_PORT, IMG_FOLDER_NAME } = process.env;
    Object.defineProperty(this, 'document', {
      enumerable: false,
      value: serviceModelDoc
    });
    this.id = serviceModelDoc._id;
    this.title = serviceModelDoc.title;
    this.price = serviceModelDoc.price;
    this.images = serviceModelDoc.images
      .map(x => `${SERVER_DOMAIN}:${SERVER_PORT}/${IMG_FOLDER_NAME}/${x.src}`);
    this.description = serviceModelDoc.description;
    // refs
    this.category = serviceModelDoc.category;
    this.cities = serviceModelDoc.cities;
    this.creator = serviceModelDoc.creator;
    // time
    this.createdAt = serviceModelDoc.createdAt;
    this.updatedAt = serviceModelDoc.updatedAt;
  }

  async populate(...params) {
    const props = params.length > 0 ? params : ServiceViewModel.refs;
    await Promise.all(props.map(x => this.document.populate(x)));
    props.forEach(key => {
      const value = this.document[key];
      const valueViewModel = value instanceof Array
        ? value.map(x => new ServiceViewModel.refViewModels[key](x))
        : new ServiceViewModel.refViewModels[key](value)
      this[key] = valueViewModel
    });

    return this;
  }
}

module.exports = ServiceViewModel;