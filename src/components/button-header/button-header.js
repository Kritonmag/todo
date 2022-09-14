import React, { Component } from 'react';
import './button-header.css'

export default class ButtonHeader extends React.Component {

render() {
  const {buttonsHead, filter, onFilterChange} = this.props;
  const elements = buttonsHead.map((item) => {
    const isActive = filter === item.name;
    const buttonClass = isActive ? 'button-active' : 'button-inactive'
    return (
      <button className={`button-header ${buttonClass}`}
        important = {item.important}
        key = {item.id}
        onClick={() => onFilterChange(item.name)}>
        {item.label}
      </button>
    )
  })
  return(
    <span>
      {elements}
    </span>
  )
}
}