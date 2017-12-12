import React from 'react';

const FilteredFruitList = ({ filter, fruit }) => {
  const list = !filter || filter === "all" ? fruit : fruit.filter(i => i.fruit_type === filter);
  const listItems = list.map((item, index) => (
    <li key={index}>{item.char}</li>
  ));
  return (
    <ul className="fruit-list">
      {listItems}
    </ul>
  );    
};

FilteredFruitList.defaultProps = {
  filter: [],
  fruit: []
}

export default FilteredFruitList;
