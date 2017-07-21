import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onChangeHandle(event) {
    this.props.onSearchChange(event)
  }
  render() {
    return(
      <div className="search-bar">
        <input onChange={event => this.onChangeHandle(event.target.value)}/>
      </div>
    )
  }
}

export { SearchBar };
