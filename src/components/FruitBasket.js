import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({items, filters, selectedFilter, handleFilterChange}) =>
      <div className="fruit-basket">
        <Filter handleChange={handleFilterChange} filters={filters} />
        <FilteredFruitList
          filter={selectedFilter}
          items={items}
         />
      </div>;

  FruitBasket.defaultProps = {
    items: [],
    filters: [],
    selectedFilter: null,
    handleFilterChange: () => {}
  };

export default FruitBasket;
