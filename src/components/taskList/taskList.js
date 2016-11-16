import React from 'react';
import TaskItem from '../taskItem/taskItem'

var TaskList = React.createClass({
  render: function() {
    var data = this.props.data;
    var newsTemplate;
    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
        <div key={index}>
        <TaskItem data={item} />
        </div>
        )
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    };
  return (
    <div className="news">
    {newsTemplate}
    </div>
    );
  }
});

export default TaskList;