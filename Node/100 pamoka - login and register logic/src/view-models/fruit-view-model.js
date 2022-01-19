class FruitViewModel {
  constructor({ _id, name, price, createdAt, updatedAt }) {
    this.id = _id;
    this.name = name;
    this.price = price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = FruitViewModel;
