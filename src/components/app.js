import React from 'react';
import { render } from 'react-dom';
import TaskList from './taskList/taskList'
import AddTaskForm from './formAdd/formAddTask.js'

var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

var App = React.createClass({
  render: function() {
    return (
    <div className="app">
    Всем привет, я компонент App! Я умею отображать новости.
    <AddTaskForm />
    <TaskList  data={my_news}/>
    </div>
    );
  }
});

export default App;