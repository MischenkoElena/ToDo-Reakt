import React from 'react';
import ReactDOM from 'react-dom';


let TaskItem = React.createClass({
  getInitialState: function () {
    return  {nonEditableTask: true}
  },
  componentWillMount: function() {
    this.setState(this.props);
    // this.setState({nonEditableTask: true});
  },
  onStateChange: function () {
    this.setState((prevState) => ({
      complitedState: !prevState.complitedState
    }));
  },
  onEdit: function () {
    this.setState({nonEditableTask: false}, function(){
      ReactDOM.findDOMNode(this.refs.taskName).focus()
    });
  },
  onSave: function (e) {
    this.props.onEditTask(e.target.closest('li').getAttribute('id'), ReactDOM.findDOMNode(this.refs.taskName).value);
    this.setState({nonEditableTask: true});
  },
  onCancel: function (e) {
    ReactDOM.findDOMNode(this.refs.taskName).value = this.props.data.name;
    this.setState({nonEditableTask: true});
  },
  onDeleteItem:function (e) {
    this.props.onDeleteTask(e.target.closest('li').getAttribute('id'));
  },

  render: function() {
    return (
      <li className="task" id={this.props.dataId}>
        <input type="text" className={(this.state.complitedState) ? "task-name completed" : "task-name incompleted"} ref="taskName" defaultValue={this.props.data.name} onClick={this.onStateChange} disabled={this.state.nonEditableTask} />
        <button className={(this.state.nonEditableTask) ? "task-btn" : "task-btn hidden"} onClick={this.onDeleteItem}>Delete</button>
        <button className={(this.state.nonEditableTask) ? "task-btn" : "task-btn hidden"} onClick={this.onEdit}>Edit</button>
        <button className={(this.state.nonEditableTask) ? "task-btn hidden" : "task-btn"} onClick={this.onCancel}>Cancel</button>
        <button className={(this.state.nonEditableTask) ? "task-btn hidden" : "task-btn"} onClick={this.onSave}>Save</button>
      </li>
    )
  }
});

export default TaskItem;