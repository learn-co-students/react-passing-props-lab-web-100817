import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class FruitBasket extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      selectedFilter: null,
      items: []
    };
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  componentWillMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));

    this.fetchFilters();

  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render() {
    console.log(this.state.filters)
    return (
      <div className="fruit-basket">
        <Filter handleChange={this.handleFilterChange} filters={this.state.filters} />
        <FilteredFruitList
          filter={this.state.selectedFilter}
          items={this.state.items}
         />
      </div>
    );
  }
}

export default FruitBasket;
