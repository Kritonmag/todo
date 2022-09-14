import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ButtonHeader from '../button-header/button-header'
import ItemAddForm from '../item-app-form';

import './app.css'

export default class App extends React.Component {

maxId = 100;

  state = {
    todoDate: [
      this.createTodoItem('Drink cola'),
      this.createTodoItem('Make App'),
      this.createTodoItem('Have a lunch')
    ],
    buttonsHeader: [
      {label: 'All', name: 'all', id: 1},
      {label: 'Active', name: 'active', id: 2},
      {label: 'Done', name: 'done', id: 3}
    ],
    term: '',
    filter: 'done'
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoDate}) => {
      const idx = todoDate.findIndex((el) => el.id === id);

      const newArrey = [ 
        ...todoDate.slice(0, idx), 
        ...todoDate.slice(idx + 1)
      ];

      return {
        todoDate: newArrey
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({todoDate}) => {
      const newArr = [
        ...todoDate,
        newItem
      ];
      return{
        todoDate: newArr
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {... oldItem,
      [propName]: !oldItem[propName]}
      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ]
  }

  onToggleImportant = (id) => {
    this.setState(({todoDate}) => {
      return {
        todoDate: this.toggleProperty(todoDate, id, 'important')
      };
    });
  }

  onToggleDone = (id) => {
    this.setState(({todoDate}) => {
    return {
      todoDate: this.toggleProperty(todoDate, id, 'done')
    };
  });
 };

 search(items, term) {
  if (term.lenght == 0) {
    return items;
  };

  return items.filter((item) => {
    return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
  });
 };

 onSearchChange = (term) => {
  this.setState({term});
 };

 filter(items, filter) {
  switch(filter) {
    case 'all':
      return items;
    case 'active':
      return items.filter((item) => !item.done);
    case 'done':
      return items.filter((item) => item.done);
    default:
      return items;
  }
 }

 onFilterChange = (filter) => {
  this.setState({filter})
 }

  render() {

    const {todoDate, term, filter} = this.state;
    const visibletItems = this.filter(
      this.search(todoDate, term), filter);

    return (
      <div className='app'> 
        <AppHeader />
        <div>
          <SearchPanel 
            onSearchChange={this.onSearchChange}/>
          <ButtonHeader 
            buttonsHead = {this.state.buttonsHeader}
            filter={filter}
            onFilterChange={this.onFilterChange}/>
        </div>
        <TodoList 
          todos = {visibletItems}
          onDeleted={ this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    )
  }
};