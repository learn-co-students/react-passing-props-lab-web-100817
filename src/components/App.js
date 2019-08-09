import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      filters: [],
      selectedFilter: null,
      items: []
    }
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
      return (
        <FruitBasket
          filters={this.state.filters}
          selectedFilter={this.state.selectedFilter}
          items={this.state.items}
          handleFilterChange={this.handleFilterChange}
        />
      )
    }
}

export default App;
