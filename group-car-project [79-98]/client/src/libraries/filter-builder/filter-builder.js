/**
 * Created filters by given collection for contructor
 */
class FilterBuilder {
  /**
   * Crates a intance, which will be used to create filters
   *
   * @param {Array} collection collection on which filter will be created
   */
  constructor(collection = []) {
    this.collection = collection;
    this.filters = [];
    this.setCollection = this.setCollection.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.createTestFunctions = this.createTestFunctions.bind(this);
    this.checkboxGroup = this.checkboxGroup.bind(this);
    this.range = this.range.bind(this);
    this.createFilter = this.createFilter.bind(this);
  }

  setCollection(newCollection) {
    this.collection = newCollection;
    return this;
  }

  updateFilter({ filterName, ...props }) {
    const { filters } = this;

    let newFilters;
    const filterType = filters.find((filter) => filter.name === filterName)
      .type;

    switch (filterType) {
      case 'checkboxGroup': {
        const { name, selected } = props;
        newFilters = filters.map((filter) => ({
          ...filter,
          options:
            filter.name === filterName
              ? filter.options.map((option) => ({
                ...option,
                selected: option.name === name ? selected : option.selected,
              }))
              : filter.options,
        }));
        break;
      }

      case 'numberRange': {
        const { min, max } = props;
        newFilters = filters.map((filter) => {
          const updatedFilter = { ...filter };

          if (filter.name === filterName) {
            updatedFilter.selectedMin = min;
            updatedFilter.selectedMax = max;
          }
          return updatedFilter;
        });
        break;
      }

      default:
        console.error('Tokio filtro tipo nėra');
    }
    this.filters = newFilters;
    return this;
  }

  createTestFunctions() {
    return this.filters.map(
      ({
        name, type, options, selectedMin, selectedMax,
      }) => {
        switch (type) {
          case 'checkboxGroup': {
            const values = options.filter((x) => x.selected).map((x) => x.name);
            return (entity) => values.includes(entity[name]);
          }

          case 'numberRange':
            return (entity) => {
              const numValue = entity[name];
              return numValue <= selectedMax && numValue >= selectedMin;
            };
          default:
            throw TypeError('Tokio filtro tipo nėra');
        }
      },
    );
  }

  /**
   * Creates filter based on collection given in constructor and options
   *
   *
   * @param {Object} options  Options for range filter
   * @param {string} options.prop property on which filter will be created based on this.collection
   * @param {string} options.title filter title for view representation.
   *
   * @returns {FilterBuilder} same FilterBuilder instance
   */
  checkboxGroup({ prop, title }) {
    const entities = this.collection.map((entity) => entity[prop]);
    const uniqEntities = [...new Set(entities)];
    const options = uniqEntities.map((name) => ({ name, selected: true }));

    this.filters.push({
      name: prop,
      type: 'checkboxGroup',
      title,
      options,
    });

    return this;
  }

  /**
   * Created filter based on collection given in constructor and options
   *
   * @param {Object} options  Options for range filter
   * @param {string} options.prop property on which filter will be created based on this.collection
   * @param {string} options.title filter title for view representation.
   *
   * @returns {FilterBuilder} same FilterBuilder instance
   */
  range({ prop, title }) {
    const values = this.collection.map((entity) => entity[prop]);
    const uniqValues = values.sort((a, b) => a - b);
    const min = uniqValues.shift();
    const max = uniqValues.pop();

    this.filters.push({
      name: prop,
      type: 'numberRange',
      title,
      min,
      max,
      selectedMin: min,
      selectedMax: max,
    });

    return this;
  }

  /**
   * Common method for filter creation
   *
   * @param {string} type filter type
   * @param {Object} options filter options
   *
   * @returns {FilterBuilder} same FilterBuilder instance
   */
  createFilter(type, options) {
    if (!this[type]) {
      throw new TypeError(
        'FuilterBuilder does not support filter with type:',
        type,
      );
    }

    return this[type](options);
  }
}

export default FilterBuilder;
