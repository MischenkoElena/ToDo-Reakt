import React from 'react';

var AddTaskForm = React.createClass({
  render: function() {
    return (
    <form className="add-form">
    <input type='text' placeholder='Task Text' />
    <button type='submit'>Add Task</button>
    </form>
    )
  }
});

export default AddTaskForm;