import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <select onChange={this.props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {this.props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
  }
}

export default Filter;
