import React from 'react';
import TaskItem from '../taskItem/taskItem'

var TaskList = React.createClass({
  // getInitialState: function() {
  //   return {
  //     data: this.props.data
  //   };
  // },
  updateDelList: function(item) {
    this.props.onDelete(item);
  },
  updateEditList: function(item, value) {
    this.props.onEdit(item, value);
  },

  render: function() {
    let self = this,
      data = this.props.data,
      tasksTemplate;
    if (data.length > 0) {
      let taskItems = data.map(function(item, index) {
        return <TaskItem data={item} key={index} dataId={item.id} onDeleteTask={self.updateDelList} onEditTask={self.updateEditList} />
      });
      tasksTemplate = <ul className="task-list" > {taskItems} </ul>
      } else {
      tasksTemplate = <p>Записи отсутствуют</p>
    }
    return (
      <div className="tasks-list-wrap" >
        {tasksTemplate}
      </div>
    );
  }
});

export default TaskList;