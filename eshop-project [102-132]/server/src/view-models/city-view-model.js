const { dateStr2DateTime } = require('../helpers/date-helpers');

class CityViewModel {
  constructor(cityDoc) {
    this.id = cityDoc._id;
    this.title = cityDoc.title;
    this.createdAt = dateStr2DateTime(cityDoc.createdAt);
    this.updatedAt = dateStr2DateTime(cityDoc.updatedAt);
  }
}

module.exports = CityViewModel;