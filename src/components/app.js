import React from 'react';
import { render } from 'react-dom';
import TaskList from './taskList/taskList'
import AddTaskForm from './formAdd/formAddTask.js'

// var my_news = [
//   {
//     author: 'Саша Печкин',
//     text: 'В четверг, четвертого числа...'
//   },
//   {
//     author: 'Просто Вася',
//     text: 'Считаю, что $ должен стоить 35 рублей!'
//   },
//   {
//     author: 'Гость',
//     text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
//   }
// ];

var todoList = window.localStorage.getItem('todoList') || {};

var App = React.createClass({
  getInitialState: function() {
    return {
      todoList: todoList
    };
  },
  render: function() {
    console.log('render');
    return (
      <div className="app">
        ToDo List.
        <AddTaskForm newsAdd={this.newsAddMethod} />
        <TaskList  data={this.state.todoList}/>
      </div>
    );
  }
});

export default App;