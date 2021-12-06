/**
 * Created filters by given collection for contructor
 */
class FilterBuilder {
  /**
   * Crates a intance, which will be used to create filters
   * 
   * @param {Array} collection collection on which filter will be created
   */
  constructor(collection) {
    this.collection = collection;
  }

  /**
   * Creates filter based on collection given in constructor and options
   * 
   * 
   * @param {Object} options  Options for range filter 
   * @param {string} options.prop property on which filter will be created based on this.collection
   * @param {string} options.title filter title for view representation.
   * 
   * @returns {Object} checkboxGroup filter object
   */
  checkboxGroup = ({ prop, title }) => {
    const entities = this.collection.map(entity => entity[prop]);
    const uniqEntities = [...new Set(entities)];
    const options = uniqEntities.map(name => ({ name, selected: true }));

    return {
      name: prop,
      type: 'checkboxGroup',
      title: title,
      options
    }
  };

  /**
   * Created filter based on collection given in constructor and options
   * 
   * @param {Object} options  Options for range filter 
   * @param {string} options.prop property on which filter will be created based on this.collection
   * @param {string} options.title filter title for view representation.
   * 
   * @returns {Object} range filter object
   */
  range = ({ prop, title }) => {
    const values = this.collection.map(entity => entity[prop]);
    const uniqValues = values.sort((a, b) => a - b);
    const min = uniqValues.shift();
    const max = uniqValues.pop();

    return {
      name: prop,
      type: 'numberRange',
      title: title,
      min,
      max,
      selectedMin: min,
      selectedMax: max,
    }
  }

  /**
   * Common method for filter creation
   * 
   * @param {string} type filter type 
   * @param {Object} options filter options
   * 
   * @returns filter object
   */
  createFilter = (type, options) => {
    if (!this[type]) throw new TypeError('FuilterBuilder does not support filter with type:', type);

    return this[type](options);
  }
}

export default FilterBuilder;