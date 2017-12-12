import React, { Component } from 'react';
import FruitBasket from './FruitBasket';

class App extends Component {
  state = {
    filters: [],
    currentFilter: null,
    fruit: []
  };

  handleFilterChange = event => {
    console.log("new filter: ", event.target.value);
    this.setState({ selectedFilter: event.target.value });
  };

  componentWillMount() {
    this.fetchFilters();
    fetch("/api/fruit")
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch("/api/fruit_types")
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  };

  render() {
    return (
      <FruitBasket
        updateFilterCallback={this.handleFilterChange}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        fruit={this.state.fruit}
      />
    );
  }
}

export default App;
