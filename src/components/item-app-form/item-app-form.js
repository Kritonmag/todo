import React from "react";

import './item-app-form.css'

export default class ItemAddForm extends React.Component {
  
  state = {
    label: ''
  };


  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="flex"
            onSubmit={this.onSubmit}>
        <input className="item-app-input"
               type='text'
               onChange={this.onLabelChange}
               placeholder='What needs to be done'
               value={this.state.label}/>
        <button 
          className="item-app-button">
          Add Item
        </button>
      </form>
    );
  };
};
