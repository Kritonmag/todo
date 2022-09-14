import React from "react";
import './search-panel.css'

export default class SearchPanel extends React.Component {
  
  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term =e.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  }

  render() {
    return(
      <input placeholder="type to search"
             className="search-panel"
             onChange={this.onSearchChange}
             value={this.state.term}/>
    );
  }
}
