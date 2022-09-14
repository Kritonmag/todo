import React from "react";

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'

const TodoList = ({todos, onDeleted,
  onToggleImportant,onToggleDone}) => {

  const elements = todos.map((item) => {
    return(
    <li key = {item.id}>
      <TodoListItem
      { ... item }
      onDeleted={() => onDeleted(item.id)}
      onToggleImportant={() => onToggleImportant(item.id)}
      onToggleDone={() => onToggleDone(item.id)}
      />
    </li>
    )
  })

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
};
 
export default TodoList;