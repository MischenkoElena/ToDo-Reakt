import React from 'react';
import { render } from 'react-dom';
import TaskList from './taskList/taskList'
import AddTaskForm from './formAdd/formAddTask.js'

let todoListStorage = JSON.parse(window.localStorage.getItem('todoList')) || [];

let App = React.createClass({
  getInitialState: function() {
    return {todoList: todoListStorage, addedState: true};
  },
  isDublicate: function (item) {
    let tasks = this.state.todoList,
      isDublicate = false;
    tasks.forEach(function (el) {
      if (el.name == item) isDublicate = true;
    });
    return isDublicate;
  },
  addError: function () {
    console.log('duplicate');
    this.setState({addedState: false});
  },
  updateTasks: function (newItem) {
    let count = this.state.todoList.length;
    let id = (count > 0) ? 'id' + (parseInt(this.state.todoList[count - 1].id.slice(2)) + 1) : 'id0';
    let allItems = this.state.todoList.concat([{'name': newItem, 'id': id}]);
    this.setState({todoList: allItems});
    window.localStorage.setItem('todoList', JSON.stringify(allItems));
  },
  addItems: function(newItem){
    if (this.isDublicate(newItem)) {
      this.addError();
    } else {
      this.setState({addedState: true}, function () {this.updateTasks(newItem)});
    }
  },
  deleteItems: function(deletedItem) {
    let newList = this.state.todoList.filter(function(el) {
      return el.id !== deletedItem;
    });
    this.setState({todoList: newList});
    window.localStorage.setItem('todoList',  JSON.stringify(newList));
  },
  editItems: function(editedTask, value) {
    let editedList = this.state.todoList.map(function(el) {
      if (el.id == editedTask) el.name = value;
      return el;
    });
    this.setState({todoList: editedList});
    window.localStorage.setItem('todoList',  JSON.stringify(editedList));
  },
  render: function() {
    console.log('render App', this.state.addedState)
    return (
      <div className="app">
        ToDo List.
        <AddTaskForm success={this.state.addedState} onFormSubmit={this.addItems} />
        <span className={(this.state.addedState) ? 'hidden' : ''}>Entered task is duplicate</span>
        <TaskList data={this.state.todoList} onDelete={this.deleteItems} onEdit={this.editItems} />
      </div>
    );
  }
});

export default App;