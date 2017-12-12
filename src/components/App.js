import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        filters={this.state.filters}
        handleFilterChange={this.handleFilterChange}
        currentFilter={this.state.currentFilter}
        fruitList={this.state.fruit}
        />
    )
  }
}

export default App;
