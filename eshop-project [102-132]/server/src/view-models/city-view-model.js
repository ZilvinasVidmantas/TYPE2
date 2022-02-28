class CityViewModel {
  constructor(cityDoc) {
    const id = cityDoc._id;
    const title = cityDoc.title;
    const createdAt = cityDoc.createdAt;
    const updatedAt = cityDoc.updatedAt;
  }
}

module.exports = CityViewModel;