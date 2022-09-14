import React from "react";
import './todo-list-item.css'

export default class TodoListItem extends React.Component {

    render() {
      const { label, onDeleted,
              onToggleImportant ,onToggleDone,
              done, important } = this.props;

      let className = 'todo-list-item'
      if (done) {
        className += ' done'
      };

      if(important) {
        className += ' important'
      };

      return (
        <div className="flex">
            <div 
              className={className}
              onClick={onToggleDone}>
              {label}
            </div>
            <span>
              <button 
                className="button-item delete"
                onClick={onDeleted}>
                Delete
              </button>
              <button 
                className="button-item button-important"
                onClick={onToggleImportant}>
                Important
              </button>
          </span>
        </div>  
      )
  };
};